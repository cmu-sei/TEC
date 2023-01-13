// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsAutosuggest from './Autosuggest.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Inputs/Autosuggest',
  parameters: {
    docs: {
      description: {
        component: 'An autosuggest is a specialized search input field that presents users with a list of options based on history, context, or the first few typed letters.',
      },
    },
  },
  component: SdsAutosuggest,
  argTypes: {
    variant: {
      options: ['default', 'primary', 'danger'],
      control: { type: 'select' }
    }
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsAutosuggest },
  props: Object.keys(argTypes),
  template: `
    <div style="height: 28rem">
      <sds-autosuggest
        v-model="localValue"
        v-bind="$props"
        :items="itemList"
        :autosuggest="onAutosuggest"
        @input="onInput"
        @search="onSearch"
        @result="onResult"
      />
    </div>
  `,
  data () {
    return {
      localValue: this.$props.value,
      itemList: [],
      fakeAjaxItems: [
        { term: "Apple", payload: "test" },
        {
          term:
            "Apple lksd kljsdflk jsdflk sdflkj sdflkj sdflk sdflkj sdflk sdflk sdflkj sdflkj sdflkj sdflkj sdflkj sdflksjd f",
          payload: "test",
        },
        { term: "Banana", payload: "test" },
        { term: "Orange", payload: "test" },
        { term: "Pineapple", payload: "test" },
        { term: "Kiwi", payload: "test" },
        { term: "Pomegranate", payload: "test" },
        { term: "Strawberry", payload: "test" },
        { term: "Raspberry", payload: "test" },
        { term: "Watermelon", payload: "test" },
        { term: "Mango", payload: "test" },
      ]
    }
  },
  watch: {
    value(value) {
      this.localValue = value
    }
  },
  methods: {
    onInput: action('input'),
    onSearch: action('search'),
    onResult: action('result'),
    onAutosuggest() {
      setTimeout(() => {
        this.itemList = this.fakeAjaxItems.filter((i) => {
          return i.term.toLowerCase().includes(this.searchText.toLowerCase());
        });
      }, 250);
    }
  }
});

export const Default = Template.bind({});
Default.args = {};
