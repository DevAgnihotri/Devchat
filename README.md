# DevChat — Real-time Forum App (Technical README)

A compact technical overview for DevChat — a Next.js App Router application using Tailwind CSS, Clerk for auth, and Stream Chat for real-time conversations. This README explains the architecture, environment variables, key files, and how to reproduce the project.

Screenshots (included in repo):

- ./public/file.svg
- ./public/globe.svg
- ./public/next.svg
- ./public/vercel.svg

## Overview

- Framework: Next.js (App Router)
- UI: Tailwind CSS, Poppins (local font), shadcn-style components
- Auth: Clerk (client + server helpers)
- Realtime Chat: Stream Chat (server signs tokens; client uses token)
- Hosting: Vercel (recommended)

## Key files

- `app/layout.js` — root layout, wraps app in `ClerkProvider` and injects frontend API from env.
- `components/ChatForum.js` — client chat UI using `stream-chat-react`; requests server-signed tokens from `/api/create`.
- `app/api/create/route.js` — server route that uses Stream server SDK to create tokens, upsert users, and create channels; must use server-only secrets.
- `components/Navbar.js` — top navigation and client auth UI (hydration-safe rendering).
- `app/forums/page.js` and `app/forum/[slug]/page.js` — forums listing and dynamic forum pages.

## Environment variables (required)

- `STREAM_API_KEY` — Stream API key (server)
- `STREAM_API_SECRET` — Stream API secret (server-only)
- `NEXT_PUBLIC_STREAM_API_KEY` — optional public Stream key for client
- `CLERK_FRONTEND_API` or `NEXT_PUBLIC_CLERK_FRONTEND_API` — Clerk project frontend API (public)
- `CLERK_PUBLISHABLE_KEY` — Clerk publishable key (client)
- `CLERK_SECRET_KEY` — Clerk secret key (server-only)

## Security notes

- Never commit `STREAM_API_SECRET` or `CLERK_SECRET_KEY` into source or repo history. If exposed, rotate immediately.
- Use Vercel Project → Settings → Environment Variables to store production secrets (Preview + Production scopes).

## Local setup (developer)

1. Copy `.env.example` to `.env.local` and fill values.
2. Install dependencies: `npm install`.
3. Run dev server: `npm run dev`.
4. Sign in with Clerk and open `/forums` to test chat flow.

## Seven-step reproduction process (single-line each)

1. Clone the repo and cd into it.
2. Copy `.env.example` to `.env.local` and supply keys for Clerk and Stream.
3. Run `npm install` to install dependencies.
4. Start the dev server with `npm run dev`.
5. Sign in via Clerk on the site to create a user session.
6. Visit a forum page to trigger `/api/create` and mint a Stream token.
7. Confirm chat connects and messages appear in real time.

## Commands

- Dev: `npm run dev` (Next dev server)
- Build: `npm run build`
- Start: `npm start`

## Architecture notes

- Token flow: client requests a token by POSTing to `/api/create` (server uses `STREAM_API_SECRET` to mint token and upsert Stream users); client stores token in Clerk public metadata or uses response to initialize Stream client.
- Auth: Clerk handles sign-in and session on client; server uses `@clerk/nextjs/server` helpers to update metadata and perform server-side auth secure ops.

## Troubleshooting

- If `/api/create` returns 500, verify `STREAM_API_KEY` and `STREAM_API_SECRET` are present in the environment.
- If chat fails to connect client-side, check console for `token` missing errors and confirm Clerk public metadata contains the token or the API returned one.

## Notes for deployment

- Add env variables to Vercel (Preview + Production), remove secrets from Git history where possible, and ensure the app is deployed with the environment variables set.

If you want, I can open a PR with this README and update any screenshot references or wording further.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
