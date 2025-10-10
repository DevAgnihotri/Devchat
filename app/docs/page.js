import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

export default function DocsPage() {
  const techStack = [
    { 
      category: 'Frontend', 
      tech: [
        { name: 'Next.js 15', desc: 'React framework with App Router', color: 'bg-indigo-500' },
        { name: 'React 19', desc: 'UI library for building components', color: 'bg-blue-500' },
        { name: 'Tailwind CSS 4', desc: 'Utility-first CSS framework', color: 'bg-cyan-500' },
        { name: 'shadcn/ui', desc: 'Beautiful component library', color: 'bg-violet-500' },
      ]
    },
    { 
      category: 'Authentication', 
      tech: [
        { name: 'Clerk', desc: 'Complete user management', color: 'bg-purple-500' },
      ]
    },
    { 
      category: 'Real-time Chat', 
      tech: [
        { name: 'Stream Chat', desc: 'Scalable chat messaging API', color: 'bg-green-500' },
        { name: 'stream-chat-react', desc: 'React components for chat UI', color: 'bg-emerald-500' },
      ]
    },
  ];

  const features = [
    {
      title: '🔐 Secure Authentication',
      desc: 'Clerk-powered authentication with social logins, email/password, and session management.',
      tech: ['Clerk', 'Server-side auth', 'Middleware protection']
    },
    {
      title: '💬 Real-time Messaging',
      desc: 'Powered by Stream Chat with instant message delivery, typing indicators, and read receipts.',
      tech: ['Stream Chat SDK', 'WebSocket', 'Server-side tokens']
    },
    {
      title: '🎨 Modern UI/UX',
      desc: 'Beautiful, responsive design with shadcn components and Tailwind CSS animations.',
      tech: ['shadcn/ui', 'Tailwind CSS', 'Poppins font']
    },
    {
      title: '⚡ Performance Optimized',
      desc: 'Next.js App Router with automatic code splitting, optimized fonts, and fast page loads.',
      tech: ['Next.js 15', 'Turbopack', 'React Server Components']
    },
    {
      title: '🔄 Auto Token Management',
      desc: 'Seamless token generation and refresh for Stream Chat authentication.',
      tech: ['Server-side API', 'Clerk metadata', 'Auto-mint tokens']
    },
    {
      title: '📱 Fully Responsive',
      desc: 'Works perfectly on desktop, tablet, and mobile devices with adaptive layouts.',
      tech: ['Responsive grid', 'Mobile-first', 'Tailwind breakpoints']
    },
  ];

  return (
    <main className="pt-24 pb-12 px-4 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm text-indigo-400 font-medium">Documentation</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-poppins)' }}>
            DevChat Documentation
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A modern real-time chat platform built with Next.js, Stream Chat, and Clerk authentication. 
            Learn about the architecture, features, and technologies powering DevChat.
          </p>
        </div>

        <Separator className="mb-12 bg-white/10" />

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-indigo-500">Overview</TabsTrigger>
            <TabsTrigger value="tech" className="data-[state=active]:bg-indigo-500">Tech Stack</TabsTrigger>
            <TabsTrigger value="features" className="data-[state=active]:bg-indigo-500">Features</TabsTrigger>
            <TabsTrigger value="api" className="data-[state=active]:bg-indigo-500">API Reference</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8 space-y-6">
            <Card className="p-6 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400" style={{ fontFamily: 'var(--font-poppins)' }}>What is DevChat?</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                DevChat is a modern, real-time chat platform designed for developers to discuss various technologies and frameworks. 
                Built with cutting-edge web technologies, it provides seamless authentication, instant messaging, and a beautiful user interface.
              </p>
              <p className="text-white/80 leading-relaxed">
                The platform features dedicated chat rooms for popular technologies like Next.js, Firebase, Supabase, Clerk, Prisma, Tailwind, tRPC, and MongoDB.
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-black border border-white/10 hover:border-indigo-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold">Quick Start</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Sign in with Clerk, browse forums, and start chatting instantly. No setup required!
                </p>
                <Link href="/forums">
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600">
                    Browse Forums →
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 bg-black border border-white/10 hover:border-violet-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold">Architecture</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Built on Next.js App Router with server-side rendering and real-time WebSocket connections.
                </p>
                <Button variant="outline" className="w-full border-white/20 hover:bg-violet-500/10">
                  Learn More
                </Button>
              </Card>
            </div>
          </TabsContent>

          {/* Tech Stack Tab */}
          <TabsContent value="tech" className="mt-8 space-y-8">
            {techStack.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold mb-4 text-indigo-400" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.tech.map((item, i) => (
                    <Card key={i} className="p-5 bg-black border border-white/10 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {item.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                          <p className="text-sm text-white/60">{item.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                {idx < techStack.length - 1 && <Separator className="mt-8 bg-white/10" />}
              </div>
            ))}

            <Card className="p-6 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 mt-8">
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">Additional Tools & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-indigo-500/50 text-indigo-400">Lucide Icons</Badge>
                <Badge variant="outline" className="border-violet-500/50 text-violet-400">clsx</Badge>
                <Badge variant="outline" className="border-purple-500/50 text-purple-400">tailwind-merge</Badge>
                <Badge variant="outline" className="border-blue-500/50 text-blue-400">@radix-ui</Badge>
                <Badge variant="outline" className="border-green-500/50 text-green-400">PostCSS</Badge>
                <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">ESLint</Badge>
              </div>
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="p-6 bg-black border border-white/10 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-105 group">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* API Reference Tab */}
          <TabsContent value="api" className="mt-8 space-y-6">
            <Card className="p-6 bg-black border border-white/10">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400" style={{ fontFamily: 'var(--font-poppins)' }}>API Endpoints</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="create-token" className="border-white/10">
                  <AccordionTrigger className="text-white hover:text-indigo-400">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-500">POST</Badge>
                      <span className="font-mono text-sm">/api/create</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Description</h4>
                        <p className="text-sm">Creates a Stream Chat token for the authenticated user and updates Clerk metadata.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Request Body</h4>
                        <pre className="bg-white/5 p-4 rounded-lg text-sm overflow-x-auto border border-white/10">
{`{
  "data": {
    "id": "user_xxxxx"
  }
}`}
                        </pre>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Response</h4>
                        <pre className="bg-white/5 p-4 rounded-lg text-sm overflow-x-auto border border-white/10">
{`{
  "message": "Hello World",
  "token": "eyJhbGci..."
}`}
                        </pre>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Features</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          <li>Creates Stream Chat user token</li>
                          <li>Upserts user in Stream Chat</li>
                          <li>Updates Clerk user public metadata</li>
                          <li>Adds user to all forum channels</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20">
              <h2 className="text-2xl font-bold mb-4 text-indigo-400" style={{ fontFamily: 'var(--font-poppins)' }}>Authentication Flow</h2>
              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                  <div>
                    <strong className="text-white">User Sign In:</strong> Clerk handles authentication via social providers or email/password
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                  <div>
                    <strong className="text-white">Token Check:</strong> ChatForum component checks for existing Stream token in user metadata
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                  <div>
                    <strong className="text-white">Auto-Mint:</strong> If no token exists, POST to /api/create to generate one
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                  <div>
                    <strong className="text-white">Chat Init:</strong> Stream Chat client initializes with the token and connects to channels
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer CTA */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-poppins)' }}>
            Ready to Start Chatting?
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Join the community and discuss your favorite technologies with fellow developers.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/forums">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-500/50">
                Browse Forums
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                Back to Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
