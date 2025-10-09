import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const topics = [
  { text: 'Next.js', img: '', desc: 'Stuff related to Next.js' },
  { text: 'Firebase', img: '', desc: 'Realtime DB, Auth, Hosting and Functions' },
  { text: 'Supabase', img: '', desc: 'Postgres-based backend, auth and realtime' },
  { text: 'Clerk', img: '', desc: 'Authentication and user management for apps' },
  { text: 'Prisma', img: '', desc: 'Type-safe ORM for Node.js and TypeScript' },
  { text: 'Tailwind CSS', img: '', desc: 'Utility-first CSS framework and UI patterns' },
  { text: 'tRPC', img: '', desc: 'End-to-end typesafe APIs without extra schemas' },
  { text: 'MongoDB', img: '', desc: 'NoSQL document database with flexible schema and scalability' },
];

export default function Forums() {
  return (
    <main className="pt-24 pb-12 px-4 bg-[var(--background)] text-[var(--foreground)]">
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
          <p className="text-sm mt-2 text-[var(--muted-foreground)] max-w-2xl mx-auto">Browse topics and join conversations — each forum is a focused space for questions, resources and examples.</p>
        </header>

        <section aria-label="Forum topics">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <article key={t.text} className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 hover:shadow-sm focus-within:ring-2 focus-within:ring-[var(--ring)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {/* show image if present, otherwise show initial with primary color */}
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
                      <Link href={`/forums/${encodeURIComponent(t.text.toLowerCase())}`} className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:underline">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
