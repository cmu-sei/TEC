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
    data-id="sds-layout-stacked"
    class="flex flex-col w-full min-h-screen"
  >
    <header
      v-if="hasHeaderSlot"
      class="z-30 flex-shrink"
      :class="{ 'sticky top-0 shadow': stickyHeader }"
    >
      <!-- @slot Header content. -->
      <slot name="header" />
    </header>
    <main class="flex-grow">
      <!-- @slot Page content. -->
      <slot />
    </main>
    <footer
      v-if="hasFooterSlot"
      class="z-20 flex-shrink"
      :class="{ 'sticky bottom-0 shadow': stickyFooter }"
    >
      <!-- @slot Footer content. -->
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: 'SdsLayoutStacked',
  props: {
    /**
     * Determines whether to make the header sticky or not.
     */
    stickyHeader: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whether to make the footer sticky or not.
     */
    stickyFooter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasHeaderSlot(): Boolean {
      return !!this.$slots.header;
    },
    hasFooterSlot(): Boolean {
      return !!this.$slots.footer;
    },
  },
});
</script>
