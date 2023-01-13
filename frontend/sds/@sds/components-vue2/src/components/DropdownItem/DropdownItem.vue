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
  <component
    :is="tag"
    data-id="sds-dropdown-item"
    class="block w-full select-none px-4 py-2 text-sm leading-5 text-left hover:no-underline hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600 focus:text-white"
    :class="{
      'bg-blue-500 dark:bg-blue-600 text-white': active,
      'text-gray-700 dark:text-gray-100': !active,
      'pointer-events-none opacity-50': disabled
    }"
    :disabled="disabled"
    role="menuitem"
    v-on="listeners"
    @click="closeOnClick ? $root.$emit('floating-ui-toggle') : null"
  >
    <!-- @slot Dropdown item content. -->
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend<any, any, any, any>({
  name: 'SdsDropdownItem',
  props: {
    /**
     * Determines the tag use for the component.
     */
    tag: {
      type: String,
      default: "a",
    },
    /**
     * Determines whether to close the parent dropdown when this component is clicked.
     */
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    /**
     * Determines if this component is currently active.
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      return Object.assign({}, this.$listeners);
    },
  },
});
</script>
