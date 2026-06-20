const fs = require('fs');
const path = require('path');

// Read the original HTML file
const html = fs.readFileSync('../Dermacure Skin Clinic — Pune _ Skin _ Hair _ Laser _ General Clinic.html', 'utf-8');

// Ensure public/images/extracted directory exists
const outputDir = path.join(__dirname, 'public', 'images', 'extracted');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Extract base64 images
let base64Count = 0;
const base64Regex = /data:image\/([a-zA-Z0-9\+\-]+);base64,([^"'\)\s]+)/g;

console.log("Extracting base64 images...");
const processedHtml = html.replace(base64Regex, (match, mimeType, base64Data) => {
  base64Count++;
  let ext = mimeType.split('+')[0]; // handle svg+xml -> svg
  if (ext === 'jpeg') ext = 'jpg';
  
  const filename = `img_${base64Count}.${ext}`;
  const filepath = path.join(outputDir, filename);
  
  try {
    fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
    console.log(`Saved ${filename}`);
  } catch (err) {
    console.error(`Error saving ${filename}:`, err);
  }
  
  return `/images/extracted/${filename}`;
});

console.log(`Successfully extracted ${base64Count} images.`);

// Now perform the original conversion steps on the processedHtml
const navStart = processedHtml.indexOf('<nav id="mainNav"');
const navEnd = processedHtml.indexOf('</nav>') + 6;
const navHtml = processedHtml.substring(navStart, navEnd);

const footerStart = processedHtml.indexOf('<footer>');
const footerEnd = processedHtml.indexOf('</footer>') + 9;
const footerHtml = processedHtml.substring(footerStart, footerEnd);

const bodyStart = navEnd;
const bodyEnd = footerStart;
const bodyHtml = processedHtml.substring(bodyStart, bodyEnd);

function toJSX(str) {
  let jsx = str
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--/g, '{/*')
    .replace(/-->/g, '*/}')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/onclick="([^"]*)"/gi, '')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/clip-rule=/g, 'clipRule=');
    
  // close img tags
  jsx = jsx.replace(/<img([^>]*[^/])>/g, '<img$1 />');
  // close input tags
  jsx = jsx.replace(/<input([^>]*[^/])>/g, '<input$1 />');
  
  // Convert basic style strings
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    if (styles.includes('display: none') || styles.includes('display:none')) return "style={{ display: 'none' }}";
    if (styles.includes('position:absolute;inset:0;background:linear-gradient')) return "style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(91,45,142,0.3) 0%, rgba(91,45,142,0.1) 50%, rgba(91,45,142,0.7) 100%)' }}";
    return "";
  });

  return jsx;
}

let processedNav = toJSX(navHtml);
// Replace the external logo link with a local Link
processedNav = processedNav.replace(
  /<a href="https:\/\/demacurepunenew\.netlify\.app\/#" className="logo">([\s\S]*?)<\/a>/,
  '<Link href="/" className="logo">$1</Link>'
);

// Replace the entire ul list items in the header with local Link components
const headerLinks = `
  <ul className="nav-links" id="navLinks">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About Us</Link></li>
    <li><Link href="/our-services">Services</Link></li>
    <li><Link href="/gallery">Treatments</Link></li>
    <li><Link href="/testimonials">Reviews</Link></li>
    <li><Link href="/contact-us" className="btn-nav">Book Now</Link></li>
  </ul>
`;
processedNav = processedNav.replace(/<ul className="nav-links" id="navLinks">[\s\S]*?<\/ul>/, headerLinks);

const headerJSX = `
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <>
      ${processedNav}
    </>
  );
}
`;

let processedFooter = toJSX(footerHtml);
// Replace all external Netlify links with local Link paths in the footer
processedFooter = processedFooter
  .replace(/https:\/\/demacurepunenew\.netlify\.app\/#services/g, '/our-services')
  .replace(/https:\/\/demacurepunenew\.netlify\.app\/#gallery/g, '/gallery')
  .replace(/https:\/\/demacurepunenew\.netlify\.app\/#testimonials/g, '/testimonials')
  .replace(/https:\/\/demacurepunenew\.netlify\.app\/#contact/g, '/contact-us')
  .replace(/https:\/\/demacurepunenew\.netlify\.app\/#/g, '/');

const footerJSX = `
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <>
      ${processedFooter}
    </>
  );
}
`;

const homeJSX = `
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

export default function HomePage() {
  return (
    <main id="main-content">
      ${toJSX(bodyHtml)}
    </main>
  );
}
`;

fs.writeFileSync('components/dermacure/Header.tsx', headerJSX);
fs.writeFileSync('components/dermacure/Footer.tsx', footerJSX);
fs.writeFileSync('app/page.tsx', homeJSX);
console.log("Conversion complete and component files written with local routing links.");
