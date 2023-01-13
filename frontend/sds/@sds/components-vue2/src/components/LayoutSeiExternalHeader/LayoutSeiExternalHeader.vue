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
  <header data-id="sds-layout-sei-external-header">
    <div class="bg-red-500">
      <div class="container px-4 py-2 mx-auto md:px-8">
        <a
          href="https://www.cmu.edu/"
          target="_self"
          class="block w-80"
        >
          <layout-sei-external-wordmark class="text-white fill-current h-7" />
          <span class="sr-only">Carnegie Mellon University</span>
        </a>
      </div>
    </div>
    <div class="text-gray-700 bg-white">
      <div class="container px-4 pt-8 mx-auto space-y-8 md:px-8">
        <div class="pb-6 space-y-4 border-b">
          <h1 class="text-5xl font-extralight">
            <a
              href="https://sei.cmu.edu"
              class="break-words hover:text-red-500"
            >Software Engineering Institute</a>
          </h1>
          <h2
            v-if="page.organization"
            class="text-2xl text-gray-500 break-words"
          >
            {{ page.organization }}
          </h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LayoutSeiExternalWordmark from "../LayoutSeiExternalWordmark/LayoutSeiExternalWordmark.vue";

export default {
  name: 'SdsLayoutSeiExternalHeader',
  components: {
    LayoutSeiExternalWordmark,
  },
  props: {
    /**
     * An object containing various properties that display in the header.
     */
    page: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
