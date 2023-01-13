// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsSection from './Section.vue';

export default {
  title: 'Containers/Section',
  parameters: {
    docs: {
      description: {
        component: 'A section is a simple container that houses related content and action buttons.',
      },
    },
  },
  component: SdsSection,
  argTypes: {
    type: {
      options: ['simple', 'raised', 'accented'],
      control: { type: 'select' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsSection },
  props: Object.keys(argTypes),
  template: `
    <sds-section v-bind="$props">
      <template #title>Section title</template>
      <template #subtitle>Section subtitle</template>
      <template #nav>Section nav</template>
      Lorem ipsum dolor sit amet....
    </sds-section>
  `
});

export const Default = Template.bind({});
Default.args = {};

