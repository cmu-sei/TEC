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
  <div data-id="sds-tabs">
    <div
      class="overflow-x-auto"
      :class="{
        'bg-gray-100 dark:bg-gray-700 rounded-t': type === 'folder'
      }"
    >
      <ul
        role="tablist"
        class="flex whitespace-nowrap z-10"
      >
        <li
          v-for="tab in tabs"
          :key="tab.key"
          role="presentation"
          :class="{
            'mr-auto': tab.align === 'left',
            'ml-auto': tab.align === 'right',
            'mx-auto': tab.align === 'center'
          }"
        >
          <component
            :is="tab.tag || 'button'"
            :id="`sds-tabs-${id}__${tab.key}__tab`"
            :class="{
              'opacity-50': tab.disabled,
              'pointer-events-none': tab.disabled || tab.active,
              'text-sm inline-block rounded-t py-2 px-4 font-bold': type === 'folder',
              'bg-white dark:bg-gray-800 border-l border-t border-r text-gray-700 dark:border-gray-500 dark:text-gray-100': type === 'folder' && tab.active,
              'text-blue-500 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100':
                type === 'folder' && !tab.active,
              'tab tab-underline tab-red': type === 'underline',
              'tab tab-block tab-red': type === 'block',
              'active': (type === 'underline' || type === 'block') && tab.active,
              'disabled': (type === 'underline' || type === 'block') && tab.disabled,
            }"
            :href="tab.tag === 'a' && tab.href || undefined"
            :target="tab.tag === 'a' && tab.href && tab.external ? '_blank' : undefined"
            :rel="tab.tag === 'a' && tab.href && tab.external ? 'noopener noreferrer' : undefined"
            :type="tab.tag === 'button' ? 'button' : undefined"
            :disabled="tab.disabled"
            :tabindex="tab.disabled ? -1 : undefined"
            :aria-selected="tab.active"
            :aria-controls="`sds-tabs-${id}__${tab.key}__tab-content`"
            :data-active="tab.active ? true : undefined"
            role="tab"
            @click="changeTab(tab)"
          >
            <!-- @slot Dynamic tab. Used to for custom HTML within a tab. -->
            <slot :name="`tab(${tab.key})`">
              {{ tab.title }}
            </slot>
          </component>
        </li>
      </ul>
    </div>
    <template v-for="tab in tabs">
      <div
        v-if="tab.active"
        :id="`sds-tabs-${id}__${tab.key}__tab-content`"
        :key="tab.key"
        :aria-labelby="`sds-tabs-${id}__${tab.key}__tab`"
        role="tabpanel"
        tabindex="0"
      >
        <!-- @slot Dynamic tab panel content. Used to inject content into the panel for an active tab. -->
        <slot
          v-if="tab.active"
          :name="`panel(${tab.key})`"
        />
      </div>
    </template>
  </div>
</template>

<script>
import uuid from "../../helpers/uuid";

export default {
  name: 'SdsTabs',
  props: {
    /**
     * Determines the array of tab objects.
     * 
     * Format of tab object:
     * 
     * ```
     * {
     *   key: string
     *   tag?: 'button' | 'a'
     *   title?: string
     *   href?: string
     *   align?: 'left' | 'right' | 'center'
     *   external?: boolean
     *   active?: boolean
     *   disabled?: boolean
     * }
     * ```
     */
    value: { type: Array, default: () => [] },
    /**
     * The overall look and feel of the component.
     */
    type: { type: String, default: 'folder' },
    /**
     * Allows for code execution prior to changing tabs.
     * 
     * Provides the selected `tab` for general use.
     * 
     * Must call an `open()` callback to complete the process.
     * 
     * A `cancel()` callback can be called to cancel
     * the process.
     * 
     * Example definition in parent component:
     * 
     * ```
     * async willChangeTab(tab, open, cancel) {
     *  try {
     *    await SOME_API_CALL_RESPONSE()
     *    console.log(tab)
     *    // let the open process continue
     *    open()
     *  } catch (e) {
     *    // cancel the open process
     *    cancel()
     *  }
     * }
     * ```
     */
    willChangeTab: { type: Function, default: null },
  },
  data() {
    return {
      id: ''
    }
  },
  computed: {
    tabs: {
      get() {
        return this.value
      },
      set(value) {
        /**
         * Emmitted when the v-model has changed.
         */
        this.$emit('input', value)
      }
    }
  },
  mounted() {
    this.id = uuid();
  },
  methods: {
    willChangeTabStateDelay (tab, fn) {
      return new Promise(async (res, rej) => {
        return fn ? await fn(tab, res, rej) : res()
      })
    },
    async changeTab (tab) {
      if (tab.tag === 'a' && tab.href) {
        return true
      } else {
        await this.willChangeTabStateDelay(tab, this.willChangeTab)
        this.tabs = this.tabs.map((i) => {
          i.active = tab.key === i.key
          return i
        })
        /**
         * Emmitted when a tab has been successfully made active.
         * 
         * Provides the active `tab` object.
         */
        this.$emit('change', tab)
      }
    }
  }
}
</script>