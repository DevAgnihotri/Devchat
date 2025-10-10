
//https://getstream.io/chat/docs/react/tokens_and_authentication/

import { StreamChat } from "stream-chat";

const api_key = "9r99ech5b2pn";
const api_secret = "fhvvdxqxgnqzj9m77w8kju5mk24zqnrmxubr9d3kcdka4bdtagmsfxteqqq28tp8";
const user_id = "user_33q3v6UwIdMozuMvXbUNKvTBDhQ";

export async function GET() {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(user_id);
    console.log(token)
  return Response.json({ message: 'Hello World' ,token:token })
}