// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsDatepicker from './Datepicker.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Date & Time/Datepicker',
  parameters: {
    docs: {
      description: {
        component: 'A date picker is a text input field that displays a calendar to allow users to select past, present, or future dates or times.',
      },
    },
  },
  component: SdsDatepicker,
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    },
    mode: {
      options: ['date', 'dateTime', 'time'],
      control: { type: 'select' }
    },
    value: { control: { type: 'date' } },
    min: { control: { type: 'date' } },
    max: { control: { type: 'date' } },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsDatepicker },
  props: Object.keys(argTypes),
  template: `
    <div class="py-96">
      <sds-datepicker
        v-model="localValue"
        min.sync="parentMin"
        max.sync="parentMax"
        v-bind="$props"
        @input="onInput"
        @update:min="onUpdateMin"
        @update:max="onUpdateMax"
      />
    </div>
  `,
  data() {
    return {
      localValue: this.$props.value,
      parentMin: null,
      parentMax: null
    }
  },
  watch: {
    value(value) {
      this.localValue = value
    }
  },
  methods: {
    onInput: action('input'),
    onUpdateMin: action('update:min'),
    onUpdateMax: action('update:max'),
  }
});

export const Default = Template.bind({});
Default.args = {
  value: new Date('02-06-2022'),
  min: new Date('02-03-2022'),
  max: new Date('03-18-2022')
};

export const Range = Template.bind({});
Range.args = {
  mode: 'dateTime',
  value: { start: new Date('02-09-2022'), end: new Date('03-05-2022') },
  min: new Date('02-03-2022'),
  max: new Date('03-18-2022')
};