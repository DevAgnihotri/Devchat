
//https://getstream.io/chat/docs/react/tokens_and_authentication/

import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "9r99ech5b2pn";
const api_secret = "fhvvdxqxgnqzj9m77w8kju5mk24zqnrmxubr9d3kcdka4bdtagmsfxteqqq28tp8";
// const user_id = "user_33q3v6UwIdMozuMvXbUNKvTBDhQ";

export async function POST(request) {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED")
    const client = await clerkClient();
    await serverClient.upsertUser({ id: user.data.id });

    //Update Clerk user metadata with the correct API
    try {
      await client.users.updateUser(user.data.id, { 
        publicMetadata: { token } 
      });
      console.log('Updated Clerk user metadata with token');
    } catch (err) {
      console.warn('Failed to update Clerk user metadata, continuing', err);
    }


    //Give access to user for all chats
    const slugs = ['nextjs-home', 'firebase-home', 'supabase-home', 'clerk-home', 'prisma-home', 'tailwind-home', 'trpc-home', 'mongodb-home']
    slugs.forEach(async (item) => {
      try {
        // use the Stream server client (serverClient) to create channels
        const channel = serverClient.channel('messaging', item, {
          image: 'https://getstream.io/random_png/?name=react',
          name: item.replace(/-/g, ' ').toUpperCase() + " Discussion",
          members: [user.data.id],
          created_by_id: user.data.id, // Required for server-side auth
        });
        await channel.create();
        await channel.addMembers([user.data.id]);
      } catch (err) {
        console.warn('Failed to create/add members to channel', item, err);
      }
    });

    return Response.json({ message: 'Hello World', token })
    }