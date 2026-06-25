/* CareerByteCode — v4 interactions (vanilla, lightweight)
   live clock, mobile sheet, reveals, count-up, word-reveal */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* live clock (visitor's local time + timezone) */
  var clk = document.querySelectorAll('[data-clock]');
  if (clk.length) {
    var tick = function () {
      var now = new Date();
      var t = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(now);
      var tz = '';
      try {
        var parts = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).formatToParts(now);
        var p = parts.filter(function (x) { return x.type === 'timeZoneName'; })[0];
        if (p && p.value) tz = ' ' + p.value;
      } catch (e) {}
      clk.forEach(function (e) { e.textContent = t + tz; });
    };
    tick(); setInterval(tick, 1000);
  }

  /* mobile sheet */
  var mb = document.querySelector('.navp__menu'), sh = document.querySelector('.sheet');
  if (mb && sh) {
    mb.addEventListener('click', function () { sh.classList.add('open'); });
    sh.addEventListener('click', function (e) {
      if (e.target.classList.contains('sheet__bg') || e.target.closest('[data-sheet-close]') || e.target.tagName === 'A') sh.classList.remove('open');
    });
  }

  /* mentor accordions */
  document.querySelectorAll('.acc__head').forEach(function (h) {
    h.addEventListener('click', function () {
      var a = h.closest('.acc'); var o = a.classList.toggle('open');
      h.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
  });

  /* tabs (generic [data-tab-btn] / [data-tab-panel]) */
  document.querySelectorAll('.tabs').forEach(function (tabs) {
    var btns = tabs.querySelectorAll('[data-tab-btn]');
    var scope = tabs.parentNode;
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var key = b.getAttribute('data-tab-btn');
        btns.forEach(function (x) { x.classList.toggle('active', x === b); });
        scope.querySelectorAll('[data-tab-panel]').forEach(function (p) {
          p.classList.toggle('active', p.getAttribute('data-tab-panel') === key);
        });
      });
    });
  });

  /* back to top */
  var btt = document.querySelector('.btt');
  if (btt) {
    var onScroll = function () { if (window.scrollY > 600) btt.classList.add('show'); else btt.classList.remove('show'); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  }

  /* reveals */
  var rvs = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) { rvs.forEach(function (e) { e.classList.add('in'); }); }
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    rvs.forEach(function (e) { io.observe(e); });
  }

  /* count-up stats */
  function animate(el) {
    var raw = el.getAttribute('data-count') || el.textContent;
    var m = raw.match(/^([\d.]+)(.*)$/); if (!m) { el.textContent = raw; return; }
    var target = parseFloat(m[1]), suffix = m[2], dec = (m[1].split('.')[1] || '').length;
    if (reduce) { el.textContent = raw; return; }
    var start = null, dur = 1100;
    function step(ts) { if (!start) start = ts; var p = Math.min((ts - start) / dur, 1); var e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec) + suffix; if (p < 1) requestAnimationFrame(step); else el.textContent = raw; }
    requestAnimationFrame(step);
  }
  var stats = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && !reduce) {
    var sio = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { animate(en.target); sio.unobserve(en.target); } }); }, { threshold: 0.6 });
    stats.forEach(function (e) { sio.observe(e); });
  } else { stats.forEach(function (e) { e.textContent = e.getAttribute('data-count') || e.textContent; }); }

  /* word-by-word about reveal */
  var para = document.querySelector('.about4__p');
  if (para) {
    var words = para.textContent.trim().split(/\s+/);
    para.textContent = '';
    var spans = words.map(function (w) { var s = document.createElement('span'); s.className = 'v2w'; s.textContent = w; para.appendChild(s); para.appendChild(document.createTextNode(' ')); return s; });
    if (reduce) { spans.forEach(function (s) { s.classList.add('lit'); }); }
    else {
      var ticking = false;
      var upd = function () { ticking = false; var r = para.getBoundingClientRect(), vh = window.innerHeight, st = vh * 0.85, en = vh * 0.35;
        var p = (st - r.top) / (r.height + (st - en)); p = p < 0 ? 0 : p > 1 ? 1 : p; var n = Math.round(p * spans.length);
        for (var i = 0; i < spans.length; i++) { if (i < n) spans[i].classList.add('lit'); else spans[i].classList.remove('lit'); } };
      window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
      window.addEventListener('resize', upd, { passive: true }); upd();
    }
  }
})();
