// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsPopover from './Popover.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Utility/Popover',
  parameters: {
    docs: {
      description: {
        component: 'A popover is a delayed hover component that offers additional information about a piece of content and can have an actionable component such as a button or link in it.',
      },
    },
  },
  component: SdsPopover,
  argTypes: {
    placement: {
      options: ["auto", "left", "top", "right", "bottom", "auto-start", "auto-end", "left-start", "left-end", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end"],
      control: {type: 'select'}
    },
    strategy: {
      options: ['absolute', 'fixed'],
      control: {type: 'select'}
    },
    size: {
      options: ['sm', 'lg', 'auto'],
      control: {type: 'select'}
    },
    zIndex: {
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      control: {type: 'select'}
    }
  }
}

const Template = (_args, { argTypes }) => ({
  components: { SdsPopover},
  props: Object.keys(argTypes),
  template: `
    <div class="p-48 text-center">
      <sds-popover v-model="localValue" v-bind="$props" @open="onOpen" @close="onClose" @before-open="onBeforeOpen" @before-close="onBeforeClose">
        <template #trigger>
          <button class="btn btn-default" @click="onClick">I have a popover</button>
        </template>
        <template #default="{ close }">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-xl leading-6 font-medium text-dark">
                Holiday Party
              </h3>
              <p class="mt-2 text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum maximus blandit.
              </p>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button type="button" class="btn btn-primary ml-2 text-sm">
             View Details
            </button>
            <button type="button" class="btn btn-default text-sm" @click="close">
              Cancel
            </button>
          </div>
        </template>
      </sds-popover>
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

