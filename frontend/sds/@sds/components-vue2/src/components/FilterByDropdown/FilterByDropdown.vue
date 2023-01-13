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
  <floating-ui
    data-id="sds-filter-by-dropdown"
    :placement="placement"
    :popper-class="`absolute border shadow-lg rounded-md bg-gray-100 dark:border-gray-600 dark:bg-gray-700 w-72 ${zIndexClass}`"
    arrow-class="absolute bg-gray-100 border dark:border-gray-600 dark:bg-gray-700 w-3 h-3 rotate-45"
    placement-top-arrow-class="-bottom-1.5 border-t-0 border-l-0"
    placement-right-arrow-class="-left-1.5 border-t-0 border-r-0"
    placement-bottom-arrow-class="-top-1.5 border-b-0 border-r-0"
    placement-left-arrow-class="-right-1.5 border-b-0 border-l-0"
    shift
  >
    <template #trigger="{ isOpen, toggle }">
      <button
        :id="id"
        ref="button"
        :class="variantClass"
        type="button"
        aria-haspopup="true"
        :aria-expanded="isOpen"
        @click="toggle(); resetTmpOptions()"
      >
        <!-- @slot Title content of trigger button. -->
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
        <svg
          class="inline-block self-center w-5 h-5 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </template>
    <template #default="{ close }">
      <div
        class="p-2"
        aria-orientation="vertical"
        :aria-labelledby="$refs.button && $refs.button.id || undefined"
      >
        <div
          v-if="enableFilter"
          class="input-group input-group-sm mb-2 pb-2 border-b"
        >
          <input
            v-model="filterText"
            type="text"
            class="form-control"
            placeholder="Type to filter"
          >
          <span class="input-group-text">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div
          v-if="!enableFilter"
          class="pb-2 mb-2 space-x-1 space-y-2 border-b dark:border-gray-500"
        >
          <label
            class="text-gray-900 dark:text-gray-50 flex gap-1 w-max"
          >
            <input
              type="checkbox"
              class="my-auto"
              :checked="allSelected"
              :indeterminate.prop="indeterminate"
              @click="toggleSelect()"
            >
            <span class="my-auto">Select all</span>
          </label>
        </div>
        <div class="scroll-area max-h-48">
          <ul>
            <li
              v-for="o in filteredTmpOptions"
              :key="o.id"
            >
              <div class="space-x-1">
                <input
                  :id="`filter_by_dropdown_selection_list_${o.id}`"
                  v-model="o.selected"
                  type="checkbox"
                  class="focus:ring-0"
                  :value="o.id"
                >
                <label
                  :for="`filter_by_dropdown_selection_list_${o.id}`"
                  class="text-gray-900 dark:text-gray-50 ml-1"
                >{{ o.text }}</label>
              </div>
            </li>
          </ul>
        </div>
        <div class="pt-4 space-y-2">
          <button
            class="btn btn-blue btn-block btn-sm"
            @click="saveSelections(); close()"
          >
            Apply filter
          </button>
          <button
            class="btn btn-default btn-block btn-sm"
            @click="cancelSelections(); close()"
          >
            Cancel
          </button>
        </div>
      </div>
    </template>
  </floating-ui>
</template>

<script>
import FloatingUi from '../FloatingUi/FloatingUi.vue';
import uuid from "../../helpers/uuid";

export default {
  name: "SdsFilterByDropdown",
  components: {
    FloatingUi,
  },
  props: {
    /**
     * The v-model for this component. Determines opened/closed state.
     */
    value: { type: Array, default: () => [] },
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String, default: 'secondary' },
    /**
     * The z-index for the popover.
     */
    zIndex: { type: String, required: false, default: '50' },
    /**
     * The text for the toggle button.
     */
    title: { type: String, default: "Filter" },
    /**
     * Determine whether to enable option filtering on the dropdown.
     */
    enableFilter: { type: Boolean, default: false },
    /**
     * Determines whether to alphabetically sort the options.
     */
    enableSortOptions: { type: Boolean, default: false },
    /**
     * Determines the placement of the dropdown on the screen.
     */
    placement: { type: String, default: 'bottom-start' }
  },
  data() {
    return {
      id: '',
      filterText: "",
      tmpOptions: [],
      open: false,
    };
  },
  computed: {
    zIndexClass() {
      switch (this.zIndex) {
        case '0':
          return 'z-0'
        case '10':
          return 'z-10'
        case '20':
          return 'z-20'
        case '30':
          return 'z-30'
        case '40':
          return 'z-40'
        case '50':
          return 'z-50'
        case 'auto':
          return 'z-auto'
        default:
          return ''
      }
    },
    options: {
      get() {
        return this.value;
      },
      set(value) {
        /**
         * Emmitted when value changes.
         */
        this.$emit("update:value", value);
      },
    },
    allSelected() {
      return this.tmpOptions.every((i) => i.selected);
    },
    someSelected() {
      return this.tmpOptions.some((i) => i.selected);
    },
    indeterminate() {
      return this.someSelected && !this.allSelected;
    },
    filteredTmpOptions() {
      return this.tmpOptions.filter(
        (i) =>
          i.text && i.text.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
    variantClass() {
      switch (this.variant) {
         case 'primary':
          return 'link link-primary'
        case 'secondary':
          return 'link link-secondary'
        default:
          return ''
      }
    }
  },
  mounted() {
    this.id = `sds-filter-by-dropdown__${uuid()}`;
  },
  methods: {
    toggleSelect() {
      if (this.allSelected) {
        this.deselectAllOptions();
      } else {
        this.selectAllOptions();
      }
    },
    saveSelections() {
      /**
       * Emmitted when value changes.
       */
      this.$emit("input", this.tmpOptions);
    },
    cancelSelections() {
      // Make a unique copy of default list data
      this.resetTmpOptions();
    },
    resetTmpOptions() {
      const options = JSON.parse(JSON.stringify(this.options));
      if (this.enableSortOptions) {
        this.tmpOptions = options
          .sort((a, b) => {
            return a.text.toLowerCase() < b.text.toLowerCase()
              ? -1
              : a.text.toLowerCase() > b.text.toLowerCase()
                ? 1
                : 0;
          })
          .sort((a, b) => {
            return a.selected > b.selected
              ? -1
              : a.selected < b.selected
                ? 1
                : 0;
          });
      } else {
        this.tmpOptions = options;
      }
      this.filterText = ''
    },
    deselectAllOptions() {
      this.tmpOptions.forEach((i) => {
        i.selected = false;
      });
    },
    selectAllOptions() {
      this.tmpOptions.forEach((i) => {
        i.selected = true;
      });
    },
  },
}
</script>
