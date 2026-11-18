/* Plug-ins gratuits — page */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const safe = (f) => { try { return f(); } catch (e) { return null; } };
  /* plug-ins gratuits */
  const PL = window.BRICKS_PLUGINS || [];
  const first = (t) => { const m = (t || '').match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : t; };
  const dl = (p) => { const f = p.telechargementMac || ''; return p.statut === 'disponible' && f ? `<a class="dl" href="${f}" download>${p.essai ? "Télécharger l'essai pour Mac" : 'Télécharger pour Mac'}</a>` : `<span class="dl off">Téléchargement bientôt</span>`; };
  $('#free').innerHTML = PL.map((p) => `<article class="card reveal" style="--c:${p.couleur}"><span class="tag-free">${p.essai ? 'ESSAI 30 JOURS' : 'GRATUIT'}</span><div class="ph"><img src="img/free/${p.id}.webp" alt="${p.nom}" loading="lazy"></div><div class="bd"><span class="g">${p.genre}</span><h3>${p.nom}</h3><p>${first(p.resume)}</p><button class="more" aria-expanded="false">Voir le détail</button><div class="det"><p>${p.resume}</p><ul>${(p.points || []).map((x) => `<li>${x}</li>`).join('')}</ul></div><span class="fm">${(p.formats || []).join(' · ') || 'Mac'}</span>${dl(p)}</div></article>`).join('');
  document.addEventListener('click', (e) => { const b = e.target.closest('.more'); if (b) { const c = b.closest('.card'); c.classList.toggle('open'); b.textContent = c.classList.contains('open') ? 'Masquer' : 'Voir le détail'; } });

  /* packs de sons gratuits (BeatForge / DrumForge) */
  $('#packs').innerHTML = (window.BRICKS_PACKS || []).map((k) => `<a class="pack reveal" style="--c:${k.couleur}" href="${k.zip}" download><b>${k.nom}</b><span>${k.texte}</span><i>Télécharger · ${k.mo} Mo</i></a>`).join('');
})();
/*FIX-REVEAL*/document.querySelectorAll('#free .reveal,#packs .reveal').forEach(function (e) { e.classList.add('in'); });
