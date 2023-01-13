// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import y from "vue";
const C = y.extend({
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
  var e = this, s = e.$createElement, o = e._self._c || s;
  return o("div", {
    class: {
      "text-danger": e.count < 0
    },
    attrs: {
      "data-id": "sds-character-counter"
    }
  }, [e._v(" " + e._s(e.count) + " ")]);
}, x = [];
function p(a, e, s, o, l, u, i, v) {
  var t = typeof a == "function" ? a.options : a;
  e && (t.render = e, t.staticRenderFns = s, t._compiled = !0), o && (t.functional = !0), u && (t._scopeId = "data-v-" + u);
  var n;
  if (i ? (n = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), l && l.call(this, r), r && r._registeredComponents && r._registeredComponents.add(i);
  }, t._ssrRegister = n) : l && (n = v ? function() {
    l.call(
      this,
      (t.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : l), n)
    if (t.functional) {
      t._injectStyles = n;
      var h = t.render;
      t.render = function(m, c) {
        return n.call(c), h(m, c);
      };
    } else {
      var d = t.beforeCreate;
      t.beforeCreate = d ? [].concat(d, n) : [n];
    }
  return {
    exports: a,
    options: t
  };
}
const _ = {};
var $ = /* @__PURE__ */ p(
  C,
  g,
  x,
  !1,
  b,
  null,
  null,
  null
);
function b(a) {
  for (let e in _)
    this[e] = _[e];
}
const S = /* @__PURE__ */ function() {
  return $.exports;
}();
var B = function() {
  var e = this, s = e.$createElement, o = e._self._c || s;
  return o("div", {
    attrs: {
      "data-id": "sds-textarea"
    }
  }, [o("textarea", {
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
      rows: e.rows,
      maxlength: e.maxlength,
      placeholder: e.placeholder !== "" ? e.placeholder : !1,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      required: e.required
    },
    domProps: {
      value: e.text
    },
    on: {
      input: function(u) {
        u.target.composing || (e.text = u.target.value);
      }
    }
  }), e._v(" "), e.countCharacters ? o("character-counter", {
    staticClass: "text-right text-gray-500",
    attrs: {
      "current-value": e.text.length,
      "max-value": e.maxlength
    }
  }) : e._e()], 1);
}, N = [];
const R = {
  name: "SdsTextarea",
  components: {
    CharacterCounter: S
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
      set(a) {
        this.$emit("input", a);
      }
    }
  }
}, f = {};
var V = /* @__PURE__ */ p(
  R,
  B,
  N,
  !1,
  w,
  null,
  null,
  null
);
function w(a) {
  for (let e in f)
    this[e] = f[e];
}
const q = /* @__PURE__ */ function() {
  return V.exports;
}();
export {
  q as default
};
