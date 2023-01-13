// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsModal from './Modal.vue';

export default {
  title: 'Containers/Modal',
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 300,
      description: {
        component: 'A modal is an overlay component displayed on top of the page content to help focus users\' attention to a single task or message.',
      },
    },
  },
  component: SdsModal,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsModal },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p class="mb-4">Use the button below to toggle the modal.</p>
      <button class="btn btn-primary" @click="localValue = !localValue">Toggle Modal</button>
      <sds-modal v-model="localValue" v-bind="$props">
        <template #title>
          Modal title
        </template>
        <p>Modal copy goes here</p>
        <template #footer>
          Modal footer
        </template>
      </sds-modal>
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
};

