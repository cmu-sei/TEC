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
  <sds-multiselect
    v-model="search.input"
    :selected="selected"
    :options="search.options"
    :loading="search.loading"
    :default-msg="defaultMsg"
    :no-results-msg="noResultsMsg"
    :cannot-add-results-msg="cannotAddResultsMsg"
    :invalid-input-msg="invalidInputMsg"
    :loading-msg="loadingMsg"
    :label-key="labelKey"
    :value-key="valueKey"
    :show-clear="showClear"
    :close-on-selection="closeOnSelection"
    :taggable="taggable"
    :hide-tags="hideTags"
    :enforce-lowercase-new-tag="enforceLowercaseNewTag"
    :maxlength="maxlength"
    :max-items="maxItems"
    :autofocus="autofocus"
    :disabled="disabled"
    :can-search="canSearch"
    :required="required"
    :multiple="multiple"
    @open="performSearch('')"
    @input="performSearch"
    @update-selected="updateSelected"
  >
    <!-- pass through scoped slots -->
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <!-- pass through normal slots -->
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </sds-multiselect>
</template>

<script>
export default {
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    showClear: {
      type: Boolean,
      default: true
    },
    closeOnSelection: {
      type: Boolean,
      default: true
    },
    taggable: {
      type: Boolean,
      default: false
    },
    canSearch: {
      type: Boolean,
      default: true
    },
    defaultMsg: {
      type: String,
      default: 'Type to search.'
    },
    noResultsMsg: {
      type: String,
      default: 'No results found.'
    },
    loadingMsg: {
      type: String,
      default: 'Searching...'
    },
    cannotAddResultsMsg: {
      type: String,
      default: 'Maximum amount of items has been reached.'
    },
    invalidInputMsg: {
      type: String,
      default: 'HTML is not allowed.'
    },
    labelKey: {
      type: String,
      default: 'value'
    },
    valueKey: {
      type: String,
      default: 'id'
    },
    maxlength: {
      type: Number,
      default: -1
    },
    maxItems: {
      type: Number,
      default: -1
    },
    enforceLowercaseNewTag: {
      type: Boolean,
      default: false
    },
    hideTags: {
      type: Boolean,
      default: false
    },
    errorEmailMsg: {
      type: String,
      default: 'Unable to retrieve results from Base Multiselect Component.'
    },
    resource: {
      type: String,
      default: ''
    },
    query: {
      type: Function,
      default: () => ({})
    },
  },
  data () {
    return {
      search: {
        input: '',
        options: [],
        loading: false
      }
    }
  },
  
  methods: {
    updateSelected (selections) {
      this.$emit('selected', selections);
    },


    async performSearch (value) {
      this.search.loading = true;
      await this.getSearchResponse(value);
    },


    async getSearchResponse(value) {
      try {
        let data = [];
        if(this.resource === ''){
          data = this.options;
        }
        else if (this.resource === 'programming_languages') {
          let languages = await this.$store.dispatch('get_programming_languages');

          languages.forEach((element) => {
            data.push({ id: element, value: element});
          });
        } 
        else if (this.resource === 'ml_frameworks') {
          let frameworks = await this.$store.dispatch('get_ml_frameworks');

          frameworks.forEach((element) => {
            data.push({id: element, value: element});
          });
        }
        else if(this.resource === 'statistics'){
          let statistics = await this.$store.dispatch('get_statistics');

          statistics.forEach((element) => {
            data.push({id: element, value: element});
          });
        }
        else if(this.resource === 'item_type'){
          let item_types = await this.$store.dispatch('get_item_types')

          item_types.forEach((element) => {
            data.push({id: element, value: element});
          });
        }

        const filteredData = data.filter(i => i.value.toLowerCase().includes(value.toLowerCase()));
        this.search.options = filteredData;
        this.search.loading = false;
      }
      catch (e) {
        this.search.loading = false;
      }
    },
  }
}
</script>