import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="bg-[var(--cream)] px-6 pb-16 pt-[108px] md:px-14 md:pb-20 md:pt-[132px]">
      <section className="relative mx-auto flex min-h-[68vh] max-w-[980px] flex-col items-center justify-center text-center">
        
        {/* Glow halo background */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--purple-light)]/15 blur-[100px]" />
        <div className="pointer-events-none absolute left-1/3 top-1/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--pink-light)]/12 blur-[80px]" />

        {/* Glassmorphic card */}
        <div className="relative z-10 flex w-full max-w-[640px] flex-col items-center rounded-[32px] border border-[var(--lavender-mid)] bg-white/70 p-8 md:p-12 shadow-[0_24px_56px_rgba(91,45,142,0.06)] backdrop-blur-md">
          
          {/* Creative Skin & Hair Icon */}
          <div className="mb-8 flex items-center justify-center relative">
            {/* Pulsing ring */}
            <div className="absolute inset-0 h-28 w-28 rounded-full bg-[var(--purple)]/5 animate-ping" />
            
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-[var(--purple-light)] drop-shadow-[0_0_15px_rgba(123,75,184,0.2)]">
              {/* Smooth wave representing a strand of hair */}
              <path d="M35 80 C 48 62, 38 42, 53 22 C 56 18, 61 14, 68 12 C 61 17, 58 24, 56 28 C 42 48, 52 66, 37 84" fill="url(#hairGrad)" />
              {/* Sparkles representing glowing skin/treatment */}
              <path d="M72 27 C72 31 70 33 66 33 C70 33 72 35 72 39 C72 35 74 33 78 33 C74 33 72 31 72 27 Z" fill="#E28BCF" />
              <path d="M28 47 C28 50 27 51 24 51 C27 51 28 52 28 55 C28 52 29 51 32 51 C29 51 28 50 28 47 Z" fill="#7B4BB8" />
              <defs>
                <linearGradient id="hairGrad" x1="35" y1="80" x2="68" y2="12">
                  <stop offset="0%" stopColor="#5B2D8E" />
                  <stop offset="50%" stopColor="#7B4BB8" />
                  <stop offset="100%" stopColor="#E28BCF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="font-section-heading text-[28px] font-extrabold leading-tight text-[var(--charcoal)] md:text-[36px]">
            A <span className="grad-text">Split End</span> in the Link
          </h1>
          <p className="mt-4 max-w-[500px] font-body-main text-[15px] leading-7 text-[var(--grey)]">
            Even the best hair days have a few split ends, and even the most perfect skin routine hits a bump. The page you are looking for does not exist or has been relocated.
          </p>

          <div className="mt-8 flex w-full max-w-[400px] flex-col gap-3.5 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full px-7 font-label-sm text-sm font-semibold text-white shadow-[0_8px_20px_rgba(123,75,184,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(123,75,184,0.35)]"
              style={{ background: "var(--grad)" }}
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-[var(--purple-light)] bg-white px-7 font-label-sm text-sm font-semibold text-[var(--purple)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--purple)] hover:shadow-md"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contact Clinic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
