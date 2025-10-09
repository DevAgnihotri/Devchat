import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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
          <p className="mb-4 text-sm text-white/80">Welcome to</p>
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
            DevChat — Conversations for developers
          </h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] mb-6">
            Connect, share knowledge, and find solutions faster. DevChat is a place where developers discuss packages, debugging tips and modern workflows.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link href="/chat">
              <Button className="bg-white text-black">Start a chat</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" className="text-white border border-white/20">Explore features</Button>
            </Link>
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
            <Card className="p-4 bg-black text-white border border-white/10">
              <h3 className="font-medium mb-2">Real-time chat</h3>
              <p className="text-sm text-white/70">Fast, low-latency messaging for team collaboration and open discussions.</p>
            </Card>

            <Card className="p-4 bg-black text-white border border-white/10">
              <h3 className="font-medium mb-2">Code sharing</h3>
              <p className="text-sm text-white/70">Paste and preview code with syntax highlighting and inline comments.</p>
            </Card>

            <Card className="p-4 bg-black text-white border border-white/10">
              <h3 className="font-medium mb-2">Search & discover</h3>
              <p className="text-sm text-white/70">Powerful search across conversations, tags, and shared resources.</p>
            </Card>

            <Card className="p-4 bg-black text-white border border-white/10">
              <h3 className="font-medium mb-2">Integrations</h3>
              <p className="text-sm text-white/70">Connect to GitHub, npm, and CI tools to share context-rich links.</p>
            </Card>

            <Card className="p-4 bg-black text-white border border-white/10">
              <h3 className="font-medium mb-2">Moderation</h3>
              <p className="text-sm text-white/70">Community moderation and reporting tools keep discussions healthy.</p>
            </Card>

            <Card className="p-4 bg-black text-white border border-white/10">
              <h3 className="font-medium mb-2">Themes & accessibility</h3>
              <p className="text-sm text-white/70">Light/dark themes and accessibility-first design for everyone.</p>
            </Card>
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
