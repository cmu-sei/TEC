// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import _ from "vue";
function v() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
const y = _.extend({
  name: "SdsModal",
  directives: {
    focus: {
      inserted(t) {
        t.focus();
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
      set(t) {
        this.$emit("input", t);
      }
    }
  },
  watch: {
    showModal: {
      immediate: !0,
      handler(t) {
        this.showContent = t, !(typeof document > "u") && (t ? this.makeDomChanges() : this.removeDomChanges());
      }
    }
  },
  mounted() {
    this.id = `sds-modal__${v()}`;
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
    handleEscKey(t) {
      t.key === "Escape" && this.close();
    },
    checkKeyEvent(t) {
      if (t.key === "Escape") {
        this.close();
        return;
      }
      const e = this.$refs.modalContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (e.length < 2 && t.key === "Tab") {
        t.preventDefault();
        return;
      }
      const l = e.length - 1;
      t.key === "Tab" && t.shiftKey === !1 && t.target === e[l] ? (t.preventDefault(), e[0].focus()) : t.key === "Tab" && t.shiftKey === !0 && t.target === e[0] && (t.preventDefault(), e[l].focus());
    }
  }
});
var g = function() {
  var e = this, l = e.$createElement, o = e._self._c || l;
  return o("transition", {
    attrs: {
      "enter-active-class": "transition-opacity duration-75",
      "enter-class": "opacity-0",
      "leave-active-class": "transition-opacity duration-75",
      "leave-to-class": "opacity-0"
    },
    on: {
      "after-enter": function(r) {
        e.showContent = !0;
      },
      "after-leave": function(r) {
        e.showModal = !1;
      }
    }
  }, [e.showModal ? o("div", {
    ref: "modalContainer",
    staticClass: "fixed inset-0 z-50 block h-full px-2 py-0 overflow-auto bg-black bg-opacity-50",
    attrs: {
      "data-id": "sds-modal",
      "data-testid": "sds-modal"
    },
    on: {
      mousedown: function(r) {
        return r.target !== r.currentTarget ? null : e.close.apply(null, arguments);
      },
      keydown: e.checkKeyEvent
    }
  }, [o("transition", {
    attrs: {
      "enter-active-class": "transition-all duration-75",
      "enter-class": "transform scale-90 opacity-0",
      "leave-active-class": "transition-all duration-75",
      "leave-to-class": "transform scale-90 opacity-0"
    },
    on: {
      "after-leave": function(r) {
        e.showModal = !1;
      }
    }
  }, [e.showContent ? o("div", {
    staticClass: "relative z-50 block w-full mx-auto my-2 bg-white border rounded shadow-xl dark:bg-gray-800 dark:border-gray-700 md:my-8",
    class: {
      "md:max-w-sm": e.size === "sm",
      "md:max-w-xl": e.size === "md",
      "md:max-w-xl lg:max-w-4xl": e.size === "lg",
      "md:max-w-xl lg:max-w-4xl xl:max-w-6xl": e.size === "xl"
    },
    attrs: {
      role: "dialog",
      "aria-labelledby": e.id
    }
  }, [o("header", {
    staticClass: "flex items-center p-6 pb-0"
  }, [e.hasTitleSlot ? o("div", {
    staticClass: "text-xl leading-tight",
    attrs: {
      id: e.id
    }
  }, [e._t("title")], 2) : e._e(), o("button", {
    directives: [{
      name: "focus",
      rawName: "v-focus"
    }],
    staticClass: "inline-block p-0 ml-auto text-3xl text-gray-500 bg-transparent border-0 cursor-pointer hover:text-gray-700 hover:outline-none focus:text-gray-700 focus:outline-none dark:hover:text-gray-300 dark:focus:text-gray-300 active:text-gray-500 dark:active:text-gray-600",
    attrs: {
      "aria-label": "close"
    },
    on: {
      click: e.close
    }
  }, [o("svg", {
    staticClass: "w-6 h-6",
    attrs: {
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      stroke: "currentColor",
      viewBox: "0 0 24 24"
    }
  }, [o("path", {
    attrs: {
      d: "M6 18L18 6M6 6l12 12"
    }
  })])])]), o("main", {
    staticClass: "p-6"
  }, [e._t("default")], 2), e.hasFooterSlot ? o("footer", {
    staticClass: "p-6 pt-0"
  }, [e._t("footer")], 2) : e._e()]) : e._e()])], 1) : e._e()]);
}, w = [];
function x(t, e, l, o, s, r, d, m) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = l, a._compiled = !0), o && (a.functional = !0), r && (a._scopeId = "data-v-" + r);
  var i;
  if (d ? (i = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), s && s.call(this, n), n && n._registeredComponents && n._registeredComponents.add(d);
  }, a._ssrRegister = i) : s && (i = m ? function() {
    s.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), i)
    if (a.functional) {
      a._injectStyles = i;
      var h = a.render;
      a.render = function(p, u) {
        return i.call(u), h(p, u);
      };
    } else {
      var c = a.beforeCreate;
      a.beforeCreate = c ? [].concat(c, i) : [i];
    }
  return {
    exports: t,
    options: a
  };
}
const f = {};
var C = /* @__PURE__ */ x(
  y,
  g,
  w,
  !1,
  b,
  null,
  null,
  null
);
function b(t) {
  for (let e in f)
    this[e] = f[e];
}
const E = /* @__PURE__ */ function() {
  return C.exports;
}();
export {
  E as default
};
