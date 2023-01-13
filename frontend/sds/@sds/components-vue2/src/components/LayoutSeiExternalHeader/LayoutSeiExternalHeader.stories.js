// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsLayoutSeiExternalHeader from './LayoutSeiExternalHeader.vue';

export default {
  title: 'Layouts/Layout SEI External/Layout SEI External Header',
  parameters: {
    docs: {
      description: {
        component: 'The header for the LayoutSeiExternal layout.',
      },
    },
  },
  component: SdsLayoutSeiExternalHeader,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsLayoutSeiExternalHeader },
  props: Object.keys(argTypes),
  template: `
    <sds-layout-sei-external-header v-bind="$props"></sds-layout-sei-external-header>
  `
});

export const Default = Template.bind({});
Default.args = {
  page: {
    organization: 'Page Organization',
    title: 'Page Title',
    subtitle: 'Page Subtitle',
    description: 'Page Description',
    nav: [
      {
        title: 'Section 1',
        items: [
          { title: 'Link title 1', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 2', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 3', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 4', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 5', url: 'https://designsystem.sei.cmu.edu' },
        ],
        seeAll: {
          title: 'See All title',
          url: 'https://designsystem.sei.cmu.edu'
        }
      },
      {
        title: 'Section 2',
        items: [
          { title: 'Link title 1', url: 'https://designsystem.sei.cmu.edu' },
          { title: 'Link title 2', url: 'https://designsystem.sei.cmu.edu' },
        ]
      }
    ]
  }
};

