// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsLayoutSeiExternal from './LayoutSeiExternal.vue';

export default {
  title: 'Layouts/Layout SEI External/Layout SEI External',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A highly structured layout for external-facing sites that includes a branded header, a fat footer, a navigation area and page sections.',
      },
    },
  },
  component: SdsLayoutSeiExternal,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsLayoutSeiExternal },
  props: Object.keys(argTypes),
  template: `
    <sds-layout-sei-external v-bind="$props">
      Page content
    </sds-layout-sei-external>
  `
});

export const Default = Template.bind({});
Default.args = {
  showMasthead: true,
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

