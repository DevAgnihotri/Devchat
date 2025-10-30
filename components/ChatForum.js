"use client"
// https://getstream.io/chat/react-chat/tutorial/
import React from 'react'

import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';
import { useUser } from "@clerk/nextjs";
import { Spinner } from "@/components/ui/spinner";


/*
  === User's original ChatForum (commented out per request) ===

  Note: preserved for reference. It's commented out so it won't run.

const ChatForum = ({clerkUser, slug}) => {
  // your Stream app information
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || '';
  const userId = clerkUser?.id;
  const userName = clerkUser?.name || 'User';
  const userToken = clerkUser?.token;

  const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client || !userToken || !slug) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: slug.toUpperCase() + " Discussion",
      members: [userId],
    });

    setChannel(channel);
  }, [client, slug, userToken, userId]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <div></div>
  )
}

export default ChatForum

  === End of user's original ChatForum ===
*/

// Inner client component: only rendered once we have a valid userToken
function InnerChatForum({ apiKey, userId, userName, userToken, slug }) {
  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState();
  const client = useCreateChatClient({ apiKey, tokenOrProvider: userToken, userData: user });

  useEffect(() => {
    if (!client || !userToken || !slug) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: slug.toUpperCase() + ' Discussion',
      members: [userId],
    });

    setChannel(channel);
  }, [client, slug, userToken, userId]);

  if (!client) return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" className="text-indigo-500" />
        <p className="text-white/70">Setting up client & connection...</p>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full">
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}

// Wrapper component: uses Clerk's client-side hook to get the user and token
export default function ChatForum({ slug }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [mounted, setMounted] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [tokenRequested, setTokenRequested] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || '';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Auto-request token if user is loaded but token is missing
    if (mounted && isLoaded && isSignedIn && user && !userToken && !tokenRequested) {
      setTokenRequested(true);
      
      // Check if token exists in metadata first
      const existingToken = user.publicMetadata?.token;
      if (existingToken) {
        setUserToken(existingToken);
        return;
      }

      // Otherwise, mint a new token
      console.log('Minting new token for user:', user.id);
      fetch('/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: { id: user.id } }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Token API response:', data);
          // The token might be in the response or we need to reload user metadata
          if (data?.token) {
            setUserToken(data.token);
          } else {
            // Fallback: check metadata again after a brief delay
            setTimeout(() => {
              const token = user.publicMetadata?.token;
              if (token) setUserToken(token);
            }, 1000);
          }
        })
        .catch((err) => {
          console.error('Failed to mint token:', err);
          setTokenRequested(false); // Allow retry
        });
    }
  }, [mounted, isLoaded, isSignedIn, user, userToken, tokenRequested]);

  // Prevent hydration mismatch by not rendering auth-dependent content until mounted
  if (!mounted) return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-3">
        <Spinner className="text-indigo-500" />
        <p className="text-white/70">Loading chat...</p>
      </div>
    </div>
  );
  
  if (!isLoaded) return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-3">
        <Spinner className="text-indigo-500" />
        <p className="text-white/70">Loading user...</p>
      </div>
    </div>
  );
  
  if (!isSignedIn || !user) return <div className="min-h-screen flex items-center justify-center">Please sign in to use chat.</div>;

  const userId = user.id;
  const userName = user.firstName || user.fullName || 'User';

  if (!userToken) return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-3">
        <Spinner className="text-indigo-500" />
        <p className="text-white/70">Waiting for chat token... (minting if needed)</p>
      </div>
    </div>
  );

  return <InnerChatForum apiKey={apiKey} userId={userId} userName={userName} userToken={userToken} slug={slug} />;
}
