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
    data-id="sds-layout-sei-external"
    class="flex flex-col w-full min-h-screen text-gray-900 bg-white"
  >
    <!-- @slot Header content. -->
    <slot name="header">
      <layout-sei-external-header :page="page" />
    </slot>
    <!-- @slot Masthead content. -->
    <slot
      v-if="showMasthead"
      name="masthead"
    >
      <layout-sei-external-masthead :page="page" />
    </slot>
    <main class="flex-grow">
      <div
        :class="{
          'bg-gray-50': showMasthead,
        }"
      >
        <template v-if="removeContentPadding">
          <!-- @slot Page content. -->
          <slot />
        </template>
        <template v-else>
          <div class="container p-4 mx-auto md:p-8">
            <!-- @slot Page content. -->
            <slot />
          </div>
        </template>
      </div>
    </main>
    <layout-sei-external-footer />
  </div>
</template>

<script>
import LayoutSeiExternalHeader from "../LayoutSeiExternalHeader/LayoutSeiExternalHeader.vue";
import LayoutSeiExternalFooter from "../LayoutSeiExternalFooter/LayoutSeiExternalFooter.vue";
import LayoutSeiExternalMasthead from "../LayoutSeiExternalMasthead/LayoutSeiExternalMasthead.vue";

export default {
  name: 'SdsLayoutSeiExternal',
  components: {
    LayoutSeiExternalHeader,
    LayoutSeiExternalFooter,
    LayoutSeiExternalMasthead,
  },
  props: {
    /**
     * An object containing various properties that display in the header and masthead.
     */
    page: {
      type: Object,
      default: () => ({}),
    },
    /**
     * Removes the content padding from the default slot section.
     * Useful when you want to custom style the main content section.
     */
    removeContentPadding: {
      type: Boolean,
      default: false,
    },
    /**
     * Determines whether to show the masthead section or not.
     */
    showMasthead: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
