/* BrickS — éléments communs à toutes les pages */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const safe = (f) => { try { return f(); } catch (e) { return null; } };
  /* navigation */
  const nav = $('#nav'); const onScroll = () => nav.classList.toggle('solid', scrollY > 60); onScroll(); addEventListener('scroll', onScroll, { passive: true });

  /* apparition au scroll */
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .1 });
  $$('.sec h2, .shot, .viewer, .feat li, .info3 article, .spec5 article, .steps li, .plain li, .warm li, .branch, .reveal').forEach((el) => { el.classList.add('reveal'); io.observe(el); });
})();
