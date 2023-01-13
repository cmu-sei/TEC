// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var p = function() {
  var t = this, i = t.$createElement, n = t._self._c || i;
  return n("div", {
    staticClass: "flex items-center",
    attrs: {
      "data-id": "sds-toggle-switch"
    }
  }, [n("button", {
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
  }, [n("span", {
    class: [t.isToggled ? "translate-x-5 toggle-on-shadow" : "translate-x-0 toggle-off-shadow", t.styles.switch]
  }), n("svg", {
    class: [t.isToggled ? "translate-x-5 hidden" : "translate-x-0 block", t.styles.offIcon, t.disabled && "text-opacity-50"],
    attrs: {
      viewBox: "0 0 1792 1792",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [n("path", {
    attrs: {
      d: t.icons.off
    }
  })]), n("span", {
    staticClass: "ml-3"
  }), n("svg", {
    class: [t.isToggled ? "translate-x-5 block" : "translate-x-0 hidden", t.styles.onIcon, t.disabled ? "fill-current text-gray-700 text-opacity-50" : t.variantFillClass],
    attrs: {
      viewBox: "0 0 1792 1792",
      xmlns: "http://www.w3.org/2000/svg"
    }
  }, [n("path", {
    attrs: {
      d: t.icons.on
    }
  })])])]);
}, v = [];
function b(a, t, i, n, o, l, d, g) {
  var e = typeof a == "function" ? a.options : a;
  t && (e.render = t, e.staticRenderFns = i, e._compiled = !0), n && (e.functional = !0), l && (e._scopeId = "data-v-" + l);
  var r;
  if (d ? (r = function(s) {
    s = s || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !s && typeof __VUE_SSR_CONTEXT__ < "u" && (s = __VUE_SSR_CONTEXT__), o && o.call(this, s), s && s._registeredComponents && s._registeredComponents.add(d);
  }, e._ssrRegister = r) : o && (r = g ? function() {
    o.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), r)
    if (e.functional) {
      e._injectStyles = r;
      var h = e.render;
      e.render = function(_, c) {
        return r.call(c), h(_, c);
      };
    } else {
      var u = e.beforeCreate;
      e.beforeCreate = u ? [].concat(u, r) : [r];
    }
  return {
    exports: a,
    options: e
  };
}
const w = {
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
      set(a) {
        this.$emit("input", a);
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
}, f = {};
var m = /* @__PURE__ */ b(
  w,
  p,
  v,
  !1,
  y,
  "3be6dc0e",
  null,
  null
);
function y(a) {
  for (let t in f)
    this[t] = f[t];
}
const C = /* @__PURE__ */ function() {
  return m.exports;
}();
export {
  C as default
};
