// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
function m() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
var y = function() {
  var e = this, l = e.$createElement, i = e._self._c || l;
  return i("div", {
    staticClass: "border border-dashed border-2 dark:border-gray-700 rounded p-4 space-y-2 relative",
    attrs: {
      "data-id": "sds-file-uploader"
    }
  }, [i("input", {
    ref: "fileInput",
    staticClass: "absolute inset-0 opacity-0 cursor-pointer",
    attrs: {
      id: e.fileUploaderId,
      type: "file",
      accept: e.accept,
      multiple: e.multiple,
      required: e.required,
      name: e.name
    },
    on: {
      change: e.processFiles
    }
  }), i("div", {
    staticClass: "space-y-2"
  }, [i("div", {
    staticClass: "flex gap-2"
  }, [i("label", {
    staticClass: "btn btn-default cursor-pointer z-10",
    attrs: {
      for: e.fileUploaderId
    }
  }, [e._v("Browse")]), i("svg", {
    staticClass: "my-auto h-4 w-4 text-tertiary",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "aria-hidden": "true",
      role: "img",
      width: "32",
      height: "32",
      preserveAspectRatio: "xMidYMid meet",
      viewBox: "0 0 512 512"
    }
  }, [i("path", {
    attrs: {
      fill: "currentColor",
      d: "M105.4 182.6c12.5 12.49 32.76 12.5 45.25.001L224 109.3V352c0 17.67 14.33 32 32 32s32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001c12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0s-16.4 3.125-22.6 9.375L105.4 137.4c-12.52 12.5-12.52 32.7 0 45.2zM480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24s24 10.8 24 24s-10.8 24-24 24z"
    }
  })]), i("span", {
    staticClass: "my-auto"
  }, [e._v(e._s(e.multiple ? "Drag and drop your files here" : "Drag and drop a file here"))])]), i("p", {
    staticClass: "text-gray-500 text-sm"
  }, [e._v(" " + e._s(e.helperText ? e.helperText : e.multiple ? "Use files under ".concat(e.filesize, " MB.") : "Use a file under ".concat(e.filesize, " MB.")) + " ")]), e._t("default", function() {
    return [e.fileList.length > 0 || e.invalidFileList.length > 0 ? i("ul", [e._l(e.fileList, function(s) {
      return i("li", {
        key: s.name + s.size + s.type + s.lastModified,
        staticClass: "py-2 border-b only:border-0 last:pb-0 last:border-0"
      }, [i("div", {
        staticClass: "flex"
      }, [i("div", {
        staticClass: "my-auto flex gap-1 flex-grow"
      }, [i("svg", {
        staticClass: "w-4 h-4 my-auto text-success",
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "aria-hidden": "true",
          role: "img",
          width: "32",
          height: "32",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 512 512"
        }
      }, [i("path", {
        attrs: {
          fill: "currentColor",
          d: "M243.8 339.8c-10.9 10.9-28.7 10.9-39.6 0l-64-64c-10.9-10.9-10.9-28.7 0-39.6c10.9-10.9 28.7-10.9 39.6 0l44.2 44.2l108.2-108.2c10.9-10.9 28.7-10.9 39.6 0c10.9 10.9 10.9 28.7 0 39.6l-128 128zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
        }
      })]), i("span", {
        staticClass: "my-auto"
      }, [e._v(e._s(s.name))]), i("span", {
        staticClass: "my-auto text-tertiary text-sm uppercase"
      }, [e._v("(" + e._s(e.byteToSize(s.size)) + ")")])]), i("button", {
        staticClass: "my-auto z-10 link hover:text-danger dark:hover:text-red-400",
        on: {
          click: function(d) {
            return e.removeFile(s);
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
      })]), i("span", {
        staticClass: "sr-only"
      }, [e._v("Remove file")])])])]);
    }), e._l(e.invalidFileList, function(s) {
      return i("li", {
        key: s.name + s.size + s.type + s.lastModified,
        staticClass: "py-2 border-b only:border-0 last:pb-0 last:border-0"
      }, [i("div", {
        staticClass: "flex"
      }, [i("div", {
        staticClass: "my-auto flex gap-1 flex-grow"
      }, [i("svg", {
        staticClass: "w-4 h-4 my-auto text-danger",
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          "aria-hidden": "true",
          role: "img",
          width: "32",
          height: "32",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 512 512"
        }
      }, [i("path", {
        attrs: {
          fill: "currentColor",
          d: "M175 175c9.4-9.3 24.6-9.3 33.1 0l47 47.1L303 175c9.4-9.3 24.6-9.3 33.1 0c10.2 9.4 10.2 24.6 0 33.1l-46.2 47l46.2 47.9c10.2 9.4 10.2 24.6 0 33.1c-8.5 10.2-23.7 10.2-33.1 0l-47.9-46.2l-47 46.2c-8.5 10.2-23.7 10.2-33.1 0c-9.3-8.5-9.3-23.7 0-33.1l47.1-47.9l-47.1-47c-9.3-8.5-9.3-23.7 0-33.1zm337 81c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208s208-93.1 208-208S370.9 48 256 48z"
        }
      })]), i("span", {
        staticClass: "my-auto"
      }, [e._v(e._s(s.name))]), i("span", {
        staticClass: "my-auto text-tertiary text-sm uppercase"
      }, [e._v("(" + e._s(e.byteToSize(s.size)) + ")")])]), i("button", {
        staticClass: "my-auto z-10 link hover:text-danger dark:hover:text-red-400",
        on: {
          click: function(d) {
            return e.removeInvalidFile(s);
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
      })]), i("span", {
        staticClass: "sr-only"
      }, [e._v("Remove file")])])]), s.invalidType ? i("p", {
        staticClass: "text-danger text-xs ml-5 mt-1"
      }, [e._v(" Invalid file type ")]) : e._e(), s.invalidSize ? i("p", {
        staticClass: "text-danger text-xs ml-5 mt-1"
      }, [e._v(" File size is over " + e._s(e.filesize) + " MB. ")]) : e._e()]);
    })], 2) : e._e()];
  }, {
    files: e.fileList,
    invalidFiles: e.invalidFileList
  })], 2)]);
}, _ = [];
function g(t, e, l, i, s, r, d, f) {
  var a = typeof t == "function" ? t.options : t;
  e && (a.render = e, a.staticRenderFns = l, a._compiled = !0), i && (a.functional = !0), r && (a._scopeId = "data-v-" + r);
  var o;
  if (d ? (o = function(n) {
    n = n || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !n && typeof __VUE_SSR_CONTEXT__ < "u" && (n = __VUE_SSR_CONTEXT__), s && s.call(this, n), n && n._registeredComponents && n._registeredComponents.add(d);
  }, a._ssrRegister = o) : s && (o = f ? function() {
    s.call(
      this,
      (a.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), o)
    if (a.functional) {
      a._injectStyles = o;
      var h = a.render;
      a.render = function(v, u) {
        return o.call(u), h(v, u);
      };
    } else {
      var p = a.beforeCreate;
      a.beforeCreate = p ? [].concat(p, o) : [o];
    }
  return {
    exports: t,
    options: a
  };
}
const L = {
  name: "SdsFileUploader",
  props: {
    value: { type: Array, default: () => [] },
    name: { type: String, default: "sdsFileUploader" },
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    accept: { type: String, default: void 0 },
    allowedFiletypes: { type: Array, default: () => [] },
    filesize: { type: Number, default: 10 },
    helperText: { type: String, default: void 0 }
  },
  data() {
    return {
      fileList: [],
      invalidFileList: []
    };
  },
  computed: {
    fileUploaderId() {
      return `sds-file-uploader-${m()}`;
    }
  },
  watch: {
    value: {
      handler(t) {
        if (!this.$refs.fileInput)
          return;
        const e = new DataTransfer();
        t.forEach((l) => e.items.add(l)), this.$refs.fileInput.files = e.files, this.fileList = [], this.invalidFileList = [], Array.from(e.files).forEach((l) => {
          this.processSingleFile(l);
        });
      },
      immediate: !0,
      deep: !0
    }
  },
  methods: {
    removeFile(t) {
      if (!this.$refs.fileInput)
        return;
      const e = new DataTransfer();
      this.fileList = this.fileList.filter((l) => !(l.name === t.name && l.lastModified === t.lastModified && l.size === t.size && l.type === t.type)), this.fileList.forEach((l) => {
        e.items.add(l);
      }), this.$refs.fileInput.files = e.files, this.$emit("remove", { files: this.fileList, invalidFiles: this.invalidFileList }), this.$emit("input", [...this.fileList, ...this.invalidFileList]);
    },
    removeInvalidFile(t) {
      this.invalidFileList = this.invalidFileList.filter((e) => !(e.name === t.name && e.lastModified === t.lastModified && e.size === t.size && e.type === t.type)), this.$emit("remove-invalid", { files: this.fileList, invalidFiles: this.invalidFileList }), this.$emit("input", [...this.fileList, ...this.invalidFileList]);
    },
    findFile(t) {
      return this.fileList.find((e) => e.name === t.name && e.lastModified === t.lastModified && e.size === t.size && e.type === t.type);
    },
    processFiles(t) {
      if (!t.target)
        return;
      const e = t.target.files;
      Array.from(e).forEach((l) => {
        this.findFile(l) || this.processSingleFile(l);
      }), this.$emit("add", { files: this.fileList, invalidFiles: this.invalidFileList }), this.$emit("input", [...this.fileList, ...this.invalidFileList]);
    },
    processSingleFile(t) {
      if (!this.$refs.fileInput)
        return;
      const e = new DataTransfer(), l = parseFloat((t.size / 1024 / 1024).toFixed(4)), i = t.type, s = this.allowedFiletypes.length > 0 && this.allowedFiletypes.includes(i) || this.allowedFiletypes.length < 1;
      this.multiple && this.fileList.forEach((r) => {
        e.items.add(r);
      }), l <= this.filesize && s ? (e.items.add(t), this.$refs.fileInput.files = e.files, this.fileList = Array.from(this.$refs.fileInput.files) || [], this.multiple || (this.invalidFileList = [])) : l > this.filesize ? this.multiple ? (t.invalidSize = !0, this.invalidFileList.push(t), this.invalidFileList = this.invalidFileList.filter(
        (r, d, f) => d === f.findIndex((a) => a.name === r.name && a.lastModified === r.lastModified && a.size === r.size && a.type === r.type)
      )) : (this.fileList = [], this.$refs.fileInput.files = e.files, t.invalidSize = !0, this.invalidFileList = [t]) : s || (this.multiple ? (t.invalidType = !0, this.invalidFileList.push(t), this.invalidFileList = this.invalidFileList.filter(
        (r, d, f) => d === f.findIndex((a) => a.name === r.name && a.lastModified === r.lastModified && a.size === r.size && a.type === r.type)
      )) : (this.fileList = [], this.$refs.fileInput.files = e.files, t.invalidType = !0, this.invalidFileList = [t]));
    },
    byteToSize(t) {
      const e = ["b", "kb", "mb", "gb", "tb"];
      if (t <= 0 || t > 999999999999999)
        return "n/a";
      const l = parseInt(`${Math.floor(Math.log(t) / Math.log(1024))}`, 10);
      return l === 0 ? `${t}${e[l]}` : `${Math.ceil(t / 1024 ** l)} ${e[l]}`;
    }
  }
}, c = {};
var w = /* @__PURE__ */ g(
  L,
  y,
  _,
  !1,
  x,
  null,
  null,
  null
);
function x(t) {
  for (let e in c)
    this[e] = c[e];
}
const F = /* @__PURE__ */ function() {
  return w.exports;
}();
export {
  F as default
};
