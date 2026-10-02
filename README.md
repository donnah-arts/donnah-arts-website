# Donnah Arts — Production Website

A premium Next.js gallery site for Donnah Ntibankundiye / Donnah Arts.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add the real artworks

Put these files in `public/art/`:

- `identity.jpg`
- `who-used-to-care.jpg`
- `flame-of-desire.jpg`
- `world-of-legacy.jpg`
- `untitled-study-i.jpg`
- `untitled-study-ii.jpg`

## Commission enquiries

The form posts to `/api/inquiries`. Add the variables in `.env.example` to your Vercel project to enable email delivery through Resend.

## Deploy

Push this folder to GitHub, then import the repository into Vercel. No build command changes are required; Vercel detects Next.js automatically.

## Important

The site is code-complete, but a real deployment still requires your own hosting/domain account and email credentials. Those credentials should never be placed in the source code.
