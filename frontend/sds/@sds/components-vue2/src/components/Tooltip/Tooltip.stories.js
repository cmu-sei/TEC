// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsTooltip from './Tooltip.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Utility/Tooltip',
  parameters: {
    docs: {
      description: {
        component: 'A tooltip is a hover component that can clarify a piece of content for users.',
      },
    },
  },
  component: SdsTooltip,
  argTypes: {
    placement: {
      options: ["auto", "left", "top", "right", "bottom", "auto-start", "auto-end", "left-start", "left-end", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end"],
      control: { type: 'select' }
    },
    strategy: {
      options: ['absolute', 'fixed'],
      control: {type: 'select'}
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl', 'auto'],
      control: { type: 'select' }
    },
    variant: {
      options: ['dark', 'light'],
      control: {type: 'select'}
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
}

const Template = (_args, { argTypes }) => ({
  components: { SdsTooltip },
  props: Object.keys(argTypes),
  template: `
    <div class="p-48">
      <sds-tooltip v-model="localValue" v-bind="$props" @open="onOpen" @close="onClose" @before-open="onBeforeOpen" @before-close="onBeforeClose">
        <template #trigger>
          <button class="btn btn-default" @click="onClick">I have a tooltip</button>
        </template>
        <p>Lorem ipsum dolor.</p>
      </sds-tooltip>
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
    onOpen: action('open'),
    onClose: action('close'),
    onBeforeOpen: action('before-open'),
    onBeforeClose: action('before-close'),
    onClick: action('onClick')
  }
});

export const Default = Template.bind({});
Default.args = {};

