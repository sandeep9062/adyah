# UI/UX Changes List

Actionable checklist derived from general UI/UX design suggestions. Mark items as you complete them.

---

## 1. Hierarchy & rhythm

- [x] **H1 per page** – Audit every page: ensure exactly one `<h1>` per route; no page has multiple H1s or none.
- [x] **H2 style** – Define a shared H2 pattern (e.g. `font-display`, size like `text-4xl`/`text-5xl`, optional red-vibrant bar or underline) and apply it to all section headings site-wide.
- [x] **Section spacing** – Standardise vertical padding: e.g. `py-24` or `py-32` on desktop for main sections; use the same values across Index, Mental Wellness, Mind & Soul, Breathing, Yoga, Book, Lineage, Team, Journal, Privacy, Terms.
- [x] **Spacing tokens** – Optionally add Tailwind/theme values for section spacing (e.g. `section-py`) so future pages stay consistent.

**Files to touch:** All page components (`src/pages/*.tsx`), possibly `tailwind.config.ts` or `src/index.css` for tokens.

---

## 2. Colour

- [x] **Nav & footer** – Confirm header and footer use `maroon-deep` and `red-vibrant` only (no stray grays or other reds); replace any hard-coded hex (e.g. `#0F0506`) with theme variables.
- [x] **Content backgrounds** – Ensure main content areas use warm neutrals only: `sand`, `warm-cream`, `#FDFCFB` / `#FDFCF9`; no cold grays on key pages.
- [x] **Red-vibrant usage** – Restrict red-vibrant to: active nav link, primary CTAs (Book, Enquire, Submit), section labels (e.g. “The Path”, “Connect”), and success states; remove or tone down elsewhere.
- [x] **Error colour** – Use red-vibrant (or a single error token) for form errors and validation messages site-wide.

**Files to touch:** `Navbar.tsx`, `Footer.tsx`, `index.css`, form components, all pages that use background/CTA colours.

---

## 3. Touch & interaction

- [x] **Nav links** – Ensure every nav link (desktop and mobile) has min height/width ≥ 44px or padding that yields a 44px tap area.
- [x] **Footer links** – Check “The Path” links and legal links: min 44px touch target on mobile.
- [x] **Buttons** – Audit all primary/secondary buttons (Book, Enquire, Submit, Close, etc.); enforce min 44px where they’re tappable.
- [x] **PathCard hover** – Keep hover effect subtle (e.g. light scale like `scale-[1.02]` or soft shadow); remove or reduce any strong motion so it feels calm.
- [x] **Other cards** – Apply same subtle hover rule to any other card components (e.g. service cards, team cards).

**Files to touch:** `Navbar.tsx`, `Footer.tsx`, `PathCard.tsx`, `EnquiryWidget.tsx`, `BookJourney.tsx`, any other card/button components.

---

## 4. Forms

- [x] **Border style** – Use the same input style everywhere: e.g. bottom border only, same border colour at rest and `focus:border-red-vibrant` (or theme ring).
- [x] **Enquiry form** – Confirm inputs use bottom border + red-vibrant focus; match Book form style where possible.
- [x] **Book form** – Same as above; ensure calendar and service chips align with the same visual language.
- [x] **Error colour** – All inline validation/error messages use red-vibrant (or one error token).
- [x] **Success copy** – Enquiry: keep “We’ll be in touch within 24–48 hours” (or similar) plus token; Book: keep one clear confirmation line after submit.

**Files to touch:** `EnquiryWidget.tsx`, `BookJourney.tsx`, any shared form/input components.

---

## 5. Content pages

- [x] **Hero per page** – Each main content page (Mental Wellness, Mind & Soul, Breathing, Yoga, Lineage, Team, Journal) has a short hero: one heading (H1) + one supporting line.
- [x] **Section headings** – All major sections use the shared H2 style (see Hierarchy).
- [x] **Back / breadcrumb** – Add “Back to Home” or a simple breadcrumb (e.g. Home > Mental Wellness) on inner pages; place near top or below hero.
- [x] **Hero CTA** – On long content pages, add a small “Book a session” or “Enquire” link/button in the hero so the next step is obvious without scrolling.

**Files to touch:** `MentalWellnessService.tsx`, `MindSoul.tsx`, `Breathing.tsx`, `YogaSanctuary.tsx`, `LineagePage.tsx`, `AuraProfiles.tsx`, `JournalOfStillness.tsx`; optionally a small `Breadcrumb` or `BackLink` component.

---

## 6. Trust & calm

- [x] **Testimonials** – Keep name + service (or role) on every testimonial; no anonymous quotes only.
- [x] **Testimonial auto-advance** – Keep interval calm (e.g. 5s); ensure pause on tab hidden and after user interaction (already done); avoid faster auto-advance.
- [x] **Tagline / mantra** – Keep “Silence Is Sacred” (or similar) in footer; ensure tone is consistent across any other short lines (e.g. “Heal. Discover. Transform.”).
- [x] **Whitespace** – Review each page: avoid dense blocks; use consistent padding and margins so the site feels calm and premium.

**Files to touch:** `TestimonialSlider.tsx`, `Footer.tsx`, all page layouts.

---

## 7. Performance & polish

- [x] **Lazy-load images** – All images below the fold have `loading="lazy"`; hero can stay eager or `fetchPriority="high"` (already in place on Index).
- [x] **Hero image** – Keep hero optimised (format, size, srcSet if needed); keep `decoding="async"` and `fetchPriority="high"` where appropriate.
- [x] **Above-the-fold fade-in** – Optional: subtle fade-in for hero content (e.g. heading, CTA) with reduced-motion respected (prefers-reduced-motion or duration 0).
- [x] **Focus states** – Every interactive element has a visible focus state (focus-visible ring or equivalent): header, footer, all links/buttons, form controls, cards (e.g. PathCard), modals.

**Files to touch:** All pages with images, `index.css` or motion components for reduced-motion, Navbar/Footer/forms/cards for focus.

---

## Summary table

| # | Area              | Priority | Effort (est.) |
|---|-------------------|----------|----------------|
| 1 | Hierarchy & rhythm | High   | Medium        |
| 2 | Colour            | High     | Low–Medium    |
| 3 | Touch & interaction | High  | Low            |
| 4 | Forms             | Medium   | Low            |
| 5 | Content pages     | High     | Medium        |
| 6 | Trust & calm      | Medium   | Low            |
| 7 | Performance & polish | Medium | Low            |

---

## Notes

- Work through sections in order if you want a consistent base (hierarchy and colour first, then touch targets and forms, then content and trust).
- Re-run accessibility checks (keyboard nav, focus visibility, screen reader) after changing focus styles or adding new links/buttons.
- After changes, do a full pass on mobile viewports to confirm touch targets and spacing.
