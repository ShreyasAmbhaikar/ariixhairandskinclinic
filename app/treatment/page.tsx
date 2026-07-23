import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, categorizedTreatments } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Skin, Hair & Laser Treatments | Ariix Clinic"
  },
  description:
    "Explore advanced skin, hair, and laser treatments by Dr. Abhimanyu Jagtap at Ariix Hair & Skin Clinic in Pune. Book a consult!",
  alternates: {
    canonical: `${siteConfig.url}/treatment/`,
    languages: {
      "en-IN": `${siteConfig.url}/treatment/`,
      "x-default": `${siteConfig.url}/treatment/`
    }
  }
};

export default function OurServicesPage() {
  const pageUrl = `${siteConfig.url}/treatment/`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteConfig.url}/treatment/#webpage`,
      "url": pageUrl,
      "name": "Skin, Hair & Laser Treatments in Pune - Ariix Clinic",
      "description":
        "Explore the wide range of advanced skin, hair, and laser treatments offered by Dr. Abhimanyu Jagtap at Ariix Hair and Skin Clinic in Pune.",
      "about": {
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
          "name": "Treatments",
          "item": pageUrl
        }
      ]
    }
  ];

  return (
    <>
      <main
        id="main-content"
        className="relative overflow-hidden bg-[var(--cream)] px-4 pb-20 pt-[88px] sm:px-[5vw] sm:pb-28 sm:pt-[110px] md:px-[6vw]"
      >
        {/* Ambient background lighting orbs */}
        <div className="pointer-events-none absolute top-[6%] left-[-8%] h-[500px] w-[500px] rounded-full bg-[var(--purple-light)]/12 blur-[130px]" />
        <div className="pointer-events-none absolute top-[45%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[var(--mauve)]/8 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-[5%] left-[5%] h-[380px] w-[380px] rounded-full bg-[var(--pink-light)]/10 blur-[110px]" />

        <section className="relative z-10 mx-auto max-w-[1360px] pt-4 sm:pt-8 md:pt-10">
          {/* ── Page Header ── */}
          <div className="mb-10 sm:mb-14 text-center px-2">
            <div className="mx-auto mb-3.5 inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-3.5 py-1.5 shadow-[0_4px_12px_rgba(91,45,142,0.05)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--purple)]" />
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--purple)]">
                Our Procedures & Services
              </span>
            </div>
            <h1 className="section-title text-[32px] sm:text-[42px] font-extrabold leading-[1.1] text-[var(--charcoal)] md:text-[56px]">
              Our <span className="grad-text">Treatments</span>
            </h1>
            <p className="mx-auto mt-3 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-[var(--grey)]">
              Explore our complete range of skin, hair, and laser treatments — from advanced clinical diagnostics to medical-grade aesthetic procedures by Dr. Abhimanyu Jagtap in Pune.
            </p>
          </div>

          {/* ── Categories Sections ── */}
          <div className="space-y-12 sm:space-y-16">
            {categorizedTreatments.map((category, catIndex) => (
              <div key={category.name} className="space-y-5 sm:space-y-6">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[var(--lavender-mid)]/60 pb-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="h-5 sm:h-6 w-[3.5px] rounded-full bg-gradient-to-b from-[#B05090] to-[#5B2D8E]" />
                    <h2 className="section-title italic !text-[20px] sm:!text-[23px] md:!text-[26px] !leading-none font-bold text-[var(--charcoal)]">
                      {category.name}
                    </h2>
                  </div>
                  <span className="rounded-full bg-[var(--purple)]/8 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--purple)] border border-[var(--purple)]/15">
                    {category.items.length} Treatments
                  </span>
                </div>

                {/* Treatment Cards Grid — Generous Spacing & Perfectly Aligned Mobile/Desktop Cards */}
                <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIndex) => {
                    const treatmentInfo = siteConfig.treatments.find(
                      (t) => t.href === item.href
                    );
                    const slug = item.href.replace(/\//g, "");
                    const imageSrc = `/images/cards/${slug}.webp`;
                    const isPriority = catIndex === 0 && itemIndex < 3;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex flex-col overflow-hidden rounded-[18px] sm:rounded-[20px] border border-[var(--lavender-mid)]/80 bg-white shadow-[0_4px_16px_rgba(91,45,142,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--purple)]/40 hover:shadow-[0_12px_28px_rgba(91,45,142,0.14)]"
                      >
                        {/* Responsive Top Image Box (16:10 on mobile, 4:3 on tablet/desktop) */}
                        <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full shrink-0 overflow-hidden bg-[var(--cream)]">
                          <Image
                            src={imageSrc}
                            alt={`${item.title} at Ariix Hair and Skin Clinic Pune`}
                            width={600}
                            height={450}
                            priority={isPriority}
                            loading={isPriority ? undefined : "lazy"}
                            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Card Content Area with Ample Padding and Zero Overlap */}
                        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 bg-white">
                          <div className="space-y-1.5">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-[16px] sm:text-[17px] font-extrabold leading-snug text-[var(--charcoal)] transition-colors duration-300 group-hover:text-[var(--purple)]">
                                {item.title}
                              </h3>
                              <span className="shrink-0 text-[var(--purple)] opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 mt-0.5">
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                            </div>

                            <p className="text-[13px] leading-relaxed text-[var(--grey)] font-normal line-clamp-3 sm:line-clamp-2">
                              {treatmentInfo?.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
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
