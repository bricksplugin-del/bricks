/* BrickS Forge : la boutique. Les boutons ACHETER s'allument quand SHOP.launch = true ET qu'un lien d'achat existe (shop-data.js). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)]; const S = window.SHOP || {};
  $$('.buy').forEach((b) => { const id = b.dataset.buy, url = (S.buy || {})[id]; if (S.launch && url) { b.textContent = 'Acheter'; b.href = url; } });
  /* le catalogue : filtres par famille */
  const bar = $('#fil'); if (bar) { const cards = $$('.pc'); const set = (f) => { cards.forEach((c) => { c.hidden = f !== 'all' && c.dataset.fam !== f; }); $$('button', bar).forEach((x) => x.classList.toggle('on', x.dataset.f === f)); history.replaceState(null, '', f === 'all' ? location.pathname : '#' + encodeURIComponent(f)); };
    bar.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) set(b.dataset.f); }); const h = decodeURIComponent(location.hash.slice(1)); set(h && $$('button', bar).some((x) => x.dataset.f === h) ? h : 'all'); }
  /* les bundles : deplier la liste du contenu */
  $$('.bd-more').forEach((a) => a.addEventListener('click', (e) => { const art = a.closest('.bd'); if (location.pathname.endsWith('bundles.html') && art) { e.preventDefault(); art.classList.toggle('open'); a.textContent = art.classList.contains('open') ? 'Masquer le contenu' : 'Voir le contenu'; } }));
  const hh = location.hash; if (hh.startsWith('#b-')) { const art = $(hh); if (art) { art.classList.add('open'); const m = $('.bd-more', art); if (m) m.textContent = 'Masquer le contenu'; } }
  /* RETOUR : revient la ou on etait (la page precedente du site), sinon va a la page prevue */
  $$('.back').forEach((a) => a.addEventListener('click', (e) => { try { if (document.referrer && new URL(document.referrer).origin === location.origin && history.length > 1) { e.preventDefault(); history.back(); } } catch (x) {} }));
})();
