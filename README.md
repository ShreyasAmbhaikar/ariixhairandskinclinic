# Dr Varun Dental Clinic Website

Static, SEO-friendly dental clinic website built with Next.js App Router, TypeScript, Tailwind CSS, local image assets, structured data, sitemap, robots.txt, and AI crawler summary files.

The first landing page is adapted from `stitch design/code.html` and `stitch design/DESIGN.md`, with the visible brand changed to **Dr Varun Dental Clinic**.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local static assets in `public/images`
- Static export output for Hostinger or any static web host

## Project Structure

```txt
app/
  layout.tsx          Global metadata, font imports, viewport
  page.tsx            Landing page composition
  robots.ts           Static robots.txt metadata route
  sitemap.ts          Static sitemap.xml metadata route
  manifest.ts         Web app manifest metadata route
  llms.txt/route.ts   AI summary file
  llms-full.txt/route.ts
components/landing/  Landing page sections
lib/
  site-config.ts      Clinic content, contact details, SEO placeholders
  structured-data.ts  JSON-LD generators
  llms.ts             AI summary text generators
public/
  images/             Downloaded local prototype images
  favicon.svg
  .htaccess           Optional Apache/Hostinger cache rules
stitch design/        Original reference files
```

## Installation

1. Open a terminal in this folder:

```bash
cd "C:\Users\ACER\Desktop\Dr Varun Dental Website"
```

2. Install dependencies:

```bash
npm install
```

3. Start local development:

```bash
npm run dev
```

4. Open:

```txt
http://127.0.0.1:3000
```

## Build Static Site

Run:

```bash
npm run build
```

Next.js is configured with:

```js
output: "export"
trailingSlash: true
images: { unoptimized: true }
```

The production static website is generated in:

```txt
.next-build/
```

## Preview Static Export

After building:

```bash
npm run preview
```

Open:

```txt
http://127.0.0.1:4173
```

## Hostinger Deployment

1. Run `npm run build`.
2. Open the generated `.next-build/` folder.
3. Upload the **contents** of `.next-build/` into Hostinger `public_html`.
4. Confirm these URLs work after deployment:

```txt
https://your-domain.com/
https://your-domain.com/robots.txt
https://your-domain.com/sitemap.xml
https://your-domain.com/llms.txt
https://your-domain.com/llms-full.txt
```

5. Submit `https://your-domain.com/sitemap.xml` in Google Search Console.

## Before Launch Checklist

Update `lib/site-config.ts`:

- Replace `https://www.drvarundental.com` with the final domain.
- Replace placeholder phone, email, address, city, pin code, and coordinates.
- Replace social profile URLs.
- Replace doctor names/team details with approved real details.
- Replace testimonials with approved real patient testimonials or remove them.
- Update services and FAQs for the actual clinic offering.

Also check:

- `npm run lint`
- `npm run build`
- Lighthouse score
- Google Rich Results Test
- Mobile layout
- Favicon visibility
- Contact links

If Lighthouse reports missing metadata or an invalid robots file during local testing, restart the dev server and hard refresh the browser. Confirm these local URLs return `200` before rerunning Lighthouse:

```txt
http://127.0.0.1:3000/
http://127.0.0.1:3000/robots.txt
http://127.0.0.1:3000/sitemap.xml
```

## SEO, AEO, GEO Features

- Static HTML export for fast crawling and hosting.
- Page metadata, canonical URL, Open Graph, and Twitter card.
- JSON-LD for Dentist, Organization, WebSite, BreadcrumbList, and FAQPage.
- `robots.txt` allows major search and AI crawlers.
- `sitemap.xml` exposes the homepage.
- `llms.txt` and `llms-full.txt` summarize the clinic for answer engines.
- Local images with alt text and fixed dimensions to reduce layout shift.

## Future Pages

Add new pages in the `app/` directory, for example:

```txt
app/services/page.tsx
app/about/page.tsx
app/contact/page.tsx
```

Then update:

- Header/footer navigation in `lib/site-config.ts`
- `app/sitemap.ts`
- Relevant structured data
- README deployment notes if needed

Keep the site static by avoiding API routes, server actions, middleware, cookies, and request-time data fetching.
