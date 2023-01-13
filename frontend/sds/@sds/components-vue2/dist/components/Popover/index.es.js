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
function M(t) {
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
  const r = i.x + i.width / 2 - o.width / 2, l = i.y + i.height / 2 - o.height / 2, s = M(e), a = Z(s), c = i[a] / 2 - o[a] / 2, p = E(e), u = s === "x";
  let f;
  switch (p) {
    case "top":
      f = {
        x: r,
        y: i.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: r,
        y: i.y + i.height
      };
      break;
    case "right":
      f = {
        x: i.x + i.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: i.x - o.width,
        y: l
      };
      break;
    default:
      f = {
        x: i.x,
        y: i.y
      };
  }
  switch (N(e)) {
    case "start":
      f[s] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      f[s] += c * (n && u ? -1 : 1);
      break;
  }
  return f;
}
const Pt = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: l
  } = n, s = r.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let c = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: p,
    y: u
  } = st(c, i, a), f = i, h = {}, d = 0;
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
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: c,
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
      d++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (c = y.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : y.rects), {
        x: p,
        y: u
      } = st(c, f, a)), m = -1;
      continue;
    }
  }
  return {
    x: p,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
function _t(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function tt(t) {
  return typeof t != "number" ? _t(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function X(t) {
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
    boundary: c = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = e, d = tt(h), v = s[f ? u === "floating" ? "reference" : "floating" : u], g = X(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(v))) == null || n ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: p,
    strategy: a
  })), w = X(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const ht = Math.min, mt = Math.max;
function J(t, e, n) {
  return mt(t, ht(e, n));
}
const At = (t) => ({
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
    const c = tt(i), p = {
      x: o,
      y: r
    }, u = M(l), f = N(l), h = Z(u), d = await a.getDimensions(n), m = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", g = s.reference[h] + s.reference[u] - p[u] - s.floating[h], w = p[u] - s.reference[u], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? u === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = s.floating[h]);
    const y = g / 2 - w / 2, _ = c[m], A = b - d[h] - c[v], O = b / 2 - d[h] / 2 + y, C = J(_, O, A), S = (f === "start" ? c[m] : c[v]) > 0 && O !== C && s.reference[h] <= s.floating[h] ? O < _ ? _ - O : A - O : 0;
    return {
      [u]: p[u] - S,
      data: {
        [u]: C,
        centerOffset: O - C
      }
    };
  }
}), St = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function j(t) {
  return t.replace(/left|right|bottom|top/g, (e) => St[e]);
}
function gt(t, e, n) {
  n === void 0 && (n = !1);
  const i = N(t), o = M(t), r = Z(o);
  let l = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = j(l)), {
    main: l,
    cross: j(l)
  };
}
const Tt = {
  start: "end",
  end: "start"
};
function Q(t) {
  return t.replace(/start|end/g, (e) => Tt[e]);
}
const $t = ["top", "right", "bottom", "left"], Lt = /* @__PURE__ */ $t.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
function Et(t, e, n) {
  return (t ? [...n.filter((o) => N(o) === t), ...n.filter((o) => N(o) !== t)] : n.filter((o) => E(o) === o)).filter((o) => t ? N(o) === t || (e ? Q(o) !== o : !1) : !0);
}
const Dt = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, i, o, r, l;
      const {
        x: s,
        y: a,
        rects: c,
        middlewareData: p,
        placement: u,
        platform: f,
        elements: h
      } = e, {
        alignment: d = null,
        allowedPlacements: m = Lt,
        autoAlignment: v = !0,
        ...g
      } = t, w = Et(d, v, m), x = await et(e, g), b = (n = (i = p.autoPlacement) == null ? void 0 : i.index) != null ? n : 0, y = w[b];
      if (y == null)
        return {};
      const {
        main: _,
        cross: A
      } = gt(y, c, await (f.isRTL == null ? void 0 : f.isRTL(h.floating)));
      if (u !== y)
        return {
          x: s,
          y: a,
          reset: {
            placement: w[0]
          }
        };
      const O = [x[E(y)], x[_], x[A]], C = [...(o = (r = p.autoPlacement) == null ? void 0 : r.overflows) != null ? o : [], {
        placement: y,
        overflows: O
      }], T = w[b + 1];
      if (T)
        return {
          data: {
            index: b + 1,
            overflows: C
          },
          reset: {
            placement: T
          }
        };
      const R = C.slice().sort((P, V) => P.overflows[0] - V.overflows[0]), S = (l = R.find((P) => {
        let {
          overflows: V
        } = P;
        return V.every((H) => H <= 0);
      })) == null ? void 0 : l.placement, $ = S != null ? S : R[0].placement;
      return $ !== u ? {
        data: {
          index: b + 1,
          overflows: C
        },
        reset: {
          placement: $
        }
      } : {};
    }
  };
};
function kt(t) {
  const e = j(t);
  return [Q(t), e, Q(e)];
}
const Bt = function(t) {
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
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        flipAlignment: h = !0,
        ...d
      } = t, m = E(i), g = u || (m === l || !h ? [j(l)] : kt(l)), w = [l, ...g], x = await et(e, d), b = [];
      let y = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (c && b.push(x[m]), p) {
        const {
          main: C,
          cross: T
        } = gt(i, r, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
        b.push(x[C], x[T]);
      }
      if (y = [...y, {
        placement: i,
        overflows: b
      }], !b.every((C) => C <= 0)) {
        var _, A;
        const C = ((_ = (A = o.flip) == null ? void 0 : A.index) != null ? _ : 0) + 1, T = w[C];
        if (T)
          return {
            data: {
              index: C,
              overflows: y
            },
            reset: {
              placement: T
            }
          };
        let R = "bottom";
        switch (f) {
          case "bestFit": {
            var O;
            const S = (O = y.map(($) => [$, $.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort(($, P) => $[1] - P[1])[0]) == null ? void 0 : O[0].placement;
            S && (R = S);
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
async function Vt(t, e) {
  const {
    placement: n,
    platform: i,
    elements: o
  } = t, r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), l = E(n), s = N(n), a = M(n) === "x", c = ["left", "top"].includes(l) ? -1 : 1, p = r && a ? -1 : 1, u = typeof e == "function" ? e(t) : e;
  let {
    mainAxis: f,
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
    y: f * c
  } : {
    x: f * c,
    y: h * p
  };
}
const Ft = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i
      } = e, o = await Vt(e, t);
      return {
        x: n + o.x,
        y: i + o.y,
        data: o
      };
    }
  };
};
function zt(t) {
  return t === "x" ? "y" : "x";
}
const Nt = function(t) {
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
      } = t, c = {
        x: n,
        y: i
      }, p = await et(e, a), u = M(E(o)), f = zt(u);
      let h = c[u], d = c[f];
      if (r) {
        const v = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", w = h + p[v], x = h - p[g];
        h = J(w, h, x);
      }
      if (l) {
        const v = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", w = d + p[v], x = d - p[g];
        d = J(w, d, x);
      }
      const m = s.fn({
        ...e,
        [u]: h,
        [f]: d
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
}, Wt = function(t) {
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
        x: c,
        y: p
      } = t, u = X(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: r.reference,
        offsetParent: await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)),
        strategy: s
      }) : r.reference), f = (n = await (l.getClientRects == null ? void 0 : l.getClientRects(o.reference))) != null ? n : [], h = tt(a);
      function d() {
        if (f.length === 2 && f[0].left > f[1].right && c != null && p != null) {
          var v;
          return (v = f.find((g) => c > g.left - h.left && c < g.right + h.right && p > g.top - h.top && p < g.bottom + h.bottom)) != null ? v : u;
        }
        if (f.length >= 2) {
          if (M(i) === "x") {
            const R = f[0], S = f[f.length - 1], $ = E(i) === "top", P = R.top, V = S.bottom, H = $ ? R.left : S.left, it = $ ? R.right : S.right, Ct = it - H, Ot = V - P;
            return {
              top: P,
              bottom: V,
              left: H,
              right: it,
              width: Ct,
              height: Ot,
              x: H,
              y: P
            };
          }
          const g = E(i) === "left", w = mt(...f.map((R) => R.right)), x = ht(...f.map((R) => R.left)), b = f.filter((R) => g ? R.left === x : R.right === w), y = b[0].top, _ = b[b.length - 1].bottom, A = x, O = w, C = O - A, T = _ - y;
          return {
            top: y,
            bottom: _,
            left: A,
            right: O,
            width: C,
            height: T,
            x: A,
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
function wt(t) {
  return t && t.document && t.location && t.alert && t.setInterval;
}
function B(t) {
  if (t == null)
    return window;
  if (!wt(t)) {
    const e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function F(t) {
  return B(t).getComputedStyle(t);
}
function W(t) {
  return wt(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function yt() {
  const t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map((e) => e.brand + "/" + e.version).join(" ") : navigator.userAgent;
}
function D(t) {
  return t instanceof B(t).HTMLElement;
}
function L(t) {
  return t instanceof B(t).Element;
}
function Mt(t) {
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
  } = F(t);
  return /auto|scroll|overlay|hidden/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function Ht(t) {
  return ["table", "td", "th"].includes(W(t));
}
function nt(t) {
  const e = /firefox/i.test(yt()), n = F(t), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (i ? i !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const r = n.contain;
      return r != null ? r.includes(o) : !1;
    }
  );
}
function vt() {
  return !/^((?!chrome|android).)*safari/i.test(yt());
}
function ot(t) {
  return ["html", "body", "#document"].includes(W(t));
}
const lt = Math.min, U = Math.max, Y = Math.round;
function k(t, e, n) {
  var i, o, r, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect();
  let a = 1, c = 1;
  e && D(t) && (a = t.offsetWidth > 0 && Y(s.width) / t.offsetWidth || 1, c = t.offsetHeight > 0 && Y(s.height) / t.offsetHeight || 1);
  const p = L(t) ? B(t) : window, u = !vt() && n, f = (s.left + (u && (i = (o = p.visualViewport) == null ? void 0 : o.offsetLeft) != null ? i : 0)) / a, h = (s.top + (u && (r = (l = p.visualViewport) == null ? void 0 : l.offsetTop) != null ? r : 0)) / c, d = s.width / a, m = s.height / c;
  return {
    width: d,
    height: m,
    top: h,
    right: f + d,
    bottom: h + m,
    left: f,
    x: f,
    y: h
  };
}
function z(t) {
  return ((Mt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function G(t) {
  return L(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function xt(t) {
  return k(z(t)).left + G(t).scrollLeft;
}
function Ut(t) {
  const e = k(t);
  return Y(e.width) !== t.offsetWidth || Y(e.height) !== t.offsetHeight;
}
function It(t, e, n) {
  const i = D(e), o = z(e), r = k(
    t,
    i && Ut(e),
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
    if ((W(e) !== "body" || q(o)) && (l = G(e)), D(e)) {
      const a = k(e, !0);
      s.x = a.x + e.clientLeft, s.y = a.y + e.clientTop;
    } else
      o && (s.x = xt(o));
  return {
    x: r.left + l.scrollLeft - s.x,
    y: r.top + l.scrollTop - s.y,
    width: r.width,
    height: r.height
  };
}
function K(t) {
  if (W(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (rt(t) ? t.host : null) || z(t);
  return rt(e) ? e.host : e;
}
function at(t) {
  return !D(t) || F(t).position === "fixed" ? null : t.offsetParent;
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
  for (; n && Ht(n) && F(n).position === "static"; )
    n = at(n);
  return n && (W(n) === "html" || W(n) === "body" && F(n).position === "static" && !nt(n)) ? e : n || Xt(t) || e;
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
function jt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: i
  } = t;
  const o = D(n), r = z(n);
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
  if ((o || !o && i !== "fixed") && ((W(n) !== "body" || q(r)) && (l = G(n)), D(n))) {
    const a = k(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return {
    ...e,
    x: e.x - l.scrollLeft + s.x,
    y: e.y - l.scrollTop + s.y
  };
}
function Yt(t, e) {
  const n = B(t), i = z(t), o = n.visualViewport;
  let r = i.clientWidth, l = i.clientHeight, s = 0, a = 0;
  if (o) {
    r = o.width, l = o.height;
    const c = vt();
    (c || !c && e === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: s,
    y: a
  };
}
function Kt(t) {
  var e;
  const n = z(t), i = G(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, r = U(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = U(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let s = -i.scrollLeft + xt(t);
  const a = -i.scrollTop;
  return F(o || n).direction === "rtl" && (s += U(n.clientWidth, o ? o.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: s,
    y: a
  };
}
function bt(t) {
  const e = K(t);
  return ot(e) ? t.ownerDocument.body : D(e) && q(e) ? e : bt(e);
}
function I(t, e) {
  var n;
  e === void 0 && (e = []);
  const i = bt(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), r = B(i), l = o ? [r].concat(r.visualViewport || [], q(i) ? i : []) : i, s = e.concat(l);
  return o ? s : s.concat(I(l));
}
function qt(t, e) {
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
  return e === "viewport" ? X(Yt(t, n)) : L(e) ? qt(e, n) : X(Kt(z(t)));
}
function Gt(t) {
  let e = I(t).filter((o) => L(o)), n = t, i = null;
  for (; L(n) && !ot(n); ) {
    const o = F(n);
    o.position === "static" && i && ["absolute", "fixed"].includes(i.position) && !nt(n) ? e = e.filter((r) => r !== n) : i = o, n = K(n);
  }
  return e;
}
function Jt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = t;
  const l = [...n === "clippingAncestors" ? Gt(e) : [].concat(n), i], s = l[0], a = l.reduce((c, p) => {
    const u = ut(e, p, o);
    return c.top = U(u.top, c.top), c.right = lt(u.right, c.right), c.bottom = lt(u.bottom, c.bottom), c.left = U(u.left, c.left), c;
  }, ut(e, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const Qt = {
  getClippingRect: Jt,
  convertOffsetParentRelativeRectToViewportRelativeRect: jt,
  isElement: L,
  getDimensions: ft,
  getOffsetParent: ct,
  getDocumentElement: z,
  getElementRects: (t) => {
    let {
      reference: e,
      floating: n,
      strategy: i
    } = t;
    return {
      reference: It(e, ct(n), i),
      floating: {
        ...ft(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => F(t).direction === "rtl"
};
function Zt(t, e, n, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: s = !1
  } = i, a = o && !s, c = a || r ? [...L(t) ? I(t) : t.contextElement ? I(t.contextElement) : [], ...I(e)] : [];
  c.forEach((d) => {
    a && d.addEventListener("scroll", n, {
      passive: !0
    }), r && d.addEventListener("resize", n);
  });
  let p = null;
  if (l) {
    let d = !0;
    p = new ResizeObserver(() => {
      d || n(), d = !1;
    }), L(t) && !s && p.observe(t), !L(t) && t.contextElement && !s && p.observe(t.contextElement), p.observe(e);
  }
  let u, f = s ? k(t) : null;
  s && h();
  function h() {
    const d = k(t);
    f && (d.x !== f.x || d.y !== f.y || d.width !== f.width || d.height !== f.height) && n(), f = d, u = requestAnimationFrame(h);
  }
  return n(), () => {
    var d;
    c.forEach((m) => {
      a && m.removeEventListener("scroll", n), r && m.removeEventListener("resize", n);
    }), (d = p) == null || d.disconnect(), p = null, s && cancelAnimationFrame(u);
  };
}
const te = (t, e, n) => Pt(t, e, {
  platform: Qt,
  ...n
});
var ee = function() {
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
}, ne = [];
function Rt(t, e, n, i, o, r, l, s) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = n, a._compiled = !0), i && (a.functional = !0), r && (a._scopeId = "data-v-" + r);
  var c;
  if (l ? (c = function(f) {
    f = f || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), o && o.call(this, f), f && f._registeredComponents && f._registeredComponents.add(l);
  }, a._ssrRegister = c) : o && (c = s ? function() {
    o.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), c)
    if (a.functional) {
      a._injectStyles = c;
      var p = a.render;
      a.render = function(h, d) {
        return c.call(d), p(h, d);
      };
    } else {
      var u = a.beforeCreate;
      a.beforeCreate = u ? [].concat(u, c) : [c];
    }
  return {
    exports: t,
    options: a
  };
}
const oe = {
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
        this.update(), this.$refs.triggerRef && this.$refs.popperRef && (this.cleanup = Zt(this.$refs.triggerRef, this.$refs.popperRef, this.update));
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
      this.offset && t.middleware.push(Ft(this.offset)), e ? t.middleware.push(Dt({
        alignment: (s = this.placement.split("-")[1]) != null ? s : ""
      })) : t.placement = this.placement, this.inline && t.middleware.push(Wt()), e || t.middleware.push(Bt({
        padding: this.overflowPadding
      })), this.shift && t.middleware.push(Nt({
        padding: this.overflowPadding
      })), !this.hideArrow && this.$refs.arrowRef && t.middleware.push(At({
        element: this.$refs.arrowRef,
        padding: this.arrowPadding
      }));
      const n = await te(this.$refs.triggerRef, this.$refs.popperRef, t), { x: i, y: o, placement: r, middlewareData: l } = n;
      if (this.popperPosition = {
        left: i ? `${i}px` : "",
        top: o ? `${o}px` : ""
      }, !this.hideArrow) {
        const { x: a, y: c } = l.arrow;
        this.currentPlacement = r, this.arrowPosition = {
          left: a ? `${a}px` : "",
          top: c ? `${c}px` : ""
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
var ie = /* @__PURE__ */ Rt(
  oe,
  ee,
  ne,
  !1,
  se,
  null,
  null,
  null
);
function se(t) {
  for (let e in dt)
    this[e] = dt[e];
}
const re = /* @__PURE__ */ function() {
  return ie.exports;
}();
var le = function() {
  var e = this, n = e.$createElement, i = e._self._c || n;
  return i("floating-ui", {
    attrs: {
      "data-id": "sds-popover",
      strategy: e.strategy,
      placement: e.placement,
      disabled: e.disabled,
      "will-open": e.willOpen,
      "will-close": e.willClose,
      "popper-class": "absolute bg-white dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 border shadow-lg rounded-md ".concat(e.sizeClass, " ").concat(e.zIndexClass),
      "arrow-class": "absolute bg-white dark:bg-gray-700 dark:border-gray-600 border w-3 h-3 rotate-45",
      "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
      "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
      "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
      "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0",
      shift: ""
    },
    scopedSlots: e._u([{
      key: "trigger",
      fn: function(r) {
        var l = r.open, s = r.close;
        return [i("div", {
          on: {
            mouseover: function(c) {
              typeof l < "u" && l(e.openDelay);
            },
            mouseleave: function(c) {
              typeof s < "u" && s(e.closeDelay);
            }
          }
        }, [e._t("trigger")], 2)];
      }
    }, {
      key: "default",
      fn: function(r) {
        var l = r.open, s = r.close, a = r.toggle, c = r.isOpen;
        return [i("div", {
          staticClass: "p-4",
          on: {
            mouseover: function(u) {
              typeof l < "u" && l();
            },
            mouseout: function(u) {
              typeof s < "u" && s(e.closeDelay);
            }
          }
        }, [e._t("default", null, {
          close: s,
          open: l,
          toggle: a,
          isOpen: c
        })], 2)];
      }
    }], null, !0)
  });
}, ae = [];
const ce = {
  name: "SdsPopover",
  components: {
    FloatingUi: re
  },
  props: {
    zIndex: { type: String, required: !1, default: "50" },
    openDelay: { type: Number, default: 500 },
    closeDelay: { type: Number, default: 250 },
    size: { type: String, default: "lg" },
    strategy: { type: String, default: "absolute" },
    placement: { type: String, default: "auto" },
    disabled: { type: Boolean, default: !1 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case "0":
          return "z-0";
        case "10":
          return "z-10";
        case "20":
          return "z-20";
        case "30":
          return "z-30";
        case "40":
          return "z-40";
        case "50":
          return "z-50";
        case "auto":
          return "z-auto";
        default:
          return "";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "w-80";
        case "lg":
          return "w-96";
        case "auto":
          return "w-auto";
        default:
          return "w-80";
      }
    }
  }
}, pt = {};
var fe = /* @__PURE__ */ Rt(
  ce,
  le,
  ae,
  !1,
  ue,
  null,
  null,
  null
);
function ue(t) {
  for (let e in pt)
    this[e] = pt[e];
}
const de = /* @__PURE__ */ function() {
  return fe.exports;
}();
export {
  de as default
};
