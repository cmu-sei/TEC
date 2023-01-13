// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsFilterByDropdown from './FilterByDropdown.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons/Dropdowns/Filter by Dropdown',
  parameters: {
    docs: {
      description: {
        component: 'A specialized dropdown that includes a list of checkbox options to allow users to filter a data set.',
      },
    },
  },
  component: SdsFilterByDropdown,
  argTypes: {
    placement: {
      options: ["auto", "left", "top", "right", "bottom", "auto-start", "auto-end", "left-start", "left-end", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end"],
      control: {type: 'select'}
    },
    variant: {
      options: ['', 'primary', 'secondary'],
      control: { type: 'select' }
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsFilterByDropdown },
  props: Object.keys(argTypes),
  template: `
    <div style="height: 28rem">
      <sds-filter-by-dropdown
        v-model="localValue"
        v-bind="$props"
        @input="onInput"
      />
    </div>
  `,
  data() {
    return {
      localValue: this.$props.value
    }
  },
  watch: {
    value(value) {
      this.localValue = value
    }
  },
  methods: {
    onInput: action('input')
  }
});

export const Default = Template.bind({});
Default.args = {
  value: [
    { id: 1, text: "Option 1", selected: false },
    { id: 2, text: "Option 2", selected: false },
    { id: 3, text: "Option 3", selected: false },
    { id: 4, text: "Option 4", selected: false },
    { id: 5, text: "Option 5", selected: false },
    { id: 6, text: "Option 6", selected: false },
    { id: 7, text: "Option 7", selected: false },
    { id: 8, text: "Option 8", selected: false },
    { id: 9, text: "Option 9", selected: false },
    { id: 10, text: "Option 10", selected: false },
    { id: 11, text: "Option 11", selected: false },
    { id: 12, text: "Option 12", selected: false },
    { id: 13, text: "Option 13", selected: false },
    { id: 14, text: "Option 14", selected: false },
    { id: 15, text: "Option 15", selected: false },
    { id: 16, text: "Option 16", selected: false },
    { id: 17, text: "Option 17", selected: false },
    { id: 18, text: "Option 18", selected: false },
    { id: 19, text: "Option 19", selected: false },
    { id: 20, text: "Option 20", selected: false },
  ]
};

