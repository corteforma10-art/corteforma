// ============================================================
// CORTEFORMA — SCRIPT PRINCIPAL
// Lê as configurações do config.js e constrói todo o site.
// Não altere este arquivo para mudar conteúdo — use o config.js.
// ============================================================

(function () {
  'use strict';

  const cfg = siteConfig; // vem do config.js

  // ----------------------------------------------------------
  // 1. UTILITÁRIOS
  // ----------------------------------------------------------

  /** Gera URL do WhatsApp com mensagem codificada */
  function whatsappLink(message) {
    const num = cfg.whatsappNumber.replace(/\D/g, '');
    const msg = encodeURIComponent(message || 'Olá! Gostaria de mais informações sobre seus produtos.');
    return `https://wa.me/${num}?text=${msg}`;
  }

  /** Aplica variáveis CSS de cor a partir do config.js */
  function applyColors() {
    const root = document.documentElement;
    const c = cfg.colors;
    if (c.primary)    root.style.setProperty('--primary',    c.primary);
    if (c.secondary)  root.style.setProperty('--secondary',  c.secondary);
    if (c.accent)     root.style.setProperty('--accent',     c.accent);
    if (c.background) root.style.setProperty('--background', c.background);
    if (c.surface)    root.style.setProperty('--surface',    c.surface);
    if (c.text)       root.style.setProperty('--text',       c.text);
    if (c.textMuted)  root.style.setProperty('--text-muted', c.textMuted);
    if (c.border)     root.style.setProperty('--border',     c.border);
  }

  /** Retorna a classe de badge correta pelo status do produto */
  function badgeClass(status) {
    const map = {
      'Disponível':    'badge-disponivel',
      'Sob encomenda': 'badge-sob-encomenda',
      'Lançamento':    'badge-lancamento',
      'Mais vendido':  'badge-mais-vendido',
    };
    return map[status] || 'badge-disponivel';
  }

  /** Escapa HTML para evitar XSS */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // ----------------------------------------------------------
  // 2. HEADER, META E LOGO
  // ----------------------------------------------------------

  function buildHeader() {
    // Logo — usa imagem se configurada, senão exibe iniciais + nome
    const logoMark = document.getElementById('logo-mark');
    const logoName = document.getElementById('logo-name');
    if (cfg.logo && logoMark) {
      logoMark.innerHTML = `<img src="${esc(cfg.logo)}" alt="${esc(cfg.companyName)}" style="height:38px;width:auto;max-width:140px;object-fit:contain;display:block;">`;
      logoMark.style.cssText = 'background:transparent;width:auto;height:auto;border-radius:0;padding:0;';
      if (logoName) logoName.style.display = 'none';
    } else {
      if (logoMark) logoMark.textContent = cfg.companyName.slice(0, 2).toUpperCase();
      if (logoName) logoName.textContent = cfg.companyName;
    }

    // Footer logo
    const fName = document.getElementById('footer-company-name');
    if (fName) fName.textContent = cfg.companyName;

    // WhatsApp header button
    const hwBtn = document.getElementById('header-whatsapp-btn');
    if (hwBtn) hwBtn.href = whatsappLink('Olá! Vim pelo site da ' + cfg.companyName + ' e gostaria de mais informações.');

    // WhatsApp flutuante
    const floatBtn = document.getElementById('whatsapp-float-btn');
    if (floatBtn) floatBtn.href = whatsappLink('Olá! Vim pelo site da ' + cfg.companyName + ' e gostaria de mais informações.');

    // SEO title
    document.title = `${cfg.companyName} — ${cfg.slogan}`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', cfg.slogan + '. ' + cfg.city + '.');
  }

  // ----------------------------------------------------------
  // 3. HERO / BANNER
  // ----------------------------------------------------------

  function buildHero() {
    const h = cfg.hero;

    const badge    = document.getElementById('hero-badge');
    const title    = document.getElementById('hero-title');
    const subtitle = document.getElementById('hero-subtitle');
    const btnP     = document.getElementById('hero-btn-primary');
    const btnS     = document.getElementById('hero-btn-secondary');

    if (badge)    badge.textContent = h.badge || '✦ Fabricação sob demanda';
    if (title)    title.innerHTML   = esc(h.title).replace(/fabricação digital/gi, '<em>fabricação digital</em>');
    if (subtitle) subtitle.textContent = h.subtitle;
    if (btnP)     btnP.textContent  = h.buttonPrimary;
    if (btnS) {
      btnS.textContent = h.buttonSecondary;
      btnS.href = whatsappLink('Olá! Vim pelo banner do site da ' + cfg.companyName + '.');
    }

    // Imagem do hero: primeiro produto em destaque
    const featured = cfg.products.find(p => p.featured);
    if (featured) {
      const heroImg = document.getElementById('hero-featured-img');
      if (heroImg) {
        heroImg.innerHTML = `<img src="${esc(featured.image)}" alt="${esc(featured.name)}" loading="lazy">`;
      }
    }
  }

  // ----------------------------------------------------------
  // 4. CATEGORIAS
  // ----------------------------------------------------------

  function buildCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    const cats = cfg.categories.filter(c => c.id !== 'todos');

    grid.innerHTML = cats.map(cat => `
      <div class="category-card" data-cat="${esc(cat.id)}" role="button" tabindex="0"
           aria-label="Ver produtos de ${esc(cat.label)}">
        <span class="cat-icon" aria-hidden="true">${cat.icon || '📦'}</span>
        <span class="cat-label">${esc(cat.label)}</span>
      </div>
    `).join('');

    // Clicar na categoria rola até produtos e filtra
    grid.querySelectorAll('.category-card').forEach(card => {
      function activate() {
        const catId = card.dataset.cat;
        filterProducts(catId);
        document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
        // Atualiza filtro ativo na barra de filtros
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.cat === catId);
        });
        // Atualiza visual do card
        grid.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      }
      card.addEventListener('click', activate);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
    });
  }

  // ----------------------------------------------------------
  // 5. GRID DE PRODUTOS (destaque e completo)
  // ----------------------------------------------------------

  /** Gera o HTML de um card de produto */
  function productCardHTML(product) {
    const tags = (product.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
    const price = product.price || 'Sob orçamento';

    return `
      <article class="product-card" data-id="${product.id}" data-cat="${esc(product.category)}"
               role="button" tabindex="0" aria-label="${esc(product.name)}">
        <div class="product-card-img">
          <img src="${esc(product.image)}" alt="${esc(product.name)}" loading="lazy"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22400%22 height=%22300%22 fill=%22%23f3f4f6%22/><text x=%22200%22 y=%22155%22 text-anchor=%22middle%22 font-size=%2240%22>📦</text></svg>'">
          <span class="product-badge ${badgeClass(product.status)}">${esc(product.status || 'Disponível')}</span>
        </div>
        <div class="product-card-body">
          <div class="product-card-cat">${esc(categoryLabel(product.category))}</div>
          <div class="product-card-name">${esc(product.name)}</div>
          <div class="product-card-desc">${esc(product.shortDescription || '')}</div>
          <div class="product-card-tags">${tags}</div>
          <div class="product-card-price">${esc(price)}</div>
        </div>
        <div class="product-card-footer">
          <button class="btn btn-sm btn-outline js-details" data-id="${product.id}"
                  aria-label="Ver detalhes de ${esc(product.name)}">
            Ver detalhes
          </button>
          <a class="btn btn-sm btn-whatsapp js-buy"
             href="${whatsappLink(product.whatsappMessage)}"
             target="_blank" rel="noopener"
             aria-label="Comprar ${esc(product.name)} pelo WhatsApp"
             onclick="event.stopPropagation()">
            Comprar
          </a>
        </div>
      </article>
    `;
  }

  /** Retorna o label legível de uma categoria pelo id */
  function categoryLabel(catId) {
    const cat = cfg.categories.find(c => c.id === catId);
    return cat ? cat.label : catId;
  }

  /** Constrói a grade de produtos em destaque */
  function buildFeatured() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;

    const featured = cfg.products.filter(p => p.featured);
    if (featured.length === 0) {
      grid.innerHTML = '<p class="no-products-msg">Nenhum produto em destaque configurado.</p>';
      return;
    }

    grid.innerHTML = featured.map(productCardHTML).join('');
    attachCardListeners(grid);
  }

  /** Constrói a grade completa de produtos e os filtros */
  let currentFilter = 'todos';

  function buildProductsGrid() {
    buildFilterBar();
    filterProducts('todos');
  }

  function buildFilterBar() {
    const bar = document.getElementById('filter-bar');
    if (!bar) return;

    bar.innerHTML = cfg.categories.map(cat => `
      <button class="filter-btn${cat.id === 'todos' ? ' active' : ''}"
              data-cat="${esc(cat.id)}"
              aria-pressed="${cat.id === 'todos'}">
        ${cat.icon ? cat.icon + ' ' : ''}${esc(cat.label)}
      </button>
    `).join('');

    bar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        bar.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        filterProducts(btn.dataset.cat);
      });
    });
  }

  function filterProducts(catId) {
    currentFilter = catId;
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    const filtered = catId === 'todos'
      ? cfg.products
      : cfg.products.filter(p => p.category === catId);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="empty-state-icon">📦</div>
          <div class="empty-state-title">Nenhum produto nesta categoria</div>
          <div class="empty-state-text">Tente outra categoria ou fale com a gente pelo WhatsApp.</div>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map(productCardHTML).join('');
    attachCardListeners(grid);
  }

  /** Adiciona listeners de clique nos cards para abrir modal */
  function attachCardListeners(container) {
    // "Ver detalhes" button
    container.querySelectorAll('.js-details').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        openModal(Number(btn.dataset.id));
      });
    });

    // Clique no card inteiro abre modal
    container.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openModal(Number(card.dataset.id)));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') openModal(Number(card.dataset.id));
      });
    });
  }

  // ----------------------------------------------------------
  // 6. MODAL DE DETALHES
  // ----------------------------------------------------------

  function openModal(productId) {
    const product = cfg.products.find(p => p.id === productId);
    if (!product) return;

    // Preenche dados no modal
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-img').alt = product.name;
    document.getElementById('modal-cat').textContent  = categoryLabel(product.category);
    document.getElementById('modal-name').textContent = product.name;
    document.getElementById('modal-price').textContent = product.price || 'Sob orçamento';
    document.getElementById('modal-desc').textContent  = product.fullDescription || product.shortDescription || '';
    document.getElementById('modal-deadline').textContent = product.deadline || 'A combinar';
    document.getElementById('modal-status').textContent   = product.status || 'Disponível';

    const tagsEl = document.getElementById('modal-tags');
    tagsEl.innerHTML = (product.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');

    const waBtn = document.getElementById('modal-whatsapp-btn');
    if (waBtn) waBtn.href = whatsappLink(product.whatsappMessage);

    // Abre overlay
    const overlay = document.getElementById('product-modal');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Foco acessível
    document.getElementById('modal-close-btn')?.focus();
  }

  function closeModal() {
    const overlay = document.getElementById('product-modal');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function buildModal() {
    document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
    document.getElementById('modal-close-btn2')?.addEventListener('click', closeModal);
    document.getElementById('product-modal')?.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // ----------------------------------------------------------
  // 7. SEÇÃO PERSONALIZADOS
  // ----------------------------------------------------------

  function buildCustomSection() {
    const c = cfg.custom;
    const title    = document.getElementById('custom-title');
    const subtitle = document.getElementById('custom-subtitle');
    const btn      = document.getElementById('custom-btn');

    if (title)    title.textContent    = c.title;
    if (subtitle) subtitle.textContent = c.subtitle;
    if (btn) {
      btn.textContent = '✏️ ' + c.buttonText;
      btn.href = whatsappLink(c.whatsappMessage);
    }
  }

  // ----------------------------------------------------------
  // 8. COMO COMPRAR
  // ----------------------------------------------------------

  function buildHowToBuy() {
    const hw = cfg.howToBuy;
    const titleEl    = document.getElementById('howtobuy-title');
    const subtitleEl = document.getElementById('howtobuy-subtitle');
    const grid       = document.getElementById('steps-grid');

    if (titleEl)    titleEl.textContent    = hw.title;
    if (subtitleEl) subtitleEl.textContent = hw.subtitle;
    if (!grid) return;

    grid.innerHTML = hw.steps.map(step => `
      <div class="step-card">
        <div class="step-number">${esc(step.number)}</div>
        <div class="step-title">${esc(step.title)}</div>
        <div class="step-desc">${esc(step.description)}</div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------
  // 9. DIFERENCIAIS
  // ----------------------------------------------------------

  function buildFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;

    grid.innerHTML = cfg.features.map(f => `
      <div class="feature-card">
        <div class="feature-icon" aria-hidden="true">${f.icon || '✦'}</div>
        <div class="feature-title">${esc(f.title)}</div>
        <div class="feature-desc">${esc(f.description)}</div>
      </div>
    `).join('');
  }

  // ----------------------------------------------------------
  // 10. CONTATO
  // ----------------------------------------------------------

  function buildContact() {
    const items = document.getElementById('contact-items');
    const cityEl = document.getElementById('contact-city');

    if (cityEl) cityEl.textContent = cfg.city || '';

    if (items) {
      const waMsg = encodeURIComponent('Olá! Vim pelo site e gostaria de falar com a ' + cfg.companyName + '.');
      items.innerHTML = `
        <a class="contact-item" href="https://wa.me/${cfg.whatsappNumber.replace(/\D/g,'')}?text=${waMsg}"
           target="_blank" rel="noopener" aria-label="WhatsApp">
          <div class="contact-item-icon">💬</div>
          <div>
            <div class="contact-item-label">WhatsApp</div>
            <div class="contact-item-value">${esc(formatPhone(cfg.whatsappNumber))}</div>
          </div>
        </a>
        <a class="contact-item" href="${esc(cfg.instagram)}"
           target="_blank" rel="noopener" aria-label="Instagram">
          <div class="contact-item-icon">📸</div>
          <div>
            <div class="contact-item-label">Instagram</div>
            <div class="contact-item-value">@${esc(cfg.instagram.split('/').pop())}</div>
          </div>
        </a>
        <a class="contact-item" href="mailto:${esc(cfg.email)}" aria-label="E-mail">
          <div class="contact-item-icon">✉️</div>
          <div>
            <div class="contact-item-label">E-mail</div>
            <div class="contact-item-value">${esc(cfg.email)}</div>
          </div>
        </a>
        <div class="contact-item">
          <div class="contact-item-icon">📍</div>
          <div>
            <div class="contact-item-label">Localização</div>
            <div class="contact-item-value">${esc(cfg.city)}</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">🕐</div>
          <div>
            <div class="contact-item-label">Atendimento</div>
            <div class="contact-item-value">${esc(cfg.businessHours || 'Seg–Sex, 9h–18h')}</div>
          </div>
        </div>
      `;
    }
  }

  /** Formata número de WhatsApp de forma legível */
  function formatPhone(num) {
    const n = num.replace(/\D/g, '');
    // 5512999999999 → +55 (12) 99999-9999
    if (n.length === 13) {
      return `+${n.slice(0,2)} (${n.slice(2,4)}) ${n.slice(4,9)}-${n.slice(9)}`;
    }
    return num;
  }

  // ----------------------------------------------------------
  // 11. RODAPÉ
  // ----------------------------------------------------------

  function buildFooter() {
    // Tagline
    const tagline = document.getElementById('footer-tagline');
    if (tagline) {
      tagline.innerHTML = esc(cfg.slogan) + '<br>' + esc(cfg.city) + '.';
    }

    // Copyright
    const copy = document.getElementById('footer-copy');
    if (copy) copy.textContent = cfg.footer?.copyright || `© ${new Date().getFullYear()} ${cfg.companyName}. Todos os direitos reservados.`;

    // Categorias no rodapé (exceto "Todos")
    const footerCats = document.getElementById('footer-categories');
    if (footerCats) {
      footerCats.innerHTML = cfg.categories
        .filter(c => c.id !== 'todos')
        .slice(0, 6)
        .map(c => `<a href="#produtos" onclick="filterProducts('${esc(c.id)}')">${esc(c.label)}</a>`)
        .join('');
    }

    // Contato no rodapé
    const footerContact = document.getElementById('footer-contact-links');
    if (footerContact) {
      const waMsg = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações.');
      footerContact.innerHTML = `
        <a href="https://wa.me/${cfg.whatsappNumber.replace(/\D/g,'')}?text=${waMsg}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="${esc(cfg.instagram)}" target="_blank" rel="noopener">Instagram</a>
        <a href="mailto:${esc(cfg.email)}">E-mail</a>
        <span>${esc(cfg.city)}</span>
      `;
    }

    // Social links
    const social = document.getElementById('footer-social');
    if (social) {
      social.innerHTML = `
        <a href="${esc(cfg.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">📸</a>
        <a href="https://wa.me/${cfg.whatsappNumber.replace(/\D/g,'')}" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>
        <a href="mailto:${esc(cfg.email)}" aria-label="E-mail">✉️</a>
      `;
    }
  }

  // ----------------------------------------------------------
  // 12. MENU MOBILE (HAMBÚRGUER)
  // ----------------------------------------------------------

  function buildMobileMenu() {
    const btn = document.getElementById('hamburger-btn');
    const nav = document.getElementById('mobile-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Exposta globalmente para os links do mobile nav usarem
  window.closeMobileNav = function () {
    const btn = document.getElementById('hamburger-btn');
    const nav = document.getElementById('mobile-nav');
    if (nav) nav.classList.remove('open');
    if (btn) { btn.classList.remove('active'); btn.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  };

  // Exposta globalmente para o rodapé
  window.filterProducts = filterProducts;

  // ----------------------------------------------------------
  // 13. SCROLL REVEAL (animação de entrada suave)
  // ----------------------------------------------------------

  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach(el => obs.observe(el));
    } else {
      // Fallback: mostra tudo imediatamente
      els.forEach(el => el.classList.add('visible'));
    }
  }

  // ----------------------------------------------------------
  // 14. ACTIVE NAV NO SCROLL
  // ----------------------------------------------------------

  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a');

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(a => {
            a.style.color = a.getAttribute('href') === '#' + id
              ? 'var(--primary)'
              : '';
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => obs.observe(s));
  }

  // ----------------------------------------------------------
  // 15. INIT — CHAMA TUDO
  // ----------------------------------------------------------

  function init() {
    applyColors();
    buildHeader();
    buildHero();
    buildCategories();
    buildFeatured();
    buildProductsGrid();
    buildCustomSection();
    buildHowToBuy();
    buildFeatures();
    buildContact();
    buildFooter();
    buildModal();
    buildMobileMenu();
    initScrollReveal();
    initScrollSpy();
  }

  // Roda quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
