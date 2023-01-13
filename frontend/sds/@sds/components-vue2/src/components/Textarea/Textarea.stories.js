// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsTextarea from './Textarea.vue';

export default {
  title: 'Inputs/Text fields/Textarea',
  parameters: {
    docs: {
      description: {
        component: 'A textarea is a large input field that allows users to enter a freeform response spanning multiple lines.',
      },
    },
  },
  component: SdsTextarea,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsTextarea },
  props: Object.keys(argTypes),
  template: `
    <sds-textarea v-bind="$props" v-model="localValue" />
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
Default.args = {};

