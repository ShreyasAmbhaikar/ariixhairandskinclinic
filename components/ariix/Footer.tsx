
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <>
      <footer>
  <div className="footer-grid">
    <div>
      <div className="footer-logo mb-6 flex items-center gap-2 md:gap-3">
        <img src="/images/logo-symbol-footer.webp" alt="ARIIX Symbol" width="150" height="149" className="!h-[50px] md:!h-[60px] w-auto object-contain" />
        <img src="/images/logo-text-footer.webp" alt="ARIIX Name" width="300" height="133" className="!h-[48px] md:!h-[57px] w-auto object-contain" />
      </div>
      <p className="footer-about">Premium dermatology, laser therapies, and advanced hair restoration clinic offering personalized, evidence-based skin and hair care by qualified specialists.</p>
    </div>
    <div className="footer-col">
      <div className="footer-col-title">Hair Treatments</div>
      <ul>
        <li><Link href="/hair-transplant">Hair Transplant</Link></li>
        <li><Link href="/prp-hair-treatment">PRP Hair Treatment</Link></li>
        <li><Link href="/hair-loss-treatment">Hair Loss Treatment</Link></li>
        <li><Link href="/hair-fall-treatment">Hair Fall Treatment</Link></li>
        <li><Link href="/beard-transplant">Beard Transplant</Link></li>
        <li><Link href="/dandruff-treatment">Dandruff Treatment</Link></li>
      </ul>
    </div>
    <div className="footer-col">
      <div className="footer-col-title">Laser Treatments</div>
      <ul>
        <li><Link href="/laser-hair-removal">Laser Hair Removal</Link></li>
        <li><Link href="/laser-tattoo-removal">Laser Tattoo Removal</Link></li>
        <li><Link href="/stretch-mark-removal">Stretch Mark Removal</Link></li>
        <li><Link href="/laser-skin-rejuvenation">Laser Skin Rejuvenation</Link></li>
      </ul>
    </div>
    <div className="footer-col">
      <div className="footer-col-title">Skin Treatments</div>
      <ul>
        <li><Link href="/acne-treatment">Acne Treatment</Link></li>
        <li><Link href="/acne-scar-treatment">Acne Scar Treatment</Link></li>
        <li><Link href="/pigmentation-treatment">Pigmentation Treatment</Link></li>
        <li><Link href="/dark-circle-treatment">Dark Circle Treatment</Link></li>
        <li><Link href="/mole-removal">Mole Removal</Link></li>
        <li><Link href="/skin-tag-removal">Skin Tag Removal</Link></li>
        <li><Link href="/psoriasis-treatment">Psoriasis Treatment</Link></li>
        <li><Link href="/vitiligo-treatment">Vitiligo Treatment</Link></li>
        <li><Link href="/chemical-peel-treatment">Chemical Peel</Link></li>
      </ul>
    </div>
    <div className="footer-col">
      <div className="footer-col-title">Facial &amp; Rejuvenation</div>
      <ul>
        <li><Link href="/hydra-facial">Hydra Facial</Link></li>
        <li><Link href="/skin-polishing-and-rejuvenation">Skin Polishing &amp; Rejuvenation</Link></li>
        <li><Link href="/medi-facial">Medi Facial</Link></li>
        <li><Link href="/vampire-facial">Vampire Facial</Link></li>
        <li><Link href="/oxy-hydra-facial">Oxy Hydra Facial</Link></li>
        <li><Link href="/carbon-peel-fruit-peel">Carbon Peel / Fruit Peel</Link></li>
      </ul>
    </div>
    <div className="footer-col">
      <div className="footer-col-title">Quick Links</div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/contact-us">Contact Us</Link></li>
      </ul>
    </div>
  </div>

  {/* Locations Row */}
  <div className="border-t border-white/10 pt-8 mt-8 mb-8">
    <div className="font-bold text-[12px] uppercase tracking-[0.2em] text-[var(--purple-light)] mb-4">Our Locations</div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 text-[13px] text-[var(--grey)] leading-[1.6]">
      {/* Sinhagad Road Branch */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
        <div className="flex-1 min-w-[200px]">
          <div className="font-bold text-white mb-2 text-[14.5px]">Sinhagad Road Branch (Manikbag)</div>
          <p className="mb-2 text-[12.5px] leading-relaxed text-white/70">2nd Floor, Subhadra Smruti Building, Manikbag,<br />Sinhgad Rd, opposite Indian Oil Petrol Pump,<br />above Indian Overseas Bank, Anand Nagar, Pune 411051</p>
          <a href="https://www.google.com/maps/place/ARIIX+HAIR+AND+SKIN+CLINIC/@18.4721754,73.8210038,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc295485fab23a1:0x2795808d582f8da5!8m2!3d18.4721754!4d73.8210038!16s%2Fg%2F11hgf0p89n?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" className="text-[var(--purple-light)] hover:text-white hover:underline font-semibold block mb-1">📍 Get Directions</a>
          <a href="tel:+917447424938" className="hover:underline font-semibold text-white/95">📞 +91 74474 24938</a>
        </div>
        <div className="w-full sm:w-[220px] h-[130px] rounded-xl overflow-hidden border border-white/10 shrink-0">
          <iframe
            src="https://maps.google.com/maps?q=ARIIX%20HAIR%20AND%20SKIN%20CLINIC,%20Manikbag,%20Anand%20Nagar,%20Sinhagad%20Road,%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sinhagad Road Branch Map"
          />
        </div>
      </div>
      {/* Kharadi Branch */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
        <div className="flex-1 min-w-[200px]">
          <div className="font-bold text-white mb-2 text-[14.5px]">Kharadi Branch (Wagholi)</div>
          <p className="mb-2 text-[12.5px] leading-relaxed text-white/70">Near Unnati Mahindra Showroom Pune Nagar Road,<br />Upper Kharadi Main Rd, behind Komal Silk House,<br />Wagholi, Pune, Maharashtra 412207</p>
          <a href="https://www.google.com/maps/place/ARIIX+HAIR+AND+SKIN+CLINIC/data=!4m2!3m1!1s0x0:0x20054517738dcdfa?sa=X&ved=1t:2428&hl=en&ictx=111" target="_blank" rel="noopener noreferrer" className="text-[var(--purple-light)] hover:text-white hover:underline font-semibold block mb-1">📍 Get Directions</a>
          <a href="tel:+917447424938" className="hover:underline font-semibold text-white/95">📞 +91 74474 24938</a>
        </div>
        <div className="w-full sm:w-[220px] h-[130px] rounded-xl overflow-hidden border border-white/10 shrink-0">
          <iframe
            src="https://maps.google.com/maps?q=ARIIX%20HAIR%20AND%20SKIN%20CLINIC,%20Wagholi,%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kharadi Branch Map"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2026 Ariix Hair and Skin Clinic. All rights reserved.</p>
    <p>Developed with <span className="text-red-500">❤️</span> by <a href="https://wa.me/919284394722" target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--purple-light)] font-semibold transition-colors">QuantunReach Media</a></p>
  </div>
</footer>
    </>
  );
}
