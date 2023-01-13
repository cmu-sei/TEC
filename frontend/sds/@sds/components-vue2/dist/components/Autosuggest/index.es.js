// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var g = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, P = typeof g == "object" && g && g.Object === Object && g, F = P, G = F, R = typeof self == "object" && self && self.Object === Object && self, U = G || R || Function("return this")(), y = U, B = y, L = B.Symbol, q = L, T = q, E = Object.prototype, Q = E.hasOwnProperty, K = E.toString, _ = T ? T.toStringTag : void 0;
function W(e) {
  var t = Q.call(e, _), r = e[_];
  try {
    e[_] = void 0;
    var a = !0;
  } catch {
  }
  var n = K.call(e);
  return a && (t ? e[_] = r : delete e[_]), n;
}
var J = W, V = Object.prototype, X = V.toString;
function Y(e) {
  return X.call(e);
}
var Z = Y, D = q, ee = J, te = Z, re = "[object Null]", ae = "[object Undefined]", k = D ? D.toStringTag : void 0;
function ne(e) {
  return e == null ? e === void 0 ? ae : re : k && k in Object(e) ? ee(e) : te(e);
}
var se = ne;
function ie(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var A = ie, oe = se, le = A, he = "[object AsyncFunction]", ue = "[object Function]", ce = "[object GeneratorFunction]", de = "[object Proxy]";
function fe(e) {
  if (!le(e))
    return !1;
  var t = oe(e);
  return t == ue || t == ce || t == he || t == de;
}
var pe = fe, ve = y, _e = ve["__core-js_shared__"], ge = _e, w = ge, I = function() {
  var e = /[^.]+$/.exec(w && w.keys && w.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ce(e) {
  return !!I && I in e;
}
var ye = Ce, be = Function.prototype, me = be.toString;
function $e(e) {
  if (e != null) {
    try {
      return me.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var we = $e, Se = pe, xe = ye, Oe = A, Te = we, De = /[\\^$.*+?()[\]{}|]/g, ke = /^\[object .+?Constructor\]$/, Ie = Function.prototype, je = Object.prototype, Ne = Ie.toString, He = je.hasOwnProperty, qe = RegExp(
  "^" + Ne.call(He).replace(De, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ee(e) {
  if (!Oe(e) || xe(e))
    return !1;
  var t = Se(e) ? qe : ke;
  return t.test(Te(e));
}
var Ae = Ee;
function Me(e, t) {
  return e == null ? void 0 : e[t];
}
var ze = Me, Pe = Ae, Fe = ze;
function Ge(e, t) {
  var r = Fe(e, t);
  return Pe(r) ? r : void 0;
}
var x = Ge, Re = x, Ue = Re(Object, "create"), b = Ue, j = b;
function Be() {
  this.__data__ = j ? j(null) : {}, this.size = 0;
}
var Le = Be;
function Qe(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ke = Qe, We = b, Je = "__lodash_hash_undefined__", Ve = Object.prototype, Xe = Ve.hasOwnProperty;
function Ye(e) {
  var t = this.__data__;
  if (We) {
    var r = t[e];
    return r === Je ? void 0 : r;
  }
  return Xe.call(t, e) ? t[e] : void 0;
}
var Ze = Ye, et = b, tt = Object.prototype, rt = tt.hasOwnProperty;
function at(e) {
  var t = this.__data__;
  return et ? t[e] !== void 0 : rt.call(t, e);
}
var nt = at, st = b, it = "__lodash_hash_undefined__";
function ot(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = st && t === void 0 ? it : t, this;
}
var lt = ot, ht = Le, ut = Ke, ct = Ze, dt = nt, ft = lt;
function f(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
f.prototype.clear = ht;
f.prototype.delete = ut;
f.prototype.get = ct;
f.prototype.has = dt;
f.prototype.set = ft;
var pt = f;
function vt() {
  this.__data__ = [], this.size = 0;
}
var _t = vt;
function gt(e, t) {
  return e === t || e !== e && t !== t;
}
var Ct = gt, yt = Ct;
function bt(e, t) {
  for (var r = e.length; r--; )
    if (yt(e[r][0], t))
      return r;
  return -1;
}
var m = bt, mt = m, $t = Array.prototype, wt = $t.splice;
function St(e) {
  var t = this.__data__, r = mt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : wt.call(t, r, 1), --this.size, !0;
}
var xt = St, Ot = m;
function Tt(e) {
  var t = this.__data__, r = Ot(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Dt = Tt, kt = m;
function It(e) {
  return kt(this.__data__, e) > -1;
}
var jt = It, Nt = m;
function Ht(e, t) {
  var r = this.__data__, a = Nt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var qt = Ht, Et = _t, At = xt, Mt = Dt, zt = jt, Pt = qt;
function p(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
p.prototype.clear = Et;
p.prototype.delete = At;
p.prototype.get = Mt;
p.prototype.has = zt;
p.prototype.set = Pt;
var Ft = p, Gt = x, Rt = y, Ut = Gt(Rt, "Map"), Bt = Ut, N = pt, Lt = Ft, Qt = Bt;
function Kt() {
  this.size = 0, this.__data__ = {
    hash: new N(),
    map: new (Qt || Lt)(),
    string: new N()
  };
}
var Wt = Kt;
function Jt(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Vt = Jt, Xt = Vt;
function Yt(e, t) {
  var r = e.__data__;
  return Xt(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var $ = Yt, Zt = $;
function er(e) {
  var t = Zt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var tr = er, rr = $;
function ar(e) {
  return rr(this, e).get(e);
}
var nr = ar, sr = $;
function ir(e) {
  return sr(this, e).has(e);
}
var or = ir, lr = $;
function hr(e, t) {
  var r = lr(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var ur = hr, cr = Wt, dr = tr, fr = nr, pr = or, vr = ur;
function v(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
v.prototype.clear = cr;
v.prototype.delete = dr;
v.prototype.get = fr;
v.prototype.has = pr;
v.prototype.set = vr;
var _r = v, gr = "__lodash_hash_undefined__";
function Cr(e) {
  return this.__data__.set(e, gr), this;
}
var yr = Cr;
function br(e) {
  return this.__data__.has(e);
}
var mr = br, $r = _r, wr = yr, Sr = mr;
function C(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new $r(); ++t < r; )
    this.add(e[t]);
}
C.prototype.add = C.prototype.push = wr;
C.prototype.has = Sr;
var xr = C;
function Or(e, t, r, a) {
  for (var n = e.length, i = r + (a ? 1 : -1); a ? i-- : ++i < n; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var Tr = Or;
function Dr(e) {
  return e !== e;
}
var kr = Dr;
function Ir(e, t, r) {
  for (var a = r - 1, n = e.length; ++a < n; )
    if (e[a] === t)
      return a;
  return -1;
}
var jr = Ir, Nr = Tr, Hr = kr, qr = jr;
function Er(e, t, r) {
  return t === t ? qr(e, t, r) : Nr(e, Hr, r);
}
var Ar = Er, Mr = Ar;
function zr(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Mr(e, t, 0) > -1;
}
var Pr = zr;
function Fr(e, t, r) {
  for (var a = -1, n = e == null ? 0 : e.length; ++a < n; )
    if (r(t, e[a]))
      return !0;
  return !1;
}
var Gr = Fr;
function Rr(e, t) {
  return e.has(t);
}
var Ur = Rr, Br = x, Lr = y, Qr = Br(Lr, "Set"), Kr = Qr;
function Wr() {
}
var Jr = Wr;
function Vr(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var M = Vr, S = Kr, Xr = Jr, Yr = M, Zr = 1 / 0, ea = S && 1 / Yr(new S([, -0]))[1] == Zr ? function(e) {
  return new S(e);
} : Xr, ta = ea, ra = xr, aa = Pr, na = Gr, sa = Ur, ia = ta, oa = M, la = 200;
function ha(e, t, r) {
  var a = -1, n = aa, i = e.length, d = !0, h = [], s = h;
  if (r)
    d = !1, n = na;
  else if (i >= la) {
    var l = t ? null : ia(e);
    if (l)
      return oa(l);
    d = !1, n = sa, s = new ra();
  } else
    s = t ? [] : h;
  e:
    for (; ++a < i; ) {
      var u = e[a], c = t ? t(u) : u;
      if (u = r || u !== 0 ? u : 0, d && c === c) {
        for (var o = s.length; o--; )
          if (s[o] === c)
            continue e;
        t && s.push(c), h.push(u);
      } else
        n(s, c, r) || (s !== h && s.push(c), h.push(u));
    }
  return h;
}
var ua = ha, ca = ua;
function da(e) {
  return e && e.length ? ca(e) : [];
}
var fa = da, pa = function() {
  var t = this, r = t.$createElement, a = t._self._c || r;
  return a("div", {
    staticClass: "relative",
    attrs: {
      "data-id": "sds-autosuggest"
    }
  }, [a("div", {
    staticClass: "input-group"
  }, [a("div", {
    staticClass: "relative w-full input-group",
    class: {
      "opacity-50 pointer-events-none": t.disabled
    }
  }, [a("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: t.q,
      expression: "q",
      modifiers: {
        trim: !0
      }
    }],
    ref: "input",
    staticClass: "pr-8 rounded-r-none form-control",
    attrs: {
      type: "text",
      autocapitalize: "off",
      autocomplete: "off",
      spellcheck: "false",
      autocorrect: "off",
      placeholder: t.placeholder,
      disabled: t.disabled,
      maxlength: t.maxlength
    },
    domProps: {
      value: t.q
    },
    on: {
      input: [function(n) {
        n.target.composing || (t.q = n.target.value.trim());
      }, t.handleChange],
      keydown: [function(n) {
        return !n.type.indexOf("key") && t._k(n.keyCode, "down", 40, n.key, ["Down", "ArrowDown"]) ? null : t.handleArrows("down");
      }, function(n) {
        return !n.type.indexOf("key") && t._k(n.keyCode, "up", 38, n.key, ["Up", "ArrowUp"]) ? null : t.handleArrows("up");
      }, function(n) {
        if (!n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") || (n.preventDefault(), n.target !== n.currentTarget))
          return null;
      }],
      keyup: [function(n) {
        return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") || (n.preventDefault(), n.target !== n.currentTarget) ? null : t.handleEnterKeyUp.apply(null, arguments);
      }, function(n) {
        return !n.type.indexOf("key") && t._k(n.keyCode, "esc", 27, n.key, ["Esc", "Escape"]) ? null : t.handleEsc.apply(null, arguments);
      }],
      blur: [t.resetDropdown, function(n) {
        return t.$forceUpdate();
      }]
    }
  }), t.q.length > 0 ? a("button", {
    staticClass: "absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none",
    attrs: {
      tabindex: "-1",
      type: "button",
      disabled: t.disabled
    },
    on: {
      click: t.handleClearSearchBtn
    }
  }, [a("span", {
    staticClass: "sr-only"
  }, [t._v("Clear search")]), a("svg", {
    staticClass: "w-5 h-5 x",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }
  }, [a("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])]) : t._e()]), a("button", {
    staticClass: "px-3",
    class: [t.variantClass],
    attrs: {
      disabled: t.disabled || t.disableSearch,
      type: "button"
    },
    on: {
      click: t.handleSearchBtn
    }
  }, [a("span", {
    staticClass: "sr-only"
  }, [t._v("Search")]), a("svg", {
    staticClass: "w-5 h-5 search",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  }, [a("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    }
  })])])]), t.isOpen && !t.preventDisplay ? a("ul", {
    staticClass: "absolute z-50 w-full p-0 mt-1 overflow-auto bg-white border rounded shadow dark:border-gray-600 dark:bg-gray-700"
  }, t._l(t.results, function(n, i) {
    return a("li", {
      key: i,
      staticClass: "flex px-4 py-2 text-sm text-left text-gray-900 list-none cursor-pointer dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600",
      class: {
        "active bg-gray-200 dark:bg-gray-600": i === t.arrowCounter
      },
      on: {
        mousedown: function(h) {
          return h.preventDefault(), t.handleDropdownClick(n);
        }
      }
    }, [a("div", [a("svg", {
      staticClass: "inline-block w-5 h-5 my-auto mr-2 search",
      attrs: {
        viewBox: "0 0 20 20",
        fill: "currentColor"
      }
    }, [a("path", {
      attrs: {
        "fill-rule": "evenodd",
        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        "clip-rule": "evenodd"
      }
    })])]), a("div", {
      staticClass: "flex-grow inline-block my-auto truncate align-middle"
    }, [a("span", {
      domProps: {
        innerHTML: t._s(t.resultWithHightlight(n))
      }
    })])]);
  }), 0) : t._e()]);
}, va = [];
function _a(e, t, r, a, n, i, d, h) {
  var s = typeof e == "function" ? e.options : e;
  t && (s.render = t, s.staticRenderFns = r, s._compiled = !0), a && (s.functional = !0), i && (s._scopeId = "data-v-" + i);
  var l;
  if (d ? (l = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), n && n.call(this, o), o && o._registeredComponents && o._registeredComponents.add(d);
  }, s._ssrRegister = l) : n && (l = h ? function() {
    n.call(
      this,
      (s.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), l)
    if (s.functional) {
      s._injectStyles = l;
      var u = s.render;
      s.render = function(z, O) {
        return l.call(O), u(z, O);
      };
    } else {
      var c = s.beforeCreate;
      s.beforeCreate = c ? [].concat(c, l) : [l];
    }
  return {
    exports: e,
    options: s
  };
}
const ga = {
  name: "SdsAutosuggest",
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: 524288
    },
    disableSearch: {
      type: Boolean,
      default: !1
    },
    autosuggest: {
      type: Function,
      default: () => {
      }
    },
    variant: {
      type: String,
      default: "default"
    },
    items: {
      type: Array,
      default: () => []
    },
    threshold: {
      type: Number,
      default: 1
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    useBuiltInHighlighting: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      originalQ: "",
      loading: !1,
      isOpen: !1,
      preventDisplay: !0,
      results: [],
      arrowCounter: 0
    };
  },
  computed: {
    q: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    },
    metThreshold() {
      return this.q.length >= this.threshold;
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "btn btn-default text-primary dark:text-blue-400";
        case "danger":
          return "btn btn-default text-danger dark:text-red-400";
        default:
          return "btn btn-default text-secondary dark:text-gray-300";
      }
    }
  },
  watch: {
    items(e) {
      this.results = e, this.loading = !1, this.filterResults();
    }
  },
  mounted() {
    this.autofocus && this.$refs.input.focus(), document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    formatTerm(e) {
      return e.replace(/<\/?b>/gi, "").trim();
    },
    filterResults() {
      const e = JSON.parse(JSON.stringify(this.items));
      this.results = fa(
        e.filter((t) => {
          const r = this.q.toLowerCase().replace('"', "").split(" ");
          let a = !1;
          return r.forEach((n) => {
            this.formatTerm(t.term).toLowerCase().indexOf(this.formatTerm(n)) > -1 && (a = !0);
          }), a;
        }).map((t) => (t.term = t.term.trim(), t))
      ), this.isOpen = this.results.length > 0 && this.q !== "", this.originalQ === "" && (this.originalQ = (" " + this.q).slice(1));
    },
    resultWithHightlight(e) {
      if (!this.useBuiltInHighlighting)
        return e.term;
      let t = this.originalQ.replace('"', "").split(" ");
      t = t.join("|").replace(/[-[\]{}()*+?.,\\^$]/g, "\\$&");
      const r = new RegExp(t, "gi");
      return e.term.replace(r, (a) => `<b>${a}</b>`);
    },
    resetDropdown() {
      this.originalQ = "", this.isOpen = !1, this.preventDisplay = !0, this.results = [], this.arrowCounter = -1;
    },
    handleChange() {
      if (!this.metThreshold) {
        this.resetDropdown();
        return;
      }
      this.originalQ = "", this.arrowCounter = -1, this.preventDisplay = !1, this.loading = !0, this.autosuggest();
    },
    handleArrows(e) {
      switch (this.preventDisplay = !1, e) {
        case "down":
          !this.isOpen && this.metThreshold && this.filterResults(), this.arrowCounter < this.results.length - 1 ? this.arrowCounter = this.arrowCounter + 1 : this.arrowCounter = -1;
          break;
        case "up":
          this.arrowCounter > -1 ? this.arrowCounter = this.arrowCounter - 1 : this.arrowCounter = this.results.length - 1;
          break;
      }
      this.isOpen && (this.results.length > 0 && typeof this.results[this.arrowCounter] < "u" && (this.q = this.formatTerm(this.results[this.arrowCounter].term)), this.arrowCounter === -1 && (this.q = this.originalQ));
    },
    handleEsc() {
      this.originalQ !== "" && (this.q = (" " + this.originalQ).slice(1)), this.resetDropdown();
    },
    handleClickOutside(e) {
      this.$el.contains(e.target) || this.resetDropdown();
    },
    handleClearSearchBtn() {
      this.q = "", this.$refs.input.focus();
    },
    handleSearchBtn() {
      this.disabled || this.disableSearch || (this.resetDropdown(), this.$emit("search", this.q));
    },
    handleDropdownClick(e) {
      this.disabled || this.disableSearch || (this.q = this.formatTerm(e.term), this.resetDropdown(), e !== null && this.$emit("result", e), this.$nextTick(() => {
        this.$emit("search", this.q);
      }));
    },
    handleEnterKeyUp() {
      if (this.disabled || this.disableSearch)
        return;
      const e = typeof this.results[this.arrowCounter] < "u" ? this.results[this.arrowCounter] : null;
      this.q = e !== null ? this.formatTerm(this.results[this.arrowCounter].term) : this.originalQ || this.q, this.resetDropdown(), e !== null && this.$emit("result", e), this.$nextTick(() => {
        this.$emit("search", this.q);
      });
    }
  }
}, H = {};
var Ca = /* @__PURE__ */ _a(
  ga,
  pa,
  va,
  !1,
  ya,
  null,
  null,
  null
);
function ya(e) {
  for (let t in H)
    this[t] = H[t];
}
const ba = /* @__PURE__ */ function() {
  return Ca.exports;
}();
export {
  ba as default
};
