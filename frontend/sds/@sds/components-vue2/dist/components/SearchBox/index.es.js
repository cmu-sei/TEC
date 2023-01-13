// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var v = function() {
  var e = this, o = e.$createElement, r = e._self._c || o;
  return r("div", {
    staticClass: "input-group",
    attrs: {
      "data-id": "sds-search-box"
    }
  }, [r("div", {
    staticClass: "relative w-full input-group",
    class: {
      disabled: e.disabled
    }
  }, [r("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: e.q,
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
      placeholder: e.placeholder,
      disabled: e.disabled,
      maxlength: e.maxlength
    },
    domProps: {
      value: e.q
    },
    on: {
      keyup: [function(t) {
        e.searchOnKeyUp && e.search();
      }, function(t) {
        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") || t.target !== t.currentTarget ? null : e.search.apply(null, arguments);
      }],
      input: function(i) {
        i.target.composing || (e.q = i.target.value.trim());
      },
      blur: function(i) {
        return e.$forceUpdate();
      }
    }
  }), e.q.length > 0 ? r("button", {
    staticClass: "absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none",
    attrs: {
      tabindex: "-1",
      type: "button",
      disabled: e.disabled
    },
    on: {
      click: e.clearSearch
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [e._v("Clear search")]), r("svg", {
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
  })])]) : e._e()]), r("button", {
    staticClass: "px-3",
    class: [e.variantClass],
    attrs: {
      disabled: e.disabled || e.disableSearch,
      type: "button"
    },
    on: {
      click: e.search
    }
  }, [r("span", {
    staticClass: "sr-only"
  }, [e._v("Search")]), r("svg", {
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
}, m = [];
function b(s, e, o, r, t, i, u, p) {
  var a = typeof s == "function" ? s.options : s;
  e && (a.render = e, a.staticRenderFns = o, a._compiled = !0), r && (a.functional = !0), i && (a._scopeId = "data-v-" + i);
  var l;
  if (u ? (l = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), t && t.call(this, n), n && n._registeredComponents && n._registeredComponents.add(u);
  }, a._ssrRegister = l) : t && (l = p ? function() {
    t.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : t), l)
    if (a.functional) {
      a._injectStyles = l;
      var h = a.render;
      a.render = function(_, c) {
        return l.call(c), h(_, c);
      };
    } else {
      var d = a.beforeCreate;
      a.beforeCreate = d ? [].concat(d, l) : [l];
    }
  return {
    exports: s,
    options: a
  };
}
const y = {
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
      set(s) {
        this.$emit("input", s);
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
}, f = {};
var g = /* @__PURE__ */ b(
  y,
  v,
  m,
  !1,
  C,
  null,
  null,
  null
);
function C(s) {
  for (let e in f)
    this[e] = f[e];
}
const x = /* @__PURE__ */ function() {
  return g.exports;
}();
export {
  x as default
};
