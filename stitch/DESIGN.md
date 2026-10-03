---
name: Belgian Artisan Plumbing
colors:
  surface: '#f7f9ff'
  surface-dim: '#cedbed'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#dce9fb'
  surface-container-highest: '#d6e4f5'
  on-surface: '#101d29'
  on-surface-variant: '#434653'
  inverse-surface: '#25323f'
  inverse-on-surface: '#e8f1ff'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#2559bd'
  primary: '#00327d'
  on-primary: '#ffffff'
  primary-container: '#0047ab'
  on-primary-container: '#a5bdff'
  inverse-primary: '#b1c5ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#123470'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e4b88'
  on-tertiary-container: '#a3bdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001946'
  on-primary-fixed-variant: '#00419e'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#d9e2ff'
  tertiary-fixed-dim: '#b0c6ff'
  on-tertiary-fixed: '#001945'
  on-tertiary-fixed-variant: '#274581'
  background: '#f7f9ff'
  on-background: '#101d29'
  surface-variant: '#d6e4f5'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
  numeric-timer:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '800'
    lineHeight: 28px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-trust, responsive visual identity for a premier Belgian emergency plumbing and heating enterprise. It blends traditional Belgian tradesman craftsmanship, precision engineering, and swift technical dependability with modern, crisp digital ergonomics. 

The aesthetic sits at the intersection of **Corporate / Modern** and functional utility. When a client faces water damage, burst piping, or a failed heating system at 02:00 in Brussels, Antwerp, or Ghent, the interface must instantly eliminate anxiety and project decisive authority. 

Key visual principles:
- **Immediate Reassurance:** Clean structural hierarchy that presents immediate emergency dispatch indicators without chaotic alarms.
- **Craft & Reliability:** Grounded navy tones paired with clean surgical blue surfaces to communicate certified technical proficiency.
- **Conversion-Critical Clarity:** Emergency phone triggers, transparent call-out pricing, and arrival time estimates receive decisive, unmissable emphasis.

## Colors

The palette is engineered around high contrast, institutional trust, and emergency signaling.

- **Primary (`#0047AB` - Royal Blue):** Anchors brand authority, primary call-to-actions, and certified badges.
- **Secondary (`#FFD700` - Warm Yellow / Flemish Gold):** High-visibility accent utilized exclusively for emergency contact triggers, urgent notification callouts, rating stars, and rapid-dispatch tags. Must always pair with `#10213A` text for WCAG AAA legibility.
- **Tertiary (`#062C68` - Dark Navy Surface):** Used for authoritative headers, dark hero sections, night-mode emergency bars, and high-impact structural blocks.
- **Neutrals & Surfaces:**
  - Off-White Base Canvas: `#F7F9FC`
  - Subdued Light Blue Accent Surface: `#EFF6FF`
  - Structural Borders & Separators: `#E4EAF1`
  - Body & Headline Typography: `#10213A` (Deep Slate Navy)
  - Secondary & Metadata Typography: `#5E6B7A` (Muted Steel Blue)
- **Functional Semantics:**
  - Success/Active Dispatch: `#059669`
  - Critical Pipe Failure/Alert: `#DC2626`

## Typography

Typography pairs **Manrope** for authoritative, geometric, and high-legibility display headlines with **Inter** for dense, unyielding readability in body content, technical descriptions, and administrative invoice displays.

- **Manrope:** Provides structural precision for technical diagnostics, emergency intervention timings, and pricing.
- **Inter:** Ensures zero ambiguity during crisis reading (e.g., diagnosing valve shutdowns or reviewing step-by-step instructions before the van arrives).
- **Tabular Figures:** All phone numbers, price tags, and postal codes must utilize tabular lining (`font-variant-numeric: tabular-nums`) to ensure strict vertical alignment in checkout receipts and triage flows.

## Layout & Spacing

The layout is built on a responsive 12-column grid designed for rapid scanning on handheld screens, where 80%+ of emergency calls originate.

- **Breakpoints:**
  - Mobile: `< 640px` (4-column grid, compact margins)
  - Tablet: `640px – 1024px` (8-column grid)
  - Desktop: `> 1024px` (12-column grid, centered with max-width `1280px`)
- **Spacing Rhythm:** Built strictly on an 8pt system. Component gaps, padding within cards, and structural margins adhere to the scale defined above.
- **Emergency Sticky Rails:** Mobile screens preserve a fixed bottom viewport zone of `72px` reserved entirely for the single-tap "Call Dispatcher Now" button.

## Elevation & Depth

Visual depth follows an **Ambient Shadows** and crisp border-structure philosophy. Surfaces use soft, cool-tinted shadows that avoid muddiness and emphasize elevation above `#F7F9FC` background tiles.

- **Level 0 (Flat / Inset):** Bordered with `#E4EAF1`, no shadow. Used for secondary metadata panels and form fields.
- **Level 1 (Resting Cards):** `0px 2px 8px rgba(16, 33, 58, 0.04), 0px 1px 2px rgba(16, 33, 58, 0.02)`. Combined with a subtle 1px border of `#E4EAF1`.
- **Level 2 (Hovered Cards & Dropdowns):** `0px 8px 24px -4px rgba(6, 44, 104, 0.08), 0px 4px 12px -2px rgba(16, 33, 58, 0.04)`.
- **Level 3 (Emergency Floating Modals & Fixed Contact Rails):** `0px 16px 36px -6px rgba(6, 44, 104, 0.16), 0px 6px 16px -4px rgba(16, 33, 58, 0.08)`.
- **Tinted Layering:** Surface cards in dark navy containers (`#062C68`) employ a 5% translucent white border (`rgba(255, 255, 255, 0.1)`) instead of drop shadows.

## Shapes

The interface balances accessibility with modern mechanical precision:

- **Cards, Panels & Modals:** Standardized between `14px` and `18px` (using `rounded-lg` / `rounded-xl` respectively), softening the interface while maintaining clean European design standards.
- **Buttons, Toggles & Input Fields:** Standardized between `8px` and `10px` (`rounded-md` equivalent to `0.5rem - 0.625rem`) for a tactile, professional tool feel.
- **Emergency Action Buttons:** Feature `10px` rounded corners with generous vertical padding to create large, unmissable tap targets for distressed users.
- **Status Pills & Micro-Badges:** Fully pill-shaped (`9999px`) for instant differentiation from interactive buttons.

## Components

### Buttons
- **Emergency Direct Call (Primary Urgent):** Background `#FFD700`, text `#10213A`, font weight 700. Features an integrated telephone handset icon. Hover shifts to `#E6C200`. Active state applies a subtle 1px downward translation.
- **Primary Standard (Book Intervention):** Background `#0047AB`, text `#FFFFFF`, border-radius 8px–10px. Hover shifts to `#003888`.
- **Secondary (Triage / Non-Emergency):** Background `#EFF6FF`, border 1px solid `#0047AB`, text `#0047AB`.
- **Destructive / Cancellation:** Transparent background, text `#DC2626`, hover background `rgba(220, 38, 38, 0.05)`.

### Cards
- **Emergency Status Card:** White `#FFFFFF` surface, `16px` border-radius, 1px solid `#E4EAF1`, subtle level-1 shadow. Includes a top hairline indicator bar: `#FFD700` for active intervention, `#059669` for technician en route.
- **Dark Metric Card:** Background `#062C68`, text `#FFFFFF`, subtext `#EFF6FF` at 80% opacity, border 1px solid `rgba(255, 255, 255, 0.1)`.

### Chips & Badges
- **Status Indicator:** Pill-shaped, padding `4px 12px`.
  - En Route: `#059669` text on `#ECFDF5` background with pulsing green dot.
  - Urgent Triage: `#10213A` text on `#FFD700` background.
  - Certified (Cerga / VCA): `#0047AB` text on `#EFF6FF` background.

### Input Fields & Selectors
- **Address & Postal Code Input:** 48px height, `8px` corner radius, `#FFFFFF` background, `#E4EAF1` border, text `#10213A`.
- **Focused State:** 2px solid border in `#0047AB` with a 3px soft outer ring in `rgba(0, 71, 171, 0.15)`. No default browser outlines.
- **Error State:** Border `#DC2626`, accompanying helper text in 12px red.

### Checkboxes & Radios
- Box size `20x20px`, `6px` radius for checkboxes, circular for radios. Inactive border `#5E6B7A`. Selected state filled with `#0047AB` housing a sharp white glyph.

### Specialized Plumbing Components
- **Arrival Time Counter:** High-contrast panel displaying live estimated time of arrival (e.g., "Arriving in 24 min") in `numeric-timer` Manrope typography.
- **Diagnostic Triage Picker:** Grid of icon-based cards (Leak, Boiler Failure, Clogged Drain, Frozen Pipe) with 16px radius, toggling to an active state highlighted by a 2px `#0047AB` border and `#EFF6FF` background fill.