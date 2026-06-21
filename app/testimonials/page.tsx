import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Patient Reviews & Testimonials | Ariix Clinic"
  },
  description: "Read real success stories and reviews from patients who underwent hair transplant, laser & skin treatments at Ariix Clinic.",
  alternates: {
    canonical: `${siteConfig.url}/testimonials/`,
    languages: {
      "en-IN": `${siteConfig.url}/testimonials/`,
      "x-default": `${siteConfig.url}/testimonials/`
    }
  }
};

function getAvatarColor(name: string) {
  const colors = [
    "bg-[#f0e7ff] text-[#6d28d9] border border-[#d8b4fe]/40", // Purple
    "bg-[#e6f4ea] text-[#137333] border border-[#a8dab5]/40", // Green
    "bg-[#fff2e6] text-[#c05621] border border-[#ffd8a8]/40", // Orange
    "bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]/40", // Blue
    "bg-[#ffe4e6] text-[#be123c] border border-[#fecdd3]/40", // Pink
    "bg-[#fef3c7] text-[#b45309] border border-[#fde68a]/40"  // Yellow
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

export default function TestimonialsPage() {
  const testimonials = siteConfig.testimonials;
  const pageUrl = `${siteConfig.url}/testimonials/`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteConfig.url}/testimonials/#webpage`,
      "url": pageUrl,
      "name": "Patient Reviews & Testimonials - Ariix Hair & Skin Clinic",
      "description": "Read real reviews and success stories from patients who underwent hair transplant, laser hair removal, and skin treatments at Ariix Clinic.",
      "reviewedBy": {
        "@type": "DermatologyClinic",
        "name": "Ariix Hair and Skin Clinic",
        "url": siteConfig.url
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
          "name": "Testimonials",
          "item": pageUrl
        }
      ]
    }
  ];

  return (
    <>
      <main
        id="main-content"
        className="relative overflow-hidden bg-gradient-to-b from-[var(--cream)] via-[#FAF3FF] to-[#F3EAFF] px-2.5 pb-20 pt-[96px] sm:px-6 md:px-14 md:pb-24 md:pt-[120px]"
      >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "linear-gradient(rgba(91, 45, 142, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(91, 45, 142, 0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />
      
      {/* Premium Gradient Blur Ornaments */}
      <div className="absolute top-[8%] left-[-10%] h-[450px] w-[450px] rounded-full bg-[var(--purple-light)]/22 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-12%] h-[600px] w-[600px] rounded-full bg-[var(--purple)]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[2%] left-[3%] h-[400px] w-[400px] rounded-full bg-[var(--pink-light)]/20 blur-[110px] pointer-events-none" />
 
      <section className="relative z-10 mx-auto max-w-[1360px] !pt-12 md:!pt-16">
        {/* Header Section */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(91,45,142,0.05)]">
            <span className="h-2 w-2 rounded-full bg-[var(--purple)] animate-pulse" />
            <span className="font-label-sm text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--purple)]">
              User Reviews
            </span>
          </div>
          <h1 className="section-title text-[36px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[54px]">
            More than 1000+ <span className="grad-text">Happy Customers</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] font-body-main text-[15px] leading-7 text-[var(--grey)]">
            Read authentic feedback from patients who trust {siteConfig.name} for safe, 
            advanced skin, hair, and laser treatments in Pune.
          </p>
        </div>
 
        {/* Masonry Columns Grid */}
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [column-fill:_balance]">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </section>
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

function truncateQuote(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function TestimonialCard({ item }: { item: typeof siteConfig.testimonials[number] }) {
  const isLocalGuide = item.name.includes("Local Guide");
  const displayName = item.name.replace(" (Local Guide)", "");
  const hasAvatarFile = item.image.startsWith("/images/testimonial/");
  const initials = displayName.split(" ").map(n => n[0]).join("").toUpperCase();
  const handle = `@${displayName.toLowerCase().replace(/\s+/g, "")}`;

  return (
    <article className="group mb-6 break-inside-avoid rounded-[22px] border border-[var(--lavender-mid)]/60 bg-gradient-to-br from-white to-[var(--lavender-bg)]/20 p-4 sm:p-6 shadow-[0_12px_36px_rgba(91,45,142,0.06)] transition-all duration-300 hover:bg-white hover:border-[var(--purple-light)] hover:shadow-[0_22px_44px_rgba(123,75,184,0.12)]">
      {/* Top Row: Info & Rating */}
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          {hasAvatarFile ? (
            <div className={`h-11 w-11 shrink-0 transition-colors duration-300 ${
              isLocalGuide
                ? "overflow-visible rounded-none border-0 bg-transparent"
                : "overflow-hidden rounded-full border border-[var(--lavender-mid)] bg-[var(--lavender-bg)] group-hover:border-[var(--purple)]"
            }`}>
              <Image
                src={item.image}
                alt={`${displayName} profile photo`}
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-[13px] transition-transform duration-300 group-hover:scale-105 ${getAvatarColor(displayName)}`}>
              {initials}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap min-w-0 mb-0.5">
              <h2 className="font-card-title text-[15px] font-bold leading-tight text-[var(--charcoal)] truncate">
                {displayName}
              </h2>
              {isLocalGuide && (
                <span className="inline-flex items-center gap-1 text-[8.5px] font-extrabold uppercase tracking-wider text-[var(--purple)] bg-[var(--lavender-bg)] px-2 py-0.5 rounded-full border border-[var(--lavender-mid)] shrink-0">
                  Local Guide
                </span>
              )}
            </div>
            <p className="font-body-main text-[11px] text-[var(--grey)] truncate">
              {handle}
            </p>
          </div>
        </div>

        {/* Glowing Purple Star and Rating Badge */}
        <div className="flex items-center gap-1.5 rounded-full border border-[var(--lavender-mid)] bg-[var(--lavender-bg)] px-2.5 py-1 shrink-0 transition-all duration-300 group-hover:border-[var(--purple-light)] group-hover:bg-[var(--lavender-mid)]/40">
          <Star className="h-3.5 w-3.5 fill-current text-[var(--purple)] drop-shadow-[0_0_4px_rgba(123,75,184,0.35)] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          <span className="font-hero-heading text-[12px] font-extrabold text-[var(--purple-dark)] leading-none">
            {item.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Speech-bubble Quote Block */}
      <div className="relative overflow-hidden rounded-[16px] bg-white border border-[var(--lavender-mid)]/40 px-3 py-3.5 sm:px-5 sm:py-4 shadow-[0_4px_16px_rgba(91,45,142,0.02)]">
        <span className="absolute -top-1 left-2 font-serif text-[44px] text-[var(--purple-light)]/20 leading-none select-none">“</span>
        <p className="relative z-10 pl-2 sm:pl-4 font-body-main text-[14px] leading-7 text-[var(--grey)] whitespace-pre-line">
          {truncateQuote(item.quote, 400)}
        </p>
      </div>
    </article>
  );
}
