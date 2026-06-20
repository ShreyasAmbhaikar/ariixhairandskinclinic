"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categorizedTreatments } from '@/lib/site-config';
export function Header() {
  const pathname = usePathname() || '';
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };
  return (
    <>
      <nav id="mainNav" className="!py-2 md:!py-2.5">
        {/* Logo */}
        <Link href="/" className="logo flex items-center gap-2 md:gap-3 py-1 md:py-1.5">
          <img src="/images/logo-symbol.webp" alt="ARIIX Symbol" width="150" height="149" fetchPriority="high" className="!h-[40px] md:!h-[48px] w-auto object-contain" />
          <img src="/images/logo-text.webp" alt="ARIIX Name" width="300" height="133" fetchPriority="high" className="!h-[38px] md:!h-[46px] w-auto object-contain" />
        </Link>
        {/* Nav links */}
        <ul className="nav-links" id="navLinks">
          <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
          <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link></li>
          {/* Our Treatments — dropdown trigger */}
          <li
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              href="/treatment"
              className={`nav-treatment-trigger ${isActive('/treatment') ? 'active' : ''}`}
            >
              Our Treatments
              <svg
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                className={`nav-chevron ${dropdownOpen ? 'nav-chevron--open' : ''}`}
                aria-hidden="true"
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </li>
          <li><Link href="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link></li>
          <li><Link href="/testimonials" className={isActive('/testimonials') ? 'active' : ''}>Testimonials</Link></li>
          <li><Link href="/contact-us" className="btn-nav">Contact Us</Link></li>
        </ul>
        <div className="hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>
        {/* ── Mega dropdown (rendered inside nav so it's position:absolute relative to the fixed nav) ── */}
        <div
          className={`mega-dropdown${dropdownOpen ? ' mega-dropdown--open' : ''}`}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          aria-hidden={!dropdownOpen}
        >
          <div className="mega-inner">
            {categorizedTreatments.map((category) => (
              <div key={category.name} className="mega-cat">
                {/* Category heading — links to /treatment */}
                <Link href="/treatment" className="mega-cat-title">
                  {category.name}
                </Link>
                <ul className="mega-items">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="mega-item">
                        <span className="mega-dot" aria-hidden="true" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Bottom "View All" strip */}
          <div className="mega-footer">
            <Link href="/treatment" className="mega-view-all">
              View all treatments
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 6.5H10.5M10.5 6.5L7.5 3.5M10.5 6.5L7.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
