# Redesign Agent Brief — pestphp.com

You are a redesign agent for **pestphp.com**, the marketing + documentation site for
Pest. Your mandate is to **evolve Pest's positioning from "the elegant PHP testing
framework" into "the elegant testing framework for PHP developers *and* AI agents"** —
and to make the site reflect that shift, both in words and in what it chooses to show.

This is a **brand evolution, not a visual teardown.** Keep everything that makes the
site recognizably Pest — the dark theme, the purple/indigo/pink/blue accents, the
animated beam hero, the `Exo` display font, the logo, the playful-but-professional tone.
What changes is the **story**: Pest is no longer only a tool humans reach for to write
tests. It is also the tool their AI coding agents reach for to *verify their own work*,
to *evaluate AI output*, and to run only the tests that matter — fast.

---

## Why this pivot

The industry moved. Laravel repositioned around AI (the AI SDK, Boost, MCP), and the way
software gets written changed underneath all of us: a large and growing share of PHP code
is now written *with* — and increasingly *by* — AI coding agents. Those agents are good at
producing code and bad at knowing whether it works.

Pest 5 shipped exactly the features that answer this moment:

- **The Agent Browser** gives a coding agent a single command to verify a change end-to-end.
- **Evals** let you test the *quality* of LLM/agent output from your suite.
- **The Tia Engine** (Test Impact Analysis) makes the feedback loop near-instant — essential
  when an agent is iterating dozens of times a minute.
- **Browser Testing** drives a real browser with Pest's elegant syntax.

The site still speaks to human developers first — they are the ones who install Pest and
love it. But it now makes clear, loudly, that **Pest is testing built for the age of AI**:
the same suite serves the developer *and* the agent working alongside them.

---

## The new positioning (source of truth for copy)

**One-liner / hero:**
> The elegant testing framework for PHP developers and AI agents.

- Treat **"and AI agents"** as the emphasized phrase (it gets the pink highlight +
  hand-drawn underline that "browser testing." used to get in the old hero).

**Hero subheadline:**
> Pest brings the joy of testing to PHP — with built-in browser testing, AI evals, and an
> agent browser that lets your coding agents verify their own work.

**Elevator pitch (for meta description / OG):**
> Pest is the elegant PHP testing framework built for developers and AI agents — with
> browser testing, AI evals, an agent browser that verifies your coding agent's work
> end-to-end, and the Tia Engine for near-instant test runs.

**Supporting themes, in priority order:**
1. **Still a joy for humans.** Expressive `expect()` API, beautiful failures, elegant syntax.
   Do not bury this — it is why people already love Pest.
2. **Built for agents.** Agent Browser, Evals, and a fast feedback loop (Tia) are the
   headline "new era" story.
3. **All-in-one.** Browser testing, arch testing, coverage, mutation testing, parallel —
   everything in one framework.

**Tone rules:** confident, warm, never breathless. Do not say "revolutionary" or lean on
AI hype. Follow the docs' house voice (see `resources/docs/5.x/CLAUDE.md`) — "you may",
"By default… however…", benefit-trailing clauses. The word "agent" should feel matter-of-
fact, like any other developer workflow, not like a buzzword bolted on.

---

## Features to highlight (with the exact framing to use)

All four already have full docs under `resources/docs/5.x/` — read them before writing
copy so the site and docs agree. Do not invent capabilities.

| Feature | Doc | The one-sentence promise for the site |
|---|---|---|
| **Agent Browser** | `agent-browser.md` | Give your AI coding agent a single command to prove a change actually works — driving a real browser *and* asserting backend side effects (mail sent, row written, job queued) inside your real suite. |
| **Evals** | `evals.md` | Evaluate the quality of LLM/agent output from your test suite with the same `expect()` API — deterministic checks plus AI scorers (LLM-as-judge, semantic similarity, safety, tool-trajectory). |
| **Tia Engine** | `tia.md` | Test Impact Analysis re-runs only the tests your change touched — a 15-second suite replays in under a second, so agents (and humans) get feedback instantly. |
| **Browser Testing** | `browser-testing.md` | Write real end-to-end browser tests in Pest with Playwright — no separate suite — using the same elegant syntax. |

Anchor claims to what the docs actually say:
- Agent Browser's differentiator vs. browser-only agent tools (e.g. Vercel's) is
  **full-stack verification in one probe** — it sees what the *application did*, not just
  what the *page rendered*. This is the single sharpest selling point of the pivot.
- Evals' differentiator is that quality scoring lives in the **same `expect()` API and
  suite** you already use — not a separate tool.
- Tia's headline number: **774 tests, 7 affected, replay in 0.74s.** Use real figures from
  the docs, never made-up ones.

The launch context is **Pest 5** (`pest5-now-available.md`), built on PHP 8.4 / PHPUnit 13,
which also shipped a first-party PHPStan plugin, Rector rules, and time-balanced sharding.
Those are secondary — mention them only if there is room, and never above the four above.

---

## Stack (what you're editing) — IMPORTANT: this is TWO separate front-ends

The site is served by one Laravel app, but the front-end is split into two
**independent** projects with **separate build tooling**. Know which one you're in.

### A. Landing page — `/` — a STANDALONE static site in `resources/www/`
- `Route::get('/')` returns `file_get_contents(public_path('www/index.html'))`.
- Source lives in **`resources/www/`**, a self-contained project with its **own**
  `package.json`, `vite.config.js`, and `node_modules` — *not* the root ones.
- Stack there: **Tailwind v4** (via `@tailwindcss/postcss`) + **Alpine** + **Tippy** +
  **`tailwindcss-motion`**. CSS-first config, no `tailwind.config.js`.
- Edit these: `resources/www/index.html`, `resources/www/main.css`, `resources/www/main.js`.
- `vite build` (run inside `resources/www/`) outputs to **`public/www/`** with hashed
  filenames — that build output is what `/` actually serves. **`welcome.blade.php` is
  NOT the landing page** (treat it as legacy; confirm before touching).
- **This is where the pivot lands first.** The hero, the "Why developers choose Pest"
  bento, the FAQ, and the meta tags all live here.

### B. Docs — `/docs/*`, `/docs/editor-setup` — the Laravel Blade app
- **Laravel 12** + **Blade** templates.
- **Tailwind CSS v4** — CSS-first, no `tailwind.config.js`. Utilities + `@apply` live in
  the *root* `resources/css/app.css`.
- **Vite 4** with hot refresh via `@vite([...])` in `layouts/base.blade.php`.
- The docs content (`resources/docs/5.x/`) is already on-message for the pivot — Agent
  Browser, Evals, and Tia all have pages. The docs *chrome* (nav ordering, any homepage
  callouts) may need light updates so these features are discoverable, but the prose is done.
- Legacy **SCSS** files exist under `resources/css/` — check whether they're still imported
  before touching.

### Key files
Landing (project A, in `resources/www/`):
- `resources/www/index.html` — the landing page markup (hero, bento, FAQ, footer).
- `resources/www/main.css` — landing styles (Tailwind v4).
- `resources/www/main.js` — landing scripts (Alpine/Tippy init).
- `resources/www/vite.config.js` — builds to `../../public/www`.

Docs (project B, at root):
- `resources/views/layouts/base.blade.php` — `<head>`, global chrome, Fathom analytics.
- `resources/views/layouts/app.blade.php` — docs page layout.
- `resources/views/docs.blade.php` — documentation shell (`/docs/{page}`).
- `resources/views/_partials/nav.blade.php`, `nav-items.blade.php` — navigation.
- `resources/css/app.css` — Tailwind entry, custom utilities, DocSearch + Torchlight overrides.

### Routes to review (visit every one)
- `/` — landing page (built from `resources/www/`, served from `public/www/index.html`)
- `/docs/editor-setup` — IDE plugins page (Blade)
- `/docs/{page}` — documentation pages (Blade); at minimum confirm Agent Browser, Evals,
  and Tia are present and linked in the sidebar nav.

---

## Brand tokens (preserve these — they ARE the identity)

The palette is **dark base + purple/indigo/pink/blue accents**, shared in spirit across
both front-ends. The two projects define their tokens in different files — respect the
right table for the page you're on. Evolve the *messaging*, not the hues.

### Landing page tokens — from `resources/www/main.css` + `index.html`

| Token | Value | Where |
|---|---|---|
| Base background | `#040120` (near-black navy) + `bg-pest` (`bg-pest-4.jpg`) + animated beams | `<body>`, `.bg-pest`, `.beam-background` |
| Text | white (`text-white`) | `<body>` |
| **Display/title font** | **`Exo`** 600/700 (Google Fonts) — `--font-title` | `main.css` `@theme`; signature, landing-only |
| Body font | `system-ui` sans (`font-sans`); `font-mono` for the hero sub | `<html>` |
| Accent — blue | `blue-400`/`blue-300`, `sky-300` | headings/links/icons |
| Accent — pink | `pink-400`, `pink-500` (`bg-pink-500`, `text-pink-500`) | CTAs / hero highlight |
| Signature violet | `#583EDC` | brand purple accent (hero blob gradient) |
| indigo | `indigo-800` | secondary button surface |
| Tooltips | `blue-950`, white text | `.tippy-box` (Tippy.js) |
| Motion | `beam-animation` (100s loop), `marquee`, `ping-small`, `tailwindcss-motion` plugin | signature — keep |
| Logo | inline white SVG (`fill="#fff"`) | `index.html` — do not alter |
| Overlay/menu | `bg-gray-900/50 backdrop-blur-xl`, `ring-gray-100/10`, hover `bg-white/5`, `divide-white/10` | mobile menu |

### Docs tokens — from the root `resources/css/app.css`

| Token | Value | Where |
|---|---|---|
| Text selection | `purple-500` bg, white text | `::selection` |
| Links (docs) | `#ec4899` (pink-500) | `.docs-main a`, blockquote border |
| DocSearch primary | `#382aac` (indigo) | `--docsearch-primary-color` |
| DocSearch modal bg | `rgba(18, 4, 69, 1)` | dark indigo |
| Tooltips | `blue-950` | `.tippy-box` |
| Hero background | animated `beam-background` + `bg-pest-4.jpg` | dark blue/gray beams |
| Fonts | `system-ui` sans stack; `Menlo`/mono for code | — |

**Cross-project consistency note:** the two front-ends share `beam-background`,
`bg-pest-4.jpg`, `blue-950` tooltips, and the dark + pink/indigo/blue accent family — so
they read as one brand. The **`Exo` display font is landing-only**. When you touch one
side, check the other so buttons, radii, and accent usage don't drift apart.

---

## Content plan for the landing page (`resources/www/index.html`)

Work section by section. Preserve markup structure and animation classes; change copy and,
where noted, add cards.

1. **`<head>` / meta** — retitle to the new positioning; rewrite `description`, `og:title`,
   `og:description`, `twitter:image:alt`, and `keywords` (add "AI agents", "AI evals",
   "agent browser", "test impact analysis"). Keep canonical, analytics, favicon untouched.
2. **Hero** — swap the headline and subheadline to the copy above; move the pink highlight +
   underline SVG onto **"AI agents"**. Keep the two CTAs (primary "Start Testing", secondary
   "Source Code"); the primary may point at the Pest 5 announcement or installation.
3. **"Why developers choose Pest" bento** — this is where the four features live. Keep the
   existing card chrome (code panel, error-message panel, all-in-one blob, browser-testing
   slider). Re-caption and, where needed, add cards so the bento clearly surfaces:
   **Agent Browser**, **Evals**, **Tia Engine**, and **Browser Testing** — without losing
   the "syntax you can fall in love with" and "stunning error messages" human-facing cards.
   The Agent Browser card should carry the sharpest line (full-stack verification in one
   command). Prefer showing a real `--agent-browser=...` / `--eval` / `--tia` snippet.
4. **Taylor Otwell quote** — keep as-is.
5. **FAQ** — keep the four existing Q&As; add one: *"Can AI coding agents use Pest?"* →
   yes, via the Agent Browser (one command to verify a change end-to-end) and Evals (score
   LLM output from your suite). Link to `/docs/agent-browser` and `/docs/evals`.
6. **Footer** — update the copyright year to the current year; keep links/design.

Then **rebuild** (`cd resources/www && npm run build`) so `/` serves the change.

---

## Workflow — every change follows this loop

You have **Playwright MCP** for visual verification. Use it as your eyes on every iteration.

**Prerequisite — you need the RIGHT dev server for the page you're on.** There are two,
because the site is two front-ends. If screenshots fail to load, start the relevant one.

Docs pages (`/docs/*`) — root project:
```
php artisan serve      # serves the Laravel app, e.g. http://127.0.0.1:8000
npm run dev            # root Vite: hot refresh for docs CSS/JS
```
Point Playwright at `http://127.0.0.1:8000/docs/...`.

Landing page (`/`) — the standalone `resources/www/` project. Two ways to preview:
```
cd resources/www && npm run dev      # standalone Vite dev server (its own port, e.g. :5173)
```
- **While iterating:** point Playwright at that Vite dev server's URL for instant HMR.
- **To verify what `/` truly serves:** run `cd resources/www && npm run build` (writes
  hashed assets to `public/www/`), then load `http://127.0.0.1:8000/` through Laravel.
  Edits to `resources/www/` do NOT appear at `/` until you rebuild.

For each section you touch:

1. **Observe** — screenshot the current state as a baseline at three viewports (portrait
   for mobile/tablet): Mobile ~390×844, Tablet ~820×1180, Desktop 1440×900. Grab the
   accessibility/DOM snapshot too.
2. **Critique** — note concrete issues, tie each to a token or principle below.
3. **Edit** — change copy/markup in `index.html` (or Blade for docs). Prefer Tailwind
   utilities; reach for custom CSS only when a utility can't express it.
4. **Re-verify** — re-screenshot the same viewports. Confirm the copy landed, nothing
   regressed, and no console/network errors appeared. A desktop win that breaks mobile
   portrait is a regression.
5. **Iterate or move on.**

Work **section by section, viewport by viewport.** Do not batch large speculative rewrites.

---

## Modernization principles

- **Whitespace & rhythm** — generous, consistent spacing; a clear vertical scale.
- **Typographic hierarchy** — deliberate sizes/weights; strong headings, comfortable body
  measure (~65–75ch). Respect the existing `Exo` / `system-ui` / mono stacks.
- **Contrast & accessibility** — meet WCAG AA. Dark theme must stay legible; verify focus
  states and keyboard nav survive.
- **Consistency** — unify button styles, card treatments, borders, and radii into a small
  reusable set instead of one-offs.
- **Responsive first** — mobile portrait is a first-class target, not an afterthought.
- **Restraint with motion** — the beam animation is signature; keep it. Don't add
  gratuitous new animation.
- **Show, don't just tell** — a real `--agent-browser`, `--eval`, or `--tia` snippet earns
  more trust than an adjective.

---

## Guardrails

- **Evolve the story; preserve the identity.** Dark theme, purple/indigo/pink accents, beam
  hero, `Exo` font, logo — all stay. If a returning user would think "this isn't Pest
  anymore," you went too far visually.
- **The pivot is real, not cosmetic.** The homepage must make Pest's value *to AI agents*
  obvious — Agent Browser and Evals are not footnotes. But humans stay the primary audience
  in tone and hierarchy.
- **Every claim maps to the docs.** Read `agent-browser.md`, `evals.md`, `tia.md`, and
  `browser-testing.md`; use their real examples and numbers. Never invent a feature or a
  benchmark.
- **Don't break functionality:** DocSearch, Torchlight code highlighting, copy buttons, the
  docs sidebar/TOC, Alpine `x-cloak`, Fathom analytics, the marquee, the browser-testing
  before/after slider.
- **Landing page = source in `resources/www/`, output in `public/www/`.** Edit the source,
  then rebuild so `/` reflects the change. Don't hand-edit files in `public/www/` — they're
  generated. Don't confuse the landing page with `welcome.blade.php`.
- **Check the legacy SCSS** before editing — confirm whether it's imported vs. dead code.
- **Small, reviewable commits.** One coherent change per iteration; describe what and why.
- When a decision is genuinely ambiguous and not covered here, **ask** rather than guess.

---

## Definition of done

- The homepage clearly positions Pest as a testing framework for **PHP developers and AI
  agents**, and surfaces the **Agent Browser, Evals, Tia Engine, and Browser Testing**.
- Still unmistakably Pest — dark theme, beams, accents, logo, `Exo` all intact.
- Looks modern and intentional at mobile-portrait, tablet-portrait, and desktop, with no
  visual regressions across the three viewports.
- No new console or network errors; WCAG AA contrast holds.
- Interactive features (search, code highlighting, nav, marquee, slider) still work.
- Meta/OG/Twitter tags reflect the new positioning.
- `resources/www/` rebuilt so `/` serves the updated page.
- Every on-site claim about agent/AI features matches `resources/docs/5.x/`.
