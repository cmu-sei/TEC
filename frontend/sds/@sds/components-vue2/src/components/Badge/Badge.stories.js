// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsBadge from './Badge.vue';

export default {
  title: 'Data Visualization/Badge',
  parameters: {
    docs: {
      description: {
        component: 'A badge is a visual indicator used to label, organize, or categorize an item for quick recognition.',
      },
    },
  },
  component: SdsBadge,
  argTypes: {
    variant: {
      options: ['gray', 'tan', 'yellow', 'orange', 'pink', 'red', 'purple', 'indigo', 'blue', 'teal', 'green'],
      control: { type: 'select' }
    },
    type: {
      options: ['light-border', 'light', 'medium', 'dark'],
      control: { type: 'select' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsBadge },
  props: Object.keys(argTypes),
  template: `
    <sds-badge v-bind="$props">Badge</sds-badge>
  `
});

export const Default = Template.bind({});
Default.args = {};

