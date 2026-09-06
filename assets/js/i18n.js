/**
 * i18n Translation Engine - Bestattungen Joachim Keck
 */

class I18nEngine {
  constructor() {
    this.currentLang = localStorage.getItem('keck_lang') || 'de';
    this.translations = {};
    this.init();
  }

  async init() {
    await this.loadLanguage(this.currentLang);
    this.bindLanguageSwitcher();
  }

  async loadLanguage(lang) {
    try {
      const response = await fetch(`./locales/${lang}.json`);
      if (!response.ok) throw new Error(`Could not load ${lang}.json`);
      this.translations = await response.json();
      this.currentLang = lang;
      localStorage.setItem('keck_lang', lang);
      document.documentElement.lang = lang;
      this.applyTranslations();
      this.updateActiveButtons();
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    } catch (err) {
      console.warn('i18n load error, falling back:', err);
    }
  }

  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const val = this.getNestedValue(this.translations, keyPath);
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.innerHTML = val;
        }
      }
    });
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
  }

  t(keyPath, fallback = '') {
    const val = this.getNestedValue(this.translations, keyPath);
    return val !== null && val !== undefined ? val : fallback;
  }

  bindLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        if (lang && lang !== this.currentLang) {
          this.loadLanguage(lang);
        }
      });
    });
  }

  updateActiveButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18nEngine();
});
