{\rtf1\ansi\ansicpg1252\cocoartf2870
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Bold;\f1\fmodern\fcharset0 Courier-Bold;\f2\froman\fcharset0 Times-Roman;
\f3\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww33660\viewh18700\viewkind0
\deftab720
\pard\pardeftab720\sa280\partightenfactor0

\f0\b\fs28 \cf0 \expnd0\expndtw0\kerning0
6. 
\f1\fs30\fsmilli15210 /assets/js/router.js
\f0\fs28  (The Path-Based i18n Controller)\
\pard\pardeftab720\sa240\partightenfactor0

\f2\b0\fs24 \cf0 Create this file inside 
\f3\fs26 /assets/js/
\f2\fs24 . This is the lightweight script that checks the URL path (e.g., 
\f3\fs26 /de/
\f2\fs24  or 
\f3\fs26 /en/
\f2\fs24 ), reads your localized JSON dictionary files, and injects the text instantly without refreshing the page or using a framework.\
\pard\pardeftab720\partightenfactor0
\cf0 JavaScript\
\
\pard\pardeftab720\partightenfactor0

\f3\fs26 \cf0 class LanguageRouter \{\
    constructor() \{\
        // Enforces valid language routing states including German, English, and Portuguese\
        this.supportedLanguages = ['de', 'en', 'pt'];\
        this.defaultLanguage = 'de';\
        this.currentLanguage = this.detectLanguage();\
        this.init();\
    \}\
\
    detectLanguage() \{\
        const pathSegments = window.location.pathname.split('/');\
        const pathLang = pathSegments[1]; // Extracts the primary locale directory string\
        \
        if (this.supportedLanguages.includes(pathLang)) \{\
            return pathLang;\
        \}\
        return this.defaultLanguage;\
    \}\
\
    async loadTranslations(lang) \{\
        try \{\
            const response = await fetch(`/locales/$\{lang\}.json`);\
            if (!response.ok) throw new Error(`Could not load translations for locale: $\{lang\}`);\
            return await response.json();\
        \} catch (error) \{\
            console.error("i18n Engine Core Error:", error);\
            return null;\
        \}\
    \}\
\
    async translatePage() \{\
        const translations = await this.loadTranslations(this.currentLanguage);\
        if (!translations) return;\
\
        // 1. Scans the active DOM node tree for translation keys (Head tags + Body content)\
        document.querySelectorAll('[data-i18n], title[data-i18n]').forEach(element => \{\
            const keyPath = element.getAttribute('data-i18n');\
            const translation = keyPath.split('.').reduce((obj, key) => obj?.[key], translations);\
            \
            if (translation) \{\
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') \{\
                    element.placeholder = translation;\
                \} else \{\
                    element.textContent = translation;\
                \}\
            \}\
        \});\
\
        // 2. Configures document meta attributes dynamically for native SEO crawlers\
        document.documentElement.lang = this.currentLanguage;\
        \
        // 3. Dynamic Technical SEO Head Fix: Keeps canonical tags aligned with user states\
        const canonical = document.querySelector('link[rel="canonical"]');\
        if (canonical) \{\
            canonical.setAttribute('href', `$\{window.location.origin\}/$\{this.currentLanguage\}/`);\
        \}\
\
        this.updateActiveUIButtons();\
    \}\
\
    updateActiveUIButtons() \{\
        document.querySelectorAll('.lang-btn').forEach(btn => \{\
            // Accessibility Synchronization: Sets semantic click indicators for screen readers\
            btn.classList.remove('active');\
            btn.setAttribute('aria-selected', 'false');\
        \});\
        \
        const activeBtn = document.getElementById(`lang-$\{this.currentLanguage\}`);\
        if (activeBtn) \{\
            activeBtn.classList.add('active');\
            activeBtn.setAttribute('aria-selected', 'true');\
        \}\
    \}\
\
    init() \{\
        document.addEventListener('DOMContentLoaded', () => this.translatePage());\
        \
        // Intercepts switcher link nodes and overrides standard transitions to preserve path state\
        document.querySelectorAll('.lang-btn').forEach(btn => \{\
            btn.addEventListener('click', (e) => \{\
                e.preventDefault();\
                const targetLang = btn.id.split('-')[1];\
                if (targetLang !== this.currentLanguage) \{\
                    window.history.pushState(\{\}, '', `/$\{targetLang\}/`);\
                    this.currentLanguage = targetLang;\
                    this.translatePage();\
                \}\
            \});\
        \});\
    \}\
\}\
\
export const router = new LanguageRouter();}