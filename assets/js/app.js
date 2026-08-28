/**
 * App Main Script, Accordion Drawers, Tabbed Gedenkportal, Virtual Candles & Digitales Kondolenzbuch - Bestattungen Keck
 */

document.addEventListener('DOMContentLoaded', () => {
  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    gsap.from('.hero-content', {
      opacity: 0,
      y: 25,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.from('.dual-card-container', {
      opacity: 0,
      y: 35,
      duration: 1.2,
      delay: 0.2,
      ease: 'power2.out'
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle') || document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ==========================================================================
  // BURIAL CARDS EXPANDABLE ACCORDIONS (IDEE 1)
  // ==========================================================================

  const toggleDetailBtns = document.querySelectorAll('.toggle-detail-btn');

  toggleDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const drawer = document.getElementById(targetId);
      const arrow = btn.querySelector('.arrow-icon');

      if (!drawer) return;

      const isOpen = drawer.classList.contains('open');

      // Close all drawers & reset buttons first
      document.querySelectorAll('.burial-detail-drawer').forEach(d => {
        d.classList.remove('open');
      });
      toggleDetailBtns.forEach(b => {
        const a = b.querySelector('.arrow-icon');
        if (a) a.textContent = '↓';
        b.style.borderColor = 'var(--color-border)';
      });

      // If the clicked drawer wasn't open, open it now
      if (!isOpen) {
        drawer.classList.add('open');
        if (arrow) arrow.textContent = '↑';
        btn.style.borderColor = 'var(--color-primary)';
      }
    });
  });

  // ==========================================================================
  // GEDENKPORTAL TABS CONTROL
  // ==========================================================================

  const tabBtns = document.querySelectorAll('.gedenk-tab-btn');
  const tabContents = document.querySelectorAll('.gedenk-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // ==========================================================================
  // SYSTEM 1: VIRTUELLE KERZEN
  // ==========================================================================

  const defaultCandles = [
    {
      id: 'c1',
      deceased: 'Oma Maria K.',
      author: 'Familie Keck & Enkel',
      message: '„Du bist nicht mehr da, wo du warst – aber du bist überall, wo wir sind.“',
      time: 'vor 2 Stunden'
    },
    {
      id: 'c2',
      deceased: 'Hans-Peter M.',
      author: 'Freunde aus Schwelm',
      message: '„In stillem Gedenken an einen wunderbaren Nachbarn und Freund.“',
      time: 'vor 5 Stunden'
    },
    {
      id: 'c3',
      deceased: 'In stillem Gedenken an alle Verstorbenen',
      author: 'Anonym',
      message: '„Möge euer Licht ewig in unseren Herzen weiterleuchten.“',
      time: 'vor 1 Tag'
    }
  ];

  let candles = JSON.parse(localStorage.getItem('keck_lit_candles')) || defaultCandles;

  const candleWall = document.getElementById('candle-wall');
  const candleCountNum = document.getElementById('candle-count-num');
  const candleModal = document.getElementById('candle-modal');
  const openCandleModalBtn = document.getElementById('open-candle-modal');
  const closeCandleModalBtn = document.getElementById('close-candle-modal');
  const candleForm = document.getElementById('candle-form');

  function renderCandleWall() {
    if (!candleWall) return;

    if (candleCountNum) {
      candleCountNum.textContent = candles.length;
    }

    candleWall.innerHTML = candles.map(c => `
      <div class="tribute-card" id="candle-card-${c.id}">
        <div class="candle-glow-container">
          <div class="flame-element"></div>
          <div class="candle-wick"></div>
          <div class="candle-body"></div>
        </div>

        <div style="text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
          <h3 style="font-size: 1.2rem; color: var(--color-primary-dark); margin-bottom: 0.3rem;">
            ${escapeHtml(c.deceased)}
          </h3>
          <p style="font-size: 0.9rem; font-style: italic; color: var(--color-text-muted); margin-bottom: 1rem;">
            ${escapeHtml(c.message)}
          </p>
        </div>

        <div style="border-top: 1px solid var(--color-border); padding-top: 0.6rem; display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--color-text-light);">
          <span>🕯️ Von: <strong>${escapeHtml(c.author)}</strong></span>
          <span>${escapeHtml(c.time)}</span>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // SYSTEM 2: DIGITALES KONDOLENZBUCH
  // ==========================================================================

  const defaultKondolenz = [
    {
      id: 'k1',
      deceased: 'Karl-Heinz Becker',
      author: 'Familie Hoffmann (Schwelm)',
      message: 'Mit großem Bedauern haben wir vom Heimgang erfahren. In diesen schweren Stunden sind wir in Gedanken und Gebeten bei euch.',
      date: '28. August 2026'
    },
    {
      id: 'k2',
      deceased: 'Helga Neumann',
      author: 'Ehemalige Arbeitskollegen',
      message: 'Wir werden Deine Herzlichkeit, Deinen Humor und Deine Hilfsbereitschaft nie vergessen. Ruhe in Frieden.',
      date: '27. August 2026'
    }
  ];

  let kondolenzEntries = JSON.parse(localStorage.getItem('keck_kondolenz_entries')) || defaultKondolenz;

  const kondolenzList = document.getElementById('kondolenz-list');
  const kondolenzCountNum = document.getElementById('kondolenz-count-num');
  const kondolenzModal = document.getElementById('kondolenz-modal');
  const openKondolenzModalBtn = document.getElementById('open-kondolenz-modal');
  const closeKondolenzModalBtn = document.getElementById('close-kondolenz-modal');
  const kondolenzForm = document.getElementById('kondolenz-form');

  function renderKondolenzList() {
    if (!kondolenzList) return;

    if (kondolenzCountNum) {
      kondolenzCountNum.textContent = kondolenzEntries.length;
    }

    kondolenzList.innerHTML = kondolenzEntries.map(k => `
      <div class="kondolenz-card" id="kondolenz-entry-${k.id}">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="font-size: 1.15rem; color: var(--color-primary-dark);">
            In Gedenken an: <strong>${escapeHtml(k.deceased)}</strong>
          </h4>
          <span style="font-size: 0.8rem; color: var(--color-text-light);">${escapeHtml(k.date)}</span>
        </div>
        <p style="font-size: 0.95rem; font-style: italic; color: var(--color-text-main); margin-bottom: 0.8rem;">
          „${escapeHtml(k.message.replace(/^[„"]|[“"]$/g, ''))}“
        </p>
        <div style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600;">
          ✍️ Kondoliert von: ${escapeHtml(k.author)}
        </div>
      </div>
    `).join('');
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  // Candle Modal Handlers
  if (openCandleModalBtn && candleModal) {
    openCandleModalBtn.addEventListener('click', () => candleModal.classList.add('active'));
  }
  if (closeCandleModalBtn && candleModal) {
    closeCandleModalBtn.addEventListener('click', () => candleModal.classList.remove('active'));
  }

  // Kondolenz Modal Handlers
  if (openKondolenzModalBtn && kondolenzModal) {
    openKondolenzModalBtn.addEventListener('click', () => kondolenzModal.classList.add('active'));
  }
  if (closeKondolenzModalBtn && kondolenzModal) {
    closeKondolenzModalBtn.addEventListener('click', () => kondolenzModal.classList.remove('active'));
  }

  // Outside click close
  window.addEventListener('click', (e) => {
    if (e.target === candleModal) candleModal.classList.remove('active');
    if (e.target === kondolenzModal) kondolenzModal.classList.remove('active');
  });

  // Submit Candle Form
  if (candleForm) {
    candleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const deceased = document.getElementById('deceased-name').value.trim();
      const author = document.getElementById('author-name').value.trim();
      const message = document.getElementById('candle-message').value.trim();

      if (!deceased || !author || !message) return;

      const newCandle = {
        id: 'c_' + Date.now(),
        deceased,
        author,
        message: `„${message.replace(/^[„"]|[“"]$/g, '')}“`,
        time: 'Gerade eben'
      };

      candles.unshift(newCandle);
      localStorage.setItem('keck_lit_candles', JSON.stringify(candles));

      renderCandleWall();
      candleForm.reset();
      candleModal.classList.remove('active');
    });
  }

  // Submit Kondolenz Form
  if (kondolenzForm) {
    kondolenzForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const deceased = document.getElementById('k-deceased').value.trim();
      const author = document.getElementById('k-author').value.trim();
      const message = document.getElementById('k-message').value.trim();

      if (!deceased || !author || !message) return;

      const newEntry = {
        id: 'k_' + Date.now(),
        deceased,
        author,
        message,
        date: new Date().toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
      };

      kondolenzEntries.unshift(newEntry);
      localStorage.setItem('keck_kondolenz_entries', JSON.stringify(kondolenzEntries));

      renderKondolenzList();
      kondolenzForm.reset();
      kondolenzModal.classList.remove('active');

      // Switch to Kondolenzbook tab
      const kondolenzTabBtn = document.querySelector('[data-tab="tab-condolence"]');
      if (kondolenzTabBtn) kondolenzTabBtn.click();
    });
  }

  // Initial renders
  renderCandleWall();
  renderKondolenzList();
});
