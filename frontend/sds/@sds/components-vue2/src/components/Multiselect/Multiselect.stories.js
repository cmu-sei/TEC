// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsMultiselect from './Multiselect.vue';

export default {
  title: 'Inputs/Text fields/Multiselect',
  parameters: {
    docs: {
      description: {
        component: 'A multiselect is an advanced form field that allows users to search for and select one or more options or type in their own.',
      },
    },
  },
  component: SdsMultiselect,
  argTypes: {
    // size: {
    //   options: ['sm', 'md', 'lg', 'xl'],
    //   control: { type: 'select' }
    // }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsMultiselect },
  props: Object.keys(argTypes),
  template: `
    <div style="height: 28rem">
      <sds-multiselect v-bind="$props" v-model="localValue" />
    </div>
  `,
  data() {
    return { localValue: this.$props.value }
  },
  watch: {
    value(value) {
      this.localValue = value
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  selected: [
    { key: 1, value: 'Apple' },
  ],
  options: [
    { key: 1, value: 'Apple' },
    { key: 2, value: 'Banana' },
    { key: 3, value: 'Carrot' },
    { key: 4, value: 'Pineapple' },
    { key: 5, value: 'Kiwi' },
    { key: 6, value: 'Blueberry' },
    { key: 7, value: 'Strawberry' }
  ],
  showClear: true,
  multiple: true
};
