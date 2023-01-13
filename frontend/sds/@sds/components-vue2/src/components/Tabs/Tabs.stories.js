// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsTabs from './Tabs.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Navigation/Tabs',
  parameters: {
    docs: {
      description: {
        component: 'Tabs provide navigation between sets of content on a page.',
      },
    },
  },
  component: SdsTabs,
  argTypes: {
    type: {
      options: ['folder', 'underline', 'block'],
      control: { type: 'select' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsTabs },
  props: Object.keys(argTypes),
  template: `
    <sds-tabs
      v-model="localValue"
      v-bind="$props"
      @change="onChange"
      @input="onInput"
    >
      <template #tab(tab4)>
        Tab 4
      </template>
      <template #panel(tab1)>
        <div class="p-4">
          This is the content for tab 1.
        </div>
      </template>
      <template #panel(tab2)>
        <div class="p-4">
          This is the content for tab 2.
        </div>
      </template>
      <template #panel(tab3)>
        <div class="p-4">
          This is the content for tab 3.
        </div>
      </template>
      <template #panel(tab4)>
        <div class="p-4">
          This is the content for tab 4.
        </div>
      </template>
      <template #panel(tab5)>
        <div class="p-4">
          This is the content for tab 5.
        </div>
      </template>
    </sds-tabs>
  `,
  data() {
    return { localValue: this.$props.value }
  },
  watch: {
    modelValue(value) {
      this.localValue = value
    }
  },
  methods: {
    onChange: action('onChange'),
    onInput: action('onInput')
  }
});

export const Default = Template.bind({});
Default.args = {
  value: [
    { key: 'tab1', title: 'Tab 1', disabled: true },
    { key: 'tab2', title: 'Tab 2', active: true },
    { key: 'tab3', title: 'Tab 3' },
    { key: 'tab4' },
    { key: 'tab5', title: 'Tab 5', href: '/internal-link' },
  ]
};

