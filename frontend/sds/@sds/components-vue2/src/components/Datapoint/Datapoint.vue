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
  <div>
    <div
      v-if="$slots.label || label"
      class="text-base"
    >
      <!-- @slot Label context.  -->
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <div class="flex gap-2">
      <div
        class="font-bold"
        :class="[sizeClass, variantClass]"
      >
        <!-- @slot Datapoint context.  -->
        <slot>{{ modelValueDisplay }}</slot>
      </div>
      <div
        v-if="$slots.context || context"
        class="text-base mt-auto"
      >
        <!-- @slot Context context.  -->
        <slot name="context">
          {{ context }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SdsDatapoint',
  props: {
    /**
     * Determines the content of the default slot.
     * 
     * This is overridden if the default slot is present.
     */
    value: { type: [String, Number], default: null },
    /**
     * Determines the content of the label slot.
     * 
     * This is overridden if the label slot is present.
     */
    label: { type: String, default: null },
    /**
     * Determines the content of the context slot.
     * 
     * This is overridden if the context slot is present.
     */
    context: { type: String, default: null },
    /**
     * Determines the overall look and feel of the component.
     */
    size: { type: String, default: 'md' },
    /**
     * Determines the theme color of the component.
     */
    variant: { type: String, default: null}
  },
  computed: {
    modelValueDisplay ()  {
      if (typeof this.value === 'number') {
        return this.value.toLocaleString()
      }
      return this.value
    },
    sizeClass () {
      let textSizeClass = ''

      switch(this.size) {
        case 'sm':
          textSizeClass = 'text-lg'
          break
        case 'md':
          textSizeClass = 'text-3xl'
          break
        default:
          textSizeClass = 'text-5xl'
      }

      return textSizeClass
    },
    variantClass () {
      let textClass = ''

      switch(this.variant) {
        case 'blue':
          textClass = 'text-blue-500 dark:text-blue-400'
          break
        case 'green':
          textClass = 'text-green-500 dark:text-green-400'
          break
        case 'teal':
          textClass = 'text-teal-500 dark:text-teal-400'
          break
        case 'orange':
          textClass = 'text-orange-700 dark:text-orange-400'
          break
        case 'red':
          textClass = 'text-red-500 dark:text-red-400'
          break
        case 'tan':
          textClass = 'text-tan-800 dark:text-tan-500'
          break
        case 'yellow':
          textClass = 'text-yellow-800 dark:text-yellow-400'
          break
        case 'pink':
          textClass = 'text-pink-600 dark:text-pink-400'
          break
        case 'purple':
          textClass = 'text-purple-500 dark:text-purple-400'
          break
        case 'indigo':
          textClass = 'text-indigo-500 dark:text-indigo-400'
          break
        case 'gray':
          textClass = 'text-gray-500 dark:text-gray-300'
          break
        default:
          textClass = 'text-black dark:text-white'
          break
      }

      return textClass
    }
  }
}
</script>
