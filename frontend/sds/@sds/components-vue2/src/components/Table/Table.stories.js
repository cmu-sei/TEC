// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsTable from './Table.vue';

export default {
  title: 'Data Visualization/Table',
  parameters: {
    docs: {
      description: {
        component: 'A table shows information in columns and rows and can be sorted by the column.',
      },
    },
  },
  component: SdsTable,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsTable },
  props: Object.keys(argTypes),
  template: `
    <sds-table v-bind="$props" class="table-prose">
      <template #cell(title)="{ item, value, format }">
        <p>{{ value }}</p>
        <p class="text-sm text-gray-500">
          ID: {{ item.id }} was created on {{ format('createdDate') }}
        </p>
      </template>
      <template #cell(actions)="{ item }">
        <button @click="edit(item.id)">Edit</button>
      </template>
    </sds-table>
  `,
  methods: {
    edit (id) {
      console.log(id)
    }
  }
});

export const Default = Template.bind({});
Default.args = {
  fields: [
    { key: "id", label: 'ID', header: true },
    { key: "title", label: 'Title', sortable: true },
    { key: "lastDelivered", label: 'Last Delivered', sortable: true, format: (date) => date.toLocaleDateString() },
    { key: "createdDate", label: 'Created Date', hidden: true, format: (date) => date.toLocaleDateString()  },
    { key: 'actions', label: 'Actions' }
  ],
  items: [
    { id: 1, title: "Apple", lastDelivered: new Date("01/01/2019"), createdDate: new Date("02/23/2009") },
    { id: 2, title: "Banana", lastDelivered: new Date("10/01/2020"), createdDate: new Date("05/13/2010") },
    { id: 3, title: "Cantaloupe", lastDelivered: new Date("12/01/2020"), createdDate: new Date("01/13/2012") },
    { id: 4, title: "Durian", lastDelivered: new Date("02/01/2021"), createdDate: new Date("12/09/2013") },
    { id: 5, title: "Elderberry", lastDelivered: new Date("01/01/2019"), createdDate: new Date("04/10/2017") },
  ],
  sortBy: 'lastDelivered',
  sortDesc: true
};

