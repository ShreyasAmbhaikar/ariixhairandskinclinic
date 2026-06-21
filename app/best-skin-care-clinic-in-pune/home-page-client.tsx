"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const handleResizeTestimonials = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };
    handleResizeTestimonials();
    window.addEventListener('resize', handleResizeTestimonials);
    return () => window.removeEventListener('resize', handleResizeTestimonials);
  }, []);

  useEffect(() => {
    const totalSlides = siteConfig.testimonials.slice(0, 6).length; // limit to 6 testimonials as displayed in home page
    const maxIndex = Math.max(0, totalSlides - visibleTestimonials);
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [visibleTestimonials]);

  const cards = [
    { src: "/images/results/hair-transplant-male-2.webp", alt: "Crown Hair Restoration Results", label: "💉 Crown Hair Restoration — Real Result" },
    { src: "/images/results/acne-treatment-female.webp", alt: "Acne Control Treatment Results", label: "🌸 Acne Control Treatment — Real Result" },
    { src: "/images/results/hair-transplant-male-1.webp", alt: "Advanced Hair Transplantation Results", label: "💪 Advanced Hair Transplantation — Real Result" },
    { src: "/images/results/scar-treatment-kid.webp", alt: "Scar Treatment & Skin Healing Results", label: "✨ Scar Treatment & Skin Healing — Real Result" },
    { src: "/images/results/hair-thinning-female.webp", alt: "Female Hair Restoration Results", label: "💇‍♀️ Female Hair Restoration — Real Result" },
    { src: "/images/results/hair-transplant-male-3.webp", alt: "Advanced Hair Restoration Results", label: "✨ Advanced Hair Restoration — Real Result" },
  ];

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev >= cards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev <= 0 ? cards.length - 1 : prev - 1));
  };

  const translateVal = Math.min(scrollY * 0.75, 230);

  return (
    <main id="main-content">
      

{/* HERO */}
<section className="hero" id="home">
  <div className="hero-left">
    <div className="hero-phone-pill">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
      Call: +91 74474 24938
    </div>
    <h1 className="hero-title">
      Your Skin Deserves<br />the <span className="grad-text">Best Care</span><br />in Pune
    </h1>
    <div className="hero-divider"></div>
    <p className="hero-desc">Expert dermatology, hair treatments and laser therapies by our clinical expert. Personalised care plans designed for lasting, visible results.</p>
    <div className="hero-doctors">
      <div className="doctor-chip">
        <div className="doctor-chip-name">Dr. Abhimanyu Jagtap</div>
        <div className="doctor-chip-qual">MD (Dermatology)</div>
      </div>
    </div>
    <div className="hero-actions">
      <Link href="/contact-us" className="btn-primary">Book Consultation</Link>
      <a href="tel:+917447424938" className="btn-outline">📞 Call Now</a>
    </div>
    <div className="hero-stats">
      <div>
        <div className="stat-num">8K+</div>
        <div className="stat-label">Happy Patients</div>
      </div>
      <div>
        <div className="stat-num">8+</div>
        <div className="stat-label">Years Experience</div>
      </div>
      <div>
        <div className="stat-num">40+</div>
        <div className="stat-label">Treatments</div>
      </div>
    </div>
  </div>
  <div className="hero-right">
    <div className="hero-girl-img absolute inset-0 z-[2] overflow-hidden" >
      <img src="/images/extracted/img_2.webp" alt="Skin Care" width={666} height={1000} className="h-full w-full object-cover" fetchPriority="high" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(91,45,142,0.3) 0%, rgba(91,45,142,0.1) 50%, rgba(91,45,142,0.7) 100%)' }}></div>
    </div>
    <div 
      className="hero-clinic-card !max-w-[520px] !bg-gradient-to-br from-[#7B4BB8]/95 to-[#5B2D8E]/95 !backdrop-blur-md transition-transform duration-75 ease-out"
      style={{ transform: `translate(-50%, calc(-50% + ${translateVal}px))` }}
    >
      <div className="clinic-card-title !text-[16px] !mb-3">📍 Our Branches in Pune</div>
      
      {/* Sinhagad Road Branch */}
      <div className="mb-3.5 pb-3.5 border-b border-white/10">
        <div className="flex justify-between items-start mb-1">
          <span className="font-bold text-[13px] text-white">Sinhagad Road Branch (Manikbag)</span>
          <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full text-white font-bold uppercase tracking-wider">Mon-Sat: Open</span>
        </div>
        <p className="text-[11.5px] leading-relaxed text-white/80 mb-2">
          2nd Floor, Subhadra Smruti Building, Manikbag, Sinhgad Rd, opposite Indian Oil Petrol Pump, above Indian Overseas Bank, Anand Nagar, Pune, Maharashtra 411051
        </p>
        <a href="/locations/sinhagad-road/" className="text-[11px] font-bold text-[var(--pink-light)] hover:text-white hover:underline transition-colors">View Sinhagad Road Details →</a>
      </div>

      {/* Kharadi Branch */}
      <div className="mb-2">
        <div className="flex justify-between items-start mb-1">
          <span className="font-bold text-[13px] text-white">Kharadi Branch (Wagholi)</span>
          <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full text-white font-bold uppercase tracking-wider">Sun: 12-8 PM</span>
        </div>
        <p className="text-[11.5px] leading-relaxed text-white/80 mb-2">
          Near Unnati Mahindra Showroom Pune Nagar Road, Upper Kharadi Main Rd, behind Komal Silk House, Wagholi, Pune, Maharashtra 412207
        </p>
        <a href="/locations/kharadi/" className="text-[11px] font-bold text-[var(--pink-light)] hover:text-white hover:underline transition-colors">View Kharadi Details →</a>
      </div>

      <div className="clinic-card-phone mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
        <span>Helpline: <strong className="text-white">+91 74474 24938</strong></span>
      </div>
    </div>
  </div>
</section>

{/* MARQUEE */}
<div className="marquee-strip">
  <div className="marquee-inner">
    <div className="marquee-item"><span className="marquee-dot"></span>Hair Transplant</div>
    <div className="marquee-item"><span className="marquee-dot"></span>PRP Hair Treatment</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Laser Hair Removal</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Laser Tattoo Removal</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Acne Scar Treatment</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Carbon Laser Peel</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Hydra Facial</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Vampire Facial</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Pigmentation Treatment</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Skin Tag Removal</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Medi Facial</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Dandruff Treatment</div>
    {/* Duplicate items for seamless loop */}
    <div className="marquee-item"><span className="marquee-dot"></span>Hair Transplant</div>
    <div className="marquee-item"><span className="marquee-dot"></span>PRP Hair Treatment</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Laser Hair Removal</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Laser Tattoo Removal</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Acne Scar Treatment</div>
    <div className="marquee-item"><span className="marquee-dot"></span>Carbon Laser Peel</div>
  </div>
</div>

{/* DOCTORS */}
<section className="doctors-section" id="doctors">
  <div className="doctors-header reveal visible">
    <div className="section-eyebrow">Meet the Expert</div>
    <h2 className="section-title">Our <span className="grad-text">Qualified</span> Specialist</h2>
  </div>
  
  <div className="doctor-showcase-container reveal visible !grid-cols-1 !max-w-[720px]">
    <div className="doctor-info-wrapper">
      <h3 className="doctor-showcase-name">Dr. Abhimanyu Jagtap</h3>
      <p className="doctor-showcase-qual">MD (Dermatology)</p>
      <p className="doctor-showcase-role">Skin, Hair &amp; Laser Specialist</p>
      <div className="doctor-divider"></div>
      <p className="doctor-showcase-desc">
        Dr. Abhimanyu Jagtap is a highly experienced, compassionate specialist dedicated to delivering safe and effective results. With over 12 years of clinical practice in advanced dermatology and aesthetic medicine, he offers personalized care plans tailored for lasting, visible transformations.
      </p>
      <div className="doctor-spec-label !mb-2.5">Key Clinical Focus</div>
      <div className="doctor-specialties">
        <span className="specialty-pill">FUE Hair Transplant</span>
        <span className="specialty-pill">PRP Hair &amp; Skin</span>
        <span className="specialty-pill">Laser Rejuvenation</span>
        <span className="specialty-pill">Acne &amp; Scar revision</span>
        <span className="specialty-pill">Aesthetic Medicine</span>
      </div>
      <div className="doctor-actions">
        <Link href="/contact-us" className="btn-primary">Book Consultation with Dr. Jagtap</Link>
      </div>
    </div>
  </div>
</section>

{/* SERVICES */}
<section className="services-section" id="services">
  <div className="services-header reveal visible">
    <div className="section-eyebrow">What We Offer</div>
    <h2 className="section-title">Core <span className="grad-text">Services</span></h2>
    <p >Comprehensive skin and hair care under one expert roof — evidence-based, patient-first.</p>
  </div>
  <div className="services-grid services-grid-4">
    <div className="service-card reveal visible">
      <div className="service-num">01</div>
      <div className="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z"></path></svg>
      </div>
      <h3 className="service-title">Hair Treatments</h3>
      <p className="service-desc">Clinically proven surgical and medical solutions to restore hair density and halt active hair loss.</p>
      <ul className="service-list"><li>FUE Hair Transplant</li><li>PRP Hair Treatment</li><li>Hair Fall Control</li><li>Beard Restoration</li></ul>
    </div>
    <div className="service-card reveal reveal-delay-1 visible">
      <div className="service-num">02</div>
      <div className="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      </div>
      <h3 className="service-title">Laser Treatments</h3>
      <p className="service-desc">FDA-approved, calibrated laser devices for permanent hair reduction, skin tightening, and tattoo removal.</p>
      <ul className="service-list"><li>Permanent Laser Hair Removal</li><li>Laser Skin Toning</li><li>Laser Tattoo Removal</li><li>Stretch Mark Repair</li></ul>
    </div>
    <div className="service-card reveal reveal-delay-2 visible">
      <div className="service-num">03</div>
      <div className="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M12 8v4l3 3"></path></svg>
      </div>
      <h3 className="service-title">Skin Treatments</h3>
      <p className="service-desc">Dermatologist consultations and advanced protocols for acne, pigmentation, scars, and allergies.</p>
      <ul className="service-list"><li>Acne &amp; Acne Scar Control</li><li>Melasma &amp; Pigmentation</li><li>Warts, Tags &amp; Moles Removal</li><li>Eczema &amp; Psoriasis Care</li></ul>
    </div>
    <div className="service-card reveal reveal-delay-3 visible">
      <div className="service-num">04</div>
      <div className="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
      </div>
      <h3 className="service-title">Facial &amp; Rejuvenation</h3>
      <p className="service-desc">Exfoliating peels, deep cleansing, and collagen-boosting facials to revive natural radiance and skin tone.</p>
      <ul className="service-list"><li>Hydra Facial / Oxy Hydra</li><li>Vampire Facial (PRP)</li><li>Carbon Laser Peel</li><li>Medi Facials</li></ul>
    </div>
  </div>
  <div className="text-center mt-12 reveal visible">
    <Link href="/treatment" className="btn-primary">View All Treatments</Link>
  </div>
</section>

{/* PROMO GALLERY */}
<section className="promo-section px-3 sm:px-6 lg:px-[8vw]" id="gallery">
  <div className="promo-header reveal visible">
    <div className="section-eyebrow">Featured Treatments</div>
    <h2 className="section-title">Treatments That <span className="grad-text">Transform</span></h2>
    <p>Real treatments, real results. Explore our signature procedures at Ariix Hair and Skin Clinic.</p>
  </div>

  {isMobile ? (
    <div className="relative w-full max-w-[540px] mx-auto px-2">
      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow border border-[var(--lavender-mid)] text-[var(--purple)] hover:bg-[var(--purple)] hover:text-white transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-4.5 w-4.5" />
      </button>
      
      {/* Carousel Track Wrapper */}
      <div className="overflow-hidden w-full rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        >
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="w-full flex-shrink-0"
            >
              <div className="promo-card w-full aspect-square relative rounded-2xl overflow-hidden shadow-md">
                <img src={card.src} alt={card.alt} className="w-full h-full object-cover" />
                <div className="promo-card-overlay">
                  <div className="promo-card-label">{card.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow border border-[var(--lavender-mid)] text-[var(--purple)] hover:bg-[var(--purple)] hover:text-white transition-all duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-4.5 w-4.5" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-5">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCarouselIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${carouselIndex === idx ? 'w-5 bg-[var(--purple)]' : 'w-1.5 bg-[var(--lavender-mid)]'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="promo-grid">
      {cards.map((card, idx) => (
        <div 
          key={idx} 
          className={`promo-card reveal${idx % 3 === 0 ? "" : ` reveal-delay-${idx % 3}`} visible`}
        >
          <img src={card.src} alt={card.alt} width={600} height={600} />
          <div className="promo-card-overlay">
            <div className="promo-card-label">{card.label}</div>
          </div>
        </div>
      ))}
    </div>
  )}
</section>

{/* PROCESS */}
<section className="process-section">
  <div className="process-header reveal visible">
    <div className="section-eyebrow">How It Works</div>
    <h2 className="section-title">Your <span className="grad-text">Journey</span> to Beautiful Skin</h2>
  </div>
  <div className="process-grid">
    <div className="process-step reveal visible"><div className="step-circle">1</div><div className="step-title">Book Consultation</div><div className="step-desc">Schedule online or call us. Confirmed within 2 hours.</div></div>
    <div className="process-step reveal reveal-delay-1 visible"><div className="step-circle">2</div><div className="step-title">Skin Analysis</div><div className="step-desc">Thorough assessment by our dermatologist using advanced tools.</div></div>
    <div className="process-step reveal reveal-delay-2 visible"><div className="step-circle">3</div><div className="step-title">Custom Treatment</div><div className="step-desc">Personalised plan designed exclusively for your skin profile.</div></div>
    <div className="process-step reveal reveal-delay-3 visible"><div className="step-circle">4</div><div className="step-title">Ongoing Care</div><div className="step-desc">Follow-up sessions and at-home guidance for lasting results.</div></div>
  </div>
</section>

{/* TESTIMONIALS */}
<section className="testimonials-section relative overflow-hidden bg-gradient-to-b from-white via-[var(--cream)] to-white !py-16 md:!py-20 px-3 sm:px-6 lg:px-[8vw]" id="testimonials">
  <div className="absolute top-[20%] left-[-10%] h-[350px] w-[350px] rounded-full bg-[var(--purple-light)]/10 blur-[100px] pointer-events-none" />
  <div className="absolute bottom-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[var(--purple)]/6 blur-[120px] pointer-events-none" />

  <div className="testimonials-header reveal visible relative z-10">
    <div className="section-eyebrow justify-center">Patient Stories</div>
    <h2 className="section-title text-center">What Our <span className="grad-text">Patients</span> Say</h2>
  </div>
  
  <div className="relative z-10 max-w-[1360px] mx-auto px-2 md:px-4 mt-10 overflow-hidden">
    <div 
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${testimonialIndex * (100 / visibleTestimonials)}%)` }}
    >
      {siteConfig.testimonials.slice(0, 6).map((item, index) => {
        const isLocalGuide = item.name.includes("Local Guide");
        const displayName = item.name.replace(" (Local Guide)", "");
        
        return (
          <div 
            key={item.name} 
            style={{ width: `${100 / visibleTestimonials}%` }}
            className="flex-shrink-0 px-1.5 md:px-3 flex"
          >
            <div className="relative flex flex-col justify-between w-full rounded-[28px] border border-[var(--lavender-mid)]/50 bg-gradient-to-br from-white via-white to-[var(--lavender-bg)]/20 p-6 shadow-[0_12px_40px_rgba(91,45,142,0.03)] transition-all duration-300 hover:border-[var(--purple-light)] hover:shadow-[0_24px_56px_rgba(123,75,184,0.12)]"
            >
              {/* Decorative Top-Right Quote Mark */}
              <span className="absolute top-2 right-4 select-none font-serif text-[84px] leading-none text-[var(--purple-light)]/15 pointer-events-none">&ldquo;</span>
              
              <div className="relative z-10 flex items-center justify-between gap-3.5 pb-4 border-b border-[var(--lavender-mid)]/35 mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    width={44} 
                    height={44} 
                    className="h-11 w-11 rounded-full object-cover border-2 border-white ring-2 ring-[var(--purple-light)]/35 shrink-0" 
                  />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-card-title text-[14.5px] font-bold text-[var(--charcoal)] leading-tight">{displayName}</h3>
                      {isLocalGuide && (
                        <span className="inline-flex items-center gap-1 text-[8.5px] font-extrabold uppercase tracking-wider text-[var(--purple)] bg-[var(--lavender-bg)] px-2 py-0.5 rounded-full border border-[var(--lavender-mid)] shrink-0">
                          Local Guide
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-0.5 text-[var(--purple)] text-[12.3px] font-extrabold mt-1.5">
                      {"★".repeat(item.rating)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 flex-1">
                <p className="font-body-main text-[14px] leading-[1.75] text-[var(--grey)] italic">
                  "{item.quote}"
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Indicators */}
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: Math.max(0, 6 - visibleTestimonials + 1) }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => setTestimonialIndex(idx)}
          className={`h-2 rounded-full transition-all duration-300 ${testimonialIndex === idx ? 'w-6 bg-[var(--purple)]' : 'w-2 bg-[var(--lavender-mid)]'}`}
          aria-label={`Go to testimonial page ${idx + 1}`}
        />
      ))}
    </div>
  </div>
</section>

{/* CTA */}
<section className="cta-section">
  <div className="section-eyebrow" >Start Your Journey Today</div>
  <h2 className="section-title" >Ready for <em >Radiant Skin</em>?</h2>
  <p>Book your personalised consultation at Ariix Hair and Skin Clinic, Sinhagad Road or Kharadi, Pune today.</p>
  <div className="cta-actions">
    <Link href="/contact-us" className="btn-white">Book Consultation</Link>
    <a href="tel:+917447424938" className="btn-glass">📞 +91 74474 24938</a>
  </div>
</section>

{/* FAQ */}
<section className="faq-section bg-white py-16 px-6 md:py-20 md:px-14 border-t border-[var(--lavender-mid)]/30" id="faq">
  <div className="mx-auto max-w-[1360px]">
    <div className="mb-12 text-center">
      <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--lavender-mid)] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(91,45,142,0.05)]">
        <span className="h-2 w-2 rounded-full bg-[var(--purple)] animate-pulse" />
        <span className="font-label-sm text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--purple)]">
          Common Questions
        </span>
      </div>
      <h2 className="section-title text-[36px] font-extrabold leading-[1.08] text-[var(--charcoal)] md:text-[54px]">
        Frequently Asked <span className="grad-text">Questions</span>
      </h2>
      <p className="mx-auto mt-4 max-w-[620px] font-body-main text-[15px] leading-7 text-[var(--grey)]">
        Have questions about our skin, hair, and laser treatments? Find expert answers here.
      </p>
    </div>

    <div className="mx-auto max-w-[840px] space-y-4">
      
      <details className="group rounded-[20px] bg-white border border-[var(--lavender-mid)]/30 px-5 py-4 shadow-[0_8px_32px_rgba(91,45,142,0.06)]">
        <summary className="flex cursor-pointer items-center justify-between gap-4">
          <span className="font-plus-jakarta text-[16.5px] font-bold leading-6 text-[var(--charcoal)]">
            What treatments do you offer at Ariix Hair and Skin Clinic?
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lavender-bg)] text-[var(--purple)] transition-transform group-open:rotate-90">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <p className="mt-4 border-t border-[var(--lavender-mid)]/20 pt-4 font-plus-jakarta text-[15px] font-normal leading-7 text-[var(--grey)]">
          We offer a full range of skin, hair, laser, and general clinic treatments. This includes professional skin consultations, chemical peels, dark circle removal, pigmentation packages, microblading, hair restoration (PRP and mesotherapy), laser hair reduction, and treatment for allergies or acne scars.
        </p>
      </details>

      <details className="group rounded-[20px] bg-white border border-[var(--lavender-mid)]/30 px-5 py-4 shadow-[0_8px_32px_rgba(91,45,142,0.06)]">
        <summary className="flex cursor-pointer items-center justify-between gap-4">
          <span className="font-plus-jakarta text-[16.5px] font-bold leading-6 text-[var(--charcoal)]">
            Who will conduct my skin and hair consultation?
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lavender-bg)] text-[var(--purple)] transition-transform group-open:rotate-90">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <p className="mt-4 border-t border-[var(--lavender-mid)]/20 pt-4 font-plus-jakarta text-[15px] font-normal leading-7 text-[var(--grey)]">
          All consultations and treatments are conducted by our qualified clinical expert, Dr. Abhimanyu Jagtap, ensuring you receive safe, medical-grade, personalized advice.
        </p>
      </details>

      <details className="group rounded-[20px] bg-white border border-[var(--lavender-mid)]/30 px-5 py-4 shadow-[0_8px_32px_rgba(91,45,142,0.06)]">
        <summary className="flex cursor-pointer items-center justify-between gap-4">
          <span className="font-plus-jakarta text-[16.5px] font-bold leading-6 text-[var(--charcoal)]">
            How can I book an appointment at the clinic?
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lavender-bg)] text-[var(--purple)] transition-transform group-open:rotate-90">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <p className="mt-4 border-t border-[var(--lavender-mid)]/20 pt-4 font-plus-jakarta text-[15px] font-normal leading-7 text-[var(--grey)]">
          You can request an appointment easily by filling out our online "Book a Consultation" form directly on this home page. Alternatively, you can call us at +91 74474 24938 or reach out via WhatsApp for immediate support.
        </p>
      </details>

      <details className="group rounded-[20px] bg-white border border-[var(--lavender-mid)]/30 px-5 py-4 shadow-[0_8px_32px_rgba(91,45,142,0.06)]">
        <summary className="flex cursor-pointer items-center justify-between gap-4">
          <span className="font-plus-jakarta text-[16.5px] font-bold leading-6 text-[var(--charcoal)]">
            Is there any downtime or recovery required for laser or peel treatments?
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lavender-bg)] text-[var(--purple)] transition-transform group-open:rotate-90">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <p className="mt-4 border-t border-[var(--lavender-mid)]/20 pt-4 font-plus-jakarta text-[15px] font-normal leading-7 text-[var(--grey)]">
          Most of our chemical peel and laser therapies are highly advanced and customized to require minimal to no downtime, so you can resume your normal activities immediately. Our specialists will provide you with clear post-care instructions, including sun protection, to ensure optimal healing.
        </p>
      </details>

      <details className="group rounded-[20px] bg-white border border-[var(--lavender-mid)]/30 px-5 py-4 shadow-[0_8px_32px_rgba(91,45,142,0.06)]">
        <summary className="flex cursor-pointer items-center justify-between gap-4">
          <span className="font-plus-jakarta text-[16.5px] font-bold leading-6 text-[var(--charcoal)]">
            What are the working hours of the Ariix Hair and Skin Clinic?
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--lavender-bg)] text-[var(--purple)] transition-transform group-open:rotate-90">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </summary>
        <p className="mt-4 border-t border-[var(--lavender-mid)]/20 pt-4 font-plus-jakarta text-[15px] font-normal leading-7 text-[var(--grey)]">
          The clinic operates Monday to Saturday. The morning session is from 10:00 AM to 2:00 PM, and the evening session is from 5:00 PM to 9:00 PM. We are closed on Sundays.
        </p>
      </details>

    </div>
  </div>
</section>



{/* FOOTER */}

    </main>
  );
}