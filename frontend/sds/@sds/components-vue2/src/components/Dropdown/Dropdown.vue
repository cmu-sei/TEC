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
    data-id="sds-dropdown"
    :offset="offset"
    :strategy="strategy"
    :placement="placement"
    :disabled="disabled"
    :will-open="willOpen"
    :will-close="willClose"
    :class="[block ? 'w-full' : '']"
    :popper-class="`absolute border shadow-lg rounded-md bg-white dark:border-gray-600 dark:bg-gray-700 ${auto ? 'w-auto' : 'w-56'} ${zIndexClass}`"
    hide-arrow
    shift
  >
    <template #trigger="{ open, close, isOpen, toggle }">
      <!-- @slot Trigger content (used to replace trigger button). @binding open, close, isOpen, toggle -->
      <slot
        name="trigger"
        :open="open"
        :close="close"
        :is-open="isOpen"
        :toggle="toggle"
      >
        <button
          :id="id"
          ref="button"
          type="button"
          class="btn space-x"
          aria-haspopup="true"
          :aria-expanded="isOpen"
          :disabled="disabled"
          :class="[variantClass, sizeClass, outlineClass, disabledClass, blockClass, isOpen ? 'active' : '']"
          @click="handleClick(isOpen, open, close)"
        >
          <!-- @slot Title content of trigger button. -->
          <slot name="title">
            {{ title }}
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
      </slot>
    </template>
    <template #default="{ open, close, toggle, isOpen }">
      <div
        class="py-2"
        aria-orientation="vertical"
        :aria-labelledby="$refs.button && $refs.button.id || undefined"
      >
        <!-- @slot Dropdown content. @binding close, open, toggle, isOpen -->
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
import uuid from "../../helpers/uuid";

export default {
  name: 'SdsPopover',
  components: {
    FloatingUi
  },
  props: {
    /**
     * The content of the dropdown trigger.
     */
    title: { type: String, default: '' },
    /**
     * Styling for the button trigger.
     */
    variant: { type: String, default: 'default' },
    /**
     * The z-index for the popover.
     */
    zIndex: { type: String, required: false, default: '50' },
    /**
     * The distance between the popper and the trigger.
     */
    offset: { type: Number, default: 5 },
    /**
     * Delays opening the toggle in ms.
     */
    openDelay: { type: Number, default: 0 },
    /**
     * Delays closing the toggle in ms.
     */
    closeDelay: { type: Number, default: 0 },
    /**
     * Determines the size of the trigger button.
     */
    size: { type: String, default: 'md' },
    /**
     * Determines whether the content of the popper will set the width of the popper.
     */
    auto: { type: Boolean, default: false },
    /**
     * The strategy of the popover on the screen.
     */
    strategy: { type: String, default: 'absolute' },
    /**
     * The placement of the popover on the screen.
     */
    placement: { type: String, default: 'bottom-start' },
    /**
     * Determines whether to use the outline styling on the trigger button or not.
     */
    outline: { type: Boolean, default: false },
    /**
     * Determines whether to use the block styling on the trigger button or not.
     */
    block: { type: Boolean, default: false },
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
  data() {
    return {
      id: ''
    }
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
        case 'md':
          return ''
        case 'sm':
          return 'btn-sm'
        default:
          return ''
      }
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
  mounted() {
    this.id = `sds-dropdown__${uuid()}`;
  },
  methods: {
    handleClick(isOpen, open, close) {
      if (isOpen) {
        close(this.closeDelay)
      } else {
        open(this.openDelay)
      }
    }
  }
}
</script>
