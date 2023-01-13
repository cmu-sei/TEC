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
    data-id="sds-popover"
    :strategy="strategy"
    :placement="placement"
    :disabled="disabled"
    :will-open="willOpen"
    :will-close="willClose"
    :popper-class="`absolute bg-white dark:text-gray-50 dark:bg-gray-700 dark:border-gray-600 border shadow-lg rounded-md ${sizeClass} ${zIndexClass}`"
    arrow-class="absolute bg-white dark:bg-gray-700 dark:border-gray-600 border w-3 h-3 rotate-45"
    placement-top-arrow-class="-bottom-1.5 border-t-0 border-l-0"
    placement-right-arrow-class="-left-1.5 border-t-0 border-r-0"
    placement-bottom-arrow-class="-top-1.5 border-b-0 border-r-0"
    placement-left-arrow-class="-right-1.5 border-b-0 border-l-0"
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
        class="p-4"
        @mouseover="typeof open !== 'undefined' ? open() : null"
        @mouseout="typeof close !== 'undefined' && close(closeDelay)"
      >
        <!-- @slot Popover content. @binding close, open, toggle, isOpen -->
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
     * Delays opening the toggle in ms.
     */
    openDelay: { type: Number, default: 500 },
    /**
     * Delays closing the toggle in ms.
     */
    closeDelay: { type: Number, default: 250 },
    /**
     * The width of the popover.
     */
    size: { type: String, default: 'lg' },
    /**
     * The strategy of the popover on the screen.
     */
    strategy: { type: String, default: 'absolute' },
    /**
     * The placement of the popover on the screen.
     */
    placement: { type: String, default: 'auto' },
    /**
     * Determines if the popover should display or not.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Allows for code execution prior to opening the popover.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the popover from opening
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
     * Allows for code execution prior to closing the popover.
     * 
     * A `cancel()` callback can be called as well to cancel
     * the opening process.
     * 
     * For example, this can prevent the popover from closing
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
    sizeClass() {
      switch (this.size) {
        case 'sm':
          return 'w-80'
        case 'lg':
          return 'w-96'
        case 'auto':
          return 'w-auto'
        default:
          return 'w-80'
      }
    }
  },
}
</script>
