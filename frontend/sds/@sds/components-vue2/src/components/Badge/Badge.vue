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
    data-id="sds-badge"
    class="inline-block tracking-wide max-w-full uppercase px-2 py-1 text-xs font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden align-baseline rounded"
    :class="variantClass"
  >
    <!-- @slot Badge content.  -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SdsBadge',
  props: {
    /**
     * Determines the overall look and feel of the component.
     */
    type: {
      type: String,
      default: 'medium'
    },
    /**
     * Determines the theme color of the component.
     */
    variant: {
      type: String,
      default: 'gray'
    }
  },
  computed: {
    variantClass () {
      let textClass = ''
      let bgClass = ''
      let borderClass = ''

      if (this.type === 'light-border') {
        borderClass = 'border border-current'
      }

      switch(this.variant) {
        case 'blue':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-blue-100'
            textClass = 'text-blue-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-blue-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-blue-700'
            textClass = 'text-white'
          }
          break
        case 'green':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-green-100'
            textClass = 'text-green-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-green-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-green-700'
            textClass = 'text-white'
          }
          break
        case 'teal':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-teal-100'
            textClass = 'text-teal-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-teal-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-teal-700'
            textClass = 'text-white'
          }
          break
        case 'orange':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-orange-100'
            textClass = 'text-orange-800'
          } else if (this.type === 'medium') {
            bgClass = 'bg-orange-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-orange-700'
            textClass = 'text-white'
          }
          break
        case 'red':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-red-100'
            textClass = 'text-red-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-red-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-red-700'
            textClass = 'text-white'
          }
          break
        case 'tan':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-tan-200'
            textClass = 'text-tan-900'
          } else if (this.type === 'medium') {
            bgClass = 'bg-tan-600'
            textClass = 'text-gray-800'
          } else if (this.type === 'dark') {
            bgClass = 'bg-tan-800'
            textClass = 'text-white'
          }
          break
        case 'yellow':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-yellow-100'
            textClass = 'text-yellow-800'
          } else if (this.type === 'medium') {
            bgClass = 'bg-yellow-500'
            textClass = 'text-gray-800'
          } else if (this.type === 'dark') {
            bgClass = 'bg-yellow-700'
            textClass = 'text-white'
          }
          break
        case 'pink':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-pink-100'
            textClass = 'text-pink-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-pink-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-pink-700'
            textClass = 'text-white'
          }
          break
        case 'purple':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-purple-100'
            textClass = 'text-purple-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-purple-400'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-purple-600'
            textClass = 'text-white'
          }
          break
        case 'indigo':
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-indigo-100'
            textClass = 'text-indigo-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-indigo-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-indigo-700'
            textClass = 'text-white'
          }
          break
        case 'gray':
        default:
          if (this.type === 'light-border' || this.type === 'light') {
            bgClass = 'bg-gray-100'
            textClass = 'text-gray-500'
          } else if (this.type === 'medium') {
            bgClass = 'bg-gray-500'
            textClass = 'text-white'
          } else if (this.type === 'dark') {
            bgClass = 'bg-gray-700'
            textClass = 'text-white'
          }
          break
      }

      return [textClass, bgClass, borderClass]
    }
  }
}
</script>
