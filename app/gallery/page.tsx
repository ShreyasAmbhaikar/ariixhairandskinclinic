import type { Metadata } from "next";
import { GalleryLightboxClient } from "@/components/gallery/gallery-lightbox-client";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Before & After Results Gallery | Ariix Clinic"
  },
  description: "Explore before and after treatment case photos, results, and patient transformations at Ariix Hair and Skin Clinic in Pune.",
  alternates: {
    canonical: `${siteConfig.url}/gallery/`,
    languages: {
      "en-IN": `${siteConfig.url}/gallery/`,
      "x-default": `${siteConfig.url}/gallery/`
    }
  },
  openGraph: {
    title: `Gallery | ${siteConfig.shortName}`,
    description:
      "Explore before and after treatment results, clinic moments, and patient transformations at Ariix Hair and Skin Clinic.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: "/images/results/hair-transplant-male-2.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} gallery`
      }
    ]
  }
};

const galleryImages = [
  {
    src: "/images/results/hair-transplant-male-2.webp",
    alt: "Crown Hair Restoration — Before and After Results"
  },
  {
    src: "/images/results/acne-treatment-female.webp",
    alt: "Acne Control Treatment — Before and After Results"
  },
  {
    src: "/images/results/hair-transplant-male-1.webp",
    alt: "Advanced Hair Transplantation — Before and After Results"
  },
  {
    src: "/images/gallery/videoplayback.mp4",
    alt: "Hair restoration treatment before and after walkthrough video",
    type: "video" as const,
    poster: "/images/gallery/hair-restoration-video-poster.webp",
    aspectRatio: "310/640"
  },
  {
    src: "/images/results/hair-transplant-male-composite.webp",
    alt: "Male hair transplant before and after transformation stages showing hair growth progress"
  },
  {
    src: "/images/results/fungal-infection-treatment-guide.webp",
    alt: "Fungal skin infection signs and clinical treatment options at Ariix Clinic"
  },
  {
    src: "/images/results/scar-treatment-kid.webp",
    alt: "Scar Treatment & Skin Healing — Before and After Results"
  },
  {
    src: "/images/results/hair-thinning-female.webp",
    alt: "Female Hair Restoration — Before and After Results"
  },
  {
    src: "/images/results/hair-transplant-male-before-after.webp",
    alt: "Before and after results of male hair transplant treatment showing restored hairline"
  },
  {
    src: "/images/results/hair-restoration-crown-stages.webp",
    alt: "Top view showing stages of hair restoration and transplant progress on the crown area"
  },
  {
    src: "/images/results/hair-transplant-male-3.webp",
    alt: "Advanced Hair Restoration — Before and After Results"
  },
  {
    src: "/images/results/pigmentation-melasma-treatment-results.webp",
    alt: "Before and after skin treatment results for facial pigmentation and melasma clearance"
  },
  {
    src: "/images/gallery/videoplayback-1.mp4",
    alt: "Carbon peel skin treatment walkthrough video",
    type: "video" as const,
    poster: "/images/gallery/carbon-peel-video-poster.webp",
    aspectRatio: "360/640"
  }
] as const;

export default function GalleryPage() {
  const pageUrl = `${siteConfig.url}/gallery/`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "@id": `${siteConfig.url}/gallery/#webpage`,
      "url": pageUrl,
      "name": "Before & After Treatment Results Gallery - Ariix Hair & Skin Clinic",
      "description": "Explore real before and after treatment results, clinical case photos, and patient success stories at Ariix Hair and Skin Clinic in Pune.",
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
          "name": "Gallery",
          "item": pageUrl
        }
      ]
    }
  ];

  return (
    <>
      <main id="main-content" className="bg-[var(--cream)] px-2 pb-20 pt-[96px] sm:px-6 md:px-14 md:pb-24 md:pt-[120px]">
        <section className="mx-auto max-w-[1360px] !pt-12 md:!pt-16">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(91,45,142,0.05)]">
              <span className="h-2 w-2 rounded-full bg-[var(--purple)] animate-pulse" />
              <span className="font-label-sm text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--purple)]">
                Our Clinic Moments
              </span>
            </div>
            <h1 className="section-title text-[38px] font-extrabold leading-[1.08] text-[var(--charcoal)] sm:text-[50px] md:text-[58px]">
              Explore Our <span className="grad-text">Gallery</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] font-body-main text-[15px] leading-7 text-[var(--grey)]">
              Before-and-after results, clinical procedures, and successful patient transformations at Ariix Hair and Skin Clinic.
            </p>
          </div>

          <GalleryLightboxClient images={galleryImages} />
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
