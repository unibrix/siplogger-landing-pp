/* SipLogger homepage scenes. Page-local: the scroll-craft engine stays
   untouched. Everything here reads an act's --sc-p and writes opacity only. */

/* The site header is sticky; landing.css keeps every pinned stage below it. */
(function () {
  var head = document.querySelector('.site-header');
  function set() { document.documentElement.style.setProperty('--hdr', (head ? head.getBoundingClientRect().height : 0).toFixed(1) + 'px'); }
  set();
  addEventListener('resize', set);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(set);
})();

/* ----------------------------------------------- the evening, as a curve --
   Reads the act's --sc-p. The curve is revealed by a clip that grows with the
   scroll, a dot rides its leading edge, markers switch on as the edge passes
   them, and the still phone's screen follows (opacity only). */
(function () {
  'use strict';
  var act = document.querySelector('.day-act');
  if (!act) return;
  var wrap = act.querySelector('.curve-wrap');
  var reveal = act.querySelector('.curve__reveal');
  var now = act.querySelector('.curve__now');
  var marks = Array.prototype.slice.call(act.querySelectorAll('[data-at]'));
  var screens = Array.prototype.slice.call(act.querySelectorAll('.day-screen'));
  var steps = Array.prototype.slice.call(act.querySelectorAll('.day-step'));
  var WARP = JSON.parse(wrap.getAttribute('data-warp'));    // [[act progress, curve fraction], ...]
  var S = JSON.parse(wrap.getAttribute('data-samples'));   // [fraction, x, y]
  var clock = act.querySelector('.curve__clock');
  var HR = (wrap.getAttribute('data-hours') || '21,29.5').split(',').map(Number);
  var W = 1000, last = -1;
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function point(f) {                                      // the curve at fraction f
    for (var i = 1; i < S.length; i++) {
      if (S[i][0] >= f) { var a = S[i - 1], b = S[i], t = (f - a[0]) / (b[0] - a[0] || 1); return [a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
    }
    return [S[S.length - 1][1], S[S.length - 1][2]];
  }
  function frame() {
    var p = parseFloat(act.style.getPropertyValue('--sc-p')) || 0;
    if (Math.abs(p - last) > 0.0004) {
      last = p;
      var f = 0;
      if (p >= WARP[WARP.length - 1][0]) f = 1;
      else for (var k = 1; k < WARP.length; k++) {
        if (p <= WARP[k][0]) { var a0 = WARP[k - 1], a1 = WARP[k]; f = clamp(a0[1] + (p - a0[0]) / (a1[0] - a0[0]) * (a1[1] - a0[1]), 0, 1); break; }
      }
      reveal.setAttribute('width', (f * W).toFixed(1));
      var pt = point(f);
      now.setAttribute('cx', pt[0].toFixed(1)); now.setAttribute('cy', pt[1].toFixed(1));
      now.style.opacity = f > 0.002 && f < 0.998 ? 1 : 0;
      if (clock) {                                           // the session's time at the drawing edge, to the minute
        var m = Math.round((HR[0] + f * (HR[1] - HR[0])) * 60), h = Math.floor(m / 60) % 24;
        var txt = (h < 10 ? '0' : '') + h + ':' + ((m % 60) < 10 ? '0' : '') + (m % 60);
        if (clock.textContent !== txt) clock.textContent = txt;
      }
      marks.forEach(function (m) { m.classList.toggle('is-on', p >= +m.getAttribute('data-at')); });
      var top = 0;
      screens.forEach(function (s, i) {
        var o = i === 0 ? 1 : clamp((p - +s.getAttribute('data-from')) / 0.03, 0, 1);
        s.style.opacity = o.toFixed(3);
        if (o >= 0.5) top = i;
      });
      // only the screen on top is announced (the ones beneath stay at full opacity under it)
      screens.forEach(function (s, i) { s.setAttribute('aria-hidden', i === top ? 'false' : 'true'); });
      var on = +screens[top].getAttribute('data-step');
      steps.forEach(function (s, i) { s.classList.toggle('is-on', i === on); });
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
