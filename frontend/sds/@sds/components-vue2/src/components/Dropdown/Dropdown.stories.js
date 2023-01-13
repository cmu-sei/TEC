// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsDropdown from './Dropdown.vue';
import SdsDropdownHeader from '../DropdownHeader';
import SdsDropdownDivider from '../DropdownDivider';
import SdsDropdownItem from '../DropdownItem';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons/Dropdowns/Dropdown/Dropdown',
  parameters: {
    docs: {
      description: {
        component: 'A dropdown displays a list of options in a temporary modal menu so that users can make a selection and complete a task such as downloading or exporting.',
      },
    },
  },
  component: SdsDropdown,
  argTypes: {
    placement: {
      options: ["auto", "left", "top", "right", "bottom", "auto-start", "auto-end", "left-start", "left-end", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end"],
      control: {type: 'select'}
    },
    strategy: {
      options: ['absolute', 'fixed'],
      control: {type: 'select'}
    },
    variant: {
      options: ['default', 'primary', 'success', 'danger', 'light'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md'],
      control: {type: 'select'}
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsDropdown, SdsDropdownItem, SdsDropdownHeader, SdsDropdownDivider },
  props: Object.keys(argTypes),
  template: `
    <div style="height: 28rem">
      <sds-dropdown
        v-bind="$props"
        v-model="localValue"
        @input="onInput"
        @btn-click="onBtnClick"
      >
        <template #title>Dropdown</template>
        <sds-dropdown-header>Dropdown header</sds-dropdown-header>
        <sds-dropdown-item tag="button" @click="onClick">Item 1</sds-dropdown-item>
        <sds-dropdown-item tag="button" @click="onClick">Item 2</sds-dropdown-item>
        <sds-dropdown-item tag="button" @click="onClick">Item 3</sds-dropdown-item>
        <sds-dropdown-divider />
        <sds-dropdown-header>Dropdown header 2</sds-dropdown-header>
        <sds-dropdown-item tag="button" @click="onClick">Item 4</sds-dropdown-item>
        <sds-dropdown-item tag="button" @click="onClick">Item 5</sds-dropdown-item>
      </sds-dropdown>
    </div>
  `,
  data() {
    return { localValue: this.$props.value }
  },
  watch: {
    value(value) {
      this.localValue = value
    }
  },
  methods: {
    onInput: action('input'),
    onBtnClick: action('btn-click'),
    onClick() {
      console.log('item clicked')
    }
  }
});

export const Default = Template.bind({});
Default.args = {
};
