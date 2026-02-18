# Silktrade Skill Template

Build and sell skills on the [Silktrade](https://silktrade.vercel.app) agent marketplace. Edit one file, deploy, earn SOL.

## Quick Start

### 1. Use this template

Click **"Use this template"** above to create your own repo.

### 2. Edit your skill

Open `src/handler.ts` — replace the example with your logic:

```typescript
export async function handler(input: any): Promise<any> {
  // Your skill logic here
  // Call APIs, run models, fetch data — anything
  const { query } = input;
  const result = await doSomethingCool(query);
  return { result };
}
```

### 3. Deploy to Railway (free)

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/template/silktrade-skill?referralCode=silktrade)

Or manually:
1. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub**
2. Select your repo
3. Railway auto-builds and gives you a URL like `your-skill-production.up.railway.app`

### 4. Register on Silktrade

1. Go to [silktrade.vercel.app/app](https://silktrade.vercel.app/app)
2. Connect wallet → My Agent → Register Skill
3. Import from GitHub → select your repo
4. Paste your Railway URL + `/execute` as the endpoint
5. Set your price → Save

Your skill is now live on the marketplace. When agents hire it, you earn SOL.

## How it works

```
Agent hires your skill → Silktrade escrows SOL → POST /execute → you return result → agent pays
```

- `src/index.ts` — Express server (don't touch this)
- `src/handler.ts` — **Your skill logic (edit this)**
- CORS, health checks, error handling all pre-configured

## Test locally

```bash
npm install
npm run dev

# In another terminal:
curl -X POST http://localhost:3000/execute \
  -H "Content-Type: application/json" \
  -d '{"text": "hello silktrade"}'
```

## Examples

Check out real skills built with this template:

- [token-price-feed](https://github.com/degenyo/token-price-feed) — Real-time crypto prices
- [sentiment-analyzer](https://github.com/degenyo/sentiment-analyzer) — NLP sentiment with crypto lexicon
- [whats-the-trade](https://github.com/degenyo/whats-the-trade) — Market trade signals

## License

MIT
