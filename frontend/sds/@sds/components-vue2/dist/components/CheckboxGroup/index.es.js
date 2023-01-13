// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
var C = function() {
  var e = this, u = e.$createElement, c = e._self._c || u;
  return c("div", {
    staticClass: "focus:outline-none",
    attrs: {
      id: e.id,
      "data-id": "sds-checkbox-group",
      role: "checkboxgroup",
      tabindex: "-1"
    }
  }, e._l(e.options, function(a, l) {
    return c("div", {
      key: a.value,
      staticClass: "space-x-1",
      class: {
        "inline-block mr-4": !e.stacked
      }
    }, [c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: e.localChecked,
        expression: "localChecked"
      }],
      staticClass: "focus:outline-none",
      attrs: {
        id: "".concat(e.id, "__option_").concat(l),
        type: "checkbox",
        name: e.name ? e.name : "".concat(e.id, "__option"),
        required: e.required
      },
      domProps: {
        value: a.value,
        checked: Array.isArray(e.localChecked) ? e._i(e.localChecked, a.value) > -1 : e.localChecked
      },
      on: {
        click: function(d) {
          return e.onChange(a.value);
        },
        change: function(d) {
          var t = e.localChecked, o = d.target, _ = !!o.checked;
          if (Array.isArray(t)) {
            var i = a.value, n = e._i(t, i);
            o.checked ? n < 0 && (e.localChecked = t.concat([i])) : n > -1 && (e.localChecked = t.slice(0, n).concat(t.slice(n + 1)));
          } else
            e.localChecked = _;
        }
      }
    }), e._t("label", function() {
      return [c("label", {
        attrs: {
          for: "".concat(e.id, "__option_").concat(l)
        }
      }, [c("span", [e._v(e._s(a.text))])])];
    }, {
      optionId: "".concat(e.id, "__option_").concat(l),
      option: a
    })], 2);
  }), 0);
}, k = [];
function m(r, e, u, c, a, l, s, d) {
  var t = typeof r == "function" ? r.options : r;
  e && (t.render = e, t.staticRenderFns = u, t._compiled = !0), c && (t.functional = !0), l && (t._scopeId = "data-v-" + l);
  var o;
  if (s ? (o = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), a && a.call(this, n), n && n._registeredComponents && n._registeredComponents.add(s);
  }, t._ssrRegister = o) : a && (o = d ? function() {
    a.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), o)
    if (t.functional) {
      t._injectStyles = o;
      var _ = t.render;
      t.render = function(v, f) {
        return o.call(f), _(v, f);
      };
    } else {
      var i = t.beforeCreate;
      t.beforeCreate = i ? [].concat(i, o) : [o];
    }
  return {
    exports: r,
    options: t
  };
}
let h = 0;
const y = {
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
      set(r) {
        this.$emit("input", r);
      }
    }
  },
  mounted() {
    h++, this.id = `sds-checkbox-group_${h}`;
  },
  methods: {
    onChange(r) {
      this.$emit("change", r);
    }
  }
}, p = {};
var g = /* @__PURE__ */ m(
  y,
  C,
  k,
  !1,
  b,
  null,
  null,
  null
);
function b(r) {
  for (let e in p)
    this[e] = p[e];
}
const $ = /* @__PURE__ */ function() {
  return g.exports;
}();
export {
  $ as default
};
