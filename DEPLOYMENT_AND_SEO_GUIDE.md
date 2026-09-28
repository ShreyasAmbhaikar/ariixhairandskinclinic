# Complete Cloudflare Pages Deployment & SEO Setup Guide
**Domain:** `ariixhairandskinclinic.com`  
**Brand:** Ariix Hair and Skin Clinic (Kharadi & Sinhagad Road, Pune)  
**Technology:** Next.js 15 (Static Export / SSG)

---

## 1. Cloudflare Pages Compatibility Check

| Checkpoint | Status | Details |
| :--- | :--- | :--- |
| **Next.js Output Mode** | `output: "export"` | Pre-renders 100% static HTML, CSS, JS, and images. |
| **Server Runtime Dependency** | None | Zero Node.js server dependencies at runtime. |
| **Dynamic Routes / Handlers** | `force-static` | `llms.txt`, `sitemap.ts`, and `robots.ts` are fully static. |
| **Image Optimization** | `unoptimized: true` | WebP images bundled directly for edge caching. |
| **Cloudflare Pages Support** | **100% Compatible** | Runs on Cloudflare's global edge network (275+ PoPs) with free infinite bandwidth, 0ms cold starts, and ultra-fast TTFB. |

---

## 2. Step-by-Step: Purchasing the Domain on Cloudflare

Cloudflare Registrar offers at-cost wholesale domain pricing (no hidden markups or renewal price hikes) with free WHOIS privacy forever.

1. **Sign in to Cloudflare**: Go to [dash.cloudflare.com](https://dash.cloudflare.com/).
2. Navigate to **Domain Registration** > **Register Domains** in the left sidebar.
3. Search for: `ariixhairandskinclinic.com`.
4. Click **Purchase / Add to Cart**.
5. Enter your registrant contact information (Name, Address, Phone, Email).
6. Enter payment details and complete the checkout.
7. **Important**: Check your email inbox for the ICANN WHOIS verification email and click the confirmation link.

---

## 3. Step-by-Step: Deploying to Cloudflare Pages

### A. Push Code to Git (GitHub / GitLab)
Ensure your latest code repository is pushed to your Git provider:
```bash
git add .
git commit -m "Configure domain ariixhairandskinclinic.com and Cloudflare headers"
git push origin main
```

### B. Create Pages Project in Cloudflare
1. In Cloudflare Dashboard, go to **Workers & Pages** > **Overview** > click **Create application**.
2. Select the **Pages** tab and click **Connect to Git**.
3. Authorize and select your repository (`ariixhairandskinclinic`).
4. In the **Set up builds and deployments** screen, enter:
   - **Project name**: `ariixhairandskinclinic`
   - **Production branch**: `main` (or `master`)
   - **Framework preset**: `None` or `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next-build` *(matches the `distDir` configured in `next.config.mjs`)*
5. Under **Environment variables (advanced)**, add:
   - Variable: `NODE_VERSION`
   - Value: `20` (or `22`)
6. Click **Save and Deploy**. Cloudflare will build and give you a `*.pages.dev` preview URL.

---

## 4. Connecting Custom Domain & Configuring Cloudflare Settings

### A. Add Custom Domain
1. Inside your Pages project, navigate to the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter `ariixhairandskinclinic.com` and click **Continue**.
4. Since the domain was purchased directly on Cloudflare, DNS records (`CNAME` / apex record) are created automatically with 1 click.
5. Repeat to also add `www.ariixhairandskinclinic.com`.

### B. Essential SSL/TLS & Security Settings
Navigate to your domain's dashboard on Cloudflare (`ariixhairandskinclinic.com`):

1. **SSL/TLS Mode**:
   - Go to **SSL/TLS** > **Overview** > Select **Full (strict)**.
2. **Edge Certificates**:
   - Enable **Always Use HTTPS** (automatically redirects all `http://` to `https://`).
   - Enable **Automatic HTTPS Rewrites**.
   - Set **Minimum TLS Version** to `TLS 1.2`.
   - Enable **TLS 1.3** and **Opportunistic Encryption**.
3. **Security / WAF**:
   - Go to **Security** > **Bots** > Enable **Bot Fight Mode** (protects from malicious scrapers while allowing search engine bots).
4. **Speed & Optimization**:
   - Go to **Speed** > **Optimization** > Enable **Brotli** compression and **Early Hints**.
5. **Canonical Domain Redirect (www to non-www)**:
   - Go to **Rules** > **Redirect Rules** > **Create Rule**.
   - Name: `Redirect WWW to Apex`
   - When incoming requests match: `Hostname equals www.ariixhairandskinclinic.com`
   - URL redirect type: `Dynamic` or `Static`
   - Target URL: `https://ariixhairandskinclinic.com${http.request.uri.path}`
   - Status code: `301 (Permanent Redirect)`

---

## 5. In-Code Next.js SEO & Canonical Settings (Already Applied)

All canonicals, sitemaps, OpenGraph metadata, and JSON-LD schemas dynamically read from `lib/site-config.ts`:

- **Primary URL**: `https://ariixhairandskinclinic.com`
- **MetadataBase**: `new URL("https://ariixhairandskinclinic.com")` in `app/layout.tsx`
- **Canonical Tags**:
  - Home: `https://ariixhairandskinclinic.com/best-skin-care-clinic-in-pune/`
  - Locations: `https://ariixhairandskinclinic.com/locations/kharadi/`, `https://ariixhairandskinclinic.com/locations/sinhagad-road/`
  - All 24 Treatment Pages: `https://ariixhairandskinclinic.com/<slug>/`
- **Sitemap XML**: Auto-generated at `https://ariixhairandskinclinic.com/sitemap.xml`
- **Robots.txt**: Auto-generated at `https://ariixhairandskinclinic.com/robots.txt`
- **Iframe & Portfolio Compatibility**: No restrictive `X-Frame-Options` headers are injected, allowing clean embedding inside portfolio iframes and preview canvases.

---

## 6. Step-by-Step: Google Search Console (GSC) Registration

### Step 1: Add Property in GSC
1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property** in the top-left dropdown.
3. Choose **Domain** property type (covers all subdomains, http, and https):
   - Enter: `ariixhairandskinclinic.com`
   - Click **Continue**.

### Step 2: Verify Ownership via Cloudflare DNS (Instant)
1. GSC will provide a TXT verification string like:
   `google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
2. Open Cloudflare Dashboard > `ariixhairandskinclinic.com` > **DNS** > **Records**.
3. Click **Add Record**:
   - **Type**: `TXT`
   - **Name**: `@` (or `ariixhairandskinclinic.com`)
   - **Content**: paste the `google-site-verification=...` string
   - **TTL**: `Auto`
4. Click **Save**.
5. Return to Google Search Console and click **Verify**. (Verification is instant with Cloudflare DNS).

### Step 3: Submit XML Sitemap
1. In Google Search Console, click **Sitemaps** under the *Indexing* menu.
2. In the "Add a new sitemap" input field, type: `sitemap.xml`
3. Click **Submit**.
4. The status should turn green with **Success**, showing all submitted URLs.

### Step 4: Request Priority Indexing
1. Use the top search bar in GSC (**Inspect any URL in "ariixhairandskinclinic.com"**).
2. Enter `https://ariixhairandskinclinic.com/` (and your location pages).
3. Click **Test Live URL**.
4. Once tested, click **Request Indexing**.

---

## 7. Post-Deployment SEO & Local Ranking Checklist

1. **Google Business Profile (GBP / GMB)**:
   - Log into your Google Business Profiles for **Kharadi Branch** and **Sinhagad Road Branch**.
   - Update the Website link to `https://ariixhairandskinclinic.com/locations/kharadi/` and `https://ariixhairandskinclinic.com/locations/sinhagad-road/` (or the main homepage).
   - Ensure business name, phone numbers (`074474 24938` / `074474 24939`), and hours match `lib/site-config.ts` exactly for NAP consistency.

2. **Bing Webmaster Tools**:
   - Go to [bing.com/webmasters](https://www.bing.com/webmasters).
   - Click **Import from Google Search Console** (1-click verification & sitemap sync for Bing and Yahoo).

3. **Validate Structured Data / Schema Markup**:
   - Test URLs on [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).
   - Confirm valid detection for:
     - `MedicalBusiness` / `DermatologyClinic`
     - `Physician` (Dr. Abhimanyu Jagtap)
     - `MedicalWebPage`
     - `FAQPage`
     - `BreadcrumbList`

4. **Activate Google Analytics 4 / GTM**:
   - When ready, uncomment `<GoogleAnalytics gaId="G-..." />` or `<GoogleTagManager gtmId="GTM-..." />` in `app/layout.tsx` with your measurement ID.

5. **Local Citations & Social Media Profiles**:
   - Update website URLs on Practo, Lybrate, Justdial, Sulekha, Instagram, Facebook, and LinkedIn to `https://ariixhairandskinclinic.com`.
