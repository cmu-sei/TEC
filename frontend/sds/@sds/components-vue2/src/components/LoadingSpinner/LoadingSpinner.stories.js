// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsLoadingSpinner from './LoadingSpinner.vue';
import SdsButton from '../Button/Button.vue';

export default {
  title: 'Feedback/Loading Spinner',
  parameters: {
    docs: {
      description: {
        component: 'A loading spinner is an animated spinning icon that lets users know their action is being processed or that content is loading.',
      },
    },
  },
  component: SdsLoadingSpinner,
  argTypes: {
    size: {
      options: ['sm','md', 'lg', 'auto'],
      control: { type: 'select' },
      description :'Set the size of the spinner.'
    },
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsLoadingSpinner },
  props: Object.keys(argTypes),
  template: `
    <sds-loading-spinner v-bind="$props" />
  `
});

export const Default = Template.bind({});
Default.args = {};

const InsideButtonTemplate = (_args, { argTypes }) => ({
  components: { SdsLoadingSpinner, SdsButton },
  props: Object.keys(argTypes),
  template: `
    <sds-button variant="primary" class="flex gap-2">
      Button Text
      <sds-loading-spinner v-bind="$props" class="my-auto" />
    </sds-button>
  `
});

export const InsideButton = InsideButtonTemplate.bind({});
InsideButton.args = {
  size: 'sm'
};
