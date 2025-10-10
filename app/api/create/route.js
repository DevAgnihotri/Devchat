
//https://getstream.io/chat/docs/react/tokens_and_authentication/

import { StreamChat } from "stream-chat";

const api_key = "9r99ech5b2pn";
const api_secret = "fhvvdxqxgnqzj9m77w8kju5mk24zqnrmxubr9d3kcdka4bdtagmsfxteqqq28tp8";
// const user_id = "user_33q3v6UwIdMozuMvXbUNKvTBDhQ";

export async function POST(request) {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    // Create User Token
    // const token = serverClient.createToken(user_id);
    // console.log(token)

    let body = {};
    try {
      body = await request.json();
    } catch (_) {
      // no/invalid JSON body; ignore to avoid 500/502
    }
    console.log(body);
    return Response.json({ message: 'Hello World' })
}

