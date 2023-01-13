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
    data-id="sds-tooltip"
    :strategy="strategy"
    :placement="placement"
    :disabled="disabled"
    :will-open="willOpen"
    :will-close="willClose"
    :popper-class="`absolute text-xs shadow rounded-lg text-center ${variantClass} ${sizeClass} ${zIndexClass}`"
    :arrow-class="`absolute w-2 h-2 rotate-45 ${variantArrowClass}`"
    placement-top-arrow-class="-bottom-1"
    placement-right-arrow-class="-left-1"
    placement-bottom-arrow-class="-top-1"
    placement-left-arrow-class="-right-1"
    disable-animation
    shift
  >
    <template #trigger="{ open, close }">
      <div
        @mouseover="typeof open !== 'undefined' ? open(openDelay) : null"
        @mouseleave="typeof close !== 'undefined' ? close(closeDelay) : null"
      >
        <!-- @slot Trigger content. -->
        <slot name="trigger" />
      </div>
    </template>
    <template #default="{ open, close, toggle, isOpen }">
      <div
        class="p-2"
        @mouseover="typeof open !== 'undefined' ? open() : null"
        @mouseout="typeof close !== 'undefined' && close(closeDelay)"
      >
        <!-- @slot Tooltip content. @binding close, open, toggle, isOpen -->
        <slot
          :close="close"
          :open="open"
          :toggle="toggle"
          :is-open="isOpen"
        />
      </div>
    </template>
  </floating-ui>
</template>

<script>
import FloatingUi from "../FloatingUi/FloatingUi.vue";

export default {
  name: 'SdsPopover',
  components: {
    FloatingUi
  },
  props: {
    /**
     * The z-index for the popover.
     */
    zIndex: { type: String, required: false, default: '50' },
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String, default: 'dark' },
    /**
     * Delays opening the toggle in ms.
     */
    openDelay: { type: Number, default: 0 },
    /**
     * Delays closing the toggle in ms.
     */
    closeDelay: { type: Number, default: 0 },
    /**
     * The width of the popover.
     */
    size: { type: String, default: 'sm' },
    /**
     * The strategy of the popover on the screen.
     */
    strategy: { type: String, default: 'absolute' },
    /**
     * The placement of the popover on the screen.
     */
    placement: { type: String, default: 'top' },
    /**
     * Determines if the popover should display or not.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Allows for code execution prior to opening the tooltip.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the tooltip from opening
     * until a call to a backend API completes.
     * 
     * Example definition in parent component:
     * 
     * ```
     * async willOpen(open, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the open process continue
     *    open()
     *  } catch (e) {
     *    // cancel the open process
     *    cancel()
     *  }
     * }
     * ```
     */
    willOpen: { type: Function, default: null },
    /**
     * Allows for code execution prior to closing the tooltip.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the tooltip from closing
     * until a call to a backend API completes.
     * 
     * Example definition in parent component:
     * 
     * ```
     * async willClose(close, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    // let the close process continue
     *    close()
     *  } catch (e) {
     *    // cancel the close process
     *    cancel()
     *  }
     * }
     * ```
     */
    willClose: { type: Function, default: null }
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
    variantClass() {
      switch (this.variant) {
        case 'dark':
          return 'bg-dark text-light'
        case 'light':
          return 'bg-light text-dark'
        default:
          return 'bg-dark text-light'
      }
    },
    variantArrowClass() {
      switch (this.variant) {
        case 'dark':
          return 'bg-dark'
        case 'light':
          return 'bg-light'
        default:
          return 'bg-dark'
      }
    },
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'w-32'
        case 'md':
          return 'w-48'
        case 'lg':
          return 'w-56'
        case 'xl':
          return 'w-72'
        case 'auto':
          return 'w-auto'
        default:
          return 'w-32'
      }
    }
  },
}
</script>
