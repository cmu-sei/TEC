// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function m(t, e, n = !1) {
  let i;
  return function(...s) {
    const o = this;
    clearTimeout(i), i = setTimeout(function() {
      i = null, n || t.apply(o, s);
    }, e), n && !i && t.apply(o, s);
  };
}
var g = function() {
  var e = this, n = e.$createElement, i = e._self._c || n;
  return i("div", {
    staticClass: "multiselect",
    class: {
      open: e.showDropdown,
      active: e.active,
      disabled: e.disabled,
      up: e.dropUp,
      canSearch: e.canSearch,
      hideCaret: e.hideCaret,
      showClear: e.showClear,
      hasTags: !e.hideTags && e.selected.length > 0,
      showResults: e.showResults
    },
    attrs: {
      "data-id": "sds-multiselect"
    },
    on: {
      mouseup: e.handleMouseUp,
      mousedown: function(o) {
        if (o.preventDefault(), o.stopPropagation(), o.target !== o.currentTarget)
          return null;
      },
      dblclick: e.selectText,
      keydown: function(o) {
        return e.handleKeyDown(o);
      },
      keyup: function(o) {
        return e.handleKeyUp(o);
      }
    }
  }, [i("ul", {
    staticClass: "tag-list",
    class: {
      single: !e.multiple
    }
  }, [!e.hideTags || !e.multiple ? e._l(e.selected, function(s) {
    return i("li", {
      key: s[e.valueKey],
      staticClass: "tag-list-item"
    }, [e._t("tagTemplate", function() {
      return [e.multiple ? i("button", {
        staticClass: "remove",
        attrs: {
          type: "button",
          tabindex: "-1",
          title: "Clear ".concat(s[e.labelKey]),
          "aria-label": "Clear ".concat(s[e.labelKey]),
          disabled: e.disabled
        },
        on: {
          click: function(a) {
            return e.remove(s);
          }
        }
      }, [i("span", {
        attrs: {
          "aria-hidden": "true"
        }
      }, [e._v("\xD7")])]) : e._e(), i("span", [e._v(e._s(s[e.labelKey]))])];
    }, {
      tag: s,
      remove: e.remove,
      disabled: e.disabled
    })], 2);
  }) : e._e(), i("li", {
    staticClass: "tag-list-item input",
    style: {
      width: !e.multiple && e.showDropdown && e.canSearch ? "100%" : e.inputWidth
    }
  }, [i("span", {
    ref: "faux-input",
    staticClass: "faux-input",
    attrs: {
      "aria-hidden": "true"
    }
  }, [e._v(" " + e._s(e.value) + " ")]), e.required && e.selected.length < 1 ? i("select", {
    staticClass: "faux-input",
    attrs: {
      tabindex: "-1",
      required: ""
    },
    on: {
      focus: e.handleRequired
    }
  }, [i("option")]) : e._e(), i("input", {
    ref: "input",
    staticClass: "p-0 m-0 border-0 focus:shadow-none focus:ring-0",
    style: {
      width: !e.multiple && e.showDropdown && e.canSearch ? "100%" : e.inputWidth
    },
    attrs: {
      placeholder: e.showPlaceholder ? e.placeholder : "",
      readonly: e.isReadonlyInput,
      disabled: e.disabled,
      maxlength: e.maxlength >= 0 ? e.maxlength : !1,
      autocapitalize: "off",
      autocomplete: "off",
      spellcheck: "false",
      autocorrect: "off",
      type: "text"
    },
    domProps: {
      value: e.value
    },
    on: {
      input: function(o) {
        return e.search(o);
      }
    }
  })])], 2), e.selected.length > 0 && e.showClear ? i("button", {
    staticClass: "multiselect-clear",
    attrs: {
      type: "button",
      tabindex: "-1",
      title: "Clear all",
      "aria-label": "Clear all"
    },
    on: {
      click: function(o) {
        return o.preventDefault(), o.stopPropagation(), e.handleClearBtn.apply(null, arguments);
      }
    }
  }, [i("svg", {
    staticClass: "w-5 h-5 x",
    attrs: {
      viewBox: "0 0 20 20",
      fill: "currentColor",
      "aria-hidden": "true"
    }
  }, [i("path", {
    attrs: {
      "fill-rule": "evenodd",
      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])]) : e._e(), !e.hideCaret && !(e.showClear && e.selected.length > 0) ? i("div", {
    staticClass: "multiselect-caret",
    attrs: {
      "aria-hidden": "true"
    }
  }) : e._e(), e.showDropdown ? i("ul", {
    ref: "dropdownMenu",
    staticClass: "dropdown-list",
    style: {
      bottom: e.bottom,
      maxHeight: e.maxHeight + "px"
    }
  }, [e.showLoading ? i("li", {
    staticClass: "dropdown-list-item loading"
  }, [e._t("loadingTemplate", function() {
    return [e._v(" " + e._s(e.loadingMsg) + " ")];
  }, {
    loadingMsg: e.loadingMsg
  })], 2) : e._e(), e.showResults ? e._l(e.filteredOptions, function(s, o) {
    return i("li", {
      key: s[e.valueKey],
      staticClass: "dropdown-list-item",
      class: {
        selected: e.isSelectedOption(s),
        active: o === e.arrowCounter
      },
      attrs: {
        disabled: e.disabled
      },
      on: {
        click: function(h) {
          return e.add(s);
        },
        mouseover: function(h) {
          e.arrowCounter = o;
        }
      }
    }, [e._t("optionTemplate", function() {
      return [e._v(" " + e._s(s[e.labelKey]) + " "), s.isNewTag && !e.isSelectedOption(s) ? [e._v(" (new) ")] : e._e()];
    }, {
      option: s,
      add: e.add,
      disabled: e.disabled,
      isSelectedOption: e.isSelectedOption(s)
    })], 2);
  }) : e._e(), e.showDefault ? i("li", {
    staticClass: "dropdown-list-item default"
  }, [e._t("defaultTemplate", function() {
    return [e._v(" " + e._s(e.defaultMsg) + " ")];
  }, {
    defaultMsg: e.defaultMsg
  })], 2) : e._e(), e.showNoResults ? i("li", {
    staticClass: "dropdown-list-item no-result"
  }, [e._t("noResultsTemplate", function() {
    return [e._v(" " + e._s(e.noResultsMsg) + " ")];
  }, {
    noResultsMsg: e.noResultsMsg
  })], 2) : e._e(), e.showCannotAddResults ? i("li", {
    staticClass: "dropdown-list-item cannot-add-result"
  }, [e._t("cannotAddResultsTemplate", function() {
    return [e._v(" " + e._s(e.cannotAddResultsMsg) + " ")];
  }, {
    cannotAddResultsMsg: e.cannotAddResultsMsg
  })], 2) : e._e(), e.showInvalidInput ? i("li", {
    staticClass: "dropdown-list-item invalid-input"
  }, [e._t("invalidInputTemplate", function() {
    return [e._v(" " + e._s(e.invalidInputMsg) + " ")];
  }, {
    invalidInputMsg: e.invalidInputMsg
  })], 2) : e._e()], 2) : e._e()]);
}, y = [];
function C(t, e, n, i, s, o, a, h) {
  var l = typeof t == "function" ? t.options : t;
  e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), i && (l.functional = !0), o && (l._scopeId = "data-v-" + o);
  var d;
  if (a ? (d = function(r) {
    r = r || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !r && typeof __VUE_SSR_CONTEXT__ < "u" && (r = __VUE_SSR_CONTEXT__), s && s.call(this, r), r && r._registeredComponents && r._registeredComponents.add(a);
  }, l._ssrRegister = d) : s && (d = h ? function() {
    s.call(
      this,
      (l.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), d)
    if (l.functional) {
      l._injectStyles = d;
      var f = l.render;
      l.render = function(w, p) {
        return d.call(p), f(w, p);
      };
    } else {
      var u = l.beforeCreate;
      l.beforeCreate = u ? [].concat(u, d) : [d];
    }
  return {
    exports: t,
    options: l
  };
}
const v = {
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
      const t = this.options;
      return this.taggable && this.trimmedValue !== "" && (t.some((e) => this.enforceLowercaseNewTag ? e[this.labelKey].trim().toLowerCase() === this.trimmedValue.toLowerCase() : e[this.labelKey].trim() === this.trimmedValue) || t.push(this.newTag)), this.hideSelectedOptions ? t.filter((e) => this.selected.filter((n) => e[this.valueKey] === n[this.valueKey]).length === 0) : t;
    },
    newTag() {
      const t = {}, e = Math.floor(Math.random() * 9e5 + 1e5);
      return t[this.valueKey] = e, t[this.labelKey] = this.enforceLowercaseNewTag ? this.trimmedValue.toLowerCase() : this.trimmedValue, t.isNewTag = !0, t;
    }
  },
  watch: {
    showDropdown(t) {
      t && this.positionDropdown();
    },
    filteredOptions() {
      this.arrowCounter = 0;
    }
  },
  mounted() {
    this.resizeInput(), setTimeout(() => {
      this.autofocus && (this.$refs.input.focus(), this.active = !0);
    }, 0), document.addEventListener("click", this.handleOutsideClick), document.addEventListener("keyup", this.handleOutsideKeyUp), this.debouncePositionDropdown = m(this.positionDropdown, 150), document.addEventListener("scroll", this.debouncePositionDropdown), window.addEventListener("resize", this.debouncePositionDropdown);
  },
  destroyed() {
    document.removeEventListener("click", this.handleOutsideClick), document.removeEventListener("keyup", this.handleOutsideKeyUp), document.removeEventListener("scroll", this.debouncePositionDropdown), window.removeEventListener("resize", this.debouncePositionDropdown);
  },
  methods: {
    detectHtml(t) {
      return t.match(/<[^\s]|&[^\s;]*;/gi) !== null;
    },
    selectText() {
      this.$refs.input.setSelectionRange(0, this.value.length);
    },
    search(t) {
      !this.canSearch || this.input(t.target.value);
    },
    resizeInput() {
      setTimeout(() => {
        if (this.showPlaceholder)
          this.inputWidth = "100%";
        else {
          const e = typeof this.$refs["faux-input"] < "u" ? this.$refs["faux-input"].clientWidth + 20 : 0;
          let n = this.$el.clientWidth - 20;
          (!this.hideCaret || this.showClear && this.selected.length > 0) && (n = n - 10);
          const i = Math.min(Math.max(e, 20), n);
          this.inputWidth = i + "px";
        }
      }, 0);
    },
    removeLastSelection() {
      if (this.value !== "" || !this.canSearch || this.hideTags || this.disableRemoveLastSelection)
        return;
      const t = this.selected;
      t.splice(-1, 1), this.updateSelected(t), this.positionDropdown();
    },
    add(t) {
      if (!this.canAddItem)
        return;
      if (this.isSelectedOption(t)) {
        this.toggleSelectedOptions && this.remove(t);
        return;
      }
      let e = [];
      this.multiple && (e = this.selected), e.push(t), this.updateSelected(e), this.clearInputOnSelection && this.clearInput(), this.clearOptionsOnSelection && this.clearOptions(), this.handleCloseOnSelection(), this.positionDropdown();
    },
    remove(t) {
      this.updateSelected(
        this.selected.filter(
          (e) => e[this.valueKey] !== t[this.valueKey]
        )
      ), this.handleCloseOnSelection(), this.positionDropdown();
    },
    isSelectedOption(t) {
      return this.selected.some(
        (e) => e[this.labelKey] === t[this.labelKey]
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
    input(t) {
      this.$emit("input", t), this.resizeInput(), this.positionDropdown();
    },
    updateSelected(t) {
      this.$emit("update-selected", t), this.resizeInput(), this.arrowCounter > this.filteredOptions.length - 1 && (this.arrowCounter = this.filteredOptions.length - 1);
    },
    updateOptions(t) {
      this.$emit("update-options", t);
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
    handleArrows(t) {
      if (!this.showDropdown)
        return;
      const e = 0;
      switch (t) {
        case "down":
          this.arrowCounter < this.filteredOptions.length - 1 ? (this.arrowCounter = this.arrowCounter + 1, this.handleDropdownScroll()) : (this.canLoopOptions && (this.arrowCounter = e), this.canLoopOptions && this.handleDropdownScroll());
          break;
        case "up":
          this.arrowCounter > e ? (this.arrowCounter = this.arrowCounter - 1, this.handleDropdownScroll()) : (this.canLoopOptions && (this.arrowCounter = this.filteredOptions.length - 1), this.canLoopOptions && this.handleDropdownScroll(!0));
          break;
      }
    },
    handleDropdownScroll(t = !1) {
      if (!this.showDropdown || typeof this.$refs.dropdownMenu > "u")
        return;
      const e = this.$refs.dropdownMenu.children[this.arrowCounter] || !1, n = e ? e.offsetHeight : 0;
      let i = 0;
      for (let a = 0; a < this.arrowCounter; a++)
        i += this.$refs.dropdownMenu.children[a].offsetHeight;
      const s = i + n, o = {
        top: this.$refs.dropdownMenu.scrollTop || 0,
        bottom: this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop || 0
      };
      t ? this.$refs.dropdownMenu.scrollTop = s : i <= o.top ? this.$refs.dropdownMenu.scrollTop = i : s >= o.bottom && (this.$refs.dropdownMenu.scrollTop = o.top + n);
    },
    handleKeyUp(t) {
      if (this.disabled)
        return;
      const e = [
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
      t.key === "Enter" && this.showDropdown ? this.arrowCounter <= this.filteredOptions.length - 1 && this.arrowCounter > -1 && this.add(this.filteredOptions[this.arrowCounter]) : t.keyCode === 27 ? (t.preventDefault(), t.stopPropagation(), this.handleEsc()) : t.key === "Tab" ? this.active || (this.active = !0) : !this.showDropdown && !e.includes(t.key) && this.open();
    },
    handleKeyDown(t) {
      this.disabled || (!this.canSearch && t.keyCode === 32 && t.preventDefault(), t.key === "Enter" && this.showDropdown && t.preventDefault(), t.key === "Delete" || t.key === "Backspace" ? this.removeLastSelection() : t.key === "Tab" ? this.showDropdown && (this.arrowCounter <= this.filteredOptions.length - 1 && this.arrowCounter > -1 && this.canAddItem ? (this.add(this.filteredOptions[this.arrowCounter]), t.preventDefault()) : this.close()) : t.key === "ArrowUp" || t.key === "Up" ? (t.preventDefault(), t.stopPropagation(), this.handleArrows("up")) : (t.key === "ArrowDown" || t.key === "Down") && (t.preventDefault(), t.stopPropagation(), this.handleArrows("down")));
    },
    handleMouseUp() {
      this.disabled || (this.$root.$emit("floating-ui-toggle", !1), this.open(), this.active = !0);
    },
    handleCloseOnSelection() {
      this.closeOnSelection ? this.close() : this.focusInput();
    },
    handleOutsideClick(t) {
      this.$el.contains(t.target) || (this.active && (this.active = !1), this.close());
    },
    handleOutsideKeyUp(t) {
      this.$el.contains(t.target) || this.active && (this.active = !1);
    },
    positionDropdown() {
      !this.showDropdown || this.$nextTick(() => {
        if (this.openDirection === "down" && (this.dropUp = !1), this.openDirection === "up" && (this.dropUp = !0, this.bottom = this.$el.clientHeight + "px"), this.openDirection === "auto") {
          const e = window.innerHeight - this.$el.getBoundingClientRect().bottom < this.maxHeight;
          this.dropUp = e, this.bottom = this.dropUp ? this.$el.clientHeight + "px" : "auto";
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
}, c = {};
var _ = /* @__PURE__ */ C(
  v,
  g,
  y,
  !1,
  b,
  "172bed9b",
  null,
  null
);
function b(t) {
  for (let e in c)
    this[e] = c[e];
}
const S = /* @__PURE__ */ function() {
  return _.exports;
}();
export {
  S as default
};
