# pestphp.com

Marketing site **and** documentation for the Pest testing framework. Two independent front-ends live in one Laravel app; know which one you are touching before you edit.

<project-structure>

# Where things live

The repo has **two separate front-end pipelines**. They do not share build tooling, CSS, or JS. Editing the wrong one is the most common mistake — read this section first.

## 1. Landing page — the marketing homepage at `/`

A **standalone static Vite project** at `resources/www/`, completely separate from Laravel's asset pipeline. It is plain HTML + Tailwind v4 + Alpine.js — no Blade, no `@vite`.

| Path | What it is |
|---|---|
| `resources/www/index.html` | The **entire** landing page markup. Static HTML; interactivity via Alpine `x-data` attributes. This is the file you edit to change the homepage. |
| `resources/www/main.css` | Tailwind v4 entry: `@import 'tailwindcss'`, `@plugin 'tailwindcss-motion'`, the Google-Fonts `@import` (Archivo + Instrument Sans + JetBrains Mono), the `@theme` design tokens, and the `marquee` `@keyframes`. **Design tokens go here.** |
| `resources/www/main.js` | JS entry. Imports `main.css`, boots Alpine.js + tippy.js (registers an `x-tooltip` directive, currently unused). Page interactivity (tabs, spotlight, copy, mobile menu) lives inline as Alpine `x-data`/`@`-handlers in `index.html`, not here. |
| `resources/www/public/` | Static assets served as-is: `favicon.svg`, `og*.png/jpg`, `assets/`, `sponsors/` (marquee logos), `logos/` (stack tiles). |
| `resources/www/mockups/` | Working directory for mockup assets. |
| `resources/www/package.json`, `vite.config.js` | Its **own** npm project (Vite 4, Alpine, tippy, tailwindcss-motion, Tailwind v4). `base: 'www'`, builds to `../../public/www`. |

- **Dev**: `cd resources/www && npm install && npm run dev`.
- **Build**: `cd resources/www && npm run build` → writes to `public/www/`.
- **Served by**: `routes/web.php` → `Route::get('/')` returns `file_get_contents(public_path('www/index.html'))`. It serves the **built artifact**, so changes to `resources/www/` do **not** appear at `/` until you build. Iterate on the dev server (`npm run dev`, at `http://localhost:<port>/www`), then build and re-verify.
- **`public/www/`** = generated output (hashed `*.css`/`*.js`, `index.html`, and copies of everything in `resources/www/public/`). Never hand-edit; it is overwritten by every build.
- **Asset paths**: reference public assets root-absolute in the source (`/logos/x.svg`, `/sponsors/x.png`, `/assets/x.png`). Vite's `base: 'www'` rewrites them to `/www/…` at build so they resolve when the page is served at `/`. In dev both `/logos/x.svg` and `/www/logos/x.svg` resolve. Below-the-fold `<img>`s use `loading="lazy"`.

## 2. Documentation — `/docs/{page}`

Laravel + Blade, driven by markdown. A different pipeline entirely.

- **Content**: `resources/docs/{version}/*.md` — versions `3.x`, `4.x`, `5.x`, `master`. Default version comes from `config/site.php` (`site.defaultVersion`); default page is `installation`. Docs content is also mirrored from the `pestphp/docs` GitHub repo (see the "Edit this page" link in `docs.blade.php`).
- **Controller**: `app/Http/Controllers/DocsController.php` → parses markdown through `app/Support/Documentation.php` + `app/Support/MarkdownParser.php` (+ `app/Support/MarkdownStylers/`) → renders Blade view `resources/views/docs.blade.php`.
- **Blade chrome**: layouts in `resources/views/layouts/` (`base.blade.php`, `app.blade.php`, `welcome.blade.php`), partials in `resources/views/_partials/`, components in `resources/views/components/` (e.g. `<x-app-layout>`, `<x-docs.sidebar>`, `<x-docs.sponsors>`).
- **Docs CSS/JS**: `resources/css/app.css` (Tailwind v4 + `@tailwindcss/typography` for `prose prose-invert`, plus DocSearch CSS) and `resources/js/app.js`, bundled by the **root** `vite.config.js` via `laravel-vite-plugin`. Selection color and scrollbar styling live here.

## 3. Other entry points

| Route / concern | Code | View |
|---|---|---|
| IDE / editor setup (`/docs/editor-setup`) | `app/Http/Controllers/IDEPluginsController.php` | `resources/views/ide.blade.php` |
| `llms.txt`, `llms-full.txt`, `/docs/{page}/llms.txt`, `/docs/{page}.md` | `app/Http/Controllers/LlmsTxtController.php` | — (markdown/plain-text responses) |
| Content negotiation | `/` and `/docs/{page}` also return raw markdown when the client sends `Accept: text/markdown` and not `text/html`. | — |

## 4. Supporting locations

- `routes/web.php` — all web routing (also `api.php`, `channels.php`, `console.php`).
- `config/site.php` — site title, default docs version, and related site config.
- `resources/img/` — legacy site imagery (`bg-head*`, `pattern.svg`, `bg-pest-4.jpg`).
- `resources/lang/` — translations.
- `redesign.md` (repo root) — an **outdated** brand brief describing an earlier direction (Exo font, purple/indigo beam hero). Ignore it; the `<design-system>` below is the authoritative visual direction for the landing page and is what is actually shipped.

## 5. Rule of thumb

- Changing the **homepage look/copy** → `resources/www/` (static HTML + `main.css` `@theme` + Alpine), then rebuild.
- Changing **docs content** → `resources/docs/{version}/*.md`.
- Changing **docs layout/theme** → `resources/views/**` + `resources/css/app.css`.

</project-structure>

<design-system>

# Pest 5 Design System — "Blueprint Terminal"

This is the complete visual specification for the **landing page** (`resources/www/`), and the spec the shipped `index.html` already implements. It is self-contained on purpose: use it to add elements that belong or build new sections without diffing the whole file. Every value below is a real value, not an approximation.

**The theme is dark-only.** All values below are the canonical dark values. Write them as plain (unprefixed) classes — do **not** add light-mode counterparts or `dark:` variants. If any copied markup carries `dark:` pairs, keep only the dark value.

## 1. Identity in one paragraph

The design language is a **developer blueprint**: an engineering drawing of a testing framework. A near-black zinc canvas is framed by hairline rails, annotated with rose crosshair registration marks, and stamped with a 56px blueprint grid that fades out radially. All labels are monospace and lowercase, prefixed with `//` like code comments. Real terminal output is the hero imagery — green checkmarks and PASS chips are the product screenshots. One accent color (rose) does all the pointing. Headings are set in a wide, heavy grotesque (Archivo, stretched to 112%) with exactly one italic rose phrase per heading. The voice is agent-aware and confident: short declarative sentences, numbers as proof.

## 2. Tech stack & how it maps to this repo

- **Tailwind CSS v4** — already the CSS framework in `resources/www/`. Config is CSS-based (`@theme` in `resources/www/main.css`); there is no `tailwind.config.js`. Use arbitrary values freely where the scale doesn't fit (`rounded-[10px]`, `leading-[1.85]`, `pt-19`, `gap-4.5`, `h-15.5`, `size-2.25`).
- **Markup** — one static `resources/www/index.html`. There is no Blade/`@foreach` here: repeated blocks (cards, chips, tiles) are either literal repeated HTML, or driven with Alpine `x-for` over an inline data array when the list is long. Prefer `x-for` for the sponsor marquee, feature chips, stack tiles, testimonials, and stats.
- **Interactivity** — use **Alpine.js** (already a dependency), not ad-hoc scripts. The prototype's three behaviors map to Alpine as:
  - **Tabs** (code panel): `x-data="{ tab: 'browser' }"`, tab buttons `@click="tab = 'browser'"` + `:aria-selected="tab === 'browser'"`, panes `x-show="tab === 'browser'"` (or toggle `invisible opacity-0` classes with `:class` to preserve height — see §6.7).
  - **Pointer spotlight**: `@pointermove` on the hero sets CSS vars `--spot-x/--spot-y`; gate to `(hover: hover)` before binding.
  - **Copy button**: `x-data="{ copied: false }"`, `@click="navigator.clipboard.writeText('composer require pestphp/pest --dev'); copied = true; setTimeout(() => copied = false, 2000)"`, label `x-text="copied ? 'copied!' : 'copy'"`.
- **Fonts** — loaded via a Google-Fonts `@import` at the top of `resources/www/main.css`, mapped to the `@theme` tokens below:
  - **Archivo** (display) — needs the width axis: `family=Archivo:ital,wdth,wght@0,62..125,400..900;1,62..125,400..900`. Headings always use `font-stretch-112%`.
  - **JetBrains Mono** (mono) — weights 400/500/700 + italics.
  - **Instrument Sans** (body) — weights 400/500/600.
- Tokens in `resources/www/main.css`:

```css
@theme {
    --font-sans: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-display: 'Archivo', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, monospace;

    --text-3xs: 9px;        --text-3xs--line-height: 1.4;
    --text-2xs: 11px;       --text-2xs--line-height: 1.4;
    --text-xs-plus: 12.5px; --text-xs-plus--line-height: 1.4;

    --animate-marquee: marquee 30s linear infinite;
    @keyframes marquee { to { transform: translateX(-50%); } }
}
```

- `<body>` classes: `font-synthesis-none bg-zinc-900 font-sans text-zinc-200 antialiased selection:bg-rose-600 selection:text-white`.

## 3. Color system (dark, canonical)

Tailwind's built-in **zinc** ramp plus **rose** as the single accent. No custom hex values anywhere.

### Surfaces (three levels, always in this order)
| Role | Class | Usage |
|---|---|---|
| Page canvas | `bg-zinc-900` | body, sticky header (`bg-zinc-900/85` + `backdrop-blur-md`) |
| Card / raised surface | `bg-zinc-800` | all cards, tab panels, search input, code chips |
| Inset terminal / well | `bg-zinc-900` | terminal blocks *inside* zinc-800 cards, chips inside cards |

Rule: a surface nested inside `zinc-800` drops back to `zinc-900`. Skeleton/placeholder shapes inside wells use `bg-zinc-700` (base) and `bg-zinc-600` (emphasis). Subtle translucent surfaces (secondary buttons) use `bg-white/5`.

### Borders
- Every hairline is `border-zinc-700` — section frames, card outlines, dividers, chips. Exactly one border color.
- Hover borders on interactive cards/inputs: `hover:border-zinc-200/20`. Secondary pill buttons: `border-white/15 hover:border-white/30`.
- Avatar outline: `outline-1 -outline-offset-1 outline-white/10`.

### Text
| Role | Class |
|---|---|
| Primary text | `text-zinc-200` |
| Secondary / body copy | `text-zinc-400` |
| Tertiary / terminal comments, `$` prompts | `text-zinc-500` |
| Inside dark terminal blocks | `text-zinc-300` (code), `text-zinc-100` (bold emphasis) |

### Accent — rose
- `text-rose-500` — kickers' `//`, italic heading phrases, stat icons, "view more" links.
- `bg-rose-500` — primary buttons, "new" badges, crosshair marks, tab active underline (`aria-selected:border-rose-500`).
- `hover:bg-rose-600` — primary button hover. `hover:text-rose-400` — icon-link hover.
- `text-rose-400` — rose accents *inside* terminal blocks (comment `//`, `agent →` labels, "changed").
- `after:bg-rose-950` — the highlighter stripe behind the hero's italic phrase (`::after` bar, `h-2.5`, `bottom-1.5`, `-z-10`).
- Spotlight grid lines: `rose-800` / `rose-900`. Selection: `selection:bg-rose-600 selection:text-white`.

### Status / terminal colors
- Success: `text-green-400` (✓, stats), `bg-green-500` (dots, progress fills), PASS chip = `bg-green-400 px-1.5 font-bold text-zinc-900`.
- "Watching" badge: `border-green-500/20 bg-green-500/10 text-green-400` pill + `size-1.5 rounded-full bg-green-500` dot.
- Failure: `text-red-400` (×, FAILED text), `bg-red-500` (FAIL chip, `text-zinc-900`), `border-red-500` (hr), `text-red-500` (→ gutter).
- Numbers in failure output: `text-yellow-400`.

### Syntax highlighting (dark palette, all code panes)
| Token | Class |
|---|---|
| Function / method / test-fn names (`it`, `eval`, `arch`, `visit`, `expect`, `toBe`, …) | `text-green-400` |
| Strings | `text-yellow-200` |
| Keyword (`function`) + operators (`->`, `=`, `::`, `=>`) | `text-pink-400` |
| Variables (`$user`, `$this`) | `text-zinc-100` |
| Class names / namespaces (`Http`, `App\Models\User`) | `text-cyan-300` |
| Named arguments (`tries:`) | `text-orange-300` |
| Numbers | `text-violet-300` |
| Properties after `->` (`email`, `posts`, `not`), punctuation | `text-zinc-300` (plain) |
| Comments, prompts | `text-zinc-500` |

The accent is **pink** (`function` keyword + every operator — `->`/`=`/`::`/`=>`), everything callable (incl. `it`/`eval`/`arch`) is **green**, strings are **yellow**, numbers **violet**, class/type names **cyan**, variables near-**white**, named args **orange**. This applies to PHP code panes only — terminal-output blocks keep their own grammar (rose `//` / `→` / `agent` labels, green ✓, red ×/FAIL, §3 above), do **not** recolor those.

Code samples are hand-written HTML: each line is a `<div>`, indentation is literal `&nbsp;` (4 per level), blank lines are `<div>&nbsp;</div>`. No syntax-highlighter library — keep it that way; it guarantees pixel-exact output.

## 4. Typography

Three families, strict roles. Never mix roles.

### Display — Archivo (headings, big numbers)
Always the pair `font-display font-stretch-112%`. Never use Archivo without the stretch.
- **H1 (hero)**: `text-[clamp(30px,8.6vw,40px)] sm:text-[clamp(34px,4vw,50px)] font-extrabold leading-[1.05] tracking-tight`. Manual `<br>` breaks; sensitive phrases wrapped in `whitespace-nowrap`.
- **H2 (section)**: `text-3xl sm:text-4xl font-extrabold tracking-tight text-balance`, `mt-4` after its kicker.
- **H3 (card title)**: `text-lg font-bold text-balance mb-1.5`.
- **Stat value**: `text-xl font-bold leading-tight` (block). **Built-on tile title**: `text-lg font-bold`.
- Every H1/H2 contains exactly **one** accented phrase: `<em class="text-rose-500">` (italic comes free from `em`). In the hero it additionally gets the rose-950 highlighter bar (§3).

### Body — Instrument Sans
- Lede paragraphs: `text-lg text-zinc-400`, `max-w-[48ch]` in the hero, `text-pretty`.
- Card body: `text-sm/relaxed text-zinc-400`, `text-pretty`.
- Nav links: `text-sm font-medium text-zinc-400 underline-offset-4 hover:underline`.
- Buttons: `text-sm font-semibold`.

### Mono — JetBrains Mono (all "chrome")
For: kickers, terminal output, code, chips, kbd, stat labels, footer utility links, the install command. Sizes: `text-xs` (kickers, terminals — with `tracking-widest` on kickers/labels), `text-xs-plus` 12.5px (code panes, tile subtitles), `text-2xs` 11px (micro labels, badges, kbd), `text-3xs` 9px (tiny badges, browser-mock URL).
- Code pane line-height: `leading-[1.85]`. Terminal line-height: `leading-[1.9]`.
- Uppercase mono labels get `uppercase tracking-widest` (e.g. "BUILT ON").

### The kicker pattern (above every heading; inside every card)
```html
<div class="flex items-center gap-2.5 font-mono text-xs tracking-widest text-zinc-400">
    <span class="font-bold text-rose-500">//</span> section label here
</div>
```
Card-level variant (above H3): `<div class="text-2xs mb-2 font-mono tracking-widest text-rose-500">// card label</div>` — all rose, lowercase.

## 5. Layout system

### The frame
The page sits in a **rail frame**: `<main class="container relative mx-auto border-x border-zinc-700">`. Tailwind v4's `container` (max-width = current breakpoint) centered, with 1px vertical rails running the full page height. Header and footer are full-bleed (`container mx-auto` inside, no rails). Sections stack inside `<main>` separated by `border-y`/`border-t`/`border-b border-zinc-700` — **sections touch; there is no vertical gap between framed sections.** Whitespace lives *inside* sections as padding.

### Spacing rhythm
- Horizontal content padding: `px-5 sm:px-10` — everywhere, no exceptions.
- Section heading block: `pt-19 ... pb-10` (76px top, 40px below heading). Content grid below: `pb-19`.
- Big CTA section: `py-20 lg:py-24`, content centered `max-w-2xl mx-auto text-center`.
- Card grid gap: `gap-4.5` (18px).
- Header: `h-15.5` (62px), `sticky top-0 z-50`, `border-b border-zinc-700 bg-zinc-900/85 backdrop-blur-md`.

### Grids
- **Hero**: `grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]`, `pt-14 pb-12 lg:pt-20 lg:pb-[72px]`.
- **Bento (feature cards)**: `grid gap-4.5 lg:grid-cols-5`; cards span `lg:col-span-3` / `lg:col-span-2` alternating per row (3+2, 2+3, 3+2). Single column below `lg`.
- **Fact strips** (Built on, stats): bordered cells, *not* gapped — `grid grid-cols-2 lg:grid-cols-[auto_repeat(4,1fr)]` with `border-r`/`border-b` on cells (see §8).
- **Stack tiles**: `grid grid-cols-2 sm:grid-cols-4 gap-4.5`.
- **Testimonials**: `grid gap-4.5 lg:grid-cols-4` (1 intro column + 3 cards).

## 6. Signature motifs (what makes it look like this site)

### 6.1 Crosshair registration marks
Rose "+" marks pinned to section corners, like printing registration marks. Top-left (mirror with `-right-1.25`, `-bottom-1.25`):
```html
<span class="-left-1.25 -top-1.25 size-2.25 before:w-2.25 after:h-2.25 pointer-events-none absolute z-10
             before:absolute before:left-0 before:top-1 before:h-px before:bg-rose-500 before:content-['']
             after:absolute after:left-1 after:top-0 after:w-px after:bg-rose-500 after:content-['']"></span>
```
Parent section must be `relative`. Marks sit on border intersections (the `-1.25` offset centers the 9px mark on the 1px border). Use 2 (top corners) or 4 (all corners) per framed section. A fixed pair also rides under the sticky header (`fixed top-14.25 inset-x-0 z-10 pointer-events-none` wrapping a `container relative mx-auto`) so the rails always appear pinned.

### 6.2 Blueprint grid background
```html
<div class="bg-size-[56px_56px] absolute inset-0 opacity-50
            bg-[linear-gradient(var(--color-zinc-700)_1px,transparent_1px),linear-gradient(90deg,var(--color-zinc-700)_1px,transparent_1px)]
            mask-[radial-gradient(ellipse_90%_80%_at_60%_20%,#000_30%,transparent_75%)]"></div>
```
56px cell, 1px zinc-700 lines at 50% opacity, faded by a radial mask so it never reaches the edges. Hero mask centered at `60% 20%`; CTA mask `ellipse_70%_90%_at_50%_45%`. Parent needs `relative overflow-hidden`; the content sibling needs `relative`.

### 6.3 Pointer spotlight (hero only)
A second, brighter grid copy (rose lines: `rose-800` horizontal / `rose-900` vertical) stacked on top, masked by a 220px pointer-following circle intersected with the same radial fade:
```html
<div class="... mask-[radial-gradient(220px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),#000,transparent),radial-gradient(ellipse_90%_80%_at_60%_20%,#000_30%,transparent_75%)]
            mask-intersect pointer-events-none opacity-0 transition-opacity duration-300" x-ref="spotlight"></div>
```
Alpine (gate to `(hover: hover)`): on `@pointermove` at the hero, set `--spot-x`/`--spot-y` from the pointer position and raise opacity to 1; on `@pointerleave` set opacity 0.

### 6.4 Terminal blocks
The product screenshots of this site. Inside a card:
```html
<div class="mx-4 mt-4 rounded-[10px] bg-zinc-900 px-4 py-3.5 font-mono text-xs leading-[1.9] text-zinc-300 overflow-x-auto">
    <div><span class="text-zinc-500">$</span> ./vendor/bin/pest</div>
    <div>&nbsp;&nbsp;<span class="bg-green-400 px-1.5 font-bold text-zinc-900">PASS</span>&nbsp; Tests\Feature\PostTest</div>
    <div>&nbsp;&nbsp;<span class="text-green-400">✓</span> it creates a post <span class="text-zinc-500">— 0.11s</span></div>
    <div>Tests:&nbsp;&nbsp;&nbsp; <span class="text-green-400">1 passed</span> <span class="text-zinc-500">(2 assertions)</span> · Duration: <span class="text-green-400">0.14s</span></div>
</div>
```
Grammar: `$` prompt in zinc-500 · PASS/FAIL as filled chips with zinc-900 text · ✓ green-400 / × red-400 · timings in zinc-500 after an em dash · summary line with colored counts. Terminal comments: `<span class="text-rose-400">//</span> label` in zinc-500. Progress bars: track `h-1.5 rounded-full bg-zinc-700 overflow-hidden`, fill `h-full rounded-full bg-green-500` at an arbitrary width (`w-[96%]`), `min-w-1.5` so tiny values stay visible.

### 6.5 Cards (bento articles)
```html
<article class="flex flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800">
    <!-- media: inset mx-4 mt-4, rounded-[10px], usually a terminal/code block; flex-1 to fill -->
    <div class="mt-auto px-6 pb-6 pt-5">
        <div class="text-2xs mb-2 font-mono tracking-widest text-rose-500">// kicker</div>
        <h3 class="font-display font-stretch-112% mb-1.5 text-balance text-lg font-bold">Title</h3>
        <p class="text-pretty text-sm/relaxed text-zinc-400">Body copy.</p>
    </div>
</article>
```
Radius scale: card `rounded-2xl` (16px) → inset media `rounded-[10px]` → tiny inner elements `rounded-md`/`rounded-sm`. Media is always inset 16px (`mx-4 mt-4`); the text block is always bottom-anchored (`mt-auto`).

### 6.6 Buttons & pills
Everything clickable is a pill (`rounded-full`).
- **Primary**: `active:scale-96 inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition-[background-color,scale] hover:bg-rose-600`
- **Secondary**: same box, `border border-white/15 bg-white/5 hover:border-white/30 transition-[border-color,scale]`
- **Command / copy pill**: mono card pill — `rounded-full border border-zinc-700 bg-zinc-800 py-2.5 pl-5 pr-4 font-mono text-xs sm:text-sm hover:border-zinc-200/20`, with `<span class="text-zinc-500">$</span> command` (truncate) and a nested mini-pill `copy` badge (`text-2xs rounded-full border border-zinc-700 px-2 py-0.5 text-zinc-400`); label swaps to "copied!" for 2s (§2 Alpine snippet).
- **Feature chips**: `flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-400` + `size-3.5` stroke icon; optional `new` badge: `text-3xs -mr-1 rounded-full bg-rose-500 px-1.5 py-px font-bold uppercase tracking-wide text-white`.
- Text links: `underline-offset-4 hover:underline`; arrow links end with ` →`.

### 6.7 Tabs (code panel)
Container is the card. Tab bar: `flex overflow-x-auto border-b border-zinc-700 px-2` with `role="tablist"`. Each tab: `cursor-pointer whitespace-nowrap border-b-2 border-transparent px-3 py-3 font-mono text-xs text-zinc-400 transition-colors hover:text-zinc-200 aria-selected:border-rose-500 aria-selected:text-zinc-200` — state styled purely from `aria-selected` via the `aria-selected:` variant. Panes stack in one grid cell (`grid` parent, every pane `col-start-1 row-start-1`) and toggle `invisible opacity-0` with `transition-opacity duration-200`, so the panel keeps the height of its tallest pane (no layout shift). With Alpine, bind `:aria-selected` on tabs and `:class` on panes off a single `tab` value; keep the paired code-pane + terminal-pane switching together.

### 6.8 Marquee (logo strip)
Duplicated list (second copy `aria-hidden="true"`), track `flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none`, keyframes translate to `-50%`. Wrapper edge fade: `mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] relative overflow-hidden`. Each cell: `flex items-center border-r border-zinc-700 px-12 py-7`; logos are white/light SVGs at explicit heights (`h-5`–`h-6`, `w-auto`) — use light-colored originals as-is on the dark canvas.

### 6.9 Fact strips (Built on / stats)
Label cell + equal data cells divided by hairlines, no gaps. Data cell: `flex flex-col justify-center gap-0.5 px-5 sm:px-6 py-5.5 border-r border-zinc-700` with `<b class="font-display font-stretch-112% text-lg font-bold">` + `<span class="text-xs-plus text-zinc-400">`. Stat variant adds a leading icon: `size-6 shrink-0 text-rose-500` stroke SVG, value `text-xl`.

### 6.10 Browser-chrome mockup
Fake browser for UI illustrations: header `flex items-center gap-1.5 border-b border-zinc-700 bg-zinc-900 px-3 py-2` with three `size-2 rounded-full bg-zinc-700` dots and a URL pill (`text-3xs ml-1.5 flex-1 rounded-md border border-zinc-700 bg-zinc-800 px-2.5 py-0.5 font-mono text-zinc-400`). Body: skeleton bars `h-2 rounded-sm bg-zinc-700` (accent `bg-zinc-600`), assertion highlight = `ring-2 ring-green-500/70` around real text + a green result badge (`text-3xs rounded-full bg-green-600 px-2 py-0.5 font-mono font-bold text-white`).

### 6.11 Icons
All inline SVG, `viewBox="0 0 24 24"`, `fill="none" stroke="currentColor"`, `stroke-width` **1.6** (nav/stat icons) or **1.8** (chip icons), `stroke-linecap="round" stroke-linejoin="round"`. Sizes: `size-3.5` (chips), `size-4` (nav), `size-5` (search), `size-6` (stats). Simple geometric single-path glyphs — draw new ones in the same weight, never import an icon font.

### 6.12 Wordmark
The PEST wordmark is one SVG path (`viewBox="0 0 381 100"`), defined once in the header with `id="pest-wordmark"` and `fill-zinc-200`, reused in the footer via `<svg class="mt-10 h-auto w-full fill-white/10"><use href="#pest-wordmark"/></svg>` — a giant ghost watermark closing the page. `<use>` only works if the source SVG is in the same document (it is — one `index.html`).

### 6.13 Testimonials
`<figure class="flex flex-col rounded-2xl border border-zinc-700 bg-zinc-800 p-6">` — blockquote `text-pretty text-sm/relaxed` in real curly quotes “…”, then `figcaption` bottom-anchored (`mt-auto ... pt-5`): `size-9` avatar (`rounded-full outline-1 -outline-offset-1 outline-white/10`, GitHub `?size=72` for 2×), name `text-sm font-semibold block`, role `text-xs text-zinc-400`, `leading-tight`.

## 7. Motion & interaction

- **Press**: every button/tile gets `active:scale-96`. Transition only what changes: `transition-[background-color,scale]`, `transition-[border-color,scale]`, `transition-colors`, `transition-opacity`.
- **Durations**: 200ms (tab panes), 300ms (spotlight), Tailwind default (~150ms) elsewhere, 30s marquee. Nothing bounces; no keyframe animations besides the marquee. (`tailwindcss-motion` is available but the design intentionally stays restrained.)
- **Reduced motion**: `motion-reduce:animate-none` on the marquee; the spotlight is gated to `(hover: hover)` devices.
- **Hover grammar**: text links underline (`underline-offset-4`); cards/inputs lighten their border (`hover:border-zinc-200/20`); primary buttons deepen (`hover:bg-rose-600`); marquee pauses.
- **Copy-to-clipboard**: `navigator.clipboard.writeText(...)`, swap label to "copied!", restore after 2000ms.
- Status dots are static (`size-1.5 rounded-full bg-green-500`) — no pulsing.

## 8. Responsive rules

Only **two breakpoints: `sm` (640px) and `lg` (1024px)**, mobile-first. `md`, `xl`, `2xl` are never used — keep it that way.

- **Padding**: `px-5` → `sm:px-10` on every content block. Cell padding `px-5 sm:px-6` or `px-5 sm:px-8`.
- **Hero**: single column stack (`gap-12`) → `lg:grid-cols-[1.05fr_0.95fr]`. H1 uses viewport clamps: `text-[clamp(30px,8.6vw,40px)]` then `sm:text-[clamp(34px,4vw,50px)]` — the *only* fluid type on the page. Watch `whitespace-nowrap` spans in H1: phrases must fit 320px at the clamp minimum.
- **Header**: nav links `hidden lg:flex`; search box `hidden sm:flex` (fixed `w-56`); logo + GitHub always visible. There is **no theme toggle** (dark-only). Below `lg`, a hamburger (`lg:hidden`) opens a slide-in mobile menu driven by `x-data="{ mobileMenuIsOpen: false }"` on `<body>` — it carries the nav links (Documentation/YouTube/Sponsor) that are otherwise hidden.
- **Bento**: 1 column → `lg:grid-cols-5` with `lg:col-span-3`/`lg:col-span-2`. Inside the browser-testing card, media splits `lg:grid-cols-2`.
- **Fact strip (Built on)**: `grid-cols-2` with the label cell `col-span-2 border-b` → at `lg`: `lg:grid-cols-[auto_repeat(4,1fr)]`, label becomes `lg:col-span-1 lg:border-b-0 lg:border-r`. Cells alternate `border-r` (kept on mobile 2-col) and `lg:border-r` (only for 4-col). When adding cells, re-derive which need `border-r` vs `lg:border-r` for both layouts.
- **Stats strip**: `grid-cols-2 lg:grid-cols-4`; per-cell borders are data-driven: cell 1 `border-b border-r lg:border-b-0`, cell 2 `border-b lg:border-b-0 lg:border-r`, cell 3 `border-r`, cell 4 none.
- **Stack tiles**: `grid-cols-2 sm:grid-cols-4`. **Testimonials**: 1 col → `lg:grid-cols-4`. **Sponsor strip**: label row stacks above the marquee (`border-b`) → `lg:grid-cols-[auto_1fr]` side-by-side (`lg:border-b-0 lg:border-r`).
- **Overflow safety**: every code/terminal pane has `overflow-x-auto`; tab bars `overflow-x-auto`; command pill text `truncate`; long tokens `whitespace-nowrap`. Nothing may cause page-level horizontal scroll.
- **Footer**: `flex flex-col items-center gap-4 sm:flex-row justify-between`.
- Buttons wrap with `flex flex-wrap items-center gap-3` (+ `justify-center` when centered).

## 9. Voice & copy rules

- **Headings**: sentence case, short, benefit-first. Exactly one italic `<em class="text-rose-500">` phrase per H1/H2 — the emotional word ("choose Pest?", "beautifully", "Again."). In the hero, **"and AI agents"** is the emphasized phrase (gets the rose highlighter bar).
- **Kickers**: lowercase, terse, comment-style — `// test with confidence`, `// agent browser`, `// ai evals`.
- **Body copy**: 2–3 declarative sentences. State the mechanism, then the payoff. No exclamation marks, no "simply/just/easily", no marketing superlatives — proof is numeric ("A 15-second suite comes back in under a second", "96%", "70M+").
- **Agent-native tone**: agents are first-class users, addressed matter-of-factly: "agents start here:", "Your agents verify their own work", "fast enough for an agent to run it after every edit". Write new copy assuming both a human and a coding agent will read it.
- **Terminal samples are copy too**: realistic, plausible output (real commands, real durations, believable counts) — never lorem-ipsum filler.
- Footer utility links are mono paths: `/llms.txt`, `/source`, `/docs`.

## 10. Building a new section — checklist

1. `<section class="relative border-t border-zinc-700">` (or `border-y`) inside the railed `<main>`.
2. Add crosshair marks at the new border intersections (§6.1) — top two minimum.
3. Heading block: `pt-19 px-5 pb-10 sm:px-10` → kicker (§4) → H2 with one rose `<em>`.
4. Content: `px-5 sm:px-10 pb-19`, grid with `gap-4.5`, cards per §6.5.
5. Any code/terminal content follows §6.4 grammar and the §3 syntax palette.
6. Check 320px, 640px, 1024px: paddings switch, grids collapse, nothing overflows.
7. New assets → `resources/www/public/` (SVG preferred, stroke style per §6.11). Rebuild to see changes at `/`.

## 11. Build, serve & gotchas

- **Loop**: edit `resources/www/` → check on the dev server → `npm run build` → confirm the built page still matches (the `/` route serves `public/www/index.html`, not the source).
- **Dark-only**: write dark values as plain classes; never add `dark:` variants or a theme toggle. `<body>` is `bg-zinc-900`.
- **Wordmark**: keep the header `<svg id="pest-wordmark">` — the footer watermark is a `<use href="#pest-wordmark">` and only resolves because both live in the same `index.html`.
- **Logo colors on the dark canvas**: brand-colored SVGs (Laravel red, Drupal blue, CodeIgniter orange, Statamic lime, Livewire pink, Symfony white, sponsor logos) render **as-is — do not `invert`**. Only truly-black/`currentColor` glyphs (WordPress, Inertia) get `invert` to flip them white. Inverting an already-white logo turns it black (invisible) — the classic mistake here.
- **No page-level horizontal scroll**: `<html>` carries `overflow-x-clip` to absorb the ~4px bleed from the decorative corner crosshair marks (fixed-positioned marks escape `<body>` clipping). Keep it.
- **Interactivity is inline Alpine** (§2): tabs, pointer spotlight, copy-to-clipboard, and the mobile menu are all `x-data`/`@`-handlers in `index.html`. The spotlight is gated to `(hover: hover)`; the marquee keeps `motion-reduce:animate-none`. Verify the browser console is error-free after any change.

</design-system>

<voice-and-tone>

# Landing page voice & tone

This is the *personality* layer for the landing page (`resources/www/`); design-system §9 is the *mechanical* layer (one `<em>` per heading, kicker syntax, terminal grammar). Follow both.

The voice is distilled from three touchstones, **deliberately weighted**:

- **Vercel (vercel.com) — the lead.** Forward-looking, agent-native, punchy. Parallel and recursive phrasing for emphasis. The future already ships.
- **Resend (resend.com) — concision.** The category one-liner ("Pest is the … for …"), fragments over sentences, zero fluff.
- **Laravel (laravel.com) — craft & joy.** Elegance is a feature; testing is a pleasure. The human developer is the heart, never displaced.

**One-sentence identity:** Pest is an agent-native testing framework that PHP developers love to reach for. Agents are the amplifier, not an audience swap — write every line for a coding agent *and* the developer reading over its shoulder.

## Pillars

1. **Agent-native by default (Vercel — lead register).** Agents are first-class operators: they run the suite after every edit, verify their own changes end-to-end, and grade their own AI features. Address them matter-of-factly, never as a novelty. Favor recursive/parallel phrasing ("your agents verify their own work", "tests fast enough for an agent to run after every edit").
2. **Forward-looking, proven now (Vercel).** State the future in the present tense, then back it with real terminal output or a number. Confidence, never speculation.
3. **Still for PHP developers (Laravel).** The developer is never sidelined. Craft, elegance, and the "joy of testing" stay the emotional core — agents make that joy compound. Exactly one warm, human note per view. Warmth, never whimsy.
4. **Category one-liner + concision (Resend).** Every section reduces to one declarative sentence. Fragments beat sentences. Cut every word that carries no weight.
5. **Numbers are the proof.** "96%", "70M+", "under a second", "0 js errors" — specifics carry the claims, adjectives do not.

## Do / Don't

- Do: "A 15-second suite comes back in under a second — fast enough for an agent to run after every edit." Don't: "Blazing-fast tests that supercharge your workflow!"
- Do: "Your agents verify their own work." Don't: "AI-powered testing for the future!"
- Do: name the mechanism, then the payoff. Don't: superlatives, "simply/just/easily/powerful", exclamation marks, or hedges ("might", "could help").

## Litmus test

Before shipping a line: could Vercel ship its confidence? Is it as tight as Resend? Does it keep one note of Laravel craft? And would it read naturally to a coding agent? If not, rewrite.

</voice-and-tone>
