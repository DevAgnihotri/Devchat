//https://clerk.com/docs/reference/nextjs/app-router/current-user
import ChatForum from "@/components/ChatForum"
import { currentUser } from '@clerk/nextjs/server'

export default async function Page({ params }) {
  const { slug } = await params; // await params to satisfy Next.js dynamic API requirements
  let user = null;
  try {
    user = await currentUser();
  } catch (err) {
    // Clerk can throw when middleware isn't detected or no session exists — don't crash the page
    console.warn('currentUser() error:', err);
    user = null;
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Please sign in to view this forum.</div>;
  }

  return (
    <div className="h-screen w-full pt-16">
      <ChatForum slug={slug} clerkUser={{ id: user.id, name: user.firstName, token: user.publicMetadata?.token }} />
    </div>
  );
}