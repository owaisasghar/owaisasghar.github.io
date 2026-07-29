# Web3Forms contact form setup

The portfolio contact form sends submissions directly to Web3Forms. Cloudflare
continues to run only the portfolio chatbot.

## 1. Create the free access key

Open https://web3forms.com/, enter `awaisasghar900@gmail.com`, and request an
access key. Web3Forms sends the key to that email address.

## 2. Test locally

Add the received key to `.env.local` in the portfolio root:

```text
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=YOUR_RECEIVED_ACCESS_KEY
```

Restart the local server after changing the environment file:

```bash
pnpm dev
```

Submit the contact form and check the inbox and spam folder for
`awaisasghar900@gmail.com`.

## 3. Configure GitHub Pages

In the GitHub repository, open **Settings → Secrets and variables → Actions →
Variables** and create:

- Name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- Value: the access key received from Web3Forms

Push to `main` or rerun the GitHub Pages deployment workflow. The access key is
designed by Web3Forms for use in browser-based forms.
