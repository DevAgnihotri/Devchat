import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const topics = [
  { text: 'Next.js', slug: 'nextjs-home', img: 'https://avatars.githubusercontent.com/u/126103961?s=200&v=4' },
  { text: 'Firebase', slug: 'firebase-home', img: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png', desc: 'Realtime DB, Auth, Hosting and Functions' },
  { text: 'Supabase', slug: 'supabase-home', img: 'https://gimgs2.nohat.cc/thumb/f/640/supabase-logo-vector--comseeklogo435677.jpg', desc: 'Postgres-based backend, auth and realtime' },
  { text: 'Clerk', slug: 'clerk-home', img: 'https://play-lh.googleusercontent.com/skTBZ-WGz0xycyIkcILYOB8xQ9yk7DMm9uKuVLJKFoFMMd1h-i8mHclFxiO9GVfVX_hL', desc: 'Authentication and user management for apps' },
  { text: 'Prisma', slug: 'prisma-home', img: 'https://i.pinimg.com/736x/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.jpg', desc: 'Type-safe ORM for Node.js and TypeScript' },
  { text: 'Tailwind', slug: 'tailwind-home', img: 'https://www.svgrepo.com/show/374118/tailwind.svg', desc: 'Utility-first CSS framework and UI patterns' },
  { text: 'tRPC', slug: 'trpc-home', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ74a8w-Diwa-7wz69TRXnC1wmRxQKC0UdDQ&s', desc: 'End-to-end typesafe APIs without extra schemas' },
  { text: 'MongoDB', slug: 'mongodb-home', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s', desc: 'NoSQL document database with flexible schema and scalability' },
];

export default function Forums() {
  return (
    <main className="pt-24 pb-12 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Banner image (external) */}
        <div className="mb-6 rounded-lg overflow-hidden">
          <img
            src="https://wallpapercave.com/wp/wp2326984.jpg"
            alt="Developers wallpaper banner"
            className="w-full h-44 sm:h-56 md:h-64 object-cover"
            loading="lazy"
          />
        </div>
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-poppins)' }}>
            Discussion Forums
          </h1>
          <p className="text-sm mt-2 text-white/80 max-w-2xl mx-auto">Browse topics and join conversations — each forum is a focused space for questions, resources and examples.</p>
        </header>

        <section aria-label="Forum topics">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <Card key={t.text} className="group relative p-4 hover:shadow-xl hover:shadow-indigo-500/20 focus-within:ring-2 focus-within:ring-white/20 bg-black text-white border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {t.img ? (
                      <img src={t.img} alt={`${t.text} icon`} className="w-12 h-12 rounded-md object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 inline-flex items-center justify-center text-white font-semibold shadow-lg group-hover:shadow-indigo-500/50">{t.text.charAt(0)}</div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold leading-tight group-hover:text-indigo-400 transition-colors duration-200" style={{ fontFamily: 'var(--font-poppins)' }}>{t.text}</h2>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)] group-hover:text-white/80 transition-colors duration-200">{t.desc}</p>

                    <div className="mt-3 flex items-center justify-end">
                      <Link href={`/forum/${t.slug}`}>
                        <Button variant="outline" size="sm" className="text-white border border-white/20 hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-200">View</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
