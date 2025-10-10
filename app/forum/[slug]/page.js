// https://getstream.io/chat/react-chat/tutorial/
import ChatForum from "@/components/ChatForum"

export default function Page({ params }) {
  const { slug } = params;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ChatForum slug={slug} />
    </div>
  )
}