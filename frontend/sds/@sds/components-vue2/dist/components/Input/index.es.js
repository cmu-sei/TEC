// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import x from "vue";
const y = x.extend({
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
var g = function() {
  var e = this, u = e.$createElement, r = e._self._c || u;
  return r("div", {
    class: {
      "text-danger": e.count < 0
    },
    attrs: {
      "data-id": "sds-character-counter"
    }
  }, [e._v(" " + e._s(e.count) + " ")]);
}, C = [];
function h(n, e, u, r, o, s, i, c) {
  var t = typeof n == "function" ? n.options : n;
  e && (t.render = e, t.staticRenderFns = u, t._compiled = !0), r && (t.functional = !0), s && (t._scopeId = "data-v-" + s);
  var a;
  if (i ? (a = function(l) {
    l = l || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), o && o.call(this, l), l && l._registeredComponents && l._registeredComponents.add(i);
  }, t._ssrRegister = a) : o && (a = c ? function() {
    o.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), a)
    if (t.functional) {
      t._injectStyles = a;
      var d = t.render;
      t.render = function(m, p) {
        return a.call(p), d(m, p);
      };
    } else {
      var f = t.beforeCreate;
      t.beforeCreate = f ? [].concat(f, a) : [a];
    }
  return {
    exports: n,
    options: t
  };
}
const _ = {};
var b = /* @__PURE__ */ h(
  y,
  g,
  C,
  !1,
  $,
  null,
  null,
  null
);
function $(n) {
  for (let e in _)
    this[e] = _[e];
}
const S = /* @__PURE__ */ function() {
  return b.exports;
}();
var q = function() {
  var e = this, u = e.$createElement, r = e._self._c || u;
  return r("div", [e.type === "checkbox" ? r("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: e.text,
      expression: "text"
    }],
    staticClass: "form-control",
    class: {
      valid: e.valid,
      invalid: e.invalid
    },
    attrs: {
      "data-id": "sds-input",
      maxlength: e.maxlength,
      placeholder: e.placeholder !== "" ? e.placeholder : !1,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      required: e.required,
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(e.text) ? e._i(e.text, null) > -1 : e.text
    },
    on: {
      change: function(s) {
        var i = e.text, c = s.target, t = !!c.checked;
        if (Array.isArray(i)) {
          var a = null, d = e._i(i, a);
          c.checked ? d < 0 && (e.text = i.concat([a])) : d > -1 && (e.text = i.slice(0, d).concat(i.slice(d + 1)));
        } else
          e.text = t;
      }
    }
  }) : e.type === "radio" ? r("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: e.text,
      expression: "text"
    }],
    staticClass: "form-control",
    class: {
      valid: e.valid,
      invalid: e.invalid
    },
    attrs: {
      "data-id": "sds-input",
      maxlength: e.maxlength,
      placeholder: e.placeholder !== "" ? e.placeholder : !1,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      required: e.required,
      type: "radio"
    },
    domProps: {
      checked: e._q(e.text, null)
    },
    on: {
      change: function(s) {
        e.text = null;
      }
    }
  }) : r("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: e.text,
      expression: "text"
    }],
    staticClass: "form-control",
    class: {
      valid: e.valid,
      invalid: e.invalid
    },
    attrs: {
      "data-id": "sds-input",
      maxlength: e.maxlength,
      placeholder: e.placeholder !== "" ? e.placeholder : !1,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      required: e.required,
      type: e.type
    },
    domProps: {
      value: e.text
    },
    on: {
      input: function(s) {
        s.target.composing || (e.text = s.target.value);
      }
    }
  }), e.countCharacters ? r("character-counter", {
    staticClass: "text-right text-gray-500",
    attrs: {
      "current-value": e.text.length,
      "max-value": e.maxlength
    }
  }) : e._e()], 1);
}, N = [];
const k = {
  name: "SdsInput",
  components: {
    CharacterCounter: S
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
      set(n) {
        this.$emit("input", n);
      }
    }
  }
}, v = {};
var B = /* @__PURE__ */ h(
  k,
  q,
  N,
  !1,
  R,
  null,
  null,
  null
);
function R(n) {
  for (let e in v)
    this[e] = v[e];
}
const w = /* @__PURE__ */ function() {
  return B.exports;
}();
export {
  w as default
};
