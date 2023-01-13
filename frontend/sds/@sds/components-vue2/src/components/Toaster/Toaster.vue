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
    v-if="toasts.length > 0"
    data-id="sds-toaster"
    class="fixed inset-0 z-50 p-4 pointer-events-none sm:p-6"
  >
    <transition-group
      tag="div"
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition duration-100 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      class="space-y-4"
    >
      <!-- @slot Toaster content. @binding toasts, removeToast -->
      <slot
        :toasts="toasts"
        :remove-toast="removeToast"
      >
        <sds-toast
          v-for="toast in toasts"
          :id="toast.id"
          :key="toast.id"
          :variant="toast.variant"
          :title="toast.title"
          :text="toast.text"
          :auto-hide-delay="toast.autoHideDelay || 5000"
          :no-auto-hide="toast.noAutoHide || false"
          class="ml-auto"
          @remove="removeToast"
        />
      </slot>
    </transition-group>
  </div>
</template>

<script>
import SdsToast from "../Toast/Toast.vue";

export default {
  name: 'SdsToaster',
  components: {
    SdsToast,
  },
  props: {
    /**
     * The v-model for this component. It accepts an array of toasts. See the Toast component for guidance.
     */
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    toasts: {
      get() {
        return this.value;
      },
      set(value) {
        /**
         * Emitted when current array of toasts changes.
         */
        this.$emit("input", value);
      },
    },
  },
  methods: {
    removeToast(id) {
      this.toasts = this.toasts.filter((i) => id !== i.id);
    },
  },
};
</script>
