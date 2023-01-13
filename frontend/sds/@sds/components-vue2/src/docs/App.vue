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
    :app-suite="appSuite"
    :app-name="appName"
    :app-icon-url="appIconUrl"
    :page-title="pageTitle"
    :sidebar-navigation-items="sidebarNavigationItems"
    :enable-collapsible-sidebar="enableCollapsibleSidebar"
    @navigate="navigate"
  >
    <template #suite-header>
      Suite header content
    </template>
    <template #page-header>
      Page header content
      <!-- <sds-button variant="default">
        Export
      </sds-button>
      <sds-button variant="default">
        Save Search
      </sds-button> -->
      <!-- <div class="flex flex-col lg:flex-row gap-2">
        <sds-button variant="danger">
          Add accomplishment
        </sds-button>
        <sds-search-box variant="danger" />
      </div> -->
    </template>
    <examples />
    <components />
    <template #actions-bar>
      <div class="bg-white dark:bg-gray-800 px-6 py-2 border shadow">
        <div class="flex gap-2">
          <sds-button
            variant="primary"
            class="ml-auto"
          >
            Save something
          </sds-button>
          <sds-button
            variant="default"
          >
            Cancel
          </sds-button>
        </div>
      </div>
    </template>
    <template #footer-middle>
      Footer middle content
    </template>
  </sds-layout-app>
</template>

<script>
import Components from './components/Components.vue'
import Examples from './components/Examples.vue'

export default {
  name: "AppPage",
  components: {
    Components,
    Examples,
  },
  data() {
    return {
      collapsed: false,
      appSuite: 'MIS',
      appName: 'Travel Requests',
      pageTitle: 'Dashboard',
      // appIconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png',
      enableCollapsibleSidebar: true,
      // sidebarNavigationItems: [
      //   { id: 1, title: 'Dashboard', active: true, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 2, title: 'About SEI', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 3, title: 'News & Events', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 4, title: 'Divisions', active: false, href: '#', badgeCount: 9, iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 5, title: 'Research & Projects asdf sdaf ', active: false, href: '#', badgeCount: 999, iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 6, title: 'HR & Benefits', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 7, title: 'Policies', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 8, title: 'Workplace Services', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      //   { id: 9, title: 'Help & FAQ', active: false, href: '#', iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png' },
      // ],
      appIconUrl: null,
      // enableCollapsibleSidebar: false,
      // sidebarNavigationItems: [
      //   { id: 1, title: 'Dashboard', active: true, href: '#' },
      //   { id: 2, title: 'About SEI', active: false, href: '#' },
      //   { id: 3, title: 'News & Events', active: false, href: '#' },
      //   { id: 4, title: 'Divisions', active: false, href: '#', badgeCount: 9 },
      //   { id: 5, title: 'Research & Projects', active: false, href: '#', badgeCount: 999 },
      //   { id: 6, title: 'HR & Benefits', active: false, href: '#' },
      //   { id: 7, title: 'Policies', active: false, href: '#' },
      //   { id: 8, title: 'Workplace Services', active: false, href: '#' },
      //   { id: 9, title: 'Help & FAQ', active: false, href: '#' },
      // ]
      sidebarNavigationItems: [
        { id: 1, title: 'Dashboard', active: true, href: '#' },
        { 
          id: 2, 
          title: 'About SEI',
          iconUrl: 'https://www.shareicon.net/data/128x128/2017/01/17/872043_facebook_512x512.png',
          items: [
            { id: 1, title: 'First item', active: false, href: '#' },
            { id: 2, title: 'Second item', active: false, href: '#', badgeCount: 22 },
            { id: 3, title: 'Third item', active: false, href: '#' },
            { id: 4, title: 'Fourth item', active: false, href: '#' },
          ]
        },
        { 
          id: 3, 
          title: 'Research & Projects With A Large Badge Count',
          items: [
            { id: 1, title: 'First item', active: false, href: '#' },
            { id: 2, title: 'Second item', active: false, href: '#', badgeCount: 93 },
            { id: 3, title: 'Third item With A Large Badge Count With A Large Badge Count', active: false, href: '#', badgeCount: 400 },
            { id: 4, title: 'Fourth item', active: false, href: '#' },
          ]
        },
        { id: 4, title: 'News & Events', active: false, href: '#' },
        { id: 5, title: 'Divisions', active: false, href: '#', badgeCount: 9 },
        { id: 6, title: 'Research & Projects With A Large Badge Count', active: false, href: '#', badgeCount: 999 },
        { id: 7, title: 'HR & Benefits', active: false, href: '#' },
        { id: 8, title: 'Policies', active: false, href: '#' },
        { id: 9, title: 'Workplace Services', active: false, href: '#' },
        { id: 10, title: 'Help & FAQ', active: false, href: '#' },
      ]
    }
  },
  methods: {
    // navigate({ item, event }) {
    //   event.preventDefault()
    //   this.sidebarNavigationItems = this.sidebarNavigationItems.map((i) => {
    //     i.active = i.id === item.id
    //     return i
    //   })
    // }
    navigate({ group, item, event }) {
      event.preventDefault()
      this.sidebarNavigationItems = this.sidebarNavigationItems.map((i) => {
        if (group) {
          if (group.id === i.id) {
            i.items && i.items.forEach((x) => {
              x.active = x.id === item.id
              return x
            })
          } else {
            i.active = false
            i.items && i.items.forEach((x) => {
              x.active = false
            })
          }
        } else {
          i.items && i.items.forEach((x) => {
            x.active = false
          })
          i.active = i.id === item.id
        }
        return i
      })
      console.log(item)
    }
  }
};
</script>
