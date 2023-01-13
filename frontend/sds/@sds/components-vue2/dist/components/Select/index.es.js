// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import m from "vue";
var h = function() {
  var e = this, d = e.$createElement, s = e._self._c || d;
  return s("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: e.localValue,
      expression: "localValue"
    }],
    staticClass: "form-control",
    class: {
      "form-control-sm": e.size === "sm"
    },
    attrs: {
      "data-id": "sds-select",
      disabled: e.disabled,
      readonly: e.readonly
    },
    on: {
      change: function(i) {
        var u = Array.prototype.filter.call(i.target.options, function(l) {
          return l.selected;
        }).map(function(l) {
          var t = "_value" in l ? l._value : l.value;
          return t;
        });
        e.localValue = i.target.multiple ? u : u[0];
      }
    }
  }, [s("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }), e._l(e.options, function(n) {
    return s("option", {
      key: n.id,
      domProps: {
        value: n.value
      }
    }, [e._v(" " + e._s(n.text) + " ")]);
  })], 2);
}, y = [];
function C(r, e, d, s, n, i, u, l) {
  var t = typeof r == "function" ? r.options : r;
  e && (t.render = e, t.staticRenderFns = d, t._compiled = !0), s && (t.functional = !0), i && (t._scopeId = "data-v-" + i);
  var o;
  if (u ? (o = function(a) {
    a = a || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !a && typeof __VUE_SSR_CONTEXT__ < "u" && (a = __VUE_SSR_CONTEXT__), n && n.call(this, a), a && a._registeredComponents && a._registeredComponents.add(u);
  }, t._ssrRegister = o) : n && (o = l ? function() {
    n.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : n), o)
    if (t.functional) {
      t._injectStyles = o;
      var p = t.render;
      t.render = function(v, _) {
        return o.call(_), p(v, _);
      };
    } else {
      var f = t.beforeCreate;
      t.beforeCreate = f ? [].concat(f, o) : [o];
    }
  return {
    exports: r,
    options: t
  };
}
const g = m.extend({
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
      set(r) {
        this.$emit("input", r);
      }
    }
  }
}), c = {};
var $ = /* @__PURE__ */ C(
  g,
  h,
  y,
  !1,
  b,
  null,
  null,
  null
);
function b(r) {
  for (let e in c)
    this[e] = c[e];
}
const S = /* @__PURE__ */ function() {
  return $.exports;
}();
export {
  S as default
};
