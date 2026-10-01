(function () {
  'use strict';
  var C = window.CONFIG || {};

  [].forEach.call(document.querySelectorAll('[data-cfg]'), function (e) {
    var k = e.getAttribute('data-cfg');
    if (C[k] !== undefined) e.textContent = C[k];
  });

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt) n.textContent = txt;
    return n;
  }
  function addNav(href, label, beforeHref) {
    var nav = document.querySelector('.top nav');
    if (!nav) return;
    var a = el('a', '', label);
    a.href = href;
    var ref = beforeHref && nav.querySelector('a[href="' + beforeHref + '"]');
    nav.insertBefore(a, ref || null);
  }

  /* Seccion Velocidad (apagada por defecto) */
  if (C.mostrarVelocidad) {
    var sp = el('section', 'speed'); sp.id = 'velocidad';
    var w = el('div', 'wrap');
    var h = el('h2', '', 'Velocidad de reparación');
    var p = el('p', 'claim-v', C.usarClaimAlternativo ? C.claimAlternativo : C.claimVelocidad);
    w.appendChild(h); w.appendChild(p); sp.appendChild(w);
    var t = document.getElementById('taller');
    t.parentNode.insertBefore(sp, t.nextSibling);
    addNav('#velocidad', 'Velocidad', '#ubicacion');
  }

  /* Seccion Opiniones (apagada por defecto) */
  if (C.mostrarOpiniones && C.resenas && C.resenas.length) {
    var so = el('section'); so.id = 'opiniones';
    var wo = el('div', 'wrap');
    wo.appendChild(el('h2', '', 'Lo que dicen nuestros clientes'));
    var g = el('div', 'rev');
    C.resenas.forEach(function (r) {
      var f = el('figure', 'q');
      f.appendChild(el('p', 't', '“' + r.texto + '”'));
      f.appendChild(el('p', 'who', r.autor));
      f.appendChild(el('p', 'src', 'Reseña de Google, ' + r.fecha));
      g.appendChild(f);
    });
    wo.appendChild(g); so.appendChild(wo);
    var u = document.getElementById('ubicacion');
    u.parentNode.insertBefore(so, u);
    addNav('#opiniones', 'Opiniones', '#ubicacion');
  }

  /* Cinta de logos: duplicar para loop continuo */
  var mq = document.getElementById('mq');
  if (mq && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var base = [].slice.call(mq.children);
    for (var r = 0; r < 3; r++) {
      base.forEach(function (n) {
        var c = n.cloneNode();
        c.alt = '';
        c.setAttribute('aria-hidden', 'true');
        c.removeAttribute('loading');
        mq.appendChild(c);
      });
    }
  }
})();
