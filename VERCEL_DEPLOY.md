# DevChat — Deploy to Vercel

This file explains how to deploy the DevChat Next.js App Router project to Vercel (production-ready). It includes recommended environment variables, minimal code edits to avoid committing secrets, and both GUI and CLI deployment instructions.

Important: this repository currently contains some hard-coded API keys in source files. Before deploying, rotate those keys and replace them with environment variables as described below. Never commit secrets to a public repo.

1. Prerequisites

---

- A Vercel account (https://vercel.com)
- A Git provider account (GitHub, GitLab, Bitbucket) and the project pushed to a remote repo
- Node.js 18+ installed locally for builds
- Vercel CLI (optional) for advanced workflows: npm i -g vercel

2. Recommended environment variable names (create these in Vercel)

---

Create the following variables in the Vercel dashboard (Project > Settings > Environment Variables) for both Preview and Production environments.

- STREAM_API_KEY ← your Stream API key (server & client safe for client if using NEXT_PUBLIC below)
- STREAM_API_SECRET ← your Stream secret (server-only, keep private)
- NEXT_PUBLIC_STREAM_API_KEY ← (optional) if you need a client-visible Stream API key

- CLERK_FRONTEND_API ← Clerk Frontend API value (from Clerk dashboard)
- CLERK_PUBLISHABLE_KEY ← Clerk publishable key (if applicable)
- CLERK_SECRET_KEY ← Clerk secret / backend key (server-only)

- NEXTAUTH_URL or any other auth callback URL if you use additional providers (not used by default here)

Note: The names above are examples. You can name them differently but the next step shows the code changes needed to read them.

3. Code changes you should make BEFORE deploying

---

Open these files and replace hard-coded keys with process.env references so Vercel will inject real values at runtime.

A. app/api/create/route.js (server route)

- Replace hard-coded Stream key/secret with process.env:

Before (example):

```js
const api_key = "9r99ech5b2pn";
const api_secret = "fhvvdxqx...";
```

After:

```js
const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
```

Make sure this file only uses server-safe envs (STREAM_API_SECRET) and never logs secrets.

B. components/ChatForum.js (client & server safe parts)

- Move any client-visible Stream key to NEXT_PUBLIC_STREAM_API_KEY and read it as:

```js
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
```

- Do NOT expose STREAM_API_SECRET in client code.

C. Any Clerk or other provider keys

- Use process.env.CLERK_FRONTEND_API and process.env.CLERK_SECRET_KEY in server code where needed. See Clerk docs for the exact variable names your Clerk integration requires — common names are CLERK_FRONTEND_API and CLERK_SECRET_KEY.

4. Add environment variables to Vercel

---

You can add env vars either via the Vercel web UI or the Vercel CLI. Example using the Vercel CLI:

```powershell
# login
vercel login
# link the local directory to a Vercel project (interactive)
vercel link

# add environment variables (example for production)
vercel env add STREAM_API_KEY production
vercel env add STREAM_API_SECRET production
vercel env add NEXT_PUBLIC_STREAM_API_KEY production
vercel env add CLERK_FRONTEND_API production
vercel env add CLERK_SECRET_KEY production
```

The CLI will prompt for values. Alternatively, in the Vercel dashboard go to your Project → Settings → Environment Variables and add them there (Preview/Production/Development scopes).

5. Configure build settings (typically automatic)

---

Vercel will auto-detect Next.js. Default build settings:

- Framework Preset: Next.js
- Build command: `npm run build`
- Output Directory: (leave blank) — Vercel uses Next.js build output

No extra configuration is usually required. If your project has custom needs, use `vercel.json`.

6. Optional: vercel.json (example)

---

If you want to pin behavior or redirects, create `vercel.json` in repo root. Example: ensure `/forum` redirect (we already added a page redirect) and headers for caching static assets:

```json
{
  "version": 3,
  "builds": [],
  "routes": [{ "src": "/forum", "dest": "/forums", "status": 308 }]
}
```

7. Deploy via Vercel (GUI)

---

- In Vercel dashboard click "New Project" → import your Git repo → select the repository
- Ensure Environment Variables added in the previous step
- Click "Deploy" (Vercel will run `npm install` and `npm run build`)
- When build completes, open the Production deployment URL

8. Deploy via Vercel CLI (quick)

---

```powershell
# Deploy current branch to Vercel (preview)
vercel --prod
# or for a non-production deploy
vercel
```

9. Post-deploy checks

---

- Visit your deployed URL and sign in via Clerk. Confirm authentication and redirections work.
- Open browser devtools → Console and Network to check script errors or failed API calls.
- If any Stream API calls fail, check Vercel logs (Project → Deployments → select deployment → View functions/logs) and ensure STREAM_API_KEY / STREAM_API_SECRET are correct.

10. Secrets hygiene and rotation

---

- Remove any hard-coded keys from the repository and rotate keys if they were committed to source control.
- For public repos, assume keys in previous commits are compromised. Rotate them in the provider dashboards.
- Use server-only environment variable scopes in Vercel for secret values (Production / Secret).

11. Troubleshooting

---

- Build errors: open the Deployment logs in Vercel to see `npm run build` output.
- Runtime errors (500s): check Serverless function logs in the Vercel Deployment view.
- HMR / dev only errors: these are usually local and not related to Vercel.

12. Optional: Custom domain & HTTPS

---

- In Vercel dashboard go to Project → Domains → Add Domain
- Follow instructions to add DNS records at your registrar
- Vercel will provision HTTPS automatically via Let's Encrypt

13. Summary checklist

---

- [ ] Remove hard-coded keys from source
- [ ] Add env vars to Vercel: STREAM*API_KEY, STREAM_API_SECRET, NEXT_PUBLIC_STREAM_API_KEY, CLERK*\* keys
- [ ] Ensure server code reads process.env for secrets
- [ ] Link repo to Vercel and deploy
- [ ] Verify auth & chat flows on production

If you want, I can:

- Create a PR that replaces hard-coded keys in your repo with process.env references (I can make the changes and run a quick local build to verify)
- Or, show exact patch commands to update `app/api/create/route.js` and `components/ChatForum.js` to use environment variables

That's the full Vercel deployment guide. I can now (pick one):

- Apply the code changes to read env variables for you and run a local build to verify, or
- Stop here and let you update the environment variables in Vercel and deploy manually.

Tell me which you'd prefer and I'll proceed.
