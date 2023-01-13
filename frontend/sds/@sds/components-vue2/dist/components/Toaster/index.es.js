// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var g = function() {
  var t = this, o = t.$createElement, e = t._self._c || o;
  return e("div", {
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
  }, [e("div", {
    staticClass: "overflow-hidden rounded ring-1 ring-black ring-opacity-5"
  }, [e("div", {
    staticClass: "p-4"
  }, [e("div", {
    staticClass: "flex toasts-start"
  }, [e("div", {
    staticClass: "flex-shrink-0"
  }, [t.variant ? e("svg", {
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
  }, [t.variant === "success" ? e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  }) : t._e(), t.variant === "info" ? e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  }) : t._e(), t.variant === "warning" ? e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    }
  }) : t._e(), t.variant === "danger" ? e("path", {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  }) : t._e()]) : t._e()]), e("div", {
    staticClass: "ml-3 w-0 flex-1 pt-0.5"
  }, [t.title ? e("p", {
    staticClass: "text-sm font-medium leading-5 text-gray-900 dark:text-gray-100"
  }, [t._v(" " + t._s(t.title) + " ")]) : t._e(), t.text ? e("p", {
    staticClass: "mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300"
  }, [t._v(" " + t._s(t.text) + " ")]) : t._e()]), e("div", {
    staticClass: "flex flex-shrink-0 ml-4"
  }, [e("button", {
    staticClass: "inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-600 hover:text-gray-600 dark:focus:text-gray-100 dark:hover:text-gray-100",
    on: {
      click: t.removeToast
    }
  }, [e("svg", {
    staticClass: "w-5 h-5",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  }, [e("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])])])])])])]);
}, y = [];
function m(s, t, o, e, r, l, d, f) {
  var a = typeof s == "function" ? s.options : s;
  t && (a.render = t, a.staticRenderFns = o, a._compiled = !0), e && (a.functional = !0), l && (a._scopeId = "data-v-" + l);
  var i;
  if (d ? (i = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), r && r.call(this, n), n && n._registeredComponents && n._registeredComponents.add(d);
  }, a._ssrRegister = i) : r && (i = f ? function() {
    r.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : r), i)
    if (a.functional) {
      a._injectStyles = i;
      var h = a.render;
      a.render = function(p, c) {
        return i.call(c), h(p, c);
      };
    } else {
      var u = a.beforeCreate;
      a.beforeCreate = u ? [].concat(u, i) : [i];
    }
  return {
    exports: s,
    options: a
  };
}
const x = {
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
}, v = {};
var k = /* @__PURE__ */ m(
  x,
  g,
  y,
  !1,
  C,
  null,
  null,
  null
);
function C(s) {
  for (let t in v)
    this[t] = v[t];
}
const w = /* @__PURE__ */ function() {
  return k.exports;
}();
var T = function() {
  var t = this, o = t.$createElement, e = t._self._c || o;
  return t.toasts.length > 0 ? e("div", {
    staticClass: "fixed inset-0 z-50 p-4 pointer-events-none sm:p-6",
    attrs: {
      "data-id": "sds-toaster"
    }
  }, [e("transition-group", {
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
    return t._l(t.toasts, function(r) {
      return e("sds-toast", {
        key: r.id,
        staticClass: "ml-auto",
        attrs: {
          id: r.id,
          variant: r.variant,
          title: r.title,
          text: r.text,
          "auto-hide-delay": r.autoHideDelay || 5e3,
          "no-auto-hide": r.noAutoHide || !1
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
}, $ = [];
const b = {
  name: "SdsToaster",
  components: {
    SdsToast: w
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
      set(s) {
        this.$emit("input", s);
      }
    }
  },
  methods: {
    removeToast(s) {
      this.toasts = this.toasts.filter((t) => s !== t.id);
    }
  }
}, _ = {};
var S = /* @__PURE__ */ m(
  b,
  T,
  $,
  !1,
  M,
  null,
  null,
  null
);
function M(s) {
  for (let t in _)
    this[t] = _[t];
}
const z = /* @__PURE__ */ function() {
  return S.exports;
}();
export {
  z as default
};
