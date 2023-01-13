// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsDatapoint from './Datapoint.vue';

export default {
  title: 'Data Visualization/Datapoint',
  parameters: {
    docs: {
      description: {
        component: 'A datapoint displays at-a-glance data for a user to quickly view key metrics.',
      },
    },
  },
  component: SdsDatapoint,
  argTypes: {
    variant: {
      options: ['', 'gray', 'tan', 'yellow', 'orange', 'pink', 'red', 'purple', 'indigo', 'blue', 'teal', 'green'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsDatapoint },
  props: Object.keys(argTypes),
  template: `
    <sds-datapoint v-bind="$props" />
  `
});

export const Default = Template.bind({});
Default.args = {
  value: 8675309,
  label: 'Label',
  context: 'Context'
};

