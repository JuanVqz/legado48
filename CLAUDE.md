# LEGADO 48° — Project Context for Claude

## What This Is
Landing page for **LEGADO 48°**, an artisanal mezcal brand from Oaxaca, México.
Products: Gomitas de Mezcal (3 flavors: Sal de Gusano, Tepextate, Maracuyá) + Chocolates con Mezcal.

Live site: https://legado48.com  
Deployed on Vercel via GitHub push to `main`.

## Primary Goal
Make this the **#1 result** when people search for:
- "gomitas de mezcal"
- "mezcal oaxaca"
- "gomitas oaxaca"
- "chocolates con mezcal"

SEO must be excellent: fast loading, semantic HTML, JSON-LD structured data, canonical URL, bilingual (ES/EN), mobile-first.

## Technical Stack
Pure HTML + CSS + vanilla JS — single `index.html` file. No build step, no framework.
- Google Fonts: Montserrat + Playfair Display
- Font Awesome 6 icons
- Hosting: Vercel (assets cached 1yr immutable, HTML no-cache)

## Key Files
- `index.html` — everything: HTML, CSS, JS, i18n, lightbox, mailto logic
- `assets/images/` — optimized WebP + PNG product images (~96% size reduction from originals)
- `vercel.json` — cache headers + security headers
- `robots.txt` / `sitemap.xml` — SEO
- `docs/` — brand docs, screenshot (excluded from Vercel deploy via .vercelignore)
- `notes/` — original resources (excluded from git tracking)

## Brand
- Colors: `#0A0A0A` (deep black) · `#2A9D8F` (teal) · `#F0EDE4` (cream)
- Email: ventaslegado48@gmail.com
- Phone: 951 477 2122
- Instagram: @legado_48 | Facebook: @LEGADO48
- Domain: legado48.com (.mx redirects to .com via 301 — correct for SEO)

## Pending / In-Progress
- [ ] Commit + deploy current changes (see commit message below)
- [ ] Run `git rm style.css` before committing (old Próximamente file, now unused)
- [ ] Logo needs a proper fix (black background blends into dark nav) — deferred, do separately
- [ ] Consider adding blog/content page with Oaxacan mezcal culture to build topical authority
- [ ] Add Google Search Console + verify sitemap submission after deploy

## Suggested commit message
```
fix: transparent logo, bigger product images, split CSS/JS into assets

- Logo: remove black background, now fully transparent (teal agave + cream text)
- Product strip: fix CSS bug where img got 38% of picture (should be 100%)
- Extract CSS → assets/css/main.css (now cached 1yr by Vercel CDN)
- Extract JS  → assets/js/main.js  (defer attribute, cached 1yr)
- Add <link rel="preload"> hint for CSS for faster first paint
- Delete old style.css (leftover from Próximamente page)
```

## SEO Already Done
- JSON-LD structured data (Organization + ItemList/Product schemas)
- Canonical tag → https://legado48.com/
- Open Graph / Twitter card meta tags
- Preload hero image (gomitas-trio-b.webp)
- Sitemap with hreflang es/en/x-default
- robots.txt
- Bilingual content (ES/EN toggle, same URL)
- 17px base font for readability
- WebP images (fast load)

## Developer
Built by Juan Vásquez — https://www.juanvasquez.dev / javasgon@gmail.com
