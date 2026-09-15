# EcoEnergy — Econergy

Next.js marketing site for **Econergy**: centralised, metered LPG vending for residential estates.

Design system and layout are preserved from the Synox financial consulting template (`index_financial_consulting.html`). Product copy aligns with [Econergy](https://eco-gas.netlify.app/).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Original template CSS / jQuery plugins (Bootstrap, Swiper, WOW, Odometer, etc.)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Landing |
| `/how-it-works` | Tank → meter → valve → app → ledger |
| `/the-app` | Resident prepaid app |
| `/the-console` | Estate ops console |
| `/partnership` | Developers, EMAs, distributors |
| `/services` | Platform services |
| `/contact` | Book a walkthrough |

## Notes

- Static assets live in `public/assets` (unchanged template assets).
- Original HTML templates are archived under `_legacy/` for reference.
