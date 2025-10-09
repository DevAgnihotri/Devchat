import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const topics = [
  { text: 'Next.js', img: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', desc: 'Stuff related to Next.js' },
  { text: 'Firebase', img: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png', desc: 'Realtime DB, Auth, Hosting and Functions' },
  { text: 'Supabase', img: 'https://gimgs2.nohat.cc/thumb/f/640/supabase-logo-vector--comseeklogo435677.jpg', desc: 'Postgres-based backend, auth and realtime' },
  { text: 'Clerk', img: 'https://play-lh.googleusercontent.com/skTBZ-WGz0xycyIkcILYOB8xQ9yk7DMm9uKuVLJKFoFMMd1h-i8mHclFxiO9GVfVX_hL', desc: 'Authentication and user management for apps' },
  { text: 'Prisma', img: '', desc: 'Type-safe ORM for Node.js and TypeScript' },
  { text: 'Tailwind CSS', img: '', desc: 'Utility-first CSS framework and UI patterns' },
  { text: 'tRPC', img: '', desc: 'End-to-end typesafe APIs without extra schemas' },
  { text: 'MongoDB', img: '', desc: 'NoSQL document database with flexible schema and scalability' },
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
              <Card key={t.text} className="group p-4 hover:shadow-sm focus-within:ring-2 focus-within:ring-white/20 bg-black text-white border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {t.img ? (
                      <img src={t.img} alt={`${t.text} icon`} className="w-12 h-12 rounded-md object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-md bg-[var(--primary)] inline-flex items-center justify-center text-white font-semibold">{t.text.charAt(0)}</div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>{t.text}</h2>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">{t.desc}</p>

                    <div className="mt-3 flex items-center justify-end">
                      <Link href={`/forums/${encodeURIComponent(t.text.toLowerCase())}`}>
                        <Button variant="outline" size="sm" className="text-white border border-white/20">View</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
