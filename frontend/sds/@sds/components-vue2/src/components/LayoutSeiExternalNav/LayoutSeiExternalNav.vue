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
    data-id="sds-layout-sei-external-nav"
    class="space-y-4"
  >
    <div
      v-for="item in page.nav"
      :key="item.title"
      class="p-4 space-y-2 bg-gray-100"
    >
      <h3 class="text-xl text-gray-600 break-words">
        {{ item.title }}
      </h3>
      <ul class="pb-2 space-y-2">
        <li
          v-for="link in item.items"
          :key="link.title"
        >
          <a
            :href="link.url"
            class="text-red-500 break-words hover:text-red-700 hover:underline"
          >{{ link.title }}</a>
        </li>
      </ul>
      <div
        v-if="item.seeAll"
        class="pt-2 border-t"
      >
        <a
          :href="item.seeAll.url"
          class="inline-flex font-bold uppercase group text-secondary"
        >
          <span class="group-hover:underline">{{ item.seeAll.title }}</span>
          <svg
            viewBox="0 0 32 32"
            class="block w-5 h-5 my-auto fill-current"
            aria-hidden="true"
          >
            <path d="M11.303 8l11.394 7.997L11.303 24z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SdsLayoutSeiExternalNav',
  props: {
    /**
     * An object containing various properties that determine the navigation.
     */
    page: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
