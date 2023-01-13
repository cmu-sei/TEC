// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function L(t) {
  return t.split("-")[0];
}
function N(t) {
  return t.split("-")[1];
}
function W(t) {
  return ["top", "bottom"].includes(L(t)) ? "x" : "y";
}
function Z(t) {
  return t === "y" ? "height" : "width";
}
function st(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const r = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, s = W(e), a = Z(s), f = o[a] / 2 - i[a] / 2, p = L(e), u = s === "x";
  let c;
  switch (p) {
    case "top":
      c = {
        x: r,
        y: o.y - i.height
      };
      break;
    case "bottom":
      c = {
        x: r,
        y: o.y + o.height
      };
      break;
    case "right":
      c = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      c = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      c = {
        x: o.x,
        y: o.y
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
const Rt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = n, s = r.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let f = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: p,
    y: u
  } = st(f, o, a), c = o, h = {}, d = 0;
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
      initialPlacement: o,
      placement: c,
      strategy: i,
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
        strategy: i
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
    strategy: i,
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
    x: o,
    y: i,
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
  } = e, d = tt(h), v = s[c ? u === "floating" ? "reference" : "floating" : u], g = X(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(v))) == null || n ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: p,
    strategy: a
  })), w = X(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: u === "floating" ? {
      ...l.floating,
      x: o,
      y: i
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
function G(t, e, n) {
  return mt(t, ht(e, n));
}
const At = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      element: n,
      padding: o = 0
    } = t != null ? t : {}, {
      x: i,
      y: r,
      placement: l,
      rects: s,
      platform: a
    } = e;
    if (n == null)
      return {};
    const f = tt(o), p = {
      x: i,
      y: r
    }, u = W(l), c = N(l), h = Z(u), d = await a.getDimensions(n), m = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", g = s.reference[h] + s.reference[u] - p[u] - s.floating[h], w = p[u] - s.reference[u], x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(n));
    let b = x ? u === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    b === 0 && (b = s.floating[h]);
    const y = g / 2 - w / 2, P = f[m], A = b - d[h] - f[v], O = b / 2 - d[h] / 2 + y, _ = G(P, O, A), S = (c === "start" ? f[m] : f[v]) > 0 && O !== _ && s.reference[h] <= s.floating[h] ? O < P ? P - O : A - O : 0;
    return {
      [u]: p[u] - S,
      data: {
        [u]: _,
        centerOffset: O - _
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
  const o = N(t), i = W(t), r = Z(i);
  let l = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
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
const kt = ["top", "right", "bottom", "left"], $t = /* @__PURE__ */ kt.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
function Lt(t, e, n) {
  return (t ? [...n.filter((i) => N(i) === t), ...n.filter((i) => N(i) !== t)] : n.filter((i) => L(i) === i)).filter((i) => t ? N(i) === t || (e ? Q(i) !== i : !1) : !0);
}
const Et = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, o, i, r, l;
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
        allowedPlacements: m = $t,
        autoAlignment: v = !0,
        ...g
      } = t, w = Lt(d, v, m), x = await et(e, g), b = (n = (o = p.autoPlacement) == null ? void 0 : o.index) != null ? n : 0, y = w[b];
      if (y == null)
        return {};
      const {
        main: P,
        cross: A
      } = gt(y, f, await (c.isRTL == null ? void 0 : c.isRTL(h.floating)));
      if (u !== y)
        return {
          x: s,
          y: a,
          reset: {
            placement: w[0]
          }
        };
      const O = [x[L(y)], x[P], x[A]], _ = [...(i = (r = p.autoPlacement) == null ? void 0 : r.overflows) != null ? i : [], {
        placement: y,
        overflows: O
      }], T = w[b + 1];
      if (T)
        return {
          data: {
            index: b + 1,
            overflows: _
          },
          reset: {
            placement: T
          }
        };
      const C = _.slice().sort((R, F) => R.overflows[0] - F.overflows[0]), S = (l = C.find((R) => {
        let {
          overflows: F
        } = R;
        return F.every((H) => H <= 0);
      })) == null ? void 0 : l.placement, k = S != null ? S : C[0].placement;
      return k !== u ? {
        data: {
          index: b + 1,
          overflows: _
        },
        reset: {
          placement: k
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
        placement: o,
        middlewareData: i,
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
      } = t, m = L(o), g = u || (m === l || !h ? [j(l)] : Dt(l)), w = [l, ...g], x = await et(e, d), b = [];
      let y = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (f && b.push(x[m]), p) {
        const {
          main: _,
          cross: T
        } = gt(o, r, await (s.isRTL == null ? void 0 : s.isRTL(a.floating)));
        b.push(x[_], x[T]);
      }
      if (y = [...y, {
        placement: o,
        overflows: b
      }], !b.every((_) => _ <= 0)) {
        var P, A;
        const _ = ((P = (A = i.flip) == null ? void 0 : A.index) != null ? P : 0) + 1, T = w[_];
        if (T)
          return {
            data: {
              index: _,
              overflows: y
            },
            reset: {
              placement: T
            }
          };
        let C = "bottom";
        switch (c) {
          case "bestFit": {
            var O;
            const S = (O = y.map((k) => [k, k.overflows.filter((R) => R > 0).reduce((R, F) => R + F, 0)]).sort((k, R) => k[1] - R[1])[0]) == null ? void 0 : O[0].placement;
            S && (C = S);
            break;
          }
          case "initialPlacement":
            C = l;
            break;
        }
        if (o !== C)
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
async function Ft(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, r = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = L(n), s = N(n), a = W(n) === "x", f = ["left", "top"].includes(l) ? -1 : 1, p = r && a ? -1 : 1, u = typeof e == "function" ? e(t) : e;
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
const Vt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await Ft(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
function Mt(t) {
  return t === "x" ? "y" : "x";
}
const Nt = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
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
        y: o
      }, p = await et(e, a), u = W(L(i)), c = Mt(u);
      let h = f[u], d = f[c];
      if (r) {
        const v = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", w = h + p[v], x = h - p[g];
        h = G(w, h, x);
      }
      if (l) {
        const v = c === "y" ? "top" : "left", g = c === "y" ? "bottom" : "right", w = d + p[v], x = d - p[g];
        d = G(w, d, x);
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
          y: m.y - o
        }
      };
    }
  };
}, zt = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        elements: i,
        rects: r,
        platform: l,
        strategy: s
      } = e, {
        padding: a = 2,
        x: f,
        y: p
      } = t, u = X(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: r.reference,
        offsetParent: await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i.floating)),
        strategy: s
      }) : r.reference), c = (n = await (l.getClientRects == null ? void 0 : l.getClientRects(i.reference))) != null ? n : [], h = tt(a);
      function d() {
        if (c.length === 2 && c[0].left > c[1].right && f != null && p != null) {
          var v;
          return (v = c.find((g) => f > g.left - h.left && f < g.right + h.right && p > g.top - h.top && p < g.bottom + h.bottom)) != null ? v : u;
        }
        if (c.length >= 2) {
          if (W(o) === "x") {
            const C = c[0], S = c[c.length - 1], k = L(o) === "top", R = C.top, F = S.bottom, H = k ? C.left : S.left, it = k ? C.right : S.right, _t = it - H, Ot = F - R;
            return {
              top: R,
              bottom: F,
              left: H,
              right: it,
              width: _t,
              height: Ot,
              x: H,
              y: R
            };
          }
          const g = L(o) === "left", w = mt(...c.map((C) => C.right)), x = ht(...c.map((C) => C.left)), b = c.filter((C) => g ? C.left === x : C.right === w), y = b[0].top, P = b[b.length - 1].bottom, A = x, O = w, _ = O - A, T = P - y;
          return {
            top: y,
            bottom: P,
            left: A,
            right: O,
            width: _,
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
        floating: i.floating,
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
function V(t) {
  return B(t).getComputedStyle(t);
}
function z(t) {
  return wt(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
}
function yt() {
  const t = navigator.userAgentData;
  return t != null && t.brands ? t.brands.map((e) => e.brand + "/" + e.version).join(" ") : navigator.userAgent;
}
function E(t) {
  return t instanceof B(t).HTMLElement;
}
function $(t) {
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
    overflowY: o,
    display: i
  } = V(t);
  return /auto|scroll|overlay|hidden/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function Ht(t) {
  return ["table", "td", "th"].includes(z(t));
}
function nt(t) {
  const e = /firefox/i.test(yt()), n = V(t), o = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (o ? o !== "none" : !1) || e && n.willChange === "filter" || e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const r = n.contain;
      return r != null ? r.includes(i) : !1;
    }
  );
}
function vt() {
  return !/^((?!chrome|android).)*safari/i.test(yt());
}
function ot(t) {
  return ["html", "body", "#document"].includes(z(t));
}
const lt = Math.min, U = Math.max, Y = Math.round;
function D(t, e, n) {
  var o, i, r, l;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const s = t.getBoundingClientRect();
  let a = 1, f = 1;
  e && E(t) && (a = t.offsetWidth > 0 && Y(s.width) / t.offsetWidth || 1, f = t.offsetHeight > 0 && Y(s.height) / t.offsetHeight || 1);
  const p = $(t) ? B(t) : window, u = !vt() && n, c = (s.left + (u && (o = (i = p.visualViewport) == null ? void 0 : i.offsetLeft) != null ? o : 0)) / a, h = (s.top + (u && (r = (l = p.visualViewport) == null ? void 0 : l.offsetTop) != null ? r : 0)) / f, d = s.width / a, m = s.height / f;
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
function M(t) {
  return ((Wt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function J(t) {
  return $(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function xt(t) {
  return D(M(t)).left + J(t).scrollLeft;
}
function Ut(t) {
  const e = D(t);
  return Y(e.width) !== t.offsetWidth || Y(e.height) !== t.offsetHeight;
}
function It(t, e, n) {
  const o = E(e), i = M(e), r = D(
    t,
    o && Ut(e),
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
  if (o || !o && n !== "fixed")
    if ((z(e) !== "body" || q(i)) && (l = J(e)), E(e)) {
      const a = D(e, !0);
      s.x = a.x + e.clientLeft, s.y = a.y + e.clientTop;
    } else
      i && (s.x = xt(i));
  return {
    x: r.left + l.scrollLeft - s.x,
    y: r.top + l.scrollTop - s.y,
    width: r.width,
    height: r.height
  };
}
function K(t) {
  if (z(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (rt(t) ? t.host : null) || M(t);
  return rt(e) ? e.host : e;
}
function at(t) {
  return !E(t) || V(t).position === "fixed" ? null : t.offsetParent;
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
  for (; n && Ht(n) && V(n).position === "static"; )
    n = at(n);
  return n && (z(n) === "html" || z(n) === "body" && V(n).position === "static" && !nt(n)) ? e : n || Xt(t) || e;
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
    strategy: o
  } = t;
  const i = E(n), r = M(n);
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
  if ((i || !i && o !== "fixed") && ((z(n) !== "body" || q(r)) && (l = J(n)), E(n))) {
    const a = D(n, !0);
    s.x = a.x + n.clientLeft, s.y = a.y + n.clientTop;
  }
  return {
    ...e,
    x: e.x - l.scrollLeft + s.x,
    y: e.y - l.scrollTop + s.y
  };
}
function Yt(t, e) {
  const n = B(t), o = M(t), i = n.visualViewport;
  let r = o.clientWidth, l = o.clientHeight, s = 0, a = 0;
  if (i) {
    r = i.width, l = i.height;
    const f = vt();
    (f || !f && e === "fixed") && (s = i.offsetLeft, a = i.offsetTop);
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
  const n = M(t), o = J(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, r = U(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), l = U(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let s = -o.scrollLeft + xt(t);
  const a = -o.scrollTop;
  return V(i || n).direction === "rtl" && (s += U(n.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: l,
    x: s,
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
  const o = bt(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), r = B(o), l = i ? [r].concat(r.visualViewport || [], q(o) ? o : []) : o, s = e.concat(l);
  return i ? s : s.concat(I(l));
}
function qt(t, e) {
  const n = D(t, !1, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft;
  return {
    top: o,
    left: i,
    x: i,
    y: o,
    right: i + t.clientWidth,
    bottom: o + t.clientHeight,
    width: t.clientWidth,
    height: t.clientHeight
  };
}
function ut(t, e, n) {
  return e === "viewport" ? X(Yt(t, n)) : $(e) ? qt(e, n) : X(Kt(M(t)));
}
function Jt(t) {
  let e = I(t).filter((i) => $(i)), n = t, o = null;
  for (; $(n) && !ot(n); ) {
    const i = V(n);
    i.position === "static" && o && ["absolute", "fixed"].includes(o.position) && !nt(n) ? e = e.filter((r) => r !== n) : o = i, n = K(n);
  }
  return e;
}
function Gt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...n === "clippingAncestors" ? Jt(e) : [].concat(n), o], s = l[0], a = l.reduce((f, p) => {
    const u = ut(e, p, i);
    return f.top = U(u.top, f.top), f.right = lt(u.right, f.right), f.bottom = lt(u.bottom, f.bottom), f.left = U(u.left, f.left), f;
  }, ut(e, s, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
const Qt = {
  getClippingRect: Gt,
  convertOffsetParentRelativeRectToViewportRelativeRect: jt,
  isElement: $,
  getDimensions: ft,
  getOffsetParent: ct,
  getDocumentElement: M,
  getElementRects: (t) => {
    let {
      reference: e,
      floating: n,
      strategy: o
    } = t;
    return {
      reference: It(e, ct(n), o),
      floating: {
        ...ft(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (t) => Array.from(t.getClientRects()),
  isRTL: (t) => V(t).direction === "rtl"
};
function Zt(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = !0,
    animationFrame: s = !1
  } = o, a = i && !s, f = a || r ? [...$(t) ? I(t) : t.contextElement ? I(t.contextElement) : [], ...I(e)] : [];
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
  let u, c = s ? D(t) : null;
  s && h();
  function h() {
    const d = D(t);
    c && (d.x !== c.x || d.y !== c.y || d.width !== c.width || d.height !== c.height) && n(), c = d, u = requestAnimationFrame(h);
  }
  return n(), () => {
    var d;
    f.forEach((m) => {
      a && m.removeEventListener("scroll", n), r && m.removeEventListener("resize", n);
    }), (d = p) == null || d.disconnect(), p = null, s && cancelAnimationFrame(u);
  };
}
const te = (t, e, n) => Rt(t, e, {
  platform: Qt,
  ...n
});
var ee = function() {
  var e = this, n = e.$createElement, o = e._self._c || n;
  return o("div", {
    staticClass: "inline-block"
  }, [o("div", {
    ref: "triggerRef",
    staticClass: "inline-block w-full"
  }, [e._t("trigger", null, {
    isOpen: e.open,
    open: e.onOpen,
    close: e.onClose,
    toggle: e.onToggle
  })], 2), o("transition", {
    attrs: {
      css: !e.disableAnimation,
      "enter-active-class": "transition duration-75 ease-out",
      "enter-class": "transform scale-95 opacity-0",
      "enter-to-class": "transform scale-100 opacity-100",
      "leave-active-class": "transition duration-50 ease-in",
      "leave-class": "transform scale-100 opacity-100",
      "leave-to-class": "transform scale-95 opacity-0"
    }
  }, [e.open ? o("div", {
    ref: "popperRef",
    class: e.popperClass,
    style: e.popperPosition
  }, [e.hideArrow ? e._e() : o("div", {
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
function Ct(t, e, n, o, i, r, l, s) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = n, a._compiled = !0), o && (a.functional = !0), r && (a._scopeId = "data-v-" + r);
  var f;
  if (l ? (f = function(c) {
    c = c || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), i && i.call(this, c), c && c._registeredComponents && c._registeredComponents.add(l);
  }, a._ssrRegister = f) : i && (f = s ? function() {
    i.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), f)
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
      this.offset && t.middleware.push(Vt(this.offset)), e ? t.middleware.push(Et({
        alignment: (s = this.placement.split("-")[1]) != null ? s : ""
      })) : t.placement = this.placement, this.inline && t.middleware.push(zt()), e || t.middleware.push(Bt({
        padding: this.overflowPadding
      })), this.shift && t.middleware.push(Nt({
        padding: this.overflowPadding
      })), !this.hideArrow && this.$refs.arrowRef && t.middleware.push(At({
        element: this.$refs.arrowRef,
        padding: this.arrowPadding
      }));
      const n = await te(this.$refs.triggerRef, this.$refs.popperRef, t), { x: o, y: i, placement: r, middlewareData: l } = n;
      if (this.popperPosition = {
        left: o ? `${o}px` : "",
        top: i ? `${i}px` : ""
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
  var e = this, n = e.$createElement, o = e._self._c || n;
  return o("floating-ui", {
    attrs: {
      "data-id": "sds-filter-by-dropdown",
      placement: e.placement,
      "popper-class": "absolute border shadow-lg rounded-md bg-gray-100 dark:border-gray-600 dark:bg-gray-700 w-72 ".concat(e.zIndexClass),
      "arrow-class": "absolute bg-gray-100 border dark:border-gray-600 dark:bg-gray-700 w-3 h-3 rotate-45",
      "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
      "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
      "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
      "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0",
      shift: ""
    },
    scopedSlots: e._u([{
      key: "trigger",
      fn: function(r) {
        var l = r.isOpen, s = r.toggle;
        return [o("button", {
          ref: "button",
          class: e.variantClass,
          attrs: {
            id: e.id,
            type: "button",
            "aria-haspopup": "true",
            "aria-expanded": l
          },
          on: {
            click: function(f) {
              s(), e.resetTmpOptions();
            }
          }
        }, [e._t("title", function() {
          return [o("span", [e._v(e._s(e.title))])];
        }), o("svg", {
          staticClass: "inline-block self-center w-5 h-5 -mr-1",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }
        }, [o("path", {
          attrs: {
            "fill-rule": "evenodd",
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            "clip-rule": "evenodd"
          }
        })])], 2)];
      }
    }, {
      key: "default",
      fn: function(r) {
        var l = r.close;
        return [o("div", {
          staticClass: "p-2",
          attrs: {
            "aria-orientation": "vertical",
            "aria-labelledby": e.$refs.button && e.$refs.button.id || void 0
          }
        }, [e.enableFilter ? o("div", {
          staticClass: "input-group input-group-sm mb-2 pb-2 border-b"
        }, [o("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: e.filterText,
            expression: "filterText"
          }],
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: "Type to filter"
          },
          domProps: {
            value: e.filterText
          },
          on: {
            input: function(a) {
              a.target.composing || (e.filterText = a.target.value);
            }
          }
        }), o("span", {
          staticClass: "input-group-text"
        }, [o("svg", {
          staticClass: "w-5 h-5",
          attrs: {
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }
        }, [o("path", {
          attrs: {
            "fill-rule": "evenodd",
            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
            "clip-rule": "evenodd"
          }
        })])])]) : e._e(), e.enableFilter ? e._e() : o("div", {
          staticClass: "pb-2 mb-2 space-x-1 space-y-2 border-b dark:border-gray-500"
        }, [o("label", {
          staticClass: "text-gray-900 dark:text-gray-50 flex gap-1 w-max"
        }, [o("input", {
          staticClass: "my-auto",
          attrs: {
            type: "checkbox"
          },
          domProps: {
            checked: e.allSelected,
            indeterminate: e.indeterminate
          },
          on: {
            click: function(a) {
              return e.toggleSelect();
            }
          }
        }), o("span", {
          staticClass: "my-auto"
        }, [e._v("Select all")])])]), o("div", {
          staticClass: "scroll-area max-h-48"
        }, [o("ul", e._l(e.filteredTmpOptions, function(s) {
          return o("li", {
            key: s.id
          }, [o("div", {
            staticClass: "space-x-1"
          }, [o("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: s.selected,
              expression: "o.selected"
            }],
            staticClass: "focus:ring-0",
            attrs: {
              id: "filter_by_dropdown_selection_list_".concat(s.id),
              type: "checkbox"
            },
            domProps: {
              value: s.id,
              checked: Array.isArray(s.selected) ? e._i(s.selected, s.id) > -1 : s.selected
            },
            on: {
              change: function(f) {
                var p = s.selected, u = f.target, c = !!u.checked;
                if (Array.isArray(p)) {
                  var h = s.id, d = e._i(p, h);
                  u.checked ? d < 0 && e.$set(s, "selected", p.concat([h])) : d > -1 && e.$set(s, "selected", p.slice(0, d).concat(p.slice(d + 1)));
                } else
                  e.$set(s, "selected", c);
              }
            }
          }), o("label", {
            staticClass: "text-gray-900 dark:text-gray-50 ml-1",
            attrs: {
              for: "filter_by_dropdown_selection_list_".concat(s.id)
            }
          }, [e._v(e._s(s.text))])])]);
        }), 0)]), o("div", {
          staticClass: "pt-4 space-y-2"
        }, [o("button", {
          staticClass: "btn btn-blue btn-block btn-sm",
          on: {
            click: function(a) {
              e.saveSelections(), l();
            }
          }
        }, [e._v(" Apply filter ")]), o("button", {
          staticClass: "btn btn-default btn-block btn-sm",
          on: {
            click: function(a) {
              e.cancelSelections(), l();
            }
          }
        }, [e._v(" Cancel ")])])])];
      }
    }], null, !0)
  });
}, ce = [];
const fe = {
  name: "SdsFilterByDropdown",
  components: {
    FloatingUi: re
  },
  props: {
    value: { type: Array, default: () => [] },
    variant: { type: String, default: "secondary" },
    zIndex: { type: String, required: !1, default: "50" },
    title: { type: String, default: "Filter" },
    enableFilter: { type: Boolean, default: !1 },
    enableSortOptions: { type: Boolean, default: !1 },
    placement: { type: String, default: "bottom-start" }
  },
  data() {
    return {
      id: "",
      filterText: "",
      tmpOptions: [],
      open: !1
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
    options: {
      get() {
        return this.value;
      },
      set(t) {
        this.$emit("update:value", t);
      }
    },
    allSelected() {
      return this.tmpOptions.every((t) => t.selected);
    },
    someSelected() {
      return this.tmpOptions.some((t) => t.selected);
    },
    indeterminate() {
      return this.someSelected && !this.allSelected;
    },
    filteredTmpOptions() {
      return this.tmpOptions.filter(
        (t) => t.text && t.text.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "link link-primary";
        case "secondary":
          return "link link-secondary";
        default:
          return "";
      }
    }
  },
  mounted() {
    this.id = `sds-filter-by-dropdown__${le()}`;
  },
  methods: {
    toggleSelect() {
      this.allSelected ? this.deselectAllOptions() : this.selectAllOptions();
    },
    saveSelections() {
      this.$emit("input", this.tmpOptions);
    },
    cancelSelections() {
      this.resetTmpOptions();
    },
    resetTmpOptions() {
      const t = JSON.parse(JSON.stringify(this.options));
      this.enableSortOptions ? this.tmpOptions = t.sort((e, n) => e.text.toLowerCase() < n.text.toLowerCase() ? -1 : e.text.toLowerCase() > n.text.toLowerCase() ? 1 : 0).sort((e, n) => e.selected > n.selected ? -1 : e.selected < n.selected ? 1 : 0) : this.tmpOptions = t, this.filterText = "";
    },
    deselectAllOptions() {
      this.tmpOptions.forEach((t) => {
        t.selected = !1;
      });
    },
    selectAllOptions() {
      this.tmpOptions.forEach((t) => {
        t.selected = !0;
      });
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
