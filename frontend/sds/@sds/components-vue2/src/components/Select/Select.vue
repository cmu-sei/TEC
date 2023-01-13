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
  <select
    v-model="localValue"
    data-id="sds-select"
    :disabled="disabled"
    :readonly="readonly"
    class="form-control"
    :class="{ 'form-control-sm': size === 'sm' }"
  >
    <option
      disabled
      value=""
    />
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.value"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SdsSelect',
  props: {
    /**
     * The v-model of the component.
     */
    value: { type: [Boolean, String, Number, Array, Object], default: null },
    /**
     * The options for the component.
     * 
     * Expects: `{ id, value, text }`
     */
    options: { type: Array, default: () => [] },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Determines if the component is read-only.
     */
    readonly: { type: Boolean, default: false },
    /**
     * Determines the size of the component.
     */
    size: { type: String, default: 'md' },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(value) {
        /**
         * Emitted when value changes.
         */
        this.$emit("input", value);
      }
    }
  }
})
</script>