# UI/UX Pro — WebbingHUB Design System

When working on any UI/UX task for this project, apply these guidelines at all times.

## Design Tokens
- **Display font**: Cormorant (serif, italic for emphasis) — `var(--font-cormorant)`
- **Body font**: Jost (sans-serif, weight 300–600) — `var(--font-jost)`
- **Gold**: `#b8975a` — primary accent, CTAs, highlights
- **Gold light**: `#d4b47a` — hover states
- **Gold bg**: `#fdf6ec` — subtle tinted surfaces
- **Ink**: `#1c1917` — primary text
- **Ink2**: `#44403c` — secondary text
- **Paper**: `#faf8f5` — light section backgrounds
- **Line**: `#e8e2d9` — borders and dividers

## Typography Rules
- Headlines: Cormorant, weight 500, with italic gold `<em>` for the emotional word
- Body: Jost weight 300, line-height 1.85, color ink2
- Eyebrows: Jost 0.72rem, weight 500, letter-spacing 0.22em, uppercase, gold — always with a 24px gold line before
- Section labels follow the eyebrow pattern

## Component Patterns
- **Cards**: white bg, `1px solid var(--line)`, border-radius 6px, hover: translateY(-3px) + gold border + box-shadow
- **CTA buttons**: gold bg, ink text, weight 600, padding 1.25rem 3.5rem, box-shadow `0 8px 30px rgba(184,151,90,0.4)`, hover lifts + stronger shadow
- **Dark CTAs**: ink bg section, gold button, white headline with gold italic em
- **Sections**: alternate between `var(--paper)` and `var(--white)` backgrounds
- **Borders**: always `1px solid var(--line)` — never heavier
- **Gold accent stripe**: 3px gradient stripe (`transparent → gold → transparent`) on section edges

## Interaction Standards
- All hover transitions: 0.2–0.25s ease
- Lift on hover: `translateY(-2px)` to `translateY(-4px)`
- Text links: underline scale animation from right (scaleX 0→1, origin switches)
- Scroll reveal: opacity 0→1 + translateY 20px→0, 0.65s ease, threshold 0.1

## Layout Rules
- Max content width: follow section-specific maxes (articles: 740px, posts: 900px)
- Section padding: 5rem 4rem desktop, 4rem 1.5rem mobile (max 960px)
- Grid gaps: 6–8rem on two-column layouts
- Hero: 7fr 3fr split (content left, visual right)

## What "good" means for this project
- Premium editorial feel — not SaaS, not startup-generic
- Every section must have a clear visual anchor (decorative letter, accent stripe, or number)
- CTAs must feel impulsive — large, gold, with a glow shadow
- White space is intentional but not empty — add a decorative element before removing padding
- Mobile: stack gracefully at 960px, reduce padding, keep all content visible
