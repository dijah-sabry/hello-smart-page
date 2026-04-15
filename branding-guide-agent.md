# Branding System Agent — Barbie Visual Identity

> **Source of truth:** This file governs all UI decisions in this project.  
> Before editing any file that affects visual output, read this document and complete the checklist in Section 6.

---

## 1. Role Definition

This document defines the **Branding System** — a set of enforceable rules that governs every visual decision made in this project. It is not a mood board. It is a decision engine.

**Responsibilities of the Branding System:**

- Enforce color, typography, spacing, and component rules across every UI file.
- Prevent visual regressions introduced by one-off decisions or inconsistent styling.
- Serve as the single reference for any agent, developer, or tool making design-related changes.
- Resolve ambiguity: when two approaches are possible, this document decides.

**What it covers:** HTML, CSS, inline styles, component classes, animation, and copy tone.  
**What it does not cover:** Back-end logic, data models, or non-visual behavior.

**Aesthetic identity in one sentence:**  
*Luxurious, feminine, and slightly nostalgic — like a modern boutique designed inside Barbie's Dreamhouse.*

---

## 2. Decision Rules

Apply these rules mechanically. They are ordered by precedence — rules listed earlier override later ones when conflicts arise.

### Colors

| Trigger | Rule |
|---|---|
| Adding any interactive element (button, link, tab) | Primary action color is `#E91E8C`. No other color may serve as the primary action color. |
| Adding a background to a full page or section | Use `#FFF5F8` (Powder White). Layer `#FFF0F3` (Blush Cream) for nested surfaces. |
| Adding a card, panel, or container | Background `#FFFFFF` or `#FFF0F3`, border `1px solid #F8BBD0`, border-radius `16px`. |
| Adding a decorative or accent element | Use `#E1BEE7` (Soft Lavender) or `#FFCCBC` (Peach Glow). Never use `#E91E8C` for decoration. |
| Adding any text | Primary text: `#880E4F`. Secondary/muted text: `#AD6B7E`. Never use pure black (`#000000`). |
| Adding a divider, rule, or border | Color: `#F8BBD0` (Rose Mist). Weight: `1px`. No harsh or dark borders. |
| Adding a shadow | Use `box-shadow: 0 2px 20px rgba(233, 30, 140, 0.08)` for surfaces. `0 4px 15px rgba(233, 30, 140, 0.35)` for elevated elements only. |
| Choosing between two valid pink tones | Prefer the softer tone unless the element is a primary CTA or hero element. |

### Typography

| Trigger | Rule |
|---|---|
| Adding a page title or hero headline | Font: `Playfair Display`, weight 700, size `3rem`–`4rem`. Italic is allowed. |
| Adding a section heading (H1) | Font: `Playfair Display`, weight 700, size `2rem`. |
| Adding a sub-section heading (H2, H3) | Font: `Cormorant Garamond`, weight 600, size `1.5rem` or `1.25rem`. |
| Adding body copy | Font: `Lato`, weight 400, size `1rem`. |
| Adding a badge, tag, or decorative label | Font: `Dancing Script`, weight 600, size `0.75rem`–`0.875rem`. |
| Adding any display-size text | Apply `letter-spacing: 0.05em`. Serifs get no all-caps — use `font-variant: small-caps` if needed. |
| Adding a heading that needs emphasis | Apply `text-shadow: 1px 1px 4px rgba(233, 30, 140, 0.15)`. Do not use bold alone on serif headings. |

### Spacing

| Trigger | Rule |
|---|---|
| Setting padding on a section | Minimum `3rem` top/bottom, `1.5rem` sides on mobile, `4rem` sides on desktop. |
| Setting padding on a card | `1.5rem`–`2rem` on all sides. |
| Setting gap between stacked elements | Use multiples of `0.5rem`. Prefer `1rem`, `1.5rem`, `2rem`. |
| Setting margin between sections | Minimum `4rem`. Never collapse sections into each other. |
| Deciding border-radius | Buttons: `50px`. Cards: `16px`. Inputs: `12px`. Small chips/tags: `999px`. |

### Interactions & Animation

| Trigger | Rule |
|---|---|
| Adding a hover state to any element | Duration `200ms`, easing `ease-in-out`. Never use linear or instant transitions. |
| Adding a button hover | Darken background by one shade (Primary: `#C2185B`). Deepen shadow. Scale is optional (`transform: scale(1.02)`). |
| Adding a focus state | Border becomes `2px solid #E91E8C`. Add `box-shadow: 0 0 0 3px rgba(233, 30, 140, 0.15)`. |
| Adding an entrance animation | Use `opacity 0 → 1` and `translateY(8px) → 0`. Duration `300ms–400ms`. Never use bouncing, spinning, or jarring keyframes. |

---

## 3. Design Constraints

These are non-negotiable. Every UI file must satisfy all of them at all times.

### Color Constraints

- **Must:** All backgrounds use only palette colors. No off-brand grays, blues, or neutral whites outside the palette.
- **Must:** Text color is always `#880E4F` (primary) or `#AD6B7E` (secondary). Never `#000000` or `#333333`.
- **Must:** `#E91E8C` (Barbie Pink) appears on no more than one primary action element per viewport section.
- **Must not:** Use red, orange (outside `#FFCCBC`), green, blue, or any color outside the defined palette anywhere in the UI.
- **Must not:** Apply full-opacity Barbie Pink as a background to large surface areas (sections, pages).

### Typography Constraints

- **Must:** All four fonts (Playfair Display, Cormorant Garamond, Dancing Script, Lato) are loaded via Google Fonts before any other styles.
- **Must:** Font size never drops below `0.75rem` on any visible text.
- **Must:** Line height for body text is at least `1.6`.
- **Must not:** Use system fonts (`Arial`, `sans-serif`, `Georgia`) as a final font choice for any visible element.
- **Must not:** Use all-caps on Playfair Display or Cormorant Garamond. Use `font-variant: small-caps` instead.

### Layout Constraints

- **Must:** All interactive elements have border-radius. No hard right angles on buttons, cards, or inputs.
- **Must:** Every section has breathing room — minimum `3rem` vertical padding.
- **Must:** The page background is never pure white (`#FFFFFF`) — use `#FFF5F8`.
- **Must not:** Stack more than three decorative elements in a single section (ribbons, sparkles, lace, polka dots count individually).
- **Must not:** Use borders heavier than `2px` on any element.

### Tone Constraints

- **Must:** All user-facing copy uses warm, optimistic language.
- **Must:** Proper nouns and UI labels use title case ("Your Collection", not "your collection").
- **Must not:** Use cold, clinical, or technical language in visible labels, headings, or messages.

---

## 4. Do / Don't Rules

### Do

- **Do** use pill-shaped buttons (`border-radius: 50px`) for every clickable action element.
- **Do** layer soft gradients behind content sections: `linear-gradient(160deg, #FFF5F8, #FCE4EC, #E1BEE7)`.
- **Do** use `Playfair Display` in italic for hero-level emotional moments.
- **Do** apply subtle `box-shadow` to every card and elevated surface.
- **Do** use `Dancing Script` labels to add a handcrafted, personal touch — sparingly.
- **Do** keep transitions smooth: `200ms ease-in-out` on all interactive states.
- **Do** use outline-style icons from Heroicons or Phosphor in `#E91E8C` or `#F48FB1`.
- **Do** let white and cream dominate — pink should always feel like a reward, not wallpaper.
- **Do** add a ribbon or lace accent to distinguish section breaks or hero elements.

### Don't

- **Don't** use bright red, electric blue, lime green, or any saturated non-pink color anywhere.
- **Don't** use square corners on any UI element the user touches.
- **Don't** make the design feel childish — no Comic Sans, no cartoonish clip art, no rainbow gradients.
- **Don't** overcrowd a section with decorative elements. One or two textures per section maximum.
- **Don't** use `font-weight: 900` on serif fonts — it reads as heavy, not elegant.
- **Don't** add animations that loop, bounce, or distract from content.
- **Don't** use dark backgrounds or dark mode patterns — this identity is light, warm, and bright.
- **Don't** mix more than two fonts in a single component.
- **Don't** use generic placeholder copy like "Lorem ipsum" — write warm, brand-consistent placeholder text.
- **Don't** apply `#E91E8C` to text that is not a link, label, or primary CTA.

---

## 5. UI Patterns

These are the canonical implementations for recurring UI components. Use these exactly. Do not invent variants unless no pattern exists for your use case.

### Primary Button

```css
.btn-primary {
  background: #E91E8C;
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.08em;
  box-shadow: 0 4px 15px rgba(233, 30, 140, 0.35);
  transition: background 200ms ease-in-out, box-shadow 200ms ease-in-out;
  cursor: pointer;
}
.btn-primary:hover {
  background: #C2185B;
  box-shadow: 0 6px 20px rgba(194, 24, 91, 0.45);
}
.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(233, 30, 140, 0.25);
}
```

### Secondary Button

```css
.btn-secondary {
  background: transparent;
  color: #E91E8C;
  border: 2px solid #E91E8C;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: background 200ms ease-in-out;
  cursor: pointer;
}
.btn-secondary:hover {
  background: #FCE4EC;
}
```

### Ghost / Soft Button

```css
.btn-ghost {
  background: #FFF0F3;
  color: #AD6B7E;
  border: 1px solid #F8BBD0;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  transition: background 200ms ease-in-out;
  cursor: pointer;
}
.btn-ghost:hover {
  background: #FCE4EC;
}
```

### Card / Panel

```css
.card {
  background: #FFFFFF;
  border: 1px solid #F8BBD0;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 20px rgba(233, 30, 140, 0.08);
}
/* Optional accent top stripe */
.card--accented {
  border-top: 3px solid #E91E8C;
}
/* Glassmorphism variant */
.card--glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid #F8BBD0;
}
```

### Input / Form Field

```css
.input {
  background: #FFF5F8;
  border: 1px solid #F8BBD0;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  color: #880E4F;
  transition: border 200ms ease-in-out, box-shadow 200ms ease-in-out;
  width: 100%;
}
.input::placeholder {
  color: #AD6B7E;
}
.input:focus {
  outline: none;
  border: 2px solid #E91E8C;
  box-shadow: 0 0 0 3px rgba(233, 30, 140, 0.15);
}
```

### Page / Section Background

```css
/* Full page */
body {
  background-color: #FFF5F8;
}

/* Gradient section */
.section-gradient {
  background: linear-gradient(160deg, #FFF5F8 0%, #FCE4EC 60%, #E1BEE7 100%);
}

/* Polka dot texture overlay (use sparingly) */
.texture-dots {
  background-image: radial-gradient(circle, #F8BBD0 1px, transparent 1px);
  background-size: 20px 20px;
}
```

### Ribbon Accent

```css
.ribbon {
  display: block;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #E91E8C, #F48FB1);
  border-radius: 2px;
  margin: 2rem 0;
}
```

### Entrance Animation

```css
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeSlideIn 350ms ease-in-out forwards;
}
```

---

## 6. Implementation Checklist

Run this checklist **before committing any change to a UI file**. Every item must be checked off.

### Before You Start

- [ ] Read this file (`branding-guide-agent.md`) from top to bottom if you have not done so in this session.
- [ ] Identify which UI pattern(s) in Section 5 apply to what you are building. If none exist, apply the Decision Rules in Section 2.
- [ ] Confirm the Google Fonts import exists in the `<head>` and includes all four families: Playfair Display, Cormorant Garamond, Dancing Script, Lato.

### Colors

- [ ] Every color used is present in the defined palette (`#E91E8C`, `#F48FB1`, `#FCE4EC`, `#FFF5F8`, `#FFF0F3`, `#E1BEE7`, `#FFCCBC`, `#880E4F`, `#AD6B7E`, `#FFFFFF`, `#F8BBD0`).
- [ ] No off-brand colors (grays, blues, greens, blacks) appear anywhere in the modified file.
- [ ] `#E91E8C` (Barbie Pink) is used only for primary actions or hero elements — not for decoration or large backgrounds.
- [ ] Page or section backgrounds use `#FFF5F8` or a gradient built from palette colors.

### Typography

- [ ] All headings use Playfair Display (H1, display) or Cormorant Garamond (H2, H3).
- [ ] Body copy uses Lato.
- [ ] Decorative labels/badges use Dancing Script.
- [ ] No serif text is set in all-caps. `font-variant: small-caps` used instead if needed.
- [ ] Display text has `letter-spacing: 0.05em` applied.

### Spacing & Layout

- [ ] All interactive elements have `border-radius` applied (buttons `50px`, cards `16px`, inputs `12px`).
- [ ] No section has less than `3rem` of vertical padding.
- [ ] No element uses a border heavier than `2px`.
- [ ] No more than two decorative texture elements appear in any single section.

### Interactions

- [ ] All hover and focus states are defined.
- [ ] All transitions use `200ms ease-in-out` (or `300ms–400ms` for entrance animations).
- [ ] No looping, bouncing, or distracting animations exist in the file.

### Copy & Tone

- [ ] All user-facing text is warm, direct, and optimistic.
- [ ] UI labels and proper nouns use title case.
- [ ] No clinical, generic, or placeholder copy (e.g. "Lorem ipsum") exists in the file.

### Final Check

- [ ] View the element visually (or trace it mentally). Ask: *Does this feel like stepping into a polished, modern Barbie Dreamhouse?*
- [ ] If the answer is no, identify which rule was violated and correct it before proceeding.

---

## 7. Consistency Enforcement

### Mandatory Reference Rule

> **Every agent, developer, or tool that edits a UI file in this project must read `branding-guide-agent.md` before making any change.**

This is not optional. A change made without consulting this document is a violation of the visual system, regardless of whether it looks acceptable in isolation.

### Conflict Resolution Protocol

When two valid options exist, resolve by applying rules in this order:

1. **Section 3 — Design Constraints** takes highest precedence. If a constraint forbids something, it is forbidden.
2. **Section 2 — Decision Rules** provides the correct implementation for known scenarios.
3. **Section 5 — UI Patterns** gives the canonical CSS. Match it exactly.
4. **Section 4 — Do / Don't** filters edge cases not covered above.
5. If still unresolved: choose the option that is softer, more minimal, and uses less Barbie Pink.

### Drift Prevention

- If a new color, font, or spacing value is introduced that is not in this document, it must be added to this document first and approved before use. Do not silently expand the system.
- If a new component type is added that has no pattern in Section 5, create a canonical pattern entry here before using it elsewhere.
- If a rule in this document conflicts with a framework default (e.g. Tailwind base styles, browser user-agent stylesheet), this document wins. Override the framework default.

### Audit Trigger

Run a full audit against this document when:

- A new page or route is added.
- A third-party component library is introduced.
- More than 10 CSS/style lines are modified in a single session.
- A visual regression is reported.

---

*This document is the law. The aesthetic is the goal. The checklist is the proof.*
