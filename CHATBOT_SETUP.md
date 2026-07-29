# Portfolio chatbot deployment

The portfolio remains a static GitHub Pages site. Cloudflare Workers AI runs the
Llama 3.2 1B chatbot remotely, and Cloudflare KV stores the daily IP counter.

## 1. Create the Cloudflare resources

Sign in to Cloudflare, install Wrangler, and authenticate:

```bash
cd cloudflare-worker
pnpm install
pnpm wrangler login
```

Create the rate-limit namespace:

```bash
pnpm wrangler kv namespace create RATE_LIMIT
```

Copy the returned namespace ID into `cloudflare-worker/wrangler.jsonc`, replacing
`REPLACE_WITH_YOUR_KV_NAMESPACE_ID`.

If the production portfolio uses a custom domain, add that exact origin to
`ALLOWED_ORIGINS`. Do not add a trailing slash.

## 2. Deploy the chatbot

```bash
pnpm deploy
```

Copy the resulting `https://...workers.dev` URL.

## 3. Connect GitHub Pages

In the GitHub repository, open **Settings → Secrets and variables → Actions →
Variables** and add:

- Name: `NEXT_PUBLIC_CHATBOT_API_URL`
- Value: the deployed Worker URL

Then open **Settings → Pages** and select **GitHub Actions** as the source. Push
to `main`, or run the `Deploy portfolio to GitHub Pages` workflow manually.

## Local UI testing

Create `.env.local` in the repository root:

```text
NEXT_PUBLIC_CHATBOT_API_URL=https://your-worker.workers.dev
```

Then run `pnpm dev`. The Worker allows `http://localhost:3000` by default.
