// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsCalendar from './Calendar.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Date & Time/Calendar',
  parameters: {
    docs: {
      description: {
        component: 'A calendar displays a calendar grid to show users the full month or a range of two months. ',
      },
    },
  },
  component: SdsCalendar,
  argTypes: {
    mode: {
      options: ['date', 'dateTime', 'time'],
      control: { type: 'select' }
    },
    min: { control: { type: 'date' } },
    max: { control: { type: 'date' } }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsCalendar },
  props: Object.keys(argTypes),
  template: `
    <sds-calendar v-bind="$props" />
  `
});

export const Default = Template.bind({});
Default.args = {
  value: new Date('02-06-2022'),
  min: new Date('02-03-2022'),
  max: new Date('03-18-2022')
};

export const Range = Template.bind({});
Range.args = {
  mode: 'dateTime',
  value: { start: new Date('02-09-2022'), end: new Date('03-05-2022') },
  min: new Date('02-03-2022'),
  max: new Date('03-18-2022')
};