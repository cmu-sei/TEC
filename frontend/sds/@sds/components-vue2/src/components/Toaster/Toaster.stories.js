// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsToaster from './Toaster.vue';

export default {
  title: 'Feedback/Toaster',
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 250,
      description: {
        component: 'A toaster is a wrapper that triggers the toast component.',
      },
    },
  },
  component: SdsToaster,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsToaster },
  props: Object.keys(argTypes),
  template: `
    <div>
      <button class="btn btn-default" @click="addToast">Add Toast</button>
      <sds-toaster v-bind="$props" v-model="localValue" />
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
    addToast() {
      const index = Math.floor(Math.random() * Math.floor(4));
      const toasts = [
        {
          id: Math.random(),
          title: "Success Toast",
          text: "This is the content of this toast.",
          variant: "success",
        },
        {
          id: Math.random(),
          title: "Info Toast",
          text: "This is the content of this toast.",
          variant: "info",
        },
        {
          id: Math.random(),
          title: "Warning Toast",
          text: "This is the content of this toast.",
          variant: "warning",
        },
        {
          id: Math.random(),
          title: "Danger Toast",
          text: "This is the content of this toast.",
          variant: "danger",
          noAutoHide: true,
        },
      ];
      this.localValue.unshift(toasts[index]);
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  value: [
    {
      id: 1,
      variant: 'success',
      title: 'Success Title',
      text: 'Text of the toast. This does not auto-hide.',
      noAutoHide: true
    },
    {
      id: 2,
      variant: 'danger',
      title: 'Danger Title',
      text: 'Text of the toast This does not auto-hide.',
      noAutoHide: true
    }
  ]
};
