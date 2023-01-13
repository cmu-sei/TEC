// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsScrollArea from './ScrollArea.vue';

export default {
  title: 'Utility/Scroll Area',
  parameters: {
    docs: {
      description: {
        component: 'A scroll area is a wrapper that provides a visible scroll bar and enables users to scroll through content that exceeds the size of the frame.',
      },
    },
  },
  component: SdsScrollArea,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsScrollArea },
  props: Object.keys(argTypes),
  template: `
    <sds-scroll-area v-bind="$props" class="h-64 w-32">
      <div class="h-96">Sample text</div>
    </sds-scroll-area>
  `
});

export const Default = Template.bind({});
Default.args = {};

