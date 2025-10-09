import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <img
              src="https://wallpaper-house.com/data/out/9/wallpaper2you_310183.jpg"
              alt="Developers collaborating on code"
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>
          <p className="mb-4 text-sm text-[var(--muted-foreground)]">Welcome to</p>
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
            DevChat — Conversations for developers
          </h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] mb-6">
            Connect, share knowledge, and find solutions faster. DevChat is a place where developers discuss packages, debugging tips and modern workflows.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link href="/chat" className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-md shadow-sm">Start a chat</Link>
            <Link href="#features" className="inline-flex items-center px-4 py-2 border rounded-md text-[var(--foreground)] bg-[var(--surface)]">Explore features</Link>
          </div>

          <div className="mt-8">
            <div className="overflow-hidden border rounded-md border-[var(--border)] bg-[var(--input)] py-2">
              <div className="whitespace-nowrap animate-marquee text-[var(--muted-foreground)] px-4">
                <span className="mx-8">New: Threaded conversations</span>
                <span className="mx-8">New: Code snippets with syntax highlight</span>
                <span className="mx-8">Community moderation tools</span>
                <span className="mx-8">Integrations: GitHub, npm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "var(--font-poppins)" }}>What you get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-medium mb-2">Real-time chat</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Fast, low-latency messaging for team collaboration and open discussions.</p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-medium mb-2">Code sharing</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Paste and preview code with syntax highlighting and inline comments.</p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-medium mb-2">Search & discover</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Powerful search across conversations, tags, and shared resources.</p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-medium mb-2">Integrations</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Connect to GitHub, npm, and CI tools to share context-rich links.</p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-medium mb-2">Moderation</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Community moderation and reporting tools keep discussions healthy.</p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <h3 className="font-medium mb-2">Themes & accessibility</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Light/dark themes and accessibility-first design for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .animate-marquee { display: inline-block; animation: marquee 18s linear infinite; }
        `}
      </style>
    </main>
  );
}
