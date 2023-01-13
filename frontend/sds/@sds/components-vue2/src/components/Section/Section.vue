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
    data-id="sds-section"
    class="block bg-white dark:bg-gray-800 dark:border-gray-700"
    :class="{
      border: type === 'simple' || type === 'raised',
      'shadow border rounded': type === 'raised',
    }"
  >
    <header
      v-if="!hideHeader"
      :class="{
        'border-b dark:border-gray-700':
          type === 'simple' || type === 'raised',
        'border-0 border-t-2 border-gray-900 dark:border-gray-100':
          type === 'accented',
      }"
    >
      <div
        class="flex px-4 py-3"
        :class="{ 'border-b border-gray-300': type === 'accented' }"
      >
        <div class="self-center flex-grow">
          <div
            v-if="hasTitleSlot"
            class="slot-title"
          >
            <!-- @slot Section title content. -->
            <slot name="title" />
          </div>
          <div
            v-if="hasSubtitleSlot"
            class="text-sm text-gray-500"
          >
            <!-- @slot Section subtitle content. -->
            <slot name="subtitle" />
          </div>
        </div>
        <div
          v-if="hasNavSlot"
          class="flex items-stretch self-start justify-center ml-auto"
          :class="[navClass]"
        >
          <!-- @slot Section nav content. -->
          <slot name="nav" />
        </div>
      </div>
    </header>
    <div
      v-if="!hideContent && hasDefaultSlot"
      :class="[contentClass]"
    >
      <!-- @slot Section content. -->
      <slot />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: 'SdsSection',
  props: {
    /**
     * Determines the overall look and feel of the section.
     */
    type: {
      type: String,
      default: "",
    },
    /**
     * Determines if the header is hidden or shown.
     */
    hideHeader: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines if the content is hidden or shown.
     */
    hideContent: {
      type: Boolean,
      default: false,
    },
    /**
     * The class list for the nav slot.
     */
    navClass: {
      type: String,
      default: "",
    },
    /**
     * The class list of the default slot.
     */
    contentClass: {
      type: String,
      default: "p-4",
    },
  },
  computed: {
    hasTitleSlot() {
      return !!this.$slots.title;
    },
    hasSubtitleSlot() {
      return !!this.$slots.subtitle;
    },
    hasNavSlot() {
      return !!this.$slots.nav;
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
  },
});
</script>
