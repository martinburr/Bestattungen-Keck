/**
 * Bestattungen Joachim Keck - Multilingual Interactive Cost Calculator (DE, EN, RU)
 * Handles step navigation, transparent pricing calculations, and multilingual quote generation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const calcContainer = document.getElementById('cost-calculator');
  if (!calcContainer) return;

  // Base state
  let currentStep = 1;
  let selectedBurialId = 'fire';
  let selectedExtraIds = ['abmeldung'];

  const dict = {
    de: {
      steps: ['1. Bestattungsart', '2. Zusatzleistungen', '3. Zusammenfassung'],
      estimateLabel: 'Geschätzter Richtwert (zzgl. Friedhofsgebühren)',
      backBtn: 'Zurück',
      nextBtn: 'Weiter',
      quoteBtn: 'Angebot anfordern',
      step1Title: 'Wählen Sie die gewünschte Bestattungsart:',
      step1Lead: 'Transparente Grundpreise inklusive Überführung, Versorgung & Standard-Ausführung.',
      step2Title: 'Optionale Zusatzleistungen auswählen:',
      step2Lead: 'Wählen Sie Bausteine zur individuellen Entlastung & Gestaltung.',
      step3Title: 'Ihre Zusammenfassung:',
      step3Lead: 'Vielen Dank! Hier ist Ihre unverbindliche Kostenschätzung:',
      freeText: 'Inklusive / Kostenlos',
      burials: {
        fire: { title: 'Feuerbestattung', desc: 'Einäscherung & Urnenbeisetzung', price: 1450 },
        earth: { title: 'Erdbestattung', desc: 'Klassische Beisetzung im Sarg', price: 1850 },
        tree: { title: 'Baumbestattung', desc: 'Naturnahe Urnenbeisetzung im Wald', price: 1650 },
        sea: { title: 'Seebestattung', desc: 'Würdevolle Beisetzung auf See', price: 1790 }
      },
      extras: {
        abmeldung: { title: 'Abmeldeservice & Behördengänge', desc: 'Abmeldung von Rentenkasse, Krankenkasse & Verträgen', price: 150 },
        ceremony: { title: 'Persönliche Trauerfeier', desc: 'Organisation & Musikanlage', price: 450 },
        printing: { title: 'Trauerdrucksachen', desc: 'Karten & Danksagungen', price: 220 },
        speaker: { title: 'Freie Trauerrede', desc: 'Einfühlsame, individuelle Rede', price: 380 },
        flowers: { title: 'Blumenschmuck Arrangement', desc: 'Dekoration & Gestecke', price: 190 },
        clearance: { title: 'Wohnungsauflösung Beratung', desc: 'Kostenlose Erstberatung', price: 0 }
      }
    },
    en: {
      steps: ['1. Burial Type', '2. Additional Services', '3. Summary'],
      estimateLabel: 'Estimated Guideline Price (excl. cemetery fees)',
      backBtn: 'Back',
      nextBtn: 'Next',
      quoteBtn: 'Request Quote',
      step1Title: 'Select your preferred burial type:',
      step1Lead: 'Transparent base prices including transfer, care & standard execution.',
      step2Title: 'Select optional additional services:',
      step2Lead: 'Choose modules for individual relief and customization.',
      step3Title: 'Your Cost Summary:',
      step3Lead: 'Thank you! Here is your non-binding cost estimate:',
      freeText: 'Included / Free',
      burials: {
        fire: { title: 'Cremation Service', desc: 'Cremation & urn burial', price: 1450 },
        earth: { title: 'Traditional Burial', desc: 'Classic in-ground coffin burial', price: 1850 },
        tree: { title: 'Forest Burial', desc: 'Eco-friendly woodland urn burial', price: 1650 },
        sea: { title: 'Sea Burial', desc: 'Dignified burial at sea', price: 1790 }
      },
      extras: {
        abmeldung: { title: 'Formal Deregistration Service', desc: 'Deregistration from pensions, health insurance & contracts', price: 150 },
        ceremony: { title: 'Personal Funeral Service', desc: 'Organization & audio equipment', price: 450 },
        printing: { title: 'Mourning Printing', desc: 'Cards & thank-you notes', price: 220 },
        speaker: { title: 'Personal Funeral Eulogist', desc: 'Empathetic, individual eulogy', price: 380 },
        flowers: { title: 'Floral Arrangement', desc: 'Decoration & bouquets', price: 190 },
        clearance: { title: 'Estate Clearance Consultation', desc: 'Free initial consultation', price: 0 }
      }
    },
    ru: {
      steps: ['1. Вид погребения', '2. Доп. услуги', '3. Итоговый расчет'],
      estimateLabel: 'Ориентировочная стоимость (без учета кладбищенских сборов)',
      backBtn: 'Назад',
      nextBtn: 'Далее',
      quoteBtn: 'Запросить расчет',
      step1Title: 'Выберите желаемый вид погребения:',
      step1Lead: 'Прозрачные базовые цены, включая транспортировку, подготовку и стандартное оформление.',
      step2Title: 'Выберите дополнительные услуги:',
      step2Lead: 'Выберите опции для индивидуального ухода и организации.',
      step3Title: 'Ваш итоговый расчет:',
      step3Lead: 'Спасибо! Вот ваш предварительный ориентировочный расчет:',
      freeText: 'Включено / Бесплатно',
      burials: {
        fire: { title: 'Кремация', desc: 'Кремация и захоронение урны', price: 1450 },
        earth: { title: 'Традиционное погребение', desc: 'Классическое захоронение гроба в землю', price: 1850 },
        tree: { title: 'Захоронение в лесу', desc: 'Экологичное захоронение урны под деревом', price: 1650 },
        sea: { title: 'Морское захоронение', desc: 'Достойное захоронение урны в море', price: 1790 }
      },
      extras: {
        abmeldung: { title: 'Оформление документов и уведомление инстанций', desc: 'Уведомление пенсионного фонда, кассы страхования и расторжение договоров', price: 150 },
        ceremony: { title: 'Личная прощальная церемония', desc: 'Организация и музыкальное сопровождение', price: 450 },
        printing: { title: 'Траурная полиграфия', desc: 'Памятные открытки и благодарственные письма', price: 220 },
        speaker: { title: 'Ведущий прощальной речи', desc: 'Душевная индивидуальная речь', price: 380 },
        flowers: { title: 'Цветочное оформление', desc: 'Декор и ритуальные венки', price: 190 },
        clearance: { title: 'Консультация по освобождению квартиры', desc: 'Бесплатная первичная консультация', price: 0 }
      }
    }
  };

  function getLang() {
    return localStorage.getItem('keck_lang') || 'de';
  }

  function getDict() {
    return dict[getLang()] || dict.de;
  }

  function calculateTotal() {
    const d = getDict();
    let sum = d.burials[selectedBurialId] ? d.burials[selectedBurialId].price : 1450;
    selectedExtraIds.forEach(id => {
      if (d.extras[id]) sum += d.extras[id].price;
    });
    return sum;
  }

  function renderCalculator() {
    const d = getDict();
    const total = calculateTotal();
    
    calcContainer.innerHTML = `
      <div class="calculator-box">
        <div class="calc-steps">
          <div class="calc-step-item ${currentStep >= 1 ? 'active' : ''}">${d.steps[0]}</div>
          <div class="calc-step-item ${currentStep >= 2 ? 'active' : ''}">${d.steps[1]}</div>
          <div class="calc-step-item ${currentStep >= 3 ? 'active' : ''}">${d.steps[2]}</div>
        </div>

        ${currentStep === 1 ? renderStep1(d) : ''}
        ${currentStep === 2 ? renderStep2(d) : ''}
        ${currentStep === 3 ? renderStep3(d) : ''}

        <div class="calc-total-bar">
          <div>
            <span style="font-size: 0.85rem; opacity: 0.8; display: block;">${d.estimateLabel}</span>
            <span class="calc-price-display">ab € ${total.toLocaleString('de-DE')},-</span>
          </div>
          <div style="display: flex; ${currentStep === 3 ? 'flex-direction: column; width: 100%; max-width: 280px;' : ''} gap: 0.6rem;">
            ${currentStep > 1 ? `<button class="btn btn-outline" style="color:#FFF; border-color:rgba(255,255,255,0.4); justify-content:center;" id="calc-prev">${d.backBtn}</button>` : ''}
            ${currentStep < 3 ? `<button class="btn" style="background:var(--color-accent); color:var(--color-primary-dark); font-weight:700; justify-content:center;" id="calc-next">${d.nextBtn}</button>` : ''}
            ${currentStep === 3 ? `<a href="#kontakt" class="btn" style="background:var(--color-accent); color:var(--color-primary-dark); font-weight:700; justify-content:center; text-align:center;">${d.quoteBtn}</a>` : ''}
          </div>
        </div>
      </div>
    `;

    attachEvents();
  }

  function renderStep1(d) {
    return `
      <h3 style="margin-bottom:0.5rem;">${d.step1Title}</h3>
      <p style="font-size:0.9rem; margin-bottom:1rem;">${d.step1Lead}</p>
      <div class="calc-option-grid">
        ${Object.keys(d.burials).map(id => {
          const opt = d.burials[id];
          return `
            <div class="calc-option ${selectedBurialId === id ? 'selected' : ''}" data-burial-id="${id}">
              <h4>${opt.title}</h4>
              <div class="price-hint">ab € ${opt.price.toLocaleString('de-DE')},-</div>
              <p style="font-size:0.8rem; margin-top:0.4rem;">${opt.desc}</p>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderStep2(d) {
    return `
      <h3 style="margin-bottom:0.5rem;">${d.step2Title}</h3>
      <p style="font-size:0.9rem; margin-bottom:1rem;">${d.step2Lead}</p>
      <div class="calc-option-grid">
        ${Object.keys(d.extras).map(id => {
          const opt = d.extras[id];
          const isSelected = selectedExtraIds.includes(id);
          return `
            <div class="calc-option ${isSelected ? 'selected' : ''}" data-extra-id="${id}">
              <h4>${opt.title}</h4>
              <div class="price-hint">${opt.price > 0 ? '+ € ' + opt.price + ',-' : d.freeText}</div>
              <p style="font-size:0.8rem; margin-top:0.4rem;">${opt.desc}</p>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function renderStep3(d) {
    const selectedBurial = d.burials[selectedBurialId];
    return `
      <h3 style="margin-bottom:0.5rem;">${d.step3Title}</h3>
      <p style="font-size:0.9rem; margin-bottom:1rem;">${d.step3Lead}</p>

      <div style="background:var(--color-bg-main); padding:1rem; border-radius:var(--radius-sm); margin-bottom:1rem; border:1px solid var(--color-border);">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-weight:700;">
          <span>${selectedBurial.title}</span>
          <span>€ ${selectedBurial.price},-</span>
        </div>
        ${selectedExtraIds.map(id => {
          const ext = d.extras[id];
          return `
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:var(--color-text-muted); margin-bottom:0.3rem;">
              <span>+ ${ext.title}</span>
              <span>${ext.price > 0 ? '€ ' + ext.price + ',-' : d.freeText}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function attachEvents() {
    const burialOpts = calcContainer.querySelectorAll('[data-burial-id]');
    burialOpts.forEach(el => {
      el.addEventListener('click', () => {
        selectedBurialId = el.getAttribute('data-burial-id');
        renderCalculator();
      });
    });

    const extraOpts = calcContainer.querySelectorAll('[data-extra-id]');
    extraOpts.forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-extra-id');
        if (selectedExtraIds.includes(id)) {
          selectedExtraIds = selectedExtraIds.filter(item => item !== id);
        } else {
          selectedExtraIds.push(id);
        }
        renderCalculator();
      });
    });

    const nextBtn = document.getElementById('calc-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < 3) {
          currentStep++;
          renderCalculator();
        }
      });
    }

    const prevBtn = document.getElementById('calc-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          renderCalculator();
        }
      });
    }
  }

  window.addEventListener('languageChanged', () => {
    renderCalculator();
  });

  renderCalculator();
});
