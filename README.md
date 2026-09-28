# Ariix Hair and Skin Clinic Website

High-performance, production-ready, SEO-optimized clinic website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Deployed on **Cloudflare Pages** at [ariixhairandskinclinic.com](https://ariixhairandskinclinic.com).

---

## Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS & Modern Clean Custom Design (`app/ariix.css`)
- **Icons**: Lucide React
- **Output Mode**: Static HTML Export (`output: "export"`)
- **Hosting**: Cloudflare Pages (Edge CDN, SSL Full Strict, Global Brotli)
- **Primary Domain**: `https://ariixhairandskinclinic.com`

---

## Key Features

- **25+ Specialized Treatment Pages**: Detailed clinical guides for Hair Transplant, PRP, Laser Hair Removal, HydraFacial, Acne Scar Treatment, Chemical Peels, and more.
- **Multi-Branch Location SEO**: Dedicated landing pages for **Kharadi (Wagholi)** and **Sinhagad Road (Manikbag)** branches with verified NAP, Google Maps embeds, and branch hours.
- **Deep Schema Markup (JSON-LD)**: `DermatologyClinic`, `Physician` (Dr. Abhimanyu Jagtap), `MedicalProcedure`, `MedicalWebPage`, `BreadcrumbList`, `WebSite`, and `FAQPage`.
- **AI Engine Discovery (GEO / AEO)**: Full support for search engines and generative AI crawlers via `/llms.txt`, `/llms-full.txt`, `/robots.txt`, and `/sitemap.xml`.
- **Zero-Redirect Instant Render**: Clean direct root homepage rendering with self-referential canonical tags.
- **Optimized WebP Assets**: Clean, lightweight, layout-stable image assets with descriptive alt attributes.

---

## Project Structure

```txt
app/
  layout.tsx                    # Root layout with fonts, metadata, header, footer
  page.tsx                      # Root homepage (Instant render)
  best-skin-care-clinic-in-pune # Canonical home route
  locations/
    kharadi/                    # Kharadi branch landing page
    sinhagad-road/              # Sinhagad Road branch landing page
  about/                        # About Dr. Abhimanyu Jagtap & Clinic
  treatment/                    # Treatments directory
  gallery/                      # Before & After case gallery
  testimonials/                 # Patient reviews & stories
  contact-us/                   # Appointment booking & directions
  sitemap.ts                    # Auto-generated XML Sitemap
  robots.ts                     # Search & AI crawler rules
  manifest.ts                   # Web App Manifest
  llms.txt/route.ts             # AI agent concise knowledge index
  llms-full.txt/route.ts        # AI agent full clinic knowledge index
components/
  ariix/                        # Header, Footer, ScrollToTop, Navigation
  treatment/                    # Reusable treatment page template & components
  gallery/                      # Lightbox gallery component
  landing/                      # Floats (WhatsApp, Back-to-Top)
lib/
  site-config.ts                # Single source of truth (NAP, doctors, treatments, FAQs)
  structured-data.ts            # LocalBusiness & Organization JSON-LD schemas
  llms.ts                       # Markdown generator for LLMs
public/
  images/                       # WebP optimized clinic assets & treatment photos
  favicon.svg                   # Vector favicon
```

---

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start local development server:
   ```bash
   npm run dev
   ```

3. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser.

---

## Production Build & Static Export

Generate the pre-rendered static site:
```bash
npm run build
```

Preview the static production build locally:
```bash
npm run preview
```

---

## Deployment & SEO Documentation

For complete post-deployment guides, Cloudflare DNS, Google Search Console indexing, and Google Business Profile setup, see:
📄 [`DEPLOYMENT_AND_SEO_GUIDE.md`](./DEPLOYMENT_AND_SEO_GUIDE.md)
