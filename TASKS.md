{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Bold;\f1\fmodern\fcharset0 Courier-Bold;\f2\froman\fcharset0 Times-Roman;
\f3\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs36 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 3. 
\f1\fs39 TASKS.md
\f0\fs36  (The Project Progress Tracker)\
\pard\pardeftab720\sa240\partightenfactor0

\f2\b0\fs24 \cf0 Your micro-tasking execution ledger containing the critical model-switching milestone gate.\
\pard\pardeftab720\partightenfactor0
\cf0 Markdown\
\
\pard\pardeftab720\partightenfactor0

\f3\fs26 \cf0 # TASKS.md \'97 Project Roadmap & Task Execution\
\
## Phase 1: Environment Initialization & Verification (Use Flash Model)\
- [ ] Verify that the directory tree strictly matches the structure outlined in `ARCHITECTURE.md`.\
- [ ] Parse `DESIGN.md` token values and map them into global CSS custom properties inside `/assets/css/global.css`.\
- [ ] Initialize the baseline language dictionary files (`/locales/de.json` and `/locales/en.json`) with standard navigation and core component keys.\
\
## Phase 2: Modular Page Layouts (Use Flash Model)\
- [ ] Construct the primary Hero section container utilizing native CSS Grid and wrap it in an inline-size container context.\
- [ ] Build the responsive feature/service card wrapper grid using modern `@container` rules instead of viewport media queries.\
- [ ] Implement the clean contact module structure utilizing native semantic form tags and uniform focus rings.\
\
---\
\
\uc0\u9888 \u65039  [MODEL SWITCH MILESTONE] \
- [ ] STOP HERE. Halt execution and prompt the user to change the IDE dropdown model to a Premium Model (e.g., Claude 3.5 Sonnet via OpenRouter) to utilize prompt caching for the advanced programming phases. Do not proceed until the user approves.\
\
---\
\
## Phase 3: Core Engineering Frameworks (Use Premium Model)\
- [ ] Implement the native JavaScript localization routing script (`/assets/js/i18n.js`) to dynamically parse URL paths (`/de/` or `/en/`) and switch context.\
- [ ] Create the global navigation shell (`<nav>`) in `index.html` featuring dynamic language toggle anchors that correctly preserve routing paths.\
- [ ] Set up the dynamic footer component (`<footer>`) utilizing structural localization keys rather than hardcoded string values.\
\
## Phase 4: Motion Design & Premium Interaction (Use Premium Model)\
- [ ] Register the GSAP animation timeline framework inside `/assets/js/app.js` with defensive initialization checks.\
- [ ] Implement a smooth page-entrance transition script utilizing GPU-accelerated transforms (`y`, `opacity`).\
- [ ] Attach high-performance scroll-bound hover/reveal triggers using GSAP's native optimized ticker, including full memory cleanup routines.\
\
## Phase 5: Verification & Quality Auditing\
- [ ] Execute an automated browser-preview sweep to generate desktop and mobile breakpoint screenshots.\
- [ ] Cross-check rendered viewport snapshots against the color, spacing, and typographic guidelines locked in `DESIGN.md`.\
- [ ] Run a final performance, accessibility, and multi-language routing scan prior to locking down the repository milestone.\
}