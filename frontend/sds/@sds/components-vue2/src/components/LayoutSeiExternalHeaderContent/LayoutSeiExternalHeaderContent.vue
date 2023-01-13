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
    data-id="sds-layout-sei-external-header-content"
    class="space-y-4"
  >
    <h3
      v-if="page.title"
      class="text-3xl text-gray-500 break-words font-extralight"
    >
      {{ page.title }}
    </h3>
    <h4
      v-if="page.subtitle"
      class="text-xl text-gray-500 break-words"
    >
      {{ page.subtitle }}
    </h4>
    <div
      v-if="page.description"
      class="max-w-screen-md prose break-words prose-red"
      v-html="page.description"
    />
  </div>
</template>

<script>
export default {
  name: 'SdsLayoutSeiExternalHeaderContent',
  props: {
    /**
     * An object containing various properties that display in the content.
     */
    page: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
