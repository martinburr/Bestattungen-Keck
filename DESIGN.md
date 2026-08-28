{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier-Bold;\f1\froman\fcharset0 Times-Bold;\f2\froman\fcharset0 Times-Roman;
\f3\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid1\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid1}
{\list\listtemplateid2\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid101\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid2}
{\list\listtemplateid3\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{disc\}}{\leveltext\leveltemplateid201\'01\uc0\u8226 ;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid3}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}{\listoverride\listid2\listoverridecount0\ls2}{\listoverride\listid3\listoverridecount0\ls3}}
\paperw11900\paperh16840\margl1440\margr1440\vieww33660\viewh18680\viewkind0
\deftab720
\pard\pardeftab720\sa298\partightenfactor0

\f0\b\fs39 \cf0 \expnd0\expndtw0\kerning0
DESIGN.md
\f1\fs36  (The Visual & Style Rulebook)\
\pard\pardeftab720\sa240\partightenfactor0

\f2\b0\fs24 \cf0 This file anchors the global design system tokens and enforces modern native CSS layout standards.\
\pard\pardeftab720\partightenfactor0
\cf0 Markdown\
\
\pard\pardeftab720\partightenfactor0

\f3\fs26 \cf0 # DESIGN.md \'97 Master Web Design & Token Specification\
\
## 1. Project Architecture & Technical Stack\
*   **Engine:** Pure Vanilla HTML5, native CSS3, and ES6+ JavaScript.\
*   **Layout Strategy:** Modern CSS Container Queries combined with CSS Grid and Flexbox layouts.\
*   **Banned Frameworks:** No Tailwind, Bootstrap, or heavy JS layout engines allowed unless explicitly overridden.\
*   **Animation Stack:** GSAP (GreenSock Animation Platform) for timeline coordination; native CSS Transitions for micro-interactions.\
\
---\
\
## 2. Global Design System (Design Tokens)\
\
### 2.1 Color Palette\
```css\
:root \{\
  /* Core Neutrals */\
  --color-bg-main:        #FFFFFF;\
  --color-bg-surface:     #F8F9FA;\
  --color-text-main:      #1F2937;\
  --color-text-muted:     #4B5563;\
\
  /* Accent & Brand Tokens (To be adjusted per project) */\
  --color-primary:        #0D1B2A; \
  --color-secondary:      #415A77; \
  --color-accent:         #E0E1DD; \
  \
  /* System States */\
  --color-interactive:    #778DA9; \
  --color-success:        #2A9D8F;\
  --color-error:          #E63946;\
\}\
\
\pard\pardeftab720\sa280\partightenfactor0

\f1\b\fs28 \cf0 ### 2.2 Typography & Spacing\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls1\ilvl0
\fs24 \cf0 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Fonts:
\f2\b0  System-UI Sans-Serif (
\f3\fs26 -apple-system
\f2\fs24 , 
\f3\fs26 BlinkMacSystemFont
\f2\fs24 , 
\f3\fs26 Segoe UI
\f2\fs24 , 
\f3\fs26 Roboto
\f2\fs24 ) for optimal rendering performance.\
\ls1\ilvl0
\f1\b \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Spacing Unit:
\f2\b0  8px Base. Scale: 
\f3\fs26 --space-xs
\f2\fs24 : 8px | 
\f3\fs26 --space-sm
\f2\fs24 : 16px | 
\f3\fs26 --space-md
\f2\fs24 : 24px | 
\f3\fs26 --space-lg
\f2\fs24 : 48px | 
\f3\fs26 --space-xl
\f2\fs24 : 84px.\
\ls1\ilvl0
\f1\b \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Max Layout Constraint:
\f2\b0  Max-width content bound is 
\f3\fs26 1440px
\f2\fs24  with a default 
\f3\fs26 1200px
\f2\fs24  content grid.\
\pard\pardeftab720\sa298\partightenfactor0

\f1\b\fs36 \cf0 ## 3. Layout & Component Guardrails\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls2\ilvl0
\fs24 \cf0 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Container Queries:
\f2\b0  Components (cards, banners, navigation blocks) must be declared with 
\f3\fs26 container-type: inline-size
\f2\fs24 . Component styles must utilize 
\f3\fs26 @container
\f2\fs24  rules instead of global screen media queries (
\f3\fs26 @media
\f2\fs24 ).\
\ls2\ilvl0
\f1\b \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Structural Semantics:
\f2\b0  Always use native semantic HTML5 tags (
\f3\fs26 <header>
\f2\fs24 , 
\f3\fs26 <nav>
\f2\fs24 , 
\f3\fs26 <main>
\f2\fs24 , 
\f3\fs26 <section>
\f2\fs24 , 
\f3\fs26 <footer>
\f2\fs24 ). Unsemantic 
\f3\fs26 <div>
\f2\fs24  nesting must be avoided.\
\ls2\ilvl0
\f1\b \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Layering Map (z-index):
\f2\b0  Sticky Navigation: 100 | Modal Overlay: 900 | Modal Content: 1000.\
\pard\pardeftab720\sa298\partightenfactor0

\f1\b\fs36 \cf0 ## 4. Motion & Animation Guardrails (GSAP)\
\pard\tx220\tx720\pardeftab720\li720\fi-720\sa240\partightenfactor0
\ls3\ilvl0
\fs24 \cf0 \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
GPU Acceleration Only:
\f2\b0  Animations must exclusively manipulate 
\f3\fs26 transform
\f2\fs24  variants (
\f3\fs26 x
\f2\fs24 , 
\f3\fs26 y
\f2\fs24 , 
\f3\fs26 scale
\f2\fs24 , 
\f3\fs26 rotation
\f2\fs24 ) and 
\f3\fs26 opacity
\f2\fs24 . Animating properties that trigger browser paint/layout shifts (
\f3\fs26 height
\f2\fs24 , 
\f3\fs26 width
\f2\fs24 , 
\f3\fs26 top
\f2\fs24 , 
\f3\fs26 margin
\f2\fs24 ) is strictly forbidden.\
\ls3\ilvl0
\f1\b \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
Memory Management:
\f2\b0  All GSAP timelines bound to ScrollTrigger must be cleaned up natively using 
\f3\fs26 gsap.context()
\f2\fs24  or clear 
\f3\fs26 kill()
\f2\fs24  callbacks to prevent memory bloat during component switching.\
\ls3\ilvl0
\f1\b \kerning1\expnd0\expndtw0 {\listtext	\uc0\u8226 	}\expnd0\expndtw0\kerning0
No Global Listeners:
\f2\b0  Do not bind code loops to 
\f3\fs26 window.onscroll
\f2\fs24 . Use GSAP\'92s internal ticker or native 
\f3\fs26 IntersectionObserver
\f2\fs24  elements.\
\pard\pardeftab720\partightenfactor0

\f1\b\fs36 \cf0 \outl0\strokewidth0 \strokec2 ## 5. Comprehensive Accessibility (a11y) & Assistive Technology Guardrails 
\f2\b0\fs26 \
\
### 5.1 Visual & Sensory Architecture (WCAG 2.2 AA Compliance) \
*  **Contrast Ratios:** Text and critical user interface components (such as input borders, control states, and icons) must maintain a minimum contrast ratio of 4.5:1 against their backgrounds. Large text (above 18pt or 14pt bold) must maintain a minimum of 3:1. *  **Color-Independent Design:** Color must never be used as the *sole* visual means of conveying information, indicating an action, prompting a response, or distinguishing a structural element. Errors, success states, and links must be accompanied by text indicators, shapes, or persistent text decorations (e.g., underlines). *  **Typography & Fluid Scaling:** Font sizes must use relative units (`rem` or `em`), never hard pixels (`px`). The layout structure must allow users to zoom text up to 200% via browser controls without causing text overlaps, clipping container clipping, or destroying layout reading order. Minimum readable body text must scale from a base of 1rem (16px). \
\
### 5.2 Interactive Control & Keyboard Engineering\
 *  **Full Keyboard Operability:** Every interactive element (`<a>`, `<button>`, `<input>`, select dropdowns) must be completely accessible and fully functional via standard keyboard navigation (`Tab`, `Shift + Tab`, `Enter`, `Space`, and Arrow keys). *  **Visible Focus States:** Every interactive control must feature a highly visible, custom focus ring using the CSS `:focus-visible` pseudo-class. Setting `outline: none` or `outline: 0` without initializing a distinct, high-contrast, non-color-dependent custom focus indicator is strictly forbidden. *  **Logical Focus Order:** As a user tabs through the one-pager, the focus indicator must move sequentially down the semantic layout grid exactly as it reads visually. If dynamic elements (like modulations, tabs, or mobile navigation overlays) are opened, the keyboard focus must be trapped inside that active component and return cleanly to the triggering button once closed. *  **Target Sizing:** All touch and click targets (interactive buttons, language switch buttons, links) must have a minimum interactive surface dimension of **44 x 44 CSS pixels** (except for inline textual links within sentences) to accommodate users with limited motor control. \
\
### 5.3 Cognitive, Motion, & Media Guardrails\
 *  **Reduced Motion Contexts:** All complex or layout-shifting GSAP scrolling timelines, parallax effects, or structural scaling transitions must check and respect system-level user preferences. Wrap all kinetic mechanics in a native CSS media query or handle inside the JavaScript initialization: ```css @media (prefers-reduced-motion: reduce) \{ /* Permanently disable layout position shifts, heavy zooms, and rapid transitions. */ /* Revert to simple, immediate opacities (fade-ins) only. */ \} ``` *  **Auto-Play Prevention:** Video background tracks or sliding banner animations must never play automatically unless a prominent, highly accessible "Pause / Play" button is placed at the very top of the parent container frame. Loop counts must be capped or completely static if a pause switch is absent. *  **Time-Independent Content:** Avoid any elements that require rapid user responses or feature rigid time limits. Slideshow carousels must not auto-rotate or advance without user interaction while a keyboard focus or mouse hover is active within the component zone. \
\
### 5.4 Screen Reader Synchronization & Content Scannability\
 *  **Semantic Asset Labeling (Alt Text Engine):** *  *Informational Images:*Must include a descriptive `alt` attribute string that conveys the exact contextual meaning and intent of the photo, translated to match the active language JSON dictionary block. *  *Decorative Assets:* Graphic shapes, abstract patterns, decorative dividers, or double-layered background vector images must use an explicit empty attribute (`alt=""`). This instructs screen readers to skip the asset entirely instead of reading out filename text strings. *  **Screen Reader Only Shortcuts:** An invisible skip link container must be implemented as the very first structural element within the `index.html` body shell: ```html <a href="#main-content" class="skip-to-content">Skip to main content</a> ``` *(Styled in global.css to remain visually hidden off-screen until it receives active keyboard tab focus).*}