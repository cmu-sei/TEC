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
  <table data-id="sds-table">
    <caption v-if="!!$slots.caption || caption">
      <!-- @slot Caption content. This will override the **caption** prop. -->
      <slot name="caption">
        {{ caption }}
      </slot>
    </caption>
    <colgroup>
      <template v-for="field in displayedFields">
        <!-- @slot Col content. Used to help style columns. @binding active, activeClass -->
        <slot
          :name="`col(${field.key})`"
          :active="sortField === field.key"
          :active-class="sortedColumnClass"
        >
          <col
            :key="field.key"
            :class="{
              [sortedColumnClass]: sortField === field.key
            }"
          >
        </slot>
      </template>
    </colgroup>
    <thead>
      <tr>
        <th
          v-for="field in displayedFields"
          :key="field.key"
          :class="{ 
            [sortedColumnClass]: sortField === field.key,
            'cursor-pointer': field.sortable
          }"
          class="space-x-1 select-none group"
          @click="field.sortable ? handleSortBy(field) : undefined"
        >
          <!-- @slot Head content. Allows for the customization of field titles. @binding field, active -->
          <slot
            :name="`head(${field.key})`"
            :field="field"
            :active="sortField === field.key"
          >
            {{ field.label }}
            <svg
              v-if="field.sortable"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="inline-block w-4 h-4 group-hover:opacity-100"
              :class="{
                'opacity-100': sortField === field.key,
                'opacity-50': sortField !== field.key,
              }"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 320 512"
            >
              <path
                v-if="sortField !== field.key"
                d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                fill="currentColor"
              />
              <path
                v-if="sortField === field.key && sortOrder > 0"
                d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
                fill="currentColor"
              />
              <path
                v-if="sortField === field.key && sortOrder < 0"
                d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                fill="currentColor"
              />
            </svg>
          </slot>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in sortedItems"
        :key="item.id"
      >
        <template v-for="key in displayedFieldKeys">
          <component
            :is="cellElement(key)"
            :key="key"
          >
            <!-- @slot Cell content. Allow for styling table cell content. @binding value, item, and format -->
            <slot
              :name="`cell(${key})`"
              :value="format(item, key)"
              :item="item"
              :format="(k) => format(item, k)"
            >
              {{ format(item, key) }}
            </slot>
          </component>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SdsTable',
  props: {
    /**
     * An array of objects. Each object must have a unique "id" but everything else is optional.
     * 
     * Please note that the **items** keys map 1:1 to the **fields** keys, meaning that, any key found in the items
     * array that is not in the fields array will be ignored and not displayed.
     *
     * Example object:
     * 
     * **{ id: 1, title: "Title", lastModified: "01/01/2019" }**
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * An array of objects. These objects determine the column headers.
     * 
     * Each object must contain a unique "key" and a "label" for use in the table column header.
     * 
     * Optional object properties include a "sortable" boolean and a "format" function. The "sortable"
     * key indicates whether a table column is sortable. The "format" key allows you to customize
     * the way the item's data appears in the table.
     *
     * Basic example object (not sortable):
     * 
     * **{ key: "id", label: "ID" }**
     * 
     * Advanced example object (sortable with custom formatter):
     * 
     * **{ key: "lastModifiedDate", label: 'Last Modified', sortable: true, format: (date) => date.toLocaleDateString() }**
     */
    fields: {
      type: Array,
      default: () => [],
    },
    /**
     * Determines the field key to sort by.
     */
    sortBy: { type: String, default: '' },
    /**
     * Determines if sorting should be descending by default.
     */
    sortDesc: { type: Boolean, default: false },
    /**
     * Determines the caption for the table if desired.
     */
    caption: { type: String, default: null },
    /**
     * Determines the CSS classes used on the sorted column.
     */
    sortedColumnClass: { type: String, default: null }
  },
  data() {
    return {
      sortField: this.sortBy,
      sortOrder: this.sortDesc ? -1 : 1
    }
  },
  computed: {
    sortedItems() {
      const items = this.items
      return items.sort((a, b) => this.sortCompare(a, b, this.sortField))
    },
    displayedFields() {
      return this.fields.filter((i) => !i.hidden)
    },
    displayedFieldKeys() {
      return Object.entries(this.displayedFields).map(([_key, value]) => value.key)
    }
  },
  methods: {
    cellElement(key) {
      const field = this.fields.find((f) => f.key === key)
      return field && field.header ? 'th' : 'td'
    },
    format(item, key) {
      const field = this.fields.find((f) => f.key === key)
      return field && field.format ? field.format(item[key]) : item[key]
    },
    handleSortBy(field) {
      this.sortField = field.key
      this.sortOrder = this.sortOrder === 0 ? 1 : this.sortOrder === 1 ? -1 : 1
    },
    sortCompare(aRow, bRow, key) {
      const a = aRow[key]
      const b = bRow[key]
      if (
        (typeof a === 'number' && typeof b === 'number') ||
        (a instanceof Date && b instanceof Date)
      ) {
        // If both compared fields are native numbers or both are native dates
        return (a < b ? -1 : a > b ? 1 : 0) * this.sortOrder
      } else {
        // Otherwise stringify the field data and use String.prototype.localeCompare
        return this.toString(a).localeCompare(this.toString(b)) * this.sortOrder
      }
    },
    // Helper function to stringify the values of an Object
    toString(value) {
      if (value === null || typeof value === 'undefined') {
        return ''
      } else if (value instanceof Object) {
        return Object.keys(value)
          .sort()
          .map(key => this.toString(value[key]))
          .join(' ')
      } else {
        return String(value)
      }
    }
  }
}
</script>
