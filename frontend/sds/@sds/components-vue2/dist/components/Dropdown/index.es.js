// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function k(t) {
  return t.split("-")[0];
}
function N(t) {
  return t.split("-")[1];
}
function W(t) {
  return ["top", "bottom"].includes(k(t)) ? "x" : "y";
}
function Z(t) {
  return t === "y" ? "height" : "width";
}
function st(t, e, n) {
  let {
    reference: i,
    floating: o
  } = t;
  const s = i.x + i.width / 2 - o.width / 2, l = i.y + i.height / 2 - o.height / 2, r = W(e), a = Z(r), c = i[a] / 2 - o[a] / 2, p = k(e), u = r === "x";
  let f;
  switch (p) {
    case "top":
      f = {
        x: s,
        y: i.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: s,
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
      f[r] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      f[r] += c * (n && u ? -1 : 1);
      break;
  }
  return f;
}
const Pt = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l
  } = n, r = s.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let c = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: p,
    y: u
  } = st(c, i, a), f = i, h = {}, d = 0;
  for (let m = 0; m < r.length; m++) {
    const {
      name: v,
      fn: g
    } = r[m], {
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
    platform: s,
    rects: l,
    elements: r,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = e, d = tt(h), v = r[f ? u === "floating" ? "reference" : "floating" : u], g = X(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
    boundary: c,
    rootBoundary: p,
    strategy: a
  })), w = X(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: u === "floating" ? {
      ...l.floating,
      x: i,
      y: o
    } : l.reference,
    offsetParent: await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)),
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
      y: s,
      placement: l,
      rects: r,
      platform: a
    } = e;
    if (n == null)
      return {};
    const c = tt(i), p = {
      x: o,
      y: s
    }, u = W(l), f = N(l), h = Z(u), d = await a.getDimensions(n), m = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", g = r.reference[h] + r.reference[u] - p[u] - r.floating[h], w = p[u] - r.reference[u], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? u === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = r.floating[h]);
    const y = g / 2 - w / 2, _ = c[m], A = b - d[h] - c[v], O = b / 2 - d[h] / 2 + y, R = J(_, O, A), S = (f === "start" ? c[m] : c[v]) > 0 && O !== R && r.reference[h] <= r.floating[h] ? O < _ ? _ - O : A - O : 0;
    return {
      [u]: p[u] - S,
      data: {
        [u]: R,
        centerOffset: O - R
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
  const i = N(t), o = W(t), s = Z(o);
  let l = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (l = j(l)), {
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
function kt(t, e, n) {
  return (t ? [...n.filter((o) => N(o) === t), ...n.filter((o) => N(o) !== t)] : n.filter((o) => k(o) === o)).filter((o) => t ? N(o) === t || (e ? Q(o) !== o : !1) : !0);
}
const Et = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, i, o, s, l;
      const {
        x: r,
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
      } = t, w = kt(d, v, m), x = await et(e, g), b = (n = (i = p.autoPlacement) == null ? void 0 : i.index) != null ? n : 0, y = w[b];
      if (y == null)
        return {};
      const {
        main: _,
        cross: A
      } = gt(y, c, await (f.isRTL == null ? void 0 : f.isRTL(h.floating)));
      if (u !== y)
        return {
          x: r,
          y: a,
          reset: {
            placement: w[0]
          }
        };
      const O = [x[k(y)], x[_], x[A]], R = [...(o = (s = p.autoPlacement) == null ? void 0 : s.overflows) != null ? o : [], {
        placement: y,
        overflows: O
      }], T = w[b + 1];
      if (T)
        return {
          data: {
            index: b + 1,
            overflows: R
          },
          reset: {
            placement: T
          }
        };
      const C = R.slice().sort((P, V) => P.overflows[0] - V.overflows[0]), S = (l = C.find((P) => {
        let {
          overflows: V
        } = P;
        return V.every((H) => H <= 0);
      })) == null ? void 0 : l.placement, $ = S != null ? S : C[0].placement;
      return $ !== u ? {
        data: {
          index: b + 1,
          overflows: R
        },
        reset: {
          placement: $
        }
      } : {};
    }
  };
};
function Dt(t) {
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
        rects: s,
        initialPlacement: l,
        platform: r,
        elements: a
      } = e, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        flipAlignment: h = !0,
        ...d
      } = t, m = k(i), g = u || (m === l || !h ? [j(l)] : Dt(l)), w = [l, ...g], x = await et(e, d), b = [];
      let y = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (c && b.push(x[m]), p) {
        const {
          main: R,
          cross: T
        } = gt(i, s, await (r.isRTL == null ? void 0 : r.isRTL(a.floating)));
        b.push(x[R], x[T]);
      }
      if (y = [...y, {
        placement: i,
        overflows: b
      }], !b.every((R) => R <= 0)) {
        var _, A;
        const R = ((_ = (A = o.flip) == null ? void 0 : A.index) != null ? _ : 0) + 1, T = w[R];
        if (T)
          return {
            data: {
              index: R,
              overflows: y
            },
            reset: {
              placement: T
            }
          };
        let C = "bottom";
        switch (f) {
          case "bestFit": {
            var O;
            const S = (O = y.map(($) => [$, $.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort(($, P) => $[1] - P[1])[0]) == null ? void 0 : O[0].placement;
            S && (C = S);
            break;
          }
          case "initialPlacement":
            C = l;
            break;
        }
        if (i !== C)
          return {
            reset: {
              placement: C
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
  } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), l = k(n), r = N(n), a = W(n) === "x", c = ["left", "top"].includes(l) ? -1 : 1, p = s && a ? -1 : 1, u = typeof e == "function" ? e(t) : e;
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
  return r && typeof d == "number" && (h = r === "end" ? d * -1 : d), a ? {
    x: h * p,
    y: f * c
  } : {
    x: f * c,
    y: h * p
  };
}
const zt = function(t) {
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
function Ft(t) {
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
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: r = {
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
      }, p = await et(e, a), u = W(k(o)), f = Ft(u);
      let h = c[u], d = c[f];
      if (s) {
        const v = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", w = h + p[v], x = h - p[g];
        h = J(w, h, x);
      }
      if (l) {
        const v = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", w = d + p[v], x = d - p[g];
        d = J(w, d, x);
      }
      const m = r.fn({
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
}, Mt = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: i,
        elements: o,
        rects: s,
        platform: l,
        strategy: r
      } = e, {
        padding: a = 2,
        x: c,
        y: p
      } = t, u = X(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: s.reference,
        offsetParent: await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)),
        strategy: r
      }) : s.reference), f = (n = await (l.getClientRects == null ? void 0 : l.getClientRects(o.reference))) != null ? n : [], h = tt(a);
      function d() {
        if (f.length === 2 && f[0].left > f[1].right && c != null && p != null) {
          var v;
          return (v = f.find((g) => c > g.left - h.left && c < g.right + h.right && p > g.top - h.top && p < g.bottom + h.bottom)) != null ? v : u;
        }
        if (f.length >= 2) {
          if (W(i) === "x") {
            const C = f[0], S = f[f.length - 1], $ = k(i) === "top", P = C.top, V = S.bottom, H = $ ? C.left : S.left, it = $ ? C.right : S.right, Rt = it - H, Ot = V - P;
            return {
              top: P,
              bottom: V,
              left: H,
              right: it,
              width: Rt,
              height: Ot,
              x: H,
              y: P
            };
          }
          const g = k(i) === "left", w = mt(...f.map((C) => C.right)), x = ht(...f.map((C) => C.left)), b = f.filter((C) => g ? C.left === x : C.right === w), y = b[0].top, _ = b[b.length - 1].bottom, A = x, O = w, R = O - A, T = _ - y;
          return {
            top: y,
            bottom: _,
            left: A,
            right: O,
            width: R,
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
        strategy: r
      });
      return s.reference.x !== m.reference.x || s.reference.y !== m.reference.y || s.reference.width !== m.reference.width || s.reference.height !== m.reference.height ? {
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
function z(t) {
  return B(t).getComputedStyle(t);
}
function M(t) {
  return wt(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function yt() {
  const t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map((e) => e.brand + "/" + e.version).join(" ") : navigator.userAgent;
}
function E(t) {
  return t instanceof B(t).HTMLElement;
}
function L(t) {
  return t instanceof B(t).Element;
}
function Wt(t) {
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
  } = z(t);
  return /auto|scroll|overlay|hidden/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function Ht(t) {
  return ["table", "td", "th"].includes(M(t));
}
function nt(t) {
  const e = /firefox/i.test(yt()), n = z(t), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (i ? i !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some(
    (o) => {
      const s = n.contain;
      return s != null ? s.includes(o) : !1;
    }
  );
}
function vt() {
  return !/^((?!chrome|android).)*safari/i.test(yt());
}
function ot(t) {
  return ["html", "body", "#document"].includes(M(t));
}
const lt = Math.min, U = Math.max, Y = Math.round;
function D(t, e, n) {
  var i, o, s, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const r = t.getBoundingClientRect();
  let a = 1, c = 1;
  e && E(t) && (a = t.offsetWidth > 0 && Y(r.width) / t.offsetWidth || 1, c = t.offsetHeight > 0 && Y(r.height) / t.offsetHeight || 1);
  const p = L(t) ? B(t) : window, u = !vt() && n, f = (r.left + (u && (i = (o = p.visualViewport) == null ? void 0 : o.offsetLeft) != null ? i : 0)) / a, h = (r.top + (u && (s = (l = p.visualViewport) == null ? void 0 : l.offsetTop) != null ? s : 0)) / c, d = r.width / a, m = r.height / c;
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
function F(t) {
  return ((Wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
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
  return D(F(t)).left + G(t).scrollLeft;
}
function Ut(t) {
  const e = D(t);
  return Y(e.width) !== t.offsetWidth || Y(e.height) !== t.offsetHeight;
}
function It(t, e, n) {
  const i = E(e), o = F(e), s = D(
    t,
    i && Ut(e),
    n === "fixed"
  );
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const r = {
    x: 0,
    y: 0
  };
  if (i || !i && n !== "fixed")
    if ((M(e) !== "body" || q(o)) && (l = G(e)), E(e)) {
      const a = D(e, !0);
      r.x = a.x + e.clientLeft, r.y = a.y + e.clientTop;
    } else
      o && (r.x = xt(o));
  return {
    x: s.left + l.scrollLeft - r.x,
    y: s.top + l.scrollTop - r.y,
    width: s.width,
    height: s.height
  };
}
function K(t) {
  if (M(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (rt(t) ? t.host : null) || F(t);
  return rt(e) ? e.host : e;
}
function at(t) {
  return !E(t) || z(t).position === "fixed" ? null : t.offsetParent;
}
function Xt(t) {
  let e = K(t);
  for (; E(e) && !ot(e); ) {
    if (nt(e))
      return e;
    e = K(e);
  }
  return null;
}
function ct(t) {
  const e = B(t);
  let n = at(t);
  for (; n && Ht(n) && z(n).position === "static"; )
    n = at(n);
  return n && (M(n) === "html" || M(n) === "body" && z(n).position === "static" && !nt(n)) ? e : n || Xt(t) || e;
}
function ft(t) {
  if (E(t))
    return {
      width: t.offsetWidth,
      height: t.offsetHeight
    };
  const e = D(t);
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
  const o = E(n), s = F(n);
  if (n === s)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const r = {
    x: 0,
    y: 0
  };
  if ((o || !o && i !== "fixed") && ((M(n) !== "body" || q(s)) && (l = G(n)), E(n))) {
    const a = D(n, !0);
    r.x = a.x + n.clientLeft, r.y = a.y + n.clientTop;
  }
  return {
    ...e,
    x: e.x - l.scrollLeft + r.x,
    y: e.y - l.scrollTop + r.y
  };
}
function Yt(t, e) {
  const n = B(t), i = F(t), o = n.visualViewport;
  let s = i.clientWidth, l = i.clientHeight, r = 0, a = 0;
  if (o) {
    s = o.width, l = o.height;
    const c = vt();
    (c || !c && e === "fixed") && (r = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: r,
    y: a
  };
}
function Kt(t) {
  var e;
  const n = F(t), i = G(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, s = U(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = U(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
  let r = -i.scrollLeft + xt(t);
  const a = -i.scrollTop;
  return z(o || n).direction === "rtl" && (r += U(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: l,
    x: r,
    y: a
  };
}
function bt(t) {
  const e = K(t);
  return ot(e) ? t.ownerDocument.body : E(e) && q(e) ? e : bt(e);
}
function I(t, e) {
  var n;
  e === void 0 && (e = []);
  const i = bt(t), o = i === ((n = t.ownerDocument) == null ? void 0 : n.body), s = B(i), l = o ? [s].concat(s.visualViewport || [], q(i) ? i : []) : i, r = e.concat(l);
  return o ? r : r.concat(I(l));
}
function qt(t, e) {
  const n = D(t, !1, e === "fixed"), i = n.top + t.clientTop, o = n.left + t.clientLeft;
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
  return e === "viewport" ? X(Yt(t, n)) : L(e) ? qt(e, n) : X(Kt(F(t)));
}
function Gt(t) {
  let e = I(t).filter((o) => L(o)), n = t, i = null;
  for (; L(n) && !ot(n); ) {
    const o = z(n);
    o.position === "static" && i && ["absolute", "fixed"].includes(i.position) && !nt(n) ? e = e.filter((s) => s !== n) : i = o, n = K(n);
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
  const l = [...n === "clippingAncestors" ? Gt(e) : [].concat(n), i], r = l[0], a = l.reduce((c, p) => {
    const u = ut(e, p, o);
    return c.top = U(u.top, c.top), c.right = lt(u.right, c.right), c.bottom = lt(u.bottom, c.bottom), c.left = U(u.left, c.left), c;
  }, ut(e, r, o));
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
  getDocumentElement: F,
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
  isRTL: (t) => z(t).direction === "rtl"
};
function Zt(t, e, n, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = !0,
    animationFrame: r = !1
  } = i, a = o && !r, c = a || s ? [...L(t) ? I(t) : t.contextElement ? I(t.contextElement) : [], ...I(e)] : [];
  c.forEach((d) => {
    a && d.addEventListener("scroll", n, {
      passive: !0
    }), s && d.addEventListener("resize", n);
  });
  let p = null;
  if (l) {
    let d = !0;
    p = new ResizeObserver(() => {
      d || n(), d = !1;
    }), L(t) && !r && p.observe(t), !L(t) && t.contextElement && !r && p.observe(t.contextElement), p.observe(e);
  }
  let u, f = r ? D(t) : null;
  r && h();
  function h() {
    const d = D(t);
    f && (d.x !== f.x || d.y !== f.y || d.width !== f.width || d.height !== f.height) && n(), f = d, u = requestAnimationFrame(h);
  }
  return n(), () => {
    var d;
    c.forEach((m) => {
      a && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
    }), (d = p) == null || d.disconnect(), p = null, r && cancelAnimationFrame(u);
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
function Ct(t, e, n, i, o, s, l, r) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = n, a._compiled = !0), i && (a.functional = !0), s && (a._scopeId = "data-v-" + s);
  var c;
  if (l ? (c = function(f) {
    f = f || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), o && o.call(this, f), f && f._registeredComponents && f._registeredComponents.add(l);
  }, a._ssrRegister = c) : o && (c = r ? function() {
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
      var r;
      if (!this.$refs.triggerRef || !this.$refs.popperRef)
        return;
      const t = {
        middleware: [],
        placement: this.placement,
        strategy: this.strategy
      }, e = this.placement.startsWith("auto");
      this.offset && t.middleware.push(zt(this.offset)), e ? t.middleware.push(Et({
        alignment: (r = this.placement.split("-")[1]) != null ? r : ""
      })) : t.placement = this.placement, this.inline && t.middleware.push(Mt()), e || t.middleware.push(Bt({
        padding: this.overflowPadding
      })), this.shift && t.middleware.push(Nt({
        padding: this.overflowPadding
      })), !this.hideArrow && this.$refs.arrowRef && t.middleware.push(At({
        element: this.$refs.arrowRef,
        padding: this.arrowPadding
      }));
      const n = await te(this.$refs.triggerRef, this.$refs.popperRef, t), { x: i, y: o, placement: s, middlewareData: l } = n;
      if (this.popperPosition = {
        left: i ? `${i}px` : "",
        top: o ? `${o}px` : ""
      }, !this.hideArrow) {
        const { x: a, y: c } = l.arrow;
        this.currentPlacement = s, this.arrowPosition = {
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
var ie = /* @__PURE__ */ Ct(
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
function le() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var ae = function() {
  var e = this, n = e.$createElement, i = e._self._c || n;
  return i("floating-ui", {
    class: [e.block ? "w-full" : ""],
    attrs: {
      "data-id": "sds-dropdown",
      offset: e.offset,
      strategy: e.strategy,
      placement: e.placement,
      disabled: e.disabled,
      "will-open": e.willOpen,
      "will-close": e.willClose,
      "popper-class": "absolute border shadow-lg rounded-md bg-white dark:border-gray-600 dark:bg-gray-700 ".concat(e.auto ? "w-auto" : "w-56", " ").concat(e.zIndexClass),
      "hide-arrow": "",
      shift: ""
    },
    scopedSlots: e._u([{
      key: "trigger",
      fn: function(s) {
        var l = s.open, r = s.close, a = s.isOpen, c = s.toggle;
        return [e._t("trigger", function() {
          return [i("button", {
            ref: "button",
            staticClass: "btn space-x",
            class: [e.variantClass, e.sizeClass, e.outlineClass, e.disabledClass, e.blockClass, a ? "active" : ""],
            attrs: {
              id: e.id,
              type: "button",
              "aria-haspopup": "true",
              "aria-expanded": a,
              disabled: e.disabled
            },
            on: {
              click: function(u) {
                return e.handleClick(a, l, r);
              }
            }
          }, [e._t("title", function() {
            return [e._v(" " + e._s(e.title) + " ")];
          }), i("svg", {
            staticClass: "inline-block self-center w-5 h-5 -mr-1",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }
          }, [i("path", {
            attrs: {
              "fill-rule": "evenodd",
              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }
          })])], 2)];
        }, {
          open: l,
          close: r,
          isOpen: a,
          toggle: c
        })];
      }
    }, {
      key: "default",
      fn: function(s) {
        var l = s.open, r = s.close, a = s.toggle, c = s.isOpen;
        return [i("div", {
          staticClass: "py-2",
          attrs: {
            "aria-orientation": "vertical",
            "aria-labelledby": e.$refs.button && e.$refs.button.id || void 0
          }
        }, [e._t("default", null, {
          close: r,
          open: l,
          toggle: a,
          isOpen: c
        })], 2)];
      }
    }], null, !0)
  });
}, ce = [];
const fe = {
  name: "SdsPopover",
  components: {
    FloatingUi: re
  },
  props: {
    title: { type: String, default: "" },
    variant: { type: String, default: "default" },
    zIndex: { type: String, required: !1, default: "50" },
    offset: { type: Number, default: 5 },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    size: { type: String, default: "md" },
    auto: { type: Boolean, default: !1 },
    strategy: { type: String, default: "absolute" },
    placement: { type: String, default: "bottom-start" },
    outline: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null }
  },
  data() {
    return {
      id: ""
    };
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
        case "md":
          return "";
        case "sm":
          return "btn-sm";
        default:
          return "";
      }
    },
    variantClass() {
      switch (this.variant) {
        case "default":
          return "btn-default";
        case "primary":
          return "btn-primary";
        case "success":
          return "btn-success";
        case "danger":
          return "btn-danger";
        case "light":
          return "btn-light";
        default:
          return "";
      }
    },
    outlineClass() {
      return this.outline ? "btn-outline" : "";
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    },
    blockClass() {
      return this.block ? "btn-block" : "";
    }
  },
  mounted() {
    this.id = `sds-dropdown__${le()}`;
  },
  methods: {
    handleClick(t, e, n) {
      t ? n(this.closeDelay) : e(this.openDelay);
    }
  }
}, pt = {};
var ue = /* @__PURE__ */ Ct(
  fe,
  ae,
  ce,
  !1,
  de,
  null,
  null,
  null
);
function de(t) {
  for (let e in pt)
    this[e] = pt[e];
}
const pe = /* @__PURE__ */ function() {
  return ue.exports;
}();
export {
  pe as default
};
