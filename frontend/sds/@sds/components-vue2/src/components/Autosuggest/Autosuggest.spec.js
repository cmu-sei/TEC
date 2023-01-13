// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import { shallowMount } from '@vue/test-utils'
import Component from "./Autosuggest.vue";

// placeholder: {
//   type: String,
//   default: 'Search'
// },
// // The parent search function we use for search
// search: {
//   type: Function,
//   required: true,
//   default: () => ''
// },
// // The items used by autosuggest
// items: {
//   type: Array,
//   required: false,
//   default: () => []
// },
// // Determines whether our autosuggest items are static or can be dynamically changed outside of this component
// isAsync: {
//   type: Boolean,
//   required: false,
//   default: false
// },
// // The character threshold before autosuggest kicks in
// threshold: {
//   type: Number,
//   required: false,
//   default: 1
// },
// // The query passed from the parent that is used to init the local state this.q
// query: {
//   type: String,
//   required: true,
//   default: ''
// },
// // The query passed from the parent that is used to init the local state this.q
// searchParamQ: {
//   type: String,
//   required: true,
//   default: ''
// },
// // When the input is updated, this will fire off the syncInputState (see the watch section)
// inputUpdated: {
//   type: Boolean,
//   required: true,
//   default: false
// },
// // Determine whether to autofocus the input
// autofocus: {
//   type: Boolean,
//   required: false,
//   default: false
// },
// // Used to keep the local q state in sync with the parent
// syncInputState: {
//   type: Function,
//   required: true,
//   default: () => {
//     return {}
//   }
// },
// // Determines whether we are in SPA mode (used to determine which search box facets to use)
// isGlobalSearch: {
//   type: Boolean,
//   required: false,
//   default: false
// },
// useBuiltInHighlighing: {
//   type: Boolean,
//   default: false
// }

describe("AutosuggestInput.vue", () => {
  it("is a Vue instance", () => {
    const propsData = {
      search: () => "",
      query: "",
      searchParamQ: "",
      inputUpdated: false,
      syncInputState: () => {
        return {};
      },
    };
    const wrapper = shallowMount(Component, { propsData });
    expect(wrapper.vm).toBeTruthy();
  });
});
