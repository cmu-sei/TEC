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
    data-id="sds-avatar"
    :class="[ 'inline-flex items-center justify-center', variantClass, sizeClass, shapeClass ]"
  >
    <div
      v-if="src"
      :title="name"
      :class="['bg-cover bg-center', sizeClass, shapeClass]"
      :style="`background-image: url(${src})`"
    />
    <span
      v-else
      :title="name"
      :class="['leading-none text-black cursor-default uppercase', textClass]"
    >
      {{ initials }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SdsAvatar',
  props: {
    /**
     * Determines the theme color of the component.
     */
    variant: {
      type: String,
      default: 'random'
    },
    /**
     * Set the shape to a portrait or circle. Defaults to portrait.
     */
    shape: {
      default: 'portrait',
      type: String
    },
    /**
     * Set the size of the avatar.
     */
    size: {
      default: 'md',
      type: String
    },
    /**
     * Set the text name (ex. John Doe) will show "JD" initials as a placeholder when no image is present. The full name, "John Doe" will display on hover with or without an image present.
     */
    name: {
      default: '',
      type: String
    },
    /**
     * Set the image of the avatar.
     */
    src: {
      default: '',
      type: String
    },
  },
  computed: {
    sizeClass() {
      if (this.shape === 'circle') {
        switch (this.size) {
          case 'lg':
            return 'w-44 h-44'
          case 'md':
            return 'w-16 h-16'
          case 'sm':
            return 'w-12 h-12'
          case 'auto':
            return 'w-full h-full'
        }
      } else if (this.shape === 'portrait') {
        switch (this.size) {
          case 'lg':
            return 'w-44 h-52'
          case 'md':
            return 'w-16 h-20'
          case 'sm':
            return 'w-10 h-11'
          case 'auto':
            return 'w-full h-full'
        }
      }
      return ''
    },
    textClass() {
      if (this.size === 'lg') {
        return 'text-6xl font-light'
      } else if (this.size === 'md') {
        return 'text-2xl'
      } else if (this.size === 'sm') {
        return 'text-xl font-semibold'
      }
      return ''
    },
    shapeClass() {
      if (this.shape === 'circle') {
        return 'rounded-full'
      }
      return ''
    },
    variantClass() {
      const colorOptions = ['bg-gray-200', 'bg-red-200', 'bg-pink-200', 'bg-orange-200', 'bg-yellow-200', 'bg-green-200', 'bg-teal-200', 'bg-blue-200', 'bg-indigo-200', 'bg-purple-200']
      if (this.variant && this.variant !== 'random') {
        return colorOptions.filter((color) => color.includes(this.variant))[0]
      } else {
        const randomNumber = Math.floor(Math.random() * colorOptions.length)
        return colorOptions[randomNumber]
      }
    },
    initials() {
      if (!this.name) {
        return
      }

      let name = this.name.trim().toUpperCase()
      if (name.length > 2) {
        if (name.includes(" ")) {
          // Reduce full name to name. Ex: Matt Winwood yields MW
          name = name.split(" ").map((n) => n[0]).join("")
        }
        if (name.length > 2) {
          // Return first and last initial. Ex: Matt Danger Winwood yields MW
          return name.charAt(0) + name.charAt(name.length - 1)
        }
      }
      return name.substring(0, 2)
    }
  }
}
</script>
