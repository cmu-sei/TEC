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
    :id="id"
    data-id="sds-radio-group"
    role="radiogroup"
    tabindex="-1"
    class="focus:outline-none"
  >
    <div
      v-for="(option, index) in options"
      :key="option.value"
      class="space-x-1"
      :class="{ 'inline-block mr-4': !stacked }"
    >
      <input
        :id="`${id}__option_${index}`"
        v-model="localChecked"
        type="radio"
        class="focus:outline-none"
        :value="option.value"
        :name="name ? name : `${id}__option`"
        :required="required"
        @click="onChange(option.value)"
      >
      <!-- @slot Label content (used to replace label element). @binding optionId, option -->
      <slot
        name="label"
        :option-id="`${id}__option_${index}`"
        :option="option"
      >
        <label
          :for="`${id}__option_${index}`"
        ><span>{{ option.text }}</span></label>
      </slot>
    </div>
  </div>
</template>

<script>
let id = 0;

export default {
  name: "SdsRadioGroup",
  props: {
    /**
     * The v-model of the radio group.
     */
    value: { type: [Boolean, String, Number, null], default: null },
    /**
     * The name of the radio form field.
     */
    name: { type: String, default: null },
    /**
     * An array of options for the radio group.
     */
    options: { type: Array, default: () => [] },
    /**
     * Determines whether the radio group is required or not.
     */
    required: { type: Boolean, default: false },
    /**
     * Determines whether the options are stacked vertically or horizontally.
     */
    stacked: { type: Boolean, default: false },
  },
  data() {
    return {
      id: "",
    };
  },
  computed: {
    localChecked: {
      get() {
        return this.value;
      },
      set(value) {
        /**
         * Emmitted when value changes.
         */
        this.$emit("input", value);
      },
    },
  },
  mounted() {
    id++;
    this.id = `sds-radio-group_${id}`;
  },
  methods: {
    onChange(value) {
      /**
       * Emitted when an option's value has changed.
       */
      this.$emit('change', value)
    }
  },
};
</script>
