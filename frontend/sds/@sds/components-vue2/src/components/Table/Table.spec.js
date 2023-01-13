// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import { shallowMount } from '@vue/test-utils'
import Component from "./Table.vue";

describe("Table.vue", () => {
  it("matches snapshot with no props assigned", () => {
    const propsData = {};
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with items and action col props assigned", () => {
    const propsData = {
      items: [
        {
          id: 1,
          name: "A title",
          createdDate: new Date("2000-01-01"),
          lastUpdatedDate: new Date("2014-11-12"),
        },
        {
          id: 2,
          name: "B title",
          createdDate: new Date("2013-02-01"),
          lastUpdatedDate: new Date("2013-10-10"),
        },
      ],
      sortBy: "lastUpdatedDate",
      fields: [
        { key: "name", label: "Title", sortable: true },
        { key: "createdDate", label: "Created", sortable: true, format: (date) => date.toLocaleDateString() },
        {
          key: "lastUpdatedDate",
          label: "Last modified",
          sortable: true, format: (date) => date.toLocaleDateString()
        },
      ],
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot with entries but no action col props assigned", () => {
    const propsData = {
      items: [
        {
          id: 1,
          name: "A title",
          createdDate: new Date("2000-01-01"),
          lastUpdatedDate: new Date("2014-11-12"),
        },
        {
          id: 2,
          name: "B title",
          createdDate: new Date("2013-02-01"),
          lastUpdatedDate: new Date("2013-10-10"),
        },
      ],
      fields: [
        { key: "name", label: "Title", sortable: true },
        { key: "createdDate", label: "Created", sortable: true, format: (date) => date.toLocaleDateString() },
        {
          key: "lastUpdatedDate",
          label: "Last modified",
          sortable: true, format: (date) => date.toLocaleDateString()
        },
        { key: "actions", label: "Actions" }
      ]
    };
    const scopedSlots = {
      'cell(actions)': `
        <template #cell(actions)="{item}">
          <button
            class="btn btn-link text-red-300 btn-sm"
            @click="remove(entry)"
          >
            <i class="fas fa-trash"></i>
            Remove entry
          </button>
        </template>
      `,
    };
    const wrapper = shallowMount(Component, { propsData, scopedSlots });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
