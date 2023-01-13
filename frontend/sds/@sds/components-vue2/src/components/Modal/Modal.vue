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
  <transition
    enter-active-class="transition-opacity duration-75"
    enter-class="opacity-0"
    leave-active-class="transition-opacity duration-75"
    leave-to-class="opacity-0"
    @after-enter="showContent = true"
    @after-leave="showModal = false"
  >
    <div
      v-if="showModal"
      ref="modalContainer"
      data-id="sds-modal"
      class="fixed inset-0 z-50 block h-full px-2 py-0 overflow-auto bg-black bg-opacity-50"
      data-testid="sds-modal"
      @mousedown.self="close"
      @keydown="checkKeyEvent"
    >
      <transition
        enter-active-class="transition-all duration-75"
        enter-class="transform scale-90 opacity-0"
        leave-active-class="transition-all duration-75"
        leave-to-class="transform scale-90 opacity-0"
        @after-leave="showModal = false"
      >
        <div
          v-if="showContent"
          role="dialog"
          :aria-labelledby="id"
          class="relative z-50 block w-full mx-auto my-2 bg-white border rounded shadow-xl dark:bg-gray-800 dark:border-gray-700 md:my-8"
          :class="{
            'md:max-w-sm': size === 'sm',
            'md:max-w-xl': size === 'md',
            'md:max-w-xl lg:max-w-4xl': size === 'lg',
            'md:max-w-xl lg:max-w-4xl xl:max-w-6xl': size === 'xl',
          }"
        >
          <header class="flex items-center p-6 pb-0">
            <div
              v-if="hasTitleSlot"
              :id="id"
              class="text-xl leading-tight"
            >
              <!-- @slot Modal title content. -->
              <slot name="title" />
            </div>
            <button
              v-focus
              aria-label="close"
              class="inline-block p-0 ml-auto text-3xl text-gray-500 bg-transparent border-0 cursor-pointer hover:text-gray-700 hover:outline-none focus:text-gray-700 focus:outline-none dark:hover:text-gray-300 dark:focus:text-gray-300 active:text-gray-500 dark:active:text-gray-600"
              @click="close"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>
          <main class="p-6">
            <!-- @slot Modal content. -->
            <slot />
          </main>
          <footer
            v-if="hasFooterSlot"
            class="p-6 pt-0"
          >
            <!-- @slot Modal footer content. -->
            <slot name="footer" />
          </footer>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import uuid from '../../helpers/uuid'

export default Vue.extend<any, any, any, any>({
  name: 'SdsModal',
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  props: {
    /**
     * The v-model that determines the show/hide state of the modal.
     */
    value: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines the size of the modal.
     */
    size: {
      type: String,
      default: "md",
    },
  },
  data() {
    return {
      showContent: false,
    };
  },
  computed: {
    hasTitleSlot(): Boolean {
      return !!this.$slots.title;
    },
    hasFooterSlot(): any {
      return !!this.$slots.footer;
    },
    showModal: {
      get(): Boolean {
        return this.value;
      },
      set(value) {
        /**
         * Emmitted when value changes.
         */
        this.$emit("input", value);
      },
    },
  },
  watch: {
    showModal: {
      immediate: true,
      handler(value) {
        this.showContent = value;

        if (typeof document === "undefined") return;
        if (value) {
          this.makeDomChanges();
        } else {
          this.removeDomChanges();
        }
      },
    },
  },
  mounted() {
    this.id = `sds-modal__${uuid()}`;
  },
  destroyed() {
    this.removeDomChanges();
  },
  methods: {
    makeDomChanges() {
      if (typeof document === "undefined") return;
      document.documentElement.classList.add("modal-prevent-scroll");
      setTimeout(() => {
        document.addEventListener("keyup", this.handleEscKey);
      }, 0);
    },
    removeDomChanges() {
      if (typeof document === "undefined") return;
      document.documentElement.classList.remove("modal-prevent-scroll");
      document.removeEventListener("keyup", this.handleEscKey);
    },
    close() {
      this.showContent = false;
    },
    handleEscKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        this.close();
      }
    },
    checkKeyEvent(event: KeyboardEvent) {
      // close modal and return early if escape
      if (event.key === "Escape") {
        this.close();
        return;
      }
      const focusableList = this.$refs.modalContainer.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      // escape early if only 1 or no elements to focus
      if (focusableList.length < 2 && event.key === "Tab") {
        event.preventDefault();
        return;
      }
      const last = focusableList.length - 1;
      if (
        event.key === "Tab" &&
        event.shiftKey === false &&
        event.target === focusableList[last]
      ) {
        event.preventDefault();
        focusableList[0].focus();
      } else if (
        event.key === "Tab" &&
        event.shiftKey === true &&
        event.target === focusableList[0]
      ) {
        event.preventDefault();
        focusableList[last].focus();
      }
    },
  },
});
</script>

<style>
.modal-prevent-scroll {
  overflow: hidden;
}
</style>