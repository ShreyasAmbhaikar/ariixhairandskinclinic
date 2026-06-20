import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, categorizedTreatments } from "@/lib/site-config";
export const metadata: Metadata = {
  title: "Our Treatments",
  description: `Explore treatment pages at ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/treatment`
  }
};
export default function OurServicesPage() {
  return (
    <main
      id="main-content"
      className="relative overflow-hidden bg-[var(--cream)] px-[5vw] pb-24 pt-[96px] md:px-[8vw] md:pb-32 md:pt-[120px]"
    >
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute top-[6%] left-[-8%] h-[500px] w-[500px] rounded-full bg-[var(--purple-light)]/12 blur-[130px]" />
      <div className="pointer-events-none absolute top-[45%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[var(--mauve)]/8 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[5%] h-[380px] w-[380px] rounded-full bg-[var(--pink-light)]/10 blur-[110px]" />
      <section className="relative z-10 mx-auto max-w-[1360px] !pt-12 md:!pt-16">
        {/* ── Page header ── */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(91,45,142,0.05)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--purple)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--purple)]">
              Treatments   
            </span>
          </div>
          <h1 className="section-title text-[36px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[56px]">
            Our <span className="grad-text">Treatments</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-[var(--grey)]">
            Explore our complete range of skin, hair, and laser treatments — from advanced clinical diagnostics to medical-grade aesthetic procedures, each designed for lasting, visible results.
          </p>
        </div>
        {/* ── Categories ── */}
        <div className="space-y-20">
          {categorizedTreatments.map((category) => (
            <div key={category.name}>
              {/* Category label */}
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--lavender-mid)]/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-[3px] animate-pulse rounded-full bg-gradient-to-b from-[var(--mauve)] to-[var(--purple)]" />
                  <h2 className="section-title italic !text-[22px] md:!text-[26px] !leading-none">
                    {category.name}
                  </h2>
                </div>
                <span className="rounded-full bg-[var(--purple)]/8 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--purple)]">
                  {category.items.length} Treatments
                </span>
              </div>
              {/* Cards grid — 3 columns on desktop */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => {
                  const treatmentInfo = siteConfig.treatments.find(
                    (t) => t.href === item.href
                  );
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#B05090] via-[#7B4BB8] to-[#5B2D8E] p-8 shadow-[0_10px_28px_rgba(91,45,142,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_28px_60px_rgba(91,45,142,0.38)]"
                    >
                      {/* Floating inner glow orbs */}
                      <div className="pointer-events-none absolute -top-8 -right-8 h-44 w-44 rounded-full bg-white/[0.06] blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:bg-white/[0.10]" />
                      <div className="pointer-events-none absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-[var(--pink-light)]/10 blur-xl transition-all duration-700 group-hover:bg-[var(--pink-light)]/20" />
                      {/* Ghost number watermark */}
                      <span
                        className="pointer-events-none absolute right-5 top-3 select-none font-black leading-none text-white/[0.06] transition-all duration-500 group-hover:text-white/[0.10]"
                        style={{ fontSize: "clamp(68px, 7vw, 92px)" }}
                      >
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      {/* Card content */}
                      <div className="relative z-10 flex flex-1 flex-col">
                        {/* Small glass number badge */}
                        <span className="mb-5 inline-flex h-8 w-8 items-center justify-center self-start rounded-full border border-white/30 bg-white/10 text-[11px] font-black text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white/55 group-hover:bg-white/20">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>
                        {/* Treatment title */}
                        <h3 className="text-[19px] font-extrabold leading-snug text-white transition-colors duration-300 group-hover:text-[var(--pink-light)] md:text-[21px]">
                          {item.title}
                        </h3>
                        {/* Animated expanding separator */}
                        <div className="my-4 h-[2px] w-8 rounded-full bg-gradient-to-r from-[var(--pink-light)] via-white/50 to-transparent transition-all duration-500 group-hover:w-16" />
                        {/* Description */}
                        <p className="flex-1 text-[13.5px] leading-[1.78] text-white/80 md:text-[14px]">
                          {treatmentInfo?.description}
                        </p>
                        {/* Explore link row */}
                        <div className="mt-7 flex items-center gap-2.5">
                          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/58 transition-colors duration-300 group-hover:text-white/95">
                            Explore Treatment
                          </span>
                          {/* Animated arrow circle */}
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:border-white/55 group-hover:bg-white/25">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
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
  );
}
