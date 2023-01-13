// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-0003


import J from "vue";
var Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Lo = typeof Yt == "object" && Yt && Yt.Object === Object && Yt, _o = Lo, xo = _o, Co = typeof self == "object" && self && self.Object === Object && self, So = xo || Co || Function("return this")(), cr = So, jo = cr, To = jo.Symbol, Is = To, oa = Is, Ps = Object.prototype, No = Ps.hasOwnProperty, Do = Ps.toString, Nt = oa ? oa.toStringTag : void 0;
function ko(e) {
  var t = No.call(e, Nt), n = e[Nt];
  try {
    e[Nt] = void 0;
    var r = !0;
  } catch {
  }
  var a = Do.call(e);
  return r && (t ? e[Nt] = n : delete e[Nt]), a;
}
var Oo = ko, zo = Object.prototype, Io = zo.toString;
function Po(e) {
  return Io.call(e);
}
var Eo = Po, la = Is, $o = Oo, Ao = Eo, Ro = "[object Null]", Yo = "[object Undefined]", ua = la ? la.toStringTag : void 0;
function Uo(e) {
  return e == null ? e === void 0 ? Yo : Ro : ua && ua in Object(e) ? $o(e) : Ao(e);
}
var Bo = Uo;
function Qo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Es = Qo, Ho = Bo, Fo = Es, Go = "[object AsyncFunction]", Vo = "[object Function]", Wo = "[object GeneratorFunction]", qo = "[object Proxy]";
function Jo(e) {
  if (!Fo(e))
    return !1;
  var t = Ho(e);
  return t == Vo || t == Wo || t == Go || t == qo;
}
var Xo = Jo, Ko = cr, Zo = Ko["__core-js_shared__"], tl = Zo, wr = tl, ca = function() {
  var e = /[^.]+$/.exec(wr && wr.keys && wr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function el(e) {
  return !!ca && ca in e;
}
var rl = el, nl = Function.prototype, al = nl.toString;
function il(e) {
  if (e != null) {
    try {
      return al.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var sl = il, ol = Xo, ll = rl, ul = Es, cl = sl, fl = /[\\^$.*+?()[\]{}|]/g, dl = /^\[object .+?Constructor\]$/, hl = Function.prototype, pl = Object.prototype, yl = hl.toString, ml = pl.hasOwnProperty, vl = RegExp(
  "^" + yl.call(ml).replace(fl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gl(e) {
  if (!ul(e) || ll(e))
    return !1;
  var t = ol(e) ? vl : dl;
  return t.test(cl(e));
}
var wl = gl;
function bl(e, t) {
  return e == null ? void 0 : e[t];
}
var Ml = bl, Ll = wl, _l = Ml;
function xl(e, t) {
  var n = _l(e, t);
  return Ll(n) ? n : void 0;
}
var Hn = xl, Cl = Hn, Sl = Cl(Object, "create"), fr = Sl, fa = fr;
function jl() {
  this.__data__ = fa ? fa(null) : {}, this.size = 0;
}
var Tl = jl;
function Nl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Dl = Nl, kl = fr, Ol = "__lodash_hash_undefined__", zl = Object.prototype, Il = zl.hasOwnProperty;
function Pl(e) {
  var t = this.__data__;
  if (kl) {
    var n = t[e];
    return n === Ol ? void 0 : n;
  }
  return Il.call(t, e) ? t[e] : void 0;
}
var El = Pl, $l = fr, Al = Object.prototype, Rl = Al.hasOwnProperty;
function Yl(e) {
  var t = this.__data__;
  return $l ? t[e] !== void 0 : Rl.call(t, e);
}
var Ul = Yl, Bl = fr, Ql = "__lodash_hash_undefined__";
function Hl(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Bl && t === void 0 ? Ql : t, this;
}
var Fl = Hl, Gl = Tl, Vl = Dl, Wl = El, ql = Ul, Jl = Fl;
function Lt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Lt.prototype.clear = Gl;
Lt.prototype.delete = Vl;
Lt.prototype.get = Wl;
Lt.prototype.has = ql;
Lt.prototype.set = Jl;
var Xl = Lt;
function Kl() {
  this.__data__ = [], this.size = 0;
}
var Zl = Kl;
function tu(e, t) {
  return e === t || e !== e && t !== t;
}
var eu = tu, ru = eu;
function nu(e, t) {
  for (var n = e.length; n--; )
    if (ru(e[n][0], t))
      return n;
  return -1;
}
var dr = nu, au = dr, iu = Array.prototype, su = iu.splice;
function ou(e) {
  var t = this.__data__, n = au(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : su.call(t, n, 1), --this.size, !0;
}
var lu = ou, uu = dr;
function cu(e) {
  var t = this.__data__, n = uu(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var fu = cu, du = dr;
function hu(e) {
  return du(this.__data__, e) > -1;
}
var pu = hu, yu = dr;
function mu(e, t) {
  var n = this.__data__, r = yu(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var vu = mu, gu = Zl, wu = lu, bu = fu, Mu = pu, Lu = vu;
function _t(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = gu;
_t.prototype.delete = wu;
_t.prototype.get = bu;
_t.prototype.has = Mu;
_t.prototype.set = Lu;
var _u = _t, xu = Hn, Cu = cr, Su = xu(Cu, "Map"), ju = Su, da = Xl, Tu = _u, Nu = ju;
function Du() {
  this.size = 0, this.__data__ = {
    hash: new da(),
    map: new (Nu || Tu)(),
    string: new da()
  };
}
var ku = Du;
function Ou(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var zu = Ou, Iu = zu;
function Pu(e, t) {
  var n = e.__data__;
  return Iu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var hr = Pu, Eu = hr;
function $u(e) {
  var t = Eu(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Au = $u, Ru = hr;
function Yu(e) {
  return Ru(this, e).get(e);
}
var Uu = Yu, Bu = hr;
function Qu(e) {
  return Bu(this, e).has(e);
}
var Hu = Qu, Fu = hr;
function Gu(e, t) {
  var n = Fu(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Vu = Gu, Wu = ku, qu = Au, Ju = Uu, Xu = Hu, Ku = Vu;
function xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = Wu;
xt.prototype.delete = qu;
xt.prototype.get = Ju;
xt.prototype.has = Xu;
xt.prototype.set = Ku;
var Zu = xt, tc = "__lodash_hash_undefined__";
function ec(e) {
  return this.__data__.set(e, tc), this;
}
var rc = ec;
function nc(e) {
  return this.__data__.has(e);
}
var ac = nc, ic = Zu, sc = rc, oc = ac;
function Se(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ic(); ++t < n; )
    this.add(e[t]);
}
Se.prototype.add = Se.prototype.push = sc;
Se.prototype.has = oc;
var lc = Se;
function uc(e, t, n, r) {
  for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var cc = uc;
function fc(e) {
  return e !== e;
}
var dc = fc;
function hc(e, t, n) {
  for (var r = n - 1, a = e.length; ++r < a; )
    if (e[r] === t)
      return r;
  return -1;
}
var pc = hc, yc = cc, mc = dc, vc = pc;
function gc(e, t, n) {
  return t === t ? vc(e, t, n) : yc(e, mc, n);
}
var wc = gc, bc = wc;
function Mc(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && bc(e, t, 0) > -1;
}
var Lc = Mc;
function _c(e, t, n) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var xc = _c;
function Cc(e, t) {
  return e.has(t);
}
var Sc = Cc, jc = Hn, Tc = cr, Nc = jc(Tc, "Set"), Dc = Nc;
function kc() {
}
var Oc = kc;
function zc(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var $s = zc, br = Dc, Ic = Oc, Pc = $s, Ec = 1 / 0, $c = br && 1 / Pc(new br([, -0]))[1] == Ec ? function(e) {
  return new br(e);
} : Ic, Ac = $c, Rc = lc, Yc = Lc, Uc = xc, Bc = Sc, Qc = Ac, Hc = $s, Fc = 200;
function Gc(e, t, n) {
  var r = -1, a = Yc, i = e.length, s = !0, o = [], l = o;
  if (n)
    s = !1, a = Uc;
  else if (i >= Fc) {
    var u = t ? null : Qc(e);
    if (u)
      return Hc(u);
    s = !1, a = Bc, l = new Rc();
  } else
    l = t ? [] : o;
  t:
    for (; ++r < i; ) {
      var c = e[r], f = t ? t(c) : c;
      if (c = n || c !== 0 ? c : 0, s && f === f) {
        for (var d = l.length; d--; )
          if (l[d] === f)
            continue t;
        t && l.push(f), o.push(c);
      } else
        a(l, f, n) || (l !== o && l.push(f), o.push(c));
    }
  return o;
}
var Vc = Gc, Wc = Vc;
function qc(e) {
  return e && e.length ? Wc(e) : [];
}
var Jc = qc, Xc = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "relative",
    attrs: {
      "data-id": "sds-autosuggest"
    }
  }, [r("div", {
    staticClass: "input-group"
  }, [r("div", {
    staticClass: "relative w-full input-group",
    class: {
      "opacity-50 pointer-events-none": t.disabled
    }
  }, [r("input", {
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
      input: [function(a) {
        a.target.composing || (t.q = a.target.value.trim());
      }, t.handleChange],
      keydown: [function(a) {
        return !a.type.indexOf("key") && t._k(a.keyCode, "down", 40, a.key, ["Down", "ArrowDown"]) ? null : t.handleArrows("down");
      }, function(a) {
        return !a.type.indexOf("key") && t._k(a.keyCode, "up", 38, a.key, ["Up", "ArrowUp"]) ? null : t.handleArrows("up");
      }, function(a) {
        if (!a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") || (a.preventDefault(), a.target !== a.currentTarget))
          return null;
      }],
      keyup: [function(a) {
        return !a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") || (a.preventDefault(), a.target !== a.currentTarget) ? null : t.handleEnterKeyUp.apply(null, arguments);
      }, function(a) {
        return !a.type.indexOf("key") && t._k(a.keyCode, "esc", 27, a.key, ["Esc", "Escape"]) ? null : t.handleEsc.apply(null, arguments);
      }],
      blur: [t.resetDropdown, function(a) {
        return t.$forceUpdate();
      }]
    }
  }), t.q.length > 0 ? r("button", {
    staticClass: "absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none",
    attrs: {
      tabindex: "-1",
      type: "button",
      disabled: t.disabled
    },
    on: {
      click: t.handleClearSearchBtn
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Clear search")]), r("svg", {
    staticClass: "w-5 h-5 x",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }
  }, [r("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])]) : t._e()]), r("button", {
    staticClass: "px-3",
    class: [t.variantClass],
    attrs: {
      disabled: t.disabled || t.disableSearch,
      type: "button"
    },
    on: {
      click: t.handleSearchBtn
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Search")]), r("svg", {
    staticClass: "w-5 h-5 search",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  }, [r("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    }
  })])])]), t.isOpen && !t.preventDisplay ? r("ul", {
    staticClass: "absolute z-50 w-full p-0 mt-1 overflow-auto bg-white border rounded shadow dark:border-gray-600 dark:bg-gray-700"
  }, t._l(t.results, function(a, i) {
    return r("li", {
      key: i,
      staticClass: "flex px-4 py-2 text-sm text-left text-gray-900 list-none cursor-pointer dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600",
      class: {
        "active bg-gray-200 dark:bg-gray-600": i === t.arrowCounter
      },
      on: {
        mousedown: function(o) {
          return o.preventDefault(), t.handleDropdownClick(a);
        }
      }
    }, [r("div", [r("svg", {
      staticClass: "inline-block w-5 h-5 my-auto mr-2 search",
      attrs: {
        viewBox: "0 0 20 20",
        fill: "currentColor"
      }
    }, [r("path", {
      attrs: {
        "fill-rule": "evenodd",
        d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
        "clip-rule": "evenodd"
      }
    })])]), r("div", {
      staticClass: "flex-grow inline-block my-auto truncate align-middle"
    }, [r("span", {
      domProps: {
        innerHTML: t._s(t.resultWithHightlight(a))
      }
    })])]);
  }), 0) : t._e()]);
}, Kc = [];
function y(e, t, n, r, a, i, s, o) {
  var l = typeof e == "function" ? e.options : e;
  t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), i && (l._scopeId = "data-v-" + i);
  var u;
  if (s ? (u = function(d) {
    d = d || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !d && typeof __VUE_SSR_CONTEXT__ < "u" && (d = __VUE_SSR_CONTEXT__), a && a.call(this, d), d && d._registeredComponents && d._registeredComponents.add(s);
  }, l._ssrRegister = u) : a && (u = o ? function() {
    a.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), u)
    if (l.functional) {
      l._injectStyles = u;
      var c = l.render;
      l.render = function(h, p) {
        return u.call(p), c(h, p);
      };
    } else {
      var f = l.beforeCreate;
      l.beforeCreate = f ? [].concat(f, u) : [u];
    }
  return {
    exports: e,
    options: l
  };
}
const Zc = {
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
      this.results = Jc(
        e.filter((t) => {
          const n = this.q.toLowerCase().replace('"', "").split(" ");
          let r = !1;
          return n.forEach((a) => {
            this.formatTerm(t.term).toLowerCase().indexOf(this.formatTerm(a)) > -1 && (r = !0);
          }), r;
        }).map((t) => (t.term = t.term.trim(), t))
      ), this.isOpen = this.results.length > 0 && this.q !== "", this.originalQ === "" && (this.originalQ = (" " + this.q).slice(1));
    },
    resultWithHightlight(e) {
      if (!this.useBuiltInHighlighting)
        return e.term;
      let t = this.originalQ.replace('"', "").split(" ");
      t = t.join("|").replace(/[-[\]{}()*+?.,\\^$]/g, "\\$&");
      const n = new RegExp(t, "gi");
      return e.term.replace(n, (r) => `<b>${r}</b>`);
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
}, ha = {};
var tf = /* @__PURE__ */ y(
  Zc,
  Xc,
  Kc,
  !1,
  ef,
  null,
  null,
  null
);
function ef(e) {
  for (let t in ha)
    this[t] = ha[t];
}
const rf = /* @__PURE__ */ function() {
  return tf.exports;
}();
var nf = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    class: ["inline-flex items-center justify-center", t.variantClass, t.sizeClass, t.shapeClass],
    attrs: {
      "data-id": "sds-avatar"
    }
  }, [t.src ? r("div", {
    class: ["bg-cover bg-center", t.sizeClass, t.shapeClass],
    style: "background-image: url(".concat(t.src, ")"),
    attrs: {
      title: t.name
    }
  }) : r("span", {
    class: ["leading-none text-black cursor-default uppercase", t.textClass],
    attrs: {
      title: t.name
    }
  }, [t._v(" " + t._s(t.initials) + " ")])]);
}, af = [];
const sf = {
  name: "SdsAvatar",
  props: {
    variant: {
      type: String,
      default: "random"
    },
    shape: {
      default: "portrait",
      type: String
    },
    size: {
      default: "md",
      type: String
    },
    name: {
      default: "",
      type: String
    },
    src: {
      default: "",
      type: String
    }
  },
  computed: {
    sizeClass() {
      if (this.shape === "circle")
        switch (this.size) {
          case "lg":
            return "w-44 h-44";
          case "md":
            return "w-16 h-16";
          case "sm":
            return "w-12 h-12";
          case "auto":
            return "w-full h-full";
        }
      else if (this.shape === "portrait")
        switch (this.size) {
          case "lg":
            return "w-44 h-52";
          case "md":
            return "w-16 h-20";
          case "sm":
            return "w-10 h-11";
          case "auto":
            return "w-full h-full";
        }
      return "";
    },
    textClass() {
      return this.size === "lg" ? "text-6xl font-light" : this.size === "md" ? "text-2xl" : this.size === "sm" ? "text-xl font-semibold" : "";
    },
    shapeClass() {
      return this.shape === "circle" ? "rounded-full" : "";
    },
    variantClass() {
      const e = ["bg-gray-200", "bg-red-200", "bg-pink-200", "bg-orange-200", "bg-yellow-200", "bg-green-200", "bg-teal-200", "bg-blue-200", "bg-indigo-200", "bg-purple-200"];
      if (this.variant && this.variant !== "random")
        return e.filter((t) => t.includes(this.variant))[0];
      {
        const t = Math.floor(Math.random() * e.length);
        return e[t];
      }
    },
    initials() {
      if (!this.name)
        return;
      let e = this.name.trim().toUpperCase();
      return e.length > 2 && (e.includes(" ") && (e = e.split(" ").map((t) => t[0]).join("")), e.length > 2) ? e.charAt(0) + e.charAt(e.length - 1) : e.substring(0, 2);
    }
  }
}, pa = {};
var of = /* @__PURE__ */ y(
  sf,
  nf,
  af,
  !1,
  lf,
  null,
  null,
  null
);
function lf(e) {
  for (let t in pa)
    this[t] = pa[t];
}
const uf = /* @__PURE__ */ function() {
  return of.exports;
}();
var cf = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "inline-block tracking-wide max-w-full uppercase px-2 py-1 text-xs font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden align-baseline rounded",
    class: t.variantClass,
    attrs: {
      "data-id": "sds-badge"
    }
  }, [t._t("default")], 2);
}, ff = [];
const df = {
  name: "SdsBadge",
  props: {
    type: {
      type: String,
      default: "medium"
    },
    variant: {
      type: String,
      default: "gray"
    }
  },
  computed: {
    variantClass() {
      let e = "", t = "", n = "";
      switch (this.type === "light-border" && (n = "border border-current"), this.variant) {
        case "blue":
          this.type === "light-border" || this.type === "light" ? (t = "bg-blue-100", e = "text-blue-500") : this.type === "medium" ? (t = "bg-blue-500", e = "text-white") : this.type === "dark" && (t = "bg-blue-700", e = "text-white");
          break;
        case "green":
          this.type === "light-border" || this.type === "light" ? (t = "bg-green-100", e = "text-green-500") : this.type === "medium" ? (t = "bg-green-500", e = "text-white") : this.type === "dark" && (t = "bg-green-700", e = "text-white");
          break;
        case "teal":
          this.type === "light-border" || this.type === "light" ? (t = "bg-teal-100", e = "text-teal-500") : this.type === "medium" ? (t = "bg-teal-500", e = "text-white") : this.type === "dark" && (t = "bg-teal-700", e = "text-white");
          break;
        case "orange":
          this.type === "light-border" || this.type === "light" ? (t = "bg-orange-100", e = "text-orange-800") : this.type === "medium" ? (t = "bg-orange-500", e = "text-white") : this.type === "dark" && (t = "bg-orange-700", e = "text-white");
          break;
        case "red":
          this.type === "light-border" || this.type === "light" ? (t = "bg-red-100", e = "text-red-500") : this.type === "medium" ? (t = "bg-red-500", e = "text-white") : this.type === "dark" && (t = "bg-red-700", e = "text-white");
          break;
        case "tan":
          this.type === "light-border" || this.type === "light" ? (t = "bg-tan-200", e = "text-tan-900") : this.type === "medium" ? (t = "bg-tan-600", e = "text-gray-800") : this.type === "dark" && (t = "bg-tan-800", e = "text-white");
          break;
        case "yellow":
          this.type === "light-border" || this.type === "light" ? (t = "bg-yellow-100", e = "text-yellow-800") : this.type === "medium" ? (t = "bg-yellow-500", e = "text-gray-800") : this.type === "dark" && (t = "bg-yellow-700", e = "text-white");
          break;
        case "pink":
          this.type === "light-border" || this.type === "light" ? (t = "bg-pink-100", e = "text-pink-500") : this.type === "medium" ? (t = "bg-pink-500", e = "text-white") : this.type === "dark" && (t = "bg-pink-700", e = "text-white");
          break;
        case "purple":
          this.type === "light-border" || this.type === "light" ? (t = "bg-purple-100", e = "text-purple-500") : this.type === "medium" ? (t = "bg-purple-400", e = "text-white") : this.type === "dark" && (t = "bg-purple-600", e = "text-white");
          break;
        case "indigo":
          this.type === "light-border" || this.type === "light" ? (t = "bg-indigo-100", e = "text-indigo-500") : this.type === "medium" ? (t = "bg-indigo-500", e = "text-white") : this.type === "dark" && (t = "bg-indigo-700", e = "text-white");
          break;
        case "gray":
        default:
          this.type === "light-border" || this.type === "light" ? (t = "bg-gray-100", e = "text-gray-500") : this.type === "medium" ? (t = "bg-gray-500", e = "text-white") : this.type === "dark" && (t = "bg-gray-700", e = "text-white");
          break;
      }
      return [e, t, n];
    }
  }
}, ya = {};
var hf = /* @__PURE__ */ y(
  df,
  cf,
  ff,
  !1,
  pf,
  null,
  null,
  null
);
function pf(e) {
  for (let t in ya)
    this[t] = ya[t];
}
const yf = /* @__PURE__ */ function() {
  return hf.exports;
}();
var mf = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("button", {
    class: [t.btnClass, t.variantClass, t.sizeClass, t.outlineClass, t.disabledClass, t.blockClass],
    attrs: {
      "data-id": "sds-button",
      disabled: t.disabled
    },
    on: {
      click: t.onClick
    }
  }, [t._t("default")], 2);
}, vf = [];
const gf = J.extend({
  name: "SdsButton",
  props: {
    variant: { type: String, default: "" },
    size: { type: String, default: "" },
    outline: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  },
  computed: {
    btnClass() {
      return this.variant !== "" || this.size !== "" || this.outline || this.block ? "btn" : "";
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
    sizeClass() {
      switch (this.size) {
        case "sm":
          return "btn-sm";
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
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
}), ma = {};
var wf = /* @__PURE__ */ y(
  gf,
  mf,
  vf,
  !1,
  bf,
  null,
  null,
  null
);
function bf(e) {
  for (let t in ma)
    this[t] = ma[t];
}
const Mf = /* @__PURE__ */ function() {
  return wf.exports;
}();
function z(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function m(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Ut(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ut = function(n) {
    return typeof n;
  } : Ut = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ut(e);
}
function g(e) {
  m(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Ut(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function As(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function ft(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var s = i.getDate();
  return a >= s ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), a), n);
}
function Lf(e, t) {
  m(2, arguments);
  var n = g(e).getTime(), r = z(t);
  return new Date(n + r);
}
var _f = {};
function Ct() {
  return _f;
}
function Rs(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function va(e) {
  m(1, arguments);
  var t = g(e);
  return t.setHours(0, 0, 0, 0), t;
}
function xf(e, t) {
  m(2, arguments);
  var n = z(t);
  return ft(e, n * 12);
}
function Bt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bt = function(n) {
    return typeof n;
  } : Bt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Bt(e);
}
function jr(e) {
  m(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Bt(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var a = g(r);
    (n === void 0 || n < a || isNaN(Number(a))) && (n = a);
  }), n || new Date(NaN);
}
function Qt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qt = function(n) {
    return typeof n;
  } : Qt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qt(e);
}
function Tr(e) {
  m(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Qt(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var a = g(r);
    (n === void 0 || n > a || isNaN(a.getDate())) && (n = a);
  }), n || new Date(NaN);
}
var Cf = 6e4, Sf = 36e5, jf = 1e3;
function ct(e, t) {
  m(2, arguments);
  var n = va(e), r = va(t);
  return n.getTime() === r.getTime();
}
function Ht(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ht = function(n) {
    return typeof n;
  } : Ht = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ht(e);
}
function W(e) {
  return m(1, arguments), e instanceof Date || Ht(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ys(e) {
  if (m(1, arguments), !W(e) && typeof e != "number")
    return !1;
  var t = g(e);
  return !isNaN(Number(t));
}
function ga(e) {
  m(1, arguments);
  var t = g(e);
  return t.setHours(23, 59, 59, 999), t;
}
function wt(e) {
  m(1, arguments);
  var t = g(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Us(e, t) {
  m(2, arguments);
  var n = z(t);
  return Lf(e, -n);
}
var Tf = 864e5;
function Nf(e) {
  m(1, arguments);
  var t = g(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / Tf) + 1;
}
function Mt(e) {
  m(1, arguments);
  var t = 1, n = g(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function Bs(e) {
  m(1, arguments);
  var t = g(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = Mt(r), i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = Mt(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Df(e) {
  m(1, arguments);
  var t = Bs(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Mt(n);
  return r;
}
var kf = 6048e5;
function Qs(e) {
  m(1, arguments);
  var t = g(e), n = Mt(t).getTime() - Df(t).getTime();
  return Math.round(n / kf) + 1;
}
function vt(e, t) {
  var n, r, a, i, s, o, l, u;
  m(1, arguments);
  var c = Ct(), f = z((n = (r = (a = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.weekStartsOn) !== null && a !== void 0 ? a : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = g(e), h = d.getUTCDay(), p = (h < f ? 7 : 0) + h - f;
  return d.setUTCDate(d.getUTCDate() - p), d.setUTCHours(0, 0, 0, 0), d;
}
function Fn(e, t) {
  var n, r, a, i, s, o, l, u;
  m(1, arguments);
  var c = g(e), f = c.getUTCFullYear(), d = Ct(), h = z((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = d.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var p = new Date(0);
  p.setUTCFullYear(f + 1, 0, h), p.setUTCHours(0, 0, 0, 0);
  var v = vt(p, t), b = new Date(0);
  b.setUTCFullYear(f, 0, h), b.setUTCHours(0, 0, 0, 0);
  var w = vt(b, t);
  return c.getTime() >= v.getTime() ? f + 1 : c.getTime() >= w.getTime() ? f : f - 1;
}
function Of(e, t) {
  var n, r, a, i, s, o, l, u;
  m(1, arguments);
  var c = Ct(), f = z((n = (r = (a = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && a !== void 0 ? a : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), d = Fn(e, t), h = new Date(0);
  h.setUTCFullYear(d, 0, f), h.setUTCHours(0, 0, 0, 0);
  var p = vt(h, t);
  return p;
}
var zf = 6048e5;
function Hs(e, t) {
  m(1, arguments);
  var n = g(e), r = vt(n, t).getTime() - Of(n, t).getTime();
  return Math.round(r / zf) + 1;
}
function C(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var If = {
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return C(n === "yy" ? a % 100 : a, n.length);
  },
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : C(r + 1, 2);
  },
  d: function(t, n) {
    return C(t.getUTCDate(), n.length);
  },
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(t, n) {
    return C(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function(t, n) {
    return C(t.getUTCHours(), n.length);
  },
  m: function(t, n) {
    return C(t.getUTCMinutes(), n.length);
  },
  s: function(t, n) {
    return C(t.getUTCSeconds(), n.length);
  },
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), i = Math.floor(a * Math.pow(10, r - 3));
    return C(i, n.length);
  }
};
const ut = If;
var bt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Pf = {
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), i = a > 0 ? a : 1 - a;
      return r.ordinalNumber(i, {
        unit: "year"
      });
    }
    return ut.y(t, n);
  },
  Y: function(t, n, r, a) {
    var i = Fn(t, a), s = i > 0 ? i : 1 - i;
    if (n === "YY") {
      var o = s % 100;
      return C(o, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : C(s, n.length);
  },
  R: function(t, n) {
    var r = Bs(t);
    return C(r, n.length);
  },
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return C(r, n.length);
  },
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return C(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return C(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return ut.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return C(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, n, r, a) {
    var i = Hs(t, a);
    return n === "wo" ? r.ordinalNumber(i, {
      unit: "week"
    }) : C(i, n.length);
  },
  I: function(t, n, r) {
    var a = Qs(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : C(a, n.length);
  },
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : ut.d(t, n);
  },
  D: function(t, n, r) {
    var a = Nf(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : C(a, n.length);
  },
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, n, r, a) {
    var i = t.getUTCDay(), s = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return C(s, 2);
      case "eo":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, n, r, a) {
    var i = t.getUTCDay(), s = (i - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return C(s, n.length);
      case "co":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, n, r) {
    var a = t.getUTCDay(), i = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return C(i, n.length);
      case "io":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, n, r) {
    var a = t.getUTCHours(), i = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a === 12 ? i = bt.noon : a === 0 ? i = bt.midnight : i = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, n, r) {
    var a = t.getUTCHours(), i;
    switch (a >= 17 ? i = bt.evening : a >= 12 ? i = bt.afternoon : a >= 4 ? i = bt.morning : i = bt.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return ut.h(t, n);
  },
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : ut.H(t, n);
  },
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : C(a, n.length);
  },
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : C(a, n.length);
  },
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : ut.m(t, n);
  },
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : ut.s(t, n);
  },
  S: function(t, n) {
    return ut.S(t, n);
  },
  X: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return ba(s);
      case "XXXX":
      case "XX":
        return pt(s);
      case "XXXXX":
      case "XXX":
      default:
        return pt(s, ":");
    }
  },
  x: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "x":
        return ba(s);
      case "xxxx":
      case "xx":
        return pt(s);
      case "xxxxx":
      case "xxx":
      default:
        return pt(s, ":");
    }
  },
  O: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wa(s, ":");
      case "OOOO":
      default:
        return "GMT" + pt(s, ":");
    }
  },
  z: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wa(s, ":");
      case "zzzz":
      default:
        return "GMT" + pt(s, ":");
    }
  },
  t: function(t, n, r, a) {
    var i = a._originalDate || t, s = Math.floor(i.getTime() / 1e3);
    return C(s, n.length);
  },
  T: function(t, n, r, a) {
    var i = a._originalDate || t, s = i.getTime();
    return C(s, n.length);
  }
};
function wa(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), i = r % 60;
  if (i === 0)
    return n + String(a);
  var s = t || "";
  return n + String(a) + s + C(i, 2);
}
function ba(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + C(Math.abs(e) / 60, 2);
  }
  return pt(e, t);
}
function pt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), i = C(Math.floor(a / 60), 2), s = C(a % 60, 2);
  return r + i + n + s;
}
const Ef = Pf;
var Ma = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Fs = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, $f = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
  if (!i)
    return Ma(t, n);
  var s;
  switch (a) {
    case "P":
      s = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      s = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      s = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      s = n.dateTime({
        width: "full"
      });
      break;
  }
  return s.replace("{{date}}", Ma(a, n)).replace("{{time}}", Fs(i, n));
}, Af = {
  p: Fs,
  P: $f
};
const Nr = Af;
var Rf = ["D", "DD"], Yf = ["YY", "YYYY"];
function Gs(e) {
  return Rf.indexOf(e) !== -1;
}
function Vs(e) {
  return Yf.indexOf(e) !== -1;
}
function je(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Uf = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Bf = function(t, n, r) {
  var a, i = Uf[t];
  return typeof i == "string" ? a = i : n === 1 ? a = i.one : a = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Qf = Bf;
function Mr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var Hf = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ff = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Gf = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Vf = {
  date: Mr({
    formats: Hf,
    defaultWidth: "full"
  }),
  time: Mr({
    formats: Ff,
    defaultWidth: "full"
  }),
  dateTime: Mr({
    formats: Gf,
    defaultWidth: "full"
  })
};
const Wf = Vf;
var qf = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jf = function(t, n, r, a) {
  return qf[t];
};
const Xf = Jf;
function Dt(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      a = e.formattingValues[s] || e.formattingValues[i];
    } else {
      var o = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[l] || e.values[o];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[u];
  };
}
var Kf = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Zf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, td = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, ed = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, rd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, nd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ad = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, id = {
  ordinalNumber: ad,
  era: Dt({
    values: Kf,
    defaultWidth: "wide"
  }),
  quarter: Dt({
    values: Zf,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Dt({
    values: td,
    defaultWidth: "wide"
  }),
  day: Dt({
    values: ed,
    defaultWidth: "wide"
  }),
  dayPeriod: Dt({
    values: rd,
    defaultWidth: "wide",
    formattingValues: nd,
    defaultFormattingWidth: "wide"
  })
};
const sd = id;
function kt(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    var s = i[0], o = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(o) ? ld(o, function(f) {
      return f.test(s);
    }) : od(o, function(f) {
      return f.test(s);
    }), u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? n.valueCallback(u) : u;
    var c = t.slice(s.length);
    return {
      value: u,
      rest: c
    };
  };
}
function od(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function ld(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ud(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var o = t.slice(a.length);
    return {
      value: s,
      rest: o
    };
  };
}
var cd = /^(\d+)(th|st|nd|rd)?/i, fd = /\d+/i, dd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, hd = {
  any: [/^b/i, /^(a|c)/i]
}, pd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, md = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, vd = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, gd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, wd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, bd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Md = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ld = {
  ordinalNumber: ud({
    matchPattern: cd,
    parsePattern: fd,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: kt({
    matchPatterns: dd,
    defaultMatchWidth: "wide",
    parsePatterns: hd,
    defaultParseWidth: "any"
  }),
  quarter: kt({
    matchPatterns: pd,
    defaultMatchWidth: "wide",
    parsePatterns: yd,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: kt({
    matchPatterns: md,
    defaultMatchWidth: "wide",
    parsePatterns: vd,
    defaultParseWidth: "any"
  }),
  day: kt({
    matchPatterns: gd,
    defaultMatchWidth: "wide",
    parsePatterns: wd,
    defaultParseWidth: "any"
  }),
  dayPeriod: kt({
    matchPatterns: bd,
    defaultMatchWidth: "any",
    parsePatterns: Md,
    defaultParseWidth: "any"
  })
};
const _d = Ld;
var xd = {
  code: "en-US",
  formatDistance: Qf,
  formatLong: Wf,
  formatRelative: Xf,
  localize: sd,
  match: _d,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ws = xd;
var Cd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jd = /^'([^]*?)'?$/, Td = /''/g, Nd = /[a-zA-Z]/;
function F(e, t, n) {
  var r, a, i, s, o, l, u, c, f, d, h, p, v, b, w, M, x, S;
  m(2, arguments);
  var _ = String(t), j = Ct(), P = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : j.locale) !== null && r !== void 0 ? r : Ws, O = z((i = (s = (o = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (u = n.locale) === null || u === void 0 || (c = u.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && o !== void 0 ? o : j.firstWeekContainsDate) !== null && s !== void 0 ? s : (f = j.locale) === null || f === void 0 || (d = f.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(O >= 1 && O <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = z((h = (p = (v = (b = n == null ? void 0 : n.weekStartsOn) !== null && b !== void 0 ? b : n == null || (w = n.locale) === null || w === void 0 || (M = w.options) === null || M === void 0 ? void 0 : M.weekStartsOn) !== null && v !== void 0 ? v : j.weekStartsOn) !== null && p !== void 0 ? p : (x = j.locale) === null || x === void 0 || (S = x.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(D >= 0 && D <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var R = g(e);
  if (!Ys(R))
    throw new RangeError("Invalid time value");
  var k = Rs(R), B = Us(R, k), G = {
    firstWeekContainsDate: O,
    weekStartsOn: D,
    locale: P,
    _originalDate: R
  }, Q = _.match(Sd).map(function(T) {
    var Y = T[0];
    if (Y === "p" || Y === "P") {
      var tt = Nr[Y];
      return tt(T, P.formatLong);
    }
    return T;
  }).join("").match(Cd).map(function(T) {
    if (T === "''")
      return "'";
    var Y = T[0];
    if (Y === "'")
      return Dd(T);
    var tt = Ef[Y];
    if (tt)
      return !(n != null && n.useAdditionalWeekYearTokens) && Vs(T) && je(T, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && Gs(T) && je(T, t, String(e)), tt(B, T, P.localize, G);
    if (Y.match(Nd))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Y + "`");
    return T;
  }).join("");
  return Q;
}
function Dd(e) {
  var t = e.match(jd);
  return t ? t[1].replace(Td, "'") : e;
}
function kd(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function La(e) {
  m(1, arguments);
  var t = g(e), n = t.getDay();
  return n;
}
function _a(e) {
  m(1, arguments);
  var t = g(e), n = t.getFullYear(), r = t.getMonth(), a = new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function nt(e) {
  m(1, arguments);
  var t = g(e), n = t.getHours();
  return n;
}
function yt(e, t) {
  m(2, arguments);
  var n = g(e), r = g(t);
  return n.getTime() > r.getTime();
}
function Dr(e, t) {
  m(2, arguments);
  var n = g(e), r = g(t);
  return n.getTime() < r.getTime();
}
function kr(e, t) {
  m(2, arguments);
  var n = g(e), r = g(t);
  return n.getTime() === r.getTime();
}
function Ft(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ft = function(n) {
    return typeof n;
  } : Ft = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ft(e);
}
function qs(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Or(e, t);
}
function Or(e, t) {
  return Or = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Or(e, t);
}
function Js(e) {
  var t = zd();
  return function() {
    var r = Te(e), a;
    if (t) {
      var i = Te(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Od(this, a);
  };
}
function Od(e, t) {
  return t && (Ft(t) === "object" || typeof t == "function") ? t : zr(e);
}
function zr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Te(e) {
  return Te = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Te(e);
}
function Gn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vn(e, t, n) {
  return t && xa(e.prototype, t), n && xa(e, n), e;
}
function Ir(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Id = 10, Xs = /* @__PURE__ */ function() {
  function e() {
    Gn(this, e), Ir(this, "subPriority", 0);
  }
  return Vn(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), Pd = /* @__PURE__ */ function(e) {
  qs(n, e);
  var t = Js(n);
  function n(r, a, i, s, o) {
    var l;
    return Gn(this, n), l = t.call(this), l.value = r, l.validateValue = a, l.setValue = i, l.priority = s, o && (l.subPriority = o), l;
  }
  return Vn(n, [{
    key: "validate",
    value: function(a, i) {
      return this.validateValue(a, this.value, i);
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return this.setValue(a, i, this.value, s);
    }
  }]), n;
}(Xs), Ed = /* @__PURE__ */ function(e) {
  qs(n, e);
  var t = Js(n);
  function n() {
    var r;
    Gn(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Ir(zr(r), "priority", Id), Ir(zr(r), "subPriority", -1), r;
  }
  return Vn(n, [{
    key: "set",
    value: function(a, i) {
      if (i.timestampIsSet)
        return a;
      var s = new Date(0);
      return s.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), s.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), s;
    }
  }]), n;
}(Xs);
function $d(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ca(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ad(e, t, n) {
  return t && Ca(e.prototype, t), n && Ca(e, n), e;
}
var L = /* @__PURE__ */ function() {
  function e() {
    $d(this, e);
  }
  return Ad(e, [{
    key: "run",
    value: function(n, r, a, i) {
      var s = this.parse(n, r, a, i);
      return s ? {
        setter: new Pd(s.value, this.validate, this.set, this.priority, this.subPriority),
        rest: s.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, a) {
      return !0;
    }
  }]), e;
}();
function Gt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gt = function(n) {
    return typeof n;
  } : Gt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gt(e);
}
function Rd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Yd(e, t, n) {
  return t && Sa(e.prototype, t), n && Sa(e, n), e;
}
function Ud(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pr(e, t);
}
function Pr(e, t) {
  return Pr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Pr(e, t);
}
function Bd(e) {
  var t = Hd();
  return function() {
    var r = Ne(e), a;
    if (t) {
      var i = Ne(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Qd(this, a);
  };
}
function Qd(e, t) {
  return t && (Gt(t) === "object" || typeof t == "function") ? t : Er(e);
}
function Er(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ne(e) {
  return Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ne(e);
}
function ja(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Fd = /* @__PURE__ */ function(e) {
  Ud(n, e);
  var t = Bd(n);
  function n() {
    var r;
    Rd(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ja(Er(r), "priority", 140), ja(Er(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Yd(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "G":
        case "GG":
        case "GGG":
          return s.era(a, {
            width: "abbreviated"
          }) || s.era(a, {
            width: "narrow"
          });
        case "GGGGG":
          return s.era(a, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return s.era(a, {
            width: "wide"
          }) || s.era(a, {
            width: "abbreviated"
          }) || s.era(a, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return i.era = s, a.setUTCFullYear(s, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L), $ = {
  month: /^(1[0-2]|0?\d)/,
  date: /^(3[0-1]|[0-2]?\d)/,
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  week: /^(5[0-3]|[0-4]?\d)/,
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  hour11h: /^(1[0-1]|0?\d)/,
  hour12h: /^(1[0-2]|0?\d)/,
  minute: /^[0-5]?\d/,
  second: /^[0-5]?\d/,
  singleDigit: /^\d/,
  twoDigits: /^\d{1,2}/,
  threeDigits: /^\d{1,3}/,
  fourDigits: /^\d{1,4}/,
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  twoDigitsSigned: /^-?\d{1,2}/,
  threeDigitsSigned: /^-?\d{1,3}/,
  fourDigitsSigned: /^-?\d{1,4}/
}, et = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function A(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function I(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function rt(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, i = n[3] ? parseInt(n[3], 10) : 0, s = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * Sf + i * Cf + s * jf),
    rest: t.slice(n[0].length)
  };
}
function Ks(e) {
  return I($.anyDigitsSigned, e);
}
function E(e, t) {
  switch (e) {
    case 1:
      return I($.singleDigit, t);
    case 2:
      return I($.twoDigits, t);
    case 3:
      return I($.threeDigits, t);
    case 4:
      return I($.fourDigits, t);
    default:
      return I(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function De(e, t) {
  switch (e) {
    case 1:
      return I($.singleDigitSigned, t);
    case 2:
      return I($.twoDigitsSigned, t);
    case 3:
      return I($.threeDigitsSigned, t);
    case 4:
      return I($.fourDigitsSigned, t);
    default:
      return I(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Wn(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Zs(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var i = r + 50, s = Math.floor(i / 100) * 100, o = e >= i % 100;
    a = e + s - (o ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function to(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Vt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vt = function(n) {
    return typeof n;
  } : Vt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vt(e);
}
function Gd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ta(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vd(e, t, n) {
  return t && Ta(e.prototype, t), n && Ta(e, n), e;
}
function Wd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && $r(e, t);
}
function $r(e, t) {
  return $r = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, $r(e, t);
}
function qd(e) {
  var t = Xd();
  return function() {
    var r = ke(e), a;
    if (t) {
      var i = ke(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Jd(this, a);
  };
}
function Jd(e, t) {
  return t && (Vt(t) === "object" || typeof t == "function") ? t : Ar(e);
}
function Ar(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ke(e) {
  return ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ke(e);
}
function Na(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Kd = /* @__PURE__ */ function(e) {
  Wd(n, e);
  var t = qd(n);
  function n() {
    var r;
    Gd(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Na(Ar(r), "priority", 130), Na(Ar(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Vd(n, [{
    key: "parse",
    value: function(a, i, s) {
      var o = function(u) {
        return {
          year: u,
          isTwoDigitYear: i === "yy"
        };
      };
      switch (i) {
        case "y":
          return A(E(4, a), o);
        case "yo":
          return A(s.ordinalNumber(a, {
            unit: "year"
          }), o);
        default:
          return A(E(i.length, a), o);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      var o = a.getUTCFullYear();
      if (s.isTwoDigitYear) {
        var l = Zs(s.year, o);
        return a.setUTCFullYear(l, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var u = !("era" in i) || i.era === 1 ? s.year : 1 - s.year;
      return a.setUTCFullYear(u, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function Wt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wt = function(n) {
    return typeof n;
  } : Wt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wt(e);
}
function Zd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Da(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function th(e, t, n) {
  return t && Da(e.prototype, t), n && Da(e, n), e;
}
function eh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Rr(e, t);
}
function Rr(e, t) {
  return Rr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Rr(e, t);
}
function rh(e) {
  var t = ah();
  return function() {
    var r = Oe(e), a;
    if (t) {
      var i = Oe(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return nh(this, a);
  };
}
function nh(e, t) {
  return t && (Wt(t) === "object" || typeof t == "function") ? t : Yr(e);
}
function Yr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ah() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Oe(e) {
  return Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Oe(e);
}
function ka(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ih = /* @__PURE__ */ function(e) {
  eh(n, e);
  var t = rh(n);
  function n() {
    var r;
    Zd(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ka(Yr(r), "priority", 130), ka(Yr(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return th(n, [{
    key: "parse",
    value: function(a, i, s) {
      var o = function(u) {
        return {
          year: u,
          isTwoDigitYear: i === "YY"
        };
      };
      switch (i) {
        case "Y":
          return A(E(4, a), o);
        case "Yo":
          return A(s.ordinalNumber(a, {
            unit: "year"
          }), o);
        default:
          return A(E(i.length, a), o);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(a, i, s, o) {
      var l = Fn(a, o);
      if (s.isTwoDigitYear) {
        var u = Zs(s.year, l);
        return a.setUTCFullYear(u, 0, o.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), vt(a, o);
      }
      var c = !("era" in i) || i.era === 1 ? s.year : 1 - s.year;
      return a.setUTCFullYear(c, 0, o.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), vt(a, o);
    }
  }]), n;
}(L);
function qt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qt = function(n) {
    return typeof n;
  } : qt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qt(e);
}
function sh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function oh(e, t, n) {
  return t && Oa(e.prototype, t), n && Oa(e, n), e;
}
function lh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ur(e, t);
}
function Ur(e, t) {
  return Ur = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ur(e, t);
}
function uh(e) {
  var t = fh();
  return function() {
    var r = ze(e), a;
    if (t) {
      var i = ze(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return ch(this, a);
  };
}
function ch(e, t) {
  return t && (qt(t) === "object" || typeof t == "function") ? t : Br(e);
}
function Br(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ze(e) {
  return ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ze(e);
}
function za(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dh = /* @__PURE__ */ function(e) {
  lh(n, e);
  var t = uh(n);
  function n() {
    var r;
    sh(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), za(Br(r), "priority", 130), za(Br(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return oh(n, [{
    key: "parse",
    value: function(a, i) {
      return De(i === "R" ? 4 : i.length, a);
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      var o = new Date(0);
      return o.setUTCFullYear(s, 0, 4), o.setUTCHours(0, 0, 0, 0), Mt(o);
    }
  }]), n;
}(L);
function Jt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jt = function(n) {
    return typeof n;
  } : Jt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jt(e);
}
function hh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ia(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ph(e, t, n) {
  return t && Ia(e.prototype, t), n && Ia(e, n), e;
}
function yh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Qr(e, t);
}
function Qr(e, t) {
  return Qr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Qr(e, t);
}
function mh(e) {
  var t = gh();
  return function() {
    var r = Ie(e), a;
    if (t) {
      var i = Ie(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return vh(this, a);
  };
}
function vh(e, t) {
  return t && (Jt(t) === "object" || typeof t == "function") ? t : Hr(e);
}
function Hr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ie(e) {
  return Ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ie(e);
}
function Pa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wh = /* @__PURE__ */ function(e) {
  yh(n, e);
  var t = mh(n);
  function n() {
    var r;
    hh(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Pa(Hr(r), "priority", 130), Pa(Hr(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return ph(n, [{
    key: "parse",
    value: function(a, i) {
      return De(i === "u" ? 4 : i.length, a);
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCFullYear(s, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function Xt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xt = function(n) {
    return typeof n;
  } : Xt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xt(e);
}
function bh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ea(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Mh(e, t, n) {
  return t && Ea(e.prototype, t), n && Ea(e, n), e;
}
function Lh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fr(e, t);
}
function Fr(e, t) {
  return Fr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Fr(e, t);
}
function _h(e) {
  var t = Ch();
  return function() {
    var r = Pe(e), a;
    if (t) {
      var i = Pe(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return xh(this, a);
  };
}
function xh(e, t) {
  return t && (Xt(t) === "object" || typeof t == "function") ? t : Gr(e);
}
function Gr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ch() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Pe(e) {
  return Pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pe(e);
}
function $a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Sh = /* @__PURE__ */ function(e) {
  Lh(n, e);
  var t = _h(n);
  function n() {
    var r;
    bh(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), $a(Gr(r), "priority", 120), $a(Gr(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Mh(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "Q":
        case "QQ":
          return E(i.length, a);
        case "Qo":
          return s.ordinalNumber(a, {
            unit: "quarter"
          });
        case "QQQ":
          return s.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return s.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return s.quarter(a, {
            width: "wide",
            context: "formatting"
          }) || s.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCMonth((s - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function Kt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kt = function(n) {
    return typeof n;
  } : Kt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kt(e);
}
function jh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Aa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Th(e, t, n) {
  return t && Aa(e.prototype, t), n && Aa(e, n), e;
}
function Nh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Vr(e, t);
}
function Vr(e, t) {
  return Vr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Vr(e, t);
}
function Dh(e) {
  var t = Oh();
  return function() {
    var r = Ee(e), a;
    if (t) {
      var i = Ee(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return kh(this, a);
  };
}
function kh(e, t) {
  return t && (Kt(t) === "object" || typeof t == "function") ? t : Wr(e);
}
function Wr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Oh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ee(e) {
  return Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ee(e);
}
function Ra(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zh = /* @__PURE__ */ function(e) {
  Nh(n, e);
  var t = Dh(n);
  function n() {
    var r;
    jh(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Ra(Wr(r), "priority", 120), Ra(Wr(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Th(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "q":
        case "qq":
          return E(i.length, a);
        case "qo":
          return s.ordinalNumber(a, {
            unit: "quarter"
          });
        case "qqq":
          return s.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || s.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return s.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return s.quarter(a, {
            width: "wide",
            context: "standalone"
          }) || s.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || s.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCMonth((s - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function Zt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zt = function(n) {
    return typeof n;
  } : Zt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zt(e);
}
function Ih(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ya(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ph(e, t, n) {
  return t && Ya(e.prototype, t), n && Ya(e, n), e;
}
function Eh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qr(e, t);
}
function qr(e, t) {
  return qr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, qr(e, t);
}
function $h(e) {
  var t = Rh();
  return function() {
    var r = $e(e), a;
    if (t) {
      var i = $e(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Ah(this, a);
  };
}
function Ah(e, t) {
  return t && (Zt(t) === "object" || typeof t == "function") ? t : Jr(e);
}
function Jr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Rh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $e(e) {
  return $e = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, $e(e);
}
function Ua(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yh = /* @__PURE__ */ function(e) {
  Eh(n, e);
  var t = $h(n);
  function n() {
    var r;
    Ih(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Ua(Jr(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), Ua(Jr(r), "priority", 110), r;
  }
  return Ph(n, [{
    key: "parse",
    value: function(a, i, s) {
      var o = function(u) {
        return u - 1;
      };
      switch (i) {
        case "M":
          return A(I($.month, a), o);
        case "MM":
          return A(E(2, a), o);
        case "Mo":
          return A(s.ordinalNumber(a, {
            unit: "month"
          }), o);
        case "MMM":
          return s.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return s.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return s.month(a, {
            width: "wide",
            context: "formatting"
          }) || s.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.month(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCMonth(s, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function te(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? te = function(n) {
    return typeof n;
  } : te = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, te(e);
}
function Uh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ba(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Bh(e, t, n) {
  return t && Ba(e.prototype, t), n && Ba(e, n), e;
}
function Qh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Xr(e, t);
}
function Xr(e, t) {
  return Xr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Xr(e, t);
}
function Hh(e) {
  var t = Gh();
  return function() {
    var r = Ae(e), a;
    if (t) {
      var i = Ae(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Fh(this, a);
  };
}
function Fh(e, t) {
  return t && (te(t) === "object" || typeof t == "function") ? t : Kr(e);
}
function Kr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gh() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ae(e) {
  return Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ae(e);
}
function Qa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Vh = /* @__PURE__ */ function(e) {
  Qh(n, e);
  var t = Hh(n);
  function n() {
    var r;
    Uh(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Qa(Kr(r), "priority", 110), Qa(Kr(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Bh(n, [{
    key: "parse",
    value: function(a, i, s) {
      var o = function(u) {
        return u - 1;
      };
      switch (i) {
        case "L":
          return A(I($.month, a), o);
        case "LL":
          return A(E(2, a), o);
        case "Lo":
          return A(s.ordinalNumber(a, {
            unit: "month"
          }), o);
        case "LLL":
          return s.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || s.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return s.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return s.month(a, {
            width: "wide",
            context: "standalone"
          }) || s.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || s.month(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCMonth(s, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function Wh(e, t, n) {
  m(2, arguments);
  var r = g(e), a = z(t), i = Hs(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - i * 7), r;
}
function ee(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ee = function(n) {
    return typeof n;
  } : ee = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ee(e);
}
function qh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ha(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Jh(e, t, n) {
  return t && Ha(e.prototype, t), n && Ha(e, n), e;
}
function Xh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Zr(e, t);
}
function Zr(e, t) {
  return Zr = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Zr(e, t);
}
function Kh(e) {
  var t = tp();
  return function() {
    var r = Re(e), a;
    if (t) {
      var i = Re(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Zh(this, a);
  };
}
function Zh(e, t) {
  return t && (ee(t) === "object" || typeof t == "function") ? t : tn(e);
}
function tn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Re(e) {
  return Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Re(e);
}
function Fa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ep = /* @__PURE__ */ function(e) {
  Xh(n, e);
  var t = Kh(n);
  function n() {
    var r;
    qh(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Fa(tn(r), "priority", 100), Fa(tn(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Jh(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "w":
          return I($.week, a);
        case "wo":
          return s.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(a, i, s, o) {
      return vt(Wh(a, s, o), o);
    }
  }]), n;
}(L);
function rp(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t), a = Qs(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function re(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? re = function(n) {
    return typeof n;
  } : re = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, re(e);
}
function np(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ga(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ap(e, t, n) {
  return t && Ga(e.prototype, t), n && Ga(e, n), e;
}
function ip(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && en(e, t);
}
function en(e, t) {
  return en = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, en(e, t);
}
function sp(e) {
  var t = lp();
  return function() {
    var r = Ye(e), a;
    if (t) {
      var i = Ye(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return op(this, a);
  };
}
function op(e, t) {
  return t && (re(t) === "object" || typeof t == "function") ? t : rn(e);
}
function rn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ye(e) {
  return Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ye(e);
}
function Va(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var up = /* @__PURE__ */ function(e) {
  ip(n, e);
  var t = sp(n);
  function n() {
    var r;
    np(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Va(rn(r), "priority", 100), Va(rn(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return ap(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "I":
          return I($.week, a);
        case "Io":
          return s.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return Mt(rp(a, s));
    }
  }]), n;
}(L);
function ne(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ne = function(n) {
    return typeof n;
  } : ne = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ne(e);
}
function cp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fp(e, t, n) {
  return t && Wa(e.prototype, t), n && Wa(e, n), e;
}
function dp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && nn(e, t);
}
function nn(e, t) {
  return nn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, nn(e, t);
}
function hp(e) {
  var t = yp();
  return function() {
    var r = Ue(e), a;
    if (t) {
      var i = Ue(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return pp(this, a);
  };
}
function pp(e, t) {
  return t && (ne(t) === "object" || typeof t == "function") ? t : ae(e);
}
function ae(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ue(e) {
  return Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ue(e);
}
function Lr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mp = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], vp = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gp = /* @__PURE__ */ function(e) {
  dp(n, e);
  var t = hp(n);
  function n() {
    var r;
    cp(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Lr(ae(r), "priority", 90), Lr(ae(r), "subPriority", 1), Lr(ae(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return fp(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "d":
          return I($.date, a);
        case "do":
          return s.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      var s = a.getUTCFullYear(), o = to(s), l = a.getUTCMonth();
      return o ? i >= 1 && i <= vp[l] : i >= 1 && i <= mp[l];
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCDate(s), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function ie(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ie = function(n) {
    return typeof n;
  } : ie = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ie(e);
}
function wp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qa(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function bp(e, t, n) {
  return t && qa(e.prototype, t), n && qa(e, n), e;
}
function Mp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && an(e, t);
}
function an(e, t) {
  return an = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, an(e, t);
}
function Lp(e) {
  var t = xp();
  return function() {
    var r = Be(e), a;
    if (t) {
      var i = Be(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return _p(this, a);
  };
}
function _p(e, t) {
  return t && (ie(t) === "object" || typeof t == "function") ? t : se(e);
}
function se(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Be(e) {
  return Be = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Be(e);
}
function _r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Cp = /* @__PURE__ */ function(e) {
  Mp(n, e);
  var t = Lp(n);
  function n() {
    var r;
    wp(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), _r(se(r), "priority", 90), _r(se(r), "subpriority", 1), _r(se(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return bp(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "D":
        case "DD":
          return I($.dayOfYear, a);
        case "Do":
          return s.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      var s = a.getUTCFullYear(), o = to(s);
      return o ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCMonth(0, s), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function qn(e, t, n) {
  var r, a, i, s, o, l, u, c;
  m(2, arguments);
  var f = Ct(), d = z((r = (a = (i = (s = n == null ? void 0 : n.weekStartsOn) !== null && s !== void 0 ? s : n == null || (o = n.locale) === null || o === void 0 || (l = o.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && i !== void 0 ? i : f.weekStartsOn) !== null && a !== void 0 ? a : (u = f.locale) === null || u === void 0 || (c = u.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = g(e), p = z(t), v = h.getUTCDay(), b = p % 7, w = (b + 7) % 7, M = (w < d ? 7 : 0) + p - v;
  return h.setUTCDate(h.getUTCDate() + M), h;
}
function oe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? oe = function(n) {
    return typeof n;
  } : oe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, oe(e);
}
function Sp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ja(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jp(e, t, n) {
  return t && Ja(e.prototype, t), n && Ja(e, n), e;
}
function Tp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && sn(e, t);
}
function sn(e, t) {
  return sn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, sn(e, t);
}
function Np(e) {
  var t = kp();
  return function() {
    var r = Qe(e), a;
    if (t) {
      var i = Qe(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Dp(this, a);
  };
}
function Dp(e, t) {
  return t && (oe(t) === "object" || typeof t == "function") ? t : on(e);
}
function on(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qe(e) {
  return Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qe(e);
}
function Xa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Op = /* @__PURE__ */ function(e) {
  Tp(n, e);
  var t = Np(n);
  function n() {
    var r;
    Sp(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Xa(on(r), "priority", 90), Xa(on(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return jp(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "E":
        case "EE":
        case "EEE":
          return s.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return s.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return s.day(a, {
            width: "wide",
            context: "formatting"
          }) || s.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, s, o) {
      return a = qn(a, s, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function le(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? le = function(n) {
    return typeof n;
  } : le = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, le(e);
}
function zp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ka(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ip(e, t, n) {
  return t && Ka(e.prototype, t), n && Ka(e, n), e;
}
function Pp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ln(e, t);
}
function ln(e, t) {
  return ln = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ln(e, t);
}
function Ep(e) {
  var t = Ap();
  return function() {
    var r = He(e), a;
    if (t) {
      var i = He(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return $p(this, a);
  };
}
function $p(e, t) {
  return t && (le(t) === "object" || typeof t == "function") ? t : un(e);
}
function un(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ap() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function He(e) {
  return He = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, He(e);
}
function Za(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Rp = /* @__PURE__ */ function(e) {
  Pp(n, e);
  var t = Ep(n);
  function n() {
    var r;
    zp(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Za(un(r), "priority", 90), Za(un(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return Ip(n, [{
    key: "parse",
    value: function(a, i, s, o) {
      var l = function(c) {
        var f = Math.floor((c - 1) / 7) * 7;
        return (c + o.weekStartsOn + 6) % 7 + f;
      };
      switch (i) {
        case "e":
        case "ee":
          return A(E(i.length, a), l);
        case "eo":
          return A(s.ordinalNumber(a, {
            unit: "day"
          }), l);
        case "eee":
          return s.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return s.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return s.day(a, {
            width: "wide",
            context: "formatting"
          }) || s.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, s, o) {
      return a = qn(a, s, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function ue(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ue = function(n) {
    return typeof n;
  } : ue = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ue(e);
}
function Yp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ti(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Up(e, t, n) {
  return t && ti(e.prototype, t), n && ti(e, n), e;
}
function Bp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && cn(e, t);
}
function cn(e, t) {
  return cn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, cn(e, t);
}
function Qp(e) {
  var t = Fp();
  return function() {
    var r = Fe(e), a;
    if (t) {
      var i = Fe(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Hp(this, a);
  };
}
function Hp(e, t) {
  return t && (ue(t) === "object" || typeof t == "function") ? t : fn(e);
}
function fn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fe(e) {
  return Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fe(e);
}
function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gp = /* @__PURE__ */ function(e) {
  Bp(n, e);
  var t = Qp(n);
  function n() {
    var r;
    Yp(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ei(fn(r), "priority", 90), ei(fn(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Up(n, [{
    key: "parse",
    value: function(a, i, s, o) {
      var l = function(c) {
        var f = Math.floor((c - 1) / 7) * 7;
        return (c + o.weekStartsOn + 6) % 7 + f;
      };
      switch (i) {
        case "c":
        case "cc":
          return A(E(i.length, a), l);
        case "co":
          return A(s.ordinalNumber(a, {
            unit: "day"
          }), l);
        case "ccc":
          return s.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || s.day(a, {
            width: "short",
            context: "standalone"
          }) || s.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return s.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return s.day(a, {
            width: "short",
            context: "standalone"
          }) || s.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return s.day(a, {
            width: "wide",
            context: "standalone"
          }) || s.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || s.day(a, {
            width: "short",
            context: "standalone"
          }) || s.day(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(a, i, s, o) {
      return a = qn(a, s, o), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function Vp(e, t) {
  m(2, arguments);
  var n = z(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = g(e), i = a.getUTCDay(), s = n % 7, o = (s + 7) % 7, l = (o < r ? 7 : 0) + n - i;
  return a.setUTCDate(a.getUTCDate() + l), a;
}
function ce(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ce = function(n) {
    return typeof n;
  } : ce = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ce(e);
}
function Wp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ri(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function qp(e, t, n) {
  return t && ri(e.prototype, t), n && ri(e, n), e;
}
function Jp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && dn(e, t);
}
function dn(e, t) {
  return dn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, dn(e, t);
}
function Xp(e) {
  var t = Zp();
  return function() {
    var r = Ge(e), a;
    if (t) {
      var i = Ge(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Kp(this, a);
  };
}
function Kp(e, t) {
  return t && (ce(t) === "object" || typeof t == "function") ? t : hn(e);
}
function hn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ge(e) {
  return Ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ge(e);
}
function ni(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ty = /* @__PURE__ */ function(e) {
  Jp(n, e);
  var t = Xp(n);
  function n() {
    var r;
    Wp(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ni(hn(r), "priority", 90), ni(hn(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return qp(n, [{
    key: "parse",
    value: function(a, i, s) {
      var o = function(u) {
        return u === 0 ? 7 : u;
      };
      switch (i) {
        case "i":
        case "ii":
          return E(i.length, a);
        case "io":
          return s.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return A(s.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          }), o);
        case "iiiii":
          return A(s.day(a, {
            width: "narrow",
            context: "formatting"
          }), o);
        case "iiiiii":
          return A(s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          }), o);
        case "iiii":
        default:
          return A(s.day(a, {
            width: "wide",
            context: "formatting"
          }) || s.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(a, {
            width: "short",
            context: "formatting"
          }) || s.day(a, {
            width: "narrow",
            context: "formatting"
          }), o);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 7;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a = Vp(a, s), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}(L);
function fe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fe = function(n) {
    return typeof n;
  } : fe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fe(e);
}
function ey(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ry(e, t, n) {
  return t && ai(e.prototype, t), n && ai(e, n), e;
}
function ny(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && pn(e, t);
}
function pn(e, t) {
  return pn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, pn(e, t);
}
function ay(e) {
  var t = sy();
  return function() {
    var r = Ve(e), a;
    if (t) {
      var i = Ve(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return iy(this, a);
  };
}
function iy(e, t) {
  return t && (fe(t) === "object" || typeof t == "function") ? t : yn(e);
}
function yn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ve(e) {
  return Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ve(e);
}
function ii(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var oy = /* @__PURE__ */ function(e) {
  ny(n, e);
  var t = ay(n);
  function n() {
    var r;
    ey(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ii(yn(r), "priority", 80), ii(yn(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return ry(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "a":
        case "aa":
        case "aaa":
          return s.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return s.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCHours(Wn(s), 0, 0, 0), a;
    }
  }]), n;
}(L);
function de(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? de = function(n) {
    return typeof n;
  } : de = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, de(e);
}
function ly(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function si(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function uy(e, t, n) {
  return t && si(e.prototype, t), n && si(e, n), e;
}
function cy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mn(e, t);
}
function mn(e, t) {
  return mn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mn(e, t);
}
function fy(e) {
  var t = hy();
  return function() {
    var r = We(e), a;
    if (t) {
      var i = We(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return dy(this, a);
  };
}
function dy(e, t) {
  return t && (de(t) === "object" || typeof t == "function") ? t : vn(e);
}
function vn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function We(e) {
  return We = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, We(e);
}
function oi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var py = /* @__PURE__ */ function(e) {
  cy(n, e);
  var t = fy(n);
  function n() {
    var r;
    ly(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), oi(vn(r), "priority", 80), oi(vn(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return uy(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "b":
        case "bb":
        case "bbb":
          return s.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return s.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCHours(Wn(s), 0, 0, 0), a;
    }
  }]), n;
}(L);
function he(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? he = function(n) {
    return typeof n;
  } : he = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, he(e);
}
function yy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function my(e, t, n) {
  return t && li(e.prototype, t), n && li(e, n), e;
}
function vy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && gn(e, t);
}
function gn(e, t) {
  return gn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, gn(e, t);
}
function gy(e) {
  var t = by();
  return function() {
    var r = qe(e), a;
    if (t) {
      var i = qe(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return wy(this, a);
  };
}
function wy(e, t) {
  return t && (he(t) === "object" || typeof t == "function") ? t : wn(e);
}
function wn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function by() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qe(e) {
  return qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qe(e);
}
function ui(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var My = /* @__PURE__ */ function(e) {
  vy(n, e);
  var t = gy(n);
  function n() {
    var r;
    yy(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ui(wn(r), "priority", 80), ui(wn(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return my(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "B":
        case "BB":
        case "BBB":
          return s.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return s.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCHours(Wn(s), 0, 0, 0), a;
    }
  }]), n;
}(L);
function pe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pe = function(n) {
    return typeof n;
  } : pe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, pe(e);
}
function Ly(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ci(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _y(e, t, n) {
  return t && ci(e.prototype, t), n && ci(e, n), e;
}
function xy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bn(e, t);
}
function bn(e, t) {
  return bn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bn(e, t);
}
function Cy(e) {
  var t = jy();
  return function() {
    var r = Je(e), a;
    if (t) {
      var i = Je(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Sy(this, a);
  };
}
function Sy(e, t) {
  return t && (pe(t) === "object" || typeof t == "function") ? t : Mn(e);
}
function Mn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Je(e) {
  return Je = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Je(e);
}
function fi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ty = /* @__PURE__ */ function(e) {
  xy(n, e);
  var t = Cy(n);
  function n() {
    var r;
    Ly(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), fi(Mn(r), "priority", 70), fi(Mn(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return _y(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "h":
          return I($.hour12h, a);
        case "ho":
          return s.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 12;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      var o = a.getUTCHours() >= 12;
      return o && s < 12 ? a.setUTCHours(s + 12, 0, 0, 0) : !o && s === 12 ? a.setUTCHours(0, 0, 0, 0) : a.setUTCHours(s, 0, 0, 0), a;
    }
  }]), n;
}(L);
function ye(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ye = function(n) {
    return typeof n;
  } : ye = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ye(e);
}
function Ny(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dy(e, t, n) {
  return t && di(e.prototype, t), n && di(e, n), e;
}
function ky(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ln(e, t);
}
function Ln(e, t) {
  return Ln = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ln(e, t);
}
function Oy(e) {
  var t = Iy();
  return function() {
    var r = Xe(e), a;
    if (t) {
      var i = Xe(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return zy(this, a);
  };
}
function zy(e, t) {
  return t && (ye(t) === "object" || typeof t == "function") ? t : _n(e);
}
function _n(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Iy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Xe(e) {
  return Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xe(e);
}
function hi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Py = /* @__PURE__ */ function(e) {
  ky(n, e);
  var t = Oy(n);
  function n() {
    var r;
    Ny(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), hi(_n(r), "priority", 70), hi(_n(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return Dy(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "H":
          return I($.hour23h, a);
        case "Ho":
          return s.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 23;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCHours(s, 0, 0, 0), a;
    }
  }]), n;
}(L);
function me(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? me = function(n) {
    return typeof n;
  } : me = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, me(e);
}
function Ey(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $y(e, t, n) {
  return t && pi(e.prototype, t), n && pi(e, n), e;
}
function Ay(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xn(e, t);
}
function xn(e, t) {
  return xn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, xn(e, t);
}
function Ry(e) {
  var t = Uy();
  return function() {
    var r = Ke(e), a;
    if (t) {
      var i = Ke(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Yy(this, a);
  };
}
function Yy(e, t) {
  return t && (me(t) === "object" || typeof t == "function") ? t : Cn(e);
}
function Cn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Uy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ke(e) {
  return Ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ke(e);
}
function yi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var By = /* @__PURE__ */ function(e) {
  Ay(n, e);
  var t = Ry(n);
  function n() {
    var r;
    Ey(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), yi(Cn(r), "priority", 70), yi(Cn(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return $y(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "K":
          return I($.hour11h, a);
        case "Ko":
          return s.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      var o = a.getUTCHours() >= 12;
      return o && s < 12 ? a.setUTCHours(s + 12, 0, 0, 0) : a.setUTCHours(s, 0, 0, 0), a;
    }
  }]), n;
}(L);
function ve(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ve = function(n) {
    return typeof n;
  } : ve = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ve(e);
}
function Qy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hy(e, t, n) {
  return t && mi(e.prototype, t), n && mi(e, n), e;
}
function Fy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Sn(e, t);
}
function Sn(e, t) {
  return Sn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Sn(e, t);
}
function Gy(e) {
  var t = Wy();
  return function() {
    var r = Ze(e), a;
    if (t) {
      var i = Ze(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return Vy(this, a);
  };
}
function Vy(e, t) {
  return t && (ve(t) === "object" || typeof t == "function") ? t : jn(e);
}
function jn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ze(e) {
  return Ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ze(e);
}
function vi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qy = /* @__PURE__ */ function(e) {
  Fy(n, e);
  var t = Gy(n);
  function n() {
    var r;
    Qy(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), vi(jn(r), "priority", 70), vi(jn(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Hy(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "k":
          return I($.hour24h, a);
        case "ko":
          return s.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 1 && i <= 24;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      var o = s <= 24 ? s % 24 : s;
      return a.setUTCHours(o, 0, 0, 0), a;
    }
  }]), n;
}(L);
function ge(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ge = function(n) {
    return typeof n;
  } : ge = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ge(e);
}
function Jy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xy(e, t, n) {
  return t && gi(e.prototype, t), n && gi(e, n), e;
}
function Ky(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Tn(e, t);
}
function Tn(e, t) {
  return Tn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Tn(e, t);
}
function Zy(e) {
  var t = e0();
  return function() {
    var r = tr(e), a;
    if (t) {
      var i = tr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return t0(this, a);
  };
}
function t0(e, t) {
  return t && (ge(t) === "object" || typeof t == "function") ? t : Nn(e);
}
function Nn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function e0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function tr(e) {
  return tr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, tr(e);
}
function wi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var r0 = /* @__PURE__ */ function(e) {
  Ky(n, e);
  var t = Zy(n);
  function n() {
    var r;
    Jy(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), wi(Nn(r), "priority", 60), wi(Nn(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Xy(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "m":
          return I($.minute, a);
        case "mo":
          return s.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCMinutes(s, 0, 0), a;
    }
  }]), n;
}(L);
function we(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? we = function(n) {
    return typeof n;
  } : we = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, we(e);
}
function n0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function a0(e, t, n) {
  return t && bi(e.prototype, t), n && bi(e, n), e;
}
function i0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Dn(e, t);
}
function Dn(e, t) {
  return Dn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Dn(e, t);
}
function s0(e) {
  var t = l0();
  return function() {
    var r = er(e), a;
    if (t) {
      var i = er(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return o0(this, a);
  };
}
function o0(e, t) {
  return t && (we(t) === "object" || typeof t == "function") ? t : kn(e);
}
function kn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function l0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function er(e) {
  return er = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, er(e);
}
function Mi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var u0 = /* @__PURE__ */ function(e) {
  i0(n, e);
  var t = s0(n);
  function n() {
    var r;
    n0(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Mi(kn(r), "priority", 50), Mi(kn(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return a0(n, [{
    key: "parse",
    value: function(a, i, s) {
      switch (i) {
        case "s":
          return I($.second, a);
        case "so":
          return s.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return E(i.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCSeconds(s, 0), a;
    }
  }]), n;
}(L);
function be(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? be = function(n) {
    return typeof n;
  } : be = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, be(e);
}
function c0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Li(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function f0(e, t, n) {
  return t && Li(e.prototype, t), n && Li(e, n), e;
}
function d0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && On(e, t);
}
function On(e, t) {
  return On = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, On(e, t);
}
function h0(e) {
  var t = y0();
  return function() {
    var r = rr(e), a;
    if (t) {
      var i = rr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return p0(this, a);
  };
}
function p0(e, t) {
  return t && (be(t) === "object" || typeof t == "function") ? t : zn(e);
}
function zn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rr(e) {
  return rr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, rr(e);
}
function _i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var m0 = /* @__PURE__ */ function(e) {
  d0(n, e);
  var t = h0(n);
  function n() {
    var r;
    c0(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), _i(zn(r), "priority", 30), _i(zn(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return f0(n, [{
    key: "parse",
    value: function(a, i) {
      var s = function(l) {
        return Math.floor(l * Math.pow(10, -i.length + 3));
      };
      return A(E(i.length, a), s);
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return a.setUTCMilliseconds(s), a;
    }
  }]), n;
}(L);
function Me(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Me = function(n) {
    return typeof n;
  } : Me = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Me(e);
}
function v0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function g0(e, t, n) {
  return t && xi(e.prototype, t), n && xi(e, n), e;
}
function w0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && In(e, t);
}
function In(e, t) {
  return In = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, In(e, t);
}
function b0(e) {
  var t = L0();
  return function() {
    var r = nr(e), a;
    if (t) {
      var i = nr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return M0(this, a);
  };
}
function M0(e, t) {
  return t && (Me(t) === "object" || typeof t == "function") ? t : Pn(e);
}
function Pn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function L0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function nr(e) {
  return nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, nr(e);
}
function Ci(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var _0 = /* @__PURE__ */ function(e) {
  w0(n, e);
  var t = b0(n);
  function n() {
    var r;
    v0(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Ci(Pn(r), "priority", 10), Ci(Pn(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return g0(n, [{
    key: "parse",
    value: function(a, i) {
      switch (i) {
        case "X":
          return rt(et.basicOptionalMinutes, a);
        case "XX":
          return rt(et.basic, a);
        case "XXXX":
          return rt(et.basicOptionalSeconds, a);
        case "XXXXX":
          return rt(et.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return rt(et.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return i.timestampIsSet ? a : new Date(a.getTime() - s);
    }
  }]), n;
}(L);
function Le(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Le = function(n) {
    return typeof n;
  } : Le = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Le(e);
}
function x0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Si(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function C0(e, t, n) {
  return t && Si(e.prototype, t), n && Si(e, n), e;
}
function S0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && En(e, t);
}
function En(e, t) {
  return En = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, En(e, t);
}
function j0(e) {
  var t = N0();
  return function() {
    var r = ar(e), a;
    if (t) {
      var i = ar(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return T0(this, a);
  };
}
function T0(e, t) {
  return t && (Le(t) === "object" || typeof t == "function") ? t : $n(e);
}
function $n(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function N0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ar(e) {
  return ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ar(e);
}
function ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var D0 = /* @__PURE__ */ function(e) {
  S0(n, e);
  var t = j0(n);
  function n() {
    var r;
    x0(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ji($n(r), "priority", 10), ji($n(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return C0(n, [{
    key: "parse",
    value: function(a, i) {
      switch (i) {
        case "x":
          return rt(et.basicOptionalMinutes, a);
        case "xx":
          return rt(et.basic, a);
        case "xxxx":
          return rt(et.basicOptionalSeconds, a);
        case "xxxxx":
          return rt(et.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return rt(et.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return i.timestampIsSet ? a : new Date(a.getTime() - s);
    }
  }]), n;
}(L);
function _e(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _e = function(n) {
    return typeof n;
  } : _e = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _e(e);
}
function k0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ti(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function O0(e, t, n) {
  return t && Ti(e.prototype, t), n && Ti(e, n), e;
}
function z0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && An(e, t);
}
function An(e, t) {
  return An = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, An(e, t);
}
function I0(e) {
  var t = E0();
  return function() {
    var r = ir(e), a;
    if (t) {
      var i = ir(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return P0(this, a);
  };
}
function P0(e, t) {
  return t && (_e(t) === "object" || typeof t == "function") ? t : Rn(e);
}
function Rn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function E0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ir(e) {
  return ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ir(e);
}
function Ni(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $0 = /* @__PURE__ */ function(e) {
  z0(n, e);
  var t = I0(n);
  function n() {
    var r;
    k0(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), Ni(Rn(r), "priority", 40), Ni(Rn(r), "incompatibleTokens", "*"), r;
  }
  return O0(n, [{
    key: "parse",
    value: function(a) {
      return Ks(a);
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return [new Date(s * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(L);
function xe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xe = function(n) {
    return typeof n;
  } : xe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, xe(e);
}
function A0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Di(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function R0(e, t, n) {
  return t && Di(e.prototype, t), n && Di(e, n), e;
}
function Y0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Yn(e, t);
}
function Yn(e, t) {
  return Yn = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Yn(e, t);
}
function U0(e) {
  var t = Q0();
  return function() {
    var r = sr(e), a;
    if (t) {
      var i = sr(this).constructor;
      a = Reflect.construct(r, arguments, i);
    } else
      a = r.apply(this, arguments);
    return B0(this, a);
  };
}
function B0(e, t) {
  return t && (xe(t) === "object" || typeof t == "function") ? t : Un(e);
}
function Un(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Q0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function sr(e) {
  return sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, sr(e);
}
function ki(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var H0 = /* @__PURE__ */ function(e) {
  Y0(n, e);
  var t = U0(n);
  function n() {
    var r;
    A0(this, n);
    for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = t.call.apply(t, [this].concat(i)), ki(Un(r), "priority", 20), ki(Un(r), "incompatibleTokens", "*"), r;
  }
  return R0(n, [{
    key: "parse",
    value: function(a) {
      return Ks(a);
    }
  }, {
    key: "set",
    value: function(a, i, s) {
      return [new Date(s), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}(L), F0 = {
  G: new Fd(),
  y: new Kd(),
  Y: new ih(),
  R: new dh(),
  u: new wh(),
  Q: new Sh(),
  q: new zh(),
  M: new Yh(),
  L: new Vh(),
  w: new ep(),
  I: new up(),
  d: new gp(),
  D: new Cp(),
  E: new Op(),
  e: new Rp(),
  c: new Gp(),
  i: new ty(),
  a: new oy(),
  b: new py(),
  B: new My(),
  h: new Ty(),
  H: new Py(),
  K: new By(),
  k: new qy(),
  m: new r0(),
  s: new u0(),
  S: new m0(),
  X: new _0(),
  x: new D0(),
  t: new $0(),
  T: new H0()
};
function Ce(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ce = function(n) {
    return typeof n;
  } : Ce = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ce(e);
}
function Oi(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = G0(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, s = !1, o;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var u = n.next();
    return i = u.done, u;
  }, e: function(u) {
    s = !0, o = u;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (s)
        throw o;
    }
  } };
}
function G0(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return zi(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zi(e, t);
  }
}
function zi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var V0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, W0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, q0 = /^'([^]*?)'?$/, J0 = /''/g, X0 = /\S/, K0 = /[a-zA-Z]/;
function xr(e, t, n, r) {
  var a, i, s, o, l, u, c, f, d, h, p, v, b, w, M, x, S, _;
  m(3, arguments);
  var j = String(e), P = String(t), O = Ct(), D = (a = (i = r == null ? void 0 : r.locale) !== null && i !== void 0 ? i : O.locale) !== null && a !== void 0 ? a : Ws;
  if (!D.match)
    throw new RangeError("locale must contain match property");
  var R = z((s = (o = (l = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && l !== void 0 ? l : O.firstWeekContainsDate) !== null && o !== void 0 ? o : (d = O.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && s !== void 0 ? s : 1);
  if (!(R >= 1 && R <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var k = z((p = (v = (b = (w = r == null ? void 0 : r.weekStartsOn) !== null && w !== void 0 ? w : r == null || (M = r.locale) === null || M === void 0 || (x = M.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && b !== void 0 ? b : O.weekStartsOn) !== null && v !== void 0 ? v : (S = O.locale) === null || S === void 0 || (_ = S.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && p !== void 0 ? p : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (P === "")
    return j === "" ? g(n) : new Date(NaN);
  var B = {
    firstWeekContainsDate: R,
    weekStartsOn: k,
    locale: D
  }, G = [new Ed()], Q = P.match(W0).map(function(U) {
    var N = U[0];
    if (N in Nr) {
      var X = Nr[N];
      return X(U, D.formatLong);
    }
    return U;
  }).join("").match(V0), T = [], Y = Oi(Q), tt;
  try {
    var mr = function() {
      var N = tt.value;
      !(r != null && r.useAdditionalWeekYearTokens) && Vs(N) && je(N, P, e), !(r != null && r.useAdditionalDayOfYearTokens) && Gs(N) && je(N, P, e);
      var X = N[0], Rt = F0[X];
      if (Rt) {
        var aa = Rt.incompatibleTokens;
        if (Array.isArray(aa)) {
          var ia = T.find(function(sa) {
            return aa.includes(sa.token) || sa.token === X;
          });
          if (ia)
            throw new RangeError("The format string mustn't contain `".concat(ia.fullToken, "` and `").concat(N, "` at the same time"));
        } else if (Rt.incompatibleTokens === "*" && T.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(N, "` and any other token at the same time"));
        T.push({
          token: X,
          fullToken: N
        });
        var gr = Rt.run(j, N, D.match, B);
        if (!gr)
          return {
            v: new Date(NaN)
          };
        G.push(gr.setter), j = gr.rest;
      } else {
        if (X.match(K0))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + X + "`");
        if (N === "''" ? N = "'" : X === "'" && (N = Z0(N)), j.indexOf(N) === 0)
          j = j.slice(N.length);
        else
          return {
            v: new Date(NaN)
          };
      }
    };
    for (Y.s(); !(tt = Y.n()).done; ) {
      var Et = mr();
      if (Ce(Et) === "object")
        return Et.v;
    }
  } catch (U) {
    Y.e(U);
  } finally {
    Y.f();
  }
  if (j.length > 0 && X0.test(j))
    return new Date(NaN);
  var Mo = G.map(function(U) {
    return U.priority;
  }).sort(function(U, N) {
    return N - U;
  }).filter(function(U, N, X) {
    return X.indexOf(U) === N;
  }).map(function(U) {
    return G.filter(function(N) {
      return N.priority === U;
    }).sort(function(N, X) {
      return X.subPriority - N.subPriority;
    });
  }).map(function(U) {
    return U[0];
  }), vr = g(n);
  if (isNaN(vr.getTime()))
    return new Date(NaN);
  var Tt = Us(vr, Rs(vr)), ea = {}, $t = Oi(Mo), ra;
  try {
    for ($t.s(); !(ra = $t.n()).done; ) {
      var na = ra.value;
      if (!na.validate(Tt, B))
        return new Date(NaN);
      var At = na.set(Tt, ea, B);
      Array.isArray(At) ? (Tt = At[0], kd(ea, At[1])) : Tt = At;
    }
  } catch (U) {
    $t.e(U);
  } finally {
    $t.f();
  }
  return Tt;
}
function Z0(e) {
  return e.match(q0)[1].replace(J0, "'");
}
function Cr(e) {
  return m(1, arguments), ct(e, Date.now());
}
function tm(e, t) {
  m(2, arguments);
  var n = g(e).getTime(), r = g(t.start).getTime(), a = g(t.end).getTime();
  if (!(r <= a))
    throw new RangeError("Invalid interval");
  return n >= r && n <= a;
}
function Sr(e, t) {
  m(2, arguments);
  var n = z(t);
  return As(e, -n);
}
function V(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t);
  return n.setDate(r), n;
}
function H(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t);
  return n.setHours(r), n;
}
function K(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t);
  return n.setMilliseconds(r), n;
}
function q(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t);
  return n.setMinutes(r), n;
}
function Z(e, t) {
  m(2, arguments);
  var n = g(e), r = z(t);
  return n.setSeconds(r), n;
}
function Ii(e, t) {
  m(2, arguments);
  var n = z(t);
  return ft(e, -n);
}
var em = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "select-none",
    attrs: {
      "data-id": "sds-calendar",
      "data-testid": "calendar"
    }
  }, [t.showCalendars ? r("div", [t.view === "days" ? [r("div", {
    staticClass: "flex relative gap-1 mb-2 w-56",
    class: {
      "sm:w-120": t.isRange
    }
  }, [r("button", {
    staticClass: "absolute left-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
    attrs: {
      type: "button",
      tabindex: "-1",
      disabled: !t.canGoToPrevMonth
    },
    on: {
      click: t.goToPrevMonth
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Go to previous month")]), r("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [r("path", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "M328 112L184 256l144 144"
    }
  })])]), r("div", {
    staticClass: "flex-grow"
  }, [r("button", {
    staticClass: "m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        t.view = "years";
      }
    }
  }, [r("span", [t._v(t._s(t.calendarMonthTitle) + " " + t._s(t.calendarYearTitle))])])]), t.isRange ? r("div", {
    staticClass: "hidden flex-grow sm:block"
  }, [r("button", {
    staticClass: "m-auto text-lg font-semibold flex gap-1 text-gray-900 hover:text-gray-500 dark:text-gray-100",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        t.view = "years";
      }
    }
  }, [r("span", [t._v(t._s(t.calendarNextMonthTitle) + " " + t._s(t.calendarNextYearTitle))])])]) : t._e(), r("button", {
    staticClass: "absolute right-0 top-0 text-gray-700 dark:text-gray-300 p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded disabled:pointer-events-none disabled:opacity-50",
    attrs: {
      type: "button",
      tabindex: "-1",
      disabled: !t.canGoToNextMonth
    },
    on: {
      click: t.goToNextMonth
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Go to next month")]), r("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [r("path", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "48",
      d: "M184 112l144 144l-144 144"
    }
  })])])]), r("div", {
    staticClass: "flex flex-col sm:flex-row sm:gap-8"
  }, [r("div", {
    staticClass: "grid grid-cols-7 w-56 h-60 place-content-start"
  }, [t._l(t.calendarDaysOfWeek, function(a) {
    return r("div", {
      key: a,
      staticClass: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
    }, [t._v(" " + t._s(a.charAt(0)) + " ")]);
  }), t._l(t.calendarDaysInMonth, function(a) {
    return r("div", {
      key: a,
      class: ["w-8 h-8 mb-1", a === 1 ? "col-start-".concat(t.calendarStartOfMonth) : "", t.dateIsWithinInterval(a) ? "bg-blue-200 dark:bg-blue-800" : "", t.dateIsAtStartOfInterval(a) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "", t.dateIsAtEndOfInterval(a) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""]
    }, [r("button", {
      staticClass: "disabled:pointer-events-none disabled:opacity-25",
      class: {
        "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
        "hover:bg-gray-300 dark:hover:bg-gray-600": !t.dateIsSameDay(a),
        "font-bold bg-blue-500 text-white": t.dateIsSameDay(a),
        "font-bold text-blue-500 bg-gray-100 dark:text-blue-100 dark:bg-gray-800": t.dateIsToday(a) && !t.dateIsSameDay(a) && !t.dateIsWithinInterval(a),
        "font-semibold text-blue-900 dark:text-blue-100": t.dateIsWithinInterval(a) && !t.dateIsSameDay(a)
      },
      attrs: {
        type: "button",
        tabindex: "-1",
        disabled: t.dateIsNotSelectable(a),
        title: t.dateIsToday(a) ? "Today" : ""
      },
      on: {
        click: function(s) {
          return t.setValueDate(a);
        }
      }
    }, [t._v(" " + t._s(a) + " ")])]);
  })], 2), t.isRange ? [r("div", {
    staticClass: "hidden sm:grid grid-cols-7 w- place-content-start"
  }, [t._l(t.calendarDaysOfWeek, function(a) {
    return r("div", {
      key: a,
      staticClass: "text-sm font-bold text-gray-400 text-center uppercase mb-1"
    }, [t._v(" " + t._s(a.charAt(0)) + " ")]);
  }), t._l(t.calendarNextDaysInMonth, function(a) {
    return r("div", {
      key: a,
      class: ["w-8 h-8 mb-1", a === 1 ? "col-start-".concat(t.calendarNextStartOfMonth) : "", t.dateIsWithinInterval(a, !0) ? "bg-blue-200 dark:bg-blue-800" : "", t.dateIsAtStartOfInterval(a, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-l-full" : "", t.dateIsAtEndOfInterval(a, !0) ? "bg-blue-200 dark:bg-blue-800 rounded-r-full" : ""]
    }, [r("button", {
      staticClass: "disabled:pointer-events-none disabled:opacity-25",
      class: {
        "px-2 py-1 w-8 h-8 rounded-full text-sm": !0,
        "hover:bg-gray-300 dark:hover:bg-gray-600": !t.dateIsSameDay(a, !0),
        "font-bold bg-blue-500 text-white": t.dateIsSameDay(a, !0),
        "font-bold text-blue-500 bg-gray-100 dark:text-blue-400 dark:bg-gray-100": t.dateIsToday(a, !0) && !t.dateIsSameDay(a, !0) && !t.dateIsWithinInterval(a, !0),
        "font-semibold text-blue-900 dark:text-blue-100": t.dateIsWithinInterval(a, !0) && !t.dateIsSameDay(a, !0)
      },
      attrs: {
        type: "button",
        tabindex: "-1",
        disabled: t.dateIsNotSelectable(a, !0),
        title: t.dateIsToday(a, !0) ? "Today" : ""
      },
      on: {
        click: function(s) {
          return t.setValueDate(a, !0);
        }
      }
    }, [t._v(" " + t._s(a) + " ")])]);
  })], 2)] : t._e()], 2)] : [r("div", {
    staticClass: "grid gap-1 w-56",
    class: {
      "sm:w-120": t.isRange
    }
  }, [r("div", [r("div", {
    staticClass: "mb-1 text-sm uppercase font-semibold text-gray-500"
  }, [t._v(" Month ")]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.calendarMonthSelect,
      expression: "calendarMonthSelect"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function(i) {
        var s = Array.prototype.filter.call(i.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var l = "_value" in o ? o._value : o.value;
          return l;
        });
        t.calendarMonthSelect = i.target.multiple ? s : s[0];
      }
    }
  }, t._l(t.calendarMonths, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0)]), r("div", {
    staticClass: "mt-1"
  }, [r("div", {
    staticClass: "mb-1 text-sm uppercase font-semibold text-gray-500"
  }, [t._v(" Year ")]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.calendarYearSelect,
      expression: "calendarYearSelect"
    }],
    staticClass: "form-control form-control-sm",
    on: {
      change: function(i) {
        var s = Array.prototype.filter.call(i.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var l = "_value" in o ? o._value : o.value;
          return l;
        });
        t.calendarYearSelect = i.target.multiple ? s : s[0];
      }
    }
  }, t._l(t.calendarYears, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0)]), r("button", {
    staticClass: "mt-2 btn btn-primary btn-sm",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        return t.goToSelectedMonth();
      }
    }
  }, [t._v(" Go to Date ")]), r("button", {
    staticClass: "mt-2 btn btn-default btn-sm",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        return t.goToThisMonth();
      }
    }
  }, [t._v(" Go to Today ")]), r("hr", {
    staticClass: "my-2"
  }), r("button", {
    staticClass: "btn btn-default btn-sm",
    attrs: {
      type: "button",
      tabindex: "-1"
    },
    on: {
      click: function(i) {
        t.view = "days";
      }
    }
  }, [t._v(" Cancel ")])])]], 2) : t._e(), t.showTime && t.view === "days" ? r("div", {
    class: {
      "sm:flex sm:gap-8 sm:w-120": t.showCalendars && t.isRange
    }
  }, [r("div", {
    staticClass: "w-56",
    class: {
      "border-t my-2 pt-2 border-t": t.showCalendars
    }
  }, [r("div", {
    staticClass: "uppercase text-sm text-gray-500 mb-2"
  }, [t.date && t.date instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date, "eee MMM dd yyyy")) + " ")] : t.date && !(t.date instanceof Date) && t.date.start instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date.start, "eee MMM dd yyyy")) + " ")] : [t._v(" -- ")]], 2), r("div", {
    staticClass: "flex gap-1"
  }, [r("svg", {
    staticClass: "my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [r("path", {
    attrs: {
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
      fill: "currentColor"
    }
  })]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.startTimeHour,
      expression: "startTimeHour"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.startTimeHour
    },
    on: {
      change: [function(a) {
        var i = Array.prototype.filter.call(a.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.startTimeHour = a.target.multiple ? i : i[0];
      }, function(a) {
        return t.changeTime("hour", a.target.value);
      }]
    }
  }, t._l(t.getCalendarHours, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0), r("span", {
    staticClass: "my-auto"
  }, [t._v(":")]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.startTimeMinutes,
      expression: "startTimeMinutes"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.startTimeMinutes
    },
    on: {
      change: [function(a) {
        var i = Array.prototype.filter.call(a.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.startTimeMinutes = a.target.multiple ? i : i[0];
      }, function(a) {
        return t.changeTime("minutes", a.target.value);
      }]
    }
  }, t._l(t.getCalendarMinutes, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.startTimeMeridian,
      expression: "startTimeMeridian"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.startTimeMeridian
    },
    on: {
      change: [function(a) {
        var i = Array.prototype.filter.call(a.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.startTimeMeridian = a.target.multiple ? i : i[0];
      }, function(a) {
        return t.changeTime("meridian", a.target.value);
      }]
    }
  }, t._l(t.getCalendarMeridian, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0)])]), t.isRange ? r("div", {
    staticClass: "border-t my-2 pt-2 border-t w-56"
  }, [r("div", {
    staticClass: "uppercase text-sm text-gray-500 mb-2"
  }, [t.date && !(t.date instanceof Date) && t.date.end instanceof Date ? [t._v(" " + t._s(t.formatDate(t.date.end, "eee MMM dd yyyy")) + " ")] : [t._v(" -- ")]], 2), r("div", {
    staticClass: "flex gap-1"
  }, [r("svg", {
    staticClass: "my-auto flex-shrink-0 w-4 h-4 text-gray-700 dark:text-gray-300",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [r("path", {
    attrs: {
      d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
      fill: "currentColor"
    }
  })]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.endTimeHour,
      expression: "endTimeHour"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.endTimeHour
    },
    on: {
      change: [function(a) {
        var i = Array.prototype.filter.call(a.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.endTimeHour = a.target.multiple ? i : i[0];
      }, function(a) {
        return t.changeTime("hour", a.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarHours, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0), r("span", {
    staticClass: "my-auto"
  }, [t._v(":")]), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.endTimeMinutes,
      expression: "endTimeMinutes"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.endTimeMinutes
    },
    on: {
      change: [function(a) {
        var i = Array.prototype.filter.call(a.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.endTimeMinutes = a.target.multiple ? i : i[0];
      }, function(a) {
        return t.changeTime("minutes", a.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarMinutes, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0), r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.endTimeMeridian,
      expression: "endTimeMeridian"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      disabled: !t.endTimeMeridian
    },
    on: {
      change: [function(a) {
        var i = Array.prototype.filter.call(a.target.options, function(s) {
          return s.selected;
        }).map(function(s) {
          var o = "_value" in s ? s._value : s.value;
          return o;
        });
        t.endTimeMeridian = a.target.multiple ? i : i[0];
      }, function(a) {
        return t.changeTime("meridian", a.target.value, !0);
      }]
    }
  }, t._l(t.getCalendarMeridian, function(a) {
    return r("option", {
      key: a
    }, [t._v(" " + t._s(a) + " ")]);
  }), 0)])]) : t._e()]) : t._e()]);
}, rm = [];
const nm = {
  name: "SdsCalendar",
  props: {
    value: { type: [Object, Date], default: new Date() },
    mode: { type: String, default: "date" },
    min: { type: Date, default: null },
    max: { type: Date, default: null },
    useCurrentTimeForToday: { type: Boolean, default: !1 }
  },
  data() {
    const e = new Date();
    return {
      displayedMonth: e,
      displayedNextMonth: ft(e, 1),
      view: "days",
      calendarDaysOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      calendarMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      calendarYears: [...Array(200).keys()].map((t) => t + 1900),
      calendarMonthSelect: null,
      calendarYearSelect: null,
      startTimeHour: null,
      startTimeMinutes: null,
      startTimeMeridian: null,
      endTimeHour: null,
      endTimeMinutes: null,
      endTimeMeridian: null
    };
  },
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    },
    calendarMonthTitle() {
      return F(this.displayedMonth, "MMMM");
    },
    calendarYearTitle() {
      return F(this.displayedMonth, "yyyy");
    },
    calendarStartOfMonth() {
      return La(wt(this.displayedMonth)) + 1;
    },
    calendarDaysInMonth() {
      return _a(this.displayedMonth);
    },
    calendarNextMonthTitle() {
      return F(this.displayedNextMonth, "MMMM");
    },
    calendarNextYearTitle() {
      return F(this.displayedNextMonth, "yyyy");
    },
    calendarNextStartOfMonth() {
      return La(wt(this.displayedNextMonth)) + 1;
    },
    calendarNextDaysInMonth() {
      return _a(this.displayedNextMonth);
    },
    showCalendars() {
      return this.mode === "date" || this.mode === "dateTime";
    },
    showTime() {
      return this.mode === "dateTime" || this.mode === "time";
    },
    getCalendarHours() {
      return [...Array(12).keys()].map((t) => (t + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: !1
      }));
    },
    getCalendarMinutes() {
      return [...Array(60).keys()].map((t) => t.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: !1
      }));
    },
    getCalendarMeridian() {
      return ["am", "pm"];
    },
    canGoToPrevMonth() {
      return this.min instanceof Date ? Dr(wt(this.min), wt(this.displayedMonth)) : !0;
    },
    canGoToNextMonth() {
      return this.max instanceof Date ? yt(wt(this.max), wt(this.displayedMonth)) : !0;
    },
    isRange() {
      return this.value && !W(this.value);
    }
  },
  watch: {
    view() {
      this.setCalendarSelectMonthAndYear();
    },
    value() {
      this.updateTimeSelects();
    }
  },
  mounted() {
    this.initTimeMode(), this.moveToStartDate(), this.$nextTick(() => {
      this.updateTimeSelects();
    });
  },
  methods: {
    setCalendarSelectMonthAndYear() {
      this.calendarMonthSelect = F(this.displayedMonth, "MMMM"), this.calendarYearSelect = F(this.displayedMonth, "yyyy");
    },
    initTimeMode() {
      if (this.mode === "time" && (!this.date || !(this.date instanceof Date) && (!this.date.start || !this.date.end))) {
        const e = H(q(Z(K(new Date(), 0), 0), 0), 0);
        this.isRange ? this.date = {
          start: e,
          end: e
        } : this.date = e;
      }
    },
    moveToStartDate() {
      this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? this.displayedMonth = this.date.start : this.date && this.date instanceof Date ? this.displayedMonth = this.date : this.min && this.min instanceof Date && yt(this.min, new Date()) && (this.displayedMonth = this.min), this.displayedNextMonth = ft(this.displayedMonth, 1);
    },
    updateTimeSelects() {
      this.isRange ? (this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? (this.startTimeHour = this.formatDate(this.date.start, "hh"), this.startTimeMinutes = this.formatDate(this.date.start, "mm"), this.startTimeMeridian = nt(this.date.start) > 11 ? "pm" : "am") : (this.startTimeHour = null, this.startTimeMinutes = null, this.startTimeMeridian = null), this.date && !(this.date instanceof Date) && this.date.end instanceof Date ? (this.endTimeHour = this.formatDate(this.date.end, "hh"), this.endTimeMinutes = this.formatDate(this.date.end, "mm"), this.endTimeMeridian = nt(this.date.end) > 11 ? "pm" : "am") : (this.endTimeHour = null, this.endTimeMinutes = null, this.endTimeMeridian = null)) : this.date instanceof Date ? (this.startTimeHour = this.formatDate(this.date, "hh"), this.startTimeMinutes = this.formatDate(this.date, "mm"), this.startTimeMeridian = nt(this.date) > 11 ? "pm" : "am") : (this.startTimeHour = null, this.startTimeMinutes = null, this.startTimeMeridian = null);
    },
    changeTime(e, t, n = !1) {
      switch (e) {
        case "hour":
          if (this.isRange) {
            if (!n && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const a = nt(this.date.start) > 12 ? parseInt(t) + 12 : parseInt(t);
              this.date.start = H(this.date.start, a);
            } else if (n && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const a = nt(this.date.end) > 12 ? parseInt(t) + 12 : parseInt(t);
              this.date.end = H(this.date.end, a);
            }
          } else if (this.date instanceof Date) {
            const a = nt(this.date) > 12 ? parseInt(t) + 12 : parseInt(t);
            this.date = H(this.date, a);
          }
          break;
        case "minutes":
          this.isRange ? !n && this.date && !(this.date instanceof Date) && this.date.start instanceof Date ? this.date.start = q(this.date.start, parseInt(t)) : n && this.date && !(this.date instanceof Date) && this.date.end instanceof Date && (this.date.end = q(this.date.end, parseInt(t))) : this.date instanceof Date && (this.date = q(this.date, parseInt(t)));
          break;
        case "meridian":
          if (this.isRange) {
            if (!n && this.date && !(this.date instanceof Date) && this.date.start instanceof Date) {
              const r = nt(this.date.start), a = t === "am" && r >= 12 ? r - 12 : t === "pm" && r < 12 ? r + 12 : r;
              this.date.start = H(this.date.start, a);
            } else if (n && this.date && !(this.date instanceof Date) && this.date.end instanceof Date) {
              const r = nt(this.date.end), a = t === "am" && r >= 12 ? r - 12 : t === "pm" && r < 12 ? r + 12 : r;
              this.date.end = H(this.date.end, a);
            }
          } else if (this.date instanceof Date) {
            const r = nt(this.date), a = t === "am" && r >= 12 ? r - 12 : t === "pm" && r < 12 ? r + 12 : r;
            this.date = H(this.date, a);
          }
          break;
      }
      this.isRange && this.date && !(this.date instanceof Date) && this.date.start instanceof Date && this.date.end instanceof Date && (this.date = {
        start: Tr([this.date.start, this.date.end]),
        end: jr([this.date.start, this.date.end])
      });
    },
    goToPrevMonth() {
      this.displayedMonth = Ii(this.displayedMonth, 1), this.displayedNextMonth = Ii(this.displayedNextMonth, 1);
    },
    goToNextMonth() {
      this.displayedMonth = ft(this.displayedMonth, 1), this.displayedNextMonth = ft(this.displayedNextMonth, 1);
    },
    goToSelectedMonth() {
      if (!this.calendarMonthSelect || !this.calendarYearSelect)
        return;
      const e = this.calendarMonths.findIndex((t) => t === this.calendarMonthSelect) + 1;
      typeof e == "number" && (this.displayedMonth = new Date(parseInt(this.calendarYearSelect), e, 0, 0, 0, 0, 0), this.displayedNextMonth = ft(this.displayedMonth, 1), this.view = "days");
    },
    goToThisMonth() {
      this.displayedMonth = new Date(), this.displayedNextMonth = ft(this.displayedMonth, 1), this.view = "days";
    },
    formatDate(e, t) {
      return F(e, t);
    },
    setValueDate(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      if (this.isRange && this.date)
        if (this.date.end || !this.date.start)
          this.date = {
            start: this.useCurrentTimeForToday && Cr(V(n, e)) ? new Date() : H(q(Z(K(V(n, e), 0), 0), 0), 0),
            end: null
          };
        else if (!(this.date instanceof Date) && W(this.date.start) && this.date.start instanceof Date) {
          const r = this.date.start, a = ga(V(n, e));
          if (ct(r, a) && yt(a, r))
            this.date = { start: r, end: a };
          else {
            const i = Tr([r, a]), s = jr([r, a]);
            this.date = {
              start: kr(r, i) ? i : this.useCurrentTimeForToday && Cr(i) ? new Date() : H(q(Z(K(i, 0), 0), 0), 0),
              end: ga(s)
            };
          }
        } else
          this.date.end = H(q(Z(K(V(n, e), 0), 0), 0), 0);
      else
        this.date = this.useCurrentTimeForToday && Cr(V(n, e)) ? new Date() : H(q(Z(K(V(n, e), 0), 0), 0), 0);
      this.$nextTick(() => {
        this.updateTimeSelects();
      });
    },
    dateIsBeforeMin(e, t = !1) {
      if (!(this.min instanceof Date))
        return !1;
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return Dr(V(n, e), H(q(Z(K(this.min, 0), 0), 0), 0));
    },
    dateIsAfterMax(e, t = !1) {
      if (!(this.max instanceof Date))
        return !1;
      const n = t ? this.displayedNextMonth : this.displayedMonth, r = V(n, e - 1), a = H(q(Z(K(this.max, 0), 0), 0), 0);
      return yt(r, a) || kr(r, a);
    },
    dateIsNotSelectable(e, t = !1) {
      return this.dateIsBeforeMin(e, t) || this.dateIsAfterMax(e, t);
    },
    dateIsWithinInterval(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && W(this.date.start) && this.date.start instanceof Date && W(this.date.end) && this.date.end instanceof Date ? tm(
        V(n, e),
        { start: this.date.start, end: this.date.end }
      ) : !1;
    },
    dateIsAtStartOfInterval(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && W(this.date.start) && this.date.start instanceof Date && W(this.date.end) && this.date.end instanceof Date ? ct(V(n, e), this.date.start) : !1;
    },
    dateIsAtEndOfInterval(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return this.date && !(this.date instanceof Date) && W(this.date.start) && this.date.start instanceof Date && W(this.date.end) && this.date.end instanceof Date ? ct(V(n, e), this.date.end) : !1;
    },
    dateIsSameDay(e, t = !1) {
      if (this.date) {
        if (W(this.date) && this.date instanceof Date) {
          const n = t ? this.displayedNextMonth : this.displayedMonth;
          return ct(V(n, e), this.date);
        } else if (!(this.date instanceof Date) && (W(this.date.start) && this.date.start instanceof Date || W(this.date.end) && this.date.end instanceof Date)) {
          const n = t ? this.displayedNextMonth : this.displayedMonth;
          return W(this.date.start) && this.date.start instanceof Date && ct(V(n, e), this.date.start) || W(this.date.end) && this.date.end instanceof Date && ct(V(n, e), this.date.end);
        }
      } else
        return !1;
    },
    dateIsToday(e, t = !1) {
      const n = t ? this.displayedNextMonth : this.displayedMonth;
      return ct(V(n, e), new Date());
    }
  }
}, Pi = {};
var am = /* @__PURE__ */ y(
  nm,
  em,
  rm,
  !1,
  im,
  null,
  null,
  null
);
function im(e) {
  for (let t in Pi)
    this[t] = Pi[t];
}
const eo = /* @__PURE__ */ function() {
  return am.exports;
}();
var sm = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "focus:outline-none",
    attrs: {
      id: t.id,
      "data-id": "sds-checkbox-group",
      role: "checkboxgroup",
      tabindex: "-1"
    }
  }, t._l(t.options, function(a, i) {
    return r("div", {
      key: a.value,
      staticClass: "space-x-1",
      class: {
        "inline-block mr-4": !t.stacked
      }
    }, [r("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: t.localChecked,
        expression: "localChecked"
      }],
      staticClass: "focus:outline-none",
      attrs: {
        id: "".concat(t.id, "__option_").concat(i),
        type: "checkbox",
        name: t.name ? t.name : "".concat(t.id, "__option"),
        required: t.required
      },
      domProps: {
        value: a.value,
        checked: Array.isArray(t.localChecked) ? t._i(t.localChecked, a.value) > -1 : t.localChecked
      },
      on: {
        click: function(o) {
          return t.onChange(a.value);
        },
        change: function(o) {
          var l = t.localChecked, u = o.target, c = !!u.checked;
          if (Array.isArray(l)) {
            var f = a.value, d = t._i(l, f);
            u.checked ? d < 0 && (t.localChecked = l.concat([f])) : d > -1 && (t.localChecked = l.slice(0, d).concat(l.slice(d + 1)));
          } else
            t.localChecked = c;
        }
      }
    }), t._t("label", function() {
      return [r("label", {
        attrs: {
          for: "".concat(t.id, "__option_").concat(i)
        }
      }, [r("span", [t._v(t._s(a.text))])])];
    }, {
      optionId: "".concat(t.id, "__option_").concat(i),
      option: a
    })], 2);
  }), 0);
}, om = [];
let Ei = 0;
const lm = {
  name: "SdsCheckboxGroup",
  props: {
    value: { type: Array, default: () => [] },
    name: { type: String, default: null },
    options: { type: Array, default: () => [] },
    required: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  data() {
    return {
      id: ""
    };
  },
  computed: {
    localChecked: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  mounted() {
    Ei++, this.id = `sds-checkbox-group_${Ei}`;
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, $i = {};
var um = /* @__PURE__ */ y(
  lm,
  sm,
  om,
  !1,
  cm,
  null,
  null,
  null
);
function cm(e) {
  for (let t in $i)
    this[t] = $i[t];
}
const fm = /* @__PURE__ */ function() {
  return um.exports;
}();
var dm = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", [t.$slots.label || t.label ? r("div", {
    staticClass: "text-base"
  }, [t._t("label", function() {
    return [t._v(" " + t._s(t.label) + " ")];
  })], 2) : t._e(), r("div", {
    staticClass: "flex gap-2"
  }, [r("div", {
    staticClass: "font-bold",
    class: [t.sizeClass, t.variantClass]
  }, [t._t("default", function() {
    return [t._v(t._s(t.modelValueDisplay))];
  })], 2), t.$slots.context || t.context ? r("div", {
    staticClass: "text-base mt-auto"
  }, [t._t("context", function() {
    return [t._v(" " + t._s(t.context) + " ")];
  })], 2) : t._e()])]);
}, hm = [];
const pm = {
  name: "SdsDatapoint",
  props: {
    value: { type: [String, Number], default: null },
    label: { type: String, default: null },
    context: { type: String, default: null },
    size: { type: String, default: "md" },
    variant: { type: String, default: null }
  },
  computed: {
    modelValueDisplay() {
      return typeof this.value == "number" ? this.value.toLocaleString() : this.value;
    },
    sizeClass() {
      let e = "";
      switch (this.size) {
        case "sm":
          e = "text-lg";
          break;
        case "md":
          e = "text-3xl";
          break;
        default:
          e = "text-5xl";
      }
      return e;
    },
    variantClass() {
      let e = "";
      switch (this.variant) {
        case "blue":
          e = "text-blue-500 dark:text-blue-400";
          break;
        case "green":
          e = "text-green-500 dark:text-green-400";
          break;
        case "teal":
          e = "text-teal-500 dark:text-teal-400";
          break;
        case "orange":
          e = "text-orange-700 dark:text-orange-400";
          break;
        case "red":
          e = "text-red-500 dark:text-red-400";
          break;
        case "tan":
          e = "text-tan-800 dark:text-tan-500";
          break;
        case "yellow":
          e = "text-yellow-800 dark:text-yellow-400";
          break;
        case "pink":
          e = "text-pink-600 dark:text-pink-400";
          break;
        case "purple":
          e = "text-purple-500 dark:text-purple-400";
          break;
        case "indigo":
          e = "text-indigo-500 dark:text-indigo-400";
          break;
        case "gray":
          e = "text-gray-500 dark:text-gray-300";
          break;
        default:
          e = "text-black dark:text-white";
          break;
      }
      return e;
    }
  }
}, Ai = {};
var ym = /* @__PURE__ */ y(
  pm,
  dm,
  hm,
  !1,
  mm,
  null,
  null,
  null
);
function mm(e) {
  for (let t in Ai)
    this[t] = Ai[t];
}
const vm = /* @__PURE__ */ function() {
  return ym.exports;
}();
function it(e) {
  return e.split("-")[0];
}
function mt(e) {
  return e.split("-")[1];
}
function St(e) {
  return ["top", "bottom"].includes(it(e)) ? "x" : "y";
}
function Jn(e) {
  return e === "y" ? "height" : "width";
}
function Ri(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const i = r.x + r.width / 2 - a.width / 2, s = r.y + r.height / 2 - a.height / 2, o = St(t), l = Jn(o), u = r[l] / 2 - a[l] / 2, c = it(t), f = o === "x";
  let d;
  switch (c) {
    case "top":
      d = {
        x: i,
        y: r.y - a.height
      };
      break;
    case "bottom":
      d = {
        x: i,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: s
      };
      break;
    case "left":
      d = {
        x: r.x - a.width,
        y: s
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (mt(t)) {
    case "start":
      d[o] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      d[o] += u * (n && f ? -1 : 1);
      break;
  }
  return d;
}
const gm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: i = [],
    platform: s
  } = n, o = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: f
  } = Ri(u, r, l), d = r, h = {}, p = 0;
  for (let v = 0; v < o.length; v++) {
    const {
      name: b,
      fn: w
    } = o[v], {
      x: M,
      y: x,
      data: S,
      reset: _
    } = await w({
      x: c,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: a,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (c = M != null ? M : c, f = x != null ? x : f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...S
      }
    }, _ && p <= 50) {
      p++, typeof _ == "object" && (_.placement && (d = _.placement), _.rects && (u = _.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : _.rects), {
        x: c,
        y: f
      } = Ri(u, d, l)), v = -1;
      continue;
    }
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: a,
    middlewareData: h
  };
};
function wm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Xn(e) {
  return typeof e != "number" ? wm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function It(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Kn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: i,
    rects: s,
    elements: o,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: h = 0
  } = t, p = Xn(h), b = o[d ? f === "floating" ? "reference" : "floating" : f], w = It(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), M = It(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: f === "floating" ? {
      ...s.floating,
      x: r,
      y: a
    } : s.reference,
    offsetParent: await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)),
    strategy: l
  }) : s[f]);
  return {
    top: w.top - M.top + p.top,
    bottom: M.bottom - w.bottom + p.bottom,
    left: w.left - M.left + p.left,
    right: M.right - w.right + p.right
  };
}
const ro = Math.min, no = Math.max;
function Bn(e, t, n) {
  return no(e, ro(t, n));
}
const bm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      element: n,
      padding: r = 0
    } = e != null ? e : {}, {
      x: a,
      y: i,
      placement: s,
      rects: o,
      platform: l
    } = t;
    if (n == null)
      return {};
    const u = Xn(r), c = {
      x: a,
      y: i
    }, f = St(s), d = mt(s), h = Jn(f), p = await l.getDimensions(n), v = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", w = o.reference[h] + o.reference[f] - c[f] - o.floating[h], M = c[f] - o.reference[f], x = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
    let S = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0;
    S === 0 && (S = o.floating[h]);
    const _ = w / 2 - M / 2, j = u[v], P = S - p[h] - u[b], O = S / 2 - p[h] / 2 + _, D = Bn(j, O, P), B = (d === "start" ? u[v] : u[b]) > 0 && O !== D && o.reference[h] <= o.floating[h] ? O < j ? j - O : P - O : 0;
    return {
      [f]: c[f] - B,
      data: {
        [f]: D,
        centerOffset: O - D
      }
    };
  }
}), Mm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function or(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Mm[t]);
}
function ao(e, t, n) {
  n === void 0 && (n = !1);
  const r = mt(e), a = St(e), i = Jn(a);
  let s = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = or(s)), {
    main: s,
    cross: or(s)
  };
}
const Lm = {
  start: "end",
  end: "start"
};
function Qn(e) {
  return e.replace(/start|end/g, (t) => Lm[t]);
}
const _m = ["top", "right", "bottom", "left"], xm = /* @__PURE__ */ _m.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
function Cm(e, t, n) {
  return (e ? [...n.filter((a) => mt(a) === e), ...n.filter((a) => mt(a) !== e)] : n.filter((a) => it(a) === a)).filter((a) => e ? mt(a) === e || (t ? Qn(a) !== a : !1) : !0);
}
const Sm = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, r, a, i, s;
      const {
        x: o,
        y: l,
        rects: u,
        middlewareData: c,
        placement: f,
        platform: d,
        elements: h
      } = t, {
        alignment: p = null,
        allowedPlacements: v = xm,
        autoAlignment: b = !0,
        ...w
      } = e, M = Cm(p, b, v), x = await Kn(t, w), S = (n = (r = c.autoPlacement) == null ? void 0 : r.index) != null ? n : 0, _ = M[S];
      if (_ == null)
        return {};
      const {
        main: j,
        cross: P
      } = ao(_, u, await (d.isRTL == null ? void 0 : d.isRTL(h.floating)));
      if (f !== _)
        return {
          x: o,
          y: l,
          reset: {
            placement: M[0]
          }
        };
      const O = [x[it(_)], x[j], x[P]], D = [...(a = (i = c.autoPlacement) == null ? void 0 : i.overflows) != null ? a : [], {
        placement: _,
        overflows: O
      }], R = M[S + 1];
      if (R)
        return {
          data: {
            index: S + 1,
            overflows: D
          },
          reset: {
            placement: R
          }
        };
      const k = D.slice().sort((Q, T) => Q.overflows[0] - T.overflows[0]), B = (s = k.find((Q) => {
        let {
          overflows: T
        } = Q;
        return T.every((Y) => Y <= 0);
      })) == null ? void 0 : s.placement, G = B != null ? B : k[0].placement;
      return G !== f ? {
        data: {
          index: S + 1,
          overflows: D
        },
        reset: {
          placement: G
        }
      } : {};
    }
  };
};
function jm(e) {
  const t = or(e);
  return [Qn(e), t, Qn(t)];
}
const Tm = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: o,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: d = "bestFit",
        flipAlignment: h = !0,
        ...p
      } = e, v = it(r), w = f || (v === s || !h ? [or(s)] : jm(s)), M = [s, ...w], x = await Kn(t, p), S = [];
      let _ = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (u && S.push(x[v]), c) {
        const {
          main: D,
          cross: R
        } = ao(r, i, await (o.isRTL == null ? void 0 : o.isRTL(l.floating)));
        S.push(x[D], x[R]);
      }
      if (_ = [..._, {
        placement: r,
        overflows: S
      }], !S.every((D) => D <= 0)) {
        var j, P;
        const D = ((j = (P = a.flip) == null ? void 0 : P.index) != null ? j : 0) + 1, R = M[D];
        if (R)
          return {
            data: {
              index: D,
              overflows: _
            },
            reset: {
              placement: R
            }
          };
        let k = "bottom";
        switch (d) {
          case "bestFit": {
            var O;
            const B = (O = _.map((G) => [G, G.overflows.filter((Q) => Q > 0).reduce((Q, T) => Q + T, 0)]).sort((G, Q) => G[1] - Q[1])[0]) == null ? void 0 : O[0].placement;
            B && (k = B);
            break;
          }
          case "initialPlacement":
            k = s;
            break;
        }
        if (r !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
async function Nm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), s = it(n), o = mt(n), l = St(n) === "x", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = typeof t == "function" ? t(e) : t;
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return o && typeof p == "number" && (h = o === "end" ? p * -1 : p), l ? {
    x: h * c,
    y: d * u
  } : {
    x: d * u,
    y: h * c
  };
}
const Dm = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, a = await Nm(t, e);
      return {
        x: n + a.x,
        y: r + a.y,
        data: a
      };
    }
  };
};
function km(e) {
  return e === "x" ? "y" : "x";
}
const Om = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: o = {
          fn: (b) => {
            let {
              x: w,
              y: M
            } = b;
            return {
              x: w,
              y: M
            };
          }
        },
        ...l
      } = e, u = {
        x: n,
        y: r
      }, c = await Kn(t, l), f = St(it(a)), d = km(f);
      let h = u[f], p = u[d];
      if (i) {
        const b = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", M = h + c[b], x = h - c[w];
        h = Bn(M, h, x);
      }
      if (s) {
        const b = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", M = p + c[b], x = p - c[w];
        p = Bn(M, p, x);
      }
      const v = o.fn({
        ...t,
        [f]: h,
        [d]: p
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, zm = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        elements: a,
        rects: i,
        platform: s,
        strategy: o
      } = t, {
        padding: l = 2,
        x: u,
        y: c
      } = e, f = It(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: i.reference,
        offsetParent: await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)),
        strategy: o
      }) : i.reference), d = (n = await (s.getClientRects == null ? void 0 : s.getClientRects(a.reference))) != null ? n : [], h = Xn(l);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && u != null && c != null) {
          var b;
          return (b = d.find((w) => u > w.left - h.left && u < w.right + h.right && c > w.top - h.top && c < w.bottom + h.bottom)) != null ? b : f;
        }
        if (d.length >= 2) {
          if (St(r) === "x") {
            const k = d[0], B = d[d.length - 1], G = it(r) === "top", Q = k.top, T = B.bottom, Y = G ? k.left : B.left, tt = G ? k.right : B.right, mr = tt - Y, Et = T - Q;
            return {
              top: Q,
              bottom: T,
              left: Y,
              right: tt,
              width: mr,
              height: Et,
              x: Y,
              y: Q
            };
          }
          const w = it(r) === "left", M = no(...d.map((k) => k.right)), x = ro(...d.map((k) => k.left)), S = d.filter((k) => w ? k.left === x : k.right === M), _ = S[0].top, j = S[S.length - 1].bottom, P = x, O = M, D = O - P, R = j - _;
          return {
            top: _,
            bottom: j,
            left: P,
            right: O,
            width: D,
            height: R,
            x: P,
            y: _
          };
        }
        return f;
      }
      const v = await s.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: a.floating,
        strategy: o
      });
      return i.reference.x !== v.reference.x || i.reference.y !== v.reference.y || i.reference.width !== v.reference.width || i.reference.height !== v.reference.height ? {
        reset: {
          rects: v
        }
      } : {};
    }
  };
};
function io(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function lt(e) {
  if (e == null)
    return window;
  if (!io(e)) {
    const t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function dt(e) {
  return lt(e).getComputedStyle(e);
}
function gt(e) {
  return io(e) ? "" : e ? (e.nodeName || "").toLowerCase() : "";
}
function so() {
  const e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map((t) => t.brand + "/" + t.version).join(" ") : navigator.userAgent;
}
function st(e) {
  return e instanceof lt(e).HTMLElement;
}
function at(e) {
  return e instanceof lt(e).Element;
}
function Im(e) {
  return e instanceof lt(e).Node;
}
function Yi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = lt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = dt(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function Pm(e) {
  return ["table", "td", "th"].includes(gt(e));
}
function Zn(e) {
  const t = /firefox/i.test(so()), n = dt(e), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((a) => n.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some(
    (a) => {
      const i = n.contain;
      return i != null ? i.includes(a) : !1;
    }
  );
}
function oo() {
  return !/^((?!chrome|android).)*safari/i.test(so());
}
function ta(e) {
  return ["html", "body", "#document"].includes(gt(e));
}
const Ui = Math.min, Ot = Math.max, lr = Math.round;
function ot(e, t, n) {
  var r, a, i, s;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect();
  let l = 1, u = 1;
  t && st(e) && (l = e.offsetWidth > 0 && lr(o.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && lr(o.height) / e.offsetHeight || 1);
  const c = at(e) ? lt(e) : window, f = !oo() && n, d = (o.left + (f && (r = (a = c.visualViewport) == null ? void 0 : a.offsetLeft) != null ? r : 0)) / l, h = (o.top + (f && (i = (s = c.visualViewport) == null ? void 0 : s.offsetTop) != null ? i : 0)) / u, p = o.width / l, v = o.height / u;
  return {
    width: p,
    height: v,
    top: h,
    right: d + p,
    bottom: h + v,
    left: d,
    x: d,
    y: h
  };
}
function ht(e) {
  return ((Im(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yr(e) {
  return at(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function lo(e) {
  return ot(ht(e)).left + yr(e).scrollLeft;
}
function Em(e) {
  const t = ot(e);
  return lr(t.width) !== e.offsetWidth || lr(t.height) !== e.offsetHeight;
}
function $m(e, t, n) {
  const r = st(t), a = ht(t), i = ot(
    e,
    r && Em(t),
    n === "fixed"
  );
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((gt(t) !== "body" || pr(a)) && (s = yr(t)), st(t)) {
      const l = ot(t, !0);
      o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
    } else
      a && (o.x = lo(a));
  return {
    x: i.left + s.scrollLeft - o.x,
    y: i.top + s.scrollTop - o.y,
    width: i.width,
    height: i.height
  };
}
function ur(e) {
  if (gt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Yi(e) ? e.host : null) || ht(e);
  return Yi(t) ? t.host : t;
}
function Bi(e) {
  return !st(e) || dt(e).position === "fixed" ? null : e.offsetParent;
}
function Am(e) {
  let t = ur(e);
  for (; st(t) && !ta(t); ) {
    if (Zn(t))
      return t;
    t = ur(t);
  }
  return null;
}
function Qi(e) {
  const t = lt(e);
  let n = Bi(e);
  for (; n && Pm(n) && dt(n).position === "static"; )
    n = Bi(n);
  return n && (gt(n) === "html" || gt(n) === "body" && dt(n).position === "static" && !Zn(n)) ? t : n || Am(e) || t;
}
function Hi(e) {
  if (st(e))
    return {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
  const t = ot(e);
  return {
    width: t.width,
    height: t.height
  };
}
function Rm(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const a = st(n), i = ht(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const o = {
    x: 0,
    y: 0
  };
  if ((a || !a && r !== "fixed") && ((gt(n) !== "body" || pr(i)) && (s = yr(n)), st(n))) {
    const l = ot(n, !0);
    o.x = l.x + n.clientLeft, o.y = l.y + n.clientTop;
  }
  return {
    ...t,
    x: t.x - s.scrollLeft + o.x,
    y: t.y - s.scrollTop + o.y
  };
}
function Ym(e, t) {
  const n = lt(e), r = ht(e), a = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, o = 0, l = 0;
  if (a) {
    i = a.width, s = a.height;
    const u = oo();
    (u || !u && t === "fixed") && (o = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: o,
    y: l
  };
}
function Um(e) {
  var t;
  const n = ht(e), r = yr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ot(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Ot(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
  let o = -r.scrollLeft + lo(e);
  const l = -r.scrollTop;
  return dt(a || n).direction === "rtl" && (o += Ot(n.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: o,
    y: l
  };
}
function uo(e) {
  const t = ur(e);
  return ta(t) ? e.ownerDocument.body : st(t) && pr(t) ? t : uo(t);
}
function zt(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = uo(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = lt(r), s = a ? [i].concat(i.visualViewport || [], pr(r) ? r : []) : r, o = t.concat(s);
  return a ? o : o.concat(zt(s));
}
function Bm(e, t) {
  const n = ot(e, !1, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft;
  return {
    top: r,
    left: a,
    x: a,
    y: r,
    right: a + e.clientWidth,
    bottom: r + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Fi(e, t, n) {
  return t === "viewport" ? It(Ym(e, n)) : at(t) ? Bm(t, n) : It(Um(ht(e)));
}
function Qm(e) {
  let t = zt(e).filter((a) => at(a)), n = e, r = null;
  for (; at(n) && !ta(n); ) {
    const a = dt(n);
    a.position === "static" && r && ["absolute", "fixed"].includes(r.position) && !Zn(n) ? t = t.filter((i) => i !== n) : r = a, n = ur(n);
  }
  return t;
}
function Hm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? Qm(t) : [].concat(n), r], o = s[0], l = s.reduce((u, c) => {
    const f = Fi(t, c, a);
    return u.top = Ot(f.top, u.top), u.right = Ui(f.right, u.right), u.bottom = Ui(f.bottom, u.bottom), u.left = Ot(f.left, u.left), u;
  }, Fi(t, o, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
const Fm = {
  getClippingRect: Hm,
  convertOffsetParentRelativeRectToViewportRelativeRect: Rm,
  isElement: at,
  getDimensions: Hi,
  getOffsetParent: Qi,
  getDocumentElement: ht,
  getElementRects: (e) => {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e;
    return {
      reference: $m(t, Qi(n), r),
      floating: {
        ...Hi(n),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => dt(e).direction === "rtl"
};
function Gm(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: i = !0,
    elementResize: s = !0,
    animationFrame: o = !1
  } = r, l = a && !o, u = l || i ? [...at(e) ? zt(e) : e.contextElement ? zt(e.contextElement) : [], ...zt(t)] : [];
  u.forEach((p) => {
    l && p.addEventListener("scroll", n, {
      passive: !0
    }), i && p.addEventListener("resize", n);
  });
  let c = null;
  if (s) {
    let p = !0;
    c = new ResizeObserver(() => {
      p || n(), p = !1;
    }), at(e) && !o && c.observe(e), !at(e) && e.contextElement && !o && c.observe(e.contextElement), c.observe(t);
  }
  let f, d = o ? ot(e) : null;
  o && h();
  function h() {
    const p = ot(e);
    d && (p.x !== d.x || p.y !== d.y || p.width !== d.width || p.height !== d.height) && n(), d = p, f = requestAnimationFrame(h);
  }
  return n(), () => {
    var p;
    u.forEach((v) => {
      l && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), (p = c) == null || p.disconnect(), c = null, o && cancelAnimationFrame(f);
  };
}
const Vm = (e, t, n) => gm(e, t, {
  platform: Fm,
  ...n
});
var Wm = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "inline-block"
  }, [r("div", {
    ref: "triggerRef",
    staticClass: "inline-block w-full"
  }, [t._t("trigger", null, {
    isOpen: t.open,
    open: t.onOpen,
    close: t.onClose,
    toggle: t.onToggle
  })], 2), r("transition", {
    attrs: {
      css: !t.disableAnimation,
      "enter-active-class": "transition duration-75 ease-out",
      "enter-class": "transform scale-95 opacity-0",
      "enter-to-class": "transform scale-100 opacity-100",
      "leave-active-class": "transition duration-50 ease-in",
      "leave-class": "transform scale-100 opacity-100",
      "leave-to-class": "transform scale-95 opacity-0"
    }
  }, [t.open ? r("div", {
    ref: "popperRef",
    class: t.popperClass,
    style: t.popperPosition
  }, [t.hideArrow ? t._e() : r("div", {
    ref: "arrowRef",
    class: [t.arrowClass, t.arrowPlacementClass],
    style: t.arrowPosition
  }), t._t("default", null, {
    isOpen: t.open,
    open: t.onOpen,
    close: t.onClose,
    toggle: t.onToggle
  })], 2) : t._e()])], 1);
}, qm = [];
const Jm = {
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
        this.update(), this.$refs.triggerRef && this.$refs.popperRef && (this.cleanup = Gm(this.$refs.triggerRef, this.$refs.popperRef, this.update));
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
      return new Promise(async (t, n) => e ? await e(t, n) : t());
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
      this.offset && e.middleware.push(Dm(this.offset)), t ? e.middleware.push(Sm({
        alignment: (o = this.placement.split("-")[1]) != null ? o : ""
      })) : e.placement = this.placement, this.inline && e.middleware.push(zm()), t || e.middleware.push(Tm({
        padding: this.overflowPadding
      })), this.shift && e.middleware.push(Om({
        padding: this.overflowPadding
      })), !this.hideArrow && this.$refs.arrowRef && e.middleware.push(bm({
        element: this.$refs.arrowRef,
        padding: this.arrowPadding
      }));
      const n = await Vm(this.$refs.triggerRef, this.$refs.popperRef, e), { x: r, y: a, placement: i, middlewareData: s } = n;
      if (this.popperPosition = {
        left: r ? `${r}px` : "",
        top: a ? `${a}px` : ""
      }, !this.hideArrow) {
        const { x: l, y: u } = s.arrow;
        this.currentPlacement = i, this.arrowPosition = {
          left: l ? `${l}px` : "",
          top: u ? `${u}px` : ""
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
}, Gi = {};
var Xm = /* @__PURE__ */ y(
  Jm,
  Wm,
  qm,
  !1,
  Km,
  null,
  null,
  null
);
function Km(e) {
  for (let t in Gi)
    this[t] = Gi[t];
}
const jt = /* @__PURE__ */ function() {
  return Xm.exports;
}();
var Zm = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("floating-ui", {
    staticClass: "w-full",
    attrs: {
      "data-id": "sds-datepicker",
      placement: "bottom",
      disabled: t.disabled,
      "popper-class": "absolute bg-white border dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 shadow-lg rounded-md w-auto ".concat(t.zIndexClass),
      "arrow-class": "absolute bg-white border dark:bg-gray-700 dark:border-gray-600 w-3 h-3 rotate-45",
      "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
      "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
      "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
      "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0"
    },
    scopedSlots: t._u([{
      key: "trigger",
      fn: function(i) {
        var s = i.open, o = i.close, l = i.toggle;
        return [r("div", {
          staticClass: "flex w-full",
          class: {
            "gap-1": t.size === "sm",
            "gap-2": t.size !== "sm"
          }
        }, [r("div", {
          staticClass: "w-full input-group",
          class: {
            "input-group-sm": t.size === "sm"
          }
        }, [r("button", {
          staticClass: "input-group-text fill-current",
          class: {
            "p-1": t.size === "sm",
            "pointer-events-none opacity-50": t.disabled || t.readonly
          },
          attrs: {
            type: "button",
            tabindex: "-1",
            disabled: t.disabled || t.readonly
          },
          on: {
            click: function(c) {
              l(), t.$refs.startDateInput.focus();
            }
          }
        }, [r("svg", {
          staticClass: "fill-current",
          class: {
            "w-3 h-3": t.size === "sm",
            "w-4 h-4": t.size !== "sm"
          },
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [t.mode === "time" ? r("path", {
          attrs: {
            d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
            fill: "currentColor"
          }
        }) : r("path", {
          attrs: {
            d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
          }
        })])]), r("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.inputDate.start,
            expression: "inputDate.start"
          }],
          ref: "startDateInput",
          staticClass: "form-control",
          class: {
            "px-1": t.size === "sm"
          },
          attrs: {
            type: "text",
            title: "".concat(t.placeholder),
            placeholder: t.placeholder,
            readonly: t.readonly,
            disabled: t.disabled,
            required: t.required,
            pattern: t.inputPattern
          },
          domProps: {
            value: t.inputDate.start
          },
          on: {
            focusin: function(c) {
              return s();
            },
            keydown: [function(u) {
              if (!u.type.indexOf("key") && t._k(u.keyCode, "tab", 9, u.key, "Tab"))
                return null;
              t.updateDatesFromInput(), o();
            }, function(u) {
              if (!u.type.indexOf("key") && t._k(u.keyCode, "enter", 13, u.key, "Enter"))
                return null;
              u.preventDefault(), t.updateDatesFromInput(), l();
            }],
            mousedown: function(c) {
              return c.stopPropagation(), l();
            },
            keyup: [function(u) {
              return !u.type.indexOf("key") && t._k(u.keyCode, "up", 38, u.key, ["Up", "ArrowUp"]) ? null : o();
            }, function(u) {
              return !u.type.indexOf("key") && t._k(u.keyCode, "down", 40, u.key, ["Down", "ArrowDown"]) ? null : s();
            }],
            change: t.updateDatesFromInput,
            input: function(c) {
              c.target.composing || t.$set(t.inputDate, "start", c.target.value);
            }
          }
        })]), t.isRange ? [t.hideArrow ? t._e() : r("div", {
          staticClass: "flex my-auto flex-shrink-0",
          class: {
            "opacity-50": t.disabled || t.readonly
          }
        }, [r("svg", {
          staticClass: "text-gray-700",
          class: {
            "w-5 h-5": t.size !== "sm",
            "w-4 h-4": t.size === "sm"
          },
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "aria-hidden": "true",
            role: "img",
            width: "32",
            height: "32",
            preserveAspectRatio: "xMidYMid meet",
            viewBox: "0 0 24 24"
          }
        }, [r("path", {
          attrs: {
            d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
            fill: "currentColor"
          }
        })])]), r("div", {
          staticClass: "w-full input-group",
          class: {
            "input-group-sm": t.size === "sm"
          }
        }, [r("button", {
          staticClass: "input-group-text fill-current",
          class: {
            "p-1": t.size === "sm",
            "pointer-events-none opacity-50": t.disabled || t.readonly
          },
          attrs: {
            type: "button",
            tabindex: "-1",
            disabled: t.disabled || t.readonly
          },
          on: {
            click: function(c) {
              l(), t.$refs.endDateInput.focus();
            }
          }
        }, [r("svg", {
          staticClass: "fill-current",
          class: {
            "w-3 h-3": t.size === "sm",
            "w-4 h-4": t.size !== "sm"
          },
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [t.mode === "time" ? r("path", {
          attrs: {
            d: "M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
            fill: "currentColor"
          }
        }) : r("path", {
          attrs: {
            d: "M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
          }
        })])]), r("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.inputDate.end,
            expression: "inputDate.end"
          }],
          ref: "endDateInput",
          staticClass: "form-control",
          class: {
            "px-1": t.size === "sm"
          },
          attrs: {
            type: "text",
            title: "".concat(t.placeholder),
            placeholder: t.placeholder,
            readonly: t.readonly,
            disabled: t.disabled,
            required: t.required,
            pattern: t.inputPattern
          },
          domProps: {
            value: t.inputDate.end
          },
          on: {
            focusin: function(c) {
              return s();
            },
            keydown: [function(u) {
              if (!u.type.indexOf("key") && t._k(u.keyCode, "tab", 9, u.key, "Tab"))
                return null;
              t.updateDatesFromInput(), o();
            }, function(u) {
              if (!u.type.indexOf("key") && t._k(u.keyCode, "enter", 13, u.key, "Enter"))
                return null;
              u.preventDefault(), t.updateDatesFromInput(), l();
            }],
            mousedown: function(c) {
              return c.stopPropagation(), l();
            },
            keyup: [function(u) {
              return !u.type.indexOf("key") && t._k(u.keyCode, "up", 38, u.key, ["Up", "ArrowUp"]) ? null : o();
            }, function(u) {
              return !u.type.indexOf("key") && t._k(u.keyCode, "down", 40, u.key, ["Down", "ArrowDown"]) ? null : s();
            }],
            change: t.updateDatesFromInput,
            input: function(c) {
              c.target.composing || t.$set(t.inputDate, "end", c.target.value);
            }
          }
        })])] : t._e()], 2)];
      }
    }, {
      key: "default",
      fn: function(i) {
        var s = i.close;
        return [r("div", {
          staticClass: "p-4"
        }, [r("calendar", {
          attrs: {
            min: t.min,
            max: t.max,
            mode: t.mode,
            "use-current-time-for-today": t.useCurrentTimeForToday
          },
          on: {
            input: function(l) {
              return t.focusCorrectInput(l, s);
            }
          },
          model: {
            value: t.localDate,
            callback: function(l) {
              t.localDate = l;
            },
            expression: "localDate"
          }
        })], 1)];
      }
    }])
  });
}, tv = [];
const ev = {
  name: "SdsDatepicker",
  components: {
    Calendar: eo,
    FloatingUi: jt
  },
  props: {
    zIndex: { type: String, required: !1, default: "50" },
    hideArrow: { type: Boolean, default: !1 },
    size: { type: String, default: "md" },
    mode: { type: String, default: "date" },
    value: { type: [Object, Date], default: null },
    max: { type: Date, default: null },
    min: { type: Date, default: null },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    useCurrentTimeForToday: { type: Boolean, default: !1 }
  },
  data() {
    return {
      inputDate: { start: "", end: "" }
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
    isRange() {
      return this.value && !(this.value instanceof Date);
    },
    placeholder() {
      switch (this.mode) {
        case "date":
          return "mm/dd/yyyy";
        case "time":
          return "hh:mm a";
        case "dateTime":
          return "mm/dd/yyyy hh:mm a";
        default:
          return "mm/dd/yyyy";
      }
    },
    inputFormat() {
      switch (this.mode) {
        case "date":
          return "MM/dd/yyyy";
        case "time":
          return "hh:mm aaa";
        case "dateTime":
          return "MM/dd/yyyy hh:mm aaa";
        default:
          return "MM/dd/yyyy";
      }
    },
    inputPattern() {
      switch (this.mode) {
        case "date":
          return "[0-9]{2}/[0-9]{2}/[0-9]{4}";
        case "time":
          return "[0-9]{2}:[0-9]{2} [a|p]m";
        case "dateTime":
          return "[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2} [a|p]m";
        default:
          return "[0-9]{2}/[0-9]{2}/[0-9]{4}";
      }
    },
    localDate: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  watch: {
    localDate: {
      handler(e) {
        if (this.isRange) {
          const t = e.start && this.formatDate(F(e.start, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" }, n = e.end && this.formatDate(F(e.end, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" };
          t.date && n.date && yt(t.date, n.date) ? this.inputDate = {
            start: n.text,
            end: t.text
          } : this.inputDate = {
            start: t.text,
            end: n.text
          };
        } else {
          const t = e && this.formatDate(F(e, "yyyy-MM-dd HH:mm:ss")) || { date: null, text: "" };
          this.inputDate = {
            start: t.text,
            end: ""
          };
        }
      },
      deep: !0,
      immediate: !0
    }
  },
  methods: {
    focusCorrectInput(e, t) {
      e && e instanceof Date ? this.$refs.startDateInput.focus() : e && !(e instanceof Date) && !e.start ? this.$refs.startDateInput.focus() : e && !(e instanceof Date) && !e.end ? this.$refs.endDateInput.focus() : e && !(e instanceof Date) && e.end ? this.$refs.endDateInput.focus() : this.$refs.startDateInput.focus(), this.mode === "date" && this.$nextTick(() => {
        (this.isRange && this.inputDate.start && this.inputDate.end || !this.isRange && this.inputDate.start) && t();
      });
    },
    updateDatesFromInput() {
      if (this.isRange) {
        const e = this.formatDate(this.inputDate.start), t = this.formatDate(this.inputDate.end);
        this.localDate = {
          start: e.date && t.date && Tr([e.date, t.date]) || e.date,
          end: e.date && t.date && jr([e.date, t.date]) || t.date
        }, e.date && t.date && yt(e.date, t.date) ? this.inputDate = {
          start: t.text,
          end: e.text
        } : this.inputDate = {
          start: e.text,
          end: t.text
        };
      } else {
        const e = this.formatDate(this.inputDate.start);
        this.localDate = e.date, this.inputDate = {
          start: e.text,
          end: ""
        };
      }
    },
    formatDate(e) {
      if (e === "now") {
        const a = new Date();
        return { date: a, text: F(a, this.inputFormat) };
      } else if (e === "today") {
        const a = H(q(Z(K(new Date(), 0), 0), 0), 0);
        return { date: a, text: F(a, this.inputFormat) };
      } else if (e === "tomorrow") {
        const a = As(H(q(Z(K(new Date(), 0), 0), 0), 0), 1);
        return { date: a, text: F(a, this.inputFormat) };
      } else if (e === "yesterday") {
        const a = Sr(H(q(Z(K(new Date(), 0), 0), 0), 0), 1);
        return { date: a, text: F(a, this.inputFormat) };
      }
      const t = [
        "MM/dd/yyyy hh:mm aaa",
        "MM/dd/yyyy hh:mm a",
        "MM/dd/yyyy h:mm aaa",
        "MM/dd/yyyy h:mm a",
        "MM/dd/yyyy hh:mmaaa",
        "MM/dd/yyyy hh:mma",
        "MM/dd/yyyy h:mmaaa",
        "MM/dd/yyyy h:mma",
        "MM/dd/yyyy H:mm",
        "MM/dd/yyyy HH:mm",
        "MM/dd/yyyy HH:mm:ss",
        "MM-dd-yyyy hh:mm aaa",
        "MM-dd-yyyy hh:mm a",
        "MM-dd-yyyy h:mm aaa",
        "MM-dd-yyyy h:mm a",
        "MM-dd-yyyy ha",
        "MM-dd-yyyy haaa",
        "MM-dd-yyyy hh:mmaaa",
        "MM-dd-yyyy hh:mma",
        "MM-dd-yyyy h:mmaaa",
        "MM-dd-yyyy h:mma",
        "MM-dd-yyyy H:mm",
        "MM-dd-yyyy HH:mm",
        "MM-dd-yyyy HH:mm:ss",
        "yyyy-MM-dd hh:mm aaa",
        "yyyy-MM-dd hh:mm a",
        "yyyy-MM-dd h:mm aaa",
        "yyyy-MM-dd h:mm a",
        "yyyy-MM-dd hh:mma",
        "yyyy-MM-dd h:mmaaa",
        "yyyy-MM-dd h:mma",
        "yyyy-MM-dd H:mm",
        "yyyy-MM-dd HH:mm",
        "yyyy-MM-dd HH:mm:ss",
        "MM/dd/yyyy",
        "MM-dd-yyyy",
        "yyyy-MM-dd",
        "M/d",
        "MM/dd",
        "MM/yyyy",
        "M-d",
        "MM-dd",
        "MM-yyyy",
        "yyyy/MM",
        "yyyy-MM",
        "M/dd/yyyy hh:mm aaa",
        "M/dd/yyyy hh:mm a",
        "M/dd/yyyy h:mm aaa",
        "M/dd/yyyy h:mm a",
        "M/dd/yyyy ha",
        "M/dd/yyyy haaa",
        "M/dd/yyyy hh:mmaaa",
        "M/dd/yyyy hh:mma",
        "M/dd/yyyy h:mmaaa",
        "M/dd/yyyy h:mma",
        "M/dd/yyyy H:mm",
        "M/dd/yyyy HH:mm",
        "M/dd/yyyy HH:mm:ss",
        "M-dd-yyyy hh:mm aaa",
        "M-dd-yyyy hh:mm a",
        "M-dd-yyyy h:mm aaa",
        "M-dd-yyyy h:mm a",
        "M-dd-yyyy hh:mmaaa",
        "M-dd-yyyy hh:mma",
        "M-dd-yyyy h:mmaaa",
        "M-dd-yyyy h:mma",
        "M-dd-yyyy H:mm",
        "M-dd-yyyy HH:mm",
        "M-dd-yyyy HH:mm:ss",
        "yyyy-M-dd hh:mm aaa",
        "yyyy-M-dd hh:mm a",
        "yyyy-M-dd h:mm aaa",
        "yyyy-M-dd h:mm a",
        "yyyy-M-dd hh:mma",
        "yyyy-M-dd h:mmaaa",
        "yyyy-M-dd h:mma",
        "yyyy-M-dd H:mm",
        "yyyy-M-dd HH:mm",
        "yyyy-M-dd HH:mm:ss",
        "yyyy-M-dd",
        "M/yyyy",
        "M-yyyy",
        "M/yyyy haaa",
        "M-yyyy haaa",
        "M/yyyy ha",
        "M/yyyy HH:mm:ss",
        "M-yyyy HH:mm:ss",
        "M.yyyy HH:mm:ss",
        "M-yyyy ha",
        "M/yyyy h:mmaaa",
        "M-yyyy h:mmaaa",
        "M/yyyy h:mma",
        "M-yyyy h:mma",
        "M/yyyy h:mm aaa",
        "M-yyyy h:mm aaa",
        "M/yyyy h:mm a",
        "M-yyyy h:mm a",
        "yyyy/M",
        "yyyy-M",
        "yyyy",
        "EEE",
        "EEEE",
        "LLL",
        "LLLL",
        "LLL yyyy",
        "LLLL yyyy",
        "LLL dd yyyy",
        "LLLL dd yyyy",
        "hh:mm aaa",
        "hh:mm a",
        "h:mm aaa",
        "h:mm a",
        "hh:mmaaa",
        "hh:mma",
        "h:mmaaa",
        "h:mma",
        "HH:mm:ss",
        "H:mm",
        "HH:mm",
        "QQQ",
        "QQQQ",
        "QQQ yyyy",
        "QQQQ yyyy",
        "PP",
        "PPP",
        "PPPP",
        "bbb",
        "h BBB",
        "h:mm BBB",
        "hh BBB",
        "hh:mm BBB",
        "hBBB",
        "h:mmBBB",
        "hhBBB",
        "hh:mmBBB"
      ];
      let n;
      const r = t.filter((a) => {
        const i = Ys(xr(e, a, new Date()));
        return i && (n = a), i;
      });
      if (r.length > 0) {
        let a = xr(e, r[0], new Date());
        if (this.mode === "date")
          a = H(q(Z(K(a, 0), 0), 0), 0);
        else if (this.mode === "time") {
          const u = F(a, "HH:mm:ss"), c = F(new Date(), "yyyy-MM-dd");
          a = xr(`${c} ${u}`, "yyyy-MM-dd HH:mm:ss", new Date());
        }
        const i = a.getFullYear();
        n === "LLLL dd yyyy" && i < 1e3 && (a = xf(a, 2e3));
        const s = Dr(a, this.min), o = yt(Sr(a, 1), this.max), l = kr(Sr(a, 1), this.max);
        if (!s && !o && !l)
          return { date: a, text: F(a, this.inputFormat) };
      }
      return { date: null, text: "" };
    }
  }
}, Vi = {};
var rv = /* @__PURE__ */ y(
  ev,
  Zm,
  tv,
  !1,
  nv,
  null,
  null,
  null
);
function nv(e) {
  for (let t in Vi)
    this[t] = Vi[t];
}
const av = /* @__PURE__ */ function() {
  return rv.exports;
}();
function Pt() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var iv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("floating-ui", {
    class: [t.block ? "w-full" : ""],
    attrs: {
      "data-id": "sds-dropdown",
      offset: t.offset,
      strategy: t.strategy,
      placement: t.placement,
      disabled: t.disabled,
      "will-open": t.willOpen,
      "will-close": t.willClose,
      "popper-class": "absolute border shadow-lg rounded-md bg-white dark:border-gray-600 dark:bg-gray-700 ".concat(t.auto ? "w-auto" : "w-56", " ").concat(t.zIndexClass),
      "hide-arrow": "",
      shift: ""
    },
    scopedSlots: t._u([{
      key: "trigger",
      fn: function(i) {
        var s = i.open, o = i.close, l = i.isOpen, u = i.toggle;
        return [t._t("trigger", function() {
          return [r("button", {
            ref: "button",
            staticClass: "btn space-x",
            class: [t.variantClass, t.sizeClass, t.outlineClass, t.disabledClass, t.blockClass, l ? "active" : ""],
            attrs: {
              id: t.id,
              type: "button",
              "aria-haspopup": "true",
              "aria-expanded": l,
              disabled: t.disabled
            },
            on: {
              click: function(f) {
                return t.handleClick(l, s, o);
              }
            }
          }, [t._t("title", function() {
            return [t._v(" " + t._s(t.title) + " ")];
          }), r("svg", {
            staticClass: "inline-block self-center w-5 h-5 -mr-1",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }
          }, [r("path", {
            attrs: {
              "fill-rule": "evenodd",
              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
              "clip-rule": "evenodd"
            }
          })])], 2)];
        }, {
          open: s,
          close: o,
          isOpen: l,
          toggle: u
        })];
      }
    }, {
      key: "default",
      fn: function(i) {
        var s = i.open, o = i.close, l = i.toggle, u = i.isOpen;
        return [r("div", {
          staticClass: "py-2",
          attrs: {
            "aria-orientation": "vertical",
            "aria-labelledby": t.$refs.button && t.$refs.button.id || void 0
          }
        }, [t._t("default", null, {
          close: o,
          open: s,
          toggle: l,
          isOpen: u
        })], 2)];
      }
    }], null, !0)
  });
}, sv = [];
const ov = {
  name: "SdsPopover",
  components: {
    FloatingUi: jt
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
    this.id = `sds-dropdown__${Pt()}`;
  },
  methods: {
    handleClick(e, t, n) {
      e ? n(this.closeDelay) : t(this.openDelay);
    }
  }
}, Wi = {};
var lv = /* @__PURE__ */ y(
  ov,
  iv,
  sv,
  !1,
  uv,
  null,
  null,
  null
);
function uv(e) {
  for (let t in Wi)
    this[t] = Wi[t];
}
const cv = /* @__PURE__ */ function() {
  return lv.exports;
}(), fv = J.extend({
  name: "SdsDropdownDivider"
});
var dv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "my-2 border-t border-gray-100 dark:border-gray-600",
    attrs: {
      "data-id": "sds-dropdown-divider"
    }
  });
}, hv = [];
const qi = {};
var pv = /* @__PURE__ */ y(
  fv,
  dv,
  hv,
  !1,
  yv,
  null,
  null,
  null
);
function yv(e) {
  for (let t in qi)
    this[t] = qi[t];
}
const mv = /* @__PURE__ */ function() {
  return pv.exports;
}(), vv = J.extend({
  name: "SdsDropdownHeader"
});
var gv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "px-4 py-1 text-sm font-semibold leading-5 text-gray-500 dark:text-gray-300",
    attrs: {
      "data-id": "sds-dropdown-header"
    }
  }, [t._t("default")], 2);
}, wv = [];
const Ji = {};
var bv = /* @__PURE__ */ y(
  vv,
  gv,
  wv,
  !1,
  Mv,
  null,
  null,
  null
);
function Mv(e) {
  for (let t in Ji)
    this[t] = Ji[t];
}
const Lv = /* @__PURE__ */ function() {
  return bv.exports;
}(), _v = J.extend({
  name: "SdsDropdownItem",
  props: {
    tag: {
      type: String,
      default: "a"
    },
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    active: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    listeners() {
      return Object.assign({}, this.$listeners);
    }
  }
});
var xv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r(t.tag, t._g({
    tag: "component",
    staticClass: "block w-full select-none px-4 py-2 text-sm leading-5 text-left hover:no-underline hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600 focus:text-white",
    class: {
      "bg-blue-500 dark:bg-blue-600 text-white": t.active,
      "text-gray-700 dark:text-gray-100": !t.active,
      "pointer-events-none opacity-50": t.disabled
    },
    attrs: {
      "data-id": "sds-dropdown-item",
      disabled: t.disabled,
      role: "menuitem"
    },
    on: {
      click: function(i) {
        t.closeOnClick && t.$root.$emit("floating-ui-toggle");
      }
    }
  }, t.listeners), [t._t("default")], 2);
}, Cv = [];
const Xi = {};
var Sv = /* @__PURE__ */ y(
  _v,
  xv,
  Cv,
  !1,
  jv,
  null,
  null,
  null
);
function jv(e) {
  for (let t in Xi)
    this[t] = Xi[t];
}
const Tv = /* @__PURE__ */ function() {
  return Sv.exports;
}();
var Nv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "border border-dashed border-2 dark:border-gray-700 rounded p-4 space-y-2 relative",
    attrs: {
      "data-id": "sds-file-uploader"
    }
  }, [r("input", {
    ref: "fileInput",
    staticClass: "absolute inset-0 opacity-0 cursor-pointer",
    attrs: {
      id: t.fileUploaderId,
      type: "file",
      accept: t.accept,
      multiple: t.multiple,
      required: t.required,
      name: t.name
    },
    on: {
      change: t.processFiles
    }
  }), r("div", {
    staticClass: "space-y-2"
  }, [r("div", {
    staticClass: "flex gap-2"
  }, [r("label", {
    staticClass: "btn btn-default cursor-pointer z-10",
    attrs: {
      for: t.fileUploaderId
    }
  }, [t._v("Browse")]), r("svg", {
    staticClass: "my-auto h-4 w-4 text-tertiary",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [r("path", {
    attrs: {
      fill: "currentColor",
      d: "M105.4 182.6c12.5 12.49 32.76 12.5 45.25.001L224 109.3V352c0 17.67 14.33 32 32 32s32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0s-16.4 3.125-22.6 9.375L105.4 137.4c-12.52 12.5-12.52 32.7 0 45.2zM480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24s24 10.8 24 24s-10.8 24-24 24z"
    }
  })]), r("span", {
    staticClass: "my-auto"
  }, [t._v(t._s(t.multiple ? "Drag and drop your files here" : "Drag and drop a file here"))])]), r("p", {
    staticClass: "text-gray-500 text-sm"
  }, [t._v(" " + t._s(t.helperText ? t.helperText : t.multiple ? "Use files under ".concat(t.filesize, " MB.") : "Use a file under ".concat(t.filesize, " MB.")) + " ")]), t._t("default", function() {
    return [t.fileList.length > 0 || t.invalidFileList.length > 0 ? r("ul", [t._l(t.fileList, function(a) {
      return r("li", {
        key: a.name + a.size + a.type + a.lastModified,
        staticClass: "py-2 border-b only:border-0 last:pb-0 last:border-0"
      }, [r("div", {
        staticClass: "flex"
      }, [r("div", {
        staticClass: "my-auto flex gap-1 flex-grow"
      }, [r("svg", {
        staticClass: "w-4 h-4 my-auto text-success",
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "aria-hidden": "true",
          role: "img",
          width: "32",
          height: "32",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 512 512"
        }
      }, [r("path", {
        attrs: {
          fill: "currentColor",
          d: "M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2 44.2l108.2-108.2c10.9-10.9 28.7-10.9 39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
        }
      })]), r("span", {
        staticClass: "my-auto"
      }, [t._v(t._s(a.name))]), r("span", {
        staticClass: "my-auto text-tertiary text-sm uppercase"
      }, [t._v("(" + t._s(t.byteToSize(a.size)) + ")")])]), r("button", {
        staticClass: "my-auto z-10 link hover:text-danger dark:hover:text-red-400",
        on: {
          click: function(s) {
            return t.removeFile(a);
          }
        }
      }, [r("svg", {
        staticClass: "w-5 h-5 x",
        attrs: {
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true"
        }
      }, [r("path", {
        attrs: {
          "fill-rule": "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          "clip-rule": "evenodd"
        }
      })]), r("span", {
        staticClass: "sr-only"
      }, [t._v("Remove file")])])])]);
    }), t._l(t.invalidFileList, function(a) {
      return r("li", {
        key: a.name + a.size + a.type + a.lastModified,
        staticClass: "py-2 border-b only:border-0 last:pb-0 last:border-0"
      }, [r("div", {
        staticClass: "flex"
      }, [r("div", {
        staticClass: "my-auto flex gap-1 flex-grow"
      }, [r("svg", {
        staticClass: "w-4 h-4 my-auto text-danger",
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "aria-hidden": "true",
          role: "img",
          width: "32",
          height: "32",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 512 512"
        }
      }, [r("path", {
        attrs: {
          fill: "currentColor",
          d: "M175 175c9.4-9.3 24.6-9.3 33.1 0l47 47.1L303 175c9.4-9.3 24.6-9.3 33.1 0c10.2 9.4 10.2 24.6 0 33.1l-46.2 47l46.2 47.9c10.2 9.4 10.2 24.6 0 33.1c-8.5 10.2-23.7 10.2-33.1 0l-47.9-46.2l-47 46.2c-8.5 10.2-23.7 10.2-33.1 0c-9.3-8.5-9.3-23.7 0-33.1l47.1-47.9l-47.1-47c-9.3-8.5-9.3-23.7 0-33.1zm337 81c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
        }
      })]), r("span", {
        staticClass: "my-auto"
      }, [t._v(t._s(a.name))]), r("span", {
        staticClass: "my-auto text-tertiary text-sm uppercase"
      }, [t._v("(" + t._s(t.byteToSize(a.size)) + ")")])]), r("button", {
        staticClass: "my-auto z-10 link hover:text-danger dark:hover:text-red-400",
        on: {
          click: function(s) {
            return t.removeInvalidFile(a);
          }
        }
      }, [r("svg", {
        staticClass: "w-5 h-5 x",
        attrs: {
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true"
        }
      }, [r("path", {
        attrs: {
          "fill-rule": "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          "clip-rule": "evenodd"
        }
      })]), r("span", {
        staticClass: "sr-only"
      }, [t._v("Remove file")])])]), a.invalidType ? r("p", {
        staticClass: "text-danger text-xs ml-5 mt-1"
      }, [t._v(" Invalid file type ")]) : t._e(), a.invalidSize ? r("p", {
        staticClass: "text-danger text-xs ml-5 mt-1"
      }, [t._v(" File size is over " + t._s(t.filesize) + " MB. ")]) : t._e()]);
    })], 2) : t._e()];
  }, {
    files: t.fileList,
    invalidFiles: t.invalidFileList
  })], 2)]);
}, Dv = [];
const kv = {
  name: "SdsFileUploader",
  props: {
    value: { type: Array, default: () => [] },
    name: { type: String, default: "sdsFileUploader" },
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    accept: { type: String, default: void 0 },
    allowedFiletypes: { type: Array, default: () => [] },
    filesize: { type: Number, default: 10 },
    helperText: { type: String, default: void 0 }
  },
  data() {
    return {
      fileList: [],
      invalidFileList: []
    };
  },
  computed: {
    fileUploaderId() {
      return `sds-file-uploader-${Pt()}`;
    }
  },
  watch: {
    value: {
      handler(e) {
        if (!this.$refs.fileInput)
          return;
        const t = new DataTransfer();
        e.forEach((n) => t.items.add(n)), this.$refs.fileInput.files = t.files, this.fileList = [], this.invalidFileList = [], Array.from(t.files).forEach((n) => {
          this.processSingleFile(n);
        });
      },
      immediate: !0,
      deep: !0
    }
  },
  methods: {
    removeFile(e) {
      if (!this.$refs.fileInput)
        return;
      const t = new DataTransfer();
      this.fileList = this.fileList.filter((n) => !(n.name === e.name && n.lastModified === e.lastModified && n.size === e.size && n.type === e.type)), this.fileList.forEach((n) => {
        t.items.add(n);
      }), this.$refs.fileInput.files = t.files, this.$emit("remove", { files: this.fileList, invalidFiles: this.invalidFileList }), this.$emit("input", [...this.fileList, ...this.invalidFileList]);
    },
    removeInvalidFile(e) {
      this.invalidFileList = this.invalidFileList.filter((t) => !(t.name === e.name && t.lastModified === e.lastModified && t.size === e.size && t.type === e.type)), this.$emit("remove-invalid", { files: this.fileList, invalidFiles: this.invalidFileList }), this.$emit("input", [...this.fileList, ...this.invalidFileList]);
    },
    findFile(e) {
      return this.fileList.find((t) => t.name === e.name && t.lastModified === e.lastModified && t.size === e.size && t.type === e.type);
    },
    processFiles(e) {
      if (!e.target)
        return;
      const t = e.target.files;
      Array.from(t).forEach((n) => {
        this.findFile(n) || this.processSingleFile(n);
      }), this.$emit("add", { files: this.fileList, invalidFiles: this.invalidFileList }), this.$emit("input", [...this.fileList, ...this.invalidFileList]);
    },
    processSingleFile(e) {
      if (!this.$refs.fileInput)
        return;
      const t = new DataTransfer(), n = parseFloat((e.size / 1024 / 1024).toFixed(4)), r = e.type, a = this.allowedFiletypes.length > 0 && this.allowedFiletypes.includes(r) || this.allowedFiletypes.length < 1;
      this.multiple && this.fileList.forEach((i) => {
        t.items.add(i);
      }), n <= this.filesize && a ? (t.items.add(e), this.$refs.fileInput.files = t.files, this.fileList = Array.from(this.$refs.fileInput.files) || [], this.multiple || (this.invalidFileList = [])) : n > this.filesize ? this.multiple ? (e.invalidSize = !0, this.invalidFileList.push(e), this.invalidFileList = this.invalidFileList.filter(
        (i, s, o) => s === o.findIndex((l) => l.name === i.name && l.lastModified === i.lastModified && l.size === i.size && l.type === i.type)
      )) : (this.fileList = [], this.$refs.fileInput.files = t.files, e.invalidSize = !0, this.invalidFileList = [e]) : a || (this.multiple ? (e.invalidType = !0, this.invalidFileList.push(e), this.invalidFileList = this.invalidFileList.filter(
        (i, s, o) => s === o.findIndex((l) => l.name === i.name && l.lastModified === i.lastModified && l.size === i.size && l.type === i.type)
      )) : (this.fileList = [], this.$refs.fileInput.files = t.files, e.invalidType = !0, this.invalidFileList = [e]));
    },
    byteToSize(e) {
      const t = ["b", "kb", "mb", "gb", "tb"];
      if (e <= 0 || e > 999999999999999)
        return "n/a";
      const n = parseInt(`${Math.floor(Math.log(e) / Math.log(1024))}`, 10);
      return n === 0 ? `${e}${t[n]}` : `${Math.ceil(e / 1024 ** n)} ${t[n]}`;
    }
  }
}, Ki = {};
var Ov = /* @__PURE__ */ y(
  kv,
  Nv,
  Dv,
  !1,
  zv,
  null,
  null,
  null
);
function zv(e) {
  for (let t in Ki)
    this[t] = Ki[t];
}
const Iv = /* @__PURE__ */ function() {
  return Ov.exports;
}();
var Pv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("floating-ui", {
    attrs: {
      "data-id": "sds-filter-by-dropdown",
      placement: t.placement,
      "popper-class": "absolute border shadow-lg rounded-md bg-gray-100 dark:border-gray-600 dark:bg-gray-700 w-72 ".concat(t.zIndexClass),
      "arrow-class": "absolute bg-gray-100 border dark:border-gray-600 dark:bg-gray-700 w-3 h-3 rotate-45",
      "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
      "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
      "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
      "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0",
      shift: ""
    },
    scopedSlots: t._u([{
      key: "trigger",
      fn: function(i) {
        var s = i.isOpen, o = i.toggle;
        return [r("button", {
          ref: "button",
          class: t.variantClass,
          attrs: {
            id: t.id,
            type: "button",
            "aria-haspopup": "true",
            "aria-expanded": s
          },
          on: {
            click: function(u) {
              o(), t.resetTmpOptions();
            }
          }
        }, [t._t("title", function() {
          return [r("span", [t._v(t._s(t.title))])];
        }), r("svg", {
          staticClass: "inline-block self-center w-5 h-5 -mr-1",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }
        }, [r("path", {
          attrs: {
            "fill-rule": "evenodd",
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            "clip-rule": "evenodd"
          }
        })])], 2)];
      }
    }, {
      key: "default",
      fn: function(i) {
        var s = i.close;
        return [r("div", {
          staticClass: "p-2",
          attrs: {
            "aria-orientation": "vertical",
            "aria-labelledby": t.$refs.button && t.$refs.button.id || void 0
          }
        }, [t.enableFilter ? r("div", {
          staticClass: "input-group input-group-sm mb-2 pb-2 border-b"
        }, [r("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.filterText,
            expression: "filterText"
          }],
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: "Type to filter"
          },
          domProps: {
            value: t.filterText
          },
          on: {
            input: function(l) {
              l.target.composing || (t.filterText = l.target.value);
            }
          }
        }), r("span", {
          staticClass: "input-group-text"
        }, [r("svg", {
          staticClass: "w-5 h-5",
          attrs: {
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }
        }, [r("path", {
          attrs: {
            "fill-rule": "evenodd",
            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
            "clip-rule": "evenodd"
          }
        })])])]) : t._e(), t.enableFilter ? t._e() : r("div", {
          staticClass: "pb-2 mb-2 space-x-1 space-y-2 border-b dark:border-gray-500"
        }, [r("label", {
          staticClass: "text-gray-900 dark:text-gray-50 flex gap-1 w-max"
        }, [r("input", {
          staticClass: "my-auto",
          attrs: {
            type: "checkbox"
          },
          domProps: {
            checked: t.allSelected,
            indeterminate: t.indeterminate
          },
          on: {
            click: function(l) {
              return t.toggleSelect();
            }
          }
        }), r("span", {
          staticClass: "my-auto"
        }, [t._v("Select all")])])]), r("div", {
          staticClass: "scroll-area max-h-48"
        }, [r("ul", t._l(t.filteredTmpOptions, function(o) {
          return r("li", {
            key: o.id
          }, [r("div", {
            staticClass: "space-x-1"
          }, [r("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: o.selected,
              expression: "o.selected"
            }],
            staticClass: "focus:ring-0",
            attrs: {
              id: "filter_by_dropdown_selection_list_".concat(o.id),
              type: "checkbox"
            },
            domProps: {
              value: o.id,
              checked: Array.isArray(o.selected) ? t._i(o.selected, o.id) > -1 : o.selected
            },
            on: {
              change: function(u) {
                var c = o.selected, f = u.target, d = !!f.checked;
                if (Array.isArray(c)) {
                  var h = o.id, p = t._i(c, h);
                  f.checked ? p < 0 && t.$set(o, "selected", c.concat([h])) : p > -1 && t.$set(o, "selected", c.slice(0, p).concat(c.slice(p + 1)));
                } else
                  t.$set(o, "selected", d);
              }
            }
          }), r("label", {
            staticClass: "text-gray-900 dark:text-gray-50 ml-1",
            attrs: {
              for: "filter_by_dropdown_selection_list_".concat(o.id)
            }
          }, [t._v(t._s(o.text))])])]);
        }), 0)]), r("div", {
          staticClass: "pt-4 space-y-2"
        }, [r("button", {
          staticClass: "btn btn-blue btn-block btn-sm",
          on: {
            click: function(l) {
              t.saveSelections(), s();
            }
          }
        }, [t._v(" Apply filter ")]), r("button", {
          staticClass: "btn btn-default btn-block btn-sm",
          on: {
            click: function(l) {
              t.cancelSelections(), s();
            }
          }
        }, [t._v(" Cancel ")])])])];
      }
    }], null, !0)
  });
}, Ev = [];
const $v = {
  name: "SdsFilterByDropdown",
  components: {
    FloatingUi: jt
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
      set(e) {
        this.$emit("update:value", e);
      }
    },
    allSelected() {
      return this.tmpOptions.every((e) => e.selected);
    },
    someSelected() {
      return this.tmpOptions.some((e) => e.selected);
    },
    indeterminate() {
      return this.someSelected && !this.allSelected;
    },
    filteredTmpOptions() {
      return this.tmpOptions.filter(
        (e) => e.text && e.text.toLowerCase().includes(this.filterText.toLowerCase())
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
    this.id = `sds-filter-by-dropdown__${Pt()}`;
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
      const e = JSON.parse(JSON.stringify(this.options));
      this.enableSortOptions ? this.tmpOptions = e.sort((t, n) => t.text.toLowerCase() < n.text.toLowerCase() ? -1 : t.text.toLowerCase() > n.text.toLowerCase() ? 1 : 0).sort((t, n) => t.selected > n.selected ? -1 : t.selected < n.selected ? 1 : 0) : this.tmpOptions = e, this.filterText = "";
    },
    deselectAllOptions() {
      this.tmpOptions.forEach((e) => {
        e.selected = !1;
      });
    },
    selectAllOptions() {
      this.tmpOptions.forEach((e) => {
        e.selected = !0;
      });
    }
  }
}, Zi = {};
var Av = /* @__PURE__ */ y(
  $v,
  Pv,
  Ev,
  !1,
  Rv,
  null,
  null,
  null
);
function Rv(e) {
  for (let t in Zi)
    this[t] = Zi[t];
}
const Yv = /* @__PURE__ */ function() {
  return Av.exports;
}(), Uv = J.extend({
  name: "SdsCharacterCounter",
  props: {
    currentValue: { type: Number, default: 0 },
    maxValue: { type: Number, default: 0 }
  },
  computed: {
    count() {
      return (this.maxValue - this.currentValue).toLocaleString();
    }
  }
});
var Bv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    class: {
      "text-danger": t.count < 0
    },
    attrs: {
      "data-id": "sds-character-counter"
    }
  }, [t._v(" " + t._s(t.count) + " ")]);
}, Qv = [];
const ts = {};
var Hv = /* @__PURE__ */ y(
  Uv,
  Bv,
  Qv,
  !1,
  Fv,
  null,
  null,
  null
);
function Fv(e) {
  for (let t in ts)
    this[t] = ts[t];
}
const co = /* @__PURE__ */ function() {
  return Hv.exports;
}();
var Gv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", [t.type === "checkbox" ? r("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.text,
      expression: "text"
    }],
    staticClass: "form-control",
    class: {
      valid: t.valid,
      invalid: t.invalid
    },
    attrs: {
      "data-id": "sds-input",
      maxlength: t.maxlength,
      placeholder: t.placeholder !== "" ? t.placeholder : !1,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      required: t.required,
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(t.text) ? t._i(t.text, null) > -1 : t.text
    },
    on: {
      change: function(i) {
        var s = t.text, o = i.target, l = !!o.checked;
        if (Array.isArray(s)) {
          var u = null, c = t._i(s, u);
          o.checked ? c < 0 && (t.text = s.concat([u])) : c > -1 && (t.text = s.slice(0, c).concat(s.slice(c + 1)));
        } else
          t.text = l;
      }
    }
  }) : t.type === "radio" ? r("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.text,
      expression: "text"
    }],
    staticClass: "form-control",
    class: {
      valid: t.valid,
      invalid: t.invalid
    },
    attrs: {
      "data-id": "sds-input",
      maxlength: t.maxlength,
      placeholder: t.placeholder !== "" ? t.placeholder : !1,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      required: t.required,
      type: "radio"
    },
    domProps: {
      checked: t._q(t.text, null)
    },
    on: {
      change: function(i) {
        t.text = null;
      }
    }
  }) : r("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.text,
      expression: "text"
    }],
    staticClass: "form-control",
    class: {
      valid: t.valid,
      invalid: t.invalid
    },
    attrs: {
      "data-id": "sds-input",
      maxlength: t.maxlength,
      placeholder: t.placeholder !== "" ? t.placeholder : !1,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      required: t.required,
      type: t.type
    },
    domProps: {
      value: t.text
    },
    on: {
      input: function(i) {
        i.target.composing || (t.text = i.target.value);
      }
    }
  }), t.countCharacters ? r("character-counter", {
    staticClass: "text-right text-gray-500",
    attrs: {
      "current-value": t.text.length,
      "max-value": t.maxlength
    }
  }) : t._e()], 1);
}, Vv = [];
const Wv = {
  name: "SdsInput",
  components: {
    CharacterCounter: co
  },
  props: {
    value: { type: String, default: "" },
    countCharacters: { type: Boolean, default: !1 },
    maxlength: { type: Number, default: 524288 },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    valid: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 }
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  }
}, es = {};
var qv = /* @__PURE__ */ y(
  Wv,
  Gv,
  Vv,
  !1,
  Jv,
  null,
  null,
  null
);
function Jv(e) {
  for (let t in es)
    this[t] = es[t];
}
const Xv = /* @__PURE__ */ function() {
  return qv.exports;
}(), Kv = J.extend({
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
var Zv = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("a", {
    class: [t.linkClass, t.variantClass, t.ctaClass, t.disabledClass],
    attrs: {
      "data-id": "sds-link",
      target: t.external ? "_blank" : !1,
      rel: t.external ? "noopener noreferrer" : !1,
      tabindex: t.disabled ? -1 : void 0
    }
  }, [t._t("default")], 2);
}, tg = [];
const rs = {};
var eg = /* @__PURE__ */ y(
  Kv,
  Zv,
  tg,
  !1,
  rg,
  null,
  null,
  null
);
function rg(e) {
  for (let t in rs)
    this[t] = rs[t];
}
const fo = /* @__PURE__ */ function() {
  return eg.exports;
}();
var ng = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("floating-ui", {
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
      fn: function(i) {
        var s = i.open, o = i.close;
        return [r("div", {
          on: {
            mouseover: function(u) {
              typeof s < "u" && s(t.openDelay);
            },
            mouseleave: function(u) {
              typeof o < "u" && o(t.closeDelay);
            }
          }
        }, [t._t("trigger")], 2)];
      }
    }, {
      key: "default",
      fn: function(i) {
        var s = i.open, o = i.close, l = i.toggle, u = i.isOpen;
        return [r("div", {
          staticClass: "p-2",
          on: {
            mouseover: function(f) {
              typeof s < "u" && s();
            },
            mouseout: function(f) {
              typeof o < "u" && o(t.closeDelay);
            }
          }
        }, [t._t("default", null, {
          close: o,
          open: s,
          toggle: l,
          isOpen: u
        })], 2)];
      }
    }], null, !0)
  });
}, ag = [];
const ig = {
  name: "SdsPopover",
  components: {
    FloatingUi: jt
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
}, ns = {};
var sg = /* @__PURE__ */ y(
  ig,
  ng,
  ag,
  !1,
  og,
  null,
  null,
  null
);
function og(e) {
  for (let t in ns)
    this[t] = ns[t];
}
const ho = /* @__PURE__ */ function() {
  return sg.exports;
}(), lg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4NTEuOSAxNDQuMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODUxLjkgMTQ0LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIxMy41LDE4LjcgMjEzLjUsNDUuNSAyMTgsNDUuNSAyMTgsNDcuMyAyMDAuMSw0Ny4zIDIwMC4xLDQ1LjUgMjA0LjYsNDUuNSAyMDQuNiwyMC42IDIwMS4xLDIwLjYgCgkJMjAxLjEsMTguNyAJIi8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzYuOSwxLjRoLTEuNmMtMC4xLDEuNC0wLjgsMi0yLjIsMkMzMC40LDMuNCwyNi4zLDAsMjEuNiwwQzguMSwwLDAsMTMuMywwLDI1YzAsMTEuOCw3LjgsMjMuNCwyMC44LDIzLjQKCQljNy45LDAsMTAuOC0zLjcsMTIuOS0zLjdjMS40LDAsMS42LDEuMiwxLjYsMi43aDEuOFYzMS4yaC0xLjhsLTAuNCwyLjJjLTAuOSw1LjMtNS4xLDEzLjItMTMuNSwxMy4yYy03LjUsMC0xMC40LTYuNS0xMC40LTIyLjQKCQlDMTEsNy40LDE1LDEuOCwyMS42LDEuOGM3LjUsMCwxMi42LDguNCwxMy43LDE1LjFoMS42VjEuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MCwzOS42Yy0wLjEsMy40LTIuMSw2LjMtNS4xLDYuM2MtNC40LDAtNC42LTMuNy00LjYtNi42YzAtMy40LDAuNC01LjcsNC42LTYuMmw1LjEtMC41VjM5LjZ6IE03MS44LDQxLjcKCQljMCwxLjctMS4xLDMuNi0xLjgsMy42Yy0xLjIsMC0xLjQtMS4yLTEuNC0zLjJWMjcuMmMwLTcuNC02LjktOS4yLTEzLjYtOS4yYy02LjUsMC0xMS4yLDMuMi0xMS4yLDYuOGMwLDIuMywxLjMsNC4yLDQuMiw0LjIKCQljMi41LDAsNC0xLjYsNC0zLjljMC0zLjMtMy40LTMuMy0zLjQtMy40YzAtMS41LDMuOC0xLjksNi0xLjljNC45LDAsNS41LDEuOCw1LjUsNS43djUuNGwtNi40LDAuNWMtNS45LDAuNS0xMi4zLDItMTIuMyw4LjgKCQljMCw1LjYsNS4xLDcuOSwxMCw3LjljMi41LDAsNy0xLDguNy00LjFjMS4yLDIuNywzLjYsNC4xLDYuNSw0LjFjNC4yLDAsNi45LTIuNSw2LjktNi4zSDcxLjh6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjY3NC41LDE4LjYgNjc0LjUsNDUuNCA2NzksNDUuNCA2NzksNDcuMiA2NjEuMSw0Ny4yIDY2MS4xLDQ1LjQgNjY1LjYsNDUuNCA2NjUuNiwyMC41IDY2MS4xLDIwLjUgCgkJNjYxLjEsMTguNiAJIi8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg2LDMyLjVsMTAuNy0zMC43aDE0LjhsMCwxLjhoLTQuMnY0Mmg0LjJ2MS44aC0xNy44di0xLjhoNC4zVjRoLTAuMWwtMTUuMSw0My4zSDI4MUwyNjUuNSwzLjJoLTAuMVY0MAoJCWMwLDUuMiwxLjQsNS41LDQuOSw1LjVoMC4ydjEuOGgtMTEuMnYtMS44bDAsMGMzLjcsMCw0LjQtMi4yLDQuNC00Ljl2LTM3aC00LjRWMS43aDE2LjNMMjg2LDMyLjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIxLjgsMjkuOXYtNC40YzAtNC4zLDEuOS01LjcsNC4xLTUuN2MzLjEsMCw0LjEsMi4xLDQuMSw1Ljd2NC40SDMyMS44eiBNMzIxLjgsMzEuNmgxNy45CgkJYy0wLjEtNy02LjUtMTMuNy0xMy40LTEzLjZjLTcuNiwwLTE0LjMsNi42LTE0LjMsMTUuNGMwLDguNCw2LjIsMTQuNywxNC41LDE0LjdjOCwwLDExLjktNC45LDEzLjQtMTEuM2gtMS44CgkJYy0xLjQsNi00LjYsOS41LTkuNiw5LjVjLTYsMC02LjctNC43LTYuNy05LjFWMzEuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OTEuMSwyOS44di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzMuMSwwLDQuMSwyLjEsNC4xLDUuN3Y0LjRINTkxLjF6IE01OTEuMSwzMS41SDYwOQoJCWMtMC4xLTctNi41LTEzLjctMTMuNC0xMy42Yy03LjYsMC0xNC4zLDYuNi0xNC4zLDE1LjRjMCw4LjQsNi4yLDE0LjcsMTQuNSwxNC43YzgsMCwxMS45LTQuOSwxMy40LTExLjNoLTEuOAoJCWMtMS40LDYtNC42LDkuNS05LjYsOS41Yy02LDAtNi43LTQuNy02LjctOS4xVjMxLjV6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjMzOS44LDEuOCAzMzkuOCwzLjQgMzQ0LjMsMy40IDM0NC4zLDQ1LjUgMzM5LjgsNDUuNSAzMzkuOCw0Ny4zIDM1Ny43LDQ3LjMgMzU3LjcsNDUuNSAzNTMuMyw0NS41IAoJCTM1My4zLDEuOCAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM1OSwxLjggMzU5LDMuNCAzNjMuNCwzLjQgMzYzLjQsNDUuNSAzNTksNDUuNSAzNTksNDcuMyAzNzYuOSw0Ny4zIDM3Ni45LDQ1LjUgMzcyLjQsNDUuNSAzNzIuNCwxLjggCgkJCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM5Ny40LDM5LjVjMCw0LjktMiw2LjktNS4zLDYuOWMtMy4zLDAtNS4zLTItNS4zLTYuOVYyNi43YzAtNC45LDItNi45LDUuMy02LjljMy4zLDAsNS4zLDIsNS4zLDYuOVYzOS41egoJCSBNNDA3LjUsMzMuMWMwLTguOS02LjktMTUtMTUuNC0xNWMtOC42LDAtMTUuNCw2LjItMTUuNCwxNWMwLDguOSw2LjksMTUsMTUuNCwxNUM0MDAuNyw0OC4xLDQwNy41LDQxLjksNDA3LjUsMzMuMSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1NC4xLDMuM2g0LjV2MjguOGMwLDEwLDYuOSwxNi4xLDE3LjUsMTYuMWMxMS45LDAsMTcuMS02LjMsMTcuMS0xNS44VjcuOGMwLTMuOCwxLTQuNSwzLjQtNC41aDEuM1YxLjUKCQloLTExLjR2MS43aDAuOGMzLjMsMCwzLjgsMSwzLjgsNC44djI1YzAsOC44LTUuNSwxMi44LTExLDEyLjhjLTkuNSwwLTExLjMtNi40LTExLjktMTQuNlYzLjNoNC4yVjEuNWgtMTguM1YzLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTY2LjMsNDcuOWgxLjdsOS42LTIyLjdjMS45LTQuMiwzLTQuOCw0LjUtNC44aDAuNnYtMS44aC0xMC4xdjEuOGgxLjJjMS45LDAsMi43LTAuMSwyLjcsMS42CgkJYzAsMS0wLjMsMi4xLTEuMSwzLjlsLTQuNCwxMC40TDU2NCwyMC40aDMuNnYtMS44aC0xNi4zdjEuOGgzTDU2Ni4zLDQ3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjM4LjYsNDcuOWgxLjVjMC4zLTEsMS0xLjYsMi4zLTEuNmMxLjcsMCwzLjcsMS42LDcuMywxLjZjNi4yLDAsMTAuNC01LjMsMTAuNC0xMC42YzAtNy45LTUuNC04LjUtMTIuNC05LjUKCQljLTMuNi0wLjUtNS43LTEtNS43LTMuOWMwLTMsMi43LTQuMyw2LjItNC4zYzQuOSwwLDYuNywzLjIsOC40LDcuNGgxLjVsMC05LjJoLTEuNWMwLDAuOC0wLjcsMS40LTEuOSwxLjRjLTIuMSwwLTMuOC0xLjQtNi43LTEuNAoJCWMtNi41LDAtOS43LDUuNS05LjcsOS43YzAsOC40LDYuNCw5LjEsMTEuMyw5LjdjNC43LDAuNiw2LjQsMC45LDYuNCwzLjljMCwzLjQtMi45LDUtNi40LDVjLTQuOSwwLTguMy00LjMtOS41LTloLTEuNVY0Ny45eiIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1NDksMTguNiA1NDksNDUuNCA1NTMuNSw0NS40IDU1My41LDQ3LjIgNTM1LjYsNDcuMiA1MzUuNiw0NS40IDU0MC4xLDQ1LjQgNTQwLjEsMjAuNSA1MzUuNiwyMC41IAoJCTUzNS42LDE4LjYgCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU0MC4xLDkuN2MwLDIuNSwyLDQuNSw0LjUsNC41YzIuNSwwLDQuNS0yLDQuNS00LjVjMC0yLjUtMi00LjUtNC41LTQuNUM1NDIsNS4yLDU0MC4xLDcuMiw1NDAuMSw5LjciLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NjUuNiw5LjdjMCwyLjUsMiw0LjUsNC41LDQuNWMyLjUsMCw0LjUtMiw0LjUtNC41YzAtMi41LTItNC41LTQuNS00LjVDNjY3LjYsNS4yLDY2NS42LDcuMiw2NjUuNiw5LjciLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDkuOCwyOS45di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzMuMSwwLDQuMSwyLjEsNC4xLDUuN3Y0LjRIMTQ5Ljh6IE0xNDkuOCwzMS42aDE3LjkKCQljLTAuMS03LTYuNS0xMy43LTEzLjQtMTMuNmMtNy42LDAtMTQuMyw2LjYtMTQuMywxNS40YzAsOC40LDYuMiwxNC43LDE0LjUsMTQuN2M4LDAsMTEuOS00LjksMTMuNC0xMS4zaC0xLjgKCQljLTEuNCw2LTQuNiw5LjUtOS42LDkuNWMtNiwwLTYuNy00LjctNi43LTkuMVYzMS42eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyOCwyOS45di00LjRjMC00LjMsMS45LTUuNyw0LjEtNS43YzIuMywwLDQuMSwxLjMsNC4xLDUuN3Y0LjRIMjI4eiBNMjI4LDMxLjZoMTcuOQoJCWMtMC4xLTctNi41LTEzLjctMTMuNC0xMy42Yy03LjYsMC0xNC4zLDYuNi0xNC4zLDE1LjRjMCw4LjQsNi4yLDE0LjcsMTQuNSwxNC43YzgsMCwxMS45LTQuOSwxMy40LTExLjNoLTEuOAoJCWMtMS40LDYtNC42LDkuNS05LjYsOS41Yy02LDAtNi43LTQuNy02LjctOS4xVjMxLjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTI5LjgsNDUuNVYyOGMwLTctMy0xMC4zLTkuMS0xMC4zYy00LjMsMC04LjcsMi41LTEwLjUsNi4zaDB2LTUuMmgtMTMuNHYxLjdoNC41djI1aC00LjV2MS44SDUxNHYtMS44aC0zLjgKCQlWMjguNGMwLjYtMi40LDMuNi04LDcuMS04YzIuNCwwLDMuNSwwLjgsMy41LDUuMnYxOS45aC0zLjd2MS44aDE3LjF2LTEuOEg1MjkuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjAuOSwxOC44djUuMmgwYzEuOC0zLjgsNi4yLTYuMywxMC41LTYuM2M2LjIsMCw5LjEsMy4zLDkuMSwxMC4zdjE3LjVoNC41djEuOGgtMTcuMXYtMS44aDMuN1YyNS43CgkJYzAtNC4zLTEuMi01LjItMy41LTUuMmMtMy41LDAtNi42LDUuNi03LjEsOHYxNy4xaDMuOHYxLjhoLTE3LjJ2LTEuOGg0LjV2LTI1aC00LjV2LTEuN0g0MjAuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMzUuNSw0NS42VjI4LjFjMC03LTMtMTAuMy05LjEtMTAuM2MtNC4zLDAtOC43LDIuNS0xMC41LDYuM2gwdi01LjJoLTEzLjR2MS43aDQuNXYyNWgtNC41djEuOGgxNy4ydi0xLjgKCQloLTMuOFYyOC41YzAuNi0yLjQsMy42LTgsNy4xLThjMi40LDAsMy41LDAuOCwzLjUsNS4ydjE5LjloLTMuN3YxLjhIMTQwdi0xLjhIMTM1LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA0LjYsOS44YzAsMi41LDIsNC41LDQuNSw0LjVjMi41LDAsNC41LTIsNC41LTQuNWMwLTIuNS0yLTQuNS00LjUtNC41QzIwNi42LDUuNCwyMDQuNiw3LjQsMjA0LjYsOS44Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzE4LDE4LjZ2MS45YzIuOCwwLDQsMC4zLDQsMS41YzAsMS0wLjMsMi4xLTEuMSwzLjlsLTQuNCwxMC40bC03LTE1LjhoMy43di0xLjloLTIyLjNWNC43aC0xLjIKCQljMCw2LjktNC43LDEzLjktMTEuMiwxMy45djEuOWgzLjR2MjAuMWMwLDYuMiw1LjMsNy40LDcuMSw3LjRjNCwwLDYuNi0xLjYsOC42LTVsLTEuNC0wLjhjLTAuOCwxLjItMS44LDIuNy0zLjQsMi43CgkJYy0xLjMsMC0yLTAuOS0yLTMuMVYyMC41aDlsMTEuOCwyNy4zbC00LjEsOS43bDAsMGMwLDAsMCwwLDAsMGwwLDBjLTAuMSwwLjItMC4zLDAuMy0wLjUsMC4zYy0wLjIsMC0wLjQtMC4yLTAuNS0wLjRjMCwwLDAsMCwwLDAKCQljLTAuNS0xLjktMi4yLTMuMi00LjMtMy4yYy0yLjUsMC00LjUsMi00LjUsNC41YzAsMS43LDEsMy4yLDIuNCw0YzAsMCwwLDAsMCwwYzAsMCwwLjEsMCwwLjEsMC4xYzAuMSwwLDAuMiwwLjEsMC4zLDAuMQoJCWMwLjUsMC4yLDEsMC4zLDEuNiwwLjNjMy44LDAuMyw1LjctMi41LDctNS4zYzAuMy0wLjYsMC42LTEuMywwLjgtMS45YzAuNi0xLjQsMS42LTMuNywyLjctNi41bDAsMGwxLjEtMi42bDAsMGw5LjEtMjEuNgoJCWMxLjktNC4yLDIuNy00LjgsNS00LjhoMHYtMS45SDcxOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NS45LDE3LjdjLTQuMSwwLTcuMywyLjktOC42LDYuMWgtMC4xdi00LjlINzR2MS44aDQuNXYyNC45SDc0djEuOGgxOS40di0xLjhoLTZ2LTE0YzAtNC4yLDEuMS04LjQsMy44LTEwLjgKCQljMC4yLTAuMSwwLjQtMC4xLDAuNi0wLjFjMC4yLDAuMSwwLjMsMC4zLDAuMywwLjZsMCwwYy0wLjIsMC41LTAuMywxLjEtMC4zLDEuOGMtMC4xLDIuNCwxLjksNC4yLDQuNCw0LjJjMy4xLDAsNC45LTIuMyw0LjktNC43CgkJQzEwMS4xLDE5LjYsOTksMTcuNyw5NS45LDE3Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkzLjUsMTkuOGMwLjEsMCwwLjMtMC4xLDAuNCwwYzAuMSwwLjEsMC4xLDAuMiwwLDAuNGwwLDBjLTAuNCwwLjctMC41LDEuNS0wLjIsMi40YzAuMywwLjksMS4xLDEuNiwyLDEuOAoJCWMxLjksMC40LDMuNS0wLjksMy41LTIuN2MwLTEuMS0wLjctMi0xLjUtMi41Yy0wLjgtMC41LTEuOC0wLjgtMi45LTAuOGMtMS43LDAtMy41LDAuOS00LjgsMmMwLDAsMCwwLDAsMAoJCWMtMC4zLTAuMi0wLjYtMC40LTAuOS0wLjZjLTEuOC0xLTQuMS0xLjctNy4yLTEuN2MtNS40LDAtMTEuMywzLjYtMTEuMyw5LjVjMCwzLjYsMS45LDYuNCw1LjQsNy45djAuMWMtMi41LDAuMy02LjUsMi4xLTYuNSw3LjUKCQljMCwzLjIsMS41LDUuNyw0LjIsNi41djAuMWMtMi42LDAuNy01LjYsMy4zLTUuNiw2LjRjMCw0LjgsNS42LDguNSwxMi44LDguNWM5LDAsMTQuOS02LjEsMTQuOS0xNGMwLTYuMy0zLjEtOS4xLTkuNS05aC0xMC44CgkJYy0xLjYsMC0yLjctMC4xLTIuNy0xLjhjMC0xLjYsMi41LTMuNCw0LjktMy40YzAuNCwwLDEuMSwwLjMsMS4zLDAuNGMwLjgsMC4zLDEuNiwwLjQsMi43LDAuNGM1LjYsMCwxMS41LTMuMiwxMS41LTkuMwoJCWMwLTEuOS0wLjgtNC41LTIuNC02LjFjLTAuMS0wLjEtMC4xLTAuMiwwLTAuM2MwLjYtMC41LDEuMy0wLjksMS43LTEuMUMxOTMsMjAsMTkzLjIsMTkuOSwxOTMuNSwxOS44TDE5My41LDE5Ljh6IE0xODQuOSw0OS42CgkJYzYuNSwwLDguMiwwLjMsOC4yLDQuMmMwLDQuNy01LjgsOS4xLTEyLjMsOS4xYy01LjgsMC04LjYtMy42LTguOC02LjdjMC0yLjksMS40LTQuNywzLjItNi42SDE4NC45eiBNMTg2LDI3LjUKCQljMCw3LjUtMS43LDcuOC00LjEsNy44Yy0yLjYsMC00LTAuNS00LThjMC01LjMsMC42LTcuNSw0LTcuNUMxODQuOSwxOS44LDE4NS45LDIwLDE4NiwyNy41TDE4NiwyNy41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYzMS43LDE3LjVjLTQuMSwwLTcuMywyLjktOC42LDYuMUg2MjN2LTQuOWgtMTMuM3YxLjhoNC41djI0LjloLTQuNXYxLjhoMTkuNHYtMS44aC02di0xNAoJCWMwLTQuMiwxLjEtOC40LDMuOC0xMC44YzAuMi0wLjEsMC40LTAuMSwwLjYtMC4xYzAuMiwwLjEsMC4zLDAuMywwLjMsMC42bDAsMGMtMC4yLDAuNS0wLjMsMS4xLTAuMywxLjhjLTAuMSwyLjQsMS45LDQuMiw0LjQsNC4yCgkJYzMuMSwwLDQuOS0yLjMsNC45LTQuN0M2MzYuOCwxOS4zLDYzNC43LDE3LjUsNjMxLjcsMTcuNXoiLz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMC4yLDExNi42YzAsMy45LTEuNCw2LjktNC4zLDkuMmMtMi44LDIuMy02LjYsMy40LTExLjMsMy40Yy01LjcsMC0xMC0wLjYtMTMtMS45di0zLjIKCQljMy4zLDEuNCw3LjYsMi4xLDEyLjgsMi4xYzMuOCwwLDYuOC0wLjksOS4xLTIuNmMyLjItMS43LDMuMy00LDMuMy02LjljMC0xLjgtMC40LTMuMi0xLjEtNC40Yy0wLjctMS4yLTEuOS0yLjItMy42LTMuMgoJCWMtMS43LTEtNC4xLTItNy40LTMuMWMtNC43LTEuNi04LTMuNC05LjgtNS4zYy0xLjgtMS45LTIuNy00LjQtMi43LTcuNmMwLTMuNSwxLjQtNi4zLDQuMS04LjVjMi43LTIuMiw2LjItMy4zLDEwLjUtMy4zCgkJYzQuNCwwLDguNSwwLjgsMTIuMywyLjVsLTEuMiwyLjhjLTMuOS0xLjYtNy41LTIuNC0xMS0yLjRjLTMuNCwwLTYuMiwwLjgtOC4yLDIuNHMtMywzLjctMyw2LjVjMCwxLjcsMC4zLDMuMSwwLjksNC4yCgkJYzAuNiwxLjEsMS42LDIuMSwzLjEsM2MxLjQsMC45LDMuOSwxLjksNy4zLDMuMmMzLjYsMS4yLDYuMywyLjUsOC4yLDMuNmMxLjgsMS4yLDMuMSwyLjUsNCw0QzI5LjgsMTEyLjcsMzAuMiwxMTQuNSwzMC4yLDExNi42eiIKCQkvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2LjgsMTExLjJjMCw1LjYtMS40LDEwLTQuMSwxMy4yYy0yLjcsMy4yLTYuNSw0LjctMTEuMyw0LjdjLTMsMC01LjctMC43LTgtMi4yYy0yLjMtMS41LTQuMS0zLjYtNS4zLTYuMwoJCWMtMS4yLTIuNy0xLjgtNS45LTEuOC05LjVjMC01LjYsMS40LTEwLDQuMS0xMy4yYzIuNy0zLjEsNi41LTQuNywxMS4yLTQuN2M0LjcsMCw4LjUsMS42LDExLjIsNC44CgkJQzY1LjUsMTAxLjMsNjYuOCwxMDUuNyw2Ni44LDExMS4yeiBNMzkuNiwxMTEuMmMwLDQuNywxLDguNCwzLjEsMTEuMWMyLjEsMi43LDUsNCw4LjgsNHM2LjgtMS4zLDguOC00YzIuMS0yLjcsMy4xLTYuNCwzLjEtMTEuMQoJCWMwLTQuOC0xLjEtOC41LTMuMi0xMS4xYy0yLjEtMi42LTUuMS0zLjktOC45LTMuOXMtNi43LDEuMy04LjgsMy45QzQwLjYsMTAyLjgsMzkuNiwxMDYuNSwzOS42LDExMS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4LjUsOTYuOGgtOC4xdjMxLjhoLTMuMVY5Ni44aC02LjR2LTEuOGw2LjQtMS4ydi0yLjdjMC00LjIsMC44LTcuMywyLjMtOS4zYzEuNi0yLDQuMS0zLDcuNi0zCgkJYzEuOSwwLDMuOCwwLjMsNS43LDAuOWwtMC43LDIuN2MtMS43LTAuNS0zLjQtMC44LTUtMC44Yy0yLjUsMC00LjIsMC43LTUuMiwyLjJzLTEuNSwzLjgtMS41LDcuMVY5NGg4LjFWOTYuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDYuMywxMjYuNGMyLDAsMy43LTAuMiw1LjItMC41djIuNWMtMS41LDAuNS0zLjMsMC44LTUuMywwLjhjLTMsMC01LjMtMC44LTYuNy0yLjQKCQljLTEuNC0xLjYtMi4yLTQuMi0yLjItNy43Vjk2LjhoLTUuMXYtMS44bDUuMS0xLjRsMS42LTcuOGgxLjZWOTRoMTAuMXYyLjdoLTEwLjF2MjEuOGMwLDIuNiwwLjUsNC42LDEuNCw1LjkKCQlDMTAyLjgsMTI1LjgsMTA0LjMsMTI2LjQsMTA2LjMsMTI2LjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ3LjUsMTI4LjVsLTcuNi0yMy4xYy0wLjUtMS42LTEuMS0zLjktMS45LTYuOWgtMC4ybC0wLjcsMi4zbC0xLjQsNC42bC03LjcsMjNIMTI1TDExNS4xLDk0aDMuNGw1LjUsMjAKCQljMS4zLDUsMi4xLDguNiwyLjUsMTAuOWgwLjJjMS4yLTUsMi4yLTguMiwyLjctOS45bDcuMS0yMWgyLjlsNi44LDIxYzEuNSw1LDIuNSw4LjMsMi44LDkuOWgwLjJjMC4yLTEuNCwxLTUuMSwyLjUtMTFMMTU3LDk0aDMuMgoJCWwtOS40LDM0LjVIMTQ3LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg3LDEyOC41bC0wLjgtNS41SDE4NmMtMS43LDIuMi0zLjUsMy44LTUuMyw0LjdjLTEuOCwwLjktNCwxLjQtNi41LDEuNGMtMy40LDAtNi0wLjktNy45LTIuNgoJCWMtMS45LTEuNy0yLjgtNC4xLTIuOC03LjJjMC0zLjQsMS40LTYsNC4yLTcuOGMyLjgtMS45LDYuOS0yLjgsMTIuMi0zbDYuNi0wLjJ2LTIuM2MwLTMuMy0wLjctNS44LTItNy40Yy0xLjMtMS43LTMuNS0yLjUtNi40LTIuNQoJCWMtMy4yLDAtNi41LDAuOS05LjksMi43bC0xLjItMi43YzMuOC0xLjgsNy41LTIuNywxMS4yLTIuN2MzLjgsMCw2LjYsMSw4LjUsM2MxLjksMiwyLjgsNSwyLjgsOS4ydjIyLjlIMTg3eiBNMTc0LjMsMTI2LjMKCQljMy43LDAsNi42LTEuMSw4LjctMy4yYzIuMS0yLjEsMy4yLTUsMy4yLTguOFYxMTFsLTYsMC4zYy00LjgsMC4yLTguMywxLTEwLjQsMi4zYy0yLjEsMS4zLTMuMSwzLjMtMy4xLDZjMCwyLjIsMC43LDMuOCwyLDUKCQlDMTcwLDEyNS43LDE3MS45LDEyNi4zLDE3NC4zLDEyNi4zeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIxNS4xLDkzLjRjMS41LDAsMywwLjEsNC43LDAuNGwtMC42LDNjLTEuNC0wLjQtMi45LTAuNS00LjUtMC41Yy0yLjksMC01LjQsMS4yLTcuMiwzLjcKCQljLTEuOSwyLjUtMi44LDUuNi0yLjgsOS41djE5aC0zLjFWOTRoMi43bDAuMyw2LjJoMC4yYzEuNC0yLjUsMi45LTQuMyw0LjUtNS4zQzIxMC44LDkzLjksMjEyLjgsOTMuNCwyMTUuMSw5My40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNi42LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41SDIyNGMwLDQuNywxLjEsOC40LDMuMywxMC45YzIuMiwyLjUsNS4zLDMuNyw5LjMsMy43YzIsMCwzLjctMC4xLDUuMi0wLjQKCQljMS41LTAuMywzLjQtMC45LDUuNy0xLjh2Mi45Yy0xLjksMC44LTMuNywxLjQtNS40LDEuN1MyMzguNiwxMjkuMiwyMzYuNiwxMjkuMnogTTIzNS43LDk2LjJjLTMuMywwLTYsMS4xLTgsMy4zCgkJYy0yLDIuMi0zLjIsNS4zLTMuNSw5LjVoMjEuM2MwLTQtMC45LTcuMS0yLjYtOS40QzI0MS4yLDk3LjMsMjM4LjgsOTYuMiwyMzUuNyw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwMC4xLDEyOC41aC0yNS40VjgyLjFoMjUuNHYzSDI3OHYxNy42aDIwLjl2M0gyNzh2MTkuOWgyMi4xVjEyOC41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzMS42LDEyOC41di0yMi40YzAtMy41LTAuNy02LTIuMi03LjZjLTEuNS0xLjYtMy43LTIuNC02LjgtMi40Yy00LjEsMC03LjEsMS05LjEsMy4xCgkJYy0xLjksMi4xLTIuOSw1LjUtMi45LDEwLjF2MTloLTMuMVY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkgzMzEuNnoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzIuMyw5NHYyLjJsLTcuMSwwLjRjMS45LDIuNCwyLjksNSwyLjksNy44YzAsMy4zLTEuMSw2LTMuMyw4LjFjLTIuMiwyLjEtNS4yLDMuMS04LjksMy4xCgkJYy0xLjYsMC0yLjctMC4xLTMuMy0wLjJjLTEuMiwwLjctMi4yLDEuNC0yLjksMi4zYy0wLjcsMC45LTEsMS44LTEsMi44YzAsMS4xLDAuNCwxLjksMS4zLDIuNHMyLjIsMC44LDQuMiwwLjhoNgoJCWMzLjcsMCw2LjYsMC44LDguNiwyLjNjMiwxLjUsMywzLjcsMyw2LjdjMCwzLjYtMS41LDYuNC00LjQsOC40Yy0zLDItNy4yLDMtMTIuNiwzYy00LjMsMC03LjctMC44LTEwLjEtMi41Yy0yLjQtMS43LTMuNi00LTMuNi03CgkJYzAtMi40LDAuNy00LjMsMi4yLTUuOWMxLjUtMS42LDMuNS0yLjYsNi0zLjJjLTEtMC40LTEuOS0xLjEtMi41LTEuOWMtMC42LTAuOC0wLjktMS44LTAuOS0yLjhjMC0yLjMsMS41LTQuMyw0LjQtNi4xCgkJYy0yLTAuOC0zLjYtMi4xLTQuNy0zLjljLTEuMS0xLjgtMS43LTMuOC0xLjctNi4xYzAtMy40LDEuMS02LjIsMy4zLTguM2MyLjItMi4xLDUuMS0zLjEsOC45LTMuMWMyLjMsMCw0LDAuMiw1LjMsMC43SDM3Mi4zegoJCSBNMzQ0LjQsMTM0LjRjMCw0LjcsMy41LDcuMSwxMC42LDcuMWM5LjEsMCwxMy42LTIuOSwxMy42LTguN2MwLTIuMS0wLjctMy42LTIuMS00LjVjLTEuNC0wLjktMy43LTEuNC02LjktMS40aC01LjYKCQlDMzQ3LjUsMTI2LjksMzQ0LjQsMTI5LjQsMzQ0LjQsMTM0LjR6IE0zNDcsMTA0LjhjMCwyLjcsMC44LDQuNywyLjQsNi4yYzEuNiwxLjUsMy44LDIuMiw2LjUsMi4yYzIuOSwwLDUuMS0wLjcsNi42LTIuMgoJCXMyLjMtMy42LDIuMy02LjNjMC0yLjktMC44LTUuMS0yLjQtNi42cy0zLjgtMi4yLTYuNi0yLjJjLTIuOCwwLTQuOSwwLjgtNi41LDIuNEMzNDcuOCw5OS44LDM0NywxMDIsMzQ3LDEwNC44eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM4MC4yLDg0LjVjMC0yLDAuNy0zLDItM2MwLjcsMCwxLjIsMC4zLDEuNSwwLjhjMC40LDAuNSwwLjYsMS4zLDAuNiwyLjNjMCwxLTAuMiwxLjctMC42LDIuMwoJCWMtMC40LDAuNi0wLjksMC44LTEuNSwwLjhDMzgwLjksODcuNSwzODAuMiw4Ni41LDM4MC4yLDg0LjV6IE0zODMuOCwxMjguNWgtMy4xVjk0aDMuMVYxMjguNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjAuMiwxMjguNXYtMjIuNGMwLTMuNS0wLjctNi0yLjItNy42Yy0xLjUtMS42LTMuNy0yLjQtNi44LTIuNGMtNC4xLDAtNy4xLDEtOS4xLDMuMQoJCWMtMS45LDIuMS0yLjksNS41LTIuOSwxMC4xdjE5aC0zLjFWOTRoMi43bDAuNiw0LjdoMC4yYzIuMi0zLjYsNi4yLTUuNCwxMi01LjRjNy44LDAsMTEuNyw0LjIsMTEuNywxMi42djIyLjZINDIwLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDQ2LjksMTI5LjJjLTUsMC04LjktMS41LTExLjctNC42Yy0yLjgtMy4xLTQuMi03LjQtNC4yLTEzYzAtNS41LDEuNC05LjksNC4xLTEzLjJjMi43LTMuMyw2LjQtNSwxMC45LTUKCQljNC4xLDAsNy4zLDEuNCw5LjYsNC4zYzIuMywyLjgsMy41LDYuNywzLjUsMTEuNnYyLjVoLTI0LjljMCw0LjcsMS4xLDguNCwzLjMsMTAuOWMyLjIsMi41LDUuMywzLjcsOS4zLDMuN2MyLDAsMy43LTAuMSw1LjItMC40CgkJYzEuNS0wLjMsMy40LTAuOSw1LjctMS44djIuOWMtMS45LDAuOC0zLjcsMS40LTUuNCwxLjdTNDQ4LjksMTI5LjIsNDQ2LjksMTI5LjJ6IE00NDYsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDNDUxLjUsOTcuMyw0NDkuMSw5Ni4yLDQ0Niw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4MS40LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41aC0yNC45YzAsNC43LDEuMSw4LjQsMy4zLDEwLjljMi4yLDIuNSw1LjMsMy43LDkuMywzLjdjMiwwLDMuNy0wLjEsNS4yLTAuNAoJCWMxLjUtMC4zLDMuNC0wLjksNS43LTEuOHYyLjljLTEuOSwwLjgtMy43LDEuNC01LjQsMS43UzQ4My40LDEyOS4yLDQ4MS40LDEyOS4yeiBNNDgwLjUsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDNDg2LDk3LjMsNDgzLjYsOTYuMiw0ODAuNSw5Ni4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUxNSw5My40YzEuNSwwLDMsMC4xLDQuNywwLjRsLTAuNiwzYy0xLjQtMC40LTIuOS0wLjUtNC41LTAuNWMtMi45LDAtNS40LDEuMi03LjIsMy43CgkJYy0xLjksMi41LTIuOCw1LjYtMi44LDkuNXYxOWgtMy4xVjk0aDIuN2wwLjMsNi4yaDAuMmMxLjQtMi41LDIuOS00LjMsNC41LTUuM0M1MTAuOCw5My45LDUxMi43LDkzLjQsNTE1LDkzLjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTI0LjEsODQuNWMwLTIsMC43LTMsMi0zYzAuNywwLDEuMiwwLjMsMS41LDAuOGMwLjQsMC41LDAuNiwxLjMsMC42LDIuM2MwLDEtMC4yLDEuNy0wLjYsMi4zCgkJYy0wLjQsMC42LTAuOSwwLjgtMS41LDAuOEM1MjQuNyw4Ny41LDUyNC4xLDg2LjUsNTI0LjEsODQuNXogTTUyNy43LDEyOC41aC0zLjFWOTRoMy4xVjEyOC41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2NCwxMjguNXYtMjIuNGMwLTMuNS0wLjctNi0yLjItNy42Yy0xLjUtMS42LTMuNy0yLjQtNi44LTIuNGMtNC4xLDAtNy4xLDEtOS4xLDMuMQoJCWMtMS45LDIuMS0yLjksNS41LTIuOSwxMC4xdjE5SDU0MFY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkg1NjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjA1LjYsOTR2Mi4ybC03LjEsMC40YzEuOSwyLjQsMi45LDUsMi45LDcuOGMwLDMuMy0xLjEsNi0zLjMsOC4xYy0yLjIsMi4xLTUuMiwzLjEtOC45LDMuMQoJCWMtMS42LDAtMi43LTAuMS0zLjMtMC4yYy0xLjIsMC43LTIuMiwxLjQtMi45LDIuM2MtMC43LDAuOS0xLDEuOC0xLDIuOGMwLDEuMSwwLjQsMS45LDEuMywyLjRzMi4yLDAuOCw0LjIsMC44aDYKCQljMy43LDAsNi42LDAuOCw4LjYsMi4zYzIsMS41LDMsMy43LDMsNi43YzAsMy42LTEuNSw2LjQtNC40LDguNGMtMywyLTcuMiwzLTEyLjYsM2MtNC4zLDAtNy43LTAuOC0xMC4xLTIuNWMtMi40LTEuNy0zLjYtNC0zLjYtNwoJCWMwLTIuNCwwLjctNC4zLDIuMi01LjljMS41LTEuNiwzLjUtMi42LDYtMy4yYy0xLTAuNC0xLjktMS4xLTIuNS0xLjljLTAuNi0wLjgtMC45LTEuOC0wLjktMi44YzAtMi4zLDEuNS00LjMsNC40LTYuMQoJCWMtMi0wLjgtMy42LTIuMS00LjctMy45Yy0xLjEtMS44LTEuNy0zLjgtMS43LTYuMWMwLTMuNCwxLjEtNi4yLDMuMy04LjNjMi4yLTIuMSw1LjEtMy4xLDguOS0zLjFjMi4zLDAsNCwwLjIsNS4zLDAuN0g2MDUuNnoKCQkgTTU3Ny43LDEzNC40YzAsNC43LDMuNSw3LjEsMTAuNiw3LjFjOS4xLDAsMTMuNi0yLjksMTMuNi04LjdjMC0yLjEtMC43LTMuNi0yLjEtNC41Yy0xLjQtMC45LTMuNy0xLjQtNi45LTEuNGgtNS43CgkJQzU4MC45LDEyNi45LDU3Ny43LDEyOS40LDU3Ny43LDEzNC40eiBNNTgwLjMsMTA0LjhjMCwyLjcsMC44LDQuNywyLjQsNi4yYzEuNiwxLjUsMy44LDIuMiw2LjUsMi4yYzIuOSwwLDUuMS0wLjcsNi42LTIuMgoJCXMyLjMtMy42LDIuMy02LjNjMC0yLjktMC44LTUuMS0yLjQtNi42cy0zLjgtMi4yLTYuNi0yLjJjLTIuOCwwLTQuOSwwLjgtNi41LDIuNEM1ODEuMSw5OS44LDU4MC4zLDEwMiw1ODAuMywxMDQuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MjYuNSwxMjguNVY4Mi4xaDMuMnY0Ni40SDYyNi41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2NS45LDEyOC41di0yMi40YzAtMy41LTAuNy02LTIuMi03LjZjLTEuNS0xLjYtMy43LTIuNC02LjgtMi40Yy00LjEsMC03LjEsMS05LjEsMy4xCgkJYy0xLjksMi4xLTIuOSw1LjUtMi45LDEwLjF2MTloLTMuMVY5NGgyLjdsMC42LDQuN2gwLjJjMi4yLTMuNiw2LjItNS40LDEyLTUuNGM3LjgsMCwxMS43LDQuMiwxMS43LDEyLjZ2MjIuNkg2NjUuOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MDAuOSwxMTkuNmMwLDMuMS0xLjIsNS41LTMuNSw3LjFjLTIuMywxLjctNS43LDIuNS0xMCwyLjVjLTQuNiwwLTguMy0wLjctMTEtMi4xdi0zLjQKCQljMy41LDEuNyw3LjEsMi42LDExLDIuNmMzLjQsMCw2LTAuNiw3LjgtMS43YzEuOC0xLjEsMi43LTIuNiwyLjctNC41YzAtMS43LTAuNy0zLjItMi4xLTQuNGMtMS40LTEuMi0zLjctMi4zLTYuOS0zLjUKCQljLTMuNC0xLjItNS45LTIuMy03LjMtMy4yYy0xLjQtMC45LTIuNC0xLjktMy4yLTNjLTAuNy0xLjEtMS4xLTIuNS0xLjEtNC4xYzAtMi42LDEuMS00LjYsMy4zLTYuMWMyLjItMS41LDUuMi0yLjMsOS4xLTIuMwoJCWMzLjcsMCw3LjMsMC43LDEwLjYsMi4xbC0xLjIsMi45Yy0zLjQtMS40LTYuNS0yLjEtOS40LTIuMWMtMi44LDAtNSwwLjUtNi43LDEuNGMtMS43LDAuOS0yLjUsMi4yLTIuNSwzLjljMCwxLjgsMC42LDMuMiwxLjksNC4zCgkJYzEuMywxLjEsMy44LDIuMyw3LjUsMy42YzMuMSwxLjEsNS40LDIuMSw2LjgsM2MxLjQsMC45LDIuNSwxLjksMy4yLDMuMVM3MDAuOSwxMTgsNzAwLjksMTE5LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzE5LjMsMTI2LjRjMiwwLDMuNy0wLjIsNS4yLTAuNXYyLjVjLTEuNSwwLjUtMy4zLDAuOC01LjMsMC44Yy0zLDAtNS4zLTAuOC02LjctMi40CgkJYy0xLjQtMS42LTIuMi00LjItMi4yLTcuN1Y5Ni44aC01LjF2LTEuOGw1LjEtMS40bDEuNi03LjhoMS42Vjk0aDEwLjF2Mi43aC0xMC4xdjIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzcxNS44LDEyNS44LDcxNy4zLDEyNi40LDcxOS4zLDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTczMC40LDg0LjVjMC0yLDAuNy0zLDItM2MwLjcsMCwxLjIsMC4zLDEuNSwwLjhjMC40LDAuNSwwLjYsMS4zLDAuNiwyLjNjMCwxLTAuMiwxLjctMC42LDIuMwoJCWMtMC40LDAuNi0wLjksMC44LTEuNSwwLjhDNzMxLDg3LjUsNzMwLjQsODYuNSw3MzAuNCw4NC41eiBNNzMzLjksMTI4LjVoLTMuMVY5NGgzLjFWMTI4LjV6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzU2LjIsMTI2LjRjMiwwLDMuNy0wLjIsNS4yLTAuNXYyLjVjLTEuNSwwLjUtMy4zLDAuOC01LjMsMC44Yy0zLDAtNS4zLTAuOC02LjctMi40CgkJYy0xLjQtMS42LTIuMi00LjItMi4yLTcuN1Y5Ni44aC01LjF2LTEuOGw1LjEtMS40bDEuNi03LjhoMS42Vjk0aDEwLjF2Mi43aC0xMC4xdjIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzc1Mi44LDEyNS44LDc1NC4yLDEyNi40LDc1Ni4yLDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc2OS41LDk0djIyLjNjMCwzLjUsMC43LDYsMi4yLDcuNmMxLjUsMS42LDMuNywyLjQsNi44LDIuNGM0LjEsMCw3LjEtMSw5LjEtMy4xYzEuOS0yLjEsMi45LTUuNCwyLjktMTAuMVY5NAoJCWgzLjF2MzQuNWgtMi43bC0wLjYtNC44aC0wLjJjLTIuMiwzLjYtNi4yLDUuNC0xMiw1LjRjLTcuOCwwLTExLjgtNC4yLTExLjgtMTIuNlY5NEg3NjkuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MTQuOCwxMjYuNGMyLDAsMy43LTAuMiw1LjItMC41djIuNWMtMS41LDAuNS0zLjMsMC44LTUuMywwLjhjLTMsMC01LjMtMC44LTYuNy0yLjQKCQljLTEuNC0xLjYtMi4yLTQuMi0yLjItNy43Vjk2LjhoLTUuMXYtMS44bDUuMS0xLjRsMS42LTcuOGgxLjZWOTRoMTAuMXYyLjdIODA5djIxLjhjMCwyLjYsMC41LDQuNiwxLjQsNS45CgkJQzgxMS4zLDEyNS44LDgxMi44LDEyNi40LDgxNC44LDEyNi40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTgzOS43LDEyOS4yYy01LDAtOC45LTEuNS0xMS43LTQuNmMtMi44LTMuMS00LjItNy40LTQuMi0xM2MwLTUuNSwxLjQtOS45LDQuMS0xMy4yYzIuNy0zLjMsNi40LTUsMTAuOS01CgkJYzQuMSwwLDcuMywxLjQsOS42LDQuM2MyLjMsMi44LDMuNSw2LjcsMy41LDExLjZ2Mi41aC0yNC45YzAsNC43LDEuMSw4LjQsMy4zLDEwLjljMi4yLDIuNSw1LjMsMy43LDkuMywzLjdjMiwwLDMuNy0wLjEsNS4yLTAuNAoJCWMxLjUtMC4zLDMuNC0wLjksNS43LTEuOHYyLjljLTEuOSwwLjgtMy43LDEuNC01LjQsMS43Uzg0MS43LDEyOS4yLDgzOS43LDEyOS4yeiBNODM4LjgsOTYuMmMtMy4zLDAtNiwxLjEtOCwzLjMKCQljLTIsMi4yLTMuMiw1LjMtMy41LDkuNWgyMS4zYzAtNC0wLjktNy4xLTIuNi05LjRDODQ0LjIsOTcuMyw4NDEuOCw5Ni4yLDgzOC44LDk2LjJ6Ii8+CjwvZz4KPC9zdmc+Cg==";
var ug = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "flex flex-col h-screen dark:text-gray-50",
    attrs: {
      "data-id": "sds-layout-app"
    }
  }, [r("div", {
    staticClass: "bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 flex flex-shrink-0"
  }, [r("div", {
    staticClass: "my-auto"
  }, [t.appSuite ? r("div", {
    staticClass: "hidden md:block"
  }, [t.appSuiteUrl ? r("a", {
    staticClass: "text-xl flex hover:underline",
    attrs: {
      href: t.appSuiteUrl
    },
    on: {
      click: function(i) {
        return t.navigate(null, {
          title: t.appSuite,
          href: t.appSuiteUrl
        }, i);
      }
    }
  }, [r("span", {
    staticClass: "text-red-400 font-bold"
  }, [t._v(t._s(t.appSuitePrefix))]), r("span", [t._v(t._s(t.appSuite))])]) : r("p", {
    staticClass: "text-xl flex"
  }, [r("span", {
    staticClass: "text-red-400 font-bold"
  }, [t._v(t._s(t.appSuitePrefix))]), r("span", [t._v(t._s(t.appSuite))])])]) : t._e(), t.appSuite || t.appName ? r("button", {
    ref: "mobileMenuOpenBtn",
    staticClass: "flex md:hidden gap-1 focus:outline-none",
    on: {
      click: function(i) {
        t.showMobileMenu = !t.showMobileMenu;
      }
    }
  }, [r("svg", {
    staticClass: "text-white h-6 w-6 inline-block",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 48 48"
    }
  }, [r("g", {
    attrs: {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  }, [r("path", {
    attrs: {
      d: "M7.95 11.95h32"
    }
  }), r("path", {
    attrs: {
      d: "M7.95 23.95h32"
    }
  }), r("path", {
    attrs: {
      d: "M7.95 35.95h32"
    }
  })])]), r("span", {
    staticClass: "text-xl leading-6 flex"
  }, [t.appSuitePrefix ? r("span", {
    staticClass: "text-red-400 font-bold"
  }, [t._v(t._s(t.appSuitePrefix))]) : t._e(), t.appSuite ? r("span", [t._v(t._s(t.appSuite))]) : t._e(), t.appName && !t.hideAppNameInMobileHeader ? r("span", {
    staticClass: "text-sm text-left font-bold text-gray-200 overflow-ellipsis text-ellipsis overflow-hidden whitespace-nowrap w-40 mt-auto mr-auto",
    class: [t.appSuite ? "ml-1" : ""]
  }, [t._v(t._s(t.appName))]) : t._e()])]) : t._e()]), r("div", {
    staticClass: "ml-auto my-auto flex gap-2 flex-shrink-0"
  }, [t._t("suite-header", null, {
    collapsed: t.collapsed
  })], 2)]), r("div", {
    staticClass: "flex flex-grow flex-shrink-0"
  }, [r("transition", {
    attrs: {
      "enter-active-class": "transition-opacity ease-linear duration-150",
      "enter-class": "opacity-0",
      "enter-to-class": "opacity-100",
      "leave-active-class": "transition-opacity ease-linear duration-150",
      "leave-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }
  }, [t.showMobileMenu ? r("button", {
    staticClass: "bg-black bg-opacity-40 fixed inset h-screen w-screen z-50 md:hidden",
    on: {
      click: function(i) {
        t.showMobileMenu = !t.showMobileMenu;
      }
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Toggle mobile menu")])]) : t._e()]), r("transition", {
    attrs: {
      "enter-active-class": "transition-transform ease-linear duration-150",
      "enter-class": "-translate-x-full",
      "enter-to-class": "translate-x-0",
      "leave-active-class": "transition-transform ease-linear duration-150",
      "leave-class": "translate-x-0",
      "leave-to-class": "-translate-x-full"
    }
  }, [t.showMobileMenu ? r("aside", {
    ref: "mobileSidebarContainer",
    staticClass: "md:hidden fixed w-2/3 z-50 bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0",
    on: {
      keydown: t.checkKeyEvent
    }
  }, [r("button", {
    ref: "mobileMenuCloseBtn",
    staticClass: "sr-only",
    on: {
      click: function(i) {
        t.showMobileMenu = !t.showMobileMenu;
      }
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Toggle mobile menu")])]), r("div", {
    staticClass: "h-screen flex flex-col sticky top-0"
  }, [r("div", {
    staticClass: "overflow-y-auto flex-grow overscroll-contain"
  }, [t.appName ? r("div", {
    staticClass: "sticky top-0 bg-gray-900 dark:bg-gray-800 z-10 flex gap-2 p-4"
  }, [t._t("app-icon", function() {
    return [t.hideAppIcon ? t._e() : r("span", {
      staticClass: "block w-8 h-8 my-auto flex-shrink-0"
    }, [t.appUrl ? [r("a", {
      attrs: {
        href: t.appUrl
      },
      on: {
        click: function(i) {
          return t.navigate(null, {
            title: t.appName,
            href: t.appUrl
          }, i);
        }
      }
    }, [t.appIconUrl ? r("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : r("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [r("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])])] : [t.appIconUrl ? r("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : r("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [r("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])]], 2)];
  }, {
    classList: "block w-8 h-8 my-auto flex-shrink-0"
  }), t.appUrl ? r("a", {
    staticClass: "text-lg font-bold my-auto hover:underline",
    attrs: {
      href: t.appUrl
    },
    on: {
      click: function(i) {
        return t.navigate(null, {
          title: t.appName,
          href: t.appUrl
        }, i);
      }
    }
  }, [t._v(" " + t._s(t.appName) + " ")]) : r("span", {
    staticClass: "text-lg font-bold my-auto"
  }, [t._v(" " + t._s(t.appName) + " ")])], 2) : t._e(), t.sidebarNavigationItems.length > 0 ? r("nav", {
    staticClass: "grid grid-cols-1 pb-24"
  }, [t._t("mobile-sidebar-navigation", function() {
    return [t._l(t.sidebarNavigationItems, function(a) {
      return [a.items ? [r("button", {
        key: a.id,
        staticClass: "flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8",
        class: {
          "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !t.itemsGroupIsActive(a) || t.showItemsGroup(a),
          "text-white border-danger": t.itemsGroupIsActive(a) && !t.showItemsGroup(a)
        },
        attrs: {
          href: a.href
        },
        on: {
          click: function(s) {
            return t.toggleItemsGroup(a);
          }
        }
      }, [t._t("mobile-sidebar-navigation-item-icon", function() {
        return [t.hideSidebarIcons ? t._e() : r("span", {
          staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
        }, [a.iconUrl ? r("img", {
          staticClass: "w-8 h-8",
          attrs: {
            src: a.iconUrl,
            alt: a.title
          }
        }) : r("svg", {
          staticClass: "w-8 h-8 fill-current",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [r("path", {
          attrs: {
            d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
          }
        })])])];
      }, {
        item: a,
        classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
      }), r("span", {
        staticClass: "inline-block my-auto text-left"
      }, [t._v(t._s(a.title))]), t.itemsGroupBadgeCount(a) && !t.showItemsGroup(a) ? r("span", {
        staticClass: "inline-block my-auto"
      }, [r("span", {
        staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
      }, [t._v(t._s(t.itemsGroupBadgeCount(a)))])]) : t._e(), r("svg", {
        staticClass: "absolute w-4 h-4 right-2 top-1/3",
        attrs: {
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [t.showItemsGroup(a) ? r("path", {
        attrs: {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "3",
          d: "M19 9l-7 7-7-7"
        }
      }) : r("path", {
        attrs: {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "3",
          d: "M9 5l7 7-7 7"
        }
      })])], 2), t.showItemsGroup(a) ? t._l(a.items, function(i) {
        return r("a", {
          key: "".concat(a.id, " + ").concat(i.id),
          staticClass: "flex relative gap-2 px-4 py-2 border-l-8",
          class: {
            "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !i.active,
            "text-white border-danger pointer-events-none": i.active,
            "pl-12": !t.hideSidebarIcons,
            "pl-8": t.hideSidebarIcons
          },
          attrs: {
            href: i.href
          },
          on: {
            click: function(o) {
              return t.navigate(a, i, o);
            }
          }
        }, [r("span", {
          staticClass: "inline-block my-auto text-left"
        }, [t._v(t._s(i.title))]), i.badgeCount ? r("span", {
          staticClass: "inline-block my-auto"
        }, [r("span", {
          staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
        }, [t._v(t._s(i.badgeCount))])]) : t._e()]);
      }) : t._e()] : r("a", {
        key: a.id,
        staticClass: "flex relative gap-2 pl-2 px-4 py-2 border-l-8",
        class: {
          "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !a.active,
          "text-white border-danger pointer-events-none": a.active
        },
        attrs: {
          href: a.href
        },
        on: {
          click: function(s) {
            return t.navigate(null, a, s);
          }
        }
      }, [t._t("mobile-sidebar-navigation-item-icon", function() {
        return [t.hideSidebarIcons ? t._e() : r("span", {
          staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
        }, [a.iconUrl ? r("img", {
          staticClass: "w-8 h-8",
          attrs: {
            src: a.iconUrl,
            alt: a.title
          }
        }) : r("svg", {
          staticClass: "w-8 h-8 fill-current",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512"
          }
        }, [r("path", {
          attrs: {
            d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
          }
        })])])];
      }, {
        item: a,
        classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
      }), r("span", {
        staticClass: "inline-block my-auto text-left"
      }, [t._v(t._s(a.title))]), a.badgeCount ? r("span", {
        staticClass: "inline-block my-auto"
      }, [r("span", {
        staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
      }, [t._v(t._s(a.badgeCount))])]) : t._e()], 2)];
    })];
  }, {
    items: t.sidebarNavigationItems,
    collapsed: t.collapsed
  })], 2) : t._e()])])]) : t._e()]), r("aside", {
    staticClass: "hidden md:block bg-gray-900 dark:bg-gray-800 text-white flex-shrink-0 z-50",
    class: [t.computedSidebarWidth]
  }, [r("div", {
    staticClass: "h-screen flex flex-col sticky top-0"
  }, [r("div", {
    staticClass: "overflow-y-auto flex-grow overscroll-contain"
  }, [t.appName ? r("div", {
    staticClass: "sticky top-0 bg-gray-900 dark:bg-gray-800 z-10"
  }, [t.appName ? r("p", {
    staticClass: "flex gap-2 p-4"
  }, [t._t("app-icon", function() {
    return [t.hideAppIcon ? t._e() : r("span", {
      staticClass: "block w-8 h-8 my-auto flex-shrink-0"
    }, [t.appUrl ? [r("a", {
      attrs: {
        href: t.appUrl
      },
      on: {
        click: function(i) {
          return t.navigate(null, {
            title: t.appName,
            href: t.appUrl
          }, i);
        }
      }
    }, [t.appIconUrl ? r("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : t._e(), r("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [r("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])])] : [t.appIconUrl ? r("img", {
      staticClass: "w-8 h-8",
      attrs: {
        src: t.appIconUrl,
        alt: t.appName
      }
    }) : r("svg", {
      staticClass: "w-8 h-8 fill-current text-blue-400",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }
    }, [r("path", {
      attrs: {
        d: "M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"
      }
    })])]], 2)];
  }, {
    classList: "block w-8 h-8 my-auto flex-shrink-0"
  }), t.appUrl && t.appName ? r("a", {
    staticClass: "text-lg font-bold my-auto hover:underline",
    class: {
      "sr-only": t.enableCollapsibleSidebar && t.collapsed
    },
    attrs: {
      href: t.appUrl
    },
    on: {
      click: function(i) {
        return t.navigate(null, {
          title: t.appName,
          href: t.appUrl
        }, i);
      }
    }
  }, [t._v(" " + t._s(t.appName) + " ")]) : t.appName ? r("span", {
    staticClass: "text-lg font-bold my-auto",
    class: {
      "sr-only": t.enableCollapsibleSidebar && t.collapsed
    }
  }, [t._v(" " + t._s(t.appName) + " ")]) : t._e()], 2) : t._e()]) : t._e(), t.sidebarNavigationItems.length > 0 ? r("nav", {
    staticClass: "grid grid-cols-1 pb-24"
  }, [t._t("sidebar-navigation", function() {
    return [t._l(t.sidebarNavigationItems, function(a) {
      return [a.items ? [r("sds-tooltip", {
        key: a.id,
        attrs: {
          placement: "right",
          disabled: !t.collapsed
        },
        scopedSlots: t._u([{
          key: "trigger",
          fn: function() {
            return [r("button", {
              staticClass: "flex relative w-full gap-2 pl-2 px-4 py-2 border-l-8",
              class: {
                "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !t.itemsGroupIsActive(a) || t.showItemsGroup(a),
                "text-white border-danger": t.itemsGroupIsActive(a) && (!t.showItemsGroup(a) || t.collapsed)
              },
              attrs: {
                href: a.href
              },
              on: {
                click: function(o) {
                  return t.toggleItemsGroup(a);
                }
              }
            }, [t._t("sidebar-navigation-item-icon", function() {
              return [t.hideSidebarIcons ? t._e() : r("span", {
                staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
              }, [a.iconUrl ? r("img", {
                staticClass: "w-8 h-8",
                attrs: {
                  src: a.iconUrl,
                  alt: a.title
                }
              }) : r("svg", {
                staticClass: "w-8 h-8 fill-current",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512"
                }
              }, [r("path", {
                attrs: {
                  d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                }
              })])])];
            }, {
              item: a,
              classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
            }), t.collapsed ? t._e() : r("span", {
              staticClass: "inline-block my-auto text-left"
            }, [t._v(t._s(a.title))]), t.itemsGroupBadgeCount(a) && !t.showItemsGroup(a) ? r("span", {
              staticClass: "inline-block my-auto",
              class: {
                "absolute bottom-1 right-1": t.collapsed
              }
            }, [r("span", {
              staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
            }, [t._v(t._s(t.itemsGroupBadgeCount(a)))])]) : t._e(), t.collapsed ? t._e() : r("svg", {
              staticClass: "absolute w-4 h-4 right-2 top-1/3",
              attrs: {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
              }
            }, [t.showItemsGroup(a) ? r("path", {
              attrs: {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "3",
                d: "M19 9l-7 7-7-7"
              }
            }) : r("path", {
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
      }, [r("p", [t._v(t._s(a.title))])]), !t.collapsed && t.showItemsGroup(a) ? t._l(a.items, function(i) {
        return r("a", {
          key: "".concat(a.id, " + ").concat(i.id),
          staticClass: "flex relative gap-2 px-4 py-2 border-l-8",
          class: {
            "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !i.active,
            "text-white border-danger pointer-events-none": i.active,
            "pl-12": !t.hideSidebarIcons,
            "pl-8": t.hideSidebarIcons
          },
          attrs: {
            href: i.href
          },
          on: {
            click: function(o) {
              return t.navigate(a, i, o);
            }
          }
        }, [r("span", {
          staticClass: "inline-block my-auto text-left"
        }, [t._v(t._s(i.title))]), i.badgeCount ? r("span", {
          staticClass: "inline-block my-auto"
        }, [r("span", {
          staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
        }, [t._v(t._s(i.badgeCount))])]) : t._e()]);
      }) : t._e()] : r("sds-tooltip", {
        key: a.id,
        attrs: {
          placement: "right",
          disabled: !t.collapsed
        },
        scopedSlots: t._u([{
          key: "trigger",
          fn: function() {
            return [r("a", {
              staticClass: "flex relative gap-2 pl-2 px-4 py-2 border-l-8",
              class: {
                "border-transparent bg-gray-900 dark:bg-gray-800 text-gray-100  dark:text-gray-50 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white opacity-75 hover:opacity-100": !a.active,
                "text-white border-danger pointer-events-none": a.active
              },
              attrs: {
                href: a.href
              },
              on: {
                click: function(o) {
                  return t.navigate(null, a, o);
                }
              }
            }, [t._t("sidebar-navigation-item-icon", function() {
              return [t.hideSidebarIcons ? t._e() : r("span", {
                staticClass: "inline-block w-8 h-8 my-auto flex-shrink-0"
              }, [a.iconUrl ? r("img", {
                staticClass: "w-8 h-8",
                attrs: {
                  src: a.iconUrl,
                  alt: a.title
                }
              }) : r("svg", {
                staticClass: "w-8 h-8 fill-current",
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512"
                }
              }, [r("path", {
                attrs: {
                  d: "M384 215.1V102.5c0-15-9.3-28.4-23.4-33.7l-92-34.5c-8.1-3.1-17.1-3.1-25.3 0l-92 34.5c-14.1 5.3-23.4 18.7-23.4 33.7v112.6L23.4 254.4C9.3 259.6 0 273.1 0 288.1v106.6c0 13.6 7.7 26.1 19.9 32.2l98.6 49.3c10.1 5.1 22.1 5.1 32.2 0L256 423.6l105.3 52.6c10.1 5.1 22.1 5.1 32.2 0l98.6-49.3c12.2-6.1 19.9-18.6 19.9-32.2V288.1c0-15-9.3-28.4-23.4-33.7L384 215.1zm-116 34.8V152l92-31.7v97.6l-92 32zM152 94.2l104-39 104 39v.2L256 131 152 94.3v-.1zm0 26.1l92 31.7v97.9l-92-32v-97.6zm-30 329.4l-96.8-48.4V308l96.8 39.3v102.4zM25.2 280.8v-.2l109.4-41 108.1 40.5v1.2l-108.1 43.9-109.4-44.4zm122 66.5l95.5-38.8V402l-95.5 47.8V347.3zm217.6 102.4L269.3 402v-93.4l95.5 38.8v102.3zm122-48.4L390 449.7V347.3l96.8-39.3v93.3zm0-120.5l-109.4 44.4-108.1-43.9v-1.2l108.1-40.5 109.4 41v.2z"
                }
              })])])];
            }, {
              item: a,
              classList: "inline-block w-8 h-8 my-auto flex-shrink-0"
            }), t.collapsed ? t._e() : r("span", {
              staticClass: "inline-block my-auto"
            }, [t._v(t._s(a.title))]), a.badgeCount ? r("span", {
              staticClass: "inline-block my-auto",
              class: {
                "absolute bottom-1 right-1": t.collapsed
              }
            }, [r("span", {
              staticClass: "flex items-center justify-center px-2 h-6 text-xs font-bold rounded-full bg-danger"
            }, [t._v(t._s(a.badgeCount))])]) : t._e()], 2)];
          },
          proxy: !0
        }], null, !0)
      }, [r("p", [t._v(t._s(a.title))])])];
    })];
  }, {
    items: t.sidebarNavigationItems,
    collapsed: t.collapsed
  })], 2) : t._e()]), t.enableCollapsibleSidebar ? r("div", {
    staticClass: "flex-shrink-0 sticky bottom-0 bg-gray-900 dark:bg-gray-800"
  }, [r("button", {
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
  }, [r("svg", {
    staticClass: "w-6 h-6 mx-auto",
    attrs: {
      "aria-hidden": "true",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [t.collapsed ? r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 5l7 7-7 7M5 5l7 7-7 7"
    }
  }) : r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
    }
  })])])]) : t._e()])]), r("section", {
    staticClass: "flex flex-col items-stretch flex-grow min-w-0"
  }, [r("main", {
    staticClass: "flex-grow pb-4 bg-gray-100 dark:bg-gray-900"
  }, [t.hidePageHeader ? t._e() : r("div", {
    staticClass: "bg-white dark:bg-gray-700 shadow px-4 py-3 sticky top-0 z-40 flex flex-col gap-4 md:flex-row"
  }, [r("div", {
    staticClass: "flex-grow my-auto flex flex-row gap-2"
  }, [t._t("page-title", function() {
    return [r("p", {
      staticClass: "text-2xl font-semibold text-gray-700 dark:text-gray-100"
    }, [t._v(" " + t._s(t.pageTitle) + " ")])];
  }, {
    collapsed: t.collapsed,
    classList: "text-2xl font-semibold text-gray-700 dark:text-gray-100"
  })], 2), t.hasSlot("page-header") ? r("div", {
    staticClass: "flex-shrink-0 my-auto flex flex-col md:flex-row gap-2"
  }, [t._t("page-header", null, {
    collapsed: t.collapsed
  })], 2) : t._e()]), r("div", {
    staticClass: "p-4"
  }, [t._t("default", null, {
    collapsed: t.collapsed
  })], 2)]), t._t("footer-top"), r("footer", {
    staticClass: "bg-gray-900 dark:bg-gray-800 text-xs text-light px-4 pt-4 pb-16 flex flex-col lg:flex-row gap-4"
  }, [r("div", {
    staticClass: "flex-shrink-0 flex order-2 lg:order-1"
  }, [r("sds-link", {
    staticClass: "my-auto",
    attrs: {
      href: "https://sei.cmu.edu",
      title: "Software Engineering Institute",
      external: ""
    }
  }, [r("img", {
    staticClass: "h-10",
    attrs: {
      src: t.wordmark,
      alt: "Software Engineering Institute"
    }
  })])], 1), t.hasSlot("footer-middle") ? r("div", {
    staticClass: "flex-shrink flex lg:mx-auto order-1 lg:order-2"
  }, [r("div", {
    staticClass: "my-auto"
  }, [t._t("footer-middle")], 2)]) : t._e(), r("div", {
    staticClass: "flex-shrink-0 flex lg:ml-auto order-3"
  }, [r("div", {
    staticClass: "my-auto"
  }, [t._t("footer-right", function() {
    return [r("p", [t._v("\xA9 " + t._s(t.year) + " Carnegie Mellon University")])];
  }, {
    year: t.year
  })], 2)])]), t.hasSlot("actions-bar") ? r("div", {
    staticClass: "sticky bottom-0 z-40"
  }, [t._t("actions-bar")], 2) : t._e()], 2)], 1)]);
}, cg = [];
const fg = {
  name: "SdsLayoutApp",
  components: {
    SdsLink: fo,
    SdsTooltip: ho
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
      return lg;
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
      return e.items.forEach((n) => {
        n.badgeCount && (t = t + n.badgeCount);
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
    navigate(e, t, n) {
      this.showMobileMenu = !1, this.$emit("navigate", { group: e, item: t, event: n });
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
      const n = t.length - 1;
      e.key === "Tab" && e.shiftKey === !1 && e.target === t[n] ? (e.preventDefault(), t[0].focus()) : e.key === "Tab" && e.shiftKey === !0 && e.target === t[0] && (e.preventDefault(), t[n].focus());
    }
  }
}, as = {};
var dg = /* @__PURE__ */ y(
  fg,
  ug,
  cg,
  !1,
  hg,
  null,
  null,
  null
);
function hg(e) {
  for (let t in as)
    this[t] = as[t];
}
const pg = /* @__PURE__ */ function() {
  return dg.exports;
}(), yg = J.extend({
  name: "SdsLayoutSeiExternalWordmark"
});
var mg = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("svg", {
    attrs: {
      "data-id": "sds-layout-sei-external-wordmark",
      viewBox: "0 0 728.14 64.49"
    }
  }, [r("polygon", {
    staticClass: "cls-1",
    attrs: {
      points: "213.53 18.71 213.53 45.54 218 45.54 218 47.31 200.12 47.31 200.12 45.54 204.59 45.54 204.59 20.6 201.12 20.6 201.12 18.71 213.53 18.71"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M36.93,1.38H35.31c-.07,1.38-.79,2-2.17,2C30.38,3.35,26.35,0,21.62,0,8.15,0,0,13.27,0,25S7.75,48.37,20.76,48.37c7.88,0,10.84-3.75,12.94-3.75,1.38,0,1.63,1.22,1.63,2.69h1.78V31.21H35.34l-.39,2.23C34,38.77,29.9,46.63,21.42,46.63,13.93,46.63,11,40.15,11,24.18,11,7.43,15,1.79,21.62,1.79c7.49,0,12.64,8.4,13.69,15.1h1.62Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M60,39.6c-.13,3.44-2.07,6.25-5.12,6.25-4.41,0-4.6-3.72-4.6-6.56,0-3.44.39-5.7,4.6-6.16L60,32.61ZM71.8,41.74c0,1.68-1.11,3.63-1.84,3.63-1.17,0-1.43-1.23-1.43-3.24V27.22c0-7.39-6.94-9.2-13.61-9.2-6.48,0-11.21,3.17-11.21,6.8A3.91,3.91,0,0,0,47.92,29a3.69,3.69,0,0,0,4-3.89c0-3.3-3.42-3.34-3.42-3.42,0-1.47,3.81-1.94,6-1.94,4.86,0,5.51,1.79,5.51,5.68v5.44l-6.35.52c-5.9.45-12.32,2-12.32,8.75,0,5.64,5.06,7.91,10,7.91,2.53,0,7-1,8.69-4.08a6.65,6.65,0,0,0,6.48,4.08c4.21,0,6.93-2.53,6.93-6.35Z"
    }
  }), r("polygon", {
    staticClass: "cls-1",
    attrs: {
      points: "674.53 18.61 674.53 45.45 679 45.45 679 47.22 661.11 47.22 661.11 45.45 665.58 45.45 665.58 20.5 661.11 20.5 661.11 18.61 674.53 18.61"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M286,32.45,296.7,1.73h14.81l0,1.83h-4.24v42h4.24v1.79H293.68V45.53H298V4h-.13l-15.1,43.29H281L265.53,3.25h-.13V40c0,5.25,1.36,5.53,4.86,5.53h.2v1.79H259.25V45.53h0c3.7,0,4.39-2.16,4.39-4.95v-37h-4.39V1.69h16.26Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M321.83,29.87V25.52c0-4.34,1.88-5.7,4.08-5.7,3.11,0,4.08,2.14,4.08,5.7v4.36Zm0,1.76h17.89c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34h-1.77c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M591.08,29.77V25.41c0-4.34,1.88-5.7,4.08-5.7,3.11,0,4.08,2.14,4.08,5.7v4.36Zm0,1.76H609c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34H607.4c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"
    }
  }), r("polygon", {
    staticClass: "cls-1",
    attrs: {
      points: "339.83 1.79 339.83 3.44 344.31 3.44 344.31 45.48 339.83 45.48 339.83 47.32 357.72 47.32 357.72 45.48 353.25 45.48 353.25 1.79 339.83 1.79"
    }
  }), r("polygon", {
    staticClass: "cls-1",
    attrs: {
      points: "358.97 1.79 358.97 3.44 363.44 3.44 363.44 45.48 358.97 45.48 358.97 47.32 376.86 47.32 376.86 45.48 372.39 45.48 372.39 1.79 358.97 1.79"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M397.43,39.47c0,4.86-2,6.87-5.31,6.87s-5.31-2-5.31-6.87V26.71c0-4.86,2-6.87,5.31-6.87s5.31,2,5.31,6.87Zm10.11-6.41c0-8.88-6.87-15-15.42-15s-15.42,6.16-15.42,15,6.87,15,15.42,15,15.42-6.16,15.42-15"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M454.05,3.28h4.53V32.07c0,10,6.93,16.14,17.5,16.14,11.93,0,17.11-6.29,17.11-15.81V7.78c0-3.76,1-4.5,3.37-4.5h1.31V1.54h-11.4V3.28h.82c3.3,0,3.76,1,3.76,4.76V33c0,8.82-5.47,12.83-11,12.83-9.46,0-11.34-6.35-11.9-14.65V3.28h4.25V1.54H454.05Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M566.34,47.95h1.75l9.59-22.68c1.94-4.24,3-4.77,4.47-4.84h.58V18.65H572.62v1.79h1.23c1.88,0,2.74-.12,2.74,1.56a10.5,10.5,0,0,1-1.1,3.94l-4.4,10.37L564,20.45h3.6V18.65H551.37v1.79h3Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M638.55,47.95h1.54a2.07,2.07,0,0,1,2.29-1.55c1.69,0,3.7,1.55,7.32,1.55a10.57,10.57,0,0,0,10.37-10.63c0-7.91-5.44-8.49-12.38-9.46-3.63-.52-5.68-1-5.68-3.89,0-3,2.66-4.32,6.16-4.32,4.86,0,6.75,3.22,8.36,7.44h1.53v-9.2h-1.47c0,.78-.67,1.43-1.9,1.43-2.08,0-3.76-1.43-6.74-1.43a9.63,9.63,0,0,0-9.66,9.66c0,8.36,6.35,9.08,11.28,9.66,4.67.58,6.35.88,6.35,3.86,0,3.43-2.85,5-6.35,5-4.92,0-8.31-4.26-9.48-9h-1.54Z"
    }
  }), r("polygon", {
    staticClass: "cls-1",
    attrs: {
      points: "549 18.61 549 45.45 553.47 45.45 553.47 47.22 535.58 47.22 535.58 45.45 540.05 45.45 540.05 20.5 535.58 20.5 535.58 18.61 549 18.61"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M540.06,9.67a4.46,4.46,0,1,0,4.46-4.47,4.45,4.45,0,0,0-4.46,4.47"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M665.57,9.67A4.46,4.46,0,1,0,670,5.2a4.45,4.45,0,0,0-4.46,4.47"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M149.79,29.86V25.51c0-4.34,1.88-5.7,4.08-5.7,3.11,0,4.08,2.14,4.08,5.7v4.35Zm0,1.76h17.89c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34H166.1c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M228,29.86V25.51c0-4.34,1.88-5.7,4.08-5.7s4.08,1.34,4.08,5.7v4.35Zm0,1.76h17.89c-.07-7-6.55-13.74-13.35-13.61-7.65,0-14.26,6.61-14.26,15.36,0,8.43,6.16,14.71,14.45,14.71,8,0,11.93-4.93,13.35-11.34h-1.77c-1.42,6-4.59,9.45-9.64,9.45-6,0-6.68-4.72-6.68-9.13Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M529.84,45.46V28c0-7-3-10.27-9.14-10.27-4.35,0-8.75,2.49-10.5,6.25h0V18.7H496.79v1.75h4.47v25h-4.47v1.75H514V45.46H510.2V28.36c.56-2.41,3.61-8,7.15-8,2.35,0,3.55.81,3.55,5.16v19.9h-3.7v1.75h17.11V45.46Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M420.93,18.8v5.25h0c1.75-3.76,6.15-6.25,10.5-6.25,6.16,0,9.14,3.27,9.14,10.27v17.5H445v1.75H427.93V45.57h3.7V25.67c0-4.35-1.19-5.16-3.55-5.16-3.54,0-6.59,5.55-7.15,8v17.1h3.83v1.75H407.52V45.57H412v-25h-4.47V18.8Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M135.52,45.56V28.06c0-7-3-10.27-9.14-10.27-4.35,0-8.75,2.49-10.5,6.25h0V18.79H102.47v1.75h4.47v25h-4.47v1.75h17.24V45.56h-3.83V28.46c.56-2.41,3.61-8,7.15-8,2.35,0,3.55.81,3.55,5.16v19.9h-3.7v1.75H140V45.56Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M204.62,9.84a4.46,4.46,0,1,0,4.46-4.47,4.45,4.45,0,0,0-4.46,4.47"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M718,18.62V20.5c2.76,0,4,.25,4,1.5a10.5,10.5,0,0,1-1.1,3.94l-4.4,10.37-7-15.81h3.68V18.62H690.81V4.72h-1.17c0,6.87-4.67,13.93-11.21,13.93v1.85h3.44V40.56A7.1,7.1,0,0,0,689,47.95a9.22,9.22,0,0,0,8.62-5l-1.39-.76c-.78,1.17-1.81,2.72-3.43,2.72-1.3,0-2-.92-2-3.06V20.51h9l11.84,27.31-4.1,9.65v0h0a.55.55,0,0,1-.49.32.54.54,0,0,1-.51-.37v0a4.46,4.46,0,1,0-6.3,5.18h0l.14.06.26.12a4.51,4.51,0,0,0,1.63.34c3.76.32,5.69-2.46,7-5.29.3-.64.57-1.29.83-1.9.57-1.37,1.56-3.73,2.73-6.48h0L714,46.82h0l9.12-21.55c1.94-4.24,2.69-4.78,5-4.78h0V18.62Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M95.94,17.71a9.29,9.29,0,0,0-8.56,6.09h-.13V18.87H74v1.81h4.47V45.62H74V47.4H93.34V45.62h-6v-14c0-4.17,1.09-8.44,3.83-10.79a.53.53,0,0,1,.85.5h0a6.22,6.22,0,0,0-.35,1.85,4.19,4.19,0,0,0,4.41,4.21,4.68,4.68,0,0,0,4.93-4.73C101.06,19.59,99,17.71,95.94,17.71Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M193.49,19.82c.13,0,.29-.11.39,0a.27.27,0,0,1,0,.35h0a2.78,2.78,0,0,0-.24,2.38,2.74,2.74,0,0,0,2,1.77,2.79,2.79,0,0,0,3.47-2.72,3,3,0,0,0-1.53-2.53,5.29,5.29,0,0,0-2.85-.75,7.68,7.68,0,0,0-4.76,2h0q-.44-.32-.92-.6A14,14,0,0,0,181.83,18c-5.44,0-11.28,3.56-11.28,9.46a8.42,8.42,0,0,0,5.38,7.91v.13A7.08,7.08,0,0,0,169.45,43c0,3.24,1.49,5.7,4.22,6.48v.13c-2.59.71-5.58,3.31-5.58,6.42,0,4.8,5.64,8.49,12.83,8.49,9,0,14.91-6.09,14.91-14,0-6.29-3.11-9.14-9.46-9H175.61c-1.62,0-2.7-.07-2.7-1.82s2.49-3.37,4.95-3.37a4.87,4.87,0,0,1,1.32.39,8.35,8.35,0,0,0,2.66.39c5.57,0,11.54-3.18,11.54-9.33A9.62,9.62,0,0,0,191,21.61a.22.22,0,0,1,0-.33,13.23,13.23,0,0,1,1.69-1.1,3.64,3.64,0,0,1,.76-.35Zm-8.61,29.82c6.48,0,8.2.27,8.2,4.23,0,4.73-5.8,9.07-12.34,9.07-5.83,0-8.63-3.58-8.76-6.69,0-2.85,1.42-4.73,3.17-6.61ZM186,27.51c0,7.53-1.75,7.78-4.08,7.78-2.59,0-4-.5-4-8,0-5.25.58-7.48,4-7.48,3,0,4,.2,4.08,7.66Z"
    }
  }), r("path", {
    staticClass: "cls-1",
    attrs: {
      d: "M631.67,17.45a9.29,9.29,0,0,0-8.56,6.09H623V18.61H609.7v1.81h4.47V45.36H609.7v1.77h19.38V45.36h-6v-14c0-4.17,1.09-8.43,3.82-10.78a.53.53,0,0,1,.85.5v0a6.23,6.23,0,0,0-.34,1.83,4.19,4.19,0,0,0,4.41,4.21,4.68,4.68,0,0,0,4.93-4.73C636.79,19.33,634.72,17.45,631.67,17.45Z"
    }
  })]);
}, vg = [];
const is = {};
var gg = /* @__PURE__ */ y(
  yg,
  mg,
  vg,
  !1,
  wg,
  null,
  null,
  null
);
function wg(e) {
  for (let t in is)
    this[t] = is[t];
}
const po = /* @__PURE__ */ function() {
  return gg.exports;
}();
var bg = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("header", {
    attrs: {
      "data-id": "sds-layout-sei-external-header"
    }
  }, [r("div", {
    staticClass: "bg-red-500"
  }, [r("div", {
    staticClass: "container px-4 py-2 mx-auto md:px-8"
  }, [r("a", {
    staticClass: "block w-80",
    attrs: {
      href: "https://www.cmu.edu/",
      target: "_self"
    }
  }, [r("layout-sei-external-wordmark", {
    staticClass: "text-white fill-current h-7"
  }), r("span", {
    staticClass: "sr-only"
  }, [t._v("Carnegie Mellon University")])], 1)])]), r("div", {
    staticClass: "text-gray-700 bg-white"
  }, [r("div", {
    staticClass: "container px-4 pt-8 mx-auto space-y-8 md:px-8"
  }, [r("div", {
    staticClass: "pb-6 space-y-4 border-b"
  }, [t._m(0), t.page.organization ? r("h2", {
    staticClass: "text-2xl text-gray-500 break-words"
  }, [t._v(" " + t._s(t.page.organization) + " ")]) : t._e()])])])]);
}, Mg = [function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("h1", {
    staticClass: "text-5xl font-extralight"
  }, [n("a", {
    staticClass: "break-words hover:text-red-500",
    attrs: {
      href: "https://sei.cmu.edu"
    }
  }, [e._v("Software Engineering Institute")])]);
}];
const Lg = {
  name: "SdsLayoutSeiExternalHeader",
  components: {
    LayoutSeiExternalWordmark: po
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}, ss = {};
var _g = /* @__PURE__ */ y(
  Lg,
  bg,
  Mg,
  !1,
  xg,
  null,
  null,
  null
);
function xg(e) {
  for (let t in ss)
    this[t] = ss[t];
}
const yo = /* @__PURE__ */ function() {
  return _g.exports;
}(), Cg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABN8AAABQCAMAAAAeGCORAAACu1BMVEVMaXHZ2dnZ2dnZ2dmXl5fZ2dlVVVXV1NaamppVVVVVVVVVVVX///9VVVW/KR7VRDcAYeT/CYdMkqXRQzjNRDjx8fHv7+8p1dnHRTrw+PrARTr+/v88OvHbRTi9HxOhoaEuzdUdqec5RvAbtub3+vvhREvGPDE0X+rC3/Dx9PUez98kwd05Ue7ZR1g3Wey+JBfCWXn/+fU1wc+yYohtg7MWw+f/8u45mcvPUWj+/fxQNOsua+smnOBzLePX3OQoeuqjbZWzKbaoKsFhL+kdmeq4PDKQK9R8OsuTdqD+5No+ssiDK90jiupeX1+dKcxkPdf+0Lsvksjiw8T/7ONCQUGUOLxfd6uEfqmpNqn+2cxBPujPamLUjIbfubiSQp3ZrKksi916jKv/qnefTZBomLbOe3UvsdRhXr3nWVK7NpZVpb7/xaMzfNn/to1PS9rYn5o9bc/KWlFNY8WDRqtxT7WludK6xM/0sa+gzOqGV6Hnz85yYa52tuL/jUQXFxdGn8XBMSa/yd3/gTPldnD/nV/qioXQOHNUl6m8Ukmxs7Vort5YkbzlmsD/bBH/dx9XbrkZbeP8IJCNOWEqZdP/XApcc9UwPtq4t9+PpbjvnJs2XredPHr3NplOZIF3OHegsuRJQr9pNKlgmd7b4fFVRYVIX6DLtsiHq968a2TuaK2HkeinM1IAerwAe7zrPjvuPjfnNUngy6fhNlbSixMAdbkAervyOzMSg8Dn3NrZ2dnmQUAAd7rdT0PbNGPasWsEAQHFKp69Kari7/heqd3cvIXcRzrdSz/i2MeLi4vOL4TdTUHKLJHcSDsiIiLcSj2LwuXdUETQgwHyNzbsNT0AAADWLXTlLScxMTHl5eX/VQA6WJmz1+3/ZgAiisTIycnVlzDXo0vQ5vUNDQ0pRGeqqap7e3u9vb0rKytra2sUUHcwAAAADHRSTlMA2nhQLqnj/RaJVL7yjhkNAAApd0lEQVR4XuzZ11LrMBCA4bz/s6zknl7ondN7r8BjoNVaYuNgMhNERiH723E8dqILLr5Zh86XwHVs+4GjVcevWhubzlhHdS98F4vRqhUFFaXsCw+qcQcAD+7U31T2ACa6Sqt+CBytuoOdY6em96bJZJLnaZq+pd64ugsl3aSR1rqDfQtcx/Y3cLTqO9dsNvuzaua7bhladRA4WvVT4GjVz4F7or9AHG2Ub0SZ+LbDgat9S4k3B1wXN15CG08nm+hboOLzTXwT38Q37NzG5reczW+uedvcvpHzm/gmvolvZw/6drHcN6hhA+VdA+IOr4D9gAdO0acBdwB3eT2+kXCNB9TU8oYb1rWvu8kNWxjfIp7fxDfxTXxrH9+eqW+77AG19Qc4Lxzi1ija+U18E9/EN/Ft9x7gcjbA4cuU4LZYrL+/iW/im/i28uPpct8ossqfz58Bwgd4BLrGKQQF2JP7VgPHfJs0BzjcUbiECac1HuZow7f4fRPfxDfxbbw1vnHgTh1wfoCjEtzMrk2J5pFrWGS+iW/im/gW4PF0433zwLX8h0GbzR50a0QbFp1v4lv/ODuYTg+y4774Jr4x3h7tm1IVWLFGIzyC8jdIM4BKAeDnlL1Iqfqraj2/v1H8CZUPcDTBacKNhBuytGsLfbv8/8938tFfnkXmW1a8poqf00x8E99WfTw9bPjmPCvLqtcryxFUProBcDfdWeX8G/G3Vt/4AMeBG6aGtRo4KxruNm3PGXHb5dvl1YD14zpS3/rIG1UUxa9MfBPfWnhb5tuh941Xfn/5e2/v636vZBfBI6dwB6KuotyZwtbkGwnXGODy1DY0O224+46GzjvXVvl2M5jrJFLfbtm3w9ckwjiA41VbbfVMgAiQ0AA8KeAYgzADEBQCBIg1YSTbGA4CR0QELMdY1BIFBvQ6gV7F3nmQaGTuZmSmtSIbEAQSm/0l/e7uued57rgjkbtzpt/nNucdDBjw4Xfes8IBrQgdNZ33beTbzrW1rVCtVnv1KhTaWlu71l/fxJ5uT6lvLGOlbTeS69wukXvOvOqb9EpfBOa9U/NbOBymwH01Aw6WfHAVDoLv+1ylsl9pwBp439735tvnd5ouq+f/HC/fmgc64A7rDvs28m1+y4c0rTnlm5XjG6T3TeINqbl/l+iDBfjCvgkKbDCpkQS8SU7KAd8gZoL7AuE9InLca7I0/YADiFM6Pr4lXsglRr7h6tg1ClzVSd9Gvu1sXUKo777peevBN+iEnIAD3m4zcl+R6cL/WkolIz+zd6gCmeWc8O0DAU4Z4LIUOA4OdnE8LCIcJ+qAq/TbN/z3DnXv25//2TeoWSg0y9JD1EMMXLHqnG8j3+YvInSsfBOt8g2GsFILMT0hH8GBaTRlWlOhE3TbRCB7fcNpgctm98gIpzDHSwu3kEnFY+BcUkKOneHgpb++vUQj30wrHGHh6oPr2/iYHWadH7PLt3kf6qtvomgNb6xvlC6hhphaJSIaAxskENnoJSXBbt8ixLewDNwq9u2nDBy/B6jRBQXTubnoDIIuwDvgDVJ4k4kz9A2hmVh09t7K4+e2+5YYat/Kc8vLS+V/bBYpQoVB9Q1+6/iE9b5NTU1O2OLbzlVkh2+b7Rq46e6sb9Nz2wa+iSa89TK+Ud+IYru/3YipjX1jbkjhwD8KinJ5GT3nnp9GIpFwBAtHgIOy6gjHwyEtKJ1LbQSQmp9P8nBwnMhxZL+IsW+kwOzKM1t9ezS8vm08eOh3TXtd/sVf5jUV4A7Lg+vbu7OnbPBt6sykHb6FkA2+bXaQmq9NzrUMfNvfF3vgrTvfoN23Gt/WS/TWFBSjYdcE+vRBIJft9k2JALdKJjhoLysDBwUzqY3YDGLzwzCX5CEywkGmvtFi9x/b59vVYfVtaeGp1zvtgqa9C7pr9SOo3mSBqw6ub9DJ09b7BsKds9y3BOrRtxZoZdb6JcRU24TRrdVBtY+GvnXPm358M/ctLycz1TG4P6UJ9CZUINBp6MtL2ewbFe4Oe4uqBLbdzW1EAzeQPj8fDPJBPqkIB3XpGxRbeW6Pbwk0nL7NLbgANzXvsuZiFW8OqZbJhrhisTnAvkHjY5b7Bp0fs9i3UK++1XzAlnFtpM3d7vgkXIx8a2h8E1neGt+/eTyeT98a3Y9v+ucLb3TPF66X8F6QvIKabrcvtk766s63SjqTyaVSqdl4PBqNBiA8Yc0EIDgVj8/C5Vwmk66Y+XZL5S0SVoRbhQhwwcWlMtBm2M0gBMDxFDhYnLlvbDfuPbPDt19D6Vt58anXxaQb4IoHuMOmyl3xoD7Yvln8MdyU2uSElb7Nox592wS2TIBbR4a1Pxr6ZsJbw+P5kUxLJUWP53u345t+ftN+ANfexcNZ3mgvb165KJCTNGPf0n/Ju/+XNs44gOMAZa30uU4HhpzhIkAQA5REFKcAbReYIJLiYiIRDbKMQVorMiBNELtNVVRRiSKgRAEKbSn1gK0ZJqQMmq21E1cdDBomq03YbP+MPfdc7vLc9TnPXB7rSt8WzLf++uLzPM9dbAcl1D6u4RvMdVUe4R77HyPhCntwcwCl7ZuaOLJvxDrHqPv2JfgQfQuY4eyG5zBn8Q7+kDpIohUqevh++0Z5G46R+6iCom9ho75FgRZwszZAKicsUgnrU1w3mbcdbm8ykMxW21l7dTYZmNzjOML4pju/CUglfpEXy5nNhHwVL/ytDt2Jjy9adXyLgBKLkH1DFYETfEPAXRN88+j61isIJ4Sui/tR1ze8gQW6vq3b3qFv7pSif0/Nt74LaHjT9m3rQLi8F/VKXq8+3HqvfaO8DcfI6W/DGV6e2kZXVppQ3Xq+1aPPY2Bh75DaH4nmbATfHhF4e8qFIlkW0mYSgsix2f4Q91xnfCOeL2zwELgMQNX/neA31N+ZJDzgkXYbuGniu7wUybcIKLkI0Te5gnB+vwjcb/DfgwDQ7kGL0+lsKXRRMu5iCb6BhiBN39az4B36lq9NYc38fkq+JXvh8KbKMa0+NU0m4bVvQj/It6T+etK+TZG6zuRhbyj4RnUbjlF0/gwl32wAa/TO8e+vzwEhy/4xxzebTTBO+/reR9jw9mRv1cTaTXh21rT6nDuGb5zSNwRWYnN2P5eLfpdO8yJtsmBoXsO/MwQ9x96GafkWAgYKEXxra5N4Q8D5P/PDrok5j/bNiVICR/ZNu54FSr7hvNH3Lf/CyzDeF3nFa+5ncm++/fN0fPOY5eGNvP+WTEqPEHCv5K8U+fmkffuE0NQKmnPdFHyjug3HqKo4R8O3OwDLhPOmP7+J5dRr1F2gVT1p/03EDeeNGx9mq03qqtnhEKfiTd83kat0Ag5uiQQ2lgkP8Jux0LMiapJ1R32/ZQQYKELyDYWNcBA4Wbi4rm84cUZ8Aw0TlHzrtoMT8i3P1B6eRTs+h88YrU+fjm+BOsSbKmsfki3Q1/uNua7O3DskXxkibrsdIOkM+DbRKRw2tTa0D84b8+26uI6nML/R3YZj5PS34QweL4T/MuAbsEWJh6dk3gjrUww3FDdpYk2kWFMvpzu+Sb7hwPEyZMq76xWv8sg9OK2hp3gavjUDAzWTfUPACcT5rvpcPr+rCFz8LiBnQb7JtcjEtZB8CwYHBzp7GgC5gXkKvq2PAkW2S1I3y/Qt7z5MYR2680Z9C9++EausjN24HU4Rm7u/tlhVtbh2f+64vgXguSkpTzbb/3Wdw2q1OmBW67RHGuAebkmT3IEB30Cx9jEjvu2m3HR8o7wNx0jh23B0fWsqxbcokMvsKheuesenZN+2Jd7sdhMx1jP98VMFb/q+qa1CQ1phXIPACa4V/1BWWvV/jry/PgQMFSL41tHRJhkH87lcEDgxsm8WS6st228SfGuEP7hwKNE3UgsTgz2AUPtC2b7NAM0ulefb639SqmpfG/LtXqxSLnaPoBu0TWpx7li+9X/vuECsr8/swLflrOakdK5g3Ldl6BveQOm+TaVo+UZ5G44hdf5Mmb41AazuUnwbAViZqK5v6BPavm0X4sYx3uysUOG5LfB5jXlHc3zT9i2NxaMzA/yln3jxECKR4PlNPg1/Fy6B24Adcb4wCQw1+bZvHW3Cj5g4wbl8Bd78X6l8s7S22pJ3rzTGl5aGoW+NKGQcEk7HN9T8RGcrUNc1Vq5vN0/KN+/L1Fu99Jbu2+jlSkWXR1OKPGtVitY8+r4FIG/k4NymemGo7PntFhhT+ga6lkv1LUzNN8rbcAy5inOn4BsqA/DY+t2jfdvV9m272E4oK/PG2pOB/qGhQNLOCs8CNTVmMwIOY42DPcHGN5VvPJSL38QqTGXKl6Bu/Kcj+7lMJlcfnf2CR8LxOvdnrQJDrRJ8E5KGOLRI9QmLVDHkm0RbdWrmSnwJFo/HoW+WpUY5p5yeb7CFYBdQ1XDrf+qb92yK0Flvqb6FY5WqYmHS8IaPcHq+eTR50zhxKG//LQiCKt9A83Jpvk2lqPlGeRvuP3bu/rWpK4wDOAygCCe00hcSw1KAEJafSunIyMCtIDUWKcbEzoW2KZuGCbWUUKttakvtIqhYURE2QXzDzQoNIMtYMkWhnV0YdhWQtVKWrSVt/DN2zj333ue+nXvubUMtw+/N1aQ3Ag320+c5L9fByq7t8o03j+BdHV68BANzFn3T7MSKuKTazd8z3SZkz3TE73dFcPVG8lLJ26sTOE9fSLyBbzM0uAjLHnZBVp7Qim4FvoR3bGWfKFF2r879nIWblbN8O4M2lTMM3w5KNVzn/s5OItyXgnDx+I8Cbf7lqlLrdYE2nGM41/Pgm0Y48I2ddLsOuB3pW7mYN0xxwZ5vd2oMckfB226DXDb3LQUzp/x4kmLZ9mzT86d9uCHVFd72fDut8a2KZZUt32AYrpK+wTDcdvrGaUS9s64t+PbheYk3V24ay0bT1pZYJrzRKKu383ietT5RDeUb+EZD7m+JIB/RIbaswuDhbPZveAkL5egEKtu3MDJKEJnHHTbwDUKJI7xR4ahvVY2tt0mIbGJaqG/HWlpa8SEJ18L3DZIOaIHbgb6tlfKMNK7Z8e1cjWHkFjWy2zARU9+SwJvF+u33f/95lpPXvz224NskuoJPOpMQRmGdb6jPjm/H85JvHdiwgmNhbeHIekn7yb49srA2vtRRKFr3DYbhKusbDMNtv2+XGJJt3rf5Vzm/yFvqgqSbE8PWlrxAeVNXcAKHroTvBcs3Ytlht9q3DK7fVL59ov8+Zg9nefOnMePpg5sc4WJ63/YehIT24wOXcJJwgm+YtjjNsfgxKderiG+tNC1AnLFv6bGxSe0k6VSfBrjJneUbZ5lWhx3fPjf27XPp+i1j326Z+ZYw5K1JCGPFCNyxnMTK/oU0Sgt96Vhw8k0Mtet9C07Z8K2Yh/qtMG44gbMOhfFzR9G6bzAMV0nfYBhuu31bWZw7awe4s3zfoHzz50TeZONk3uqcdVC/kff7E75q4I3hG7t+W1TdIA52cj3h7M9qZ0yP/nrGTDh3u4FvNAepcxg4/OiUcg/7NhKXA8Ldxr7dpr6BcTSM9W/BqPbWb2NRda9zZSvzp5/h+Le4PmRhqVwuL5Xl12sbeWY24F1l4Z+Z7F94WMPIQ+hODXOZ7duAbk8WmVOY8DmdTt/EhPBClZ5lyGNL+09vhG8ItvWjfnym37SjqN43FLbu2/fwi6FQeK3Iel6K47Uy4xfZvlV4GM7Bya5t9m0VuVZX3Mhq3HNW6rcULd/qG6Zl3pz0AN5wpAJO8q22munbjNa3jLY/hefaG8XNmK3vDTCXf5wwG5oLGPkGwIXIQUq4kKDb4KDg22BcKxz4BuH4RhPoU7ahU+ouu31qi/uzTm9xfS8tJIpyZeHIswM/iuNF3v76qyzfrtLr11i+XWP6lppoUuPW5Et296Ry5H9vQy7VM9DlhBsm6TZs/fYTuZUI+Mas3YhtZNytD/8dRQED34LWfasC3xaMb1WgnbZ5vmHDNxiGq6RvMAy3vfUbspVZC769PNFQT7vTAWX1pgGOHC809RsGjvKmX9+rq99mMqr+1IuMgzvUTGYzvhHhwjZ9g9AeFYS79x327d4gSVxibiQ+MkJ9GzlAIxPXauIb3PpNwVg/UqZvR/hWei69bsyzA549L3F8G6phZoiWb8xcZvnWpSzfPE3ORKQ+GAy6aYI43vpIt9PTBNMLquSwbjzfSO1GbAujsHAGDH1DY1Z9G1I39uPrpY2LhTJ9QX9FvFVcWKK9qy3fQLhK+gbDcNvo2yKylY+4vkF7Wr+s6k59mjjr6uqqBcv+or5N1NbWki/ofWP3p9wMY99mTHxrZvlGhYsh4zQb+bYPfAvtDYnpxI/BQeLbKPaNZkRInPxBfHtAfKNpBeNYvkECCuHSqnY6vRN8W1e3p/wGtcDx7T7bt/vk+iO2b48YvvV6lLolexuCbiQHFvT0gnDJ7pRKOK5vpHaTbYuhGMu3Pp5vsDYEfIOFNx1QKRflC4Bdoz3fYBiuwr7BMBzft3OImx94vl3yIjsZtuLbGeqbqxd4605F1En1Et+S3wrp9WPfBrqE508NfJsx8i1jyTcXHoEz8w0xfOPdG07v2759e8kDlAsdlIULgW9gnJAHom8AnCwc0zdIFLrUsaCS3ys7wLe30sulKtOBniUYPjL37STbt5N0doGZWwzfnB7oTJM9XtBNQ1y9fO8kj2ciEbHk22T7FNmrQGo34ppwtuO5hWbUbORbMIhQc3iS69uQyreyps8vSs8W5AtLgnYs3yo8DOewll2V8c3Pqd9sN6hn+b7N/ykOv7m6Zd/aBrwuiB/HldtTV+frEr+g2OXQVf1CX79ljOo30p/y84l0MyWbvoFwUYu+0RDgDpEDSrjQoOjbqUF8ENsE3cC30aNCDhyVkOP7BntODSu42Lv3DWZGj+TNAoNFbzm+XWX7dpUOvzFzzdg3mFzwTAz4QTdd3N6IU/Hebiu+9eO+NI3GSN1GXBPPKPWNmdgNc9+OqyeeSyCR8PGvS0+gYCsIzb9t36BJraRvMAxXCd8+4/hmt4BzzVnw7Q9pemFa4ZurASI2r07sm36ParLWYn+a0fs2O7y4ODyrERkv8s2Q2PUNctOibxBCHDFOIk7yDTJ6amSUHKJvRDgROTkM35glXBop8vW7983Bn15Qv6+D41uNScj13SYx9k02y+NMKXRb3ig1looNauByylqvi++bOObWL9RtURQVzwDHNxS4YerbaZVvZe3nuCR+gGuKEqxAYts3yAcV9A2yqwK+neP4ZncEboXr2/w8Wf0mCqb3DbKc9DF8q96kb7OXfsniZM6qxF7Bvm2mP4WcD9j27RB+kITIgXPqrsq3UXLQSPXbx0fl2PMNBdNGkwzNV7i+vfetRzFtIFe/DYUj9BsZd2yoetScD+ZRPQlz36aiU3S8jdZuxDXhDPB9QzGWb7A2BNb3aidqxum4p/4z/z/Wb+4htm+QYWQ5i2a+zYsB3/bofYMIvnn1/WltdbXWt4yRbzMa31yHs08yRL3sHFJkFb91877BABzft0/30QcFDh97qXHkIfh2V8DtGwqc0rcvPqb5Cozj+wbply6HEaSP69v7/jThkXn7j7xzfWkrzeM4CwsC6AhkEprGGpBD6KGAKMViKX0nYEHG1lDIRVLF2FLtxbIdxTXq2JZWS+0uVrctM3RpGXZmSN51WbM7EKgUAjQtQBhDS4UJGvtn7HPN85zzOzePUyP1e45JPFHQg3z83S4cb4F8AXtzWIQS8j8SikPRZw/5JudMabyN2W4dlG2Cb1ZKWfCtTvCNuaNaB7VcB96g+iLjb4+t+AbXADqvDoH7ZYR+nVRZ9Zud/fb1WILoHO7POkdfjyG+NUK+2cff1l5meC7ig7bEN+OabyKBas+3k0IIcphvSBRwf2F8u1jVX/GBdP5HxLf3Vb4dHxgQjLPjGwTcAzlUOGfDt4OfX+AGWWtoleOt1MDgxghXqJMBF2vWDUqCfBO+KbPbujnTqnzrrO+05lsE8g2ab9kesJtnGpN5I9sA3sD6IvOnx835Btc422vCCd9EfiEp5xe8RD6vHH9DGQas2Tjpz5oln3gasWz7FzIZXX3Iq8z/+AZ7jQGnfGTz4FzUh5gXwLWZ8U0gDhOOi/DtIuIbOoUeIv14mvBNAI7IjG+Lc3O3B0e6TQGXkgviLfl28OtDhHvamlACDG/rxZxGxUJJcofOSQZca78V33qJ7dansdna6LM939pM+XY3a8e3YiUb/sP49qc/17T+zZ5v5x3xbQER7qgDG86/4IhvR/pBfUjomq/ExfiG8qdMnlCc1fdK0taHpKH9ltbx7d1LtocBfe1HRVwP8B7Undb3WrZoddjx7erJb/BBdPGbfzK+Id2gaCNw43x7eB9raGjo+BACHJfFfMtBalbCgrcRYMDVjm9BZ/W9+drU94rsaXNMZX9bSriY06nYIP0peQ9JEbi4Bd+o7cb41kZtNsY4yDcoU77Jo6CgG1oW9hvwT/dz/4L7+Nt7R3z7oCgB1+Yb5Buv71VXD1d1r6qkl745ac03O/80o/dPZ8i4NzakXM6hMr5lsHbCtyfAtLPjWxM7BOKu4gOL8u0G18MbD5neU74xDRHGQb5BzY1okwwp5qFKv89Irfuzyvu8PyvZzCwx/n8sL/BWRCLPOclDVWQHNWbJN8E2zjT3fAO1Icb5hXmWX/ikHwxXwdq//afu+eZzxrcpQDcr882ebzGvT1cAd+hw6DA6sS96jRt3IY43iW8eHd/SVFZ8E2Zamu9j0ILvxMu0i/76O33WS54h35oQ2poI4KLR6MkoBhw+kADfHuKHp0Tvv9PwDRGOCPANKqX50ftYHdygxLzF2vItG3bcXy+nIYJ71l8/1kxbSn3cOy0XGdpyxfX5PPtsS+Jb0jHfSNytD/DNtX8qakNM6kMY1wrMIJ7W5VUL+3d+iHu+nTbkG9QHF9E3i/jbr6sqGB9yiGvVy4JzgG9W9lvaNL8gwmx8q1YaJRgg39JYTucj3em2MYwjRnwjhCNP0ShhHKUb5Nt1BLfj/zj94pWq+gOIb2dnTswg3b9MGMdlO//tilHPqfSTD9aYb1tO5iM16KdfBPdkPpLgW3NSkc03hIYC+kVQacg25VvYhG9Ju/ibnDftxGyjH+7zC0NwsJTs+hfYna6QN+a1dzi8f+e/uefbtw75tvCq3l6/rznj29u3R3i21N/fpWutD/G3cHoBy0P4pvj9ShzYb1b+aZrVh8h9WJk0XbGl59u/LedbulKvMd+aGOSiRFfxQXRjBfFt+el1Koy3FxIsn549gfiGdRnpviO+wZaFFKjy7asx3+bL9vMtRZCuPM+u7Nl8yxjlW5zfRRx9KxaCPgWZQlulfE7mG/RPrxnyTfScYhsO5Bd2VR+yYcC3gm7v/zxvyNrW9jXkD878XignI+CUKQd8e0v0+lKJe6iJri7ZfAvF1Sr5quE3jycWRxrz7CS/gAT4RuEG+Zbek/nkTUJRTrgq4Ajflq5zPVXrtXybEYTDGrpszTfRdAo91A6AvFrxLRveyXzyMCfens0nTzK+8exCAfml2zRf2lPE3qmObwGfVOE7O2ld3/tI7ltgnOvjNb6u6nsfg8Gg8LYVxMseuf20XHeA9i+4suDerVny7a2QZMD5lH7iolLzLYTwxsCn/hTi5hs+WWGIRDjb/oU0tN+YIN/2ZL9MkwZwUQ64FaSlFS3fnp6u1/EN440DjsvR/gXYkjUIykZ2xTd1F3wLgv0yFgu0gmZ8A4CDeLMEnOl+mYTWfvNOI76x/Yjz1TK44idQ4CsPSoJ8AzVwEVorgl/zvKqb/qy7JoOPC1vzGxvBBvnO07sazlc2KmxwUv6A7c+CmvDbdWY559sb3MJA5S/F73WxgUgxvHVGmG8ccEiNQIBv9vZbOkNMPcg3lqNA+pz7AZuMALeysvwL0vLKM863UXTc6NTz7Qw+iGYuz1jz7cHtK1cGUwYxuA5qwC1KJp0LvoElqD+451td2HY/IARgcE/2A4rZls0xZkwrCAXTPs63HBUmHlNAdk9bE/b99aT3tFeajcSfI276628a8K08Te9UTpuorpvmt5BfP3D7T6EWJo6+UhwH3yDfZB1Jqt7q8tNSfzwZi8UTeEEg1z2RXaCE8zTiQ8hufi9qmjfiWzqTSUO+ZbA+935nDd7wien2zI/btgMBpZPybXQUn8vaZMV/kPk2fGYYE24GI+7yGQu+XWmjCdyUQT4BdGnNuePbgKaH2RXfRHSNqxAEsbeCeDcnvmfv9jsTXrXO8u4FRIwy49unqvm2rZqYb7Z8W+xexDYc5hz5GKHPjHsGspyPdNdocUVuM1wUEkmEje0iuF7T/fW14BvUwu9meFvYGd/eNEoNWV4yEYl1mfLCEUY3dBC2eaztt4wT+43vAkw7yi+IAjgX6vjNxn5raYq2RFuwVyq0vDRKtQT4NoyECSfLkG8PIvq2+hQw125LxHPHtx+0WSpiwZ0f2Bnf4PaYXI+mTKTSkwMbaAz5BnXz+Shi3N9Gn1ObBhLu5+8R4/7+/c+Cbhb99c3X2L/1Tewlk1eVMucbusAUKInq3tbZSWfzLR8NPjL8sBPk27eGied5HuPU17xJN7dMr0O+wcDb7gXpxgNvtefbhN8F3gDfGOASHHBQSqLrkJRdEOYb4FuGKm2QP01DvlH3FNpvYD/grhMM49Z8a8FnSzT6Sz3gG9FyQL6ufCR0w4dGRnzrlUt6waWU3kHtdcQ3qJKujvI0MmuUnfINGhLlhnyFuKF1lXxDGexHteebe0G+cQNOtJ8qKBRfzpe8dVsCbz1VvKljUvI0YTcfyb0g324iAbxlN7eQKuh+9awXptEiwE/aJTKVrTC+XAhv2e4HhIE39zILvNWeb+9eWQ0lt+cbtOC8Jnjr7wpJ0bevmf2GTtP8aQbsXyBhNi3fKNvSGcf1Ie4d1EumfGup0q2lZeWFId8ujC6pmtDm2WGm9uH2M+1WfEtpaoxZJwOogRMua4dLvj2uN9CAC75lN8lFofJ6uKEhvM6vigVPNeHbZIhG4LwUcBtlEtPKieRCWOV488q1IfHS3vDtc94Bq8Cbe8HA277g29SEKd0CE2tu+Pa6Me4zMuG8agLhjasafQP2m91+QMg3bqZB/xTU98oad2W+Qb4RqkmAQ3zrhHy7gDS69Ewz1+kUhVs7wRs+yQPgG2svBdG1iMAZyDksOuIblM+omtIN37L5XNFW5WC2Nnwr9X9FAJdkgNvMoRSqoFuxwVsd/jYGSnu/GL7BwJt7gcBbTfk2hfUOJRYsZiJNre2Ub2+oGlG+VNXTzb+a5M6pyJ7i0yT+xtm0g/q3DOBbGgn2n3KNu8Ib5FsLt9/wgbUS0PPtAtOSsOz8MwRvx4j1xnSGPAK+kdo2y4KQOX0ALuWSbwP1UIorvmXzZVu85bO14lspQQEX89EW7Mo6xxvJiFQzp4mQGN7bGi99WXyDgTf3AoG3WvLNfjBSJ6gLsePbG6Ejh5OTqow4v7907R7GG5dHa795TOJvhvvrDfiGA3UG9SFgvqVOt3o7650rcus3Q75hqDXRByJovyG8cS3964WqKIr6YuIEwtsxdLQfaxcy45vhVKRFiXjgglO+wRIRqAFXfMMb1i01HczWjm+lxCwmV/Phc3T9ghpk03vL4aCvarzFWlulRQ2lL4RvMPC2e4HAW634BqNuUIGjU2tO+fbGQK9DXT8lVtlkXr9vtT+JauEkvInsKUeb4/56zKuXgG+YhA74BnXp1p0n4+Pjvb2RSHd3d19HR0cb9fiQ+rq7I5FI7/j4kyd37tz6L/sOyDdGNkG4Jk2YTbnO+Xbq1CnkpD5/vrD2HL0cJnw7dqwdHXZ8awN808bbevVfNuKYb7DGF+g7d3zLbm4XLbS9ma0l30p0cUzzV7FJL92fVaoEg8EKTbEEAp3KZHJW3rJ17v/s3b9LG2Ecx/HRRbJ4bc8I0eTkqs2Row6F0tAsZhAilJilJCGtkCylhNuKQwmhgw4tgkhdQoYuReJYSCfByaF/wIFFSGnAP6PPD80nuefBhOvpA0feSW+wSwvy4nvP81zihsM3LLwFmbDwpso3CNdjcojNX0C3sb79kqdls9Hdaqler5eq36NZoptOfNM9m6cUNxg30fx2IjsfcsJ+3JH5xoNvgQXfPFmJRHt2qK8HHLeR4nHDSNK4bkvkxS9y316P+dC3LQE8P77xjoRfC9eHb6xLnFbwdrp5+VOtb263GmHCNYpld5UQt8D/4+z7nZe7dYf8rfDNWSHwDQtvQYaFN/W+4WRvb1nAbYU+kOXXN6RFo2aWZ5o6bWR6Y8Qx2+ZufX6hM9H+AhWu05Hvn96/bwS4oX/gt4MM5+3NEG7xmlFLGknW2lKSyrbELjSJb9sjh0E/Cz997j0ysuHLN15rxrO/0PLjG2+xIOetQO5NVfmGyo7NhLPNYj3vPlhdXaY93CmXnEZsaHaLFPNuaHzDwluQQTeVvomRTYbePFVuYf6sd/EBk5tv3wBcVB+kYXojYXxjf27x7WSS+W2Q8vnNSli0ROL47BqelYNMLgfa0vF0vEZ0IyV5RDfeGr+seXwTv2BhW/IQatM70PnwDbX2bvZRF14etXycf0MzdF3L0x/opsY3VHGIbpSwWMTUHadYdBzdJLbFItCtAd3C4BsW3oIMC2/KfAs4+CZPG/FNk45v9IomuD/lt6HC8wvy8yH4/tO79c2y6HvwsqwUuR4et9vt48N9wlsunRvWjWTUjKQx4I0Jh+Abaj6V3Ho2vful7zHj+fMNtVpvScw2f76hvX6BHi3jnX4s9HHoTZlvqFw1Y5S4iG3bMRq2FCh7tl7acd0w+YaFtyDDwlvofQNwus6I065fA+AQxrdx8xt8E9ffOnLfOqy79s26sY1daKlU6jFrfz/DeEun1ylu9EXi05vhGd+kvqHmFnYOZL55b2P9+ibm3zd0uXjev9rcvOqf/8Wym1rfULdS1RscNkSxsxtOqeyiEPimoDD6BuB0kwvn2Ttl4xvr/z8/5AcDjrxV+YbA2wtShumWWydx3uI1+jYwvWF8E3wT+vRq69nGu+Zv9MW75aDeNx8p9A3l61VHb5CBjWdHzN1iqYLJberb1DcxTaeZGN8k89vcON9mx/pGcaPneOXPZynwzcMbnd7iLMbb6OLbkyXWI/ISfAss0bepb2I7+XKlTquU810XTX2b+iZPo+ObJsxvaMznv3Um9I3wJrs/HXSfvv1r5+5VI4ehKAA/QgoXrsLaBNaggelEii22yQvkPaVyCKmmMswDLGy3xTb7Gnt9r+RjRTYmExCj5B55gn+Y9uPIUibWt5+U0N76p74X4R64vYX6Zg6mm0bb8iGjjG/q2/VR39Q3ABc2vu3Ut83/Pz29PCLPE2KU50eE975xfPrg5VRofnqkAdzy2Smlj7j1ePcmwAXZwFvNvl1eP5BLVb6pb+rbSGmowaG/7dY39Dc0uEX4xsknt7yY5/IHheanRwJORuAtrW+UPgLHOcT6Zkwno5V0/KnPt3lx9Pef16uDX1Q6375v6pv6Nkoa9Lf9+pb7xko5NszRkHO5OR3ehQccL3/jZRnfjhLCTTJk9S2WN4ngZg9GgGuX6ar1TfLv8u3KXIi3WnxT39S3cU6T7g2Bb/v9zdMAWWwbieZZNAfEuNPxLXyH46c4SgnfJEPq26K9PcRYy7oxbsTbW+HaKn37eCrxTX1T30YJgJvTJMLd7fQ3ISwhzktxczN8MM57ApAGX5TubyhvG/UNuE0H8cbJdbtd39Q39U19GzkZcN9Zt3f3txM277qleLhAXFhF9XTQxxX3bRjA26pvdhrMmxXdZCSp0LdfX8E39U19G9dyfz+Sa9kv9+L1235/8+FDbqVPRD+H0/AwOMcp4dvAuEXe0tUFtDfRzQbdUN/UtzQ36Jv6pr6t4sYBcHSStbfafRvINuTH9vTUxhgL3kwNvqlv6pv2t3XdBLjt+lZ/f1vqxrxl9S3XDfPTOnxT39Q3ff+W6RYz3gXf3tnfXIDN+XBH9IrLqMlbOefdvP7A2rky798WutHBgW/9U9gaYulYBa4S39Q39U3XF1LccuCabPW0et/SqenAulE2Z6fGWOiWp7tV39Q39U3XTyNueZoA3Gfrb8CNgVtbPcXSAscgbb5DpKvXt/P5/Pfa0He/hG/q239BOcy5ZnLYXQAAAABJRU5ErkJggg==";
var Sg = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("footer", {
    attrs: {
      "data-id": "sds-layout-sei-external-footer"
    }
  }, [t._m(0), r("div", {
    staticClass: "py-8 text-gray-100 bg-gray-900"
  }, [r("div", {
    staticClass: "container px-4 mx-auto space-y-6 md:px-8"
  }, [r("div", {
    staticClass: "grid grid-cols-1 gap-8 md:grid-cols-3"
  }, [t._m(1), r("ul", {
    staticClass: "space-x-2"
  }, [r("li", {
    staticClass: "inline-block"
  }, [r("a", {
    staticClass: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 facebook",
    style: {
      height: "30px",
      width: "30px",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(".concat(t.socialSprites, ")"),
      backgroundPosition: "0 0",
      backgroundSize: "auto 100%"
    },
    attrs: {
      href: "https://www.facebook.com/SEICMU/",
      rel: "noopener",
      target: "_blank"
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Facebook")])])]), r("li", {
    staticClass: "inline-block"
  }, [r("a", {
    staticClass: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 twitter",
    style: {
      height: "30px",
      width: "30px",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(".concat(t.socialSprites, ")"),
      backgroundPosition: "-32px 0",
      backgroundSize: "auto 100%",
      content: ""
    },
    attrs: {
      href: "https://twitter.com/sei_cmu",
      rel: "noopener",
      target: "_blank"
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Twitter")])])]), r("li", {
    staticClass: "inline-block"
  }, [r("a", {
    staticClass: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 linkedin",
    style: {
      height: "30px",
      width: "30px",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(".concat(t.socialSprites, ")"),
      backgroundPosition: "-96px 0",
      backgroundSize: "auto 100%"
    },
    attrs: {
      href: "https://www.linkedin.com/company/software-engineering-institute",
      rel: "noopener",
      target: "_blank"
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("LinkedIn")])])]), r("li", {
    staticClass: "inline-block"
  }, [r("a", {
    staticClass: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 youtube",
    style: {
      height: "30px",
      width: "30px",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(".concat(t.socialSprites, ")"),
      backgroundPosition: "-129px 0",
      backgroundSize: "auto 100%"
    },
    attrs: {
      href: "https://www.youtube.com/user/TheSEICMU",
      rel: "noopener",
      target: "_blank"
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("YouTube")])])]), r("li", {
    staticClass: "inline-block"
  }, [r("a", {
    staticClass: "inline-block hover:border-b-0 hover:opacity-50 focus:border-b-0 focus:opacity-50 itunes",
    style: {
      height: "30px",
      width: "30px",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(".concat(t.socialSprites, ")"),
      backgroundPosition: "-161px 0",
      backgroundSize: "auto 100%",
      borderRadius: "50%"
    },
    attrs: {
      href: "https://podcasts.apple.com/us/podcast/software-engineering-institute-sei-podcast-series/id566573552?mt=2",
      rel: "noopener",
      target: "_blank"
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("iTunes")])])])]), t._m(2)]), t._m(3), r("div", {
    staticClass: "text-sm"
  }, [t._v(" \xA9 " + t._s(t.year) + " Carnegie Mellon University ")])])])]);
}, jg = [function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("div", {
    staticClass: "py-8 text-white bg-gray-500"
  }, [n("div", {
    staticClass: "container px-4 mx-auto space-y-6 md:px-8"
  }, [n("ul", {
    staticClass: "grid grid-cols-1 gap-6 md:grid-cols-3"
  }, [n("li", [n("a", {
    staticClass: "hover:underline focus:underline focus:outline-none",
    attrs: {
      href: "https://vulcoord.cert.org/VulReport/"
    }
  }, [e._v("Report a Vulnerability to CERT/CC")])]), n("li", [n("a", {
    staticClass: "hover:underline focus:underline focus:outline-none",
    attrs: {
      href: "https://sei.cmu.edu/subscribe-to-sei-bulletin/"
    }
  }, [e._v("Subscribe to SEI Bulletin")])]), n("li", [n("a", {
    staticClass: "hover:underline focus:underline focus:outline-none",
    attrs: {
      href: "https://sei.cmu.edu/legal/request-permission-to-use-sei-material"
    }
  }, [e._v("Request Permission to Use SEI Materials")])])])])]);
}, function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("div", [n("address", {
    staticClass: "not-italic"
  }, [e._v(" Carnegie Mellon University"), n("br"), e._v(" Software Engineering Institute"), n("br"), e._v(" 4500 Fifth Avenue"), n("br"), e._v(" Pittsburgh, PA 15213-2612"), n("br"), n("a", {
    staticClass: "hover:underline",
    attrs: {
      href: "tel:412-268-5800",
      target: "_self"
    }
  }, [e._v("412-268-5800")])])]);
}, function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("div", [n("a", {
    staticClass: "py-8 text-xl text-center transition-colors duration-100 rounded-none btn btn-outline btn-light btn-lg btn-block",
    attrs: {
      href: "https://sei.cmu.edu/contact-us/",
      target: "_self"
    }
  }, [e._v(" Contact Us ")])]);
}, function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ul", {
    staticClass: "space-x-1 text-sm"
  }, [n("li", {
    staticClass: "inline-block"
  }, [n("a", {
    staticClass: "hover:underline",
    attrs: {
      href: "https://www.sei.cmu.edu/locations/index.cfm",
      target: "_self"
    }
  }, [e._v("Office Locations")])]), n("li", {
    staticClass: "inline-block"
  }, [e._v(" | ")]), n("li", {
    staticClass: "inline-block"
  }, [n("a", {
    staticClass: "hover:underline",
    attrs: {
      href: "https://www.sei.cmu.edu/additional-sites-directory/index.cfm",
      target: "_self"
    }
  }, [e._v("Additional Sites Directory")])]), n("li", {
    staticClass: "inline-block"
  }, [e._v(" | ")]), n("li", {
    staticClass: "inline-block"
  }, [n("a", {
    staticClass: "hover:underline",
    attrs: {
      href: "https://www.sei.cmu.edu/legal/index.cfm",
      target: "_self"
    }
  }, [e._v("Legal")])]), n("li", {
    staticClass: "inline-block"
  }, [e._v(" | ")]), n("li", {
    staticClass: "inline-block"
  }, [n("a", {
    staticClass: "hover:underline",
    attrs: {
      href: "https://www.sei.cmu.edu/legal/privacy-notice/index.cfm",
      target: "_self"
    }
  }, [e._v("Privacy Notice")])]), n("li", {
    staticClass: "inline-block"
  }, [e._v(" | ")]), n("li", {
    staticClass: "inline-block"
  }, [n("a", {
    staticClass: "hover:underline",
    attrs: {
      href: "https://www.cmu.edu/hr/ethics-hotline/",
      target: "_self"
    }
  }, [e._v("CMU Ethics Hotline")])]), n("li", {
    staticClass: "inline-block"
  }, [e._v(" | ")]), n("li", {
    staticClass: "inline-block"
  }, [n("a", {
    staticClass: "hover:underline",
    attrs: {
      href: "https://www.sei.cmu.edu/index.cfm",
      target: "_self"
    }
  }, [e._v("www.sei.cmu.edu")])])]);
}];
const Tg = {
  name: "SdsLayoutSeiExternalFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    },
    socialSprites() {
      return Cg;
    }
  }
}, os = {};
var Ng = /* @__PURE__ */ y(
  Tg,
  Sg,
  jg,
  !1,
  Dg,
  null,
  null,
  null
);
function Dg(e) {
  for (let t in os)
    this[t] = os[t];
}
const mo = /* @__PURE__ */ function() {
  return Ng.exports;
}();
var kg = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "space-y-4",
    attrs: {
      "data-id": "sds-layout-sei-external-nav"
    }
  }, t._l(t.page.nav, function(a) {
    return r("div", {
      key: a.title,
      staticClass: "p-4 space-y-2 bg-gray-100"
    }, [r("h3", {
      staticClass: "text-xl text-gray-600 break-words"
    }, [t._v(" " + t._s(a.title) + " ")]), r("ul", {
      staticClass: "pb-2 space-y-2"
    }, t._l(a.items, function(i) {
      return r("li", {
        key: i.title
      }, [r("a", {
        staticClass: "text-red-500 break-words hover:text-red-700 hover:underline",
        attrs: {
          href: i.url
        }
      }, [t._v(t._s(i.title))])]);
    }), 0), a.seeAll ? r("div", {
      staticClass: "pt-2 border-t"
    }, [r("a", {
      staticClass: "inline-flex font-bold uppercase group text-secondary",
      attrs: {
        href: a.seeAll.url
      }
    }, [r("span", {
      staticClass: "group-hover:underline"
    }, [t._v(t._s(a.seeAll.title))]), r("svg", {
      staticClass: "block w-5 h-5 my-auto fill-current",
      attrs: {
        viewBox: "0 0 32 32",
        "aria-hidden": "true"
      }
    }, [r("path", {
      attrs: {
        d: "M11.303 8l11.394 7.997L11.303 24z"
      }
    })])])]) : t._e()]);
  }), 0);
}, Og = [];
const zg = {
  name: "SdsLayoutSeiExternalNav",
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}, ls = {};
var Ig = /* @__PURE__ */ y(
  zg,
  kg,
  Og,
  !1,
  Pg,
  null,
  null,
  null
);
function Pg(e) {
  for (let t in ls)
    this[t] = ls[t];
}
const vo = /* @__PURE__ */ function() {
  return Ig.exports;
}();
var Eg = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "space-y-4",
    attrs: {
      "data-id": "sds-layout-sei-external-header-content"
    }
  }, [t.page.title ? r("h3", {
    staticClass: "text-3xl text-gray-500 break-words font-extralight"
  }, [t._v(" " + t._s(t.page.title) + " ")]) : t._e(), t.page.subtitle ? r("h4", {
    staticClass: "text-xl text-gray-500 break-words"
  }, [t._v(" " + t._s(t.page.subtitle) + " ")]) : t._e(), t.page.description ? r("div", {
    staticClass: "max-w-screen-md prose break-words prose-red",
    domProps: {
      innerHTML: t._s(t.page.description)
    }
  }) : t._e()]);
}, $g = [];
const Ag = {
  name: "SdsLayoutSeiExternalHeaderContent",
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}, us = {};
var Rg = /* @__PURE__ */ y(
  Ag,
  Eg,
  $g,
  !1,
  Yg,
  null,
  null,
  null
);
function Yg(e) {
  for (let t in us)
    this[t] = us[t];
}
const go = /* @__PURE__ */ function() {
  return Rg.exports;
}();
var Ug = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "py-8 bg-white",
    attrs: {
      "data-id": "sds-layout-sei-external-masthead"
    }
  }, [r("div", {
    staticClass: "container px-4 mx-auto md:px-8"
  }, [t.page.nav ? r("div", {
    staticClass: "grid grid-cols-1 gap-8 lg:grid-cols-12"
  }, [r("div", {
    staticClass: "order-2 lg:col-span-3 lg:order-1"
  }, [r("layout-sei-external-nav", {
    attrs: {
      page: t.page
    }
  })], 1), t.page.title || t.page.subtitle || t.page.description ? r("div", {
    staticClass: "order-1 lg:col-span-9 lg:order-2"
  }, [r("layout-sei-external-header-content", {
    attrs: {
      page: t.page
    }
  })], 1) : t._e()]) : [t.page.title || t.page.subtitle || t.page.description ? r("layout-sei-external-header-content", {
    attrs: {
      page: t.page
    }
  }) : t._e()]], 2)]);
}, Bg = [];
const Qg = {
  name: "SdsLayoutSeiExternalMasthead",
  components: {
    LayoutSeiExternalNav: vo,
    LayoutSeiExternalHeaderContent: go
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}, cs = {};
var Hg = /* @__PURE__ */ y(
  Qg,
  Ug,
  Bg,
  !1,
  Fg,
  null,
  null,
  null
);
function Fg(e) {
  for (let t in cs)
    this[t] = cs[t];
}
const wo = /* @__PURE__ */ function() {
  return Hg.exports;
}();
var Gg = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "flex flex-col w-full min-h-screen text-gray-900 bg-white",
    attrs: {
      "data-id": "sds-layout-sei-external"
    }
  }, [t._t("header", function() {
    return [r("layout-sei-external-header", {
      attrs: {
        page: t.page
      }
    })];
  }), t.showMasthead ? t._t("masthead", function() {
    return [r("layout-sei-external-masthead", {
      attrs: {
        page: t.page
      }
    })];
  }) : t._e(), r("main", {
    staticClass: "flex-grow"
  }, [r("div", {
    class: {
      "bg-gray-50": t.showMasthead
    }
  }, [t.removeContentPadding ? [t._t("default")] : [r("div", {
    staticClass: "container p-4 mx-auto md:p-8"
  }, [t._t("default")], 2)]], 2)]), r("layout-sei-external-footer")], 2);
}, Vg = [];
const Wg = {
  name: "SdsLayoutSeiExternal",
  components: {
    LayoutSeiExternalHeader: yo,
    LayoutSeiExternalFooter: mo,
    LayoutSeiExternalMasthead: wo
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    },
    removeContentPadding: {
      type: Boolean,
      default: !1
    },
    showMasthead: {
      type: Boolean,
      default: !1
    }
  }
}, fs = {};
var qg = /* @__PURE__ */ y(
  Wg,
  Gg,
  Vg,
  !1,
  Jg,
  null,
  null,
  null
);
function Jg(e) {
  for (let t in fs)
    this[t] = fs[t];
}
const Xg = /* @__PURE__ */ function() {
  return qg.exports;
}(), Kg = J.extend({
  name: "SdsLayoutStacked",
  props: {
    stickyHeader: {
      type: Boolean,
      default: !1
    },
    stickyFooter: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    }
  }
});
var Zg = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "flex flex-col w-full min-h-screen",
    attrs: {
      "data-id": "sds-layout-stacked"
    }
  }, [t.hasHeaderSlot ? r("header", {
    staticClass: "z-30 flex-shrink",
    class: {
      "sticky top-0 shadow": t.stickyHeader
    }
  }, [t._t("header")], 2) : t._e(), r("main", {
    staticClass: "flex-grow"
  }, [t._t("default")], 2), t.hasFooterSlot ? r("footer", {
    staticClass: "z-20 flex-shrink",
    class: {
      "sticky bottom-0 shadow": t.stickyFooter
    }
  }, [t._t("footer")], 2) : t._e()]);
}, t4 = [];
const ds = {};
var e4 = /* @__PURE__ */ y(
  Kg,
  Zg,
  t4,
  !1,
  r4,
  null,
  null,
  null
);
function r4(e) {
  for (let t in ds)
    this[t] = ds[t];
}
const n4 = /* @__PURE__ */ function() {
  return e4.exports;
}();
var a4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("span", {
    class: ["loadingBox rounded flex flex-row relative overflow-hidden bg-gray-200", t.width, t.height],
    attrs: {
      "data-id": "sds-loading-box"
    }
  });
}, i4 = [];
const s4 = {
  name: "SdsLoadingBox",
  props: {
    height: {
      default: "h-full",
      type: String
    },
    width: {
      default: "w-full",
      type: String
    }
  }
}, hs = {};
var o4 = /* @__PURE__ */ y(
  s4,
  a4,
  i4,
  !1,
  l4,
  "7021287c",
  null,
  null
);
function l4(e) {
  for (let t in hs)
    this[t] = hs[t];
}
const u4 = /* @__PURE__ */ function() {
  return o4.exports;
}();
var c4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    attrs: {
      "data-id": "sds-loading-spinner",
      role: "status"
    }
  }, [r("svg", {
    staticClass: "animate-spin",
    class: t.sizeClass,
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24"
    }
  }, [r("circle", {
    staticClass: "opacity-25",
    attrs: {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      "stroke-width": "4"
    }
  }), r("path", {
    staticClass: "opacity-75",
    attrs: {
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }
  })]), t.label ? r("span", {
    staticClass: "sr-only"
  }, [t._v(t._s(t.label))]) : t._e()]);
}, f4 = [];
const d4 = {
  name: "SdsLoadingSpinner",
  props: {
    size: { type: String, default: "md" },
    label: { type: String, default: null }
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case "lg":
          return "h-20 w-20";
        case "sm":
          return "h-4 w-4";
        case "auto":
          return "";
        default:
          return "h-12 w-12";
      }
    }
  }
}, ps = {};
var h4 = /* @__PURE__ */ y(
  d4,
  c4,
  f4,
  !1,
  p4,
  null,
  null,
  null
);
function p4(e) {
  for (let t in ps)
    this[t] = ps[t];
}
const y4 = /* @__PURE__ */ function() {
  return h4.exports;
}(), m4 = J.extend({
  name: "SdsModal",
  directives: {
    focus: {
      inserted(e) {
        e.focus();
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "md"
    }
  },
  data() {
    return {
      showContent: !1
    };
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    hasFooterSlot() {
      return !!this.$slots.footer;
    },
    showModal: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  watch: {
    showModal: {
      immediate: !0,
      handler(e) {
        this.showContent = e, !(typeof document > "u") && (e ? this.makeDomChanges() : this.removeDomChanges());
      }
    }
  },
  mounted() {
    this.id = `sds-modal__${Pt()}`;
  },
  destroyed() {
    this.removeDomChanges();
  },
  methods: {
    makeDomChanges() {
      typeof document > "u" || (document.documentElement.classList.add("modal-prevent-scroll"), setTimeout(() => {
        document.addEventListener("keyup", this.handleEscKey);
      }, 0));
    },
    removeDomChanges() {
      typeof document > "u" || (document.documentElement.classList.remove("modal-prevent-scroll"), document.removeEventListener("keyup", this.handleEscKey));
    },
    close() {
      this.showContent = !1;
    },
    handleEscKey(e) {
      e.key === "Escape" && this.close();
    },
    checkKeyEvent(e) {
      if (e.key === "Escape") {
        this.close();
        return;
      }
      const t = this.$refs.modalContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (t.length < 2 && e.key === "Tab") {
        e.preventDefault();
        return;
      }
      const n = t.length - 1;
      e.key === "Tab" && e.shiftKey === !1 && e.target === t[n] ? (e.preventDefault(), t[0].focus()) : e.key === "Tab" && e.shiftKey === !0 && e.target === t[0] && (e.preventDefault(), t[n].focus());
    }
  }
});
var v4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("transition", {
    attrs: {
      "enter-active-class": "transition-opacity duration-75",
      "enter-class": "opacity-0",
      "leave-active-class": "transition-opacity duration-75",
      "leave-to-class": "opacity-0"
    },
    on: {
      "after-enter": function(i) {
        t.showContent = !0;
      },
      "after-leave": function(i) {
        t.showModal = !1;
      }
    }
  }, [t.showModal ? r("div", {
    ref: "modalContainer",
    staticClass: "fixed inset-0 z-50 block h-full px-2 py-0 overflow-auto bg-black bg-opacity-50",
    attrs: {
      "data-id": "sds-modal",
      "data-testid": "sds-modal"
    },
    on: {
      mousedown: function(i) {
        return i.target !== i.currentTarget ? null : t.close.apply(null, arguments);
      },
      keydown: t.checkKeyEvent
    }
  }, [r("transition", {
    attrs: {
      "enter-active-class": "transition-all duration-75",
      "enter-class": "transform scale-90 opacity-0",
      "leave-active-class": "transition-all duration-75",
      "leave-to-class": "transform scale-90 opacity-0"
    },
    on: {
      "after-leave": function(i) {
        t.showModal = !1;
      }
    }
  }, [t.showContent ? r("div", {
    staticClass: "relative z-50 block w-full mx-auto my-2 bg-white border rounded shadow-xl dark:bg-gray-800 dark:border-gray-700 md:my-8",
    class: {
      "md:max-w-sm": t.size === "sm",
      "md:max-w-xl": t.size === "md",
      "md:max-w-xl lg:max-w-4xl": t.size === "lg",
      "md:max-w-xl lg:max-w-4xl xl:max-w-6xl": t.size === "xl"
    },
    attrs: {
      role: "dialog",
      "aria-labelledby": t.id
    }
  }, [r("header", {
    staticClass: "flex items-center p-6 pb-0"
  }, [t.hasTitleSlot ? r("div", {
    staticClass: "text-xl leading-tight",
    attrs: {
      id: t.id
    }
  }, [t._t("title")], 2) : t._e(), r("button", {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }],
    staticClass: "inline-block p-0 ml-auto text-3xl text-gray-500 bg-transparent border-0 cursor-pointer hover:text-gray-700 hover:outline-none focus:text-gray-700 focus:outline-none dark:hover:text-gray-300 dark:focus:text-gray-300 active:text-gray-500 dark:active:text-gray-600",
    attrs: {
      "aria-label": "close"
    },
    on: {
      click: t.close
    }
  }, [r("svg", {
    staticClass: "w-6 h-6",
    attrs: {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      stroke: "currentColor",
      viewBox: "0 0 24 24"
    }
  }, [r("path", {
    attrs: {
      d: "M6 18L18 6M6 6l12 12"
    }
  })])])]), r("main", {
    staticClass: "p-6"
  }, [t._t("default")], 2), t.hasFooterSlot ? r("footer", {
    staticClass: "p-6 pt-0"
  }, [t._t("footer")], 2) : t._e()]) : t._e()])], 1) : t._e()]);
}, g4 = [];
const ys = {};
var w4 = /* @__PURE__ */ y(
  m4,
  v4,
  g4,
  !1,
  b4,
  null,
  null,
  null
);
function b4(e) {
  for (let t in ys)
    this[t] = ys[t];
}
const M4 = /* @__PURE__ */ function() {
  return w4.exports;
}();
function L4(e, t, n = !1) {
  let r;
  return function(...a) {
    const i = this;
    clearTimeout(r), r = setTimeout(function() {
      r = null, n || e.apply(i, a);
    }, t), n && !r && e.apply(i, a);
  };
}
var _4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "multiselect",
    class: {
      open: t.showDropdown,
      active: t.active,
      disabled: t.disabled,
      up: t.dropUp,
      canSearch: t.canSearch,
      hideCaret: t.hideCaret,
      showClear: t.showClear,
      hasTags: !t.hideTags && t.selected.length > 0,
      showResults: t.showResults
    },
    attrs: {
      "data-id": "sds-multiselect"
    },
    on: {
      mouseup: t.handleMouseUp,
      mousedown: function(i) {
        if (i.preventDefault(), i.stopPropagation(), i.target !== i.currentTarget)
          return null;
      },
      dblclick: t.selectText,
      keydown: function(i) {
        return t.handleKeyDown(i);
      },
      keyup: function(i) {
        return t.handleKeyUp(i);
      }
    }
  }, [r("ul", {
    staticClass: "tag-list",
    class: {
      single: !t.multiple
    }
  }, [!t.hideTags || !t.multiple ? t._l(t.selected, function(a) {
    return r("li", {
      key: a[t.valueKey],
      staticClass: "tag-list-item"
    }, [t._t("tagTemplate", function() {
      return [t.multiple ? r("button", {
        staticClass: "remove",
        attrs: {
          type: "button",
          tabindex: "-1",
          title: "Clear ".concat(a[t.labelKey]),
          "aria-label": "Clear ".concat(a[t.labelKey]),
          disabled: t.disabled
        },
        on: {
          click: function(s) {
            return t.remove(a);
          }
        }
      }, [r("span", {
        attrs: {
          "aria-hidden": "true"
        }
      }, [t._v("\xD7")])]) : t._e(), r("span", [t._v(t._s(a[t.labelKey]))])];
    }, {
      tag: a,
      remove: t.remove,
      disabled: t.disabled
    })], 2);
  }) : t._e(), r("li", {
    staticClass: "tag-list-item input",
    style: {
      width: !t.multiple && t.showDropdown && t.canSearch ? "100%" : t.inputWidth
    }
  }, [r("span", {
    ref: "faux-input",
    staticClass: "faux-input",
    attrs: {
      "aria-hidden": "true"
    }
  }, [t._v(" " + t._s(t.value) + " ")]), t.required && t.selected.length < 1 ? r("select", {
    staticClass: "faux-input",
    attrs: {
      tabindex: "-1",
      required: ""
    },
    on: {
      focus: t.handleRequired
    }
  }, [r("option")]) : t._e(), r("input", {
    ref: "input",
    staticClass: "p-0 m-0 border-0 focus:shadow-none focus:ring-0",
    style: {
      width: !t.multiple && t.showDropdown && t.canSearch ? "100%" : t.inputWidth
    },
    attrs: {
      placeholder: t.showPlaceholder ? t.placeholder : "",
      readonly: t.isReadonlyInput,
      disabled: t.disabled,
      maxlength: t.maxlength >= 0 ? t.maxlength : !1,
      autocapitalize: "off",
      autocomplete: "off",
      spellcheck: "false",
      autocorrect: "off",
      type: "text"
    },
    domProps: {
      value: t.value
    },
    on: {
      input: function(i) {
        return t.search(i);
      }
    }
  })])], 2), t.selected.length > 0 && t.showClear ? r("button", {
    staticClass: "multiselect-clear",
    attrs: {
      type: "button",
      tabindex: "-1",
      title: "Clear all",
      "aria-label": "Clear all"
    },
    on: {
      click: function(i) {
        return i.preventDefault(), i.stopPropagation(), t.handleClearBtn.apply(null, arguments);
      }
    }
  }, [r("svg", {
    staticClass: "w-5 h-5 x",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }
  }, [r("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])]) : t._e(), !t.hideCaret && !(t.showClear && t.selected.length > 0) ? r("div", {
    staticClass: "multiselect-caret",
    attrs: {
      "aria-hidden": "true"
    }
  }) : t._e(), t.showDropdown ? r("ul", {
    ref: "dropdownMenu",
    staticClass: "dropdown-list",
    style: {
      bottom: t.bottom,
      maxHeight: t.maxHeight + "px"
    }
  }, [t.showLoading ? r("li", {
    staticClass: "dropdown-list-item loading"
  }, [t._t("loadingTemplate", function() {
    return [t._v(" " + t._s(t.loadingMsg) + " ")];
  }, {
    loadingMsg: t.loadingMsg
  })], 2) : t._e(), t.showResults ? t._l(t.filteredOptions, function(a, i) {
    return r("li", {
      key: a[t.valueKey],
      staticClass: "dropdown-list-item",
      class: {
        selected: t.isSelectedOption(a),
        active: i === t.arrowCounter
      },
      attrs: {
        disabled: t.disabled
      },
      on: {
        click: function(o) {
          return t.add(a);
        },
        mouseover: function(o) {
          t.arrowCounter = i;
        }
      }
    }, [t._t("optionTemplate", function() {
      return [t._v(" " + t._s(a[t.labelKey]) + " "), a.isNewTag && !t.isSelectedOption(a) ? [t._v(" (new) ")] : t._e()];
    }, {
      option: a,
      add: t.add,
      disabled: t.disabled,
      isSelectedOption: t.isSelectedOption(a)
    })], 2);
  }) : t._e(), t.showDefault ? r("li", {
    staticClass: "dropdown-list-item default"
  }, [t._t("defaultTemplate", function() {
    return [t._v(" " + t._s(t.defaultMsg) + " ")];
  }, {
    defaultMsg: t.defaultMsg
  })], 2) : t._e(), t.showNoResults ? r("li", {
    staticClass: "dropdown-list-item no-result"
  }, [t._t("noResultsTemplate", function() {
    return [t._v(" " + t._s(t.noResultsMsg) + " ")];
  }, {
    noResultsMsg: t.noResultsMsg
  })], 2) : t._e(), t.showCannotAddResults ? r("li", {
    staticClass: "dropdown-list-item cannot-add-result"
  }, [t._t("cannotAddResultsTemplate", function() {
    return [t._v(" " + t._s(t.cannotAddResultsMsg) + " ")];
  }, {
    cannotAddResultsMsg: t.cannotAddResultsMsg
  })], 2) : t._e(), t.showInvalidInput ? r("li", {
    staticClass: "dropdown-list-item invalid-input"
  }, [t._t("invalidInputTemplate", function() {
    return [t._v(" " + t._s(t.invalidInputMsg) + " ")];
  }, {
    invalidInputMsg: t.invalidInputMsg
  })], 2) : t._e()], 2) : t._e()]);
}, x4 = [];
const C4 = {
  name: "SdsMultiselect",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    valueKey: {
      type: String,
      default: "key"
    },
    labelKey: {
      type: String,
      default: "value"
    },
    value: {
      type: String,
      default: ""
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingMsg: {
      type: String,
      default: "Loading..."
    },
    defaultMsg: {
      type: String,
      default: ""
    },
    noResultsMsg: {
      type: String,
      default: ""
    },
    cannotAddResultsMsg: {
      type: String,
      default: "You have added the maximum amount of items allowed."
    },
    invalidInputMsg: {
      type: String,
      default: "HTML input is not allowed."
    },
    hideTags: {
      type: Boolean,
      default: !1
    },
    canLoopOptions: {
      type: Boolean,
      default: !1
    },
    toggleSelectedOptions: {
      type: Boolean,
      default: !1
    },
    hideSelectedOptions: {
      type: Boolean,
      default: !1
    },
    closeOnSelection: {
      type: Boolean,
      default: !0
    },
    canSearch: {
      type: Boolean,
      default: !0
    },
    disableRemoveLastSelection: {
      type: Boolean,
      default: !1
    },
    clearInputOnSelection: {
      type: Boolean,
      default: !0
    },
    clearOptionsOnSelection: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String,
      default: ""
    },
    openDirection: {
      type: String,
      default: "auto"
    },
    maxHeight: {
      type: Number,
      default: 200
    },
    hideCaret: {
      type: Boolean,
      default: !1
    },
    showClear: {
      type: Boolean,
      default: !1
    },
    taggable: {
      type: Boolean,
      default: !1
    },
    maxlength: {
      type: Number,
      default: -1
    },
    maxItems: {
      type: Number,
      default: -1
    },
    enforceLowercaseNewTag: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      isOpen: !1,
      active: !1,
      inputWidth: 0,
      arrowCounter: 0,
      bottom: "auto",
      dropUp: !1
    };
  },
  computed: {
    showDropdown() {
      return this.showLoading || this.showDefault || this.showNoResults || this.showResults || this.showCannotAddResults || this.showInvalidInput;
    },
    showLoading() {
      return this.loading && this.isOpen && this.canAddItem;
    },
    showResults() {
      return this.filteredOptions.length > 0 && this.isOpen && !this.loading && this.canAddItem;
    },
    showDefault() {
      return this.defaultMsg !== "" && this.trimmedValue === "" && this.filteredOptions.length < 1 && !this.loading && this.isOpen && this.canAddItem;
    },
    showNoResults() {
      return this.noResultsMsg !== "" && this.trimmedValue !== "" && this.filteredOptions.length < 1 && !this.loading && this.isOpen && this.canAddItem;
    },
    showPlaceholder() {
      return this.placeholder !== "" && this.selected.length < 1 && this.trimmedValue === "";
    },
    showCannotAddResults() {
      return this.isOpen && !this.canAddItem && this.isCleanInput;
    },
    showInvalidInput() {
      return !this.isCleanInput;
    },
    canAddItem() {
      return this.isCleanInput && (this.maxItems < 0 || this.selected.length < this.maxItems);
    },
    isReadonlyInput() {
      return !this.canSearch;
    },
    isCleanInput() {
      return !this.detectHtml(this.trimmedValue);
    },
    trimmedValue() {
      return this.value.trim();
    },
    filteredOptions() {
      const e = this.options;
      return this.taggable && this.trimmedValue !== "" && (e.some((t) => this.enforceLowercaseNewTag ? t[this.labelKey].trim().toLowerCase() === this.trimmedValue.toLowerCase() : t[this.labelKey].trim() === this.trimmedValue) || e.push(this.newTag)), this.hideSelectedOptions ? e.filter((t) => this.selected.filter((n) => t[this.valueKey] === n[this.valueKey]).length === 0) : e;
    },
    newTag() {
      const e = {}, t = Math.floor(Math.random() * 9e5 + 1e5);
      return e[this.valueKey] = t, e[this.labelKey] = this.enforceLowercaseNewTag ? this.trimmedValue.toLowerCase() : this.trimmedValue, e.isNewTag = !0, e;
    }
  },
  watch: {
    showDropdown(e) {
      e && this.positionDropdown();
    },
    filteredOptions() {
      this.arrowCounter = 0;
    }
  },
  mounted() {
    this.resizeInput(), setTimeout(() => {
      this.autofocus && (this.$refs.input.focus(), this.active = !0);
    }, 0), document.addEventListener("click", this.handleOutsideClick), document.addEventListener("keyup", this.handleOutsideKeyUp), this.debouncePositionDropdown = L4(this.positionDropdown, 150), document.addEventListener("scroll", this.debouncePositionDropdown), window.addEventListener("resize", this.debouncePositionDropdown);
  },
  destroyed() {
    document.removeEventListener("click", this.handleOutsideClick), document.removeEventListener("keyup", this.handleOutsideKeyUp), document.removeEventListener("scroll", this.debouncePositionDropdown), window.removeEventListener("resize", this.debouncePositionDropdown);
  },
  methods: {
    detectHtml(e) {
      return e.match(/<[^\s]|&[^\s;]*;/gi) !== null;
    },
    selectText() {
      this.$refs.input.setSelectionRange(0, this.value.length);
    },
    search(e) {
      !this.canSearch || this.input(e.target.value);
    },
    resizeInput() {
      setTimeout(() => {
        if (this.showPlaceholder)
          this.inputWidth = "100%";
        else {
          const t = typeof this.$refs["faux-input"] < "u" ? this.$refs["faux-input"].clientWidth + 20 : 0;
          let n = this.$el.clientWidth - 20;
          (!this.hideCaret || this.showClear && this.selected.length > 0) && (n = n - 10);
          const r = Math.min(Math.max(t, 20), n);
          this.inputWidth = r + "px";
        }
      }, 0);
    },
    removeLastSelection() {
      if (this.value !== "" || !this.canSearch || this.hideTags || this.disableRemoveLastSelection)
        return;
      const e = this.selected;
      e.splice(-1, 1), this.updateSelected(e), this.positionDropdown();
    },
    add(e) {
      if (!this.canAddItem)
        return;
      if (this.isSelectedOption(e)) {
        this.toggleSelectedOptions && this.remove(e);
        return;
      }
      let t = [];
      this.multiple && (t = this.selected), t.push(e), this.updateSelected(t), this.clearInputOnSelection && this.clearInput(), this.clearOptionsOnSelection && this.clearOptions(), this.handleCloseOnSelection(), this.positionDropdown();
    },
    remove(e) {
      this.updateSelected(
        this.selected.filter(
          (t) => t[this.valueKey] !== e[this.valueKey]
        )
      ), this.handleCloseOnSelection(), this.positionDropdown();
    },
    isSelectedOption(e) {
      return this.selected.some(
        (t) => t[this.labelKey] === e[this.labelKey]
      );
    },
    focusInput() {
      this.$emit("focus"), this.$refs.input.focus();
    },
    clearInput() {
      this.input("");
    },
    clearSelected() {
      this.updateSelected([]);
    },
    clearOptions() {
      this.updateOptions([]);
    },
    input(e) {
      this.$emit("input", e), this.resizeInput(), this.positionDropdown();
    },
    updateSelected(e) {
      this.$emit("update-selected", e), this.resizeInput(), this.arrowCounter > this.filteredOptions.length - 1 && (this.arrowCounter = this.filteredOptions.length - 1);
    },
    updateOptions(e) {
      this.$emit("update-options", e);
    },
    open() {
      this.disabled || this.showDropdown || (this.$emit("open"), this.focusInput(), this.isOpen = !0, this.$nextTick(() => {
        this.arrowCounter = 0;
      }));
    },
    close() {
      this.showDropdown && (this.$emit("close"), this.multiple || this.clearInput(), this.isOpen = !1, this.arrowCounter = 0);
    },
    handleClearBtn() {
      this.clearSelected(), this.clearInput(), this.focusInput(), this.positionDropdown();
    },
    handleArrows(e) {
      if (!this.showDropdown)
        return;
      const t = 0;
      switch (e) {
        case "down":
          this.arrowCounter < this.filteredOptions.length - 1 ? (this.arrowCounter = this.arrowCounter + 1, this.handleDropdownScroll()) : (this.canLoopOptions && (this.arrowCounter = t), this.canLoopOptions && this.handleDropdownScroll());
          break;
        case "up":
          this.arrowCounter > t ? (this.arrowCounter = this.arrowCounter - 1, this.handleDropdownScroll()) : (this.canLoopOptions && (this.arrowCounter = this.filteredOptions.length - 1), this.canLoopOptions && this.handleDropdownScroll(!0));
          break;
      }
    },
    handleDropdownScroll(e = !1) {
      if (!this.showDropdown || typeof this.$refs.dropdownMenu > "u")
        return;
      const t = this.$refs.dropdownMenu.children[this.arrowCounter] || !1, n = t ? t.offsetHeight : 0;
      let r = 0;
      for (let s = 0; s < this.arrowCounter; s++)
        r += this.$refs.dropdownMenu.children[s].offsetHeight;
      const a = r + n, i = {
        top: this.$refs.dropdownMenu.scrollTop || 0,
        bottom: this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop || 0
      };
      e ? this.$refs.dropdownMenu.scrollTop = a : r <= i.top ? this.$refs.dropdownMenu.scrollTop = r : a >= i.bottom && (this.$refs.dropdownMenu.scrollTop = i.top + n);
    },
    handleKeyUp(e) {
      if (this.disabled)
        return;
      const t = [
        "Enter",
        "Backspace",
        "Delete",
        "Tab",
        "Alt",
        "Shift",
        "Control",
        "Meta",
        "CapsLock",
        "Fn",
        "FnLock",
        "Hyper",
        "NumLock",
        "ScrollLock",
        "Super",
        "Symbol",
        "SymbolLock",
        "ArrowLeft",
        "ArrowRight",
        "Left",
        "Right"
      ];
      e.key === "Enter" && this.showDropdown ? this.arrowCounter <= this.filteredOptions.length - 1 && this.arrowCounter > -1 && this.add(this.filteredOptions[this.arrowCounter]) : e.keyCode === 27 ? (e.preventDefault(), e.stopPropagation(), this.handleEsc()) : e.key === "Tab" ? this.active || (this.active = !0) : !this.showDropdown && !t.includes(e.key) && this.open();
    },
    handleKeyDown(e) {
      this.disabled || (!this.canSearch && e.keyCode === 32 && e.preventDefault(), e.key === "Enter" && this.showDropdown && e.preventDefault(), e.key === "Delete" || e.key === "Backspace" ? this.removeLastSelection() : e.key === "Tab" ? this.showDropdown && (this.arrowCounter <= this.filteredOptions.length - 1 && this.arrowCounter > -1 && this.canAddItem ? (this.add(this.filteredOptions[this.arrowCounter]), e.preventDefault()) : this.close()) : e.key === "ArrowUp" || e.key === "Up" ? (e.preventDefault(), e.stopPropagation(), this.handleArrows("up")) : (e.key === "ArrowDown" || e.key === "Down") && (e.preventDefault(), e.stopPropagation(), this.handleArrows("down")));
    },
    handleMouseUp() {
      this.disabled || (this.$root.$emit("floating-ui-toggle", !1), this.open(), this.active = !0);
    },
    handleCloseOnSelection() {
      this.closeOnSelection ? this.close() : this.focusInput();
    },
    handleOutsideClick(e) {
      this.$el.contains(e.target) || (this.active && (this.active = !1), this.close());
    },
    handleOutsideKeyUp(e) {
      this.$el.contains(e.target) || this.active && (this.active = !1);
    },
    positionDropdown() {
      !this.showDropdown || this.$nextTick(() => {
        if (this.openDirection === "down" && (this.dropUp = !1), this.openDirection === "up" && (this.dropUp = !0, this.bottom = this.$el.clientHeight + "px"), this.openDirection === "auto") {
          const t = window.innerHeight - this.$el.getBoundingClientRect().bottom < this.maxHeight;
          this.dropUp = t, this.bottom = this.dropUp ? this.$el.clientHeight + "px" : "auto";
        }
      });
    },
    handleEsc() {
      this.close();
    },
    handleRequired() {
      this.$refs.input.focus(), this.active || (this.active = !0);
    }
  }
}, ms = {};
var S4 = /* @__PURE__ */ y(
  C4,
  _4,
  x4,
  !1,
  j4,
  "172bed9b",
  null,
  null
);
function j4(e) {
  for (let t in ms)
    this[t] = ms[t];
}
const T4 = /* @__PURE__ */ function() {
  return S4.exports;
}();
var N4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return t.totalPages > 1 ? r("nav", {
    staticClass: "paginator",
    attrs: {
      "data-id": "sds-paginator",
      "aria-label": "Page navigation"
    }
  }, [r("div", {
    staticClass: "btn-toolbar",
    attrs: {
      role: "toolbar"
    }
  }, [r("div", {
    staticClass: "mr-2 btn-group"
  }, [r("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.prevDisabled,
      title: "First"
    },
    on: {
      click: function(i) {
        return i.preventDefault(), t.goToPage(1, i);
      }
    }
  }, [r("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
    }
  })]), r("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("First")])]), r("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.prevDisabled,
      title: "Prev"
    },
    on: {
      click: function(i) {
        return i.preventDefault(), t.goToPage(t.currentPage - 1, i);
      }
    }
  }, [r("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M15 19l-7-7 7-7"
    }
  })]), r("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("Prev")])])]), t.totalPages > 1 ? r("div", {
    staticClass: "hidden btn-group md:block"
  }, [t._l(t.pageList, function(a, i) {
    return [r("button", {
      key: i,
      staticClass: "btn btn-default",
      class: {
        "shadow-none border-transparent": a === "...",
        active: t.currentPage === a
      },
      attrs: {
        disabled: a === "..." || t.loading
      },
      on: {
        click: function(o) {
          return o.preventDefault(), t.goToPage(a, o);
        }
      }
    }, [t._v(" " + t._s(a.toLocaleString()) + " ")])];
  })], 2) : t._e(), r("div", {
    staticClass: "block mx-0 currentPageLabelContainer btn-group md:hidden"
  }, [r("span", {
    staticClass: "inline-block px-3 pt-2 currentPageLabel"
  }, [t._v(" Page " + t._s(t.currentPage.toLocaleString()) + " ")])]), r("div", {
    staticClass: "ml-2 btn-group"
  }, [r("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.nextDisabled,
      title: "Next"
    },
    on: {
      click: function(i) {
        return i.preventDefault(), t.goToPage(t.currentPage + 1, i);
      }
    }
  }, [r("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("Next")]), r("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M9 5l7 7-7 7"
    }
  })])]), r("button", {
    staticClass: "flex space-x-1 btn btn-default",
    attrs: {
      disabled: t.nextDisabled,
      title: "Last"
    },
    on: {
      click: function(i) {
        return i.preventDefault(), t.goToPage(t.totalPages, i);
      }
    }
  }, [r("span", {
    staticClass: "sr-only sm:not-sr-only"
  }, [t._v("Last")]), r("svg", {
    staticClass: "w-4 h-4 my-auto",
    attrs: {
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "3",
      d: "M13 5l7 7-7 7M5 5l7 7-7 7"
    }
  })])])])])]) : t._e();
}, D4 = [];
const k4 = {
  name: "SdsPaginator",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    threshold: {
      type: Number,
      default: 5
    }
  },
  computed: {
    prevDisabled() {
      return this.currentPage <= 1 || this.loading;
    },
    nextDisabled() {
      return this.currentPage >= this.totalPages || this.loading;
    },
    pageList() {
      if (this.totalPages <= this.threshold)
        return Array.apply(null, Array(this.totalPages)).map((e, t) => t + 1);
      if (this.currentPage < this.threshold)
        return Array.apply(null, Array(this.threshold)).map((t, n) => n + 1).concat(["...", this.totalPages]);
      if (this.currentPage > this.totalPages - this.threshold + 1)
        return [1, "..."].concat(
          Array.apply(null, Array(this.threshold)).map((t, n) => this.totalPages - this.threshold + n + 1)
        );
      {
        let e = [1, "..."];
        return e = e.concat(
          Array.apply(null, Array(this.threshold - 3)).map((t, n) => this.currentPage + n - this.threshold + 3)
        ), e.push(this.currentPage), e = e.concat(
          Array.apply(null, Array(this.threshold - 3)).map((t, n) => this.currentPage + n + 1)
        ), e.concat(["...", this.totalPages]);
      }
    }
  },
  methods: {
    goToPage(e, t) {
      this.$emit("go-to-page", { page: e, event: t });
    }
  }
}, vs = {};
var O4 = /* @__PURE__ */ y(
  k4,
  N4,
  D4,
  !1,
  z4,
  null,
  null,
  null
);
function z4(e) {
  for (let t in vs)
    this[t] = vs[t];
}
const I4 = /* @__PURE__ */ function() {
  return O4.exports;
}();
var P4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("floating-ui", {
    attrs: {
      "data-id": "sds-popover",
      strategy: t.strategy,
      placement: t.placement,
      disabled: t.disabled,
      "will-open": t.willOpen,
      "will-close": t.willClose,
      "popper-class": "absolute bg-white dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 border shadow-lg rounded-md ".concat(t.sizeClass, " ").concat(t.zIndexClass),
      "arrow-class": "absolute bg-white dark:bg-gray-700 dark:border-gray-600 border w-3 h-3 rotate-45",
      "placement-top-arrow-class": "-bottom-1.5 border-t-0 border-l-0",
      "placement-right-arrow-class": "-left-1.5 border-t-0 border-r-0",
      "placement-bottom-arrow-class": "-top-1.5 border-b-0 border-r-0",
      "placement-left-arrow-class": "-right-1.5 border-b-0 border-l-0",
      shift: ""
    },
    scopedSlots: t._u([{
      key: "trigger",
      fn: function(i) {
        var s = i.open, o = i.close;
        return [r("div", {
          on: {
            mouseover: function(u) {
              typeof s < "u" && s(t.openDelay);
            },
            mouseleave: function(u) {
              typeof o < "u" && o(t.closeDelay);
            }
          }
        }, [t._t("trigger")], 2)];
      }
    }, {
      key: "default",
      fn: function(i) {
        var s = i.open, o = i.close, l = i.toggle, u = i.isOpen;
        return [r("div", {
          staticClass: "p-4",
          on: {
            mouseover: function(f) {
              typeof s < "u" && s();
            },
            mouseout: function(f) {
              typeof o < "u" && o(t.closeDelay);
            }
          }
        }, [t._t("default", null, {
          close: o,
          open: s,
          toggle: l,
          isOpen: u
        })], 2)];
      }
    }], null, !0)
  });
}, E4 = [];
const $4 = {
  name: "SdsPopover",
  components: {
    FloatingUi: jt
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
}, gs = {};
var A4 = /* @__PURE__ */ y(
  $4,
  P4,
  E4,
  !1,
  R4,
  null,
  null,
  null
);
function R4(e) {
  for (let t in gs)
    this[t] = gs[t];
}
const Y4 = /* @__PURE__ */ function() {
  return A4.exports;
}();
var U4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "focus:outline-none",
    attrs: {
      id: t.id,
      "data-id": "sds-radio-group",
      role: "radiogroup",
      tabindex: "-1"
    }
  }, t._l(t.options, function(a, i) {
    return r("div", {
      key: a.value,
      staticClass: "space-x-1",
      class: {
        "inline-block mr-4": !t.stacked
      }
    }, [r("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: t.localChecked,
        expression: "localChecked"
      }],
      staticClass: "focus:outline-none",
      attrs: {
        id: "".concat(t.id, "__option_").concat(i),
        type: "radio",
        name: t.name ? t.name : "".concat(t.id, "__option"),
        required: t.required
      },
      domProps: {
        value: a.value,
        checked: t._q(t.localChecked, a.value)
      },
      on: {
        click: function(o) {
          return t.onChange(a.value);
        },
        change: function(o) {
          t.localChecked = a.value;
        }
      }
    }), t._t("label", function() {
      return [r("label", {
        attrs: {
          for: "".concat(t.id, "__option_").concat(i)
        }
      }, [r("span", [t._v(t._s(a.text))])])];
    }, {
      optionId: "".concat(t.id, "__option_").concat(i),
      option: a
    })], 2);
  }), 0);
}, B4 = [];
let ws = 0;
const Q4 = {
  name: "SdsRadioGroup",
  props: {
    value: { type: [Boolean, String, Number, null], default: null },
    name: { type: String, default: null },
    options: { type: Array, default: () => [] },
    required: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  data() {
    return {
      id: ""
    };
  },
  computed: {
    localChecked: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  mounted() {
    ws++, this.id = `sds-radio-group_${ws}`;
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, bs = {};
var H4 = /* @__PURE__ */ y(
  Q4,
  U4,
  B4,
  !1,
  F4,
  null,
  null,
  null
);
function F4(e) {
  for (let t in bs)
    this[t] = bs[t];
}
const G4 = /* @__PURE__ */ function() {
  return H4.exports;
}(), V4 = J.extend({
  name: "SdsScrollArea"
});
var W4 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "scroll-area",
    attrs: {
      "data-id": "sds-scroll-area"
    }
  }, [t._t("default")], 2);
}, q4 = [];
const Ms = {};
var J4 = /* @__PURE__ */ y(
  V4,
  W4,
  q4,
  !1,
  X4,
  null,
  null,
  null
);
function X4(e) {
  for (let t in Ms)
    this[t] = Ms[t];
}
const K4 = /* @__PURE__ */ function() {
  return J4.exports;
}();
function Z4(e, t) {
  let n, r = !1;
  return () => {
    n && clearTimeout(n), r ? n = setTimeout(e, t) : (e(), r = !0, setTimeout(() => {
      r = !1;
    }, t));
  };
}
var t1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("nav", t._l(t.items, function(a) {
    var i;
    return r("a", {
      key: a.id,
      class: (i = {}, i[t.itemClass] = !0, i[t.activeClass] = t.activeId === a.id, i[t.inactiveClass] = t.activeId !== a.id, i),
      attrs: {
        href: "#".concat(a.id),
        "data-id": "sds-scrollspy"
      },
      on: {
        click: function(o) {
          t.parent && t.scrollToIdTarget(a.id, o);
        }
      }
    }, [t._t("default", function() {
      return [t._v(t._s(a.text))];
    }, {
      item: a
    })], 2);
  }), 0);
}, e1 = [];
const r1 = 56, n1 = {
  name: "SdsScrollspy",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    parent: { type: String, default: void 0 },
    itemClass: { type: String, default: "" },
    activeClass: { type: String, default: "" },
    inactiveClass: { type: String, default: "" }
  },
  data() {
    return {
      activeId: null,
      lastActiveId: null
    };
  },
  computed: {
    parentEl() {
      return typeof document > "u" ? null : this.parent ? document.querySelector(this.parent) : null;
    }
  },
  mounted() {
    requestAnimationFrame(this.setActiveItem), this.onScroll = Z4(this.setActiveItem, 100), this.parentEl ? this.parentEl.addEventListener("scroll", this.onScroll) : window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    this.parentEl ? this.parentEl.removeEventListener("scroll", this.onScroll) : window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    getAnchorTop(e) {
      const t = document.getElementById(e.id);
      return t ? t.getBoundingClientRect().top - r1 - 15 : 0;
    },
    isItemActive(e, t, n) {
      const r = this.parentEl && this.parentEl.getBoundingClientRect().top || window.scrollY;
      return e === 0 && r === 0 ? [!0, null] : r < this.getAnchorTop(t) ? [!1, null] : !n || r < this.getAnchorTop(n) ? [!0, t.id] : [!1, null];
    },
    isInViewport(e) {
      const n = document.getElementById(e.id).getBoundingClientRect();
      if (this.parentEl) {
        const r = this.parentEl.getBoundingClientRect();
        return n.top >= r.top && n.bottom <= r.bottom;
      } else
        return n.top >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    },
    setActiveItem() {
      const e = [];
      if (this.lastActiveId = this.activeId, this.items.forEach((t) => {
        this.isInViewport(t) && e.push(t);
      }), e.length) {
        this.activeId = e[0].id;
        return;
      }
      if (this.lastActiveId) {
        this.activeId = this.lastActiveId;
        return;
      }
      if (this.items.length && !this.activeId) {
        for (let t = 0; t < this.items.length; t++) {
          const n = this.items[t], r = this.items[t + 1], [a, i] = this.isItemActive(t, n, r);
          a && (this.activeId = i);
        }
        return;
      }
    },
    scrollToIdTarget(e, t) {
      if (!this.parentEl)
        return;
      const n = document.getElementById(e);
      !n || (t.preventDefault(), this.parentEl.scrollTop = n.offsetTop - this.parentEl.offsetTop);
    }
  }
}, Ls = {};
var a1 = /* @__PURE__ */ y(
  n1,
  t1,
  e1,
  !1,
  i1,
  null,
  null,
  null
);
function i1(e) {
  for (let t in Ls)
    this[t] = Ls[t];
}
const s1 = /* @__PURE__ */ function() {
  return a1.exports;
}();
var o1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "input-group",
    attrs: {
      "data-id": "sds-search-box"
    }
  }, [r("div", {
    staticClass: "relative w-full input-group",
    class: {
      disabled: t.disabled
    }
  }, [r("input", {
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
      keyup: [function(a) {
        t.searchOnKeyUp && t.search();
      }, function(a) {
        return !a.type.indexOf("key") && t._k(a.keyCode, "enter", 13, a.key, "Enter") || a.target !== a.currentTarget ? null : t.search.apply(null, arguments);
      }],
      input: function(i) {
        i.target.composing || (t.q = i.target.value.trim());
      },
      blur: function(i) {
        return t.$forceUpdate();
      }
    }
  }), t.q.length > 0 ? r("button", {
    staticClass: "absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none",
    attrs: {
      tabindex: "-1",
      type: "button",
      disabled: t.disabled
    },
    on: {
      click: t.clearSearch
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Clear search")]), r("svg", {
    staticClass: "w-5 h-5 x",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }
  }, [r("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])]) : t._e()]), r("button", {
    staticClass: "px-3",
    class: [t.variantClass],
    attrs: {
      disabled: t.disabled || t.disableSearch,
      type: "button"
    },
    on: {
      click: t.search
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [t._v("Search")]), r("svg", {
    staticClass: "w-5 h-5 search",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  }, [r("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
      "clip-rule": "evenodd"
    }
  })])])]);
}, l1 = [];
const u1 = {
  name: "SdsSearchBox",
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
    variant: {
      type: String,
      default: "default"
    },
    searchOnKeyUp: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    }
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
  mounted() {
    this.autofocus && this.$refs.input.focus();
  },
  methods: {
    clearSearch() {
      this.q = "", this.$refs.input.focus();
    },
    search() {
      this.disabled || this.disableSearch || this.$emit("search", this.q);
    }
  }
}, _s = {};
var c1 = /* @__PURE__ */ y(
  u1,
  o1,
  l1,
  !1,
  f1,
  null,
  null,
  null
);
function f1(e) {
  for (let t in _s)
    this[t] = _s[t];
}
const d1 = /* @__PURE__ */ function() {
  return c1.exports;
}();
var h1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "block bg-white dark:bg-gray-800 dark:border-gray-700",
    class: {
      border: t.type === "simple" || t.type === "raised",
      "shadow border rounded": t.type === "raised"
    },
    attrs: {
      "data-id": "sds-section"
    }
  }, [t.hideHeader ? t._e() : r("header", {
    class: {
      "border-b dark:border-gray-700": t.type === "simple" || t.type === "raised",
      "border-0 border-t-2 border-gray-900 dark:border-gray-100": t.type === "accented"
    }
  }, [r("div", {
    staticClass: "flex px-4 py-3",
    class: {
      "border-b border-gray-300": t.type === "accented"
    }
  }, [r("div", {
    staticClass: "self-center flex-grow"
  }, [t.hasTitleSlot ? r("div", {
    staticClass: "slot-title"
  }, [t._t("title")], 2) : t._e(), t.hasSubtitleSlot ? r("div", {
    staticClass: "text-sm text-gray-500"
  }, [t._t("subtitle")], 2) : t._e()]), t.hasNavSlot ? r("div", {
    staticClass: "flex items-stretch self-start justify-center ml-auto",
    class: [t.navClass]
  }, [t._t("nav")], 2) : t._e()])]), !t.hideContent && t.hasDefaultSlot ? r("div", {
    class: [t.contentClass]
  }, [t._t("default")], 2) : t._e()]);
}, p1 = [];
const y1 = J.extend({
  name: "SdsSection",
  props: {
    type: {
      type: String,
      default: ""
    },
    hideHeader: {
      type: Boolean,
      default: !1
    },
    hideContent: {
      type: Boolean,
      default: !1
    },
    navClass: {
      type: String,
      default: ""
    },
    contentClass: {
      type: String,
      default: "p-4"
    }
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    hasSubtitleSlot() {
      return !!this.$slots.subtitle;
    },
    hasNavSlot() {
      return !!this.$slots.nav;
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    }
  }
}), xs = {};
var m1 = /* @__PURE__ */ y(
  y1,
  h1,
  p1,
  !1,
  v1,
  null,
  null,
  null
);
function v1(e) {
  for (let t in xs)
    this[t] = xs[t];
}
const g1 = /* @__PURE__ */ function() {
  return m1.exports;
}();
var w1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.localValue,
      expression: "localValue"
    }],
    staticClass: "form-control",
    class: {
      "form-control-sm": t.size === "sm"
    },
    attrs: {
      "data-id": "sds-select",
      disabled: t.disabled,
      readonly: t.readonly
    },
    on: {
      change: function(i) {
        var s = Array.prototype.filter.call(i.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var l = "_value" in o ? o._value : o.value;
          return l;
        });
        t.localValue = i.target.multiple ? s : s[0];
      }
    }
  }, [r("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }), t._l(t.options, function(a) {
    return r("option", {
      key: a.id,
      domProps: {
        value: a.value
      }
    }, [t._v(" " + t._s(a.text) + " ")]);
  })], 2);
}, b1 = [];
const M1 = J.extend({
  name: "SdsSelect",
  props: {
    value: { type: [Boolean, String, Number, Array, Object], default: null },
    options: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    size: { type: String, default: "md" }
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  }
}), Cs = {};
var L1 = /* @__PURE__ */ y(
  M1,
  w1,
  b1,
  !1,
  _1,
  null,
  null,
  null
);
function _1(e) {
  for (let t in Cs)
    this[t] = Cs[t];
}
const x1 = /* @__PURE__ */ function() {
  return L1.exports;
}();
var C1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    attrs: {
      "data-id": "sds-tabs"
    }
  }, [r("div", {
    staticClass: "overflow-x-auto",
    class: {
      "bg-gray-100 dark:bg-gray-700 rounded-t": t.type === "folder"
    }
  }, [r("ul", {
    staticClass: "flex whitespace-nowrap z-10",
    attrs: {
      role: "tablist"
    }
  }, t._l(t.tabs, function(a) {
    return r("li", {
      key: a.key,
      class: {
        "mr-auto": a.align === "left",
        "ml-auto": a.align === "right",
        "mx-auto": a.align === "center"
      },
      attrs: {
        role: "presentation"
      }
    }, [r(a.tag || "button", {
      tag: "component",
      class: {
        "opacity-50": a.disabled,
        "pointer-events-none": a.disabled || a.active,
        "text-sm inline-block rounded-t py-2 px-4 font-bold": t.type === "folder",
        "bg-white dark:bg-gray-800 border-l border-t border-r text-gray-700 dark:border-gray-500 dark:text-gray-100": t.type === "folder" && a.active,
        "text-blue-500 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100": t.type === "folder" && !a.active,
        "tab tab-underline tab-red": t.type === "underline",
        "tab tab-block tab-red": t.type === "block",
        active: (t.type === "underline" || t.type === "block") && a.active,
        disabled: (t.type === "underline" || t.type === "block") && a.disabled
      },
      attrs: {
        id: "sds-tabs-".concat(t.id, "__").concat(a.key, "__tab"),
        href: a.tag === "a" && a.href || void 0,
        target: a.tag === "a" && a.href && a.external ? "_blank" : void 0,
        rel: a.tag === "a" && a.href && a.external ? "noopener noreferrer" : void 0,
        type: a.tag === "button" ? "button" : void 0,
        disabled: a.disabled,
        tabindex: a.disabled ? -1 : void 0,
        "aria-selected": a.active,
        "aria-controls": "sds-tabs-".concat(t.id, "__").concat(a.key, "__tab-content"),
        "data-active": a.active ? !0 : void 0,
        role: "tab"
      },
      on: {
        click: function(s) {
          return t.changeTab(a);
        }
      }
    }, [t._t("tab(".concat(a.key, ")"), function() {
      return [t._v(" " + t._s(a.title) + " ")];
    })], 2)], 1);
  }), 0)]), t._l(t.tabs, function(a) {
    return [a.active ? r("div", {
      key: a.key,
      attrs: {
        id: "sds-tabs-".concat(t.id, "__").concat(a.key, "__tab-content"),
        "aria-labelby": "sds-tabs-".concat(t.id, "__").concat(a.key, "__tab"),
        role: "tabpanel",
        tabindex: "0"
      }
    }, [a.active ? t._t("panel(".concat(a.key, ")")) : t._e()], 2) : t._e()];
  })], 2);
}, S1 = [];
const j1 = {
  name: "SdsTabs",
  props: {
    value: { type: Array, default: () => [] },
    type: { type: String, default: "folder" },
    willChangeTab: { type: Function, default: null }
  },
  data() {
    return {
      id: ""
    };
  },
  computed: {
    tabs: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  mounted() {
    this.id = Pt();
  },
  methods: {
    willChangeTabStateDelay(e, t) {
      return new Promise(async (n, r) => t ? await t(e, n, r) : n());
    },
    async changeTab(e) {
      if (e.tag === "a" && e.href)
        return !0;
      await this.willChangeTabStateDelay(e, this.willChangeTab), this.tabs = this.tabs.map((t) => (t.active = e.key === t.key, t)), this.$emit("change", e);
    }
  }
}, Ss = {};
var T1 = /* @__PURE__ */ y(
  j1,
  C1,
  S1,
  !1,
  N1,
  null,
  null,
  null
);
function N1(e) {
  for (let t in Ss)
    this[t] = Ss[t];
}
const D1 = /* @__PURE__ */ function() {
  return T1.exports;
}();
var k1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("table", {
    attrs: {
      "data-id": "sds-table"
    }
  }, [!!t.$slots.caption || t.caption ? r("caption", [t._t("caption", function() {
    return [t._v(" " + t._s(t.caption) + " ")];
  })], 2) : t._e(), r("colgroup", [t._l(t.displayedFields, function(a) {
    return [t._t("col(".concat(a.key, ")"), function() {
      var i;
      return [r("col", {
        key: a.key,
        class: (i = {}, i[t.sortedColumnClass] = t.sortField === a.key, i)
      })];
    }, {
      active: t.sortField === a.key,
      activeClass: t.sortedColumnClass
    })];
  })], 2), r("thead", [r("tr", t._l(t.displayedFields, function(a) {
    var i;
    return r("th", {
      key: a.key,
      staticClass: "space-x-1 select-none group",
      class: (i = {}, i[t.sortedColumnClass] = t.sortField === a.key, i["cursor-pointer"] = a.sortable, i),
      on: {
        click: function(o) {
          a.sortable && t.handleSortBy(a);
        }
      }
    }, [t._t("head(".concat(a.key, ")"), function() {
      return [t._v(" " + t._s(a.label) + " "), a.sortable ? r("svg", {
        staticClass: "inline-block w-4 h-4 group-hover:opacity-100",
        class: {
          "opacity-100": t.sortField === a.key,
          "opacity-50": t.sortField !== a.key
        },
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "aria-hidden": "true",
          role: "img",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 320 512"
        }
      }, [t.sortField !== a.key ? r("path", {
        attrs: {
          d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z",
          fill: "currentColor"
        }
      }) : t._e(), t.sortField === a.key && t.sortOrder > 0 ? r("path", {
        attrs: {
          d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z",
          fill: "currentColor"
        }
      }) : t._e(), t.sortField === a.key && t.sortOrder < 0 ? r("path", {
        attrs: {
          d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z",
          fill: "currentColor"
        }
      }) : t._e()]) : t._e()];
    }, {
      field: a,
      active: t.sortField === a.key
    })], 2);
  }), 0)]), r("tbody", t._l(t.sortedItems, function(a) {
    return r("tr", {
      key: a.id
    }, [t._l(t.displayedFieldKeys, function(i) {
      return [r(t.cellElement(i), {
        key: i,
        tag: "component"
      }, [t._t("cell(".concat(i, ")"), function() {
        return [t._v(" " + t._s(t.format(a, i)) + " ")];
      }, {
        value: t.format(a, i),
        item: a,
        format: function(o) {
          return t.format(a, o);
        }
      })], 2)];
    })], 2);
  }), 0)]);
}, O1 = [];
const z1 = {
  name: "SdsTable",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    },
    sortBy: { type: String, default: "" },
    sortDesc: { type: Boolean, default: !1 },
    caption: { type: String, default: null },
    sortedColumnClass: { type: String, default: null }
  },
  data() {
    return {
      sortField: this.sortBy,
      sortOrder: this.sortDesc ? -1 : 1
    };
  },
  computed: {
    sortedItems() {
      return this.items.sort((t, n) => this.sortCompare(t, n, this.sortField));
    },
    displayedFields() {
      return this.fields.filter((e) => !e.hidden);
    },
    displayedFieldKeys() {
      return Object.entries(this.displayedFields).map(([e, t]) => t.key);
    }
  },
  methods: {
    cellElement(e) {
      const t = this.fields.find((n) => n.key === e);
      return t && t.header ? "th" : "td";
    },
    format(e, t) {
      const n = this.fields.find((r) => r.key === t);
      return n && n.format ? n.format(e[t]) : e[t];
    },
    handleSortBy(e) {
      this.sortField = e.key, this.sortOrder = this.sortOrder === 0 ? 1 : this.sortOrder === 1 ? -1 : 1;
    },
    sortCompare(e, t, n) {
      const r = e[n], a = t[n];
      return typeof r == "number" && typeof a == "number" || r instanceof Date && a instanceof Date ? (r < a ? -1 : r > a ? 1 : 0) * this.sortOrder : this.toString(r).localeCompare(this.toString(a)) * this.sortOrder;
    },
    toString(e) {
      return e === null || typeof e > "u" ? "" : e instanceof Object ? Object.keys(e).sort().map((t) => this.toString(e[t])).join(" ") : String(e);
    }
  }
}, js = {};
var I1 = /* @__PURE__ */ y(
  z1,
  k1,
  O1,
  !1,
  P1,
  null,
  null,
  null
);
function P1(e) {
  for (let t in js)
    this[t] = js[t];
}
const E1 = /* @__PURE__ */ function() {
  return I1.exports;
}();
var $1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    attrs: {
      "data-id": "sds-textarea"
    }
  }, [r("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: t.text,
      expression: "text"
    }],
    staticClass: "form-control",
    class: {
      valid: t.valid,
      invalid: t.invalid
    },
    attrs: {
      rows: t.rows,
      maxlength: t.maxlength,
      placeholder: t.placeholder !== "" ? t.placeholder : !1,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      required: t.required
    },
    domProps: {
      value: t.text
    },
    on: {
      input: function(i) {
        i.target.composing || (t.text = i.target.value);
      }
    }
  }), t._v(" "), t.countCharacters ? r("character-counter", {
    staticClass: "text-right text-gray-500",
    attrs: {
      "current-value": t.text.length,
      "max-value": t.maxlength
    }
  }) : t._e()], 1);
}, A1 = [];
const R1 = {
  name: "SdsTextarea",
  components: {
    CharacterCounter: co
  },
  props: {
    value: { type: String, default: "" },
    countCharacters: { type: Boolean, default: !1 },
    maxlength: { type: Number, default: 524288 },
    placeholder: { type: String, default: "" },
    rows: { type: Number, default: 5 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    valid: { type: Boolean, default: !1 },
    invalid: { type: Boolean, default: !1 }
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  }
}, Ts = {};
var Y1 = /* @__PURE__ */ y(
  R1,
  $1,
  A1,
  !1,
  U1,
  null,
  null,
  null
);
function U1(e) {
  for (let t in Ts)
    this[t] = Ts[t];
}
const B1 = /* @__PURE__ */ function() {
  return Y1.exports;
}();
var Q1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "w-full max-w-sm bg-white rounded shadow-lg pointer-events-auto dark:bg-gray-700",
    attrs: {
      "data-id": "sds-toast",
      role: "alert",
      "aria-live": "polite"
    },
    on: {
      mouseenter: t.clearTimer,
      mouseleave: t.setTimer
    }
  }, [r("div", {
    staticClass: "overflow-hidden rounded ring-1 ring-black ring-opacity-5"
  }, [r("div", {
    staticClass: "p-4"
  }, [r("div", {
    staticClass: "flex toasts-start"
  }, [r("div", {
    staticClass: "flex-shrink-0"
  }, [t.variant ? r("svg", {
    staticClass: "w-6 h-6",
    class: {
      " text-green-400 dark:text-green-300": t.variant && t.variant === "success",
      " text-blue-400 dark:text-blue-300": t.variant && t.variant === "info",
      " text-orange-500 dark:text-orange-400": t.variant && t.variant === "warning",
      " text-red-400 dark:text-red-300": t.variant && t.variant === "danger"
    },
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }
  }, [t.variant === "success" ? r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  }) : t._e(), t.variant === "info" ? r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  }) : t._e(), t.variant === "warning" ? r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    }
  }) : t._e(), t.variant === "danger" ? r("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  }) : t._e()]) : t._e()]), r("div", {
    staticClass: "ml-3 w-0 flex-1 pt-0.5"
  }, [t.title ? r("p", {
    staticClass: "text-sm font-medium leading-5 text-gray-900 dark:text-gray-100"
  }, [t._v(" " + t._s(t.title) + " ")]) : t._e(), t.text ? r("p", {
    staticClass: "mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300"
  }, [t._v(" " + t._s(t.text) + " ")]) : t._e()]), r("div", {
    staticClass: "flex flex-shrink-0 ml-4"
  }, [r("button", {
    staticClass: "inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-600 hover:text-gray-600 dark:focus:text-gray-100 dark:hover:text-gray-100",
    on: {
      click: t.removeToast
    }
  }, [r("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  }, [r("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])])])])])])]);
}, H1 = [];
const F1 = {
  name: "SdsToast",
  props: {
    id: { type: Number, required: !0 },
    variant: { type: String, default: "success" },
    title: { type: String, required: !0 },
    text: { type: String, required: !0 },
    autoHideDelay: { type: Number, default: 5e3 },
    noAutoHide: { type: Boolean, default: !1 }
  },
  data() {
    return {
      timer: null
    };
  },
  mounted() {
    this.setTimer();
  },
  destroyed() {
    this.clearTimer();
  },
  methods: {
    removeToast() {
      this.$emit("remove", this.id);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    setTimer() {
      this.clearTimer(), !this.noAutoHide && (this.timer = setTimeout(() => {
        this.removeToast();
      }, this.autoHideDelay));
    }
  }
}, Ns = {};
var G1 = /* @__PURE__ */ y(
  F1,
  Q1,
  H1,
  !1,
  V1,
  null,
  null,
  null
);
function V1(e) {
  for (let t in Ns)
    this[t] = Ns[t];
}
const bo = /* @__PURE__ */ function() {
  return G1.exports;
}();
var W1 = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return t.toasts.length > 0 ? r("div", {
    staticClass: "fixed inset-0 z-50 p-4 pointer-events-none sm:p-6",
    attrs: {
      "data-id": "sds-toaster"
    }
  }, [r("transition-group", {
    staticClass: "space-y-4",
    attrs: {
      tag: "div",
      "enter-active-class": "transition duration-300 ease-out transform",
      "enter-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
      "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
      "leave-active-class": "transition duration-100 ease-in",
      "leave-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }
  }, [t._t("default", function() {
    return t._l(t.toasts, function(a) {
      return r("sds-toast", {
        key: a.id,
        staticClass: "ml-auto",
        attrs: {
          id: a.id,
          variant: a.variant,
          title: a.title,
          text: a.text,
          "auto-hide-delay": a.autoHideDelay || 5e3,
          "no-auto-hide": a.noAutoHide || !1
        },
        on: {
          remove: t.removeToast
        }
      });
    });
  }, {
    toasts: t.toasts,
    removeToast: t.removeToast
  })], 2)], 1) : t._e();
}, q1 = [];
const J1 = {
  name: "SdsToaster",
  components: {
    SdsToast: bo
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      timer: null
    };
  },
  computed: {
    toasts: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    }
  },
  methods: {
    removeToast(e) {
      this.toasts = this.toasts.filter((t) => e !== t.id);
    }
  }
}, Ds = {};
var X1 = /* @__PURE__ */ y(
  J1,
  W1,
  q1,
  !1,
  K1,
  null,
  null,
  null
);
function K1(e) {
  for (let t in Ds)
    this[t] = Ds[t];
}
const Z1 = /* @__PURE__ */ function() {
  return X1.exports;
}();
var tw = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "flex items-center",
    attrs: {
      "data-id": "sds-toggle-switch"
    }
  }, [r("button", {
    class: [t.isToggled ? t.variantClass : "bg-gray-700 disabled:bg-opacity-50", t.styles.button],
    attrs: {
      type: "button",
      disabled: t.disabled,
      role: "switch",
      "aria-checked": "false"
    },
    on: {
      click: t.update
    }
  }, [r("span", {
    class: [t.isToggled ? "translate-x-5 toggle-on-shadow" : "translate-x-0 toggle-off-shadow", t.styles.switch]
  }), r("svg", {
    class: [t.isToggled ? "translate-x-5 hidden" : "translate-x-0 block", t.styles.offIcon, t.disabled && "text-opacity-50"],
    attrs: {
      viewBox: "0 0 1792 1792",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [r("path", {
    attrs: {
      d: t.icons.off
    }
  })]), r("span", {
    staticClass: "ml-3"
  }), r("svg", {
    class: [t.isToggled ? "translate-x-5 block" : "translate-x-0 hidden", t.styles.onIcon, t.disabled ? "fill-current text-gray-700 text-opacity-50" : t.variantFillClass],
    attrs: {
      viewBox: "0 0 1792 1792",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [r("path", {
    attrs: {
      d: t.icons.on
    }
  })])])]);
}, ew = [];
const rw = {
  name: "SdsToggleSwitch",
  props: {
    value: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      styles: {
        button: "hover:shadow-md relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none disabled:bg-gray-700 disabled:bg-opacity-50 disabled:shadow-none",
        switch: "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg transform transition ease-in-out duration-200",
        offIcon: "pointer-events-none absolute h-4 w-4 mt-0.5 ml-0.5 transform ring-0 transition ease-in-out duration-400 fill-current text-gray-700",
        onIcon: "pointer-events-none absolute h-4 w-4 mt-0.5 ml-0.5 transform ring-0 transition ease-in-out duration-400"
      },
      icons: {
        off: "M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z",
        on: "M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
      }
    };
  },
  computed: {
    isToggled: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("input", e);
      }
    },
    variantClass() {
      switch (this.variant) {
        case "primary":
          return "bg-blue-500";
        case "danger":
          return "bg-red-500";
        default:
          return "bg-gray-900";
      }
    },
    variantFillClass() {
      switch (this.variant) {
        case "primary":
          return "fill-current text-blue-500";
        case "danger":
          return "fill-current text-red-500";
        default:
          return "fill-current text-gray-900";
      }
    }
  },
  methods: {
    update() {
      this.isToggled = !this.isToggled;
    }
  }
}, ks = {};
var nw = /* @__PURE__ */ y(
  rw,
  tw,
  ew,
  !1,
  aw,
  "3be6dc0e",
  null,
  null
);
function aw(e) {
  for (let t in ks)
    this[t] = ks[t];
}
const iw = /* @__PURE__ */ function() {
  return nw.exports;
}();
var sw = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
  return r("div", {
    staticClass: "space-y-4 chart",
    attrs: {
      "data-id": "sds-top-five-chart"
    }
  }, [r("h3", {
    class: {
      "text-lg font-bold": t.smallHeading,
      "text-2xl font-bold": !t.smallHeading
    }
  }, [t._v(" " + t._s(t.title) + " ")]), t.results.length > 0 ? r("div", [r("ul", {
    staticClass: "space-y-6"
  }, [t._l(t.results, function(a, i) {
    return r("li", {
      key: a.id
    }, [r("div", {
      staticClass: "flex"
    }, [r("div", {
      staticClass: "flex-grow"
    }, [r("div", {
      staticClass: "mb-2"
    }, [r("div", {
      staticClass: "h-6 mr-2 rounded",
      class: [t.getProgressColor(i)],
      style: {
        width: "".concat(t.resultValue(a.count), "%")
      },
      attrs: {
        role: "progressbar",
        title: a.count,
        "aria-valuenow": a.count,
        "aria-valuemin": "0",
        "aria-valuemax": t.maxResultValue
      }
    }, [r("span", {
      staticClass: "sr-only"
    }, [t._v(t._s(t.resultCountDisplay(a.count)) + " " + t._s(a.title))])])]), r("div", {
      staticClass: "text-sm font-semibold chart-label-section"
    }, [t._v(" " + t._s(t.resultCountDisplay(a.count)) + " \xB7 "), t.doNotLinkEntries ? r("span", [t._v(t._s(a.title))]) : [t.resultHasUrl(a) ? [r("a", {
      staticClass: "hover:underline focus:underline focus:outline-none",
      attrs: {
        href: a.url
      }
    }, [t._v(t._s(a.title))])] : [r("a", {
      staticClass: "hover:underline focus:underline focus:outline-none",
      attrs: {
        href: "#"
      },
      on: {
        click: function(o) {
          return o.preventDefault(), t.resultClick(a);
        }
      }
    }, [t._v(t._s(a.title))])]]], 2)])])]);
  }), t.viewAllUrl !== null ? r("li", {
    staticClass: "mt-4"
  }, [r("a", {
    staticClass: "link link-primary link-cta",
    attrs: {
      href: t.viewAllUrl
    }
  }, [t._v(" View All ")])]) : t._e()], 2)]) : r("div", [t.entriesHaveAllRequiredProps ? r("p", [t._v(" " + t._s(t.noDataMsg) + " ")]) : r("p", [t._v(" " + t._s(t.missingPropsMsg) + " ")])])]);
}, ow = [];
const lw = {
  name: "SdsTopFiveChart",
  props: {
    title: {
      type: String,
      default: null
    },
    entries: {
      type: Array,
      default: () => []
    },
    doNotLinkEntries: {
      type: Boolean,
      default: !1
    },
    viewAllUrl: {
      type: String,
      default: null
    },
    progressColor: {
      type: String,
      default: "blue"
    },
    showPercent: {
      type: Boolean,
      default: !1
    },
    smallHeading: {
      type: Boolean,
      default: !1
    },
    noDataMsg: {
      type: String,
      default: "There is no chart data to display at this time."
    },
    missingPropsMsg: {
      type: String,
      default: "The chart data is malformed and cannot be displayed at this time."
    }
  },
  computed: {
    results() {
      return this.entriesHaveAllRequiredProps ? this.entries.slice(0, 5) : [];
    },
    entriesHaveAllRequiredProps() {
      return this.entries.length < 1 ? !0 : this.entries.every((e) => Object.prototype.hasOwnProperty.call(e, "id") && Object.prototype.hasOwnProperty.call(e, "title") && Object.prototype.hasOwnProperty.call(e, "count"));
    },
    maxResultValue() {
      return Math.max.apply(
        Math,
        this.results.map((e) => e.count)
      );
    }
  },
  methods: {
    resultValue(e) {
      return e * 100 / this.maxResultValue;
    },
    resultCountDisplay(e) {
      return this.showPercent ? `${e}%` : e;
    },
    resultHasUrl(e) {
      return typeof e.url < "u";
    },
    resultClick(e) {
      this.$emit("result-click", e);
    },
    getProgressColor(e) {
      switch (this.progressColor) {
        case "teal":
          if (e === 0)
            return "bg-teal-900";
          if (e === 1)
            return "bg-teal-700";
          if (e === 2)
            return "bg-teal-500";
          if (e === 3)
            return "bg-teal-300";
          if (e === 4)
            return "bg-teal-100";
          break;
        case "red":
          if (e === 0)
            return "bg-red-900";
          if (e === 1)
            return "bg-red-700";
          if (e === 2)
            return "bg-red-500";
          if (e === 3)
            return "bg-red-300";
          if (e === 4)
            return "bg-red-100";
          break;
        case "gray":
          if (e === 0)
            return "bg-gray-900";
          if (e === 1)
            return "bg-gray-700";
          if (e === 2)
            return "bg-gray-500";
          if (e === 3)
            return "bg-gray-300";
          if (e === 4)
            return "bg-gray-100";
          break;
        case "green":
          if (e === 0)
            return "bg-green-900";
          if (e === 1)
            return "bg-green-700";
          if (e === 2)
            return "bg-green-500";
          if (e === 3)
            return "bg-green-300";
          if (e === 4)
            return "bg-green-100";
          break;
        case "orange":
          if (e === 0)
            return "bg-orange-900";
          if (e === 1)
            return "bg-orange-700";
          if (e === 2)
            return "bg-orange-500";
          if (e === 3)
            return "bg-orange-300";
          if (e === 4)
            return "bg-orange-100";
          break;
        case "pink":
          if (e === 0)
            return "bg-pink-900";
          if (e === 1)
            return "bg-pink-700";
          if (e === 2)
            return "bg-pink-500";
          if (e === 3)
            return "bg-pink-300";
          if (e === 4)
            return "bg-pink-100";
          break;
        case "indigo":
          if (e === 0)
            return "bg-indigo-900";
          if (e === 1)
            return "bg-indigo-700";
          if (e === 2)
            return "bg-indigo-500";
          if (e === 3)
            return "bg-indigo-300";
          if (e === 4)
            return "bg-indigo-100";
          break;
        case "purple":
          if (e === 0)
            return "bg-purple-900";
          if (e === 1)
            return "bg-purple-700";
          if (e === 2)
            return "bg-purple-500";
          if (e === 3)
            return "bg-purple-300";
          if (e === 4)
            return "bg-purple-100";
          break;
        case "blue":
        default:
          if (e === 0)
            return "bg-blue-900";
          if (e === 1)
            return "bg-blue-700";
          if (e === 2)
            return "bg-blue-500";
          if (e === 3)
            return "bg-blue-300";
          if (e === 4)
            return "bg-blue-100";
          break;
      }
    }
  }
}, Os = {};
var uw = /* @__PURE__ */ y(
  lw,
  sw,
  ow,
  !1,
  cw,
  null,
  null,
  null
);
function cw(e) {
  for (let t in Os)
    this[t] = Os[t];
}
const fw = /* @__PURE__ */ function() {
  return uw.exports;
}(), zs = {
  SdsAutosuggest: rf,
  SdsAvatar: uf,
  SdsBadge: yf,
  SdsButton: Mf,
  SdsCalendar: eo,
  SdsCheckboxGroup: fm,
  SdsDatapoint: vm,
  SdsDatepicker: av,
  SdsDropdown: cv,
  SdsDropdownDivider: mv,
  SdsDropdownHeader: Lv,
  SdsDropdownItem: Tv,
  SdsFileUploader: Iv,
  SdsFilterByDropdown: Yv,
  SdsFloatingUi: jt,
  SdsInput: Xv,
  SdsLayoutApp: pg,
  SdsLayoutSeiExternal: Xg,
  SdsLayoutSeiExternalFooter: mo,
  SdsLayoutSeiExternalHeader: yo,
  SdsLayoutSeiExternalHeaderContent: go,
  SdsLayoutSeiExternalMasthead: wo,
  SdsLayoutSeiExternalNav: vo,
  SdsLayoutSeiExternalWordmark: po,
  SdsLayoutStacked: n4,
  SdsLink: fo,
  SdsLoadingBox: u4,
  SdsLoadingSpinner: y4,
  SdsModal: M4,
  SdsMultiselect: T4,
  SdsPaginator: I4,
  SdsPopover: Y4,
  SdsRadioGroup: G4,
  SdsScrollArea: K4,
  SdsScrollspy: s1,
  SdsSearchBox: d1,
  SdsSection: g1,
  SdsSelect: x1,
  SdsTabs: D1,
  SdsTable: E1,
  SdsTextarea: B1,
  SdsToast: bo,
  SdsToaster: Z1,
  SdsToggleSwitch: iw,
  SdsTooltip: ho,
  SdsTopFiveChart: fw
};
Object.keys(zs).forEach((e) => {
  J.component(e, zs[e]);
});
export {
  zs as default
};
