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
  <div class="inline-block">
    <div
      ref="triggerRef"
      class="inline-block w-full"
    >
      <slot
        name="trigger"
        :is-open="open"
        :open="onOpen"
        :close="onClose"
        :toggle="onToggle"
      />
    </div>
    <transition
      :css="!disableAnimation"
      enter-active-class="transition duration-75 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-50 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="open"
        ref="popperRef"
        :class="popperClass"
        :style="popperPosition"
      >
        <div
          v-if="!hideArrow"
          ref="arrowRef"
          :class="[arrowClass, arrowPlacementClass]"
          :style="arrowPosition"
        />
        <slot
          :is-open="open"
          :open="onOpen"
          :close="onClose"
          :toggle="onToggle"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import {
  autoUpdate,
  autoPlacement,
  computePosition,
  offset,
  inline,
  shift,
  flip,
  arrow,
} from '@floating-ui/dom'

export default {
  name: 'SdsFloatingUi',
  props: {
    disabled: { type: Boolean, default: false },
    placement: { type: String, default: 'auto' },
    strategy: { type: String, default: 'absolute' },
    overflowPadding: { type: Number, default: 5 },
    arrowPadding: { type: Number, default: 5 },
    offset: { type: Number, default: 10 },
    inline: { type: Boolean, default: false },
    shift: { type: Boolean, default: false },
    disableAnimation: { type: Boolean, default: false },
    popperClass: { type: String, default: undefined },
    hideArrow: { type: Boolean, default: false },
    arrowClass: { type: String, default: undefined },
    placementTopArrowClass: { type: String, default: undefined },
    placementRightArrowClass: { type: String, default: undefined },
    placementBottomArrowClass: { type: String, default: undefined },
    placementLeftArrowClass: { type: String, default: undefined },
    willOpen: { type: Function, default: null },
    willClose: { type: Function, default: null },
  },
  data() {
    return {
      open: false,
      popperPosition: { left: `0px`, top: `0px` },
      arrowPosition: { left: `0px`, top: `0px` },
      currentPlacement: '',
      openStateTimeout: null,
      shouldOpen: false,
      cleanup: null
    }
  },
  computed: {
    arrowPlacementClass() {
      if (!this.currentPlacement) return ''
      if (this.currentPlacement.includes('top')) {
        return this.placementTopArrowClass
      } else if (this.currentPlacement.includes('right')) {
        return this.placementRightArrowClass
      } if (this.currentPlacement.includes('bottom')) {
        return this.placementBottomArrowClass
      } if (this.currentPlacement.includes('left')) {
        return this.placementLeftArrowClass
      }
      return ''
    }
  },
  watch: {
    open(value) {
      if (value) {
        this.$nextTick(() => {
          this.update()
          if (this.$refs.triggerRef && this.$refs.popperRef) {
            this.cleanup = autoUpdate(this.$refs.triggerRef, this.$refs.popperRef, this.update);
          }
        })
      } else {
        this.cleanup && this.cleanup()
      }
    }
  },
  created() {
    this.$root.$on("floating-ui-toggle", (value) => {
      if (value) {
        !this.open && this.onOpen()
      } else {
        this.open && this.onClose()
      }
    });
  },
  mounted() {
    document.addEventListener("mousedown", this.handleOutsideMouseDown);
    document.addEventListener("keyup", this.handleOutsideKeyUp);
  },
  destroyed() {
    document.removeEventListener("mousedown", this.handleOutsideMouseDown);
    document.removeEventListener("keyup", this.handleOutsideKeyUp);
  },
  methods: {
    openStateDelay(ms) {
      return new Promise(res => {
        if (this.openStateTimeout) {
          clearTimeout(this.openStateTimeout)
        }
        this.openStateTimeout = setTimeout(res, ms)
        return this.openStateTimeout
      })
    },

    willOpenStateDelay(fn) {
      return new Promise(async (res, rej) => {
        return fn ? await fn(res, rej) : res()
      })
    },

    async onOpen(ms = 0) {
      if (this.disabled) return
      try {
        this.shouldOpen = true
        await this.openStateDelay(ms)
        if (this.shouldOpen) {
          await this.willOpenStateDelay(this.willOpen)
          if (this.open || !this.shouldOpen) return
          this.shouldOpen = false
          this.open = true
        }
      } catch (e) {
        this.shouldOpen = false
      }
    },

    async onClose(ms = 0) {
      try {
        this.shouldOpen = false
        await this.openStateDelay(ms)
        await this.willOpenStateDelay(this.willClose)
        if (!this.open) return
        this.open = false
      } catch (e) { }
    },

    async onToggle(openMs = 0, closeMs = 0) {
      if (this.open) {
        this.onClose(closeMs)
      } else {
        this.onOpen(openMs)
      }
    },

    async update() {
      if (!this.$refs.triggerRef || !this.$refs.popperRef) return

      const options = {
        middleware: [],
        placement: this.placement,
        strategy: this.strategy
      }
      const isPlacementAuto = this.placement.startsWith('auto')

      // Offset
      if (this.offset) {
        options.middleware.push(offset(this.offset))
      }

      // Placement (auto vs specified)
      if (isPlacementAuto) {
        options.middleware.push(autoPlacement({
          alignment: this.placement.split('-')[1] ?? '',
        }))
      } else {
        options.placement = this.placement
      }

      // Inline
      if (this.inline) {
        options.middleware.push(inline())
      }

      // Flip
      if (!isPlacementAuto) {
        options.middleware.push(flip({
          padding: this.overflowPadding
        }))
      }

      // Shift
      if (this.shift) {
        options.middleware.push(shift({
          padding: this.overflowPadding
        }))
      }

      // Arrow
      if (!this.hideArrow && this.$refs.arrowRef) {
        options.middleware.push(arrow({
          element: this.$refs.arrowRef,
          padding: this.arrowPadding,
        }))
      }

      // Compute Position
      const data = await computePosition(this.$refs.triggerRef, this.$refs.popperRef, options)
      const { x, y, placement, middlewareData } = data

      this.popperPosition = {
        left: x ? `${x}px` : '',
        top: y ? `${y}px` : ''
      }

      if (!this.hideArrow) {
        const { x: arrowX, y: arrowY } = middlewareData.arrow
        this.currentPlacement = placement
        this.arrowPosition = {
          left: arrowX ? `${arrowX}px` : '',
          top: arrowY ? `${arrowY}px` : ''
        }
      }
    },
    handleOutsideMouseDown(e) {
      if (this.$refs.triggerRef && e.target && this.$refs.triggerRef.contains(e.target)) return
      if (this.$refs.popperRef && e.target && this.$refs.popperRef.contains(e.target)) return
      if (!this.open) return
      this.onClose()
    },
    handleOutsideKeyUp(e) {
      if (e.key === 'Escape') {
        if (!this.open) return
        e.preventDefault()
        this.onClose()
      }
    }
  }
}
</script>