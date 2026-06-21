import type { Metadata } from "next";
import {
  Clock4,
  ExternalLink,
  MailOpen,
  MapPinned,
  PhoneCall,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for appointments and skin & hair treatments in Pune.`,
  alternates: {
    canonical: `${siteConfig.url}/contact-us/`
  }
};

export default function ContactUsPage() {
  const kharadi = siteConfig.locations[0];
  const sinhagad = siteConfig.locations[1];
  const phoneHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

  return (
    <main id="main-content" className="relative overflow-hidden bg-gradient-to-tr from-[#F3EEFF] via-[#FDF8FF] to-[#FFF0F7] px-4 pb-20 pt-[96px] sm:px-6 md:px-14 md:pb-24 md:pt-[120px]">
      {/* Ambient gradient orbs for colorful premium look */}
      <div className="absolute top-[15%] left-[-15%] h-[450px] w-[450px] rounded-full bg-[var(--purple-light)]/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-15%] h-[500px] w-[500px] rounded-full bg-[var(--mauve-light)]/15 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] h-[350px] w-[350px] rounded-full bg-[var(--pink-light)]/20 blur-[110px] pointer-events-none" />

      <section className="mx-auto max-w-[1360px] !pt-12 md:!pt-16 relative z-10">
        <div className="mb-12 text-center">
          <div className="section-eyebrow justify-center">CONTACT</div>
          <h1 className="section-title text-[38px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[58px]">
            Contact <span className="grad-text">Us</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] font-body-main text-[16px] leading-7 text-[var(--grey)]">
            Reach {siteConfig.name} for appointments, consultations, and everyday skin and hair care support in Pune.
          </p>
        </div>

        {/* Global info row */}
        <div className="grid gap-6 md:grid-cols-2 max-w-[900px] mx-auto mb-16">
          <div className="flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[var(--purple-light)]/30 p-5 shadow-[0_12px_36px_rgba(91,45,142,0.05)] hover:border-[var(--purple-light)] transition-all duration-300 group">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--pink-light)]/55 to-[var(--lavender-mid)]/55 text-[var(--purple)] group-hover:scale-105 transition-transform duration-300">
              <PhoneCall className="h-5 w-5" />
            </span>
            <div>
              <p className="font-label-sm text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--purple-dark)]">Central Booking Line</p>
              <a href={phoneHref} className="font-plus-jakarta text-[16px] font-extrabold text-[var(--charcoal)] hover:text-[var(--purple)] transition-colors">
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur-md border border-[var(--purple-light)]/30 p-5 shadow-[0_12px_36px_rgba(91,45,142,0.05)] hover:border-[var(--purple-light)] transition-all duration-300 group">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--pink-light)]/55 to-[var(--lavender-mid)]/55 text-[var(--purple)] group-hover:scale-105 transition-transform duration-300">
              <MailOpen className="h-5 w-5" />
            </span>
            <div>
              <p className="font-label-sm text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--purple-dark)]">Email Address</p>
              <a href={`mailto:${siteConfig.email}`} className="font-plus-jakarta text-[16px] font-extrabold text-[var(--charcoal)] hover:text-[var(--purple)] transition-colors">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch max-w-[540px] lg:max-w-[1120px] mx-auto w-full">
          {/* Sinhagad Road Branch */}
          <div className="group relative flex flex-col justify-between rounded-[28px] bg-white/85 backdrop-blur-md border-t-4 border-t-[var(--purple)] border-x border-b border-[var(--purple-light)]/20 p-5 sm:p-6 md:p-8 shadow-[0_16px_48px_rgba(91,45,142,0.06)] hover:border-x-[var(--purple-light)]/50 hover:border-b-[var(--purple-light)]/50 transition-all duration-300">
            
            <div className="mb-6 pt-2">
              <span className="inline-block px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[var(--lavender-bg)] text-[var(--purple-dark)] mb-4">
                Sinhagad Road Branch (Manikbag)
              </span>
              <h2 className="font-section-heading text-[26px] font-extrabold text-[var(--charcoal)] md:text-[30px] leading-tight">
                Manikbag Clinic
              </h2>
              
              <div className="mt-6 space-y-4 text-[13.5px] sm:text-[14px]">
                <div className="flex gap-3">
                  <MapPinned className="h-5 w-5 text-[var(--purple)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[var(--charcoal)]">Address</p>
                    <p className="text-[var(--grey)] mt-1 leading-relaxed">
                      2nd Floor, Subhadra Smruti Building, Manikbag, Sinhgad Rd, opposite Indian Oil Petrol Pump, above Indian Overseas Bank, Anand Nagar, Pune 411051
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock4 className="h-5 w-5 text-[var(--purple)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[var(--charcoal)]">Timings</p>
                    <div className="text-[var(--grey)] mt-1 leading-relaxed space-y-1">
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="font-semibold text-[var(--charcoal)] min-w-[75px] sm:min-w-[85px]">Mon – Sat:</span>
                        <span>10:30 AM – 2:00 PM, &nbsp;5:30 PM – 9:00 PM</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="font-semibold text-[var(--charcoal)] min-w-[75px] sm:min-w-[85px]">Sunday:</span>
                        <span className="text-rose-500 font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PhoneCall className="h-5 w-5 text-[var(--purple)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[var(--charcoal)]">Phone</p>
                    <a href="tel:+917447424939" className="text-[var(--grey)] hover:text-[var(--purple)] transition-colors mt-1 block font-semibold">
                      +91 74474 24939
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-[var(--lavender-mid)]/30 bg-[var(--cream)] h-[180px] md:h-[240px] w-full mb-6 relative">
              <iframe
                title="Sinhagad Road Clinic Location Map"
                src="https://maps.google.com/maps?q=ARIIX%20HAIR%20AND%20SKIN%20CLINIC,%20Manikbag,%20Anand%20Nagar,%20Sinhagad%20Road,%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={sinhagad.gmbLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--mauve)] to-[var(--purple)] px-5 py-3 font-label-sm text-[13px] font-semibold leading-5 text-white shadow-[0_10px_24px_rgba(123,75,184,0.18)] transition-all hover:opacity-95 hover:-translate-y-0.5"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Kharadi Branch */}
          <div className="group relative flex flex-col justify-between rounded-[28px] bg-white/85 backdrop-blur-md border-t-4 border-t-[var(--purple)] border-x border-b border-[var(--purple-light)]/20 p-5 sm:p-6 md:p-8 shadow-[0_16px_48px_rgba(91,45,142,0.06)] hover:border-x-[var(--purple-light)]/50 hover:border-b-[var(--purple-light)]/50 transition-all duration-300">
            
            <div className="mb-6 pt-2">
              <span className="inline-block px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[var(--lavender-bg)] text-[var(--purple-dark)] mb-4">
                Kharadi Branch (Wagholi)
              </span>
              <h2 className="font-section-heading text-[26px] font-extrabold text-[var(--charcoal)] md:text-[30px] leading-tight">
                Upper Kharadi Clinic
              </h2>
              
              <div className="mt-6 space-y-4 text-[13.5px] sm:text-[14px]">
                <div className="flex gap-3">
                  <MapPinned className="h-5 w-5 text-[var(--purple)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[var(--charcoal)]">Address</p>
                    <p className="text-[var(--grey)] mt-1 leading-relaxed">
                      Near Unnati Mahindra Showroom Pune Nagar Road, Upper Kharadi Main Rd, behind Komal Silk House, Wagholi, Pune, Maharashtra 412207
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock4 className="h-5 w-5 text-[var(--purple)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[var(--charcoal)]">Timings</p>
                    <div className="text-[var(--grey)] mt-1 leading-relaxed space-y-1">
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="font-semibold text-[var(--charcoal)] min-w-[75px] sm:min-w-[85px]">Sunday:</span>
                        <span>12:00 PM – 8:00 PM</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="font-semibold text-[var(--charcoal)] min-w-[75px] sm:min-w-[85px]">Mon – Sat:</span>
                        <span className="text-rose-500 font-medium">Closed (Consultations at Sinhagad Road)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PhoneCall className="h-5 w-5 text-[var(--purple)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[var(--charcoal)]">Phone</p>
                    <a href="tel:+917447424938" className="text-[var(--grey)] hover:text-[var(--purple)] transition-colors mt-1 block font-semibold">
                      +91 74474 24938
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-[var(--lavender-mid)]/30 bg-[var(--cream)] h-[180px] md:h-[240px] w-full mb-6 relative">
              <iframe
                title="Kharadi Clinic Location Map"
                src="https://maps.google.com/maps?q=ARIIX%20HAIR%20AND%20SKIN%20CLINIC,%20Wagholi,%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={kharadi.gmbLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--mauve)] to-[var(--purple)] px-5 py-3 font-label-sm text-[13px] font-semibold leading-5 text-white shadow-[0_10px_24px_rgba(123,75,184,0.18)] transition-all hover:opacity-95 hover:-translate-y-0.5"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
