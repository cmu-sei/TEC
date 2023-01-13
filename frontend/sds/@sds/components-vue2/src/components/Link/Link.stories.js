// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsLink from './Link.vue';

export default {
  title: 'Navigation/Link',
  parameters: {
    docs: {
      description: {
        component: 'A link is a textual navigation element that directs users to a different location on the page or site.',
      },
    },
  },
  component: SdsLink,
  argTypes: {
    variant: {
      options: ['', 'primary', 'secondary', 'tertiary', 'danger', 'light', 'dark'],
      control: { type: 'select' }
    },
    cta: {
      options: [true, false],
      control: { type: 'radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsLink },
  props: Object.keys(argTypes),
  template: `
    <sds-link
      href="#"
      v-bind="$props"
    >
      Example link
    </sds-link>
  `
});

export const Default = Template.bind({});
Default.args = {
  variant: 'primary'
};

