// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function E(t) {
  return t.split("-")[0];
}
function N(t) {
  return t.split("-")[1];
}
function H(t) {
  return ["top", "bottom"].includes(E(t)) ? "x" : "y";
}
function Z(t) {
  return t === "y" ? "height" : "width";
}
function st(t, e, n) {
  let {
    reference: i,
    floating: o
  } = t;
  const r = i.x + i.width / 2 - o.width / 2, l = i.y + i.height / 2 - o.height / 2, s = H(e), a = Z(s), f = i[a] / 2 - o[a] / 2, p = E(e), u = s === "x";
  let c;
  switch (p) {
    case "top":
      c = {
        x: r,
        y: i.y - o.height
      };
      break;
    case "bottom":
      c = {
        x: r,
        y: i.y + i.height
      };
      break;
    case "right":
      c = {
        x: i.x + i.width,
        y: l
      };
      break;
    case "left":
      c = {
        x: i.x - o.width,
        y: l
      };
      break;
    default:
      c = {
        x: i.x,
        y: i.y
      };
  }
  switch (N(e)) {
    case "start":
      c[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      c[s] += f * (n && u ? -1 : 1);
      break;
  }
  return c;
}
const Ct = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: l
  } = n, s = r.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let f = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: p,
    y: u
  } = st(f, i, a), c = i, h = {}, d = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: v,
      fn: g
    } = s[m], {
      x: w,
      y: x,
      data: b,
      reset: y
    } = await g({
      x: p,
      y: u,
      initialPlacement: i,
      placement: c,
      strategy: o,
      middlewareData: h,
      rects: f,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (p = w != null ? w : p, u = x != null ? x : u, h = {
      ...h,
      [v]: {
        ...h[v],
        ...b
      }
    }, y && d <= 50) {
      d++, typeof y == "object" && (y.placement && (c = y.placement), y.rects && (f = y.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : y.rects), {
        x: p,
        y: u
      } = st(f, c, a)), m = -1;
      continue;
    }
  }
  return {
    x: p,
    y: u,
    placement: c,
    strategy: o,
    middlewareData: h
  };
};
function Pt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function tt(t) {
  return typeof t != "number" ? Pt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function j(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
async function et(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: i,
    y: o,
    platform: r,
    rects: l,
    elements: s,
    strategy: a
  } = t, {
    boundary: f = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: u = "floating",
    altBoundary: c = !1,
    padding: h = 0
  } = e, d = tt(h), v = s[c ? u === "floating" ? "reference" : "floating" : u], g = j(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(v))) == null || n ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: p,
    strategy: a
  })), w = j(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: u === "floating" ? {
      ...l.floating,
      x: i,
      y: o
    } : l.reference,
    offsetParent: await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)),
    strategy: a
  }) : l[u]);
  return {
    top: g.top - w.top + d.top,
    bottom: w.bottom - g.bottom + d.bottom,
    left: g.left - w.left + d.left,
    right: w.right - g.right + d.right
  };
}
const pt = Math.min, ht = Math.max;
function J(t, e, n) {
  return ht(t, pt(e, n));
}
const Ot = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: i = 0
    } = t != null ? t : {}, {
      x: o,
      y: r,
      placement: l,
      rects: s,
      platform: a
    } = e;
    if (n == null)
      return {};
    const f = tt(i), p = {
      x: o,
      y: r
    }, u = H(l), c = N(l), h = Z(u), d = await a.getDimensions(n), m = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", g = s.reference[h] + s.reference[u] - p[u] - s.floating[h], w = p[u] - s.reference[u], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? u === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = s.floating[h]);
    const y = g / 2 - w / 2, A = f[m], T = b - d[h] - f[v], P = b / 2 - d[h] / 2 + y, C = J(A, P, T), _ = (c === "start" ? f[m] : f[v]) > 0 && P !== C && s.reference[h] <= s.floating[h] ? P < A ? A - P : T - P : 0;
    return {
      [u]: p[u] - _,
      data: {
        [u]: C,
        centerOffset: P - C
      }
    };
  }
}), At = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Y(t) {
  return t.replace(/left|right|bottom|top/g, (e) => At[e]);
}
function mt(t, e, n) {
  n === void 0 && (n = !1);
  const i = N(t), o = H(t), r = Z(o);
  let l = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Y(l)), {
    main: l,
    cross: Y(l)
  };
}
const Tt = {
  start: "end",
  end: "start"
};
function Q(t) {
  return t.replace(/start|end/g, (e) => Tt[e]);
}
const _t = ["top", "right", "bottom", "left"], St = /* @__PURE__ */ _t.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
function Lt(t, e, n) {
  return (t ? [...n.filter((o) => N(o) === t), ...n.filter((o) => N(o) !== t)] : n.filter((o) => E(o) === o)).filter((o) => t ? N(o) === t || (e ? Q(o) !== o : !1) : !0);
}
const $t = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, i, o, r, l;
      const {
        x: s,
        y: a,
        rects: f,
        middlewareData: p,
        placement: u,
        platform: c,
        elements: h
      } = e, {
        alignment: d = null,
        allowedPlacements: m = St,
        autoAlignment: v = !0,
        ...g
      } = t, w = Lt(d, v, m), x = await et(e, g), b = (n = (i = p.autoPlacement) == null ? void 0 : i.index) != null ? n : 0, y = w[b];
      if (y == null)
        return {};
      const {
        main: A,
        cross: T
      } = mt(y, f, await (c.isRTL == null ? void 0 : c.isRTL(h.floating)));
      if (u !== y)
        return {
          x: s,
          y: a,
          reset: {
            placement: w[0]
          }
        };
      const P = [x[E(y)], x[A], x[T]], C = [...(o = (r = p.autoPlacement) == null ? void 0 : r.overflows) != null ? o : [], {
        placement: y,
        overflows: P
      }], S = w[b + 1];
      if (S)
        return {
          data: {
            index: b + 1,
            overflows: C
          },
          reset: {
            placement: S
          }
        };
      const R = C.slice().sort((O, V) => O.overflows[0] - V.overflows[0]), _ = (l = R.find((O) => {
        let {
          overflows: V
        } = O;
        return V.every((U) => U <= 0);
      })) == null ? void 0 : l.placement, L = _ != null ? _ : R[0].placement;
      return L !== u ? {
        data: {
          index: b + 1,
          overflows: C
        },
        reset: {
          placement: L
        }
      } : {};
    }
  };
};
function Et(t) {
  const e = Y(t);
  return [Q(t), e, Q(e)];
}
const Dt = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: i,
        middlewareData: o,
        rects: r,
        initialPlacement: l,
        platform: s,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: u,
        fallbackStrategy: c = "bestFit",
        flipAlignment: h = !0,
        ...d
      } = t, m = E(i), g = u || (m === l || !h ? [Y(l)] : Et(l)), w = [l, ...g], x = await et(e, d), b = [];
      let y = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (f && b.push(x[m]), p) {
        const {
          main: C,
          cross: S
        } = mt(i, r, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
        b.push(x[C], x[S]);
      }
      if (y = [...y, {
        placement: i,
        overflows: b
      }], !b.every((C) => C <= 0)) {
        var A, T;
        const C = ((A = (T = o.flip) == null ? void 0 : T.index) != null ? A : 0) + 1, S = w[C];
        if (S)
          return {
            data: {
              index: C,
              overflows: y
            },
            reset: {
              placement: S
            }
          };
        let R = "bottom";
        switch (c) {
          case "bestFit": {
            var P;
            const _ = (P = y.map((L) => [L, L.overflows.filter((O) => O > 0).reduce((O, V) => O + V, 0)]).sort((L, O) => L[1] - O[1])[0]) == null ? void 0 : P[0].placement;
            _ && (R = _);
            break;
          }
          case "initialPlacement":
            R = l;
            break;
        }
        if (i !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
async function kt(t, e) {
  const {
    placement: n,
    platform: i,
    elements: o
  } = t, r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), l = E(n), s = N(n), a = H(n) === "x", f = ["left", "top"].includes(l) ? -1 : 1, p = r && a ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: c,
    crossAxis: h,
    alignmentAxis: d
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return s && typeof d == "number" && (h = s === "end" ? d * -1 : d), a ? {
    x: h * p,
    y: c * f
  } : {
    x: c * f,
    y: h * p
  };
}
const Bt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i
      } = e, o = await kt(e, t);
      return {
        x: n + o.x,
        y: i + o.y,
        data: o
      };
    }
  };
};
function Vt(t) {
  return t === "x" ? "y" : "x";
}
const Wt = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i,
        placement: o
      } = e, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (v) => {
            let {
              x: g,
              y: w
            } = v;
            return {
              x: g,
              y: w
            };
          }
        },
        ...a
      } = t, f = {
        x: n,
        y: i
      }, p = await et(e, a), u = H(E(o)), c = Vt(u);
      let h = f[u], d = f[c];
      if (r) {
        const v = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", w = h + p[v], x = h - p[g];
        h = J(w, h, x);
      }
      if (l) {
        const v = c === "y" ? "top" : "left", g = c === "y" ? "bottom" : "right", w = d + p[v], x = d - p[g];
        d = J(w, d, x);
      }
      const m = s.fn({
        ...e,
        [u]: h,
        [c]: d
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - i
        }
      };
    }
  };
}, Ft = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: i,
        elements: o,
        rects: r,
        platform: l,
        strategy: s
      } = e, {
        padding: a = 2,
        x: f,
        y: p
      } = t, u = j(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: r.reference,
        offsetParent: await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)),
        strategy: s
      }) : r.reference), c = (n = await (l.getClientRects == null ? void 0 : l.getClientRects(o.reference))) != null ? n : [], h = tt(a);
      function d() {
        if (c.length === 2 && c[0].left > c[1].right && f != null && p != null) {
          var v;
          return (v = c.find((g) => f > g.left - h.left && f < g.right + h.right && p > g.top - h.top && p < g.bottom + h.bottom)) != null ? v : u;
        }
        if (c.length >= 2) {
          if (H(i) === "x") {
            const R = c[0], _ = c[c.length - 1], L = E(i) === "top", O = R.top, V = _.bottom, U = L ? R.left : _.left, it = L ? R.right : _.right, bt = it - U, Rt = V - O;
            return {
              top: O,
              bottom: V,
              left: U,
              right: it,
              width: bt,
              height: Rt,
              x: U,
              y: O
            };
          }
          const g = E(i) === "left", w = ht(...c.map((R) => R.right)), x = pt(...c.map((R) => R.left)), b = c.filter((R) => g ? R.left === x : R.right === w), y = b[0].top, A = b[b.length - 1].bottom, T = x, P = w, C = P - T, S = A - y;
          return {
            top: y,
            bottom: A,
            left: T,
            right: P,
            width: C,
            height: S,
            x: T,
            y
          };
        }
        return u;
      }
      const m = await l.getElementRects({
        reference: {
          getBoundingClientRect: d
        },
        floating: o.floating,
        strategy: s
      });
      return r.reference.x !== m.reference.x || r.reference.y !== m.reference.y || r.reference.width !== m.reference.width || r.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
};
function gt(t) {
  return t && t.document && t.location && t.alert && t.setInterval;
}
function B(t) {
  if (t == null)
    return window;
  if (!gt(t)) {
    const e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function W(t) {
  return B(t).getComputedStyle(t);
}
function M(t) {
  return gt(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function wt() {
  const t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map((e) => e.brand + "/" + e.version).join(" ") : navigator.userAgent;
}
function D(t) {
  return t instanceof B(t).HTMLElement;
}
function $(t) {
  return t instanceof B(t).Element;
}
function Nt(t) {
  return t instanceof B(t).Node;
}
function rt(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  const e = B(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function q(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: i,
    display: o
  } = W(t);
  return /auto|scroll|overlay|hidden/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function Mt(t) {
  return ["table", "td", "th"].includes(M(t));
}
function nt(t) {
  const e = /firefox/i.test(wt()), n = W(t), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (i ? i !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const r = n.contain;
      return r != null ? r.includes(o) : !1;
    }
  );
}
function yt() {
  return !/^((?!chrome|android).)*safari/i.test(wt());
}
function ot(t) {
  return ["html", "body", "#document"].includes(M(t));
}
const lt = Math.min, X = Math.max, I = Math.round;
function k(t, e, n) {
  var i, o, r, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect();
  let a = 1, f = 1;
  e && D(t) && (a = t.offsetWidth > 0 && I(s.width) / t.offsetWidth || 1, f = t.offsetHeight > 0 && I(s.height) / t.offsetHeight || 1);
  const p = $(t) ? B(t) : window, u = !yt() && n, c = (s.left + (u && (i = (o = p.visualViewport) == null ? void 0 : o.offsetLeft) != null ? i : 0)) / a, h = (s.top + (u && (r = (l = p.visualViewport) == null ? void 0 : l.offsetTop) != null ? r : 0)) / f, d = s.width / a, m = s.height / f;
  return {
    width: d,
    height: m,
    top: h,
    right: c + d,
    bottom: h + m,
    left: c,
    x: c,
    y: h
  };
}
function F(t) {
  return ((Nt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function G(t) {
  return $(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function vt(t) {
  return k(F(t)).left + G(t).scrollLeft;
}
function Ht(t) {
  const e = k(t);
  return I(e.width) !== t.offsetWidth || I(e.height) !== t.offsetHeight;
}
function Ut(t, e, n) {
  const i = D(e), o = F(e), r = k(
    t,
    i && Ht(e),
    n === "fixed"
  );
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if (i || !i && n !== "fixed")
    if ((M(e) !== "body" || q(o)) && (l = G(e)), D(e)) {
      const a = k(e, !0);
      s.x = a.x + e.clientLeft, s.y = a.y + e.clientTop;
    } else
      o && (s.x = vt(o));
  return {
    x: r.left + l.scrollLeft - s.x,
    y: r.top + l.scrollTop - s.y,
    width: r.width,
    height: r.height
  };
}
function K(t) {
  if (M(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (rt(t) ? t.host : null) || F(t);
  return rt(e) ? e.host : e;
}
function at(t) {
  return !D(t) || W(t).position === "fixed" ? null : t.offsetParent;
}
function Xt(t) {
  let e = K(t);
  for (; D(e) && !ot(e); ) {
    if (nt(e))
      return e;
    e = K(e);
  }
  return null;
}
function ct(t) {
  const e = B(t);
  let n = at(t);
  for (; n && Mt(n) && W(n).position === "static"; )
    n = at(n);
  return n && (M(n) === "html" || M(n) === "body" && W(n).position === "static" && !nt(n)) ? e : n || Xt(t) || e;
}
function ft(t) {
  if (D(t))
    return {
      width: t.offsetWidth,
      height: t.offsetHeight
    };
  const e = k(t);
  return {
    width: e.width,
    height: e.height
  };
}
function zt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: i
  } = t;
  const o = D(n), r = F(n);
  if (n === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = {
    x: 0,
    y: 0
  };
  if ((o || !o && i !== "fixed") && ((M(n) !== "body" || q(r)) && (l = G(n)), D(n))) {
    const a = k(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return {
    ...e,
    x: e.x - l.scrollLeft + s.x,
    y: e.y - l.scrollTop + s.y
  };
}
function jt(t, e) {
  const n = B(t), i = F(t), o = n.visualViewport;
  let r = i.clientWidth, l = i.clientHeight, s = 0, a = 0;
  if (o) {
    r = o.width, l = o.height;
    const f = yt();
    (f || !f && e === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: s,
    y: a
  };
}
function Yt(t) {
  var e;
  const n = F(t), i = G(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, r = X(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = X(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -i.scrollLeft + vt(t);
  const a = -i.scrollTop;
  return W(o || n).direction === "rtl" && (s += X(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: s,
    y: a
  };
}
function xt(t) {
  const e = K(t);
  return ot(e) ? t.ownerDocument.body : D(e) && q(e) ? e : xt(e);
}
function z(t, e) {
  var n;
  e === void 0 && (e = []);
  const i = xt(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), r = B(i), l = o ? [r].concat(r.visualViewport || [], q(i) ? i : []) : i, s = e.concat(l);
  return o ? s : s.concat(z(l));
}
function It(t, e) {
  const n = k(t, !1, e === "fixed"), i = n.top + t.clientTop, o = n.left + t.clientLeft;
  return {
    top: i,
    left: o,
    x: o,
    y: i,
    right: o + t.clientWidth,
    bottom: i + t.clientHeight,
    width: t.clientWidth,
    height: t.clientHeight
  };
}
function ut(t, e, n) {
  return e === "viewport" ? j(jt(t, n)) : $(e) ? It(e, n) : j(Yt(F(t)));
}
function Kt(t) {
  let e = z(t).filter((o) => $(o)), n = t, i = null;
  for (; $(n) && !ot(n); ) {
    const o = W(n);
    o.position === "static" && i && ["absolute", "fixed"].includes(i.position) && !nt(n) ? e = e.filter((r) => r !== n) : i = o, n = K(n);
  }
  return e;
}
function qt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = t;
  const l = [...n === "clippingAncestors" ? Kt(e) : [].concat(n), i], s = l[0], a = l.reduce((f, p) => {
    const u = ut(e, p, o);
    return f.top = X(u.top, f.top), f.right = lt(u.right, f.right), f.bottom = lt(u.bottom, f.bottom), f.left = X(u.left, f.left), f;
  }, ut(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const Gt = {
  getClippingRect: qt,
  convertOffsetParentRelativeRectToViewportRelativeRect: zt,
  isElement: $,
  getDimensions: ft,
  getOffsetParent: ct,
  getDocumentElement: F,
  getElementRects: (t) => {
    let {
      reference: e,
      floating: n,
      strategy: i
    } = t;
    return {
      reference: Ut(e, ct(n), i),
      floating: {
        ...ft(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => W(t).direction === "rtl"
};
function Jt(t, e, n, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: s = !1
  } = i, a = o && !s, f = a || r ? [...$(t) ? z(t) : t.contextElement ? z(t.contextElement) : [], ...z(e)] : [];
  f.forEach((d) => {
    a && d.addEventListener("scroll", n, {
      passive: !0
    }), r && d.addEventListener("resize", n);
  });
  let p = null;
  if (l) {
    let d = !0;
    p = new ResizeObserver(() => {
      d || n(), d = !1;
    }), $(t) && !s && p.observe(t), !$(t) && t.contextElement && !s && p.observe(t.contextElement), p.observe(e);
  }
  let u, c = s ? k(t) : null;
  s && h();
  function h() {
    const d = k(t);
    c && (d.x !== c.x || d.y !== c.y || d.width !== c.width || d.height !== c.height) && n(), c = d, u = requestAnimationFrame(h);
  }
  return n(), () => {
    var d;
    f.forEach((m) => {
      a && m.removeEventListener("scroll", n), r && m.removeEventListener("resize", n);
    }), (d = p) == null || d.disconnect(), p = null, s && cancelAnimationFrame(u);
  };
}
const Qt = (t, e, n) => Ct(t, e, {
  platform: Gt,
  ...n
});
var Zt = function() {
  var e = this, n = e.$createElement, i = e._self._c || n;
  return i("div", {
    staticClass: "inline-block"
  }, [i("div", {
    ref: "triggerRef",
    staticClass: "inline-block w-full"
  }, [e._t("trigger", null, {
    isOpen: e.open,
    open: e.onOpen,
    close: e.onClose,
    toggle: e.onToggle
  })], 2), i("transition", {
    attrs: {
      css: !e.disableAnimation,
      "enter-active-class": "transition duration-75 ease-out",
      "enter-class": "transform scale-95 opacity-0",
      "enter-to-class": "transform scale-100 opacity-100",
      "leave-active-class": "transition duration-50 ease-in",
      "leave-class": "transform scale-100 opacity-100",
      "leave-to-class": "transform scale-95 opacity-0"
    }
  }, [e.open ? i("div", {
    ref: "popperRef",
    class: e.popperClass,
    style: e.popperPosition
  }, [e.hideArrow ? e._e() : i("div", {
    ref: "arrowRef",
    class: [e.arrowClass, e.arrowPlacementClass],
    style: e.arrowPosition
  }), e._t("default", null, {
    isOpen: e.open,
    open: e.onOpen,
    close: e.onClose,
    toggle: e.onToggle
  })], 2) : e._e()])], 1);
}, te = [];
function ee(t, e, n, i, o, r, l, s) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = n, a._compiled = !0), i && (a.functional = !0), r && (a._scopeId = "data-v-" + r);
  var f;
  if (l ? (f = function(c) {
    c = c || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), o && o.call(this, c), c && c._registeredComponents && c._registeredComponents.add(l);
  }, a._ssrRegister = f) : o && (f = s ? function() {
    o.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), f)
    if (a.functional) {
      a._injectStyles = f;
      var p = a.render;
      a.render = function(h, d) {
        return f.call(d), p(h, d);
      };
    } else {
      var u = a.beforeCreate;
      a.beforeCreate = u ? [].concat(u, f) : [f];
    }
  return {
    exports: t,
    options: a
  };
}
const ne = {
  name: "SdsFloatingUi",
  props: {
    disabled: { type: Boolean, default: !1 },
    placement: { type: String, default: "auto" },
    strategy: { type: String, default: "absolute" },
    overflowPadding: { type: Number, default: 5 },
    arrowPadding: { type: Number, default: 5 },
    offset: { type: Number, default: 10 },
    inline: { type: Boolean, default: !1 },
    shift: { type: Boolean, default: !1 },
    disableAnimation: { type: Boolean, default: !1 },
    popperClass: { type: String, default: void 0 },
    hideArrow: { type: Boolean, default: !1 },
    arrowClass: { type: String, default: void 0 },
    placementTopArrowClass: { type: String, default: void 0 },
    placementRightArrowClass: { type: String, default: void 0 },
    placementBottomArrowClass: { type: String, default: void 0 },
    placementLeftArrowClass: { type: String, default: void 0 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  data() {
    return {
      open: !1,
      popperPosition: { left: "0px", top: "0px" },
      arrowPosition: { left: "0px", top: "0px" },
      currentPlacement: "",
      openStateTimeout: null,
      shouldOpen: !1,
      cleanup: null
    };
  },
  computed: {
    arrowPlacementClass() {
      return this.currentPlacement ? this.currentPlacement.includes("top") ? this.placementTopArrowClass : this.currentPlacement.includes("right") ? this.placementRightArrowClass : this.currentPlacement.includes("bottom") ? this.placementBottomArrowClass : this.currentPlacement.includes("left") ? this.placementLeftArrowClass : "" : "";
    }
  },
  watch: {
    open(t) {
      t ? this.$nextTick(() => {
        this.update(), this.$refs.triggerRef && this.$refs.popperRef && (this.cleanup = Jt(this.$refs.triggerRef, this.$refs.popperRef, this.update));
      }) : this.cleanup && this.cleanup();
    }
  },
  created() {
    this.$root.$on("floating-ui-toggle", (t) => {
      t ? !this.open && this.onOpen() : this.open && this.onClose();
    });
  },
  mounted() {
    document.addEventListener("mousedown", this.handleOutsideMouseDown), document.addEventListener("keyup", this.handleOutsideKeyUp);
  },
  destroyed() {
    document.removeEventListener("mousedown", this.handleOutsideMouseDown), document.removeEventListener("keyup", this.handleOutsideKeyUp);
  },
  methods: {
    openStateDelay(t) {
      return new Promise((e) => (this.openStateTimeout && clearTimeout(this.openStateTimeout), this.openStateTimeout = setTimeout(e, t), this.openStateTimeout));
    },
    willOpenStateDelay(t) {
      return new Promise(async (e, n) => t ? await t(e, n) : e());
    },
    async onOpen(t = 0) {
      if (!this.disabled)
        try {
          if (this.shouldOpen = !0, await this.openStateDelay(t), this.shouldOpen) {
            if (await this.willOpenStateDelay(this.willOpen), this.open || !this.shouldOpen)
              return;
            this.shouldOpen = !1, this.open = !0;
          }
        } catch {
          this.shouldOpen = !1;
        }
    },
    async onClose(t = 0) {
      try {
        if (this.shouldOpen = !1, await this.openStateDelay(t), await this.willOpenStateDelay(this.willClose), !this.open)
          return;
        this.open = !1;
      } catch {
      }
    },
    async onToggle(t = 0, e = 0) {
      this.open ? this.onClose(e) : this.onOpen(t);
    },
    async update() {
      var s;
      if (!this.$refs.triggerRef || !this.$refs.popperRef)
        return;
      const t = {
        middleware: [],
        placement: this.placement,
        strategy: this.strategy
      }, e = this.placement.startsWith("auto");
      this.offset && t.middleware.push(Bt(this.offset)), e ? t.middleware.push($t({
        alignment: (s = this.placement.split("-")[1]) != null ? s : ""
      })) : t.placement = this.placement, this.inline && t.middleware.push(Ft()), e || t.middleware.push(Dt({
        padding: this.overflowPadding
      })), this.shift && t.middleware.push(Wt({
        padding: this.overflowPadding
      })), !this.hideArrow && this.$refs.arrowRef && t.middleware.push(Ot({
        element: this.$refs.arrowRef,
        padding: this.arrowPadding
      }));
      const n = await Qt(this.$refs.triggerRef, this.$refs.popperRef, t), { x: i, y: o, placement: r, middlewareData: l } = n;
      if (this.popperPosition = {
        left: i ? `${i}px` : "",
        top: o ? `${o}px` : ""
      }, !this.hideArrow) {
        const { x: a, y: f } = l.arrow;
        this.currentPlacement = r, this.arrowPosition = {
          left: a ? `${a}px` : "",
          top: f ? `${f}px` : ""
        };
      }
    },
    handleOutsideMouseDown(t) {
      this.$refs.triggerRef && t.target && this.$refs.triggerRef.contains(t.target) || this.$refs.popperRef && t.target && this.$refs.popperRef.contains(t.target) || !this.open || this.onClose();
    },
    handleOutsideKeyUp(t) {
      if (t.key === "Escape") {
        if (!this.open)
          return;
        t.preventDefault(), this.onClose();
      }
    }
  }
}, dt = {};
var oe = /* @__PURE__ */ ee(
  ne,
  Zt,
  te,
  !1,
  ie,
  null,
  null,
  null
);
function ie(t) {
  for (let e in dt)
    this[e] = dt[e];
}
const se = /* @__PURE__ */ function() {
  return oe.exports;
}();
export {
  se as default
};
