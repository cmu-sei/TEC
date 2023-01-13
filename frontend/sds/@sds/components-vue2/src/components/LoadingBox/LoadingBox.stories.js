// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsLoadingBox from './LoadingBox.vue';

export default {
  title: 'Feedback/Loading Box',
  parameters: {
    docs: {
      description: {
        component: 'A loading box assures users that their request is in progress, helping to create the illusion of shorter load times.',
      },
    },
  },
  component: SdsLoadingBox,
  argTypes: {
    width: {
      options: ['w-1/2','w-1/3', 'w-2/3', 'w-1/5', 'w-2/5','w-3/5', 'w-4/5', 'w-full'],
      control: { type: 'select' },
      description :'Set the width of the box. Accepts tailwind width classes.'
    },
    height: {
      options: ['h-2','h-4', 'h-8','h-16','h-32', 'h-48', 'h-64', 'h-72', 'h-full', 'h-screen'],
      control: { type: 'select' },
      description :'Set the height of the box. Accepts tailwind height classes.'
    },
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsLoadingBox },
  props: Object.keys(argTypes),
  template: `
    <div class="w-1/2 h-64">
    <sds-loading-box v-bind="$props" />
    </div>  `
});

export const Default = Template.bind({});
Default.args = {};
