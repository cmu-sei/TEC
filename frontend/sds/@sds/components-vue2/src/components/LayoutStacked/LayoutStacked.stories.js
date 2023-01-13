// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsLayoutStacked from './LayoutStacked.vue';

export default {
  title: 'Layouts/Layout Stacked',
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 250,
      description: {
        component: 'A simple layout that automatically adjusts to the size of the viewport.',
      },
    },
  },
  component: SdsLayoutStacked,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsLayoutStacked },
  props: Object.keys(argTypes),
  template: `
    <sds-layout-stacked v-bind="$props">
      <template #header>
        <div class="border border-dashed">
          Header area
        </div>
      </template>
      <div class="border border-dashed">
        Page area
      </div>
      <template #footer>
        <div class="border border-dashed">
          Footer area
        </div>
      </template>
    </sds-layout-stacked>
  `
});

export const Default = Template.bind({});
Default.args = {};

