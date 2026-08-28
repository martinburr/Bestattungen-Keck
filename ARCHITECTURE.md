{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;\f1\froman\fcharset0 TimesNewRomanPSMT;\f2\froman\fcharset0 Times-Roman;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww33660\viewh18660\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
## 2. `ARCHITECTURE.md` (System Structure, Localization, & DX Protocol)\
\
This file commands how the file structure is arranged, manages localized path-based routing, and locks down the agent's persona limits.\
\
```markdown\
# ARCHITECTURE.md \'97 System Structure & Multi-Language Specification\
\
## 1. Directory Tree\
Every project in this boilerplate pipeline must conform to this predictive structure:\
\
\pard\pardeftab720\sa240\partightenfactor0

\f1\fs24 \cf0 \uc0\u9500 \u9472 \u9472 
\f2  /assets/ 
\f1 \uc0\u9474 
\f2  
\f1 \uc0\u9500 \u9472 \u9472 
\f2  /css/ # global.css, components.css 
\f1 \uc0\u9474 
\f2  
\f1 \uc0\u9500 \u9472 \u9472 
\f2  /js/ # app.js, router.js, i18n.js 
\f1 \uc0\u9474 
\f2  
\f1 \uc0\u9492 \u9472 \u9472 
\f2  /images/ # Project visual assets 
\f1 \uc0\u9500 \u9472 \u9472 
\f2  /locales/ 
\f1 \uc0\u9474 
\f2  
\f1 \uc0\u9500 \u9472 \u9472 
\f2  de.json # German dictionary registry 
\f1 \uc0\u9474 
\f2  
\f1 \uc0\u9492 \u9472 \u9472 
\f2  en.json # English dictionary registry 
\f1 \uc0\u9500 \u9472 \u9472 
\f2  index.html # Global entry-point container shell 
\f1 \uc0\u9500 \u9472 \u9472 
\f2  DESIGN.md # Visual design system token rules 
\f1 \uc0\u9492 \u9472 \u9472 
\f2  ARCHITECTURE.md # Technical layout and routing engine rules
\f0\fs26 \
\pard\pardeftab720\partightenfactor0
\cf0 ---\
\
## 2. Multi-Language (i18n) Engine & Routing\
*   **Decoupled JSON Architecture:** No user-facing text strings are permitted directly inside the HTML files. All UI elements must use the translation data attribute format (e.g., `<h1 data-i18n="hero.title"></h1>`).\
*   **URL Parameter Strategy:** Routing is entirely controlled via explicit path subdirectories (`domain.com/de/` or `domain.com/en/`) to ensure users can copy and paste URLs directly into apps like WhatsApp while maintaining their localized language context on arrival.\
*   **Routing Logic:** On initialization, the frontend script (`i18n.js`) parses the URL path segment, flags the language key, loads the respective `/locales/\{lang\}.json` file, and injects translations dynamically.\
\
---\
\
## 3. Performance & Asset Directives\
*   **Zero Event Listeners:** Do not attach custom JS to global window resize loops. Rely on CSS Container Queries for layout adjustment.\
*   **Asset References:** All images must use semantic `alt` descriptions and feature explicit width/height dimensions inside the markup to guarantee zero Cumulative Layout Shift (CLS).\
\
---\
\
## 4. Developer Experience (DX) & AI Workspace Personas\
\
### 4.1 The "Grill Me" Execution Protocol\
When the developer initializes a design phase, stress-tests a component layout, or explicitly states **"grill me"**, **"critique my layout"**, or **"stress-test this"**, the AI Agent must immediately halt code generation and activate the following protocol:\
\
1. **Context Baseline:** Silently index all current directory files, `DESIGN.md` tokens, and `ARCHITECTURE.md` routing principles. Do not ask questions about values already defined in these specs.\
2. **Sequential Interrogation:** Interview the developer relentlessly about their specific layout choice, interactive element, or user flow. \
3. **Pace Control:** Ask questions exactly **ONE AT A TIME**. Do not output lists of questions or overwhelming blocks of text.\
4. **Architectural Guidance:** For every question posed, provide a native, high-performance web recommendation (e.g., favoring the native CSS Popover API, Container Queries, or GPU-accelerated GSAP transformations) to guide the developer toward optimal choices.\
5. **Lock-In:** Once a shared understanding of the component or page layout is reached, summarize the engineering plan and append it as a sub-task directly into `TASKS.md` before writing any code.\
\pard\pardeftab720\partightenfactor0

\f2 \cf0 \
\pard\pardeftab720\partightenfactor0
\cf0 ### 4.2 The "Let's Brainstorm" Location Verification Gate When the developer initializes a new project initialization by explicitly stating **"let's brainstorm"**, the AI Agent must execute this strict metadata sweep before any ideas are discussed: 1. **Token Validation Sweep:** The agent must instantly parse Section 1 of `BRAINSTORM.md`. If the **Target Metropolitan Hub** or **Target Region Code** variables are left blank, unselected, or contain default placeholder brackets like `[...]`, the agent is strictly forbidden from assuming a generic location. 2. **The Missing Location Intercept:** The agent must immediately halt the session and state: *"Before we map out this layout, I noticed the target location details are missing in BRAINSTORM.md. Where is this client located, and which region code (ZA / EU / LATAM / US / APAC) are we targeting?"* 3. **Context Update:** Once the developer provides the location in chat, the agent will update the active workspace memory using the specific regional rules laid out in `BRAINSTORM.md`, and proceed to ask exactly **one strategic content question at a time**.\
\
\pard\pardeftab720\partightenfactor0

\f0 \cf0 ---\
\
## 5. Model Routing & Token Optimization Strategy\
\
To optimize token consumption, prevent context window exhaustion, and maximize prompt caching benefits, the workspace uses a dual-model execution framework:\
\
*   **Scaffolding & Layout Tasks (Fast & Cheap Baseline):** All standard folder setup, HTML skeleton building, structural grid layout, and text configuration must be executed using a **Flash-tier model** (e.g., *Gemini 3.5 Flash*).\
*   **Logic & Animation Tasks (Premium Reasoning):** Complex JavaScript routing, multi-language engine mapping, and intricate GSAP timeline code must be executed using a **Premium-tier model** (e.g., *Claude 3.5 Sonnet* or *Gemini 3.5 Pro* via OpenRouter to leverage Prompt Caching).\
\
### 5.1 The Model Switch Trigger\
The agent is forbidden from automatically processing Phase 3 and Phase 4 of the roadmap without first prompting the developer to change the active IDE model dropdown. It must explicitly state: *"Structural phase complete. Please switch the model dropdown to a Premium Model to utilize prompt caching for the upcoming logic/animation phase."*\
\
\'97\'97-\
\
## 6. Comprehensive Global SEO Optimization Architecture\
\
### 6.1 Semantic Document Tree & Keyword Hierarchy\
*   **Strict Heading Cascade:** Every one-pager must contain exactly ONE semantic `<h1>` tag matching the primary target locale\'92s search keyword string. Sub-sections must follow a logical, cascading nested order (`<h2>` for major sections, `<h3>` for feature descriptions). Headings must never skip levels (e.g., jumping from `<h2>` directly to `<h4>`) for stylistic or sizing convenience.\
*   **Text Scannability over Graphical Text:** All primary value statements, titles, and call-to-actions must render as raw, selectable, crawlable DOM text. Embedding text within images or rendering critical content strictly via canvas or heavy JS animations without fallback text layouts is strictly prohibited.\
*   **Semantic Container Tags:** Layout segments must utilize standard HTML5 semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section id="...">`, `<article>`, `<footer>`) rather than generic `<div>` stacks. This allows search engine crawlers to accurately weigh content importance.\
\
### 6.2 Multilingual SEO & Internationalization Routing (Hreflang)\
*   **The Head Engine Configuration:** For every localized version, the `<head>` of the page must automatically structure localized index declarations to prevent duplicate-content indexing penalties:\
```html\
    <!-- Example context configuration for a multi-language setup -->\
    <link rel="canonical" href="[https://yourdomain.com/de/](https://yourdomain.com/de/)">\
    <link rel="alternate" hreflang="de" href="[https://yourdomain.com/de/](https://yourdomain.com/de/)">\
    <link rel="alternate" hreflang="en" href="[https://yourdomain.com/en/](https://yourdomain.com/en/)">\
    <link rel="alternate" hreflang="pt" href="[https://yourdomain.com/pt/](https://yourdomain.com/pt/)">\
    <link rel="alternate" hreflang="x-default" href="[https://yourdomain.com/de/](https://yourdomain.com/de/)">\
    ```\
*   **Dynamic Document Lang Modification:** The localization engine (`router.js`) must inject the active language string directly into the root tag on runtime loading (`document.documentElement.lang = this.currentLanguage;`), allowing crawlers to instantly identify target user demographics.\
\
### 6.3 Technical Performance & Core Web Vitals Safeguards\
*   **Cumulative Layout Shift (CLS) Mitigation:** Every image asset (`<img>`) and interactive iframe must include explicit width and height aspect-ratio attributes (`width="..." height="..."`) directly in the markup. This forces the browser to reserve the exact pixel footprint before the asset loads, eliminating layout jumps during rendering.\
*   **Asset Loading Prioritization:** Hero images or top-of-the-fold banners must be assigned a `fetchpriority="high"` attribute to maximize Largest Contentful Paint (LCP) speeds. All below-the-fold images and secondary assets must use explicit `loading="lazy"` attributes.\
*   **External CDN Header Optimizations:** All external JS and design framework delivery systems (such as GSAP or Google Font links) must include native browser hinting elements to dramatically reduce initial server response times:\
```html\
    <link rel="preconnect" href="[https://cdnjs.cloudflare.com](https://cdnjs.cloudflare.com)">\
    ```\
\
### 6.4 Metadata, Open Graph (Social SEO), & Structured JSON-LD Data\
*   **Meta Content Triggers:** The `<head>` configuration must feature explicit layout strings for page description and title tags, constrained tightly to optimal search engine clipping parameters:\
    *   Title: Between 50\'9660 characters max.\
    *   Description: Between 150\'96160 characters max.\
*   **Open Graph & Meta Tags:** Social sharing layouts must be built cleanly into the document structure for maximum click-through rates across messaging channels (like WhatsApp, LinkedIn, or Telegram):\
```html\
    <meta property="og:type" content="website">\
    <meta property="og:title" content="[Localized Title String]">\
    <meta property="og:description" content="[Localized Description String]">\
    <meta property="og:image" content="[https://yourdomain.com/assets/images/og-share.jpg](https://yourdomain.com/assets/images/og-share.jpg)">\
    <meta property="og:url" content="[https://yourdomain.com/](https://yourdomain.com/)">\
    ```\
*   **Structured JSON-LD Schema Markups:** The HTML shell must contain an automated, crawlable `<script type="application/ld+json">` configuration block. Depending on the active tokens selected in `BRAINSTORM.md`, the AI must inject either `LocalBusiness`, `ProfessionalService`, or `ConsultingService` schema types, ensuring the client's city, operating region, and contact methods map cleanly directly into Google\'92s Knowledge Graph.\
}