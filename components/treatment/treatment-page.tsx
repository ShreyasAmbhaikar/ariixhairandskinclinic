import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock4,
  MapPin,
  Phone,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  WandSparkles
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Reason = {
  title: string;
  text: string;
};

type Step = {
  title: string;
  text: string;
};

type InfoTileData = {
  title: string;
  text: string;
  icon: "smile" | "shield" | "clock" | "cost";
};

type FAQ = {
  question: string;
  answer: string;
};

type InternalLink = {
  label: string;
  href: string;
};

type SimpleCard = {
  title: string;
  text: string;
};

type NumberedCard = {
  text: string;
};

type ExtraSection = {
  kicker: string;
  title: string;
  text: string;
  estimateTitle: string;
  estimateText: string;
  listTitle: string;
  list: readonly string[];
  listVisibleCount?: number;
  sectionClassName?: string;
};

export type TreatmentPageData = {
  pagePath: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  structuredPageName?: string;
  breadcrumbName?: string;
  h1Lines: string[];
  heroBadge: string;
  heroIntro: string;
  heroImage: string;
  heroAlt: string;
  ogImageAlt?: string;
  heroObjectPosition?: string;
  heroGradientClassName?: string;
  heroBadgeIcon?: "smile" | "sparkles";
  ctaLabel: string;
  quickTreatment: string;
  symptomsKicker: string;
  symptomsTitle: string;
  symptoms: readonly string[];
  symptomsVisibleCount?: number;
  overviewKicker: string;
  overviewTitle: string;
  overviewParagraphs: readonly string[];
  overviewCards?: readonly NumberedCard[];
  reasonsTitle: string;
  reasonsDescription: string;
  reasons: readonly Reason[];
  stepsTitle: string;
  steps: readonly Step[];
  procedureImage: string;
  procedureImageAlt: string;
  procedureImageObjectPosition?: string;
  procedureNoteTitle: string;
  procedureNoteText: string;
  highlightKicker?: string;
  highlightTitle?: string;
  infoTiles?: readonly InfoTileData[];
  highlightGridClassName?: string;
  comparison?: {
    kicker: string;
    title: string;
    cards: readonly SimpleCard[];
    sectionClassName?: string;
  };
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: readonly string[];
  benefitsSectionClassName?: string;
  extra?: ExtraSection;
  faqTitle: string;
  faqs: readonly FAQ[];
  faqSectionClassName?: string;
  ctaKicker: string;
  ctaTitle: string;
  ctaText: string;
  internalLinks: readonly InternalLink[];
  structuredProcedureName: string;
  structuredHowPerformed: string;
};

const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function createTreatmentMetadata(data: TreatmentPageData): Metadata {
  const pageUrl = `${siteConfig.url}${data.pagePath}${data.pagePath.endsWith('/') ? '' : '/'}`;
  const heroImageAbsolute = new URL(data.heroImage, siteConfig.url).toString();

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: heroImageAbsolute,
          width: 1200,
          height: 630,
          alt: data.ogImageAlt ?? data.heroAlt
        }
      ]
    }
  };
}

export function TreatmentPage({ data }: { data: TreatmentPageData }) {
  const pageUrl = `${siteConfig.url}${data.pagePath}${data.pagePath.endsWith('/') ? '' : '/'}`;
  const heroImageAbsolute = new URL(data.heroImage, siteConfig.url).toString();
  const BadgeIcon = data.heroBadgeIcon === "sparkles" ? Sparkles : SmilePlus;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: data.structuredPageName ?? data.ogTitle,
      url: pageUrl,
      description: data.metaDescription,
      image: heroImageAbsolute,
      about: {
        "@type": "MedicalProcedure",
        name: data.structuredProcedureName,
        howPerformed: data.structuredHowPerformed
      },
      provider: {
        "@type": "DermatologyClinic",
        "@id": `${siteConfig.url}/#clinic`,
        name: siteConfig.name,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          ...siteConfig.address
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.breadcrumbName ?? data.ogTitle,
          item: pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={data.heroImage}
        fetchPriority="high"
      />
      <main id="main-content" className="bg-[var(--cream)] pt-[56px] md:pt-[68px]">
        <section className="relative overflow-hidden bg-[var(--cream)]">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.heroImage}
              alt={data.heroAlt}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectFit: "cover", objectPosition: data.heroObjectPosition ?? "50% 50%" }}
              fetchPriority="high"
              loading="eager"
              width={1920}
              height={1080}
            />
            <div className={data.heroGradientClassName ?? "absolute inset-0 bg-[linear-gradient(90deg,rgba(28,18,37,0.95)_0%,rgba(91,45,142,0.85)_46%,rgba(253,248,255,0.12)_100%)]"} />
          </div>

          <div className="relative mx-auto grid min-h-[350px] lg:min-h-[520px] w-full max-w-[1360px] items-center gap-7 px-4 pb-6 pt-6 sm:px-6 md:px-14 md:pt-8 lg:grid-cols-[minmax(0,1fr)_540px] lg:pb-6 lg:pt-10">
            <div className="w-full min-w-0 max-w-none pb-6 text-white sm:max-w-[380px] md:max-w-[850px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                <BadgeIcon className="h-4 w-4" aria-hidden="true" />
                {data.heroBadge}
              </div>
              <h1 className="max-w-full break-words font-hero-heading text-[32px] font-extrabold leading-[1.08] text-white md:max-w-[15ch] md:text-[52px]">
                {data.h1Lines.map((line) => (
                  <span key={line} className="block md:inline">
                    {line}{" "}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-[32ch] font-body-main text-[16px] leading-8 text-white/96 sm:max-w-[34ch] md:max-w-[700px] md:text-[19px] md:leading-9">
                {data.heroIntro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 font-label-sm text-sm font-bold text-[var(--purple)] shadow-[0_4px_12px_rgba(91,45,142,0.06)] transition-colors hover:bg-[var(--lavender-bg)]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {data.ctaLabel}
                </a>
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-white/26 bg-white/10 px-6 font-label-sm text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/16"
                >
                  WhatsApp Appointment
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="w-full min-w-0 max-w-none overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.15)] backdrop-blur-md">
              <p className="font-label-sm text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 mb-3.5 text-center">
                Quick Clinic Details
              </p>
              <div className="space-y-4">
                {/* Sinhagad Road Branch Card */}
                <div className="rounded-[20px] bg-white/90 border border-white/30 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] text-left backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[var(--purple)]" />
                    <div className="font-bold text-[14.5px] tracking-wide text-[var(--charcoal)]">Sinhagad Road Branch</div>
                  </div>
                  <p className="text-[12.5px] text-[var(--grey)] leading-relaxed mb-3">
                    2nd Floor, Subhadra Smruti Building, Manikbag, opposite Indian Oil Petrol Pump, Anand Nagar, Sinhgad Rd, Pune 411051
                  </p>
                  <div className="flex items-start gap-2 pt-2.5 border-t border-[var(--lavender-mid)]/40 mb-3">
                    <Clock4 className="h-3.5 w-3.5 mt-0.5 text-[var(--purple)]" />
                    <div className="text-[11.5px] space-y-0.5 text-[var(--charcoal)]">
                      <span className="font-bold flex justify-between gap-4">
                        <span>Mon – Sat (Morning)</span>
                        <span>10:30 AM – 2:00 PM</span>
                      </span>
                      <span className="font-bold flex justify-between gap-4">
                        <span>Mon – Sat (Evening)</span>
                        <span>5:30 PM – 9:00 PM</span>
                      </span>
                      <span className="text-[var(--grey)] text-[10.5px] block pt-0.5">Sunday: Closed</span>
                    </div>
                  </div>
                  <a
                    href="/locations/sinhagad-road"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--purple)] hover:text-[var(--purple-dark)] transition-colors"
                  >
                    <span>View Branch & Map</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Kharadi Branch Card */}
                <div className="rounded-[20px] bg-white/90 border border-white/30 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] text-left backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[var(--purple)]" />
                    <div className="font-bold text-[14.5px] tracking-wide text-[var(--charcoal)]">Kharadi Branch</div>
                  </div>
                  <p className="text-[12.5px] text-[var(--grey)] leading-relaxed mb-3">
                    Near Unnati Mahindra Showroom, Upper Kharadi Main Rd, behind Komal Silk House, Wagholi, Pune 412207
                  </p>
                  <div className="flex items-start gap-2 pt-2.5 border-t border-[var(--lavender-mid)]/40 mb-3">
                    <Clock4 className="h-3.5 w-3.5 mt-0.5 text-[var(--purple)]" />
                    <div className="text-[11.5px] text-[var(--charcoal)]">
                      <span className="font-bold block">Sunday: 12:00 PM – 8:00 PM</span>
                      <span className="text-[var(--grey)] text-[10.5px]">Mon – Sat: Closed</span>
                    </div>
                  </div>
                  <a
                    href="/locations/kharadi"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--purple)] hover:text-[var(--purple-dark)] transition-colors"
                  >
                    <span>View Branch & Map</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="deferred-section px-4 py-12 sm:px-6 md:px-14 md:py-16 bg-gradient-to-b from-white to-[var(--cream)]/30">
          <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
            <aside className="min-w-0 lg:sticky lg:top-24">
              <div className="w-full min-w-0 max-w-none rounded-[28px] bg-grad p-7 text-white shadow-[0_20px_52px_rgba(91,45,142,0.14)]">
                <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-white/88">
                  {data.symptomsKicker}
                </p>
                <h2 className="mt-3 font-section-heading text-[28px] font-extrabold leading-[1.12] md:text-[30px]">
                  {data.symptomsTitle}
                </h2>
                <ul className="mt-6 space-y-3">
                  {data.symptoms.slice(0, data.symptomsVisibleCount ?? 7).map((symptom) => (
                    <li key={symptom} className="flex min-w-0 gap-3 font-body-main text-[14px] leading-6 text-white/96">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="min-w-0 space-y-6">
              <SectionKicker>{data.overviewKicker}</SectionKicker>
              <h2 className="max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[46px]">
                {data.overviewTitle}
              </h2>
              <div className="space-y-5 font-body-main text-[16px] leading-8 text-[var(--grey)] md:text-[17px]">
                {data.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {data.overviewCards ? (
                <div className="grid gap-3 sm:grid-cols-3">
                  {data.overviewCards.map((card, index) => (
                    <div key={card.text} className="rounded-[18px] bg-[var(--lavender-bg)] p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--purple)] font-card-title text-[14px] font-extrabold text-white">
                        {index + 1}
                      </span>
                      <p className="mt-4 font-body-main text-[14px] font-semibold leading-6 text-[var(--charcoal)]">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="deferred-section bg-gradient-to-r from-[#B05090] via-[#7B4BB8] to-[#5B2D8E] px-6 py-16 md:px-14 md:py-20 text-white">
          <div className="mx-auto max-w-[1120px]">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionKicker className="text-pink-200">Why Choose Us</SectionKicker>
                <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-white md:text-[46px]">
                  {data.reasonsTitle}
                </h2>
              </div>
              <p className="max-w-[370px] font-body-main text-[15px] leading-7 text-white/80">
                {data.reasonsDescription}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.reasons.map((reason, index) => {
                const Icon = [BadgeCheck, ShieldCheck, Sparkles, MapPin][index] ?? BadgeCheck;

                return (
                  <article key={reason.title} className="rounded-[18px] bg-white/10 border border-white/20 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--purple)] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-card-title text-[18px] font-bold leading-6 text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-3 font-body-main text-[14px] leading-6 text-white/85">
                      {reason.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {data.infoTiles && data.infoTiles.length > 0 ? (
          <section className="deferred-section bg-[#FDF8FF] text-[var(--charcoal)] px-6 py-12 md:px-14 md:py-14">
            <div className="mx-auto grid max-w-[1120px] gap-7 lg:grid-cols-[0.85fr_1.2fr] lg:items-start">
              <div>
                <p className="font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--purple)]">
                  {data.highlightKicker}
                </p>
                <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[46px]">
                  {data.highlightTitle}
                </h2>
              </div>

              <div className={data.highlightGridClassName ?? "grid gap-5 md:grid-cols-3"}>
                {data.infoTiles.map((tile) => (
                  <InfoTile key={tile.title} data={tile} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="deferred-section px-6 py-16 md:px-14 md:py-20 bg-gradient-to-b from-white to-[#FAF6FF]">
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionKicker>The Procedure</SectionKicker>
              <h2 className="mt-3 max-w-[720px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[46px]">
                {data.stepsTitle}
              </h2>
              
              {/* Timeline Vertical Layout */}
              <div className="relative border-l border-[var(--lavender-mid)] ml-6 pl-8 space-y-6 mt-10">
                {data.steps.map((step, index) => (
                  <div key={step.title} className="relative group">
                    {/* Timeline dot/number - solid purple by default */}
                    <div className="absolute -left-[49px] top-1.5 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[var(--purple)] text-white font-bold text-sm shadow-[0_3px_10px_rgba(91,45,142,0.15)] z-10">
                      {index + 1}
                    </div>
                    
                    {/* Content Card */}
                    <div className="rounded-[20px] border border-[var(--lavender-mid)]/30 bg-white p-5 shadow-[0_8px_32px_rgba(91,45,142,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(91,45,142,0.08)] hover:-translate-y-1 hover:border-[var(--purple-light)]/30">
                      <h3 className="font-card-title text-[17px] font-bold text-[var(--charcoal)] group-hover:text-[var(--purple)] transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-body-main text-[14px] leading-6 text-[var(--grey)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Right Column - Responsive Aspect Ratio to Prevent Stretching and Gaps */}
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -left-4 top-8 h-[78%] w-[76%] rounded-[36px] bg-[var(--lavender-bg)]" />
                <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-3 shadow-[0_24px_70px_rgba(91,45,142,0.12)]">
                  <Image
                    src={data.procedureImage}
                    alt={data.procedureImageAlt}
                    width={900}
                    height={1120}
                    className="w-full aspect-[4/3] rounded-[24px] object-cover"
                    style={{ objectFit: "cover", objectPosition: data.procedureImageObjectPosition ?? "50% 50%" }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-[22px] bg-[var(--charcoal)]/60 border border-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-md">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--purple)] shadow-sm">
                        <WandSparkles className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-card-title text-[16px] font-bold text-white">
                          {data.procedureNoteTitle}
                        </p>
                        <p className="mt-1 font-body-main text-[13px] leading-relaxed text-white/90">
                          {data.procedureNoteText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {data.comparison ? (
          <section className={data.comparison.sectionClassName ?? "deferred-section px-6 py-12 md:px-14 md:py-14"}>
            <div className="mx-auto max-w-[1120px]">
              <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
                <div>
                  <SectionKicker>{data.comparison.kicker}</SectionKicker>
                  <h2 className="mt-3 max-w-[660px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[46px]">
                    {data.comparison.title}
                  </h2>
                </div>
                <div className="grid gap-5">
                  {data.comparison.cards.map((card) => (
                    <ComparisonCard key={card.title} title={card.title} text={card.text} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className={data.benefitsSectionClassName ?? "deferred-section px-6 py-16 md:px-14 md:py-20 bg-gradient-to-r from-[#B05090] via-[#7B4BB8] to-[#5B2D8E] text-white"}>
          <div className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            <div>
              <SectionKicker className="text-pink-200">Benefits</SectionKicker>
              <h2 className="mt-3 max-w-[640px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-white md:text-[46px]">
                {data.benefitsTitle}
              </h2>
              <p className="mt-5 max-w-[600px] font-body-main text-[16px] leading-8 text-white/80">
                {data.benefitsDescription}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-[20px] border border-white/20 bg-white/10 px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-white mt-0.5" aria-hidden="true" />
                  <span className="font-body-main text-[14px] font-semibold leading-6 text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>



        {data.extra ? (
          <section className={data.extra.sectionClassName ?? "deferred-section bg-[var(--lavender-bg)]/20 px-6 py-12 md:px-14 md:py-14"}>
            <div className="mx-auto grid max-w-[1120px] gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionKicker>{data.extra.kicker}</SectionKicker>
                <h2 className="mt-3 font-section-heading text-[34px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[46px]">
                  {data.extra.title}
                </h2>
                <p className="mt-5 font-body-main text-[16px] leading-8 text-[var(--grey)]">
                  {data.extra.text}
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[24px] bg-grad p-6 text-white shadow-[0_12px_36px_rgba(91,45,142,0.12)]">
                  <CircleDollarSign className="h-7 w-7" aria-hidden="true" />
                  <h3 className="mt-4 font-card-title text-[20px] font-bold">
                    {data.extra.estimateTitle}
                  </h3>
                  <p className="mt-3 font-body-main text-[14px] leading-7 text-white/92">
                    {data.extra.estimateText}
                  </p>
                </div>
                <div className="rounded-[24px] bg-white border border-[var(--lavender-mid)]/40 p-6 shadow-[0_12px_36px_rgba(91,45,142,0.06)]">
                  <h3 className="font-card-title text-[20px] font-bold text-[var(--charcoal)]">
                    {data.extra.listTitle}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {data.extra.list.slice(0, data.extra.listVisibleCount ?? 7).map((item) => (
                      <li key={item} className="flex gap-3 font-body-main text-[14px] leading-6 text-[var(--grey)]">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--purple)]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className={data.faqSectionClassName ?? "deferred-section px-6 py-16 md:px-14 md:py-20 bg-gradient-to-b from-white to-[var(--cream)]/30"}>
          <div className="mx-auto max-w-[1120px]">
            <div className="mb-10 text-center">
              <SectionKicker>Frequently Asked Questions</SectionKicker>
              <h2 className="mx-auto mt-3 max-w-[780px] font-section-heading text-[34px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[46px]">
                {data.faqTitle}
              </h2>
            </div>

            <div className="mx-auto max-w-[780px] space-y-4">
              {data.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[20px] bg-white border border-[var(--lavender-mid)]/30 px-5 py-4 shadow-[0_8px_32px_rgba(91,45,142,0.06)]">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="font-plus-jakarta text-[16px] font-bold leading-6 text-[var(--charcoal)]">
                      {faq.question}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lavender-bg)] text-[var(--purple)] transition-transform group-open:rotate-90">
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-[var(--lavender-mid)]/20 pt-4 font-plus-jakarta text-[15px] font-normal leading-7 text-[var(--grey)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      {structuredData.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, "\\u003c")
          }}
        />
      ))}
    </>
  );
}

function SectionKicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] ${className || "text-[var(--purple)]"}`}>
      {children}
    </p>
  );
}



function InfoTile({ data }: { data: InfoTileData }) {
  const icons = {
    smile: SmilePlus,
    shield: ShieldCheck,
    clock: Clock4,
    cost: CircleDollarSign
  };
  const Icon = icons[data.icon];

  return (
    <article className="rounded-[20px] bg-grad p-6 shadow-[0_12px_36px_rgba(91,45,142,0.14)] text-white text-left">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--purple)]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-card-title text-[18px] font-bold leading-6 text-white">
        {data.title}
      </h3>
      <p className="mt-3 font-body-main text-[14px] leading-7 text-white/92">
        {data.text}
      </p>
    </article>
  );
}

function ComparisonCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[22px] border border-[var(--lavender-mid)]/30 bg-white p-6 shadow-[0_8px_32px_rgba(91,45,142,0.06)]">
      <h3 className="font-card-title text-[20px] font-bold text-[var(--charcoal)]">
        {title}
      </h3>
      <p className="mt-3 font-body-main text-[15px] leading-7 text-[var(--grey)]">
        {text}
      </p>
    </article>
  );
}
