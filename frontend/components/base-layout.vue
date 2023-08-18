<!--
TEC - Automated Mismatch Detection Tool
Copyright 2023 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
DM23-0003
-->


<template>
  <sds-layout-app
    v-model="collapsed"
    enableCollapsibleSidebar
    appSuite=' '
    appName='TEC'
    :pageTitle='page_title'
    :sidebarNavigationItems='sidebar_items'
    :collapsed='false'
    app-icon-url='/tec_icon_256.jpg'
    hide-sidebar-icons

    @navigate='go_to_page'
  >
    <template #page-header>
      <slot name="header"/>
    </template>

    <slot name='default' />

    <template v-slot:actions-bar v-if="actions_bar_toggle">
      <div class="bg-blue-500 backdrop-blur dark:bg-blue-800 px-6 py-2 shadow">
        <div class="flex gap-2">
          <slot name="actions-bar"/>
        </div>
      </div>
    </template>
  </sds-layout-app>
</template>

<script>
  export default {
    props: {
      page_title: {type: String, default: ''},
      actions_bar_toggle: {type: Boolean, default: false}
    },
    data() {
      return {
        collapsed: false
      }
    },
    computed: {
      sidebar_items() {
        return [
          {
            'id': 1,
            'title': 'Home',
            'active': this.$route.path === '/',
            'href': '/',
          },
          {
            'id': 2,
            'title': 'My Projects',
            'active': this.$route.path.includes('/my_projects'),
            'href': '/my_projects',
          },
          {
            'id': 3,
            'title': 'New Project',
            'active': this.$route.path.includes('/new_projects'),
            'href': '/new_project',
          },
          {
            'id': 4,
            'title': 'Resources',
            'items': [
              {
                'id': 5,
                'title': 'Descriptor Producers and Consumers',
                'active': this.$route.path.includes('/resources/descriptor_producers_and_consumers'),
                'href': '/resources/descriptor_producers_and_consumers',
              },
              {
                'id': 6,
                'title': 'Descriptor Relationships',
                'active': this.$route.path.includes('/resources/descriptor_relationships'),
                'href': '/resources/descriptor_relationships',
              },
              {
                'id': 7,
                'title': 'Descriptor Changelog',
                'active': this.$route.path.includes('/resources/descriptor_changelog'),
                'href': '/resources/descriptor_changelog'
              }
            ]
          }
        ]
      }
    },


    methods: {
      go_to_page({ item, event }) {
        event.preventDefault()
        this.$router.push({ path: item.href })
      }
    },
  }
</script>