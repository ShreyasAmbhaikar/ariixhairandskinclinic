import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const locationData = siteConfig.locations.find((l) => l.slug === "sinhagad-road")!;

export const metadata: Metadata = {
  title: {
    absolute: "Dermatologist on Sinhagad Road | Ariix Clinic"
  },
  description: "Visit Ariix Clinic on Sinhagad Road (Manikbag), Pune. Dermatologist-led hair transplants, laser hair removal & acne treatments. Book now!",
  alternates: {
    canonical: `${siteConfig.url}/locations/sinhagad-road/`,
    languages: {
      "en-IN": `${siteConfig.url}/locations/sinhagad-road/`,
      "x-default": `${siteConfig.url}/locations/sinhagad-road/`
    }
  }
};

export default function SinhagadRoadLocationPage() {
  const pageUrl = `${siteConfig.url}/locations/sinhagad-road/`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "DermatologyClinic",
      "@id": `${siteConfig.url}/locations/sinhagad-road/#clinic`,
      "name": `${siteConfig.name} - Sinhagad Road Branch`,
      "url": pageUrl,
      "logo": `${siteConfig.url}/images/logo-symbol.webp`,
      "image": `${siteConfig.url}/images/logo-symbol.webp`,
      "description": `Visit Ariix Hair and Skin Clinic at Sinhagad Road (Manikbag), Pune. Open Mon-Sat with convenient timings for hair transplant, PRP, acne, and laser treatments.`,
      "telephone": locationData.phone,
      "email": siteConfig.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": locationData.address.streetAddress,
        "addressLocality": locationData.address.addressLocality,
        "addressRegion": locationData.address.addressRegion,
        "postalCode": locationData.address.postalCode,
        "addressCountry": locationData.address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": locationData.geo.latitude,
        "longitude": locationData.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:30",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "17:30",
          "closes": "21:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": locationData.reviews.rating,
        "reviewCount": locationData.reviews.count
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${siteConfig.url}/best-skin-care-clinic-in-pune/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sinhagad Road Branch",
          "item": pageUrl
        }
      ]
    }
  ];

  return (
    <>
      <main id="main-content" className="relative overflow-hidden bg-[var(--cream)] px-[5vw] pb-24 pt-[96px] md:px-[8vw] md:pb-32 md:pt-[120px]">
      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute top-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--purple-light)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--mauve)]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] !pt-12 md:!pt-16">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-[13px] font-medium text-[var(--grey)] flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--purple)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/treatment" className="hover:text-[var(--purple)] transition-colors">Locations</Link>
          <span>/</span>
          <span className="text-[var(--charcoal)] font-bold">Sinhagad Road Branch</span>
        </div>

        {/* Header Block */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(91,45,142,0.05)] mb-4">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--purple)]">
              Sinhagad Road Clinic (Manikbag)
            </span>
          </div>
          <h1 className="section-title text-[36px] font-extrabold leading-[1.1] text-[var(--charcoal)] md:text-[52px]">
            ARIIX <span className="grad-text">Hair &amp; Skin Clinic</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Column 1 & 2: Details Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-[32px] border border-[var(--lavender-mid)]/60 bg-white p-8 md:p-10 shadow-[0_12px_44px_rgba(91,45,142,0.04)]">
              <h2 className="text-[22px] font-black text-[var(--charcoal)] mb-6 pb-3 border-b border-[var(--lavender-mid)]/30">
                Branch Information
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-wider text-[var(--purple)] mb-2">Clinic Address</h3>
                  <p className="text-[14.5px] leading-[1.7] text-[var(--charcoal)] font-medium mb-4">
                    2nd Floor, Subhadra Smruti Building, Manikbag, Sinhgad Rd, opposite Indian Oil Petrol Pump, above Indian Overseas Bank, Anand Nagar, Pune, Maharashtra 411051
                  </p>
                  <a 
                    href={locationData.gmbLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex h-[42px] items-center justify-center rounded-full bg-gradient-to-r from-[var(--mauve)] to-[var(--purple)] px-6 text-[13px] font-bold text-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 duration-200"
                  >
                    🗺️ Open in Google Maps
                  </a>
                </div>

                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-wider text-[var(--purple)] mb-2">Opening Hours</h3>
                  <div className="space-y-2 text-[14px]">
                    <div className="flex justify-between py-1 border-b border-dashed border-[var(--lavender-mid)]/20 font-bold text-[var(--charcoal)]">
                      <span>Mon - Sat (Morning)</span>
                      <span className="text-[var(--charcoal)]">10:30 AM – 2:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-[var(--lavender-mid)]/20 font-bold text-[var(--charcoal)]">
                      <span>Mon - Sat (Evening)</span>
                      <span className="text-[var(--charcoal)]">5:30 PM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-[var(--lavender-mid)]/20 text-[var(--grey)]">
                      <span>Sunday</span>
                      <span className="text-rose-500 font-semibold">Closed</span>
                    </div>
                    <div className="mt-3 text-[11.5px] italic text-[var(--grey)] leading-[1.5]">
                      *For Sunday consultations, please visit our Kharadi branch (open Sundays 12:00 PM – 8:00 PM).
                    </div>
                  </div>
                </div>
              </div>

              {/* Call Hotline Info */}
              <div className="mt-8 pt-6 border-t border-[var(--lavender-mid)]/30 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-wider text-[var(--purple)] mb-1">Central Booking Helpline</h3>
                  <p className="text-[20px] font-black text-[var(--charcoal)]">
                    <a href="tel:+917447424939" className="hover:text-[var(--purple)] transition-colors">📞 +91 74474 24939</a>
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-[var(--lavender-bg)] px-5 py-3 border border-[var(--lavender-mid)]/40">
                  <span className="text-[24px]">⭐</span>
                  <div>
                    <div className="text-[14px] font-black text-[var(--charcoal)]">5.0 Star Rating</div>
                    <div className="text-[11px] font-medium text-[var(--grey)]">Based on 170 verified Google Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview / Introduction */}
            <div className="rounded-[32px] border border-[var(--lavender-mid)]/60 bg-gradient-to-br from-white to-[var(--lavender-bg)]/20 p-8 md:p-10 shadow-[0_12px_44px_rgba(91,45,142,0.04)]">
              <h3 className="text-[20px] font-extrabold text-[var(--charcoal)] mb-4">Why Visit Our Sinhagad Road Branch?</h3>
              <p className="text-[14.5px] leading-[1.8] text-[var(--grey)] mb-4">
                Located at Manikbag on Sinhagad Road, our clinic is highly accessible for patients from Anand Nagar, Manikbag, Hingne, Dhayari, and Karve Nagar. Offering split morning and evening slots from Monday to Saturday, it accommodates the schedules of working professionals, homemakers, and students alike.
              </p>
              <p className="text-[14.5px] leading-[1.8] text-[var(--grey)]">
                Our Sinhagad Road clinic serves as our primary branch, featuring 170+ verified 5-star Google reviews and state-of-the-art diagnostic and clinical laser suites. Dr. Abhimanyu Jagtap leads all consultations, diagnoses, and medical procedures, providing highly personalized, safety-focused skin and hair care.
              </p>
            </div>
          </div>

          {/* Column 3: Booking/CTA Sidebar */}
          <div className="space-y-6">
            <div className="rounded-[32px] bg-gradient-to-br from-[#7B4BB8] to-[#5B2D8E] p-8 text-white shadow-[0_12px_36px_rgba(91,45,142,0.15)]">
              <h3 className="text-[22px] font-black leading-tight mb-3">Schedule Appointment</h3>
              <p className="text-[13px] leading-relaxed text-white/85 mb-6">
                Book a consultation for hair transplant, laser hair removal, acne scar management, pigmentation care, or customized chemical peels at Manikbag.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:+917447424939" 
                  className="flex h-[48px] items-center justify-center rounded-2xl bg-white text-[var(--purple)] text-[14px] font-bold hover:bg-[var(--cream)] transition-colors"
                >
                  📞 Click to Call Now
                </a>
                <a 
                  href="https://wa.me/917447424939" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex h-[48px] items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-[14px] font-bold hover:bg-white/20 transition-colors"
                >
                  💬 WhatsApp Message
                </a>
              </div>
              <div className="mt-6 text-center text-[11px] text-white/60">
                *Helpline active Mon-Sun: 9 AM - 9 PM
              </div>
            </div>

            {/* Core Services Available */}
            <div className="rounded-[32px] border border-[var(--lavender-mid)]/60 bg-white p-6 shadow-sm">
              <h4 className="text-[15px] font-bold text-[var(--charcoal)] mb-4">Treatments Offered</h4>
              <ul className="space-y-2.5 text-[13.5px] text-[var(--grey)]">
                <li className="flex items-center gap-2"><span className="text-[10px] text-[var(--purple)]">✦</span> FUE Hair Transplantation</li>
                <li className="flex items-center gap-2"><span className="text-[10px] text-[var(--purple)]">✦</span> PRP Hair Treatment</li>
                <li className="flex items-center gap-2"><span className="text-[10px] text-[var(--purple)]">✦</span> Acne &amp; Acne Scar Control</li>
                <li className="flex items-center gap-2"><span className="text-[10px] text-[var(--purple)]">✦</span> Laser Hair Removal</li>
                <li className="flex items-center gap-2"><span className="text-[10px] text-[var(--purple)]">✦</span> Skin Tag &amp; Mole Removal</li>
                <li className="flex items-center gap-2"><span className="text-[10px] text-[var(--purple)]">✦</span> Chemical Peels &amp; Medi-Facials</li>
              </ul>
              <div className="mt-5 pt-4 border-t border-dashed border-[var(--lavender-mid)]/30 text-center">
                <Link href="/treatment" className="text-[12px] font-bold text-[var(--purple)] hover:underline">
                  View All Treatments →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
    {schemas.map((schema, i) => (
      <script
        key={i}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c")
        }}
      />
    ))}
  </>
  );
}
