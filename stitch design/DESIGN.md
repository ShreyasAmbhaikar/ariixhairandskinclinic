---
name: Smile Bright Design System
colors:
  surface: '#FEFCFF'
  surface-dim: '#F8E4CC'
  surface-bright: '#FEFCFF'
  surface-container-lowest: '#FEFCFF'
  surface-container-low: '#FFF0DA'
  surface-container: '#FFE4BE'
  surface-container-high: '#FBD5A2'
  surface-container-highest: '#F9C37A'
  on-surface: '#6C3C11'
  on-surface-variant: '#8B6645'
  inverse-surface: '#6C3C11'
  inverse-on-surface: '#FEFCFF'
  outline: '#B9824F'
  outline-variant: '#F0C79C'
  surface-tint: '#F1942C'
  primary: '#B85F0D'
  on-primary: '#FEFCFF'
  primary-container: '#B85F0D'
  on-primary-container: '#FEFCFF'
  inverse-primary: '#F9A137'
  secondary: '#F1942C'
  on-secondary: '#FEFCFF'
  secondary-container: '#F9A137'
  on-secondary-container: '#6C3C11'
  tertiary: '#9f3c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c84d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#003cad'
  secondary-fixed: '#bee9ff'
  secondary-fixed-dim: '#69d3ff'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d64'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#FEFCFF'
  on-background: '#6C3C11'
  surface-variant: '#FFF0DA'
  page-bg: '#FEFCFF'
  primary-dark: '#8F4506'
  accent-orange: '#F9A137'
  text-dark: '#6C3C11'
  text-muted: '#8B6645'
  section-light: '#FFF6EA'
  card-white: '#FBFCFC'
  border-overlay: rgba(255, 255, 255, 0.12)
  orange-soft: rgba(108, 60, 17, 0.12)
typography:
  hero-heading:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.05'
    letterSpacing: -0.02em
  section-heading:
    fontFamily: Plus Jakarta Sans
    fontSize: 42px
    fontWeight: '800'
    lineHeight: '1.2'
  cta-statement:
    fontFamily: Plus Jakarta Sans
    fontSize: 50px
    fontWeight: '800'
    lineHeight: '1.22'
  card-title:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '800'
    lineHeight: '1.4'
  body-main:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  nav-link:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-v-desktop: 90px
  section-v-mobile: 60px
  container-max: 1280px
  content-max: 1040px
  gutter: 24px
  card-padding: 32px
---

# DESIGN.md — Smile Bright Dental Clinic Landing Page

## Goal
Create a polished, modern dental clinic landing page that visually matches the provided reference screenshot as closely as possible. The final page should feel bright, trustworthy, friendly, and professional, using a warm orange dental/healthcare theme with orangy-white cards, rounded corners, clean spacing, and soft clinical imagery.

The page brand is **Smile Bright**.

> Important: Match the layout, proportions, typography weight, section ordering, rounded cards, centered headings, and image placement from the screenshot, but use the orange/orangy-white palette defined in this document instead of the original cool-toned palette. The source screenshot is low resolution, so use the visible copy below and clean dental placeholder copy where microcopy is unreadable.

---

## Overall Page Style

### Canvas and Container
- Body/background outside the website: very light cool gray `#E4E9F3`.
- Main website canvas: centered, white background, with a clean rectangular website frame.
- Desktop page max width: around `1200px` to `1280px`.
- On large screens, keep the page centered with slight outer margin so the light gray body is visible.
- Sections should span the full width of the website canvas.
- Use generous vertical spacing and a premium SaaS/healthcare landing-page feel.

### Design Keywords
Modern dental clinic, warm medical orange, soft orangy-white cards, friendly dentists, clean white space, rounded image tiles, trustworthy healthcare, minimal navigation, large bold headings.

---

## Color Tokens

Use these colors consistently:

```css
--page-bg: #FEFCFF;
--white: #FEFCFF;
--primary-orange: #B85F0D;
--primary-orange-base: #F1942C;
--primary-orange-dark: #8F4506;
--accent-orange: #F9A137;
--dark-text: #6C3C11;
--muted-text: #8B6645;
--light-section: #FFF6EA;
--card-bg: #FBFCFC;
--footer-line: rgba(255,255,255,0.12);
--orange-card-soft: rgba(108,60,17,0.12);
```

### Color Usage
- Orange sections: deep orange `#B85F0D` for strong contrast.
- Primary buttons: deep orange `#B85F0D`, white text.
- Secondary/accent buttons: warm orange `#F9A137`, white or dark-brown text depending on contrast.
- Dark headings: rich brown `#6C3C11`.
- Body copy: muted brown `#8B6645`.
- Testimonial section background: very pale orange-white `#FFF6EA`.

---

## Typography

Use a rounded modern sans-serif font.

Preferred fonts:
1. **Plus Jakarta Sans**
2. **Manrope**
3. **Inter** fallback

### Type Scale
- Header logo text: `24px`, `700`.
- Navigation: `14px`, `500`.
- Hero heading: `64px` desktop, `44px` tablet, `34px` mobile, weight `800` or `900`, line-height `1.05`.
- Section headings: `42px` desktop, `34px` tablet, `28px` mobile, weight `800`.
- About heading: `44px`, weight `800`, line-height `1.12`.
- CTA quote heading: `50px` desktop, `38px` tablet, `30px` mobile, weight `800`, line-height `1.22`.
- Card titles: `20px`, weight `800`.
- Body copy: `15px` to `16px`, line-height `1.7`.
- Small labels/captions: `13px`, line-height `1.4`.

### Text Treatment
- Keep headings bold, rounded, and compact.
- Avoid thin font weights.
- Use strong contrast for brown text on orangy-white and white text on dark orange.
- Hero headline should have one orange phrase: **Dental**.

---

## Layout Structure

The landing page must follow this exact order:

1. Header / Navigation
2. Hero section
3. Dental Services section
4. About / confidence smile section
5. Dental team section
6. Testimonials section
7. Large orange statement CTA section
8. FAQ section
9. Emergency dentist + Footer

---

# 1. Header / Navigation

## Layout
- White header on top of the white hero section.
- Horizontal layout, centered inside a max-width container.
- Left: logo icon + **Smile Bright** wordmark.
- Right: navigation links and rounded orange contact button.
- Header height: around `80px`.
- Container horizontal padding: `64px` desktop, `24px` mobile.

## Logo
- Use a small orange dental-inspired icon: abstract tooth, smile, or bird-like dental mark.
- Logo icon size: around `36px` wide.
- Wordmark: **Smile Bright**, dark text, bold.

## Navigation Items
Use these exact nav labels:
- About Us
- Our Services
- Testimonials
- Team
- FAQ

Final CTA button:
- Label: **Contact us**
- Orange filled pill button.
- Height: `44px`.
- Border radius: `999px`.

## Mobile
- Collapse nav into a hamburger menu.
- Keep logo visible.
- Keep Contact button optional or place it inside mobile menu.

---

# 2. Hero Section

## Visual Style
- White background.
- Centered hero content.
- Big bold headline with an inline rounded photo pill between words.
- Decorative dental badge on the left and tooth illustration on the right.
- Below hero text: row of image cards and one orange stat card.

## Hero Layout
Desktop container max-width: `980px` to `1080px`.
Top spacing after header: `48px`.
Bottom spacing: `72px`.

Hero content alignment: center.

### Top Social Proof Row
Place above headline:
- Small overlapping circular avatar stack, 4 avatars.
- Small text beside it: **Trusted by happy patients** or **Trusted by 86+ patients**.
- Keep this row centered.

### Headline
Use this exact visible headline:

**Dental Clinic [inline smile photo pill] That**  
**You Can Trust**

Details:
- First word **Dental** must be orange.
- Remaining text near-black.
- Inline image pill should be a small rounded rectangle image of a smiling mouth/teeth.
- Pill size: about `110px x 44px` on desktop.
- Border radius: `999px`.
- Heading line-height: tight.

### Subheading
Use clean dental copy in the same position:

`Experience gentle, modern dental care designed to keep your smile healthy, confident, and bright. Our trusted team is here to make every visit comfortable.`

Style:
- Max width: `620px`.
- Centered.
- Muted gray.
- Font size: `16px`.

### Hero Buttons
Two centered pill buttons:
1. **View services** — orange filled button.
2. **Schedule visit** — white/transparent button with orange border and orange text.

Button specs:
- Height: `46px`.
- Padding: `0 28px`.
- Border radius: `999px`.
- Gap between buttons: `16px`.

### Decorative Elements
Left of headline:
- Circular badge with text around ring and a tooth icon in center.
- Ring text can read: **Bright Smile Clinic** repeated.
- Size: about `120px` desktop.

Right of headline:
- Floating 3D tooth illustration with warm orange glow.
- Size: about `130px` desktop.

Use absolute positioning on desktop; hide or reduce opacity on mobile.

### Bottom Hero Image Grid
Create four horizontally aligned tiles:

1. Tall image card: woman in dental chair touching cheek / dental checkup.
2. Smaller image card: child getting dental checkup.
3. Orange stat card.
4. Tall image card: smiling woman receiving dental treatment.

Card details:
- All cards have rounded `20px` corners.
- Image object-fit: cover.
- Gap: `24px`.
- First and last image cards slightly taller than middle.
- Use this approximate desktop sizing:
  - Left image: `260px x 310px`
  - Middle image: `240px x 240px`, aligned lower
  - Orange stat card: `240px x 240px`, aligned lower
  - Right image: `260px x 310px`

Orange stat card content:
- Small circular icon at top-left: group/medical icon in white.
- Large number: **86+**
- Label: **Skilled Dentist** or **Skilled Doctors**
- Card background: primary orange.
- Text white.

---

# 3. Our Dental Services Section

## Section Style
- Full-width orange background: `#B85F0D`.
- White centered heading.
- Vertical padding: `88px 0` desktop.

## Heading
Text:

**Our Dental Services**

Style:
- White.
- Centered.
- Bold.
- Bottom margin: `54px`.

## Service Cards
Layout: 3 cards in a row, centered.
Container max-width: `960px`.
Gap: `28px`.

Card style:
- White background.
- Border radius: `16px`.
- Width: equal, around `300px`.
- Height: around `220px`.
- Padding: `32px`.
- No heavy border.
- Subtle shadow only if needed.

### Card 1
Title: **Dental Exams**
Body copy:
`Comprehensive oral checkups to protect your teeth, detect issues early, and keep your smile healthy.`
Button: **Learn More**
- Orange pill button.
- Small size, around `120px x 38px`.

### Card 2
Icon: orange circular icon with white tooth.
Title at bottom-left: **Teeth Whitening**

### Card 3
Icon: orange circular icon with white implant/tooth symbol.
Title at bottom-left: **Dental Implant**

## Section Button
Centered below cards:
- Label: **View All Services**
- Accent-orange filled pill button.
- Height: `42px`.
- Border radius: `999px`.
- Top margin: `52px`.

---

# 4. About / Confident Smile Section

## Section Style
- White background.
- Two-column layout.
- Left: text, stats, button.
- Right: large cutout-style dentist image.
- Padding: `90px 0` desktop.

## Container
Max width: `1040px`.
Grid columns: `1fr 1fr`.
Align items center.

## Heading
Use visible text:

**Achieve a Confident**  
**Smile With Us**

Style:
- Dark text.
- Large bold.
- Line-height around `1.12`.

## Body Copy
Use:

`At Smile Bright, we combine advanced dental care with a warm, friendly approach. Our skilled team focuses on comfort, precision, and personalized treatment so every patient can enjoy a healthier, brighter smile.`

## Stats Row
Three stats separated by subtle vertical divider lines:

1. **25+**  
   `Years Experience`
2. **12+**  
   `Awards Won`
3. **16k+**  
   `Satisfied Patients`

Style:
- Numbers large, dark, bold.
- Labels small, muted.
- Dividers very light gray.

## Button
- Label: **Learn More**
- Orange filled pill.
- Height: `42px`.

## Image
- Use a large image of a female dentist/doctor in white coat holding a dental model.
- Image has no visible card background; it should feel cut out on white.
- Right aligned.
- Image height around `500px` desktop.

---

# 5. Dental Team Section

## Section Style
- Orange background: `#B85F0D`.
- White heading.
- Padding: `90px 0 100px` desktop.

## Heading
Use visible text:

**Our Dental Team is Ready**  
**to Assist You**

Style:
- Centered.
- White.
- Bold.
- Max width: `620px`.

## Team Card Layout
Three doctors in a row.
The middle doctor card is larger and highlighted with accent-orange background.

Container max width: `980px`.
Card alignment: center baseline.
Gap: `28px`.

### Left Doctor Card
- Background: lighter translucent orange `rgba(255,255,255,0.12)` or `#F1942C`.
- Rounded corners: `18px`.
- Width: `260px`.
- Height: image card about `300px`.
- Doctor image: male dentist in white coat.
- Name below/over lower area: **Dr. Ralph Edwards**
- Role: **Dental Surgeon**

### Middle Doctor Card
- Larger card.
- Background: accent orange `#F9A137`.
- Rounded corners: `18px`.
- Width: `360px`.
- Doctor image: female dentist wearing glasses, white coat, stethoscope.
- Image larger, extends lower.
- Name below: **Dr. Shelley Robinson**
- Role: **Dental Surgeon**

### Right Doctor Card
- Background: lighter translucent orange `rgba(255,255,255,0.12)` or `#F1942C`.
- Rounded corners: `18px`.
- Width: `260px`.
- Doctor image: female dentist in white coat.
- Name: **Dr. Nicola Lester**
- Role: **Dental Surgeon**

Text style:
- Names: white, bold.
- Roles: white with opacity `0.8`, small.

---

# 6. Testimonials Section

## Section Style
- Pale orange-white background: `#FFF6EA`.
- Layout: left intro column + right masonry testimonial cards.
- Padding: `90px 0` desktop.

## Container
Max width: `1040px`.
Grid columns:
- Left: `34%`
- Right: `66%`

## Left Column
Heading:

**What Patients**  
**Are Saying**

Body:
`Hear from patients who trust Smile Bright for comfortable care and lasting results.`

Rating Card:
- Orange rounded rectangle.
- Width: `280px`.
- Height: `110px`.
- Icon: white star/spark in a soft orange circle.
- Big number: **4.9**
- Small label: **Care quality** or **Google Rating**

## Testimonial Cards
Use white cards, soft shadows, and rounded corners.
Arrange cards in two vertical columns with staggered/masonry spacing.

Card style:
- White background.
- Border-radius: `18px`.
- Padding: `28px`.
- Width: around `320px`.
- Min-height: `150px`.
- Quote icon in top-right: orange double quote.
- 5 accent-orange stars below name.

Use these visible names:
1. Alexander Harris
2. Samuel Walker
3. Emily Williams
4. Matthew Lewis
5. Kristin Wilson
6. Luke Williams

Use short testimonial copy such as:
`The team made my visit comfortable and stress free. Everything felt modern, clean, and professional.`

`I was nervous before my appointment, but the dentist explained every step and made me feel at ease.`

`Great care, friendly staff, and excellent results. My smile looks brighter than ever.`

---

# 7. Large Orange Statement CTA Section

## Section Style
- Full-width orange background: `#B85F0D`.
- Centered oversized text.
- Padding: `88px 80px` desktop.

## Text
Use visible text exactly:

**Step Into A World Of [image pill] Brighter**  
**Smiles [small round image] With Our Professional Dental**  
**Care Services. Our Team Is Dedicated**  
**To Providing [image pill] Exceptional**  
**Dental Care Services.**

## Styling
- White text.
- Large bold heading.
- Centered.
- Max width: `980px`.
- Line height: `1.2`.

## Inline Images
Add three inline images inside the heading:
1. Horizontal rounded pill image of dental treatment near “World Of”.
2. Small circular avatar image after “Smiles”.
3. Horizontal rounded pill image before “Exceptional”.

Image dimensions:
- Pill: `120px x 44px`, border-radius `999px`.
- Circle: `42px x 42px`, border-radius `50%`.
- Align images vertically with text baseline.

---

# 8. FAQ Section

## Section Style
- White background.
- Padding: `88px 0 100px` desktop.

## Header
Centered heading:

**Frequently Asked**  
**Questions**

Subheading:
`Find quick answers to common dental care questions before your visit.`

## Content Layout
Two columns:
- Left: large dental treatment image.
- Right: accordion FAQ list.

Container max width: `1040px`.
Gap: `40px`.

## Left Image
- Image of a patient receiving dental treatment with warm clinical tones.
- Rounded corners: `18px`.
- Size: about `500px x 360px`.
- Object-fit: cover.

## FAQ Accordion
Right column width: about `520px`.
Use four accordion rows.

### First FAQ Open
Open row background:
- Orange header bar `#B85F0D`.
- White question text.
- White minus icon at right.
- Below it, white/very light answer body.
- Overall rounded `18px`.

Question:
**What is the fastest way to schedule my visit?**

Answer:
`You can contact us directly or book an appointment online. Our team will help you choose the earliest available slot and prepare for your visit.`

### Closed FAQ Rows
White/light card rows with subtle shadow.
Left icon: small orange tooth icon.
Right icon: plus sign.

Questions:
- **How do I know if I need braces or Invisalign?**
- **How do I know if I need a root canal?**
- **What should I do if I have a toothache?**

---

# 9. Emergency Dentist CTA + Footer

## Section Style
- Orange background: `#B85F0D`.
- White text.
- This section includes a top emergency CTA and footer columns below.
- Padding top: `80px`.
- Padding bottom: `64px`.

## Emergency CTA Row
Layout:
- Left: heading and short body copy.
- Right: two buttons.

Heading:

**Need an Emergency**  
**Dentist?**

Body:
`Call our team for urgent dental support. We provide quick guidance and priority appointments whenever possible.`

Buttons:
1. **Contact Us** — accent-orange filled pill.
2. **View Services** — transparent pill with white border.

Button dimensions:
- Height: `46px`.
- Padding: `0 28px`.
- Border radius: `999px`.

Add a thin divider line below this CTA:
- `1px solid rgba(255,255,255,0.12)`.
- Margin top/bottom around `70px`.

## Footer Columns
Four columns:

### Column 1: Brand
- Logo icon in white/orange.
- Text: **Smile Bright**
- Social icons row: Facebook, X/Twitter, Instagram, LinkedIn.
- Copyright:
  `© 2026 Smile Bright. All Rights Reserved.`

### Column 2: Smile Bright Clinic
Links:
- About Us
- Our Services
- Team
- Testimonials
- FAQ

### Column 3: Contact
Use placeholder contact details:
- `+1 234 567 8900`
- `smilebright@email.com`
- `123 Dental Street, New York`
- `Mon - Sat: 9AM - 9PM`

### Column 4: Helpful Links
Links:
- Oral Health
- Careers
- Privacy Policy
- Terms & Conditions

Footer details:
- Link text white with opacity `0.72`.
- Column headings white, bold.
- Background remains primary orange.
- Add huge transparent wordmark at bottom: **Smile Bright** in oversized text with very low opacity `0.06`.

---

## Image Direction
Use realistic, bright, clinical stock images. Keep all images clean, modern, and friendly.

Required imagery:
- Woman in dental chair touching cheek / dentist gloves.
- Child dental checkup.
- Smiling woman receiving dental checkup.
- Female dentist holding dental model.
- Male dentist portrait.
- Female dentist portrait with glasses/stethoscope.
- Female dentist portrait in white coat.
- Patient receiving dental treatment for FAQ image.
- Small smiling-mouth inline hero image.
- Small dental-treatment image pills inside CTA heading.

Image treatment:
- Rounded corners: `18px` to `24px`.
- Object-fit: cover.
- Avoid harsh filters.
- Keep whites clean and oranges warm/saturated.
- For doctor/team images, use cutout or portrait images against orange/accent-orange panels.

---

## Spacing System
Use an 8px spacing scale.

Suggested values:
- Section horizontal padding: `64px` desktop, `24px` tablet/mobile.
- Section vertical padding: `80px` to `100px`.
- Card padding: `28px` to `36px`.
- Card gaps: `24px` to `32px`.
- Heading bottom margin: `20px` for subheading, `48px` to content.

---

## Border Radius
- Pill buttons: `999px`.
- Standard cards: `16px` to `20px`.
- Image cards: `18px` to `24px`.
- Team cards: `18px`.
- FAQ accordion: `18px`.

---

## Shadows
Use subtle shadows only on white cards.

```css
--card-shadow: 0 18px 50px rgba(27, 55, 100, 0.08);
--soft-shadow: 0 10px 30px rgba(27, 55, 100, 0.06);
```

Do not overuse shadows in orange sections; keep them flat and clean.

---

## Responsive Behavior

### Tablet
- Header nav may remain visible if enough space, otherwise collapse to hamburger.
- Hero image grid becomes 2 columns.
- About becomes two stacked sections or maintains two columns if width allows.
- Team cards become stacked with middle card first or preserve order with reduced sizes.
- Testimonials become one intro block followed by cards in 2 columns.
- FAQ image and accordion stack vertically.

### Mobile
- Use single-column layout.
- Hero heading: around `34px`.
- Hide decorative circular badge and floating tooth or reduce their size and place behind content with low opacity.
- Hero buttons stack or remain two across if they fit.
- Service cards stack vertically.
- Stats row can stack or stay three columns with smaller text.
- Team cards stack vertically.
- Testimonials cards stack vertically.
- Footer columns stack vertically.

---

## Interaction Notes
- Buttons should have subtle hover states:
  - Orange button hover: slightly darker `#8F4506`.
  - Accent-orange button hover: slightly darker orange.
  - Outline button hover: white transparent fill.
- FAQ accordion should expand/collapse.
- Use smooth transitions around `180ms`.

---

## Accessibility
- Maintain strong color contrast.
- Use semantic sections and headings.
- Provide alt text for all dental and doctor images.
- Buttons and accordion controls must be keyboard accessible.
- Do not rely only on icons; include readable text labels.

---

## Copy Summary

### Header
Logo: Smile Bright  
Nav: About Us, Our Services, Testimonials, Team, FAQ  
Button: Contact us

### Hero
Headline: Dental Clinic That You Can Trust  
Buttons: View services, Schedule visit  
Stat: 86+ Skilled Dentist

### Services
Heading: Our Dental Services  
Cards: Dental Exams, Teeth Whitening, Dental Implant  
Button: View All Services

### About
Heading: Achieve a Confident Smile With Us  
Stats: 25+ Years Experience, 12+ Awards Won, 16k+ Satisfied Patients  
Button: Learn More

### Team
Heading: Our Dental Team is Ready to Assist You  
Doctors: Dr. Ralph Edwards, Dr. Shelley Robinson, Dr. Nicola Lester

### Testimonials
Heading: What Patients Are Saying  
Rating: 4.9  
Names: Alexander Harris, Samuel Walker, Emily Williams, Matthew Lewis, Kristin Wilson, Luke Williams

### Statement CTA
Text: Step Into A World Of Brighter Smiles With Our Professional Dental Care Services. Our Team Is Dedicated To Providing Exceptional Dental Care Services.

### FAQ
Heading: Frequently Asked Questions

### Footer CTA
Heading: Need an Emergency Dentist?  
Buttons: Contact Us, View Services

---

## Final Stitch Prompt

Create a responsive dental clinic landing page for a brand called **Smile Bright**. Match the provided reference screenshot in layout and proportions while using a warm orange/orangy-white visual system: full-width warm orange and off-white sections, rounded cards, bold modern typography, friendly dental images, inline image pills in the hero/CTA headings, and a premium healthcare landing-page feel. Use the section order and layout described in this DESIGN.md. Keep the color palette dominated by `#B85F0D`, `#F1942C`, `#F9A137`, `#FEFCFF`, `#FBFCFC`, and rich brown text `#6C3C11`. The page should include header navigation, hero, service cards, about section with stats, dental team cards, testimonials grid, large orange statement CTA, FAQ accordion, and orange emergency footer.
