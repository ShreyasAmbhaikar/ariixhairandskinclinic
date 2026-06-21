/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

type GalleryMedia = {
  src: string;
  alt: string;
  type?: "image" | "video";
  poster?: string;
  aspectRatio?: string;
};

export function GalleryLightbox({
  images
}: {
  images: readonly GalleryMedia[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goToNext, goToPrevious]);

  return (
    <>
      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 lg:gap-5">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative mb-3 sm:mb-4 block w-full break-inside-avoid overflow-hidden rounded-[18px] border border-[var(--lavender-mid)] bg-white text-left shadow-[0_10px_30px_rgba(91,45,142,0.08)] lg:mb-5"
            style={image.aspectRatio ? { aspectRatio: image.aspectRatio } : undefined}
            aria-label={`Open gallery ${image.type === "video" ? "video" : "image"} ${index + 1}`}
          >
            {image.type === "video" ? (
              <>
                <video
                  src={image.src}
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  muted
                  playsInline
                  preload="none"
                  poster={image.poster}
                  style={image.aspectRatio ? { aspectRatio: image.aspectRatio } : undefined}
                />
                <span className="absolute inset-0 bg-black/22 transition-colors duration-300 group-hover:bg-black/28" />
                <span className="absolute left-1/2 top-1/2 inline-flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white/90 bg-[var(--purple)]/88 text-white shadow-[0_16px_34px_rgba(91,45,142,0.28)] backdrop-blur-sm">
                  <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
                </span>
              </>
            ) : (
              <>
                <img
                  src={image.src.replace(/\.webp$/, "-thumb.webp")}
                  alt={image.alt}
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[var(--purple)]/24 via-[var(--purple)]/6 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#1c1225]/85 px-4 py-6 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => {
            const touchEndX = event.changedTouches[0]?.clientX;

            if (touchStartX === null || touchEndX === undefined) {
              setTouchStartX(null);
              return;
            }

            const deltaX = touchEndX - touchStartX;

            if (deltaX > 50) {
              goToPrevious();
            } else if (deltaX < -50) {
              goToNext();
            }

            setTouchStartX(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          {/* Viewport-relative navigation controls */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 z-[2100] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--purple-light)]/20 bg-[var(--purple)] text-white shadow-[0_12px_24px_rgba(91,45,142,0.3)] transition-all hover:scale-105 hover:bg-[var(--purple-dark)] md:left-8"
            aria-label="Previous media"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 z-[2100] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--purple-light)]/20 bg-[var(--purple)] text-white shadow-[0_12px_24px_rgba(91,45,142,0.3)] transition-all hover:scale-105 hover:bg-[var(--purple-dark)] md:right-8"
            aria-label="Next media"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex(null);
            }}
            className="absolute right-4 top-4 z-[2100] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--purple-light)]/20 bg-[var(--purple)] text-white shadow-[0_12px_24px_rgba(91,45,142,0.3)] transition-all hover:scale-105 hover:bg-[var(--purple-dark)] md:right-8 md:top-8"
            aria-label="Close image preview"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <div
            className="relative flex w-fit max-w-[min(92vw,1100px)] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_30px_80px_rgba(91,45,142,0.35)]">
              <div className="flex max-h-[72dvh] items-center justify-center overflow-hidden rounded-[18px] bg-[var(--lavender-bg)] sm:max-h-[82dvh]">
                {images[activeIndex].type === "video" ? (
                  <video
                     src={images[activeIndex].src}
                     className="max-h-[72dvh] w-[min(92vw,980px)] object-contain sm:max-h-[82dvh]"
                     controls
                     autoPlay
                     playsInline
                  />
                ) : (
                  <img
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt}
                    className="block max-h-[72dvh] w-auto max-w-full object-contain sm:max-h-[82dvh]"
                  />
                )}
              </div>
            </div>

            <p className="mt-4 rounded-full border border-white/12 bg-[#1c1225]/72 px-4 py-2 text-center font-body-main text-sm text-white shadow-[0_14px_30px_rgba(91,45,142,0.24)]">
              {activeIndex + 1}/{images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
