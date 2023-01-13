// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import zt from "vue";
const It = zt.extend({
  name: "SdsLink",
  props: {
    variant: { type: String, default: "" },
    external: { type: Boolean, default: !1 },
    cta: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  computed: {
    linkClass() {
      return this.variant !== "" || this.cta ? "link" : "";
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "link-primary";
        case "secondary":
          return "link-secondary";
        case "tertiary":
          return "link-tertiary";
        case "danger":
          return "link-danger";
        case "light":
          return "link-light";
        case "dark":
          return "link-dark";
        default:
          return "";
      }
    },
    ctaClass() {
      return this.cta ? "link-cta" : "";
    },
    disabledClass() {
      return this.disabled ? "disabled" : "";
    }
  }
});
var mt = function() {
  var t = this, L = t.$createElement, s = t._self._c || L;
  return s("a", {
    class: [t.linkClass, t.variantClass, t.ctaClass, t.disabledClass],
    attrs: {
      "data-id": "sds-link",
      target: t.external ? "_blank" : !1,
      rel: t.external ? "noopener noreferrer" : !1,
      tabindex: t.disabled ? -1 : void 0
    }
  }, [t._t("default")], 2);
}, vt = [];
function $(e, t, L, s, i, n, a, o) {
  var l = typeof e == "function" ? e.options : e;
  t && (l.render = t, l.staticRenderFns = L, l._compiled = !0), s && (l.functional = !0), n && (l._scopeId = "data-v-" + n);
  var M;
  if (a ? (M = function(u) {
    u = u || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !u && typeof __VUE_SSR_CONTEXT__ < "u" && (u = __VUE_SSR_CONTEXT__), i && i.call(this, u), u && u._registeredComponents && u._registeredComponents.add(a);
  }, l._ssrRegister = M) : i && (M = o ? function() {
    i.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), M)
    if (l.functional) {
      l._injectStyles = M;
      var j = l.render;
      l.render = function(w, c) {
        return M.call(c), j(w, c);
      };
    } else {
      var r = l.beforeCreate;
      l.beforeCreate = r ? [].concat(r, M) : [M];
    }
  return {
    exports: e,
    options: l
  };
}
const ot = {};
var Et = /* @__PURE__ */ $(
  It,
  mt,
  vt,
  !1,
  kt,
  null,
  null,
  null
);
function kt(e) {
  for (let t in ot)
    this[t] = ot[t];
}
const Yt = /* @__PURE__ */ function() {
  return Et.exports;
}();
function k(e) {
  return e.split("-")[0];
}
function _(e) {
  return e.split("-")[1];
}
function V(e) {
  return ["top", "bottom"].includes(k(e)) ? "x" : "y";
}
function tt(e) {
  return e === "y" ? "height" : "width";
}
function at(e, t, L) {
  let {
    reference: s,
    floating: i
  } = e;
  const n = s.x + s.width / 2 - i.width / 2, a = s.y + s.height / 2 - i.height / 2, o = V(t), l = tt(o), M = s[l] / 2 - i[l] / 2, j = k(t), r = o === "x";
  let u;
  switch (j) {
    case "top":
      u = {
        x: n,
        y: s.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: n,
        y: s.y + s.height
      };
      break;
    case "right":
      u = {
        x: s.x + s.width,
        y: a
      };
      break;
    case "left":
      u = {
        x: s.x - i.width,
        y: a
      };
      break;
    default:
      u = {
        x: s.x,
        y: s.y
      };
  }
  switch (_(t)) {
    case "start":
      u[o] -= M * (L && r ? -1 : 1);
      break;
    case "end":
      u[o] += M * (L && r ? -1 : 1);
      break;
  }
  return u;
}
const Ot = async (e, t, L) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: n = [],
    platform: a
  } = L, o = n.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let M = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: j,
    y: r
  } = at(M, s, l), u = s, w = {}, c = 0;
  for (let y = 0; y < o.length; y++) {
    const {
      name: g,
      fn: C
    } = o[y], {
      x: N,
      y: f,
      data: p,
      reset: d
    } = await C({
      x: j,
      y: r,
      initialPlacement: s,
      placement: u,
      strategy: i,
      middlewareData: w,
      rects: M,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (j = N != null ? N : j, r = f != null ? f : r, w = {
      ...w,
      [g]: {
        ...w[g],
        ...p
      }
    }, d && c <= 50) {
      c++, typeof d == "object" && (d.placement && (u = d.placement), d.rects && (M = d.rects === !0 ? await a.getElementRects({
        reference: e,
        floating: t,
        strategy: i
      }) : d.rects), {
        x: j,
        y: r
      } = at(M, u, l)), y = -1;
      continue;
    }
  }
  return {
    x: j,
    y: r,
    placement: u,
    strategy: i,
    middlewareData: w
  };
};
function bt(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function et(e) {
  return typeof e != "number" ? bt(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function B(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function st(e, t) {
  var L;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: n,
    rects: a,
    elements: o,
    strategy: l
  } = e, {
    boundary: M = "clippingAncestors",
    rootBoundary: j = "viewport",
    elementContext: r = "floating",
    altBoundary: u = !1,
    padding: w = 0
  } = t, c = et(w), g = o[u ? r === "floating" ? "reference" : "floating" : r], C = B(await n.getClippingRect({
    element: (L = await (n.isElement == null ? void 0 : n.isElement(g))) == null || L ? g : g.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(o.floating)),
    boundary: M,
    rootBoundary: j,
    strategy: l
  })), N = B(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: r === "floating" ? {
      ...a.floating,
      x: s,
      y: i
    } : a.reference,
    offsetParent: await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(o.floating)),
    strategy: l
  }) : a[r]);
  return {
    top: C.top - N.top + c.top,
    bottom: N.bottom - C.bottom + c.bottom,
    left: C.left - N.left + c.left,
    right: N.right - C.right + c.right
  };
}
const Nt = Math.min, dt = Math.max;
function Z(e, t, L) {
  return dt(e, Nt(t, L));
}
const At = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: L,
      padding: s = 0
    } = e != null ? e : {}, {
      x: i,
      y: n,
      placement: a,
      rects: o,
      platform: l
    } = t;
    if (L == null)
      return {};
    const M = et(s), j = {
      x: i,
      y: n
    }, r = V(a), u = _(a), w = tt(r), c = await l.getDimensions(L), y = r === "y" ? "top" : "left", g = r === "y" ? "bottom" : "right", C = o.reference[w] + o.reference[r] - j[r] - o.floating[w], N = j[r] - o.reference[r], f = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(L));
    let p = f ? r === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0;
    p === 0 && (p = o.floating[w]);
    const d = C / 2 - N / 2, h = M[y], z = p - c[w] - M[g], D = p / 2 - c[w] / 2 + d, S = Z(h, D, z), I = (u === "start" ? M[y] : M[g]) > 0 && D !== S && o.reference[w] <= o.floating[w] ? D < h ? h - D : z - D : 0;
    return {
      [r]: j[r] - I,
      data: {
        [r]: S,
        centerOffset: D - S
      }
    };
  }
}), Qt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function W(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qt[t]);
}
function gt(e, t, L) {
  L === void 0 && (L = !1);
  const s = _(e), i = V(e), n = tt(i);
  let a = i === "x" ? s === (L ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (a = W(a)), {
    main: a,
    cross: W(a)
  };
}
const Ut = {
  start: "end",
  end: "start"
};
function q(e) {
  return e.replace(/start|end/g, (t) => Ut[t]);
}
const _t = ["top", "right", "bottom", "left"], Gt = /* @__PURE__ */ _t.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function Vt(e, t, L) {
  return (e ? [...L.filter((i) => _(i) === e), ...L.filter((i) => _(i) !== e)] : L.filter((i) => k(i) === i)).filter((i) => e ? _(i) === e || (t ? q(i) !== i : !1) : !0);
}
const Pt = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var L, s, i, n, a;
      const {
        x: o,
        y: l,
        rects: M,
        middlewareData: j,
        placement: r,
        platform: u,
        elements: w
      } = t, {
        alignment: c = null,
        allowedPlacements: y = Gt,
        autoAlignment: g = !0,
        ...C
      } = e, N = Vt(c, g, y), f = await st(t, C), p = (L = (s = j.autoPlacement) == null ? void 0 : s.index) != null ? L : 0, d = N[p];
      if (d == null)
        return {};
      const {
        main: h,
        cross: z
      } = gt(d, M, await (u.isRTL == null ? void 0 : u.isRTL(w.floating)));
      if (r !== d)
        return {
          x: o,
          y: l,
          reset: {
            placement: N[0]
          }
        };
      const D = [f[k(d)], f[h], f[z]], S = [...(i = (n = j.autoPlacement) == null ? void 0 : n.overflows) != null ? i : [], {
        placement: d,
        overflows: D
      }], m = N[p + 1];
      if (m)
        return {
          data: {
            index: p + 1,
            overflows: S
          },
          reset: {
            placement: m
          }
        };
      const x = S.slice().sort((T, A) => T.overflows[0] - A.overflows[0]), I = (a = x.find((T) => {
        let {
          overflows: A
        } = T;
        return A.every((P) => P <= 0);
      })) == null ? void 0 : a.placement, v = I != null ? I : x[0].placement;
      return v !== r ? {
        data: {
          index: p + 1,
          overflows: S
        },
        reset: {
          placement: v
        }
      } : {};
    }
  };
};
function Jt(e) {
  const t = W(e);
  return [q(e), t, q(t)];
}
const Rt = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var L;
      const {
        placement: s,
        middlewareData: i,
        rects: n,
        initialPlacement: a,
        platform: o,
        elements: l
      } = t, {
        mainAxis: M = !0,
        crossAxis: j = !0,
        fallbackPlacements: r,
        fallbackStrategy: u = "bestFit",
        flipAlignment: w = !0,
        ...c
      } = e, y = k(s), C = r || (y === a || !w ? [W(a)] : Jt(a)), N = [a, ...C], f = await st(t, c), p = [];
      let d = ((L = i.flip) == null ? void 0 : L.overflows) || [];
      if (M && p.push(f[y]), j) {
        const {
          main: S,
          cross: m
        } = gt(s, n, await (o.isRTL == null ? void 0 : o.isRTL(l.floating)));
        p.push(f[S], f[m]);
      }
      if (d = [...d, {
        placement: s,
        overflows: p
      }], !p.every((S) => S <= 0)) {
        var h, z;
        const S = ((h = (z = i.flip) == null ? void 0 : z.index) != null ? h : 0) + 1, m = N[S];
        if (m)
          return {
            data: {
              index: S,
              overflows: d
            },
            reset: {
              placement: m
            }
          };
        let x = "bottom";
        switch (u) {
          case "bestFit": {
            var D;
            const I = (D = d.map((v) => [v, v.overflows.filter((T) => T > 0).reduce((T, A) => T + A, 0)]).sort((v, T) => v[1] - T[1])[0]) == null ? void 0 : D[0].placement;
            I && (x = I);
            break;
          }
          case "initialPlacement":
            x = a;
            break;
        }
        if (s !== x)
          return {
            reset: {
              placement: x
            }
          };
      }
      return {};
    }
  };
};
async function Bt(e, t) {
  const {
    placement: L,
    platform: s,
    elements: i
  } = e, n = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), a = k(L), o = _(L), l = V(L) === "x", M = ["left", "top"].includes(a) ? -1 : 1, j = n && l ? -1 : 1, r = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: u,
    crossAxis: w,
    alignmentAxis: c
  } = typeof r == "number" ? {
    mainAxis: r,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...r
  };
  return o && typeof c == "number" && (w = o === "end" ? c * -1 : c), l ? {
    x: w * j,
    y: u * M
  } : {
    x: u * M,
    y: w * j
  };
}
const Wt = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: L,
        y: s
      } = t, i = await Bt(t, e);
      return {
        x: L + i.x,
        y: s + i.y,
        data: i
      };
    }
  };
};
function Ft(e) {
  return e === "x" ? "y" : "x";
}
const Ht = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: L,
        y: s,
        placement: i
      } = t, {
        mainAxis: n = !0,
        crossAxis: a = !1,
        limiter: o = {
          fn: (g) => {
            let {
              x: C,
              y: N
            } = g;
            return {
              x: C,
              y: N
            };
          }
        },
        ...l
      } = e, M = {
        x: L,
        y: s
      }, j = await st(t, l), r = V(k(i)), u = Ft(r);
      let w = M[r], c = M[u];
      if (n) {
        const g = r === "y" ? "top" : "left", C = r === "y" ? "bottom" : "right", N = w + j[g], f = w - j[C];
        w = Z(N, w, f);
      }
      if (a) {
        const g = u === "y" ? "top" : "left", C = u === "y" ? "bottom" : "right", N = c + j[g], f = c - j[C];
        c = Z(N, c, f);
      }
      const y = o.fn({
        ...t,
        [r]: w,
        [u]: c
      });
      return {
        ...y,
        data: {
          x: y.x - L,
          y: y.y - s
        }
      };
    }
  };
}, $t = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      var L;
      const {
        placement: s,
        elements: i,
        rects: n,
        platform: a,
        strategy: o
      } = t, {
        padding: l = 2,
        x: M,
        y: j
      } = e, r = B(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: n.reference,
        offsetParent: await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)),
        strategy: o
      }) : n.reference), u = (L = await (a.getClientRects == null ? void 0 : a.getClientRects(i.reference))) != null ? L : [], w = et(l);
      function c() {
        if (u.length === 2 && u[0].left > u[1].right && M != null && j != null) {
          var g;
          return (g = u.find((C) => M > C.left - w.left && M < C.right + w.right && j > C.top - w.top && j < C.bottom + w.bottom)) != null ? g : r;
        }
        if (u.length >= 2) {
          if (V(s) === "x") {
            const x = u[0], I = u[u.length - 1], v = k(s) === "top", T = x.top, A = I.bottom, P = v ? x.left : I.left, nt = v ? x.right : I.right, Tt = nt - P, ht = A - T;
            return {
              top: T,
              bottom: A,
              left: P,
              right: nt,
              width: Tt,
              height: ht,
              x: P,
              y: T
            };
          }
          const C = k(s) === "left", N = dt(...u.map((x) => x.right)), f = Nt(...u.map((x) => x.left)), p = u.filter((x) => C ? x.left === f : x.right === N), d = p[0].top, h = p[p.length - 1].bottom, z = f, D = N, S = D - z, m = h - d;
          return {
            top: d,
            bottom: h,
            left: z,
            right: D,
            width: S,
            height: m,
            x: z,
            y: d
          };
        }
        return r;
      }
      const y = await a.getElementRects({
        reference: {
          getBoundingClientRect: c
        },
        floating: i.floating,
        strategy: o
      });
      return n.reference.x !== y.reference.x || n.reference.y !== y.reference.y || n.reference.width !== y.reference.width || n.reference.height !== y.reference.height ? {
        reset: {
          rects: y
        }
      } : {};
    }
  };
};
function ft(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function b(e) {
  if (e == null)
    return window;
  if (!ft(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Q(e) {
  return b(e).getComputedStyle(e);
}
function G(e) {
  return ft(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function pt() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function Y(e) {
  return e instanceof b(e).HTMLElement;
}
function E(e) {
  return e instanceof b(e).Element;
}
function Kt(e) {
  return e instanceof b(e).Node;
}
function lt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = b(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function K(e) {
  const {
    overflow: t,
    overflowX: L,
    overflowY: s,
    display: i
  } = Q(e);
  return /auto|scroll|overlay|hidden/.test(t + s + L) && !["inline", "contents"].includes(i);
}
function Xt(e) {
  return ["table", "td", "th"].includes(G(e));
}
function it(e) {
  const t = /firefox/i.test(pt()), L = Q(e), s = L.backdropFilter || L.WebkitBackdropFilter;
  return L.transform !== "none" || L.perspective !== "none" || (s ? s !== "none" : !1) || t && L.willChange === "filter" || t && (L.filter ? L.filter !== "none" : !1) || ["transform", "perspective"].some((i) => L.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      const n = L.contain;
      return n != null ? n.includes(i) : !1;
    }
  );
}
function xt() {
  return !/^((?!chrome|android).)*safari/i.test(pt());
}
function Lt(e) {
  return ["html", "body", "#document"].includes(G(e));
}
const Mt = Math.min, J = Math.max, F = Math.round;
function O(e, t, L) {
  var s, i, n, a;
  t === void 0 && (t = !1), L === void 0 && (L = !1);
  const o = e.getBoundingClientRect();
  let l = 1, M = 1;
  t && Y(e) && (l = e.offsetWidth > 0 && F(o.width) / e.offsetWidth || 1, M = e.offsetHeight > 0 && F(o.height) / e.offsetHeight || 1);
  const j = E(e) ? b(e) : window, r = !xt() && L, u = (o.left + (r && (s = (i = j.visualViewport) == null ? void 0 : i.offsetLeft) != null ? s : 0)) / l, w = (o.top + (r && (n = (a = j.visualViewport) == null ? void 0 : a.offsetTop) != null ? n : 0)) / M, c = o.width / l, y = o.height / M;
  return {
    width: c,
    height: y,
    top: w,
    right: u + c,
    bottom: w + y,
    left: u,
    x: u,
    y: w
  };
}
function U(e) {
  return ((Kt(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function X(e) {
  return E(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function St(e) {
  return O(U(e)).left + X(e).scrollLeft;
}
function Zt(e) {
  const t = O(e);
  return F(t.width) !== e.offsetWidth || F(t.height) !== e.offsetHeight;
}
function qt(e, t, L) {
  const s = Y(t), i = U(t), n = O(
    e,
    s && Zt(t),
    L === "fixed"
  );
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if (s || !s && L !== "fixed")
    if ((G(t) !== "body" || K(i)) && (a = X(t)), Y(t)) {
      const l = O(t, !0);
      o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
    } else
      i && (o.x = St(i));
  return {
    x: n.left + a.scrollLeft - o.x,
    y: n.top + a.scrollTop - o.y,
    width: n.width,
    height: n.height
  };
}
function H(e) {
  if (G(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (lt(e) ? e.host : null) || U(e);
  return lt(t) ? t.host : t;
}
function ut(e) {
  return !Y(e) || Q(e).position === "fixed" ? null : e.offsetParent;
}
function te(e) {
  let t = H(e);
  for (; Y(t) && !Lt(t); ) {
    if (it(t))
      return t;
    t = H(t);
  }
  return null;
}
function rt(e) {
  const t = b(e);
  let L = ut(e);
  for (; L && Xt(L) && Q(L).position === "static"; )
    L = ut(L);
  return L && (G(L) === "html" || G(L) === "body" && Q(L).position === "static" && !it(L)) ? t : L || te(e) || t;
}
function ct(e) {
  if (Y(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = O(e);
  return {
    width: t.width,
    height: t.height
  };
}
function ee(e) {
  let {
    rect: t,
    offsetParent: L,
    strategy: s
  } = e;
  const i = Y(L), n = U(L);
  if (L === n)
    return t;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if ((i || !i && s !== "fixed") && ((G(L) !== "body" || K(n)) && (a = X(L)), Y(L))) {
    const l = O(L, !0);
    o.x = l.x + L.clientLeft, o.y = l.y + L.clientTop;
  }
  return {
    ...t,
    x: t.x - a.scrollLeft + o.x,
    y: t.y - a.scrollTop + o.y
  };
}
function se(e, t) {
  const L = b(e), s = U(e), i = L.visualViewport;
  let n = s.clientWidth, a = s.clientHeight, o = 0, l = 0;
  if (i) {
    n = i.width, a = i.height;
    const M = xt();
    (M || !M && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: n,
    height: a,
    x: o,
    y: l
  };
}
function ie(e) {
  var t;
  const L = U(e), s = X(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, n = J(L.scrollWidth, L.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = J(L.scrollHeight, L.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0);
  let o = -s.scrollLeft + St(e);
  const l = -s.scrollTop;
  return Q(i || L).direction === "rtl" && (o += J(L.clientWidth, i ? i.clientWidth : 0) - n), {
    width: n,
    height: a,
    x: o,
    y: l
  };
}
function Dt(e) {
  const t = H(e);
  return Lt(t) ? e.ownerDocument.body : Y(t) && K(t) ? t : Dt(t);
}
function R(e, t) {
  var L;
  t === void 0 && (t = []);
  const s = Dt(e), i = s === ((L = e.ownerDocument) == null ? void 0 : L.body), n = b(s), a = i ? [n].concat(n.visualViewport || [], K(s) ? s : []) : s, o = t.concat(a);
  return i ? o : o.concat(R(a));
}
function Le(e, t) {
  const L = O(e, !1, t === "fixed"), s = L.top + e.clientTop, i = L.left + e.clientLeft;
  return {
    top: s,
    left: i,
    x: i,
    y: s,
    right: i + e.clientWidth,
    bottom: s + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function jt(e, t, L) {
  return t === "viewport" ? B(se(e, L)) : E(t) ? Le(t, L) : B(ie(U(e)));
}
function ne(e) {
  let t = R(e).filter((i) => E(i)), L = e, s = null;
  for (; E(L) && !Lt(L); ) {
    const i = Q(L);
    i.position === "static" && s && ["absolute", "fixed"].includes(s.position) && !it(L) ? t = t.filter((n) => n !== L) : s = i, L = H(L);
  }
  return t;
}
function oe(e) {
  let {
    element: t,
    boundary: L,
    rootBoundary: s,
    strategy: i
  } = e;
  const a = [...L === "clippingAncestors" ? ne(t) : [].concat(L), s], o = a[0], l = a.reduce((M, j) => {
    const r = jt(t, j, i);
    return M.top = J(r.top, M.top), M.right = Mt(r.right, M.right), M.bottom = Mt(r.bottom, M.bottom), M.left = J(r.left, M.left), M;
  }, jt(t, o, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
const ae = {
  getClippingRect: oe,
  convertOffsetParentRelativeRectToViewportRelativeRect: ee,
  isElement: E,
  getDimensions: ct,
  getOffsetParent: rt,
  getDocumentElement: U,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: L,
      strategy: s
    } = e;
    return {
      reference: qt(t, rt(L), s),
      floating: {
        ...ct(L),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => Q(e).direction === "rtl"
};
function le(e, t, L, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: n = !0,
    elementResize: a = !0,
    animationFrame: o = !1
  } = s, l = i && !o, M = l || n ? [...E(e) ? R(e) : e.contextElement ? R(e.contextElement) : [], ...R(t)] : [];
  M.forEach((c) => {
    l && c.addEventListener("scroll", L, {
      passive: !0
    }), n && c.addEventListener("resize", L);
  });
  let j = null;
  if (a) {
    let c = !0;
    j = new ResizeObserver(() => {
      c || L(), c = !1;
    }), E(e) && !o && j.observe(e), !E(e) && e.contextElement && !o && j.observe(e.contextElement), j.observe(t);
  }
  let r, u = o ? O(e) : null;
  o && w();
  function w() {
    const c = O(e);
    u && (c.x !== u.x || c.y !== u.y || c.width !== u.width || c.height !== u.height) && L(), u = c, r = requestAnimationFrame(w);
  }
  return L(), () => {
    var c;
    M.forEach((y) => {
      l && y.removeEventListener("scroll", L), n && y.removeEventListener("resize", L);
    }), (c = j) == null || c.disconnect(), j = null, o && cancelAnimationFrame(r);
  };
}
const Me = (e, t, L) => Ot(e, t, {
  platform: ae,
  ...L
});
var ue = function() {
  var t = this, L = t.$createElement, s = t._self._c || L;
  return s("div", {
    staticClass: "inline-block"
  }, [s("div", {
    ref: "triggerRef",
    staticClass: "inline-block w-full"
  }, [t._t("trigger", null, {
    isOpen: t.open,
    open: t.onOpen,
    close: t.onClose,
    toggle: t.onToggle
  })], 2), s("transition", {
    attrs: {
      css: !t.disableAnimation,
      "enter-active-class": "transition duration-75 ease-out",
      "enter-class": "transform scale-95 opacity-0",
      "enter-to-class": "transform scale-100 opacity-100",
      "leave-active-class": "transition duration-50 ease-in",
      "leave-class": "transform scale-100 opacity-100",
      "leave-to-class": "transform scale-95 opacity-0"
    }
  }, [t.open ? s("div", {
    ref: "popperRef",
    class: t.popperClass,
    style: t.popperPosition
  }, [t.hideArrow ? t._e() : s("div", {
    ref: "arrowRef",
    class: [t.arrowClass, t.arrowPlacementClass],
    style: t.arrowPosition
  }), t._t("default", null, {
    isOpen: t.open,
    open: t.onOpen,
    close: t.onClose,
    toggle: t.onToggle
  })], 2) : t._e()])], 1);
}, re = [];
const ce = {
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
    open(e) {
      e ? this.$nextTick(() => {
        this.update(), this.$refs.triggerRef && this.$refs.popperRef && (this.cleanup = le(this.$refs.triggerRef, this.$refs.popperRef, this.update));
      }) : this.cleanup && this.cleanup();
    }
  },
  created() {
    this.$root.$on("floating-ui-toggle", (e) => {
      e ? !this.open && this.onOpen() : this.open && this.onClose();
    });
  },
  mounted() {
    document.addEventListener("mousedown", this.handleOutsideMouseDown), document.addEventListener("keyup", this.handleOutsideKeyUp);
  },
  destroyed() {
    document.removeEventListener("mousedown", this.handleOutsideMouseDown), document.removeEventListener("keyup", this.handleOutsideKeyUp);
  },
  methods: {
    openStateDelay(e) {
      return new Promise((t) => (this.openStateTimeout && clearTimeout(this.openStateTimeout), this.openStateTimeout = setTimeout(t, e), this.openStateTimeout));
    },
    willOpenStateDelay(e) {
      return new Promise(async (t, L) => e ? await e(t, L) : t());
    },
    async onOpen(e = 0) {
      if (!this.disabled)
        try {
          if (this.shouldOpen = !0, await this.openStateDelay(e), this.shouldOpen) {
            if (await this.willOpenStateDelay(this.willOpen), this.open || !this.shouldOpen)
              return;
            this.shouldOpen = !1, this.open = !0;
          }
        } catch {
          this.shouldOpen = !1;
        }
    },
    async onClose(e = 0) {
      try {
        if (this.shouldOpen = !1, await this.openStateDelay(e), await this.willOpenStateDelay(this.willClose), !this.open)
          return;
        this.open = !1;
      } catch {
      }
    },
    async onToggle(e = 0, t = 0) {
      this.open ? this.onClose(t) : this.onOpen(e);
    },
    async update() {
      var o;
      if (!this.$refs.triggerRef || !this.$refs.popperRef)
        return;
      const e = {
        middleware: [],
        placement: this.placement,
        strategy: this.strategy
      }, t = this.placement.startsWith("auto");
      this.offset && e.middleware.push(Wt(this.offset)), t ? e.middleware.push(Pt({
        alignment: (o = this.placement.split("-")[1]) != null ? o : ""
      })) : e.placement = this.placement, this.inline && e.middleware.push($t()), t || e.middleware.push(Rt({
        padding: this.overflowPadding
      })), this.shift && e.middleware.push(Ht({
        padding: this.overflowPadding
      })), !this.hideArrow && this.$refs.arrowRef && e.middleware.push(At({
        element: this.$refs.arrowRef,
        padding: this.arrowPadding
      }));
      const L = await Me(this.$refs.triggerRef, this.$refs.popperRef, e), { x: s, y: i, placement: n, middlewareData: a } = L;
      if (this.popperPosition = {
        left: s ? `${s}px` : "",
        top: i ? `${i}px` : ""
      }, !this.hideArrow) {
        const { x: l, y: M } = a.arrow;
        this.currentPlacement = n, this.arrowPosition = {
          left: l ? `${l}px` : "",
          top: M ? `${M}px` : ""
        };
      }
    },
    handleOutsideMouseDown(e) {
      this.$refs.triggerRef && e.target && this.$refs.triggerRef.contains(e.target) || this.$refs.popperRef && e.target && this.$refs.popperRef.contains(e.target) || !this.open || this.onClose();
    },
    handleOutsideKeyUp(e) {
      if (e.key === "Escape") {
        if (!this.open)
          return;
        e.preventDefault(), this.onClose();
      }
    }
  }
}, wt = {};
var je = /* @__PURE__ */ $(
  ce,
  ue,
  re,
  !1,
  we,
  null,
  null,
  null
);
function we(e) {
  for (let t in wt)
    this[t] = wt[t];
}
const ye = /* @__PURE__ */ function() {
  return je.exports;
}();
var Ce = function() {
  var t = this, L = t.$createElement, s = t._self._c || L;
  return s("floating-ui", {
    attrs: {
      "data-id": "sds-tooltip",
      strategy: t.strategy,
      placement: t.placement,
      disabled: t.disabled,
      "will-open": t.willOpen,
      "will-close": t.willClose,
      "popper-class": "absolute text-xs shadow rounded-lg text-center ".concat(t.variantClass, " ").concat(t.sizeClass, " ").concat(t.zIndexClass),
      "arrow-class": "absolute w-2 h-2 rotate-45 ".concat(t.variantArrowClass),
      "placement-top-arrow-class": "-bottom-1",
      "placement-right-arrow-class": "-left-1",
      "placement-bottom-arrow-class": "-top-1",
      "placement-left-arrow-class": "-right-1",
      "disable-animation": "",
      shift: ""
    },
    scopedSlots: t._u([{
      key: "trigger",
      fn: function(n) {
        var a = n.open, o = n.close;
        return [s("div", {
          on: {
            mouseover: function(M) {
              typeof a < "u" && a(t.openDelay);
            },
            mouseleave: function(M) {
              typeof o < "u" && o(t.closeDelay);
            }
          }
        }, [t._t("trigger")], 2)];
      }
    }, {
      key: "default",
      fn: function(n) {
        var a = n.open, o = n.close, l = n.toggle, M = n.isOpen;
        return [s("div", {
          staticClass: "p-2",
          on: {
            mouseover: function(r) {
              typeof a < "u" && a();
            },
            mouseout: function(r) {
              typeof o < "u" && o(t.closeDelay);
            }
          }
        }, [t._t("default", null, {
          close: o,
          open: a,
          toggle: l,
          isOpen: M
        })], 2)];
      }
    }], null, !0)
  });
}, Ne = [];
const de = {
  name: "SdsPopover",
  components: {
    FloatingUi: ye
  },
  props: {
    zIndex: { type: String, required: !1, default: "50" },
    variant: { type: String, default: "dark" },
    openDelay: { type: Number, default: 0 },
    closeDelay: { type: Number, default: 0 },
    size: { type: String, default: "sm" },
    strategy: { type: String, default: "absolute" },
    placement: { type: String, default: "top" },
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
    variantClass() {
      switch (this.variant) {
        case "dark":
          return "bg-dark text-light";
        case "light":
          return "bg-light text-dark";
        default:
          return "bg-dark text-light";
      }
    },
    variantArrowClass() {
      switch (this.variant) {
        case "dark":
          return "bg-dark";
        case "light":
          return "bg-light";
        default:
          return "bg-dark";
      }
    },
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "w-32";
        case "md":
          return "w-48";
        case "lg":
          return "w-56";
        case "xl":
          return "w-72";
        case "auto":
          return "w-auto";
        default:
          return "w-32";
      }
    }
  }
}, yt = {};
var ge = /* @__PURE__ */ $(
  de,
  Ce,
  Ne,
  !1,
  fe,
  null,
  null,
  null
);
function fe(e) {
  for (let t in yt)
    this[t] = yt[t];
}
const pe = /* @__PURE__ */ function() {
  return ge.exports;
}(), xe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4NTEuOSAxNDQuMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODUxLjkgMTQ0LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxMy41LDE4LjcgMjEzLjUsNDUuNSAyMTgsNDUuNSAyMTgsNDcuMyAyMDAuMSw0Ny4zIDIwMC4xLDQ1LjUgMjA0LjYsNDUuNSAyMDQuNiwyMC42IDIwMS4xLDIwLjYgCgkJMjAxLjEsMTguNyAJIi8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzYuOSwxLjRoLTEuNmMtMC4xLDEuNC0wLjgsMi0yLjIsMkMzMC40LDMuNCwyNi4zLDAsMjEuNiwwQzguMSwwLDAsMTMuMywwLDI1YzAsMTEuOCw3LjgsMjMuNCwyMC44LDIzLjQKCQljNy45LDAsMTAuOC0zLjcsMTIuOS0zLjdjMS40LDAsMS42LDEuMiwxLjYsMi43aDEuOFYzMS4yaC0xLjhsLTAuNCwyLjJjLTAuOSw1LjMtNS4xLDEzLjItMTMuNSwxMy4yYy03LjUsMC0xMC40LTYuNS0xMC40LTIyLjQKCQlDMTEsNy40LDE1LDEuOCwyMS42LDEuOGM3LjUsMCwxMi42LDguNCwxMy43LDE1LjFoMS42VjEuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MCwzOS42Yy0wLjEsMy40LTIuMSw2LjMtNS4xLDYuM2MtNC40LDAtNC42LTMuNy00LjYtNi42YzAtMy40LDAuNC01LjcsNC42LTYuMmw1LjEtMC41VjM5LjZ6IE03MS44LDQxLjcKCQljMCwxLjctMS4xLDMuNi0xLjgsMy42Yy0xLjIsMC0xLjQtMS4yLTEuNC0zLjJWMjcuMmMwLTcuNC02LjktOS4yLTEzLjYtOS4yYy02LjUsMC0xMS4yLDMuMi0xMS4yLDYuOGMwLDIuMywxLjMsNC4yLDQuMiw0LjIKCQljMi41LDAsNC0xLjYsNC0zLjljMC0zLjMtMy40LTMuMy0zLjQtMy40YzAtMS41LDMuOC0xLjksNi0xLjljNC45LDAsNS41LDEuOCw1LjUsNS43djUuNGwtNi40LDAuNWMtNS45LDAuNS0xMi4zLDItMTIuMyw4LjgKCQljMCw1LjYsNS4xLDcuOSwxMCw3LjljMi41LDAsNy0xLDguNy00LjFjMS4yLDIuNywzLjYsNC4xLDYuNSw0LjFjNC4yLDAsNi45LTIuNSw2LjktNi4zSDcxLjh6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjY3NC41LDE4LjYgNjc0LjUsNDUuNCA2NzksNDUuNCA2NzksNDcuMiA2NjEuMSw0Ny4yIDY2MS4xLDQ1LjQgNjY1LjYsNDUuNCA2NjUuNiwyMC41IDY2MS4xLDIwLjUgCgkJNjYxLjEsMTguNiAJIi8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg2LDMyLjVsMTAuNy0zMC43aDE0LjhsMCwxLjhoLTQuMnY0Mmg0LjJ2MS44aC0xNy44di0xLjhoNC4zVjRoLTAuMWwtMTUuMSw0My4zSDI4MUwyNjUuNSwzLjJoLTAuMVY0MAoJCWMwLDUuMiwxLjQsNS41LDQuOSw1LjVoMC4ydjEuOGgtMTEuMnYtMS44bDAsMGMzLjcsMCw0LjQtMi4yLDQuNC00Ljl2LTM3aC00LjRWMS43aDE2LjNMMjg2LDMyLjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIxLjgsMjkuOXYtNC40YzAtNC4zLDEuOS01LjcsNC4xLTUuN2MzLjEsMCw0LjEsMi4xLDQuMSw1Ljd2NC40SDMyMS44eiBNMzIxLjgsMzEuNmgxNy45CgkJYy0wLjEtNy02LjUtMTMuNy0xMy40LTEzLjZjLTcuNiwwLTE0LjMsNi42LTE0LjMsMTUuNGMwLDguNCw2LjIsMTQuNywxNC41LDE0LjdjOCwwLDExLjktNC45LDEzLjQtMTEuM2gtMS44CgkJYy0xLjQsNi00LjYsOS41LTkuNiw5LjVjLTYsMC02LjctNC43LTYuNy05LjFWMzEuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OTEuMSwyOS44di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzMuMSwwLDQuMSwyLjEsNC4xLDUuN3Y0LjRINTkxLjF6IE01OTEuMSwzMS41SDYwOQoJCWMtMC4xLTctNi41LTEzLjctMTMuNC0xMy42Yy03LjYsMC0xNC4zLDYuNi0xNC4zLDE1LjRjMCw4LjQsNi4yLDE0LjcsMTQuNSwxNC43YzgsMCwxMS45LTQuOSwxMy40LTExLjNoLTEuOAoJCWMtMS40LDYtNC42LDkuNS05LjYsOS41Yy02LDAtNi43LTQuNy02LjctOS4xVjMxLjV6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMzOS44LDEuOCAzMzkuOCwzLjQgMzQ0LjMsMy40IDM0NC4zLDQ1LjUgMzM5LjgsNDUuNSAzMzkuOCw0Ny4zIDM1Ny43LDQ3LjMgMzU3LjcsNDUuNSAzNTMuMyw0NS41IAoJCTM1My4zLDEuOCAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM1OSwxLjggMzU5LDMuNCAzNjMuNCwzLjQgMzYzLjQsNDUuNSAzNTksNDUuNSAzNTksNDcuMyAzNzYuOSw0Ny4zIDM3Ni45LDQ1LjUgMzcyLjQsNDUuNSAzNzIuNCwxLjggCgkJCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM5Ny40LDM5LjVjMCw0LjktMiw2LjktNS4zLDYuOWMtMy4zLDAtNS4zLTItNS4zLTYuOVYyNi43YzAtNC45LDItNi45LDUuMy02LjljMy4zLDAsNS4zLDIsNS4zLDYuOVYzOS41egoJCSBNNDA3LjUsMzMuMWMwLTguOS02LjktMTUtMTUuNC0xNWMtOC42LDAtMTUuNCw2LjItMTUuNCwxNWMwLDguOSw2LjksMTUsMTUuNCwxNUM0MDAuNyw0OC4xLDQwNy41LDQxLjksNDA3LjUsMzMuMSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1NC4xLDMuM2g0LjV2MjguOGMwLDEwLDYuOSwxNi4xLDE3LjUsMTYuMWMxMS45LDAsMTcuMS02LjMsMTcuMS0xNS44VjcuOGMwLTMuOCwxLTQuNSwzLjQtNC41aDEuM1YxLjUKCQloLTExLjR2MS43aDAuOGMzLjMsMCwzLjgsMSwzLjgsNC44djI1YzAsOC44LTUuNSwxMi44LTExLDEyLjhjLTkuNSwwLTExLjMtNi40LTExLjktMTQuNlYzLjNoNC4yVjEuNWgtMTguM1YzLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTY2LjMsNDcuOWgxLjdsOS42LTIyLjdjMS45LTQuMiwzLTQuOCw0LjUtNC44aDAuNnYtMS44aC0xMC4xdjEuOGgxLjJjMS45LDAsMi43LTAuMSwyLjcsMS42CgkJYzAsMS0wLjMsMi4xLTEuMSwzLjlsLTQuNCwxMC40TDU2NCwyMC40aDMuNnYtMS44aC0xNi4zdjEuOGgzTDU2Ni4zLDQ3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjM4LjYsNDcuOWgxLjVjMC4zLTEsMS0xLjYsMi4zLTEuNmMxLjcsMCwzLjcsMS42LDcuMywxLjZjNi4yLDAsMTAuNC01LjMsMTAuNC0xMC42YzAtNy45LTUuNC04LjUtMTIuNC05LjUKCQljLTMuNi0wLjUtNS43LTEtNS43LTMuOWMwLTMsMi43LTQuMyw2LjItNC4zYzQuOSwwLDYuNywzLjIsOC40LDcuNGgxLjVsMC05LjJoLTEuNWMwLDAuOC0wLjcsMS40LTEuOSwxLjRjLTIuMSwwLTMuOC0xLjQtNi43LTEuNAoJCWMtNi41LDAtOS43LDUuNS05LjcsOS43YzAsOC40LDYuNCw5LjEsMTEuMyw5LjdjNC43LDAuNiw2LjQsMC45LDYuNCwzLjljMCwzLjQtMi45LDUtNi40LDVjLTQuOSwwLTguMy00LjMtOS41LTloLTEuNVY0Ny45eiIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1NDksMTguNiA1NDksNDUuNCA1NTMuNSw0NS40IDU1My41LDQ3LjIgNTM1LjYsNDcuMiA1MzUuNiw0NS40IDU0MC4xLDQ1LjQgNTQwLjEsMjAuNSA1MzUuNiwyMC41IAoJCTUzNS42LDE4LjYgCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU0MC4xLDkuN2MwLDIuNSwyLDQuNSw0LjUsNC41YzIuNSwwLDQuNS0yLDQuNS00LjVjMC0yLjUtMi00LjUtNC41LTQuNUM1NDIsNS4yLDU0MC4xLDcuMiw1NDAuMSw5LjciLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NjUuNiw5LjdjMCwyLjUsMiw0LjUsNC41LDQuNWMyLjUsMCw0LjUtMiw0LjUtNC41YzAtMi41LTItNC41LTQuNS00LjVDNjY3LjYsNS4yLDY2NS42LDcuMiw2NjUuNiw5LjciLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDkuOCwyOS45di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzMuMSwwLDQuMSwyLjEsNC4xLDUuN3Y0LjRIMTQ5Ljh6IE0xNDkuOCwzMS42aDE3LjkKCQljLTAuMS03LTYuNS0xMy43LTEzLjQtMTMuNmMtNy42LDAtMTQuMyw2LjYtMTQuMywxNS40YzAsOC40LDYuMiwxNC43LDE0LjUsMTQuN2M4LDAsMTEuOS00LjksMTMuNC0xMS4zaC0xLjgKCQljLTEuNCw2LTQuNiw5LjUtOS42LDkuNWMtNiwwLTYuNy00LjctNi43LTkuMVYzMS42eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyOCwyOS45di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzIuMywwLDQuMSwxLjMsNC4xLDUuN3Y0LjRIMjI4eiBNMjI4LDMxLjZoMTcuOQoJCWMtMC4xLTctNi41LTEzLjctMTMuNC0xMy42Yy03LjYsMC0xNC4zLDYuNi0xNC4zLDE1LjRjMCw4LjQsNi4yLDE0LjcsMTQuNSwxNC43YzgsMCwxMS45LTQuOSwxMy40LTExLjNoLTEuOAoJCWMtMS40LDYtNC42LDkuNS05LjYsOS41Yy02LDAtNi43LTQuNy02LjctOS4xVjMxLjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTI5LjgsNDUuNVYyOGMwLTctMy0xMC4zLTkuMS0xMC4zYy00LjMsMC04LjcsMi41LTEwLjUsNi4zaDB2LTUuMmgtMTMuNHYxLjdoNC41djI1aC00LjV2MS44SDUxNHYtMS44aC0zLjgKCQlWMjguNGMwLjYtMi40LDMuNi04LDcuMS04YzIuNCwwLDMuNSwwLjgsMy41LDUuMnYxOS45aC0zLjd2MS44aDE3LjF2LTEuOEg1MjkuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjAuOSwxOC44djUuMmgwYzEuOC0zLjgsNi4yLTYuMywxMC41LTYuM2M2LjIsMCw5LjEsMy4zLDkuMSwxMC4zdjE3LjVoNC41djEuOGgtMTcuMXYtMS44aDMuN1YyNS43CgkJYzAtNC4zLTEuMi01LjItMy41LTUuMmMtMy41LDAtNi42LDUuNi03LjEsOHYxNy4xaDMuOHYxLjhoLTE3LjJ2LTEuOGg0LjV2LTI1aC00LjV2LTEuN0g0MjAuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMzUuNSw0NS42VjI4LjFjMC03LTMtMTAuMy05LjEtMTAuM2MtNC4zLDAtOC43LDIuNS0xMC41LDYuM2gwdi01LjJoLTEzLjR2MS43aDQuNXYyNWgtNC41djEuOGgxNy4ydi0xLjgKCQloLTMuOFYyOC41YzAuNi0yLjQsMy42LTgsNy4xLThjMi40LDAsMy41LDAuOCwzLjUsNS4ydjE5LjloLTMuN3YxLjhIMTQwdi0xLjhIMTM1LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA0LjYsOS44YzAsMi41LDIsNC41LDQuNSw0LjVjMi41LDAsNC41LTIsNC41LTQuNWMwLTIuNS0yLTQuNS00LjUtNC41QzIwNi42LDUuNCwyMDQuNiw3LjQsMjA0LjYsOS44Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzE4LDE4LjZ2MS45YzIuOCwwLDQsMC4zLDQsMS41YzAsMS0wLjMsMi4xLTEuMSwzLjlsLTQuNCwxMC40bC03LTE1LjhoMy43di0xLjloLTIyLjNWNC43aC0xLjIKCQljMCw2LjktNC43LDEzLjktMTEuMiwxMy45djEuOWgzLjR2MjAuMWMwLDYuMiw1LjMsNy40LDcuMSw3LjRjNCwwLDYuNi0xLjYsOC42LTVsLTEuNC0wLjhjLTAuOCwxLjItMS44LDIuNy0zLjQsMi43CgkJYy0xLjMsMC0yLTAuOS0yLTMuMVYyMC41aDlsMTEuOCwyNy4zbC00LjEsOS43bDAsMGMwLDAsMCwwLDAsMGwwLDBjLTAuMSwwLjItMC4zLDAuMy0wLjUsMC4zYy0wLjIsMC0wLjQtMC4yLTAuNS0wLjRjMCwwLDAsMCwwLDAKCQljLTAuNS0xLjktMi4yLTMuMi00LjMtMy4yYy0yLjUsMC00LjUsMi00LjUsNC41YzAsMS43LDEsMy4yLDIuNCw0YzAsMCwwLDAsMCwwYzAsMCwwLjEsMCwwLjEsMC4xYzAuMSwwLDAuMiwwLjEsMC4zLDAuMQoJCWMwLjUsMC4yLDEsMC4zLDEuNiwwLjNjMy44LDAuMyw1LjctMi41LDctNS4zYzAuMy0wLjYsMC42LTEuMywwLjgtMS45YzAuNi0xLjQsMS42LTMuNywyLjctNi41bDAsMGwxLjEtMi42bDAsMGw5LjEtMjEuNgoJCWMxLjktNC4yLDIuNy00LjgsNS00LjhoMHYtMS45SDcxOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NS45LDE3LjdjLTQuMSwwLTcuMywyLjktOC42LDYuMWgtMC4xdi00LjlINzR2MS44aDQuNXYyNC45SDc0djEuOGgxOS40di0xLjhoLTZ2LTE0YzAtNC4yLDEuMS04LjQsMy44LTEwLjgKCQljMC4yLTAuMSwwLjQtMC4xLDAuNi0wLjFjMC4yLDAuMSwwLjMsMC4zLDAuMywwLjZsMCwwYy0wLjIsMC41LTAuMywxLjEtMC4zLDEuOGMtMC4xLDIuNCwxLjksNC4yLDQuNCw0LjJjMy4xLDAsNC45LTIuMyw0LjktNC43CgkJQzEwMS4xLDE5LjYsOTksMTcuNyw5NS45LDE3Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkzLjUsMTkuOGMwLjEsMCwwLjMtMC4xLDAuNCwwYzAuMSwwLjEsMC4xLDAuMiwwLDAuNGwwLDBjLTAuNCwwLjctMC41LDEuNS0wLjIsMi40YzAuMywwLjksMS4xLDEuNiwyLDEuOAoJCWMxLjksMC40LDMuNS0wLjksMy41LTIuN2MwLTEuMS0wLjctMi0xLjUtMi41Yy0wLjgtMC41LTEuOC0wLjgtMi45LTAuOGMtMS43LDAtMy41LDAuOS00LjgsMmMwLDAsMCwwLDAsMAoJCWMtMC4zLTAuMi0wLjYtMC40LTAuOS0wLjZjLTEuOC0xLTQuMS0xLjctNy4yLTEuN2MtNS40LDAtMTEuMywzLjYtMTEuMyw5LjVjMCwzLjYsMS45LDYuNCw1LjQsNy45djAuMWMtMi41LDAuMy02LjUsMi4xLTYuNSw3LjUKCQljMCwzLjIsMS41LDUuNyw0LjIsNi41djAuMWMtMi42LDAuNy01LjYsMy4zLTUuNiw2LjRjMCw0LjgsNS42LDguNSwxMi44LDguNWM5LDAsMTQuOS02LjEsMTQuOS0xNGMwLTYuMy0zLjEtOS4xLTkuNS05aC0xMC44CgkJYy0xLjYsMC0yLjctMC4xLTIuNy0xLjhjMC0xLjYsMi41LTMuNCw0LjktMy40YzAuNCwwLDEuMSwwLjMsMS4zLDAuNGMwLjgsMC4zLDEuNiwwLjQsMi43LDAuNGM1LjYsMCwxMS41LTMuMiwxMS41LTkuMwoJCWMwLTEuOS0wLjgtNC41LTIuNC02LjFjLTAuMS0wLjEtMC4xLTAuMiwwLTAuM2MwLjYtMC41LDEuMy0wLjksMS43LTEuMUMxOTMsMjAsMTkzLjIsMTkuOSwxOTMuNSwxOS44TDE5My41LDE5Ljh6IE0xODQuOSw0OS42CgkJYzYuNSwwLDguMiwwLjMsOC4yLDQuMmMwLDQuNy01LjgsOS4xLTEyLjMsOS4xYy01LjgsMC04LjYtMy42LTguOC02LjdjMC0yLjksMS40LTQuNywzLjItNi42SDE4NC45eiBNMTg2LDI3LjUKCQljMCw3LjUtMS43LDcuOC00LjEsNy44Yy0yLjYsMC00LTAuNS00LThjMC01LjMsMC42LTcuNSw0LTcuNUMxODQuOSwxOS44LDE4NS45LDIwLDE4NiwyNy41TDE4NiwyNy41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYzMS43LDE3LjVjLTQuMSwwLTcuMywyLjktOC42LDYuMUg2MjN2LTQuOWgtMTMuM3YxLjhoNC41djI0LjloLTQuNXYxLjhoMTkuNHYtMS44aC02di0xNAoJCWMwLTQuMiwxLjEtOC40LDMuOC0xMC44YzAuMi0wLjEsMC40LTAuMSwwLjYtMC4xYzAuMiwwLjEsMC4zLDAuMywwLjMsMC42bDAsMGMtMC4yLDAuNS0wLjMsMS4xLTAuMywxLjhjLTAuMSwyLjQsMS45LDQuMiw0LjQsNC4yCgkJYzMuMSwwLDQuOS0yLjMsNC45LTQuN0M2MzYuOCwxOS4zLDYzNC43LDE3LjUsNjMxLjcsMTcuNXoiLz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC4yLDExNi42YzAsMy45LTEuNCw2LjktNC4zLDkuMmMtMi44LDIuMy02LjYsMy40LTExLjMsMy40Yy01LjcsMC0xMC0wLjYtMTMtMS45di0zLjIKCQljMy4zLDEuNCw3LjYsMi4xLDEyLjgsMi4xYzMuOCwwLDYuOC0wLjksOS4xLTIuNmMyLjItMS43LDMuMy00LDMuMy02LjljMC0xLjgtMC40LTMuMi0xLjEtNC40Yy0wLjctMS4yLTEuOS0yLjItMy42LTMuMgoJCWMtMS43LTEtNC4xLTItNy40LTMuMWMtNC43LTEuNi04LTMuNC05LjgtNS4zYy0xLjgtMS45LTIuNy00LjQtMi43LTcuNmMwLTMuNSwxLjQtNi4zLDQuMS04LjVjMi43LTIuMiw2LjItMy4zLDEwLjUtMy4zCgkJYzQuNCwwLDguNSwwLjgsMTIuMywyLjVsLTEuMiwyLjhjLTMuOS0xLjYtNy41LTIuNC0xMS0yLjRjLTMuNCwwLTYuMiwwLjgtOC4yLDIuNHMtMywzLjctMyw2LjVjMCwxLjcsMC4zLDMuMSwwLjksNC4yCgkJYzAuNiwxLjEsMS42LDIuMSwzLjEsM2MxLjQsMC45LDMuOSwxLjksNy4zLDMuMmMzLjYsMS4yLDYuMywyLjUsOC4yLDMuNmMxLjgsMS4yLDMuMSwyLjUsNCw0QzI5LjgsMTEyLjcsMzAuMiwxMTQuNSwzMC4yLDExNi42eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2LjgsMTExLjJjMCw1LjYtMS40LDEwLTQuMSwxMy4yYy0yLjcsMy4yLTYuNSw0LjctMTEuMyw0LjdjLTMsMC01LjctMC43LTgtMi4yYy0yLjMtMS41LTQuMS0zLjYtNS4zLTYuMwoJCWMtMS4yLTIuNy0xLjgtNS45LTEuOC05LjVjMC01LjYsMS40LTEwLDQuMS0xMy4yYzIuNy0zLjEsNi41LTQuNywxMS4yLTQuN2M0LjcsMCw4LjUsMS42LDExLjIsNC44CgkJQzY1LjUsMTAxLjMsNjYuOCwxMDUuNyw2Ni44LDExMS4yeiBNMzkuNiwxMTEuMmMwLDQuNywxLDguNCwzLjEsMTEuMWMyLjEsMi43LDUsNCw4LjgsNHM2LjgtMS4zLDguOC00YzIuMS0yLjcsMy4xLTYuNCwzLjEtMTEuMQoJCWMwLTQuOC0xLjEtOC41LTMuMi0xMS4xYy0yLjEtMi42LTUuMS0zLjktOC45LTMuOXMtNi43LDEuMy04LjgsMy45QzQwLjYsMTAyLjgsMzkuNiwxMDYuNSwzOS42LDExMS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4LjUsOTYuOGgtOC4xdjMxLjhoLTMuMVY5Ni44aC02LjR2LTEuOGw2LjQtMS4ydi0yLjdjMC00LjIsMC44LTcuMywyLjMtOS4zYzEuNi0yLDQuMS0zLDcuNi0zCgkJYzEuOSwwLDMuOCwwLjMsNS43LDAuOWwtMC43LDIuN2MtMS43LTAuNS0zLjQtMC44LTUtMC44Yy0yLjUsMC00LjIsMC43LTUuMiwyLjJzLTEuNSwzLjgtMS41LDcuMVY5NGg4LjFWOTYuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDYuMywxMjYuNGMyLDAsMy43LTAuMiw1LjItMC41djIuNWMtMS41LDAuNS0zLjMsMC44LTUuMywwLjhjLTMsMC01LjMtMC44LTYuNy0yLjQKCQljLTEuNC0xLjYtMi4yLTQuMi0yLjItNy43Vjk2LjhoLTUuMXYtMS44bDUuMS0xLjRsMS42LTcuOGgxLjZWOTRoMTAuMXYyLjdoLTEwLjF2MjEuOGMwLDIuNiwwLjUsNC42LDEuNCw1LjkKCQlDMTAyLjgsMTI1LjgsMTA0LjMsMTI2LjQsMTA2LjMsMTI2LjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ3LjUsMTI4LjVsLTcuNi0yMy4xYy0wLjUtMS42LTEuMS0zLjktMS45LTYuOWgtMC4ybC0wLjcsMi4zbC0xLjQsNC42bC03LjcsMjNIMTI1TDExNS4xLDk0aDMuNGw1LjUsMjAKCQljMS4zLDUsMi4xLDguNiwyLjUsMTAuOWgwLjJjMS4yLTUsMi4yLTguMiwyLjctOS45bDcuMS0yMWgyLjlsNi44LDIxYzEuNSw1LDIuNSw4LjMsMi44LDkuOWgwLjJjMC4yLTEuNCwxLTUuMSwyLjUtMTFMMTU3LDk0aDMuMgoJCWwtOS40LDM0LjVIMTQ3LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg3LDEyOC41bC0wLjgtNS41SDE4NmMtMS43LDIuMi0zLjUsMy44LTUuMyw0LjdjLTEuOCwwLjktNCwxLjQtNi41LDEuNGMtMy40LDAtNi0wLjktNy45LTIuNgoJCWMtMS45LTEuNy0yLjgtNC4xLTIuOC03LjJjMC0zLjQsMS40LTYsNC4yLTcuOGMyLjgtMS45LDYuOS0yLjgsMTIuMi0zbDYuNi0wLjJ2LTIuM2MwLTMuMy0wLjctNS44LTItNy40Yy0xLjMtMS43LTMuNS0yLjUtNi40LTIuNQoJCWMtMy4yLDAtNi41LDAuOS05LjksMi43bC0xLjItMi43YzMuOC0xLjgsNy41LTIuNywxMS4yLTIuN2MzLjgsMCw2LjYsMSw4LjUsM2MxLjksMiwyLjgsNSwyLjgsOS4ydjIyLjlIMTg3eiBNMTc0LjMsMTI2LjMKCQljMy43LDAsNi42LTEuMSw4LjctMy4yYzIuMS0yLjEsMy4yLTUsMy4yLTguOFYxMTFsLTYsMC4zYy00LjgsMC4yLTguMywxLTEwLjQsMi4zYy0yLjEsMS4zLTMuMSwzLjMtMy4xLDZjMCwyLjIsMC43LDMuOCwyLDUKCQlDMTcwLDEyNS43LDE3MS45LDEyNi4zLDE3NC4zLDEyNi4zeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIxNS4xLDkzLjRjMS41LDAsMywwLjEsNC43LDAuNGwtMC42LDNjLTEuNC0wLjQtMi45LTAuNS00LjUtMC41Yy0yLjksMC01LjQsMS4yLTcuMiwzLjcKCQljLTEuOSwyLjUtMi44LDUuNi0yLjgsOS41djE5aC0zLjFWOTRoMi43bDAuMyw2LjJoMC4yYzEuNC0yLjUsMi45LTQuMyw0LjUtNS4zQzIxMC44LDkzLjksMjEyLjgsOTMuNCwyMTUuMSw5My40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNi42LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41SDIyNGMwLDQuNywxLjEsOC40LDMuMywxMC45YzIuMiwyLjUsNS4zLDMuNyw5LjMsMy43YzIsMCwzLjctMC4xLDUuMi0wLjQKCQljMS41LTAuMywzLjQtMC45LDUuNy0xLjh2Mi45Yy0xLjksMC44LTMuNywxLjQtNS40LDEuN1MyMzguNiwxMjkuMiwyMzYuNiwxMjkuMnogTTIzNS43LDk2LjJjLTMuMywwLTYsMS4xLTgsMy4zCgkJYy0yLDIuMi0zLjIsNS4zLTMuNSw5LjVoMjEuM2MwLTQtMC45LTcuMS0yLjYtOS40QzI0MS4yLDk3LjMsMjM4LjgsOTYuMiwyMzUuNyw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMC4xLDEyOC41aC0yNS40VjgyLjFoMjUuNHYzSDI3OHYxNy42aDIwLjl2M0gyNzh2MTkuOWgyMi4xVjEyOC41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzMS42LDEyOC41di0yMi40YzAtMy41LTAuNy02LTIuMi03LjZjLTEuNS0xLjYtMy43LTIuNC02LjgtMi40Yy00LjEsMC03LjEsMS05LjEsMy4xCgkJYy0xLjksMi4xLTIuOSw1LjUtMi45LDEwLjF2MTloLTMuMVY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkgzMzEuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzIuMyw5NHYyLjJsLTcuMSwwLjRjMS45LDIuNCwyLjksNSwyLjksNy44YzAsMy4zLTEuMSw2LTMuMyw4LjFjLTIuMiwyLjEtNS4yLDMuMS04LjksMy4xCgkJYy0xLjYsMC0yLjctMC4xLTMuMy0wLjJjLTEuMiwwLjctMi4yLDEuNC0yLjksMi4zYy0wLjcsMC45LTEsMS44LTEsMi44YzAsMS4xLDAuNCwxLjksMS4zLDIuNHMyLjIsMC44LDQuMiwwLjhoNgoJCWMzLjcsMCw2LjYsMC44LDguNiwyLjNjMiwxLjUsMywzLjcsMyw2LjdjMCwzLjYtMS41LDYuNC00LjQsOC40Yy0zLDItNy4yLDMtMTIuNiwzYy00LjMsMC03LjctMC44LTEwLjEtMi41Yy0yLjQtMS43LTMuNi00LTMuNi03CgkJYzAtMi40LDAuNy00LjMsMi4yLTUuOWMxLjUtMS42LDMuNS0yLjYsNi0zLjJjLTEtMC40LTEuOS0xLjEtMi41LTEuOWMtMC42LTAuOC0wLjktMS44LTAuOS0yLjhjMC0yLjMsMS41LTQuMyw0LjQtNi4xCgkJYy0yLTAuOC0zLjYtMi4xLTQuNy0zLjljLTEuMS0xLjgtMS43LTMuOC0xLjctNi4xYzAtMy40LDEuMS02LjIsMy4zLTguM2MyLjItMi4xLDUuMS0zLjEsOC45LTMuMWMyLjMsMCw0LDAuMiw1LjMsMC43SDM3Mi4zegoJCSBNMzQ0LjQsMTM0LjRjMCw0LjcsMy41LDcuMSwxMC42LDcuMWM5LjEsMCwxMy42LTIuOSwxMy42LTguN2MwLTIuMS0wLjctMy42LTIuMS00LjVjLTEuNC0wLjktMy43LTEuNC02LjktMS40aC01LjYKCQlDMzQ3LjUsMTI2LjksMzQ0LjQsMTI5LjQsMzQ0LjQsMTM0LjR6IE0zNDcsMTA0LjhjMCwyLjcsMC44LDQuNywyLjQsNi4yYzEuNiwxLjUsMy44LDIuMiw2LjUsMi4yYzIuOSwwLDUuMS0wLjcsNi42LTIuMgoJCXMyLjMtMy42LDIuMy02LjNjMC0yLjktMC44LTUuMS0yLjQtNi42cy0zLjgtMi4yLTYuNi0yLjJjLTIuOCwwLTQuOSwwLjgtNi41LDIuNEMzNDcuOCw5OS44LDM0NywxMDIsMzQ3LDEwNC44eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM4MC4yLDg0LjVjMC0yLDAuNy0zLDItM2MwLjcsMCwxLjIsMC4zLDEuNSwwLjhjMC40LDAuNSwwLjYsMS4zLDAuNiwyLjNjMCwxLTAuMiwxLjctMC42LDIuMwoJCWMtMC40LDAuNi0wLjksMC44LTEuNSwwLjhDMzgwLjksODcuNSwzODAuMiw4Ni41LDM4MC4yLDg0LjV6IE0zODMuOCwxMjguNWgtMy4xVjk0aDMuMVYxMjguNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjAuMiwxMjguNXYtMjIuNGMwLTMuNS0wLjctNi0yLjItNy42Yy0xLjUtMS42LTMuNy0yLjQtNi44LTIuNGMtNC4xLDAtNy4xLDEtOS4xLDMuMQoJCWMtMS45LDIuMS0yLjksNS41LTIuOSwxMC4xdjE5aC0zLjFWOTRoMi43bDAuNiw0LjdoMC4yYzIuMi0zLjYsNi4yLTUuNCwxMi01LjRjNy44LDAsMTEuNyw0LjIsMTEuNywxMi42djIyLjZINDIwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDQ2LjksMTI5LjJjLTUsMC04LjktMS41LTExLjctNC42Yy0yLjgtMy4xLTQuMi03LjQtNC4yLTEzYzAtNS41LDEuNC05LjksNC4xLTEzLjJjMi43LTMuMyw2LjQtNSwxMC45LTUKCQljNC4xLDAsNy4zLDEuNCw5LjYsNC4zYzIuMywyLjgsMy41LDYuNywzLjUsMTEuNnYyLjVoLTI0LjljMCw0LjcsMS4xLDguNCwzLjMsMTAuOWMyLjIsMi41LDUuMywzLjcsOS4zLDMuN2MyLDAsMy43LTAuMSw1LjItMC40CgkJYzEuNS0wLjMsMy40LTAuOSw1LjctMS44djIuOWMtMS45LDAuOC0zLjcsMS40LTUuNCwxLjdTNDQ4LjksMTI5LjIsNDQ2LjksMTI5LjJ6IE00NDYsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDNDUxLjUsOTcuMyw0NDkuMSw5Ni4yLDQ0Niw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4MS40LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41aC0yNC45YzAsNC43LDEuMSw4LjQsMy4zLDEwLjljMi4yLDIuNSw1LjMsMy43LDkuMywzLjdjMiwwLDMuNy0wLjEsNS4yLTAuNAoJCWMxLjUtMC4zLDMuNC0wLjksNS43LTEuOHYyLjljLTEuOSwwLjgtMy43LDEuNC01LjQsMS43UzQ4My40LDEyOS4yLDQ4MS40LDEyOS4yeiBNNDgwLjUsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDNDg2LDk3LjMsNDgzLjYsOTYuMiw0ODAuNSw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUxNSw5My40YzEuNSwwLDMsMC4xLDQuNywwLjRsLTAuNiwzYy0xLjQtMC40LTIuOS0wLjUtNC41LTAuNWMtMi45LDAtNS40LDEuMi03LjIsMy43CgkJYy0xLjksMi41LTIuOCw1LjYtMi44LDkuNXYxOWgtMy4xVjk0aDIuN2wwLjMsNi4yaDAuMmMxLjQtMi41LDIuOS00LjMsNC41LTUuM0M1MTAuOCw5My45LDUxMi43LDkzLjQsNTE1LDkzLjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTI0LjEsODQuNWMwLTIsMC43LTMsMi0zYzAuNywwLDEuMiwwLjMsMS41LDAuOGMwLjQsMC41LDAuNiwxLjMsMC42LDIuM2MwLDEtMC4yLDEuNy0wLjYsMi4zCgkJYy0wLjQsMC42LTAuOSwwLjgtMS41LDAuOEM1MjQuNyw4Ny41LDUyNC4xLDg2LjUsNTI0LjEsODQuNXogTTUyNy43LDEyOC41aC0zLjFWOTRoMy4xVjEyOC41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2NCwxMjguNXYtMjIuNGMwLTMuNS0wLjctNi0yLjItNy42Yy0xLjUtMS42LTMuNy0yLjQtNi44LTIuNGMtNC4xLDAtNy4xLDEtOS4xLDMuMQoJCWMtMS45LDIuMS0yLjksNS41LTIuOSwxMC4xdjE5SDU0MFY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkg1NjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjA1LjYsOTR2Mi4ybC03LjEsMC40YzEuOSwyLjQsMi45LDUsMi45LDcuOGMwLDMuMy0xLjEsNi0zLjMsOC4xYy0yLjIsMi4xLTUuMiwzLjEtOC45LDMuMQoJCWMtMS42LDAtMi43LTAuMS0zLjMtMC4yYy0xLjIsMC43LTIuMiwxLjQtMi45LDIuM2MtMC43LDAuOS0xLDEuOC0xLDIuOGMwLDEuMSwwLjQsMS45LDEuMywyLjRzMi4yLDAuOCw0LjIsMC44aDYKCQljMy43LDAsNi42LDAuOCw4LjYsMi4zYzIsMS41LDMsMy43LDMsNi43YzAsMy42LTEuNSw2LjQtNC40LDguNGMtMywyLTcuMiwzLTEyLjYsM2MtNC4zLDAtNy43LTAuOC0xMC4xLTIuNWMtMi40LTEuNy0zLjYtNC0zLjYtNwoJCWMwLTIuNCwwLjctNC4zLDIuMi01LjljMS41LTEuNiwzLjUtMi42LDYtMy4yYy0xLTAuNC0xLjktMS4xLTIuNS0xLjljLTAuNi0wLjgtMC45LTEuOC0wLjktMi44YzAtMi4zLDEuNS00LjMsNC40LTYuMQoJCWMtMi0wLjgtMy42LTIuMS00LjctMy45Yy0xLjEtMS44LTEuNy0zLjgtMS43LTYuMWMwLTMuNCwxLjEtNi4yLDMuMy04LjNjMi4yLTIuMSw1LjEtMy4xLDguOS0zLjFjMi4zLDAsNCwwLjIsNS4zLDAuN0g2MDUuNnoKCQkgTTU3Ny43LDEzNC40YzAsNC43LDMuNSw3LjEsMTAuNiw3LjFjOS4xLDAsMTMuNi0yLjksMTMuNi04LjdjMC0yLjEtMC43LTMuNi0yLjEtNC41Yy0xLjQtMC45LTMuNy0xLjQtNi45LTEuNGgtNS43CgkJQzU4MC45LDEyNi45LDU3Ny43LDEyOS40LDU3Ny43LDEzNC40eiBNNTgwLjMsMTA0LjhjMCwyLjcsMC44LDQuNywyLjQsNi4yYzEuNiwxLjUsMy44LDIuMiw2LjUsMi4yYzIuOSwwLDUuMS0wLjcsNi42LTIuMgoJCXMyLjMtMy42LDIuMy02LjNjMC0yLjktMC44LTUuMS0yLjQtNi42cy0zLjgtMi4yLTYuNi0yLjJjLTIuOCwwLTQuOSwwLjgtNi41LDIuNEM1ODEuMSw5OS44LDU4MC4zLDEwMiw1ODAuMywxMDQuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MjYuNSwxMjguNVY4Mi4xaDMuMnY0Ni40SDYyNi41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2NS45LDEyOC41di0yMi40YzAtMy41LTAuNy02LTIuMi03LjZjLTEuNS0xLjYtMy43LTIuNC02LjgtMi40Yy00LjEsMC03LjEsMS05LjEsMy4xCgkJYy0xLjksMi4xLTIuOSw1LjUtMi45LDEwLjF2MTloLTMuMVY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkg2NjUuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MDAuOSwxMTkuNmMwLDMuMS0xLjIsNS41LTMuNSw3LjFjLTIuMywxLjctNS43LDIuNS0xMCwyLjVjLTQuNiwwLTguMy0wLjctMTEtMi4xdi0zLjQKCQljMy41LDEuNyw3LjEsMi42LDExLDIuNmMzLjQsMCw2LTAuNiw3LjgtMS43YzEuOC0xLjEsMi43LTIuNiwyLjctNC41YzAtMS43LTAuNy0zLjItMi4xLTQuNGMtMS40LTEuMi0zLjctMi4zLTYuOS0zLjUKCQljLTMuNC0xLjItNS45LTIuMy03LjMtMy4yYy0xLjQtMC45LTIuNC0xLjktMy4yLTNjLTAuNy0xLjEtMS4xLTIuNS0xLjEtNC4xYzAtMi42LDEuMS00LjYsMy4zLTYuMWMyLjItMS41LDUuMi0yLjMsOS4xLTIuMwoJCWMzLjcsMCw3LjMsMC43LDEwLjYsMi4xbC0xLjIsMi45Yy0zLjQtMS40LTYuNS0yLjEtOS40LTIuMWMtMi44LDAtNSwwLjUtNi43LDEuNGMtMS43LDAuOS0yLjUsMi4yLTIuNSwzLjljMCwxLjgsMC42LDMuMiwxLjksNC4zCgkJYzEuMywxLjEsMy44LDIuMyw3LjUsMy42YzMuMSwxLjEsNS40LDIuMSw2LjgsM2MxLjQsMC45LDIuNSwxLjksMy4yLDMuMVM3MDAuOSwxMTgsNzAwLjksMTE5LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzE5LjMsMTI2LjRjMiwwLDMuNy0wLjIsNS4yLTAuNXYyLjVjLTEuNSwwLjUtMy4zLDAuOC01LjMsMC44Yy0zLDAtNS4zLTAuOC02LjctMi40CgkJYy0xLjQtMS42LTIuMi00LjItMi4yLTcuN1Y5Ni44aC01LjF2LTEuOGw1LjEtMS40bDEuNi03LjhoMS42Vjk0aDEwLjF2Mi43aC0xMC4xdjIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzcxNS44LDEyNS44LDcxNy4zLDEyNi40LDcxOS4zLDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTczMC40LDg0LjVjMC0yLDAuNy0zLDItM2MwLjcsMCwxLjIsMC4zLDEuNSwwLjhjMC40LDAuNSwwLjYsMS4zLDAuNiwyLjNjMCwxLTAuMiwxLjctMC42LDIuMwoJCWMtMC40LDAuNi0wLjksMC44LTEuNSwwLjhDNzMxLDg3LjUsNzMwLjQsODYuNSw3MzAuNCw4NC41eiBNNzMzLjksMTI4LjVoLTMuMVY5NGgzLjFWMTI4LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzU2LjIsMTI2LjRjMiwwLDMuNy0wLjIsNS4yLTAuNXYyLjVjLTEuNSwwLjUtMy4zLDAuOC01LjMsMC44Yy0zLDAtNS4zLTAuOC02LjctMi40CgkJYy0xLjQtMS42LTIuMi00LjItMi4yLTcuN1Y5Ni44aC01LjF2LTEuOGw1LjEtMS40bDEuNi03LjhoMS42Vjk0aDEwLjF2Mi43aC0xMC4xdjIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzc1Mi44LDEyNS44LDc1NC4yLDEyNi40LDc1Ni4yLDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc2OS41LDk0djIyLjNjMCwzLjUsMC43LDYsMi4yLDcuNmMxLjUsMS42LDMuNywyLjQsNi44LDIuNGM0LjEsMCw3LjEtMSw5LjEtMy4xYzEuOS0yLjEsMi45LTUuNCwyLjktMTAuMVY5NAoJCWgzLjF2MzQuNWgtMi43bC0wLjYtNC44aC0wLjJjLTIuMiwzLjYtNi4yLDUuNC0xMiw1LjRjLTcuOCwwLTExLjgtNC4yLTExLjgtMTIuNlY5NEg3NjkuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MTQuOCwxMjYuNGMyLDAsMy43LTAuMiw1LjItMC41djIuNWMtMS41LDAuNS0zLjMsMC44LTUuMywwLjhjLTMsMC01LjMtMC44LTYuNy0yLjQKCQljLTEuNC0xLjYtMi4yLTQuMi0yLjItNy43Vjk2LjhoLTUuMXYtMS44bDUuMS0xLjRsMS42LTcuOGgxLjZWOTRoMTAuMXYyLjdIODA5djIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzgxMS4zLDEyNS44LDgxMi44LDEyNi40LDgxNC44LDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTgzOS43LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41aC0yNC45YzAsNC43LDEuMSw4LjQsMy4zLDEwLjljMi4yLDIuNSw1LjMsMy43LDkuMywzLjdjMiwwLDMuNy0wLjEsNS4yLTAuNAoJCWMxLjUtMC4zLDMuNC0wLjksNS43LTEuOHYyLjljLTEuOSwwLjgtMy43LDEuNC01LjQsMS43Uzg0MS43LDEyOS4yLDgzOS43LDEyOS4yeiBNODM4LjgsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDODQ0LjIsOTcuMyw4NDEuOCw5Ni4yLDgzOC44LDk2LjJ6Ii8+CjwvZz4KPC9zdmc+Cg==";
var Se = function() {
  var t = this, L = t.$createElement, s = t._self._c || L;
  return s("div", {
    staticClass: "flex flex-col h-screen dark:text-gray-50",
    attrs: {
      "data-id": "sds-layout-app"
    }
  }, [s("div", {
    staticClass: "bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 flex flex-shrink-0"
  }, [s("div", {
    staticClass: "my-auto"
  }, [t.appSuite ? s("div", {
    staticClass: "hidden md:block"
  }, [t.appSuiteUrl ? s("a", {
    staticClass: "text-xl flex hover:underline",
    attrs: {
      href: t.appSuiteUrl
    },
    on: {
      click: function(n) {
        return t.navigate(null, {
          title: t.appSuite,
          href: t.appSuiteUrl
        }, n);
      }
    }
  }, [s("span", {
    staticClass: "text-red-400 font-bold"
  }, [t._v(t._s(t.appSuitePrefix))]), s("span", [t._v(t._s(t.appSuite))])]) : s("p", {
    staticClass: "text-xl flex"
  }, [s("span", {
    staticClass: "text-red-400 font-bold"
  }, [t._v(t._s(t.appSuitePrefix))]), s("span", [t._v(t._s(t.appSuite))])])]) : t._e(), t.appSuite || t.appName ? s("button", {
    ref: "mobileMenuOpenBtn",
    staticClass: "flex md:hidden gap-1 focus:outline-none",
    on: {
      click: function(n) {
        t.showMobileMenu = !t.showMobileMenu;
      }
    }
  }, [s("svg", {
    staticClass: "text-white h-6 w-6 inline-block",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 48 48"
    }
  }, [s("g", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [s("path", {
    attrs: {
      d: "M7.95 11.95h32"
    }
  }), s("path", {
    attrs: {
      d: "M7.95 23.95h32"
    }
  }), s("path", {
    attrs: {
      d: "M7.95 35.95h32"
    }
  })])]), s("span", {
    staticClass: "text-xl leading-6 flex"
  }, [t.appSuitePrefix ? s("span", {
    staticClass: "text-red-400 font-bold"
  }, [t._v(t._s(t.appSuitePrefix))]) : t._e(), t.appSuite ? s("span", [t._v(t._s(t.appSuite))]) : t._e(), t.appName && !t.hideAppNameInMobileHeader ? s("span", {
    staticClass: "text-sm text-left font-bold text-gray-200 overflow-ellipsis text-ellipsis overflow-hidden whitespace-nowrap w-40 mt-auto mr-auto",
    class: [t.appSuite ? "ml-1" : ""]
  }, [t._v(t._s(t.appName))]) : t._e()])]) : t._e()]), s("div", {
    staticClass: "ml-auto my-auto flex gap-2 flex-shrink-0"
  }, [t._t("suite-header", null, {
    collapsed: t.collapsed
  })], 2)]), s("div", {
    staticClass: "flex flex-grow flex-shrink-0"
  }, [s("transition", {
    attrs: {
      "enter-active-class": "transition-opacity ease-linear duration-150",
      "enter-class": "opacity-0",
      "enter-to-class": "opacity-100",
      "leave-active-class": "transition-opacity ease-linear duration-150",
      "leave-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }
  }, [t.showMobileMenu ? s("button", {
    staticClass: "bg-black bg-opacity-40 fixed inset h-screen w-screen z-50 md:hidden",
    on: {
      click: function(n) {
        t.showMobileMenu = !t.showMobileMenu;
      }
    }
  }, [s("span", {
    staticClass: "sr-only"
  }, [t._v("Toggle mobile menu")])]) : t._e()]), s("transition", {
    attrs: {
      "enter-active-class": "transition-transform ease-linear duration-150",
      "enter-class": "-translate-x-full",
      "enter-to-class": "translate-x-0",
      "leave-active-class": "transition-transform ease-linear duration-150",
      "leave-class": "translate-x-0",
      "leave-to-class": "-translate-x-full"
    }
  }, [t.showMobileMenu ? s("aside", {
    ref: "mobileSidebarContainer",
    staticClass: "md:hidden fixed w-2/3 z-50 bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0",
    on: {
      keydown: t.checkKeyEvent
    }
  }, [s("button", {
    ref: "mobileMenuCloseBtn",
    staticClass: "sr-only",
    on: {
      click: function(n) {
        t.showMobileMenu = !t.showMobileMenu;
      }
    }
  }, [s("span", {
    staticClass: "sr-only"
  }, [t._v("Toggle mobile menu")])]), s("div", {
    staticClass: "h-screen flex flex-col sticky top-0"
  }, [s("div", {
    staticClass: "overflow-y-auto flex-grow overscroll-contain"
  }, [t.appName ? s("div", {
    staticClass: "sticky top-0 bg-gray-900 dark:bg-gray-800 z-10 flex gap-2 p-4"
  }, [t._t("app-icon", function() {
    return [t.hideAppIcon ? t._e() : s("span", {
      staticClass: "block w-8 h-8 my-auto flex-shrink-0"
    }, [t.appUrl ? [s("a", {
      attrs: {
        href: t.appUrl
      },
      on: {
        click: function(n) {
          return t.navigate(null, {
            title: t.appName,
            href: t.appUrl
          }, n);
        }
      }
    }, [t.appIconUrl ? s("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : s("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [s("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])])] : [t.appIconUrl ? s("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : s("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [s("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])]], 2)];
  }, {
    classList: "block w-8 h-8 my-auto flex-shrink-0"
  }), t.appUrl ? s("a", {
    staticClass: "text-lg font-bold my-auto hover:underline",
    attrs: {
      href: t.appUrl
    },
    on: {
      click: function(n) {
        return t.navigate(null, {
          title: t.appName,
          href: t.appUrl
        }, n);
      }
    }
  }, [t._v(" " + t._s(t.appName) + " ")]) : s("span", {
    staticClass: "text-lg font-bold my-auto"
  }, [t._v(" " + t._s(t.appName) + " ")])], 2) : t._e(), t.sidebarNavigationItems.length > 0 ? s("nav", {
    staticClass: "grid grid-cols-1 pb-24"
  }, [t._t("mobile-sidebar-navigation", function() {
    return [t._l(t.sidebarNavigationItems, function(i) {
      return [i.items ? [s("button", {
        key: i.id,
        staticClass: "flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8",
        class: {
          "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !t.itemsGroupIsActive(i) || t.showItemsGroup(i),
          "text-white border-danger": t.itemsGroupIsActive(i) && !t.showItemsGroup(i)
        },
        attrs: {
          href: i.href
        },
        on: {
          click: function(a) {
            return t.toggleItemsGroup(i);
          }
        }
      }, [t._t("mobile-sidebar-navigation-item-icon", function() {
        return [t.hideSidebarIcons ? t._e() : s("span", {
          staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
        }, [i.iconUrl ? s("img", {
          staticClass: "w-8 h-8",
          attrs: {
            src: i.iconUrl,
            alt: i.title
          }
        }) : s("svg", {
          staticClass: "w-8 h-8 fill-current",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [s("path", {
          attrs: {
            d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
          }
        })])])];
      }, {
        item: i,
        classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
      }), s("span", {
        staticClass: "inline-block my-auto text-left"
      }, [t._v(t._s(i.title))]), t.itemsGroupBadgeCount(i) && !t.showItemsGroup(i) ? s("span", {
        staticClass: "inline-block my-auto"
      }, [s("span", {
        staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
      }, [t._v(t._s(t.itemsGroupBadgeCount(i)))])]) : t._e(), s("svg", {
        staticClass: "absolute w-4 h-4 right-2 top-1/3",
        attrs: {
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [t.showItemsGroup(i) ? s("path", {
        attrs: {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "3",
          d: "M19 9l-7 7-7-7"
        }
      }) : s("path", {
        attrs: {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "3",
          d: "M9 5l7 7-7 7"
        }
      })])], 2), t.showItemsGroup(i) ? t._l(i.items, function(n) {
        return s("a", {
          key: "".concat(i.id, " + ").concat(n.id),
          staticClass: "flex relative gap-2 px-4 py-2 border-l-8",
          class: {
            "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !n.active,
            "text-white border-danger pointer-events-none": n.active,
            "pl-12": !t.hideSidebarIcons,
            "pl-8": t.hideSidebarIcons
          },
          attrs: {
            href: n.href
          },
          on: {
            click: function(o) {
              return t.navigate(i, n, o);
            }
          }
        }, [s("span", {
          staticClass: "inline-block my-auto text-left"
        }, [t._v(t._s(n.title))]), n.badgeCount ? s("span", {
          staticClass: "inline-block my-auto"
        }, [s("span", {
          staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
        }, [t._v(t._s(n.badgeCount))])]) : t._e()]);
      }) : t._e()] : s("a", {
        key: i.id,
        staticClass: "flex relative gap-2 pl-2 px-4 py-2 border-l-8",
        class: {
          "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !i.active,
          "text-white border-danger pointer-events-none": i.active
        },
        attrs: {
          href: i.href
        },
        on: {
          click: function(a) {
            return t.navigate(null, i, a);
          }
        }
      }, [t._t("mobile-sidebar-navigation-item-icon", function() {
        return [t.hideSidebarIcons ? t._e() : s("span", {
          staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
        }, [i.iconUrl ? s("img", {
          staticClass: "w-8 h-8",
          attrs: {
            src: i.iconUrl,
            alt: i.title
          }
        }) : s("svg", {
          staticClass: "w-8 h-8 fill-current",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [s("path", {
          attrs: {
            d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
          }
        })])])];
      }, {
        item: i,
        classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
      }), s("span", {
        staticClass: "inline-block my-auto text-left"
      }, [t._v(t._s(i.title))]), i.badgeCount ? s("span", {
        staticClass: "inline-block my-auto"
      }, [s("span", {
        staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
      }, [t._v(t._s(i.badgeCount))])]) : t._e()], 2)];
    })];
  }, {
    items: t.sidebarNavigationItems,
    collapsed: t.collapsed
  })], 2) : t._e()])])]) : t._e()]), s("aside", {
    staticClass: "hidden md:block bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0 z-50",
    class: [t.computedSidebarWidth]
  }, [s("div", {
    staticClass: "h-screen flex flex-col sticky top-0"
  }, [s("div", {
    staticClass: "overflow-y-auto flex-grow overscroll-contain"
  }, [t.appName ? s("div", {
    staticClass: "sticky top-0 bg-gray-900 dark:bg-gray-800 z-10"
  }, [t.appName ? s("p", {
    staticClass: "flex gap-2 p-4"
  }, [t._t("app-icon", function() {
    return [t.hideAppIcon ? t._e() : s("span", {
      staticClass: "block w-8 h-8 my-auto flex-shrink-0"
    }, [t.appUrl ? [s("a", {
      attrs: {
        href: t.appUrl
      },
      on: {
        click: function(n) {
          return t.navigate(null, {
            title: t.appName,
            href: t.appUrl
          }, n);
        }
      }
    }, [t.appIconUrl ? s("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : t._e(), s("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [s("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])])] : [t.appIconUrl ? s("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : s("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [s("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])]], 2)];
  }, {
    classList: "block w-8 h-8 my-auto flex-shrink-0"
  }), t.appUrl && t.appName ? s("a", {
    staticClass: "text-lg font-bold my-auto hover:underline",
    class: {
      "sr-only": t.enableCollapsibleSidebar && t.collapsed
    },
    attrs: {
      href: t.appUrl
    },
    on: {
      click: function(n) {
        return t.navigate(null, {
          title: t.appName,
          href: t.appUrl
        }, n);
      }
    }
  }, [t._v(" " + t._s(t.appName) + " ")]) : t.appName ? s("span", {
    staticClass: "text-lg font-bold my-auto",
    class: {
      "sr-only": t.enableCollapsibleSidebar && t.collapsed
    }
  }, [t._v(" " + t._s(t.appName) + " ")]) : t._e()], 2) : t._e()]) : t._e(), t.sidebarNavigationItems.length > 0 ? s("nav", {
    staticClass: "grid grid-cols-1 pb-24"
  }, [t._t("sidebar-navigation", function() {
    return [t._l(t.sidebarNavigationItems, function(i) {
      return [i.items ? [s("sds-tooltip", {
        key: i.id,
        attrs: {
          placement: "right",
          disabled: !t.collapsed
        },
        scopedSlots: t._u([{
          key: "trigger",
          fn: function() {
            return [s("button", {
              staticClass: "flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8",
              class: {
                "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !t.itemsGroupIsActive(i) || t.showItemsGroup(i),
                "text-white border-danger": t.itemsGroupIsActive(i) && (!t.showItemsGroup(i) || t.collapsed)
              },
              attrs: {
                href: i.href
              },
              on: {
                click: function(o) {
                  return t.toggleItemsGroup(i);
                }
              }
            }, [t._t("sidebar-navigation-item-icon", function() {
              return [t.hideSidebarIcons ? t._e() : s("span", {
                staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
              }, [i.iconUrl ? s("img", {
                staticClass: "w-8 h-8",
                attrs: {
                  src: i.iconUrl,
                  alt: i.title
                }
              }) : s("svg", {
                staticClass: "w-8 h-8 fill-current",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512"
                }
              }, [s("path", {
                attrs: {
                  d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                }
              })])])];
            }, {
              item: i,
              classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
            }), t.collapsed ? t._e() : s("span", {
              staticClass: "inline-block my-auto text-left"
            }, [t._v(t._s(i.title))]), t.itemsGroupBadgeCount(i) && !t.showItemsGroup(i) ? s("span", {
              staticClass: "inline-block my-auto",
              class: {
                "absolute bottom-1 right-1": t.collapsed
              }
            }, [s("span", {
              staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
            }, [t._v(t._s(t.itemsGroupBadgeCount(i)))])]) : t._e(), t.collapsed ? t._e() : s("svg", {
              staticClass: "absolute w-4 h-4 right-2 top-1/3",
              attrs: {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              }
            }, [t.showItemsGroup(i) ? s("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "3",
                d: "M19 9l-7 7-7-7"
              }
            }) : s("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "3",
                d: "M9 5l7 7-7 7"
              }
            })])], 2)];
          },
          proxy: !0
        }], null, !0)
      }, [s("p", [t._v(t._s(i.title))])]), !t.collapsed && t.showItemsGroup(i) ? t._l(i.items, function(n) {
        return s("a", {
          key: "".concat(i.id, " + ").concat(n.id),
          staticClass: "flex relative gap-2 px-4 py-2 border-l-8",
          class: {
            "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !n.active,
            "text-white border-danger pointer-events-none": n.active,
            "pl-12": !t.hideSidebarIcons,
            "pl-8": t.hideSidebarIcons
          },
          attrs: {
            href: n.href
          },
          on: {
            click: function(o) {
              return t.navigate(i, n, o);
            }
          }
        }, [s("span", {
          staticClass: "inline-block my-auto text-left"
        }, [t._v(t._s(n.title))]), n.badgeCount ? s("span", {
          staticClass: "inline-block my-auto"
        }, [s("span", {
          staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
        }, [t._v(t._s(n.badgeCount))])]) : t._e()]);
      }) : t._e()] : s("sds-tooltip", {
        key: i.id,
        attrs: {
          placement: "right",
          disabled: !t.collapsed
        },
        scopedSlots: t._u([{
          key: "trigger",
          fn: function() {
            return [s("a", {
              staticClass: "flex relative gap-2 pl-2 px-4 py-2 border-l-8",
              class: {
                "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !i.active,
                "text-white border-danger pointer-events-none": i.active
              },
              attrs: {
                href: i.href
              },
              on: {
                click: function(o) {
                  return t.navigate(null, i, o);
                }
              }
            }, [t._t("sidebar-navigation-item-icon", function() {
              return [t.hideSidebarIcons ? t._e() : s("span", {
                staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
              }, [i.iconUrl ? s("img", {
                staticClass: "w-8 h-8",
                attrs: {
                  src: i.iconUrl,
                  alt: i.title
                }
              }) : s("svg", {
                staticClass: "w-8 h-8 fill-current",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512"
                }
              }, [s("path", {
                attrs: {
                  d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                }
              })])])];
            }, {
              item: i,
              classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
            }), t.collapsed ? t._e() : s("span", {
              staticClass: "inline-block my-auto"
            }, [t._v(t._s(i.title))]), i.badgeCount ? s("span", {
              staticClass: "inline-block my-auto",
              class: {
                "absolute bottom-1 right-1": t.collapsed
              }
            }, [s("span", {
              staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
            }, [t._v(t._s(i.badgeCount))])]) : t._e()], 2)];
          },
          proxy: !0
        }], null, !0)
      }, [s("p", [t._v(t._s(i.title))])])];
    })];
  }, {
    items: t.sidebarNavigationItems,
    collapsed: t.collapsed
  })], 2) : t._e()]), t.enableCollapsibleSidebar ? s("div", {
    staticClass: "flex-shrink-0 sticky bottom-0 bg-gray-900 dark:bg-gray-800"
  }, [s("button", {
    staticClass: "px-3 ml-auto border-transparent rounded-none tab tab-block tab-dark",
    class: {
      "w-full": t.collapsed,
      "w-auto": !t.collapsed
    },
    attrs: {
      id: "btn-collapse-toggle",
      title: t.collapsed ? "Expand sidebar ( [ )" : "Collapse sidebar ( [ )"
    },
    on: {
      click: t.toggleCollapse
    }
  }, [s("svg", {
    staticClass: "w-6 h-6 mx-auto",
    attrs: {
      "aria-hidden": "true",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [t.collapsed ? s("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 5l7 7-7 7M5 5l7 7-7 7"
    }
  }) : s("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
    }
  })])])]) : t._e()])]), s("section", {
    staticClass: "flex flex-col items-stretch flex-grow min-w-0"
  }, [s("main", {
    staticClass: "flex-grow pb-4 bg-gray-100 dark:bg-gray-900"
  }, [t.hidePageHeader ? t._e() : s("div", {
    staticClass: "bg-white dark:bg-gray-700 shadow px-4 py-3 sticky top-0 z-40 flex flex-col gap-4 md:flex-row"
  }, [s("div", {
    staticClass: "flex-grow my-auto flex flex-row gap-2"
  }, [t._t("page-title", function() {
    return [s("p", {
      staticClass: "text-2xl font-semibold text-gray-700 dark:text-gray-100"
    }, [t._v(" " + t._s(t.pageTitle) + " ")])];
  }, {
    collapsed: t.collapsed,
    classList: "text-2xl font-semibold text-gray-700 dark:text-gray-100"
  })], 2), t.hasSlot("page-header") ? s("div", {
    staticClass: "flex-shrink-0 my-auto flex flex-col md:flex-row gap-2"
  }, [t._t("page-header", null, {
    collapsed: t.collapsed
  })], 2) : t._e()]), s("div", {
    staticClass: "p-4"
  }, [t._t("default", null, {
    collapsed: t.collapsed
  })], 2)]), t._t("footer-top"), s("footer", {
    staticClass: "bg-gray-900 dark:bg-gray-800 text-xs text-light px-4 pt-4 pb-16 flex flex-col lg:flex-row gap-4"
  }, [s("div", {
    staticClass: "flex-shrink-0 flex order-2 lg:order-1"
  }, [s("sds-link", {
    staticClass: "my-auto",
    attrs: {
      href: "https://sei.cmu.edu",
      title: "Software Engineering Institute",
      external: ""
    }
  }, [s("img", {
    staticClass: "h-10",
    attrs: {
      src: t.wordmark,
      alt: "Software Engineering Institute"
    }
  })])], 1), t.hasSlot("footer-middle") ? s("div", {
    staticClass: "flex-shrink flex lg:mx-auto order-1 lg:order-2"
  }, [s("div", {
    staticClass: "my-auto"
  }, [t._t("footer-middle")], 2)]) : t._e(), s("div", {
    staticClass: "flex-shrink-0 flex lg:ml-auto order-3"
  }, [s("div", {
    staticClass: "my-auto"
  }, [t._t("footer-right", function() {
    return [s("p", [t._v("\xA9 " + t._s(t.year) + " Carnegie Mellon University")])];
  }, {
    year: t.year
  })], 2)])]), t.hasSlot("actions-bar") ? s("div", {
    staticClass: "sticky bottom-0 z-40"
  }, [t._t("actions-bar")], 2) : t._e()], 2)], 1)]);
}, De = [];
const Te = {
  name: "SdsLayoutApp",
  components: {
    SdsLink: Yt,
    SdsTooltip: pe
  },
  props: {
    value: { type: Boolean, default: !1 },
    sidebarWidth: { type: String, default: "w-72" },
    enableCollapsibleSidebar: { type: Boolean, default: !1 },
    appSuitePrefix: { type: String, default: "SEI" },
    appSuite: { type: String, default: null },
    appSuiteUrl: { type: String, default: null },
    appName: { type: String, default: null },
    appUrl: { type: String, default: null },
    hideAppNameInMobileHeader: { type: Boolean, default: !1 },
    appIconUrl: { type: String, default: null },
    pageTitle: { type: String, default: null },
    hidePageHeader: { type: Boolean, default: !1 },
    sidebarNavigationItems: { type: Array, default: () => [] },
    hideAppIcon: { type: Boolean, default: !1 },
    hideSidebarIcons: { type: Boolean, default: !1 }
  },
  data() {
    return {
      showMobileMenu: !1,
      openItemsGroups: []
    };
  },
  computed: {
    wordmark() {
      return xe;
    },
    year() {
      return new Date().getFullYear();
    },
    computedSidebarWidth() {
      return this.enableCollapsibleSidebar ? this.collapsed ? "w-auto" : this.sidebarWidth : this.sidebarWidth;
    },
    collapsed: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  watch: {
    showMobileMenu(e) {
      e ? (document.documentElement.classList.add("layout-app-internal-prevent-scroll"), this.$nextTick(() => {
        this.$refs.mobileMenuCloseBtn.focus();
      })) : (document.documentElement.classList.remove("layout-app-internal-prevent-scroll"), this.$refs.mobileMenuOpenBtn.focus());
    },
    collapsed(e) {
      e && (this.openItemsGroups = []);
    }
  },
  mounted() {
    document.addEventListener("keyup", this.handleDocumentKeyUp);
  },
  unmounted() {
    document.documentElement.classList.remove("layout-app-internal-prevent-scroll"), document.removeEventListener("keyup", this.handleDocumentKeyUp);
  },
  methods: {
    itemsGroupBadgeCount(e) {
      if (!e.items)
        return null;
      let t = 0;
      return e.items.forEach((L) => {
        L.badgeCount && (t = t + L.badgeCount);
      }), t;
    },
    itemsGroupIsActive(e) {
      return e.items && e.items.filter((t) => t.active).length;
    },
    showItemsGroup(e) {
      return this.openItemsGroups.filter((t) => t.id === e.id).length;
    },
    toggleItemsGroup(e) {
      this.collapsed = !1, this.showItemsGroup(e) ? this.openItemsGroups = this.openItemsGroups.filter(
        (t) => t.id !== e.id
      ) : this.openItemsGroups.push(e);
    },
    hasSlot(e) {
      return !!this.$slots[e];
    },
    navigate(e, t, L) {
      this.showMobileMenu = !1, this.$emit("navigate", { group: e, item: t, event: L });
    },
    toggleCollapse() {
      this.enableCollapsibleSidebar ? this.collapsed = !this.collapsed : this.collapsed = !1;
    },
    handleDocumentKeyUp(e) {
      if (!e.target)
        return;
      const t = e.target.tagName.toLowerCase();
      t !== "textarea" && t !== "input" && e.key === "[" && this.toggleCollapse();
    },
    checkKeyEvent(e) {
      if (e.key === "Escape") {
        this.showMobileMenu = !1;
        return;
      }
      const t = this.$refs.mobileSidebarContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (t.length < 2 && e.key === "Tab") {
        e.preventDefault();
        return;
      }
      const L = t.length - 1;
      e.key === "Tab" && e.shiftKey === !1 && e.target === t[L] ? (e.preventDefault(), t[0].focus()) : e.key === "Tab" && e.shiftKey === !0 && e.target === t[0] && (e.preventDefault(), t[L].focus());
    }
  }
}, Ct = {};
var he = /* @__PURE__ */ $(
  Te,
  Se,
  De,
  !1,
  ze,
  null,
  null,
  null
);
function ze(e) {
  for (let t in Ct)
    this[t] = Ct[t];
}
const me = /* @__PURE__ */ function() {
  return he.exports;
}();
export {
  me as default
};
