"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const treatmentImages: Record<string, string> = {
  "/hair-transplant/": "/images/hair-transplant-hero.webp",
  "/prp-hair-treatment/": "/images/prp-hair-hero.webp",
  "/hair-loss-treatment/": "/images/hair-loss-hero.webp",
  "/hair-fall-treatment/": "/images/hair-fall-hero.webp",
  "/beard-transplant/": "/images/beard-transplant-hero.webp",
  "/dandruff-treatment/": "/images/dandruff-hero.webp",
  "/laser-hair-removal/": "/images/laser-hair-removal-hero.webp",
  "/laser-tattoo-removal/": "/images/laser-tattoo-removal-hero.webp",
  "/stretch-mark-removal/": "/images/stretch-mark-removal-hero.webp",
  "/laser-skin-rejuvenation/": "/images/laser-skin-rejuvenation-hero.webp",
  "/acne-treatment/": "/images/acne-treatment-hero.webp",
  "/acne-scar-treatment/": "/images/acne-scar-treatment-hero.webp",
  "/pigmentation-treatment/": "/images/pigmentation-treatment-hero.webp",
  "/dark-circle-treatment/": "/images/dark-circle-treatment-hero.webp",
  "/mole-removal/": "/images/mole-removal-treatment-hero.webp",
  "/skin-tag-removal/": "/images/skin-tag-removal-treatment-hero.webp",
  "/psoriasis-treatment/": "/images/psoriasis-treatment-hero.webp",
  "/vitiligo-treatment/": "/images/vitiligo-treatment-hero.webp",
  "/chemical-peel-treatment/": "/images/chemical-peel-treatment-hero.webp",
  "/hydra-facial/": "/images/hydra-facial-hero.webp",
  "/skin-polishing-and-rejuvenation/": "/images/skin-polishing-and-rejuvenation-hero.webp",
  "/medi-facial/": "/images/medi-facial-hero.webp",
  "/vampire-facial/": "/images/vampire-facial-hero.webp",
  "/oxy-hydra-facial/": "/images/oxy-hydra-facial-hero.webp",
  "/carbon-peel-fruit-peel/": "/images/carbon-peel-fruit-peel-hero.webp"
};

type Category = {
  readonly name: string;
  readonly items: readonly {
    readonly title: string;
    readonly href: string;
  }[];
};

interface TreatmentClientProps {
  categorizedTreatments: readonly Category[];
}

export default function TreatmentClient({
  categorizedTreatments
}: TreatmentClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...categorizedTreatments.map((c) => c.name)];

  const filteredCategories =
    selectedCategory === "All"
      ? categorizedTreatments
      : categorizedTreatments.filter((c) => c.name === selectedCategory);

  return (
    <div className="space-y-12">
      {/* ── Filter Tabs ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((catName) => {
          const isActive = selectedCategory === catName;
          const count =
            catName === "All"
              ? categorizedTreatments.reduce(
                  (acc, c) => acc + c.items.length,
                  0
                )
              : categorizedTreatments.find((c) => c.name === catName)?.items
                  .length || 0;

          return (
            <button
              key={catName}
              onClick={() => setSelectedCategory(catName)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] sm:text-[13px] font-bold transition-all duration-300 shadow-sm ${
                isActive
                  ? "bg-gradient-to-r from-[#B05090] to-[#5B2D8E] text-white shadow-[0_6px_18px_rgba(91,45,142,0.25)] scale-105 ring-2 ring-white/30"
                  : "bg-white/80 text-[var(--charcoal)] hover:bg-white hover:shadow-md hover:text-[var(--purple)] border border-[var(--lavender-mid)]"
              }`}
            >
              <span>{catName}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[var(--purple)]/10 text-[var(--purple)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Categories Sections ── */}
      <div className="space-y-16">
        {filteredCategories.map((category) => (
          <div key={category.name} className="space-y-6">
            {/* Category Title Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--lavender-mid)]/60 pb-3">
              <div className="flex items-center gap-3">
                <div className="h-6 w-[3.5px] rounded-full bg-gradient-to-b from-[#B05090] to-[#5B2D8E]" />
                <h2 className="section-title italic !text-[22px] md:!text-[26px] !leading-none font-bold">
                  {category.name}
                </h2>
              </div>
              <span className="rounded-full bg-[var(--purple)]/8 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--purple)] border border-[var(--purple)]/15">
                {category.items.length} Procedures Available
              </span>
            </div>

            {/* Treatment Cards Grid: Responsive Box Cards for both Mobile and Desktop */}
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => {
                const treatmentInfo = siteConfig.treatments.find(
                  (t) => t.href === item.href
                );
                const imageSrc =
                  treatmentImages[item.href] || "/images/logo-symbol.webp";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] md:rounded-[26px] border border-white/20 bg-[#160829] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/40 hover:shadow-[0_16px_38px_rgba(91,45,142,0.32)] min-h-[300px] xs:min-h-[320px] md:min-h-[360px]"
                  >
                    {/* Background Treatment Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={imageSrc}
                        alt={`${item.title} at Ariix Hair and Skin Clinic Pune`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                    </div>

                    {/* Dual Layer Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#140624] via-[#1B0833]/75 via-50% to-black/30 transition-opacity duration-500" />
                    <div className="absolute inset-0 z-[2] bg-gradient-to-tr from-[var(--purple)]/40 via-transparent to-amber-500/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top Row: Index Badge & Glass Arrow Icon */}
                    <div className="relative z-10 flex items-center justify-between p-4 md:p-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-[11px] font-black text-white backdrop-blur-md border border-white/25 shadow-sm">
                        #{String(itemIndex + 1).padStart(2, "0")} • {category.name.split(" ")[0]}
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30 transition-all duration-300 group-hover:bg-[#B05090] group-hover:scale-110 group-hover:border-white/50">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6H10M10 6L7 3M10 6L7 9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>

                    {/* Bottom Card Content Over Image */}
                    <div className="relative z-10 mt-auto p-4 md:p-5 text-white">
                      <h3 className="text-[18px] xs:text-[19px] md:text-[21px] font-extrabold leading-tight text-white transition-colors duration-300 group-hover:text-amber-300">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[12.5px] xs:text-[13px] md:text-[13.5px] leading-relaxed text-white/85 line-clamp-2 font-normal">
                        {treatmentInfo?.description}
                      </p>

                      {/* Bottom Location & Action Bar (Matching Reference Image Style) */}
                      <div className="mt-3.5 flex items-center justify-between border-t border-white/20 pt-2.5 text-[11px] font-bold">
                        <span className="flex items-center gap-1.5 text-amber-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                          Kharadi & Sinhagad Rd, Pune
                        </span>
                        <span className="flex items-center gap-1 text-white/90 group-hover:text-white transition-all group-hover:translate-x-1">
                          Explore Treatment &rarr;
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
    </div>
  );
}
