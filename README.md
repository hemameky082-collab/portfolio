# Ibrahem Abdelhafeez, Portfolio (React + TypeScript + Tailwind CSS)

The portfolio rebuilt as a proper React project: Vite + React 18 + TypeScript + Tailwind CSS, dark green-black design with a calm teal accent (palette derived from the recolored hero photo), content from the CV and GitHub, and the "Ask about Ibrahem" chatbot.

## Features

- Photographic full-width hero: his chosen image (`public/hero-bg.jpg`) full-bleed behind the content with a readability scrim that blends into the page background, huge display name with a script first-name accent, glowing Download CV button (bundles his real CV as `public/cv.pdf`), social icon pill (GitHub + email), and a stats row (real numbers only: 14 public repos, 6 featured projects, 2 languages AR/EN).
- What I Do as sticky stacking cards: each service pins while the next slides over it on scroll, big "( 01 )" numbers, and 3 numbered points with divider lines per card (his real services only).
- My Stack section: his technologies grouped (Front-End, API & Integrations, AI & Development, Tools) with brand-colored icon tiles, in both languages.
- Contact section: big accent heading, icon rows (email, WhatsApp/phone, location, GitHub) and a glowing project-inquiry form card that opens WhatsApp with the message prefilled.
- Dark / light mode toggle (top bar, remembers your choice), applied before first paint so there is no theme flash.
- English / Arabic switch with full RTL layout (Cairo font for Arabic).
- Floating "Ask Ibrahem" chat pill (with his photo) on one corner and a floating WhatsApp button on the other; sides flip automatically in RTL.
- A soft orange glow that follows the mouse, and 3D tilt on project cards (desktop only).
- Real screenshots of each live demo on the project cards.
- Scroll-reveal animations, typing preloader, scrolling marquee.
- Chatbot that answers questions about Ibrahem in the site language.
- Everything respects `prefers-reduced-motion`: animations, tilt and the mouse glow turn off automatically.

## Folder structure

```
portfolio-react/
  index.html                  page shell + Cairo font
  package.json                scripts and dependencies
  vite.config.ts
  tsconfig.json
  tailwind.config.js          design tokens (CSS-variable colors, animations)
  postcss.config.js
  public/
    hero-bg.jpg               the hero background photo (his chosen image)
    ibrahem.jpg               your photo (used as the chat pill avatar)
    cv.pdf                    your CV, downloaded by the hero button
    demos/                    live-demo screenshots shown on project cards
  src/
    main.tsx                  entry
    App.tsx                   page layout
    ui.tsx                    language + theme provider (useUI hook)
    index.css                 Tailwind + theme variables + reduced-motion rules
    data.ts                   ALL content in English AND Arabic, plus chatbot answers
    lib/brain.ts              chatbot logic (local answers + optional AI proxy)
    lib/useTilt.ts            3D tilt hook
    components/
      Preloader.tsx           typing intro animation
      Nav.tsx                 menu + dark/light + EN/AR toggles
      Hero.tsx                photographic hero + name + CV button
      Services.tsx            What I Do, sticky stacking service cards
      Marquee.tsx             scrolling strip
      Stack.tsx               My Stack, grouped tech with icon tiles
      Journey.tsx             education/training timeline
      Projects.tsx            6 featured project cards with demo screenshots
      About.tsx               bio
      MoreProjects.tsx        numbered list of other 5 projects
      Contact.tsx             icon rows + glowing WhatsApp inquiry form
      ChatWidget.tsx          the chatbot UI + floating photo pill
      WhatsAppFab.tsx         floating WhatsApp button
      MouseGlow.tsx           mouse-follow glow
      Footer.tsx
      Reveal.tsx              scroll-reveal helper
```

To change any text on the site, edit `src/data.ts` only. It holds two full copies of the content, `en` and `ar`; keep them in sync.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs dist/
npm run preview    # serve the production build locally
```

## Deploy

**Vercel:** import the project at vercel.com/new. Vercel detects Vite automatically (build: `npm run build`, output: `dist`).

**Netlify:** build command `npm run build`, publish directory `dist`.

**GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.ts`, build, and publish the `dist` folder (or use the gh-pages package).

## Language and theme

The top bar has two toggles: sun/moon for dark/light and عربي/EN for language. The choice is saved in the browser (localStorage). Arabic switches the whole page to RTL automatically. You can also force either with URL params: `?lang=ar`, `?theme=light`.

## Your photo

The floating chat pill shows `public/ibrahem.jpg` (an optimized 800x800 version of the photo you sent, 78 KB, alt text "Ibrahem Abdelhafeez"). To replace it, drop a new square image at that path with the same name.

## Your CV

The hero's Download CV button serves `public/cv.pdf` (the CV you sent). To update it, replace that file with a newer PDF.

## Project demo screenshots

The project cards show real screenshots of your live GitHub Pages demos, stored in `public/demos/` (freshcart.jpg, adasa.jpg, kanban.jpg, contacthub.jpg, quizapp.jpg, 800x500 each). Refresh them any time by replacing the files. Social App shows a "Demo in progress" placeholder until its demo is deployed.

## The chatbot

Rule-based, fully local: it matches keywords (English and Arabic) against answers in `src/data.ts` (the `KB` array) and replies in the site language. No backend, no API key, no data leaves the page. It is not a real AI model.

To upgrade to real AI later: deploy a small serverless function that accepts `POST {question, lang}` and returns `{answer}` (your API key stays on the server), then set `PORTFOLIO_AI_ENDPOINT` in `src/lib/brain.ts` to its URL. Never put an API key in this project; everything here is public.

## Preview helpers

`?noanim` skips the preloader and reveal animations and freezes all transitions (used for screenshots/testing). `?chat` opens the chatbot with a sample question. `?lang=ar` and `?theme=light` force language/theme. Theme and language are also applied before first paint from localStorage, so there is no flash of the wrong theme on load.

## Before publishing

- The Social App demo is marked "Demo in progress" because its GitHub Pages deployment serves the unbuilt Vite index. Deploy a production build there, then add the link in `src/data.ts`.
- Your phone number is in the Contact section and powers the WhatsApp form. Remove it from `src/data.ts` (the `contact` object) if you do not want it public.

## Motion & loading

- **Loading screen**: branded `Ibrahem.dev` splash with a teal progress bar (`src/components/Preloader.tsx`). Fills in under a second and fades into the hero (~1.3s total). Shown once per tab session (sessionStorage); skipped entirely for `prefers-reduced-motion`.
- **Scroll reveal**: every section fades + slides in on scroll (`src/components/Reveal.tsx`, `.rv` in `src/index.css`).
- **Project card hover**: lift, image zoom inside its frame, and a teal border glow (`.proj-card` / `.proj-img` in `src/index.css`), plus the existing 3D tilt (`src/lib/useTilt.ts`). Pointer effects are desktop-only.
- **Hero typing effect**: the role line types itself with a blinking caret (`src/components/Typewriter.tsx`); starts as the loading screen fades, retypes on language switch.
- **Count-up stats**: hero numbers count up when scrolled into view (`src/components/CountUp.tsx`).
- **Cursor glow**: a soft teal glow follows the mouse on desktop (`src/components/MouseGlow.tsx`); skipped on touch devices.
- **Scroll progress bar**: thin teal bar along the top (`src/components/ScrollProgress.tsx`); fills from the inline-start edge, so it grows from the right in Arabic.

All motion respects `prefers-reduced-motion` (content renders in its final state) and the `?noanim` preview flag, and nothing animates layout (transform/opacity only), so there is no layout shift.
#   p o r t f o l i o  
 