// https://getstream.io/chat/react-chat/tutorial/
"use client"
import { Chat, useCreateChatClient } from 'stream-chat-react';

// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'late-field-1';
const userName = 'late';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGF0ZS1maWVsZC0xIiwiZXhwIjoxNzYwMTA0OTk0fQ.vScv-opJLxkNO5EsLByLIYGS7RyohRglbj41N6Oqwoc';


export default function ChatForum() {

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: { id: userId, name: userName },
  });

   if (!client) return <div>Setting up client & connection...</div>;

  return <div className="chat text-white">
  <Chat client={client}>Chat with client is ready!</Chat></div>;
}