# magdir-zemachim-next

Marketing and SEO site for the iOS app **מגדיר צמחים פלוס** (Plant Identifier
Plus, App Store ID 6785250764). Hebrew, RTL, optimized for the search term
"מגדיר צמחים".

Live domain: **מגדירצמחים.ישראל** (punycode
`xn--6dbcmhbybd5eta.xn--4dbrk0ce`) — deployed on Vercel.

## Stack

- Next.js (App Router, Turbopack), React, TypeScript
- Plain CSS (`app/globals.css`), no CSS framework, no runtime dependencies
  beyond Next/React
- Heebo font self-hosted at build time via `next/font/google`

## Pages

| Route    | Purpose                                                          |
| -------- | ---------------------------------------------------------------- |
| `/`      | Landing page: hero, product video, how it works, features, FAQ   |
| `/guide` | Long-form SEO article: "מגדיר צמחים: המדריך המלא"                 |
| `/about` | About Dor Porat (EEAT: developer background, plant expertise)    |

## SEO

- Site-wide metadata + per-page canonical in `app/layout.tsx` / each page
- JSON-LD: WebSite, MobileApplication, FAQPage, Article, ProfilePage,
  BreadcrumbList (via `components/JsonLd.tsx`)
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- Apple Smart App Banner (`itunes.appId`)
- All site constants (domain, App Store URL, author) live in `lib/site.ts`

## Assets

- `public/images/` — App Store marketing screenshots (webp), app icon,
  Nano Banana 2 generated illustrations (guide hero, photo how-to, workspace)
- `public/video/magdir-tzmachim-demo.mp4` — product video assembled with
  ffmpeg from the marketing screenshots
- `public/og.png` — Open Graph share image (1200x630)

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm start      # serve production build
```

## Deployment

Deployed on Vercel. Point the `מגדירצמחים.ישראל` domain at the Vercel
project; the canonical URL is already configured in `lib/site.ts` (`SITE_URL`).
