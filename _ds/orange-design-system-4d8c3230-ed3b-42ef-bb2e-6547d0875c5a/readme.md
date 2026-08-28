# Orange Design System

A design system for **Orange**, the French multinational telecommunications operator (formerly France Télécom, rebranded Orange in 2013). Orange provides mobile, broadband, and TV services across France, Europe, Africa and the Middle East.

## Sources

No codebase, Figma file, or slide deck was attached to this project — only five brand typeface files (`uploads/HelvNeue35_W1G.ttf` through `HelvNeue75_W1G.ttf`, Helvetica Neue W1G in five weights, Orange's licensed corporate typeface) and the company name "Orange".

Because no proprietary source was provided, this system is built from Orange's own **public** brand materials:
- **Orange brand guidelines**: https://brand.orange.com/guidelines/logo/
- **Boosted** — Orange's open-source Bootstrap-based design system (public color palette, typography scale, button/component conventions referenced throughout): https://boosted.orange.com/docs/4.4/ and https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap
- Public brand-color references (Brandfetch, color-name.com) confirming Digital Orange `#FF7900`.

No component library, screen designs, or UI code from an internal Orange codebase was available — the component set and the "My Orange" UI kit are **original interpretations** built to match Orange's public visual language (square corners, black-first buttons, orange as an accent), not reproductions of a specific internal product. Treat visuals as directionally accurate, not pixel-exact to any real Orange screen.

## Components

Located under `components/<group>/<Name>/`, grouped by concern:
- **forms/**: Button, Input, Select, Checkbox, Radio, Switch
- **data/**: Badge, Card
- **feedback/**: Alert, Toast, Tooltip, Progress
- **navigation/**: Tabs
- **overlay/**: Dialog

### Intentional additions
No source defined a component inventory, so this is a standard set sized to a telecom self-care product (account, billing, plans). `Switch` (on/off toggle) was added because settings screens need it and it is the one deliberately pill-shaped control, distinct from Boosted's square-cornered defaults.

## UI kit

`ui_kits/my-orange/` — "My Orange", a click-through account app: sign in → account overview → invoices → plan shop. Composed from the components above.

## Index
- `styles.css` — global stylesheet entry point (imports everything in `tokens/`)
- `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — 14 components (see above)
- `ui_kits/my-orange/` — account app UI kit
- `assets/fonts/` — the five Helvetica Neue W1G weights
- `SKILL.md` — Claude Code-compatible skill wrapper

## Content fundamentals

- **Voice**: direct, plain, service-oriented. Short sentences, active voice, no jargon. Copy states what happened or what to do next ("Your invoice is due", "Switch to this plan") rather than selling with adjectives.
- **Person**: second person for the customer ("your invoice", "you have used"), first person plural rarely, for the company acting ("we've received your payment").
- **Casing**: sentence case throughout — headings, buttons, labels. Never all-caps except acronyms (Go, 5G, EU). Brand name always "Orange" with a capital O, never "ORANGE" or "orange".
- **Numbers**: data usage and prices are stated precisely and often ("104 / 130 Go", "€42.99"), because usage and billing are the core anxiety points of a telecom product.
- **Emoji**: not used. This is a utility/billing context, not a social one.
- **Tone under stress** (errors, overages, failed payments): calm and factual, never alarmist — states the situation and the fix in the same breath ("Data usage at 80%. You have used 104 of 130 Go this cycle.").

## Visual foundations

- **Color**: two-color core — black and white — carry almost all UI weight (text, primary buttons, borders). Digital Orange (`#FF7900`) is a high-frequency **accent**, not a background: focus rings, links on hover-state, small brand badges, highlight bars. It is deliberately not used as a button fill — Orange's own accessibility guidance flags contrast issues with orange backgrounds. Functional colors (green/blue/yellow/red) are reserved for status only. A muted grey scale (100–900) handles surfaces and secondary text.
- **Type**: Helvetica Neue W1G everywhere, with Helvetica/Arial/system-ui fallback. Headings and display text are always bold with tight, slightly negative letter-spacing (as fonts get larger, tracking gets tighter — display 1 sits at -2.4px). Body copy is always regular weight; bold is reserved for headings and `<strong>`.
- **Corners**: square by default (`border-radius: 0`) on buttons, inputs, cards, dialogs — this is one of the most distinctive Orange/Boosted traits. The one intentional exception is the Switch toggle, which is pill-shaped because the control itself is inherently round.
- **Shadows**: minimal and flat. Cards use a 1px hairline border instead of a shadow. Shadow only appears on true overlays — dialogs and toasts — and stays subtle (soft, low-opacity, no colored shadows).
- **Backgrounds**: solid, flat fields. No gradients, no photographic hero treatment defined by the sources available, no repeating textures or patterns.
- **Borders**: 1px hairline grey for structural dividers (card edges, table rows); 2px black or orange for interactive states (input focus, button outline, active tab underline).
- **Animation**: fast and utilitarian — 120–200ms ease transitions for hover/toggle state changes (background color, switch thumb position, progress fill width). No bounces, no elaborate motion; nothing decorative.
- **Hover states**: primary buttons darken slightly (black → near-black grey-900); secondary/ghost buttons gain a light grey fill; links gain an underline on hover (not before).
- **Press/active states**: buttons get a subtle inset shadow to read as physically pressed — no scale/shrink transforms.
- **Focus states**: a 2px solid orange outline with 2px offset on any focusable element — this is the single most consistent use of brand orange in the whole system.
- **Transparency/blur**: used only for the modal scrim (50% black), nowhere else.
- **Layout**: dense, table- and card-driven for account/billing content; generous single-column padding (32px) at the page level.
- **Imagery**: none available from sources — no photography or illustration style could be established. Treat any imagery need as an open question (see Caveats).

## Iconography

No icon set, icon font, or SVG sprite was available from any attached source, so **no icons were added** to this system. Boosted (Orange's public design system) ships its own `icon-*` icon-font classes (e.g. `icon-settings`, `icon-calendar-day`) referenced in its component docs, but the icon-font asset itself is not published standalone outside the Boosted package, so it could not be copied in here. Screens in this system avoid icons entirely rather than substitute invented glyphs. No emoji, no Unicode-character icons are used anywhere. **If real icon assets (SVG set, icon font, or a Figma icon library) become available, they should replace this gap** — flag this to the user as an open item.

## Logo

**No Orange logo asset was provided or generated.** Per Orange's own brand guidelines, the logo (an orange square + wordmark) is a registered trademark that must never be recreated from memory — so it is intentionally absent everywhere in this system. The wordmark "Orange" is rendered in plain bold type wherever a logo would normally sit (app header, login screen, thumbnail). Provide the real logo SVG/PNG to replace these placeholders.

## Fonts

The five uploaded Helvetica Neue W1G weights (Thin 35 / Light 45 / Roman 55 / Medium 65 / Bold 75, mapped here to CSS weights 300/400/500/600/700) are Orange's real, licensed corporate typeface and are used as-is — copied into `assets/fonts/` with `@font-face` rules in `tokens/fonts.css`. No substitution was needed.
