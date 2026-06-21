/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/about/`
  }
};

/* ─────────── page data ─────────── */
const pillars = [
  {
    icon: Sparkles,
    num: "01",
    title: "Advanced Technology",
    desc: "We invest in state-of-the-art US-FDA approved laser systems, advanced diagnostics, and precision instruments so every procedure is safe and comfortable."
  },
  {
    icon: Heart,
    num: "02",
    title: "Patient-First Philosophy",
    desc: "Every step is explained before it begins. We listen, answer every question, and design personalised care plans built around your comfort, goals, and timeline."
  },
  {
    icon: BadgeCheck,
    num: "03",
    title: "Clinical Excellence",
    desc: "With 12+ years of advanced clinical practice and continuous professional development, Dr. Abhimanyu Jagtap delivers consistently high-quality outcomes."
  }
] as const;


/* ─────────── page ─────────── */
export default function AboutPage() {
  return (
    <main id="main-content" className="overflow-hidden bg-[var(--cream)] pt-[96px] md:pt-[120px]">

      {/* ══════════════════════════════════════════
          1. HERO — split layout
      ══════════════════════════════════════════ */}
      <section className="relative px-[5vw] md:px-[8vw] pb-24 pt-12 md:pb-32 md:pt-16">
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute -left-24 top-10 h-[520px] w-[520px] rounded-full bg-[var(--purple-light)]/10 blur-[140px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-[var(--pink-light)]/10 blur-[120px]" />

        <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">

          {/* ── Content ── */}
          <div className="max-w-[720px] flex flex-col items-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(91,45,142,0.06)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--purple)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--purple)]">About The Clinic</span>
            </div>

            <h1 className="section-title !text-[38px] md:!text-[58px] !leading-[1.08]">
              Gentle, Modern Care<br />
              for <span className="grad-text italic">Healthy Skin &amp; Hair</span>
            </h1>

            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.85] text-[var(--grey)] text-center">
              ARIIX Hair and Skin Clinic by Dr. Abhimanyu Jagtap has been a trusted destination for modern, patient-centred dermatology and hair restoration in Pune. We combine clinical precision with a calm, approachable environment so every patient feels informed and comfortable.
            </p>

            {/* Stat pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {siteConfig.stats.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-2 shadow-sm">
                  <span className="section-title !text-[18px] !leading-none"
                    style={{ background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } as React.CSSProperties}>
                    {s.value}
                  </span>
                  <span className="text-[12px] font-medium text-[var(--grey)]">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(123,75,184,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(123,75,184,0.45)]"
                style={{ background: "var(--grad)" }}>
                Book a Consultation
              </Link>
              <Link href="/treatment"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--purple-light)] bg-white px-7 py-3 text-[14px] font-semibold text-[var(--purple)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--purple)] hover:shadow-md">
                Our Treatments →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. PHILOSOPHY STRIP — dark gradient
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 50%, var(--mauve) 100%)" }}>
        {/* Dot-grid overlay */}
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* Large decorative quotemark */}
        <span className="pointer-events-none absolute left-[6vw] top-4 select-none font-serif text-[180px] leading-none text-white/5">&ldquo;</span>

        <div className="relative z-10 mx-auto max-w-[820px] px-[5vw] text-center md:px-[8vw]">
          <Sparkles className="mx-auto mb-5 text-[var(--pink-light)]" size={26} aria-hidden="true" />
          <blockquote className="section-title !font-light !leading-[1.65] italic text-white !text-[20px] md:!text-[26px]">
            &ldquo;We believe every patient deserves a calm, clear, and comfortable dermatology and hair care experience — built on trust, transparency, and clinical precision.&rdquo;
          </blockquote>
          <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/60">
            — Dr. Abhimanyu Jagtap, Skin, Hair &amp; Laser Specialist
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. THREE PILLARS
      ══════════════════════════════════════════ */}
      <section className="px-[5vw] md:px-[8vw] py-20 md:py-28">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--mauve)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--purple)]">Our Foundation</span>
          </div>
          <h2 className="section-title">
            What Sets Us <span className="grad-text">Apart</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title}
              className="group relative overflow-hidden rounded-[26px] border border-[var(--lavender-mid)] bg-white p-8 shadow-[0_6px_24px_rgba(91,45,142,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--purple-light)] hover:shadow-[0_18px_48px_rgba(91,45,142,0.13)]">
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[26px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--grad)" }} />
              {/* Ghost number */}
              <span className="pointer-events-none absolute right-4 top-2 select-none text-[78px] font-black leading-none text-[var(--purple)]/[0.045]">
                {p.num}
              </span>

              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--mauve)]/10 to-[var(--purple)]/10 transition-all duration-300 group-hover:from-[var(--mauve)]/18 group-hover:to-[var(--purple)]/18">
                <p.icon size={26} className="text-[var(--purple)]" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-[18px] font-bold text-[var(--charcoal)]">{p.title}</h3>
              <p className="text-[14px] leading-[1.82] text-[var(--grey)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>




      {/* ══════════════════════════════════════════
          8. CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="cta-section">
        <h2 className="section-title">Ready for Healthier Skin and Hair?</h2>
        <p>Visit Dr. Abhimanyu Jagtap&apos;s ARIIX Clinic on Kharadi Road or Sinhagad Road and experience premium care at its finest.</p>
        <div className="cta-actions">
          <Link href="/contact-us" className="btn-white">Book an Appointment</Link>
          <Link href="/treatment" className="btn-glass">Explore Treatments</Link>
        </div>
      </section>

    </main>
  );
}