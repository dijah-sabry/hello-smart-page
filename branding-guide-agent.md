# Branding System Agent — 2023 Barbie Visual Identity

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
*Bold, graphic, and unapologetically pink — like a fashion editorial shot inside the 2023 Barbie movie.*

---

### Shared Stylesheet Mandate

> **Every HTML page in this project must include `<link rel="stylesheet" href="styles.css">` as its first and primary stylesheet.**

Rules:
1. Inline `<style>` blocks are **forbidden** for any pattern that already exists in `styles.css`.
2. New UI patterns must be added to `styles.css` **first**, then documented in Section 5 of this file, then used in HTML.
3. No hardcoded hex value, font name, or shadow value may appear in any HTML file. Use `var(--token-name)` instead.
4. `styles.css` is the **only** file where hardcoded hex values are permitted (inside the `:root` block).
5. A page that duplicates a class from `styles.css` in a `<style>` block is a system violation.

---

### Photo Mandate

> **Every HTML page in this project must display a photo of the site owner somewhere on the page.**

- **File path:** `Local Branding Assests/cute picture of me.jpeg`
- **Path is relative** to the project root — use `src="Local Branding Assests/cute picture of me.jpeg"` from any page in the root folder.
- The photo may be placed anywhere that makes visual sense for the page layout (hero, corner avatar, footer portrait, etc.).
- It must be visible on initial load — not hidden behind a click or scroll barrier.
- Always include a descriptive `alt` attribute (e.g. `alt="Khadeejah"`).
- A page without this image is a system violation.

---

## 2. Decision Rules

Apply these rules mechanically. Rules listed earlier override later ones when conflicts arise.

### Colors

| Trigger | Rule |
|---|---|
| Adding any interactive element (button, link, tab) | Primary action color is `#FF0099`. No other color may serve as the primary action color. |
| Adding a background to a full page or section | Use `#FFFFFF` (Graphic White). No ambient gradient backgrounds — use flat color blocks. |
| Adding a card, panel, or container | Background `#FFFFFF` or `rgba(255,240,247,0.85)` (glass), border `2px solid #FF0099`, border-radius `16px`, shadow `4px 4px 0px #FF0099`. |
| Adding a decorative or accent element | Use `#FFE600` (Electric Yellow). One yellow element per section maximum. Never use `#FF0099` for decoration. |
| Adding any text | Primary text: `#1A1A1A`. Secondary/muted text: `#CC007A`. Never use pure black (`#000000`) or any soft rose/mauve tones. |
| Adding a divider, rule, or border | Color: `#FF0099`. Weight: `2px` (borders), `4px` (dividers). No soft or gradient borders. |
| Adding a shadow | Buttons: `4px 4px 0px #1A1A1A`. Cards: `4px 4px 0px #FF0099`. Never use diffuse/blurred box-shadow as a primary shadow. |
| Choosing between two color options | Choose the bolder, more saturated option. This aesthetic does not hedge. |

### Typography

| Trigger | Rule |
|---|---|
| Adding a page title or hero headline | Font: `Bebas Neue`, weight 400, size `4rem`–`5rem`. Bebas renders all-caps natively — do not add `text-transform: uppercase`. |
| Adding a section heading (H1) | Font: `Montserrat`, weight 700, size `2rem`. |
| Adding a sub-section heading (H2, H3) | Font: `Montserrat`, weight 700, size `1.5rem` or `1.25rem`. |
| Adding body copy | Font: `DM Sans`, weight 400, size `1rem`, line-height `1.6`. |
| Adding a badge, tag, or stamp label | Font: `Montserrat`, weight 900, size `0.75rem`, `text-transform: uppercase`, `letter-spacing: 0.20em`, color `#FF0099`. Use class `.label-stamp`. |
| Adding button text | Font: `Montserrat`, weight 700, `text-transform: uppercase`, `letter-spacing: 0.12em`. |
| Choosing between a serif and sans-serif | Always choose sans-serif. Serif fonts are retired from this system. |

### Spacing

| Trigger | Rule |
|---|---|
| Setting padding on a section | Minimum `4rem` top/bottom, `1.5rem` sides. Use `.section-pad` class. |
| Setting padding on a card | `1.5rem`–`2rem` on all sides. |
| Setting gap between stacked elements | Use multiples of `0.5rem`. Prefer `1rem`, `1.5rem`, `2rem`. |
| Setting margin between sections | Minimum `4rem`. Sections should feel distinct and well-separated. |
| Deciding border-radius | Buttons: `50px`. Cards: `16px`. Inputs: `12px`. Small chips/tags: `999px`. |

### Interactions & Animation

| Trigger | Rule |
|---|---|
| Adding a hover state to any element | Duration `150ms`, easing `ease-in-out`. |
| Adding a button hover | Primary: background darkens to `#CC007A`, element lifts (`transform: translate(-2px, -2px)`), shadow deepens. |
| Adding a focus state | `box-shadow: 0 0 0 3px rgba(255, 0, 153, 0.30)`. Outline: none. |
| Adding an entrance animation | Use `opacity 0 → 1` and `translateY(8px) → 0`. Duration `350ms`. Class: `.animate-in`. Never use bouncing, spinning, or looping keyframes. |

---

## 3. Design Constraints

These are non-negotiable. Every UI file must satisfy all of them at all times.

### Color Constraints

- **Must:** All backgrounds use only palette colors (`#FFFFFF`, `#FFF0F7`, `#FFD6EC`, `#FF0099`, `#FFE600`).
- **Must:** Text color is `#1A1A1A` (primary) or `#CC007A` (secondary). Never `#000000`, `#880E4F`, or any vintage rose/mauve tone.
- **Must:** `#FF0099` appears on no more than one primary action element per viewport section.
- **Must not:** Use red, blue, green, lavender, peach, or any color outside the defined palette.
- **Must not:** Use diffuse/blurred `box-shadow` as the primary shadow on buttons or cards.
- **Must not:** Use multi-stop ambient gradients as page or section backgrounds. Use flat color blocks.

### Typography Constraints

- **Must:** All three fonts (Bebas Neue, Montserrat, DM Sans) are loaded via the `@import` in `styles.css`.
- **Must:** Font size never drops below `0.75rem` on any visible text.
- **Must:** Line height for body text is at least `1.6`.
- **Must not:** Use system fonts (`Arial`, `Georgia`, `sans-serif`) as the final font for any visible element.
- **Must not:** Use italic, serif, or handwritten/script fonts anywhere in the UI.
- **Must not:** Use `text-transform: uppercase` on Bebas Neue — it already renders in all-caps.

### Layout Constraints

- **Must:** All interactive elements have border-radius. No hard right angles on buttons, cards, or inputs.
- **Must:** Every section has minimum `4rem` vertical padding.
- **Must:** Every HTML page links to `styles.css` as its first stylesheet.
- **Must not:** Duplicate any CSS class from `styles.css` inside a page `<style>` block.
- **Must not:** Use borders heavier than `2px` on cards/inputs, or `4px` on accent stripes/dividers.
- **Must not:** Use more than one Electric Yellow element per section.

### Tone Constraints

- **Must:** All user-facing copy is direct, confident, and warm.
- **Must:** Stamp labels and button text use uppercase.
- **Must not:** Use script-style or overly ornate language in any UI element.
- **Must not:** Use soft, nostalgic phrasing ("Welcome, Darling", "Hello, Gorgeous") — those belong to the old system.

---

## 4. Do / Don't Rules

### Do

- **Do** use pill-shaped buttons (`border-radius: 50px`) for every clickable action element.
- **Do** use hard offset shadows (`4px 4px 0px #1A1A1A` or `#FF0099`) on buttons and cards.
- **Do** use color blocking (full sections in `#FF0099` or `#FFE600`) for high-impact visual contrast.
- **Do** set button labels and stamp text in `text-transform: uppercase` with `letter-spacing: 0.12em` or wider.
- **Do** use `#FFE600` (Electric Yellow) as the graphic accent counterpoint to hot pink — one element per section maximum.
- **Do** keep transitions at `150ms ease-in-out` for interactions, `350ms ease-in-out` for entrance animations.
- **Do** use outline-style icons in `#FF0099` or `#1A1A1A`.
- **Do** include the owner photo (`Local Branding Assests/cute picture of me.jpeg`) on every page, visible on load.
- **Do** let white dominate — pink should always feel like a reward, not wallpaper.
- **Do** use `.label-stamp` for any badge, tag, or category label.
- **Do** use `styles.css` class names in HTML. Never re-implement a pattern inline.

### Don't

- **Don't** use ambient or diffuse glow shadows — they read as soft and vintage.
- **Don't** use serif typefaces — they undermine the graphic, editorial identity.
- **Don't** use inline `<style>` blocks for any pattern covered by `styles.css`.
- **Don't** use ambient gradients as backgrounds — use flat color blocks instead.
- **Don't** use soft or muted pink tones (`#FCE4EC`, `#F8BBD0`, `#E91E8C`) — those are from the old system.
- **Don't** use Soft Lavender, Peach Glow, Dusty Mauve, Deep Rose, or Rose Mist — those colors are retired.
- **Don't** use Playfair Display, Cormorant Garamond, Dancing Script, or Lato — those fonts are retired.
- **Don't** add lace borders, ribbon accents, polka dot textures, or script-font decorations.
- **Don't** make the design feel nostalgic or vintage. This is a contemporary fashion campaign, not a 1960s boutique.
- **Don't** stack more than one decorative accent in a single section.
- **Don't** use looping, bouncing, or distracting animations.

---

## 5. UI Patterns

> **All patterns in this section exist in `styles.css`.** Use the class name in HTML. Do not copy the CSS into a page `<style>` block. If a variant you need does not exist here, add it to `styles.css` first, then document it in this section.

### Primary Button — `.btn-primary`

```css
.btn-primary {
  background: #FF0099;
  color: #FFFFFF;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 4px 4px 0px #1A1A1A;
  cursor: pointer;
  transition: background 150ms ease-in-out, transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
}
.btn-primary:hover {
  background: #CC007A;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #1A1A1A;
}
.btn-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #1A1A1A;
}
.btn-primary:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 0, 153, 0.30);
}
```

### Secondary Button — `.btn-secondary`

```css
.btn-secondary {
  background: transparent;
  color: #FF0099;
  border: 2px solid #FF0099;
  border-radius: 50px;
  padding: 0.75rem 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 150ms ease-in-out, color 150ms ease-in-out;
}
.btn-secondary:hover {
  background: #FF0099;
  color: #FFFFFF;
}
```

### Ghost Button — `.btn-ghost`

```css
.btn-ghost {
  background: #FFD6EC;
  color: #CC007A;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 150ms ease-in-out;
}
.btn-ghost:hover {
  background: #FFC4E1;
}
```

### Card — `.card`

```css
.card {
  background: #FFFFFF;
  border: 2px solid #FF0099;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 4px 4px 0px #FF0099;
}
.card--accented { border-top: 4px solid #FFE600; }
.card--glass {
  background: rgba(255, 240, 247, 0.85);
  backdrop-filter: blur(12px);
  border: 2px solid #FF0099;
}
.card--pink-block {
  background: #FF0099;
  color: #FFFFFF;
  border: none;
  box-shadow: 4px 4px 0px #1A1A1A;
}
```

### Input — `.input`

```css
.input {
  background: #FFFFFF;
  border: 2px solid #1A1A1A;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: #1A1A1A;
  width: 100%;
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
}
.input::placeholder { color: #CC007A; }
.input:focus {
  outline: none;
  border-color: #FF0099;
  box-shadow: 0 0 0 3px rgba(255, 0, 153, 0.30);
}
```

### Section Backgrounds

```css
.section-white      { background: #FFFFFF; }
.section-pink-block { background: #FF0099; color: #FFFFFF; }
.section-yellow-block { background: #FFE600; color: #1A1A1A; }
.section-light      { background: #FFD6EC; }
```

### Dividers

```css
.divider        { display: block; width: 100%; height: 4px; background: #FF0099; }
.divider--yellow { background: #FFE600; }
.divider--short  { width: 60px; }
```

### Layout Utilities

```css
.page-centered { display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.container     { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.container--narrow { max-width: 680px; margin: 0 auto; padding: 0 1.5rem; }
.section-pad   { padding: 4rem 1.5rem; }
```

### Entrance Animation — `.animate-in`

```css
@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-in { animation: fadeSlideIn 350ms ease-in-out forwards; }
```

---

## 6. Implementation Checklist

Run this checklist **before committing any change to a UI file**. Every item must be checked off.

### Before You Start

- [ ] Read this file (`branding-guide-agent.md`) if you have not done so in this session.
- [ ] Confirm the HTML file has `<link rel="stylesheet" href="styles.css">` as the **first** stylesheet in `<head>`.
- [ ] Confirm no class from `styles.css` is duplicated in a `<style>` block in this file.
- [ ] Confirm the page includes `<img src="Local Branding Assests/cute picture of me.jpeg" alt="Khadeejah">` and that it is visible on initial load.
- [ ] Identify which UI pattern(s) in Section 5 apply to what you are building. If none exist, add the pattern to `styles.css` first.

### Colors

- [ ] Every color used is in the defined palette (`#FF0099`, `#CC007A`, `#FFFFFF`, `#FFF0F7`, `#FFD6EC`, `#FFE600`, `#1A1A1A`).
- [ ] No retired colors appear (`#E91E8C`, `#FFF5F8`, `#FFF0F3`, `#FCE4EC`, `#E1BEE7`, `#FFCCBC`, `#880E4F`, `#AD6B7E`, `#F8BBD0`).
- [ ] `#FF0099` is used only for primary actions or key accents — not as a large background fill (unless `.section-pink-block`).
- [ ] No diffuse/blurred `box-shadow` used as a primary shadow on buttons or cards.
- [ ] No ambient gradient used as a page or section background.

### Typography

- [ ] Display/H1 uses Bebas Neue. Section headings use Montserrat. Body uses DM Sans.
- [ ] No serif, italic, or handwritten fonts appear anywhere.
- [ ] `text-transform: uppercase` is NOT applied to Bebas Neue elements.
- [ ] Button labels and stamp text are uppercase with correct letter-spacing.

### Spacing & Layout

- [ ] All interactive elements have `border-radius` (buttons `50px`, cards `16px`, inputs `12px`).
- [ ] No section has less than `4rem` vertical padding.
- [ ] No border heavier than `2px` on cards/inputs (accent stripes/dividers may use `4px`).
- [ ] No more than one Electric Yellow accent element in any single section.

### Interactions

- [ ] All hover and focus states are defined.
- [ ] All interactive transitions use `150ms ease-in-out`. Entrance animations use `350ms ease-in-out`.
- [ ] No looping, bouncing, or distracting animations exist in the file.

### Copy & Tone

- [ ] All user-facing text is direct, confident, and warm.
- [ ] Stamp labels and buttons use uppercase.
- [ ] No nostalgic, ornate, or script-style language in any visible element.

### Final Check

- [ ] View the element visually (or trace it mentally). Ask: *Does this feel like a frame from the 2023 Barbie movie — bold, graphic, and editorial?*
- [ ] If the answer is no, identify which rule was violated and correct it before proceeding.

---

## 7. Consistency Enforcement

### Mandatory Reference Rule

> **Every agent, developer, or tool that edits a UI file in this project must read `branding-guide-agent.md` before making any change.**

This is not optional. A change made without consulting this document is a violation of the visual system, regardless of whether it looks acceptable in isolation.

### Conflict Resolution Protocol

When two valid options exist, resolve by applying rules in this order:

1. **Section 3 — Design Constraints** takes highest precedence.
2. **Section 2 — Decision Rules** provides the correct implementation for known scenarios.
3. **Section 5 — UI Patterns** gives the canonical CSS. Match it exactly.
4. **Section 4 — Do / Don't** filters edge cases not covered above.
5. If still unresolved: choose the option that is bolder and uses less `#FF0099`. Pink is a reward, not a default.

### Shared Stylesheet Governance

`styles.css` is the single source of canonical CSS. These rules are absolute:

1. **No page may define its own version of a class that exists in `styles.css`.**
2. When a new component pattern is created: (a) add the CSS to `styles.css`, (b) document it in Section 5 of this file, (c) use only the class name in HTML.
3. CSS custom properties (design tokens) live in the `:root` block of `styles.css`. No hardcoded hex value, font name, or shadow value may appear in any HTML file.
4. `styles.css` is the only file where hardcoded values are permitted.

### Drift Prevention

- If a new color, font, or spacing value is introduced that is not in this document, it must be added here and to `styles.css` first.
- If a new component type is added that has no pattern in Section 5, create a canonical pattern entry in both `styles.css` and here before using it.
- If a rule here conflicts with a framework default (e.g. browser user-agent stylesheet), this document wins. Override the framework default.

### Audit Trigger

Run a full audit against this document when:

- A new page or route is added.
- A third-party component library is introduced.
- More than 10 CSS lines are modified in a single session.
- A visual regression is reported.

---

*This document is the law. The aesthetic is the goal. The checklist is the proof.*
