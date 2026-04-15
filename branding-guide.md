# Barbie Branding Guide

A visual identity system for this project inspired by the 2023 Barbie movie — bold, graphic, and unapologetically pink. This is not the vintage Dreamhouse. This is a fashion editorial.

---

## Color Palette

| Role | Name | Hex |
|---|---|---|
| Primary | Barbie Hot Pink | `#FF0099` |
| Primary Hover | Barbie Deep Pink | `#CC007A` |
| Background | Graphic White | `#FFFFFF` |
| Surface | Cinema White | `#FFF0F7` |
| Soft Fill | Pale Pink | `#FFD6EC` |
| Graphic Accent | Electric Yellow | `#FFE600` |
| Text Primary | Near-Black | `#1A1A1A` |
| Text Secondary | Bold Magenta | `#CC007A` |
| Border / Rule | Hot Pink Border | `#FF0099` |

### Usage Notes
- **Barbie Hot Pink** (`#FF0099`) is the single primary action color. Use it on buttons, borders, and key accents — not as a large background fill.
- **Graphic White** (`#FFFFFF`) is the default page background. The design is light and clean, not gradient-washed.
- **Electric Yellow** (`#FFE600`) is the graphic pop accent — the counterpoint to pink. Use at most one yellow element per section.
- **Near-Black** (`#1A1A1A`) is the primary text color. No deep rose, no dusty mauve. Text is confident and legible.
- Soft Lavender, Peach Glow, and Rose Mist are retired from this system.

---

## Typography

### Font Families

| Role | Font | Style |
|---|---|---|
| Display / Hero | Bebas Neue | All-caps, condensed, cinematic |
| Headings / Buttons / UI | Montserrat | Bold sans-serif, editorial |
| Body | DM Sans | Clean, geometric, contemporary |

> Google Fonts `@import` (place at top of `styles.css`):  
> `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600;700;900&family=DM+Sans:wght@400;500;600&display=swap');`

Dancing Script, Playfair Display, Cormorant Garamond, and Lato are retired from this system.

### Type Scale

| Level | Size | Weight | Font | Notes |
|---|---|---|---|---|
| Display | 4rem–5rem | 400 | Bebas Neue | Hero headlines — Bebas renders as bold by nature |
| H1 | 2rem | 700 | Montserrat | Section headers |
| H2 | 1.5rem | 700 | Montserrat | Sub-section headers |
| H3 | 1.25rem | 700 | Montserrat | Card titles, callouts |
| Body | 1rem | 400 | DM Sans | General text, line-height 1.6 |
| Small | 0.875rem | 400 | DM Sans | Captions, metadata |
| Label / Stamp | 0.75rem | 900 | Montserrat | Uppercase, letter-spacing 0.20em — editorial stamp |

### Typographic Rules
- Bebas Neue renders in caps natively — do not double-apply `text-transform: uppercase` to it.
- Button labels use Montserrat 700, `text-transform: uppercase`, `letter-spacing: 0.12em`.
- Stamp labels use Montserrat 900, `text-transform: uppercase`, `letter-spacing: 0.20em`.
- No italic serifs. No handwritten script. No all-caps on body copy.

---

## UI Elements

### Buttons

The defining visual signature: pill shape + hard offset shadow. This is the pop-art graphic move that makes everything read as modern and confident.

```
Primary Button
- Background: #FF0099
- Text: #FFFFFF
- Border-radius: 50px
- Padding: 0.75rem 2.5rem
- Font: Montserrat 700, uppercase, letter-spacing 0.12em
- Shadow: 4px 4px 0px #1A1A1A  ← hard offset, not diffuse glow
- Hover: background #CC007A, transform translate(-2px, -2px), shadow 6px 6px 0px #1A1A1A
- Active: transform translate(2px, 2px), shadow 2px 2px 0px #1A1A1A
- Transition: 150ms ease-in-out

Secondary Button
- Background: transparent
- Text: #FF0099
- Border: 2px solid #FF0099
- Border-radius: 50px
- Hover: background #FF0099, text #FFFFFF

Ghost / Soft Button
- Background: #FFD6EC
- Text: #CC007A
- Border: none
- Border-radius: 50px
- Hover: background #FFC4E1
```

### Cards & Panels

```
Standard Card
- Background: #FFFFFF
- Border: 2px solid #FF0099
- Border-radius: 16px
- Padding: 1.5rem 2rem
- Shadow: 4px 4px 0px #FF0099  ← hard pink offset shadow

Accented Card
- Same as above + border-top: 4px solid #FFE600

Glassmorphism Card
- Background: rgba(255, 240, 247, 0.85)
- backdrop-filter: blur(12px)
- Border: 2px solid #FF0099

Pink Block Card
- Background: #FF0099
- Text: #FFFFFF
- Border: none
```

### Inputs & Forms

```
- Background: #FFFFFF
- Border: 2px solid #1A1A1A
- Border-radius: 12px
- Focus border: #FF0099
- Focus box-shadow: 0 0 0 3px rgba(255, 0, 153, 0.30)
- Placeholder text: #CC007A
```

### Section Backgrounds

Color blocking replaces ambient gradients. Sections snap between solid colors — this is the movie's graphic design language.

| Class | Background | Text |
|---|---|---|
| `.section-white` | `#FFFFFF` | `#1A1A1A` |
| `.section-pink-block` | `#FF0099` | `#FFFFFF` |
| `.section-yellow-block` | `#FFE600` | `#1A1A1A` |
| `.section-light` | `#FFD6EC` | `#1A1A1A` |

### Dividers

Flat solid rules. No gradients.

| Class | Color | Notes |
|---|---|---|
| `.divider` | `#FF0099` | Full-width, 4px |
| `.divider--yellow` | `#FFE600` | Full-width, 4px |
| `.divider--short` | `#FF0099` | 60px wide — use under headings |

### Shadows

Hard offset shadows only. Diffuse glow shadows (blurred box-shadows) are retired.

| Use | Value |
|---|---|
| Button (default) | `4px 4px 0px #1A1A1A` |
| Button (hover) | `6px 6px 0px #1A1A1A` |
| Card | `4px 4px 0px #FF0099` |

### Icons & Imagery

- Prefer outline-style icons in `#FF0099` or `#1A1A1A`.
- Imagery should be high-contrast, vivid, and bright — movie poster energy.
- Avoid muted, desaturated, or vintage-filtered photography.

---

## Overall Vibe

**Bold · Graphic · Unapologetically Pink · Editorial**

The aesthetic draws from the 2023 Barbie movie — a maximalist pop-art vision filtered through contemporary fashion editorial design. Think Architectural Digest meets Vogue Brazil shot on a hot pink soundstage.

### Principles

1. **Confidence is the aesthetic.** Hard shadows, saturated color, uppercase type — every element knows exactly what it is.
2. **Pink is not background, it is punctuation.** White surfaces let hot pink land with maximum impact. Pink as wallpaper is a failure mode.
3. **Yellow is the twist.** One electric yellow element per section creates graphic tension and stops the eye. More than one is chaos.
4. **No nostalgia.** Script fonts, lace, ribbon textures, and ambient pastel gradients belong to a different era. Every element should feel like it was designed this decade.
5. **The grid is your friend.** Clean spacing, strong alignment, and generous white space make the bold color choices feel intentional rather than loud.

### Tone (for copy & labels)

- Direct, confident, slightly playful — fashion magazine voice.
- Stamps and labels in uppercase: "WELCOME", "SMART PAGE", "NEW ARRIVAL".
- Body copy is warm but concise. No overly ornate language.

---

## Shared Stylesheet

All canonical CSS lives in `styles.css`. Every page in this project links to it. No page may redefine a pattern that already exists there.

---

*This guide is the source of truth for all visual decisions. When in doubt, ask: "Does this feel like a frame from the 2023 Barbie movie?" If yes, ship it.*
