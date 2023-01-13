// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsTopFiveChart from './TopFiveChart.vue';

export default {
  title: 'Data Visualization/Top Five Chart',
  parameters: {
    docs: {
      description: {
        component: 'A top five chart visualizes the top five results as proportional horizontal rectangular blocks. ',
      },
    },
  },
  component: SdsTopFiveChart,
  argTypes: {
    progressColor: {
      options: ['red', 'green', 'orange', 'blue', 'teal', 'purple', 'indigo', 'pink', 'gray'],
      type: 'select'
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsTopFiveChart },
  props: Object.keys(argTypes),
  template: `
    <sds-top-five-chart v-bind="$props" />
  `
});

export const Default = Template.bind({});
Default.args = {
  title: 'Chart title',
  entries: [
    { id: 1, title: "Item 1", url: "https://designsystem.sei.cmu.edu", count: 100 },
    { id: 2, title: "Item 2", url: "https://designsystem.sei.cmu.edu", count: 80 },
    { id: 3, title: "Item 3", url: "https://designsystem.sei.cmu.edu", count: 40 },
    { id: 4, title: "Item 4", url: "https://designsystem.sei.cmu.edu", count: 32 },
    { id: 5, title: "Item 5", url: "https://designsystem.sei.cmu.edu", count: 20 },
  ],
  viewAllUrl: 'https://designsystem.sei.cmu.edu'
};

