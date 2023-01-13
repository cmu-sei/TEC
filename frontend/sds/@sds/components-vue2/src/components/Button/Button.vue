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
  <button
    data-id="sds-button"
    :class="[btnClass, variantClass, sizeClass, outlineClass, disabledClass, blockClass]"
    :disabled="disabled"
    @click="onClick"
  >
    <!-- @slot Button content. -->
    <slot />
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SdsButton',
  props: {
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String, default: '' },
    /**
     * Determines the size.
     */
    size: { type: String, default: '' },
    /**
     * Determines whether to use the outline styling or not.
     */
    outline: { type: Boolean, default: false },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Determines whether to use the block styling or not.
     */
    block: { type: Boolean, default: false }
  },
  computed: {
    btnClass() {
      return this.variant !== '' || this.size !== '' || this.outline || this.block ? 'btn' : ''
    },
    variantClass() {
      switch (this.variant) {
        case 'default':
          return 'btn-default'
        case 'primary':
          return 'btn-primary'
        case 'success':
          return 'btn-success'
        case 'danger':
          return 'btn-danger'
        case 'light':
          return 'btn-light'
        default:
          return ''
      }
    },
    sizeClass() {
      switch(this.size) {
        case 'sm':
          return 'btn-sm'
        default:
          return ''
      }
    },
    outlineClass() {
      return this.outline ? 'btn-outline' : ''
    },
    disabledClass() {
      return this.disabled ? 'disabled' : ''
    },
    blockClass() {
      return this.block ? 'btn-block' : ''
    }
  },
  methods: {
    onClick() {
      /**
       * Emitted when the button is clicked.
       */
      this.$emit('click')
    }
  }
})
</script>