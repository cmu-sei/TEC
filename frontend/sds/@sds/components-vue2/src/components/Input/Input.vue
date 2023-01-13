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
  <div>
    <input
      v-model="text"
      data-id="sds-input"
      class="form-control"
      :class="{ valid, invalid }"
      :type="type"
      :maxlength="maxlength"
      :placeholder="placeholder !== '' ? placeholder : false"
      :autofocus="autofocus"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
    >
    <character-counter
      v-if="countCharacters"
      class="text-right text-gray-500"
      :current-value="text.length"
      :max-value="maxlength"
    />
  </div>
</template>

<script>
import CharacterCounter from '../CharacterCounter/CharacterCounter.vue'

export default {
  name: 'SdsInput',
  components: {
    CharacterCounter,
  },
  props: {
    /**
     * The v-model of the component (the text input).
     */
    value: { type: String, default: "" },
    /**
     * Determines whether to display the character counter or not.
     */
    countCharacters: { type: Boolean, default: false },
    /**
     * Determines the maxlength of the component.
     */
    maxlength: { type: Number, default: 524288 },
    /**
     * Determines the placeholder of the component.
     */
    placeholder: { type: String, default: "" },
    /**
     * Determines the type of the input field.
     */
    type: { type: String, default: "text" },
    /**
     * Determines whether to autofocus the input or not.
     */
    autofocus: { type: Boolean, default: false },
    /**
     * Disables the component to prevent user interaction.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Determines whether the input is required or not.
     */
    required: { type: Boolean, default: false },
    /**
     * Determines whether the input is read-only or not.
     */
    readonly: { type: Boolean, default: false },
    /**
     * Sets a valid styling if true.
     */
    valid: { type: Boolean, default: false },
    /**
     * Sets an invalid styling if true.
     */
    invalid: { type: Boolean, default: false },
  },
  computed: {
    text: {
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
};
</script>
