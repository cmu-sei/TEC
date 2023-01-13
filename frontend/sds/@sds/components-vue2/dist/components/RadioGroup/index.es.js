// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var m = function() {
  var e = this, c = e.$createElement, i = e._self._c || c;
  return i("div", {
    staticClass: "focus:outline-none",
    attrs: {
      id: e.id,
      "data-id": "sds-radio-group",
      role: "radiogroup",
      tabindex: "-1"
    }
  }, e._l(e.options, function(t, l) {
    return i("div", {
      key: t.value,
      staticClass: "space-x-1",
      class: {
        "inline-block mr-4": !e.stacked
      }
    }, [i("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.localChecked,
        expression: "localChecked"
      }],
      staticClass: "focus:outline-none",
      attrs: {
        id: "".concat(e.id, "__option_").concat(l),
        type: "radio",
        name: e.name ? e.name : "".concat(e.id, "__option"),
        required: e.required
      },
      domProps: {
        value: t.value,
        checked: e._q(e.localChecked, t.value)
      },
      on: {
        click: function(d) {
          return e.onChange(t.value);
        },
        change: function(d) {
          e.localChecked = t.value;
        }
      }
    }), e._t("label", function() {
      return [i("label", {
        attrs: {
          for: "".concat(e.id, "__option_").concat(l)
        }
      }, [i("span", [e._v(e._s(t.text))])])];
    }, {
      optionId: "".concat(e.id, "__option_").concat(l),
      option: t
    })], 2);
  }), 0);
}, C = [];
function g(a, e, c, i, t, l, s, d) {
  var n = typeof a == "function" ? a.options : a;
  e && (n.render = e, n.staticRenderFns = c, n._compiled = !0), i && (n.functional = !0), l && (n._scopeId = "data-v-" + l);
  var r;
  if (s ? (r = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), t && t.call(this, o), o && o._registeredComponents && o._registeredComponents.add(s);
  }, n._ssrRegister = r) : t && (r = d ? function() {
    t.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : t), r)
    if (n.functional) {
      n._injectStyles = r;
      var v = n.render;
      n.render = function(h, _) {
        return r.call(_), v(h, _);
      };
    } else {
      var u = n.beforeCreate;
      n.beforeCreate = u ? [].concat(u, r) : [r];
    }
  return {
    exports: a,
    options: n
  };
}
let f = 0;
const k = {
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
      set(a) {
        this.$emit("input", a);
      }
    }
  },
  mounted() {
    f++, this.id = `sds-radio-group_${f}`;
  },
  methods: {
    onChange(a) {
      this.$emit("change", a);
    }
  }
}, p = {};
var $ = /* @__PURE__ */ g(
  k,
  m,
  C,
  !1,
  y,
  null,
  null,
  null
);
function y(a) {
  for (let e in p)
    this[e] = p[e];
}
const b = /* @__PURE__ */ function() {
  return $.exports;
}();
export {
  b as default
};
