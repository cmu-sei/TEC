// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsButton from './Button.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons/Button',
  parameters: {
    docs: {
      description: {
        component: 'A button allows users to take action or make a choice with a single tap.',
      },
    },
  },
  component: SdsButton,
  argTypes: {
    variant: {
      options: ['', 'default', 'primary', 'success', 'danger', 'light'],
      control: { type: 'select' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsButton },
  props: Object.keys(argTypes),
  template: `
    <sds-button
      v-bind="$props"
      @click="onClick"
    >
      Button
    </sds-button>
  `,
  methods: {
    onClick: action('onClick')
  }
});

export const Default = Template.bind({});
Default.args = {
  variant: 'default'
};

