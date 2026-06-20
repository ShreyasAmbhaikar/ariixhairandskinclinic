# High-Performance Static Next.js SEO Website Checklist & Guidelines

This document provides a comprehensive, production-ready blueprint for building hyper-optimized, high-performance static websites using the latest Next.js standards. Following these guidelines guarantees **95+ scores on all Google Lighthouse metrics (Performance, SEO, Accessibility, Best Practices)** and delivers maximum search visibility for your SEO clients.

---

## 1. Core Technology Stack & Architecture

To achieve rapid page load speeds, eliminate server latency, and optimize edge delivery, websites must be built as static exports deployed to a Global Content Delivery Network (CDN) like Vercel.

* **Framework**: **Next.js 15+** (App Router)
* **Runtime/Compiler**: **React 19**
* **Development Bundler**: **Turbopack** (`next dev --turbo`) for near-instant developer response times.
* **Styling**: **Tailwind CSS** (for utility-first, purged, minimal CSS payloads).
* **Icons**: **Lucide React** (imported individually to leverage tree-shaking).
* **Static Export Configuration**: Configure `next.config.mjs` to export static HTML/CSS/JS rather than running a Node.js server.

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site generation (SSG) outputs
  images: {
    unoptimized: true, // Required for static HTML export (or use a third-party image loader)
  },
};

export default nextConfig;
```

---

## 2. Directory & Folder Structure Standards

Maintain an organized, modular folder structure that isolates configuration, layout components, and visual assets:

```
├── app/                        # Next.js App Router (Routes & Layouts)
│   ├── layout.tsx              # Root layout (Metadata, Google Font configurations, Global CSS imports)
│   ├── page.tsx                # Homepage template
│   ├── globals.css             # Tailwind base styles and CSS animations
│   ├── manifest.webmanifest    # PWA web app manifest for SEO and browser performance
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # Static search indexing map
│   ├── llms.txt                # LLM/AI crawler context definition file
│   └── [service-route]/        # Individual SEO target directories
│       └── page.tsx            # Fully static service landing page
├── components/                 # Reusable UI & Layout Components
│   ├── landing/                # Global layout elements (Header, Footer, Hero, About sections)
│   ├── gallery/                # Image gallery & lightbox modules
│   └── ui/                     # Atoms and atomic UI primitives (Buttons, Badges)
├── lib/                        # Shared Code, Configs, and Utilities
│   ├── site-config.ts          # Centralized site configurations (NAP details, links, SEO keywords)
│   └── utils.ts                # Tailwind merge and styling utilities
├── public/                     # Static Asset Directory
│   ├── favicon.ico             # Page tab icon
│   └── images/                 # Resized and optimized images categorized by section
│       ├── hero/               # Double-viewport hero images (desktop and mobile webp files)
│       └── gallery/            # Visual assets and lightweight *-thumb.webp thumbnails
└── scripts/                    # Automated build/utility scripts
```

### ⚠️ The `loading.tsx` CLS Trap (Critical Rule)
In statically exported Next.js App Router projects, **never create a root-level `loading.tsx` file**.
* **The Cause**: Next.js automatically wraps all page children in a client-side React Suspense boundary when a `loading.tsx` is present. During initial hydration, the server serves the layout headers and footers instantly, but renders the loading state in between with `0px` height. Once the script hydrates, the main content pops in, pushing the footer down and triggering a **Cumulative Layout Shift (CLS) of 1.000+**.
* **The Fix**: Remove the file or rename it to `_loading.tsx` to prevent the loader from wrapping the statically compiled HTML. All pages will load immediately with their correct heights, achieving a CLS of `0.000`.

---

## 3. Core Web Vitals Optimization Checklist

### A. Cumulative Layout Shift (CLS) — Target: < 0.1
* **Image Sizing**: Never use un-sized images. Use explicit width and height attributes or CSS aspect ratios (`aspect-[16/9]`) to reserve the exact layout space before the asset downloads.
* **Google Fonts Swap Avoidance**: Change the default font loading configuration in `app/layout.tsx` from `display: "swap"` to `display: "fallback"`.
  ```typescript
  const mainFont = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-main",
    display: "fallback", // Eliminates font-swap shift by using system fonts with similar metrics
  });
  ```
* **Dynamic CSS containments**: Do not use `content-visibility: auto` with guessed intrinsic sizes (`contain-intrinsic-size`) on elements above the fold or in main footers, as this causes the footer to shift when entering the viewport.

### B. Largest Contentful Paint (LCP) — Target: < 2.5s
* **Responsive Above-the-Fold Images**: Standardize on `<picture>` elements for all Hero banners. Store a high-resolution version for desktop and a scaled-down mobile variant (suffix `-mobile.webp`) for smaller screens.
* **Dynamic Preloading**: Place conditional preload links in the head of your templates matching target media queries to ensure that mobile browsers only download the mobile version, and desktops only preload the desktop version.
  ```typescript
  // In app/[service-route]/page.tsx (or template component)
  <head>
    <link
      rel="preload"
      as="image"
      href="/images/hero/service-desktop.webp"
      media="(min-width: 641px)"
      type="image/webp"
    />
    <link
      rel="preload"
      as="image"
      href="/images/hero/service-mobile.webp"
      media="(max-width: 640px)"
      type="image/webp"
    />
  </head>
  ```
* **Picture Markup Implementation**:
  ```tsx
  <picture>
    <source media="(max-width: 640px)" srcSet="/images/hero/service-mobile.webp" />
    <img
      src="/images/hero/service-desktop.webp"
      alt="Descriptive keyword-focused image alt text"
      width={1200}
      height={630}
      className="h-auto w-full object-cover"
    />
  </picture>
  ```

### C. Total Blocking Time (TBT) — Target: < 200ms
* **Next.js Link Prefetching Defeat**: By default, Next.js `<Link>` components prefetch page chunks in the background when they enter the viewport. If a footer contains 20+ links, scrolling to the bottom forces the browser to download 20+ JavaScript files simultaneously. This spikes CPU activity and blocks the main thread.
  * **Rule**: Set `prefetch={false}` on all navigation, treatment, dropdown, and footer links.
  ```tsx
  <Link href="/services/implant" prefetch={false}>
    Dental Implants
  </Link>
  ```
* **Third-Party Script Management**: Avoid loading heavy tracking scripts (Google Tag Manager, Facebook Pixels, Hotjar) directly in the header. Wrap them in `@next/third-parties` components or defer their loading dynamically until after the initial page hydration.
* **Package Weight Reductions**: Keep dependency sizes low. Do not install heavy font libraries (e.g. `@fontsource/*`) if the fonts are natively downloaded and optimized via `next/font/google`.

---

## 4. Media Asset Optimization Rules

* **Formats**: Use `.webp` or `.avif` for all photographic assets. Avoid `.png` or `.jpg` unless transparency or specific retro-compatibility is required.
* **Resolution Guidelines**:
  * Desktop Heros: Max width `1440px` (or `1920px` max, heavily compressed).
  * Mobile Heros: Max width `640px`.
  * Inline Section Images: Max width `800px`.
  * Avatars/Icons: Max width `100px` to `150px`.
* **Grid/Gallery Thumbnails**: Never load full-resolution images inside a portfolio or image grid.
  * **Rule**: Generate a small thumbnail version (`*-thumb.webp` or `*-thumb.jpg`) for the initial page grid. Load the high-resolution file only when the user clicks to launch the lightbox modal.
* **Video Payload Deferrals**: Videos block network streams immediately.
  * **Rule**: Configure all `<video>` tags with `preload="none"` and supply a lightweight image `poster`. This prevents background downloads from starting before the user initiates playback.
  ```tsx
  <video
    src="/videos/walkthrough.mp4"
    preload="none"
    poster="/images/gallery/walkthrough-thumb.webp"
    muted
    playsInline
    controls
    className="w-full h-auto"
  />
  ```

---

## 5. Technical SEO & AI Crawling Standards

Statically exported websites must supply crawler instructions in the `app/` folder root to assist search crawlers and AI data scrapers.

### A. Robots.txt (`app/robots.txt`)
Configure standard access declarations for indexation bots:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://www.yourdomain.com/sitemap.xml
```

### B. Sitemap.xml (`app/sitemap.xml`)
Expose a complete list of pages, update frequencies, and priority weighting:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yourdomain.com/</loc>
    <lastmod>2026-05-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.yourdomain.com/about</loc>
    <lastmod>2026-05-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### C. The AI standard: `llms.txt` (`app/llms.txt`)
Provide a clean summary mapping of the site layout to aid LLMs and AI crawlers:
```markdown
# Site Information

This site provides local services, contact resources, and business details.

## Navigation map
- [Home Page](https://www.yourdomain.com/) - Overview of the core service offerings.
- [About Us](https://www.yourdomain.com/about) - Credentials, team certifications, and company details.
- [Services](https://www.yourdomain.com/our-services) - Service list and direct keyword landing pages.
- [Contact](https://www.yourdomain.com/contact-us) - Location maps, operational hours, and phone directory.
```

---

## 6. On-Page SEO Checklist for Client Deployments

* **Semantic HTML Structure**:
  * One single `<h1>` tag per page containing the primary location-based keyword target.
  * Ordered hierarchy of tags: `<h2>` for section headers, `<h3>` for subtopics.
  * HTML5 elements for landmark layout definitions: `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, and `<footer>`.
* **Title & Description Conventions**:
  * Keep SEO titles under **60 characters** to prevent truncation in SERPs. Format: `Primary Keyword Target | Business Name`.
  * Meta descriptions under **155 characters**, including a clear Call to Action (CTA) and localized location hooks.
* **Internal Linking**:
  * Use descriptive anchor text for internal links. Do not link words like "Click here" or "Read more". Use keyword phrases: `Explore our [dental crowns and bridges treatment](...)`.
* **Structured Schema Markup (JSON-LD)**:
  * Embed structured schema markup in layout metadata or raw script blocks to enable rich Google snippets (e.g. `LocalBusiness`, `FAQPage`, `Product/Service` and `Review`).
* **Accessibility (A11y)**:
  * Include a skip-to-content navigation option at the top of the body for screen readers:
    ```tsx
    <a href="#main-content" className="skip-link">Skip to content</a>
    ```
  * Verify high color-contrast ratios on all text elements.
  * Supply `aria-label` tags to all icon-only button elements.

---

## 7. SEO Site Layout: Essential Client Pages

Every local business or client site should include these foundational pages to satisfy Google's **E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)** quality rater guidelines:

1. **Homepage (Main Node)**: High-impact introduction, trust badges, main core services, brief review carousel, and embedded contact directions.
2. **Dedicated Service Landing Pages**: Standardized, dedicated URL routes targeting specific service-keyword groupings (e.g., `/teeth-whitening-viman-nagar/`). Avoid grouping all services on a single page, as this dilutes keyword relevance.
3. **About Page (Authority)**: Visual portraits, credential history, licensing information, and mission details to solidify trustworthiness.
4. **Reviews/Testimonials Page**: Aggregated customer reviews and client success metrics with embedded review schemas.
5. **Image/Work Gallery**: Proof of experience displaying local work with detailed, keyword-rich image alternative descriptions.
6. **Contact Us Page (NAP Node)**: Explicit **Name, Address, and Phone (NAP)** listing that matches their Google Business Profile exactly, paired with opening hours and map links.
7. **Custom 404 Page**: Avoid serving a default browser or unstyled 404 page. A clean, custom 404 page with navigation links keeps users on the site and prevents search bounce signals.
