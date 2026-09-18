/* ══════════════════════════════════════════════════════════════
   ALISHERBEK QURAMBAYEV — PORTFOLIO MAIN SCRIPT
   main.js — All interactive JavaScript for the portfolio
══════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════
       I18N MULTI-LANGUAGE SYSTEM
       ══════════════════════════════════════════════════════════════ */
    const I18N = {
      uz: {
        'nav.about': 'Men haqimda', 'nav.skills': "Ko'nikmalar", 'nav.projects': 'Saralangan loyihalar', 'nav.services': 'Xizmatlar',
        'nav.experience': 'Tajribam', 'nav.playlist': 'Playlist', 'nav.contact': 'Aloqa',
        'hero.badge': 'Ishga tayyor', 'hero.cta1': "Loyihalarni ko'rish", 'hero.cta2': 'Salom yozing',
        'hero.blog': 'Blog kanalim',
        'hero.lead': "19 yoshli fullstack developer va pentester. 1.5 yildan ortiq tajriba bilan toza kod, ishonchli backend va kiber xavfsizlikka e'tibor qarataman.",
        't1': 'Men ', 't2': 'tizimlar quraman.',
        'sec.about': 'About', 'about.title': 'Men haqimda', 'about.h3': 'Salom! Men Alisherbek',
        'about.p1': "Qoraqalpog'istonda yashovchi 19 yoshli fullstack developer. 1.5 yildan ortiq tajriba bilan Telegram botlar, web ilovalar va backend tizimlar yarataman. 50 dan ortiq loyihani muvaffaqiyatli yakunlaganman.",
        'about.p2': "So'nggi 3 oydan beri kiber havfsizlik va pentesting yo'nalishida ham faol ishlayman. Kali Linux'da ishlab, web zaifliklarni o'rganaman va himoya bo'yicha tajriba to'playman.",
        'info.age': 'Yoshi', 'info.age.v': '19 yosh', 'info.exp': 'Tajriba', 'info.exp.v': '1.5 yil+',
        'info.os': 'Operatsion tizim', 'info.edu': "O'qish joyi", 'info.city': 'Manzil', 'info.city.v': "Qoraqalpog'iston, UZ",
        'stat.proj': 'Tugallangan loyihalar+', 'stat.income': 'mln UZS+ daromad', 'stat.pentest': 'oylik pentest tajribasi',
        'sec.skills': 'Skills', 'skills.title': "Ko'nikmalar", 'skills.sub': "Yo'nalishlar bo'yicha tajriba darajam va kunlik ishlatadigan texnologiyalarim.",
        'sk.1': 'Telegram Bot Dev', 'sk.2': 'Pentesting & Kiber Havfsizlik', 'sk.3': 'Website Development', 'sk.4': 'Backend / API',
        'sec.projects': 'Saralangan loyihalar', 'proj.title': 'Saralangan Loyihalarim', 'proj.sub': "Men tomonidan ishlab chiqilgan va serverda real faoliyat ko'rsatayotgan yirik platformalar.",
        'p1.cat': 'BULUTLI PLATFORMA & SAAS', 'p1.title': 'wwwz.uz — Wildcard Cloud',
        'p1.desc': "Dasturchilar va Telegram botlar uchun 1-raqamli bulutli xosting va domen boshqaruv platformasi. Nginx reverse proxy, avtomatik SSL sertifikatlari, izolyatsiyalangan server muhiti va yuqori tezlikdagi infratuzilma.",
        'p1.f1': "Telegram bot va WebApp xostingi", 'p1.f2': "Avtomatik Wildcard SSL & Nginx Proxy", 'p1.f3': "24/7 PM2 & Linux server monitoring", 'p1.btn': "Saytga o'tish",
        'p2.cat': 'MEDIA VA WEB ILOVA', 'p2.title': 'gold.wwwz.uz — Gold Media Platform',
        'p2.desc': "Yuqori yuklamalarga moslashtirilgan zamonaviy media va oqimli kontent platformasi. OWASP xavfsizlik standartlari, botlardan himoyalovchi xavfsizlik shlyuzi, moslashuvchan video pleer va tezkor backend tizimi.",
        'p2.f1': "Kiber xavfsizlik & Anti-Bot tekshiruvi", 'p2.f2': "Tezkor video oqimi & Responsive UI", 'p2.f3': "Optimizatsiya qilingan PHP & MySQL backend", 'p2.btn': "Saytga o'tish",
        'sec.services': 'Services', 'srv.title': 'Xizmatlar', 'srv.sub': "Loyihangizni boshidan oxirigacha sifatli va ishonchli tarzda amalga oshiraman.",
        's1.t': 'Telegram Botlar', 's1.d': "Murakkab botlar, WebApp'lar, to'lov tizimlari va admin panellar. Python (aiogram/Telethon) va PHP webhook asosida.",
        's2.t': 'Pentesting', 's2.d': "Web ilovalar zaifliklarini tekshirish, OWASP Top 10 asosida xavfsizlik tahlili va himoya bo'yicha tavsiyalar.",
        's3.t': 'Web Development', 's3.d': "Zamonaviy, responsive va tez ishlaydigan saytlar. Landing pagelardan to'liq platformalargacha.",
        's4.t': 'Backend Tizimlar', 's4.d': "Ishonchli arxitektura, API integratsiyalari, ma'lumotlar bazasi dizayni (SQLite, MySQL) va server boshqaruvi.",
        'sec.exp': 'Experience', 'exp.title': 'Tajribam', 'exp.sub': "Professional yo'lim va erishgan yutuqlarim.",
        'e1.d': '2024 — Hozir', 'e1.t': 'Fullstack Developer — Erkin Mutaxassis', 'e1.p': 'Telegram botlar, web ilovalar va backend tizimlar yaratish. 50 dan ortiq loyihalar muvaffaqiyatli topshirildi.',
        'e2.d': '2025 — Hozir', 'e2.t': 'Pentesting & Security Researcher', 'e2.p': 'Web zaifliklarni aniqlash, OWASP Top 10 tahlili va amaliy xavfsizlik tavsiyalari ishlab chiqish.',
        'e3.d': '2026', 'e3.t': "Najot Ta'lim — Talaba", 'e3.p': "IT va dasturlash yo'nalishida professional bilim va malaka oshirish.",
        'sec.playlist': 'Playlist', 'pl.title': 'Playlistlarim', 'pl.sub': "Sevimli musiqalarim to'plami.",
        'sec.contact': 'Contact', 'ct.title': 'Keling, birga ishlaymiz', 'ct.desc': "Loyihangiz bormi yoki hamkorlik qilmoqchimisiz? Men bilan bog'laning — har doim yangi va qiziqarli g'oyalarga ochiqman.",
        'footer': "© 2026 Alisherbek Qurambayev — Qoraqalpog'iston, O'zbekiston",
        'tw': ['ishonchli', 'xavfsiz', 'tezkor', 'zamonaviy', 'ajoyib']
      },
      ru: {
        'nav.about': 'Обо мне', 'nav.skills': 'Навыки', 'nav.projects': 'Избранные проекты', 'nav.services': 'Услуги',
        'nav.experience': 'Опыт', 'nav.playlist': 'Плейлист', 'nav.contact': 'Контакты',
        'hero.badge': 'Готов к работе', 'hero.cta1': 'Посмотреть проекты', 'hero.cta2': 'Написать',
        'hero.blog': 'Мой блог',
        'hero.lead': '19-летний fullstack разработчик и пентестер. Более 1.5 лет опыта — чистый код, надёжный backend и кибербезопасность.',
        't1': 'Я ', 't2': 'системы строю.',
        'sec.about': 'Обо мне', 'about.title': 'Обо мне', 'about.h3': 'Привет! Я Алишербек',
        'about.p1': '19-летний fullstack разработчик из Каракалпакстана. Более 1.5 лет опыта в создании Telegram-ботов, веб-приложений и backend-систем. Успешно завершил более 50 проектов.',
        'about.p2': 'Последние 3 месяца активно занимаюсь кибербезопасностью и пентестингом. Работаю на Kali Linux, изучаю веб-уязвимости и накапливаю опыт в защите.',
        'info.age': 'Возраст', 'info.age.v': '19 лет', 'info.exp': 'Опыт', 'info.exp.v': '1.5+ года',
        'info.os': 'Операционная система', 'info.edu': 'Образование', 'info.city': 'Город', 'info.city.v': 'Каракалпакстан, UZ',
        'stat.proj': 'завершённых проектов+', 'stat.income': 'млн UZS+ доход', 'stat.pentest': 'мес. пентест опыта',
        'sec.skills': 'Навыки', 'skills.title': 'Навыки', 'skills.sub': 'Уровень опыта по направлениям и технологии, которые использую каждый день.',
        'sk.1': 'Telegram Bot Dev', 'sk.2': 'Пентестинг и Кибербезопасность', 'sk.3': 'Веб-разработка', 'sk.4': 'Backend / API',
        'sec.projects': 'Избранные проекты', 'proj.title': 'Избранные Проекты', 'proj.sub': 'Крупные платформы, разработанные мной и успешно работающие в продакшене.',
        'p1.cat': 'ОБЛАЧНАЯ ПЛАТФОРМА И SAAS', 'p1.title': 'wwwz.uz — Wildcard Cloud',
        'p1.desc': 'Облачный хостинг №1 и платформа управления доменами для разработчиков и Telegram-ботов. Nginx reverse proxy, автоматические SSL-сертификаты, изолированная среда и высокая производительность.',
        'p1.f1': 'Хостинг ботов и WebApp', 'p1.f2': 'Автоматический Wildcard SSL и Nginx', 'p1.f3': '24/7 PM2 и мониторинг серверов', 'p1.btn': 'Перейти на сайт',
        'p2.cat': 'МЕДИА И ВЕБ-ПЛАТФОРМА', 'p2.title': 'gold.wwwz.uz — Gold Media Platform',
        'p2.desc': 'Высоконагруженная медиа-платформа и стриминг. Стандарты безопасности OWASP, шлюз защиты от ботов, адаптивный видеоплеер и быстрый backend.',
        'p2.f1': 'Кибербезопасность и защита от ботов', 'p2.f2': 'Быстрый стриминг и адаптивный UI', 'p2.f3': 'Оптимизированный PHP & MySQL backend', 'p2.btn': 'Перейти на сайт',
        'sec.services': 'Услуги', 'srv.title': 'Услуги', 'srv.sub': 'Реализую ваш проект качественно и надёжно от начала до конца.',
        's1.t': 'Telegram Боты', 's1.d': 'Сложные боты, WebApp, платёжные системы и панели администратора. Python (aiogram/Telethon) и PHP webhook.',
        's2.t': 'Пентестинг', 's2.d': 'Анализ уязвимостей веб-приложений, проверка по OWASP Top 10 и рекомендации по защите.',
        's3.t': 'Веб-разработка', 's3.d': 'Современные, адаптивные и быстрые сайты. От landing page до полноценных платформ.',
        's4.t': 'Backend Системы', 's4.d': 'Надёжная архитектура, API интеграции, дизайн баз данных (SQLite, MySQL) и управление сервером.',
        'sec.exp': 'Опыт', 'exp.title': 'Опыт', 'exp.sub': 'Мой профессиональный путь и достижения.',
        'e1.d': '2024 — Сейчас', 'e1.t': 'Fullstack Developer — Фрилансер', 'e1.p': 'Создание Telegram-ботов, веб-приложений и backend-систем. Успешно завершено более 50 проектов.',
        'e2.d': '2025 — Сейчас', 'e2.t': 'Pentesting & Security Researcher', 'e2.p': 'Выявление веб-уязвимостей, анализ OWASP Top 10 и подготовка отчетов по безопасности.',
        'e3.d': '2026', 'e3.t': "Najot Ta'lim — Студент", 'e3.p': 'Профессиональное обучение в сфере IT, разработке и кибербезопасности.',
        'sec.playlist': 'Плейлист', 'pl.title': 'Мои плейлисты', 'pl.sub': 'Коллекция любимой музыки.',
        'sec.contact': 'Контакты', 'ct.title': 'Давайте работать вместе', 'ct.desc': 'Есть проект или хотите сотрудничать? Свяжитесь со мной — я всегда открыт к новым идеям.',
        'footer': '© 2026 Алишербек Курамбаев — Каракалпакстан, Узбекистан',
        'tw': ['надёжные', 'безопасные', 'быстрые', 'современные', 'красивые']
      },
      en: {
        'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Featured Projects', 'nav.services': 'Services',
        'nav.experience': 'Experience', 'nav.playlist': 'Playlist', 'nav.contact': 'Contact',
        'hero.badge': 'Available for work', 'hero.cta1': 'View projects', 'hero.cta2': 'Say hello',
        'hero.blog': 'My blog',
        'hero.lead': '19-year-old fullstack developer and pentester. 1.5+ years of experience focused on clean code, reliable backends and cybersecurity.',
        't1': 'I build ', 't2': 'systems.',
        'sec.about': 'About', 'about.title': 'About me', 'about.h3': "Hey! I'm Alisherbek",
        'about.p1': 'A 19-year-old fullstack developer based in Karakalpakstan. With 1.5+ years of experience I build Telegram bots, web apps and backend systems. 50+ projects completed.',
        'about.p2': 'For the last 3 months I have been actively working in cybersecurity and pentesting. Working on Kali Linux, studying web vulnerabilities and gaining hands-on security experience.',
        'info.age': 'Age', 'info.age.v': '19 years', 'info.exp': 'Experience', 'info.exp.v': '1.5+ years',
        'info.os': 'Operating System', 'info.edu': 'Education', 'info.city': 'Location', 'info.city.v': 'Karakalpakstan, UZ',
        'stat.proj': 'completed projects+', 'stat.income': 'mln UZS+ revenue', 'stat.pentest': 'mo. pentest experience',
        'sec.skills': 'Skills', 'skills.title': 'Skills', 'skills.sub': 'My experience level by direction and technologies I use daily.',
        'sk.1': 'Telegram Bot Dev', 'sk.2': 'Pentesting & Cybersecurity', 'sk.3': 'Website Development', 'sk.4': 'Backend / API',
        'sec.projects': 'Featured Projects', 'proj.title': 'Featured Projects', 'proj.sub': 'Major high-performance platforms built by me and running in live production.',
        'p1.cat': 'CLOUD PLATFORM & SAAS', 'p1.title': 'wwwz.uz — Wildcard Cloud',
        'p1.desc': 'Next-gen cloud hosting and domain routing platform for developers and Telegram bots. Features automated Nginx reverse proxy, instant SSL certificates, and isolated high-performance server environments.',
        'p1.f1': 'Telegram Bot & WebApp Hosting', 'p1.f2': 'Automated Wildcard SSL & Nginx Proxy', 'p1.f3': '24/7 PM2 & Linux Server Monitoring', 'p1.btn': 'Visit Live Site',
        'p2.cat': 'MEDIA & WEB PLATFORM', 'p2.title': 'gold.wwwz.uz — Gold Media Platform',
        'p2.desc': 'High-throughput modern media and streaming web platform. Engineered with OWASP security standards, anti-bot protective gateway, responsive media engine, and optimized backend.',
        'p2.f1': 'Cybersecurity & Anti-Bot Protection', 'p2.f2': 'Ultra-fast Streaming & Responsive UI', 'p2.f3': 'Optimized PHP & Database Architecture', 'p2.btn': 'Visit Live Site',
        'sec.services': 'Services', 'srv.title': 'Services', 'srv.sub': 'I deliver your project quality-first, reliably from start to finish.',
        's1.t': 'Telegram Bots', 's1.d': 'Complex bots, WebApps, payment systems and admin panels. Python (aiogram/Telethon) and PHP webhook.',
        's2.t': 'Pentesting', 's2.d': 'Web application vulnerability assessment, OWASP Top 10 analysis and security recommendations.',
        's3.t': 'Web Development', 's3.d': 'Modern, responsive and fast websites. From landing pages to full-scale platforms.',
        's4.t': 'Backend Systems', 's4.d': 'Reliable architecture, API integrations, database design (SQLite, MySQL) and server management.',
        'sec.exp': 'Experience', 'exp.title': 'Experience', 'exp.sub': 'My professional journey and achievements.',
        'e1.d': '2024 — Present', 'e1.t': 'Fullstack Developer — Freelance', 'e1.p': 'Creating Telegram bots, web applications and backend systems. 50+ projects completed.',
        'e2.d': '2025 — Present', 'e2.t': 'Pentesting & Security Researcher', 'e2.p': 'Web vulnerability assessment, OWASP Top 10 analysis and security report preparation.',
        'e3.d': '2026', 'e3.t': "Najot Ta'lim — Student", 'e3.p': 'Professional IT, development and cybersecurity courses.',
        'sec.playlist': 'Playlist', 'pl.title': 'My Playlists', 'pl.sub': 'A collection of my favourite tracks.',
        'sec.contact': 'Contact', 'ct.title': "Let's work together", 'ct.desc': "Have a project or want to collaborate? Reach out — I'm always open to new ideas.",
        'footer': '© 2026 Alisherbek Qurambayev — Karakalpakstan, Uzbekistan',
        'tw': ['reliable', 'secure', 'fast', 'modern', 'amazing']
      }
    };

    let currentLang = localStorage.getItem('site_lang') || 'uz';
    if (!I18N[currentLang]) currentLang = 'uz';
    let twWords = I18N[currentLang].tw;
    let twIdx = 0;
    let morphRAF = null;

    /* ══════════════════════════════════════════════════════════════
       HIGH-CLARITY GOOEY THRESHOLD MORPHING ANIMATION
       ══════════════════════════════════════════════════════════════ */
    function startGooeyCycle() {
      if (morphRAF) cancelAnimationFrame(morphRAF);

      const twEl   = document.getElementById('typewriter');
      const el1    = document.getElementById('tw-t1');
      const el2    = document.getElementById('tw-t2');
      const spacer = document.getElementById('tw-spacer');
      if (!twEl || !el1 || !el2 || !spacer) return;

      const MORPH_TIME    = 0.75; // 750ms snappy liquid morph transition
      const COOLDOWN_TIME = 2.0;  // 2.0s hold time for crystal-clear readability

      let idx      = twIdx;
      let morph_   = 0;
      let cool_    = COOLDOWN_TIME;
      let prevTime = performance.now();

      function updateSpacerWidth() {
        let maxW = 0;
        twWords.forEach(w => {
          spacer.textContent = w;
          maxW = Math.max(maxW, spacer.offsetWidth);
        });
        spacer.textContent = twWords[idx % twWords.length];
        twEl.style.minWidth = (maxW + 4) + 'px';
      }
      updateSpacerWidth();

      function setFrac(frac) {
        const f2 = 1 - frac;
        twEl.style.filter = 'url(#morph-threshold)';
        el1.textContent   = twWords[idx % twWords.length];
        el2.textContent   = twWords[(idx + 1) % twWords.length];
        
        const blur1 = Math.min(8 / Math.max(f2, 1e-4) - 8, 30);
        const blur2 = Math.min(8 / Math.max(frac, 1e-4) - 8, 30);
        
        el1.style.filter  = `blur(${blur1}px)`;
        el1.style.opacity = Math.pow(f2, 0.4);
        el2.style.filter  = `blur(${blur2}px)`;
        el2.style.opacity = Math.pow(frac, 0.4);
      }

      function cooldown() {
        // Remove SVG filter completely during static display for 100% crystal-clear font
        twEl.style.filter = 'none';
        el1.textContent   = '';
        el1.style.filter  = 'none';
        el1.style.opacity = '0';
        el2.textContent   = twWords[idx % twWords.length];
        el2.style.filter  = 'none';
        el2.style.opacity = '1';
        spacer.textContent = twWords[idx % twWords.length];
      }

      let isCooldownState = true;
      function loop(now) {
        morphRAF = requestAnimationFrame(loop);
        const dt = Math.min((now - prevTime) / 1000, 0.05);
        prevTime = now;
        cool_ -= dt;
        if (cool_ <= 0) {
          isCooldownState = false;
          morph_ += dt;
          let frac = morph_ / MORPH_TIME;
          if (frac >= 1) {
            cool_ = COOLDOWN_TIME;
            morph_ = 0;
            idx = (idx + 1) % twWords.length;
            twIdx = idx;
            isCooldownState = true;
            cooldown();
            return;
          }
          setFrac(Math.max(frac, 1e-6));
        } else if (!isCooldownState) {
          isCooldownState = true;
          cooldown();
        }
      }

      cooldown();
      morphRAF = requestAnimationFrame(loop);
    }

    function applyLang(lang) {
      currentLang = lang;
      twWords = I18N[lang].tw;
      localStorage.setItem('site_lang', lang);
      document.documentElement.lang = lang;

      // Update static texts
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.dataset.i18n;
        if (I18N[lang][k] !== undefined) el.textContent = I18N[lang][k];
      });

      const t1 = document.getElementById('t1');
      const t2 = document.getElementById('t2');
      if (t1) t1.textContent = I18N[lang]['t1'];
      if (t2) t2.textContent = I18N[lang]['t2'];

      const langCurrent = document.getElementById('langCurrent');
      if (langCurrent) langCurrent.textContent = lang.toUpperCase();

      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });

      twIdx = 0;
      startGooeyCycle();
    }

    // Language Dropdown Events
    const langSwitcher = document.getElementById('langSwitcher');
    const langBtn = document.getElementById('langBtn');
    if (langBtn && langSwitcher) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
      });
      document.addEventListener('click', () => langSwitcher.classList.remove('open'));
      document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          applyLang(btn.dataset.lang);
          langSwitcher.classList.remove('open');
        });
      });
    }

    /* ══════════════════════════════════════════════════════════════
       DARK / LIGHT THEME TOGGLE
       ══════════════════════════════════════════════════════════════ */
    const root = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const themeKnob = document.getElementById('themeKnob');
    const moonIcon = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>';
    const sunIcon = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

    // Sayt ochilganda har doim tungi (dark) rejimda ochiladi
    try { localStorage.removeItem('site_theme'); } catch (e) {}
    root.setAttribute('data-theme', 'dark');
    if (themeKnob) themeKnob.innerHTML = moonIcon;

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        if (themeKnob) themeKnob.innerHTML = next === 'dark' ? moonIcon : sunIcon;
      });
    }

    /* ══════════════════════════════════════════════════════════════
       MOBILE NAVIGATION DRAWER
       ══════════════════════════════════════════════════════════════ */
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');
    const menuIcon = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    const closeIcon = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    function openMenu() {
      if (!navLinks) return;
      navLinks.classList.add('open');
      if (navOverlay) navOverlay.classList.add('open');
      if (menuBtn) {
        menuBtn.innerHTML = closeIcon;
        menuBtn.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (!navLinks) return;
      navLinks.classList.remove('open');
      if (navOverlay) navOverlay.classList.remove('open');
      if (menuBtn) {
        menuBtn.innerHTML = menuIcon;
        menuBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }

    function toggleMenu(e) {
      if (e) e.stopPropagation();
      if (navLinks && navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    if (menuBtn) {
      menuBtn.addEventListener('click', toggleMenu);
    }

    const drawerCloseBtn = document.getElementById('drawerCloseBtn');
    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeMenu);
    }

    if (navOverlay) {
      navOverlay.addEventListener('click', closeMenu);
    }

    if (navLinks) {
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', closeMenu);
      });
    }

    document.addEventListener('click', (e) => {
      if (navLinks && navLinks.classList.contains('open')) {
        if (!navLinks.contains(e.target) && menuBtn && !menuBtn.contains(e.target)) {
          closeMenu();
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
        closeMenu();
      }
    });

    /* ══════════════════════════════════════════════════════════════
       SCROLL PROGRESS & NAVBAR SCROLLED STATE
       ══════════════════════════════════════════════════════════════ */
    const scrollBar = document.getElementById('scrollProgress');
    const mainNav = document.getElementById('mainNav');
    const backTopBtn = document.getElementById('backTop');

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          const st = window.scrollY;
          const dh = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollBar && dh > 0) scrollBar.style.width = ((st / dh) * 100) + '%';
          if (mainNav) mainNav.classList.toggle('scrolled', st > 40);
          if (backTopBtn) backTopBtn.classList.toggle('show', st > 400);
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });

    if (backTopBtn) {
      backTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ══════════════════════════════════════════════════════════════
       CURSOR SPOTLIGHT (DESKTOP)
       ══════════════════════════════════════════════════════════════ */
    const spot = document.getElementById('cursorSpot');
    if (spot && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let mx = window.innerWidth / 2, my = window.innerHeight / 2, sx = mx, sy = my;
      window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
      function loopSpot() {
        sx += (mx - sx) * 0.12;
        sy += (my - sy) * 0.12;
        spot.style.transform = `translate3d(${sx}px, ${sy}px, 0)`;
        requestAnimationFrame(loopSpot);
      }
      requestAnimationFrame(loopSpot);
    }

    /* ══════════════════════════════════════════════════════════════
       INTERACTIVE CARD SPOTLIGHT & BUTTON RIPPLE
       ══════════════════════════════════════════════════════════════ */
    document.querySelectorAll('.card').forEach(card => {
      let rect = null;
      card.addEventListener('mouseenter', () => { rect = card.getBoundingClientRect(); });
      card.addEventListener('mousemove', e => {
        if (!rect) rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
      }, { passive: true });
      card.addEventListener('mouseleave', () => { rect = null; });
    });

    document.querySelectorAll('.btn, .pill').forEach(btn => {
      btn.addEventListener('click', e => {
        const r = btn.getBoundingClientRect();
        const rip = document.createElement('span');
        rip.className = 'ripple';
        const sz = Math.max(r.width, r.height);
        rip.style.width = rip.style.height = sz + 'px';
        rip.style.left = (e.clientX - r.left - sz / 2) + 'px';
        rip.style.top = (e.clientY - r.top - sz / 2) + 'px';
        btn.appendChild(rip);
        setTimeout(() => rip.remove(), 600);
      });
    });

    /* ══════════════════════════════════════════════════════════════
       INTERSECTION OBSERVER (REVEAL, SKILL BARS & NUMBER COUNTERS)
       ══════════════════════════════════════════════════════════════ */
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');

        // Fill progress bars
        e.target.querySelectorAll('.fill').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });

        // Count up numbers
        e.target.querySelectorAll('.stat-num[data-count]').forEach(el => {
          const target = +el.dataset.count;
          const duration = 1800;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            el.textContent = Math.floor(ease * target);
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = target;
          }
          requestAnimationFrame(tick);
        });

        revealObserver.unobserve(e.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Duplicate Marquee for seamless infinite loop
    const marquee = document.getElementById('marquee');
    if (marquee) marquee.innerHTML += marquee.innerHTML;

    /* ══════════════════════════════════════════════════════════════
       ANIMATED BACKGROUND WAVE LINES (CANVAS)
       ══════════════════════════════════════════════════════════════ */
    (function () {
      const c = document.getElementById('waveCanvas');
      if (!c) return;
      const ctx = c.getContext('2d');
      let W, H;
      function resize() {
        W = c.width = window.innerWidth;
        H = c.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize, { passive: true });

      const LINES = 16;
      let tR = 255, tG = 255, tB = 255, tA = 0.30;
      function syncWaveTheme() {
        const d = root.getAttribute('data-theme') === 'dark';
        tR = d ? 255 : 62;
        tG = d ? 255 : 58;
        tB = d ? 255 : 52;
        tA = d ? 0.30 : 0.38;
      }
      syncWaveTheme();
      let cR = tR, cG = tG, cB = tB, cA = tA;
      new MutationObserver(syncWaveTheme).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

      // Start with active dynamic time and offset so lines are already wavy and undulating from frame 0
      let t = (Date.now() * 0.0015) % 10000;
      let waveRaf = null;
      let prevWaveTime = performance.now();

      function drawWaves(now) {
        waveRaf = requestAnimationFrame(drawWaves);
        const dt = Math.min((now - prevWaveTime) * 0.001, 0.05) || 0.016;
        prevWaveTime = now;

        cR += (tR - cR) * 0.08;
        cG += (tG - cG) * 0.08;
        cB += (tB - cB) * 0.08;
        cA += (tA - cA) * 0.08;

        ctx.clearRect(0, 0, W, H);
        const r = (cR + 0.5) | 0, g = (cG + 0.5) | 0, b = (cB + 0.5) | 0;

        for (let i = 0; i < LINES; i++) {
          ctx.beginPath();
          const ratio = i / (LINES - 1);
          const baseA = cA * (0.80 + Math.sin(ratio * Math.PI) * 0.35);
          const lw = 1.9 + ratio * 1.3;
          // Spans 28% to 74% of screen height
          const by = H * (0.28 + ratio * 0.46);
          const amp = 30 + ratio * 38;
          const freq = 0.0018 + ratio * 0.00032;
          const ph = t * (0.50 + ratio * 0.20) + ratio * 3.6 + 1.2;

          for (let x = 0; x <= W; x += 6) {
            const y = by +
              Math.sin(x * freq + ph) * amp +
              Math.cos(x * freq * 1.9 + ph * 1.25) * (amp * 0.36) +
              Math.sin(x * freq * 0.7 + ph * 0.55) * (amp * 0.20);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }

          const grad = ctx.createLinearGradient(0, 0, W, 0);
          grad.addColorStop(0, `rgba(${r},${g},${b},${baseA * 0.35})`);
          grad.addColorStop(0.2, `rgba(${r},${g},${b},${baseA * 0.95})`);
          grad.addColorStop(0.5, `rgba(${r},${g},${b},${baseA})`);
          grad.addColorStop(0.8, `rgba(${r},${g},${b},${baseA * 0.90})`);
          grad.addColorStop(1, `rgba(${r},${g},${b},${baseA * 0.35})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = lw;
          ctx.stroke();
        }

        t += dt * 0.95;
      }

      drawWaves(performance.now());

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(waveRaf);
        else waveRaf = requestAnimationFrame(drawWaves);
      });
    })();

    /* ══════════════════════════════════════════════════════════════
       HERO AVATAR INTERACTIVE 3D PARALLAX (Desktop / Laptop)
       ══════════════════════════════════════════════════════════════ */
    (function () {
      const avatarWrap = document.getElementById('avatarWrap');
      const heroRight = document.getElementById('heroRight') || document.querySelector('.hero-right');
      if (!avatarWrap || !heroRight) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      let targetRotX = 0, targetRotY = 0;
      let currentRotX = 0, currentRotY = 0;
      let isMoving = false;
      let rafId = null;

      function onMouseMove(e) {
        if (window.innerWidth <= 860) return;
        const rect = heroRight.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (e.clientX - centerX) / (window.innerWidth * 0.45);
        const dy = (e.clientY - centerY) / (window.innerHeight * 0.45);

        targetRotX = Math.max(-9, Math.min(9, -dy * 10));
        targetRotY = Math.max(-9, Math.min(9, dx * 10));

        if (!isMoving) {
          isMoving = true;
          if (!rafId) rafId = requestAnimationFrame(updateTilt);
        }
      }

      function updateTilt() {
        currentRotX += (targetRotX - currentRotX) * 0.08;
        currentRotY += (targetRotY - currentRotY) * 0.08;

        avatarWrap.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

        if (!isMoving && Math.abs(currentRotX) < 0.02 && Math.abs(currentRotY) < 0.02) {
          avatarWrap.style.transform = '';
          rafId = null;
          return;
        }

        rafId = requestAnimationFrame(updateTilt);
      }

      window.addEventListener('mousemove', onMouseMove, { passive: true });

      window.addEventListener('mouseleave', () => {
        targetRotX = 0;
        targetRotY = 0;
        isMoving = false;
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth <= 860) {
          targetRotX = 0;
          targetRotY = 0;
          isMoving = false;
          avatarWrap.style.transform = '';
        }
      }, { passive: true });
    })();

    /* ══════════════════════════════════════════════════════════════
       MUSIC PLAYLIST & AUDIO ENGINE
       ══════════════════════════════════════════════════════════════ */
    (function () {
      const playlist = [
        { name: 'I Will Survive', artist: 'Gloria Gaynor', duration: '3:15', url: 'iwill.mp3' },
        { name: 'Bevafo', artist: 'Jaxongir Otajonov', duration: '5:19', url: 'bevafo.mp3' },
        { name: 'Uchrashmadik', artist: 'Jaxongir Otajonov', duration: '4:20', url: 'uchrashmadik.mp3' },
        { name: 'Jonim', artist: 'Jaxongir Otajonov', duration: '4:29', url: 'jonim.mp3' }
      ];

      const audio = document.getElementById('audio');
      const plList = document.getElementById('plList');
      const plTitle = document.getElementById('plTitle');
      const plArtist = document.getElementById('plArtist');
      const plVinyl = document.getElementById('plVinyl');
      const plWave = document.getElementById('plWave');
      const plIcon = document.getElementById('plPlayIcon');
      const plFill = document.getElementById('plFill');
      const plCur = document.getElementById('plCur');
      const plDur = document.getElementById('plDur');
      const plBar = document.getElementById('plBar');
      const plPlayBtn = document.getElementById('plPlayBtn');
      const plPrev = document.getElementById('plPrev');
      const plNext = document.getElementById('plNext');

      const PLAY_SVG = '<polygon points="5 3 19 12 5 21 5 3"/>';
      const PAUSE_SVG = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';

      let currentIdx = 0;
      let isPlaying = false;

      function fmt(s) {
        if (!s || isNaN(s)) return '0:00';
        const m = Math.floor(s / 60);
        const sc = Math.floor(s % 60);
        return m + ':' + (sc < 10 ? '0' : '') + sc;
      }

      function renderPlaylist() {
        if (!plList) return;
        plList.innerHTML = '';
        playlist.forEach((track, i) => {
          const row = document.createElement('div');
          row.className = 'pl-row' + (i === currentIdx ? ' active' : '');
          row.innerHTML = `
            <div class="pl-row-num">${i + 1}</div>
            <div class="pl-row-info">
              <div class="pl-row-name">${track.name}</div>
              <div class="pl-row-artist">${track.artist}</div>
            </div>
            <div class="pl-row-dur">${track.duration}</div>
          `;
          row.addEventListener('click', () => {
            loadTrack(i);
            playAudio();
          });
          plList.appendChild(row);
        });
      }

      function updateUI(playing) {
        isPlaying = playing;
        if (plIcon) plIcon.innerHTML = playing ? PAUSE_SVG : PLAY_SVG;
        if (plVinyl) plVinyl.classList.toggle('spin', playing);
        if (plWave) plWave.classList.toggle('playing', playing);
        document.querySelectorAll('.pl-row').forEach((r, i) => r.classList.toggle('active', i === currentIdx));
      }

      function loadTrack(idx) {
        currentIdx = (idx + playlist.length) % playlist.length;
        const track = playlist[currentIdx];
        audio.src = track.url;
        if (plTitle) plTitle.textContent = track.name;
        if (plArtist) plArtist.textContent = track.artist;
        if (plDur) plDur.textContent = track.duration;
        if (plFill) plFill.style.width = '0%';
        if (plCur) plCur.textContent = '0:00';
        updateUI(isPlaying);
      }

      function playAudio() {
        audio.play().then(() => updateUI(true)).catch(() => updateUI(false));
      }

      function pauseAudio() {
        audio.pause();
        updateUI(false);
      }

      function togglePlay() {
        if (audio.paused) playAudio();
        else pauseAudio();
      }

      if (plPlayBtn) plPlayBtn.addEventListener('click', togglePlay);
      if (plPrev) plPrev.addEventListener('click', () => { loadTrack(currentIdx - 1); playAudio(); });
      if (plNext) plNext.addEventListener('click', () => { loadTrack(currentIdx + 1); playAudio(); });

      audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const p = (audio.currentTime / audio.duration) * 100;
        if (plFill) plFill.style.width = p + '%';
        if (plCur) plCur.textContent = fmt(audio.currentTime);
      });

      audio.addEventListener('loadedmetadata', () => {
        if (plDur && audio.duration) plDur.textContent = fmt(audio.duration);
      });

      audio.addEventListener('ended', () => {
        loadTrack(currentIdx + 1);
        playAudio();
      });

      if (plBar) {
        plBar.addEventListener('click', (e) => {
          if (!audio.duration) return;
          const r = plBar.getBoundingClientRect();
          audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
        });
      }

      renderPlaylist();
      loadTrack(0);
    })();

    /* ══════════════════════════════════════════════════════════════
       TOAST HELPER
       ══════════════════════════════════════════════════════════════ */
    function showToast(msg) {
      const t = document.getElementById('toast');
      const m = document.getElementById('toastMsg');
      if (!t || !m) return;
      m.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2500);
    }

    /* ══════════════════════════════════════════════════════════════
       PROJECT LIVE STREAMS AUTO-SCALER
       ══════════════════════════════════════════════════════════════ */
    function scaleProjectStreams() {
      const wrappers = document.querySelectorAll('.lp-stream-wrapper');
      wrappers.forEach(wrapper => {
        const frame = wrapper.querySelector('.lp-stream-frame');
        if (!frame) return;
        const w = wrapper.clientWidth;
        if (w > 0) {
          const baseW = 1280;
          const scale = w / baseW;
          frame.style.transform = `scale(${scale})`;
          const desiredHeight = Math.max(280, Math.min(420, Math.round(w * 0.65)));
          wrapper.style.height = `${desiredHeight}px`;
        }
      });
    }

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => scaleProjectStreams());
      document.querySelectorAll('.lp-stream-wrapper').forEach(w => ro.observe(w));
    }
    window.addEventListener('resize', scaleProjectStreams);
    window.addEventListener('load', scaleProjectStreams);
    setTimeout(scaleProjectStreams, 80);

    // Initialize Language
    applyLang(currentLang);