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
    data-id="sds-layout-sei-external-masthead"
    class="py-8 bg-white"
  >
    <div class="container px-4 mx-auto md:px-8">
      <div
        v-if="page.nav"
        class="grid grid-cols-1 gap-8 lg:grid-cols-12"
      >
        <div class="order-2 lg:col-span-3 lg:order-1">
          <layout-sei-external-nav :page="page" />
        </div>
        <div
          v-if="page.title || page.subtitle || page.description"
          class="order-1 lg:col-span-9 lg:order-2"
        >
          <layout-sei-external-header-content :page="page" />
        </div>
      </div>
      <template v-else>
        <layout-sei-external-header-content
          v-if="page.title || page.subtitle || page.description"
          :page="page"
        />
      </template>
    </div>
  </div>
</template>

<script>
import LayoutSeiExternalNav from "../LayoutSeiExternalNav/LayoutSeiExternalNav.vue";
import LayoutSeiExternalHeaderContent from "../LayoutSeiExternalHeaderContent/LayoutSeiExternalHeaderContent.vue";

export default {
  name: 'SdsLayoutSeiExternalMasthead',
  components: {
    LayoutSeiExternalNav,
    LayoutSeiExternalHeaderContent,
  },
  props: {
    /**
     * An object containing various properties that display in the masthead.
     */
    page: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
