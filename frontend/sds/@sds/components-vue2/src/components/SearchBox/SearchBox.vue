<!--
TEC - Automated Mismatch Detection Tool
Copyright 2023 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
DM23-003
-->
 
 
<template>
  <div
    data-id="sds-search-box"
    class="input-group"
  >
    <div
      class="relative w-full input-group"
      :class="{
        disabled,
      }"
    >
      <input
        ref="input"
        v-model.trim="q"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        autocorrect="off"
        class="pr-8 rounded-r-none form-control"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        @keyup="searchOnKeyUp ? search() : null"
        @keyup.enter.self="search"
      >
      <button
        v-if="q.length > 0"
        tabindex="-1"
        type="button"
        class="absolute text-gray-500 right-2 top-3 hover:text-secondary focus:outline-none"
        :disabled="disabled"
        @click="clearSearch"
      >
        <span class="sr-only">Clear search</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 x"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <button
      :disabled="disabled || disableSearch"
      :class="[variantClass]"
      class="px-3"
      type="button"
      @click="search"
    >
      <span class="sr-only">Search</span>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 search"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "SdsSearchBox",
  props: {
    /**
     * The v-model passed from the parent that is used to init the local state "this.q".
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * The placeholder for the input.
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * The max amount of characters that can be entered into the input.
     */
    maxlength: {
      type: Number,
      default: 524288,
    },
    /**
     * Disables the ability for the component to run a search.
     */
    disableSearch: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the theme color of the component.
     */
    variant: {
      type: String,
      default: "default",
    },
    /**
     * Determines if a search should be performed on key up.
     */
    searchOnKeyUp: {
      type: Boolean,
      default: false,
    },
    /**
     * Determine whether to autofocus the input.
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    q: {
      get() {
        return this.value;
      },
      set(val) {
        /**
         * Emitted when value changes.
         */
        this.$emit("input", val);
      },
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
    },
  },
  mounted() {
    if (this.autofocus) this.$refs.input.focus();
  },
  methods: {
    clearSearch() {
      this.q = "";
      this.$refs.input.focus();
    },
    search() {
      if (this.disabled || this.disableSearch) return;
      /**
       * Emitted when a search is triggered with a payload of the query.
       */
      this.$emit("search", this.q);
    },
  },
};
</script>
