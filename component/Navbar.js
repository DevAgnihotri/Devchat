import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)]/80 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* left: brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-semibold">D</span>
              <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>DevChat</span>
            </Link>
          </div>

          {/* center: nav & search */}
          <div className="flex-1 hidden md:flex items-center justify-center px-4">
            <div className="w-full max-w-2xl flex items-center gap-3">
              <nav className="flex items-center gap-2">
                <Link href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] px-2 py-1 rounded-md">Home</Link>
                <Link href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] px-2 py-1 rounded-md">Explore</Link>
                <Link href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] px-2 py-1 rounded-md">Docs</Link>
              </nav>

              <div className="flex-1">
                <label className="sr-only">Search</label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search conversations, packages..."
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--input)] px-10 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right: actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[var(--primary)] text-white hover:opacity-95 shadow-sm">
              {/* plus icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              New chat
            </button>

            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <div className="flex items-center gap-2">
                <SignInButton mode="modal">
                  <button className="px-3 py-2 rounded-md text-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]">Sign in</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-3 py-2 rounded-md text-sm bg-[var(--primary)] text-white">Sign up</button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
