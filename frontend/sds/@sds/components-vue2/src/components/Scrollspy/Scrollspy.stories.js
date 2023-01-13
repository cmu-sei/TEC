// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsScrollspy from './Scrollspy.vue';

export default {
  title: 'Utility/Scrollspy',
  parameters: {
    docs: {
      description: {
        component: 'A scrollspy listens to page scrolling and trigger events based on the scroll position and allows users to smoothly navigate through different page sections.',
      },
    },
  },
  component: SdsScrollspy,
  argTypes: {}
};

const Template = (_args, { argTypes }) => ({
  components: { SdsScrollspy },
  props: Object.keys(argTypes),
  template: `
    <div>
      <sds-scrollspy v-bind="$props" class="nav-group" />
      <div id="scrollspy-parent" class="scroll-area h-96 mb-4 border p-4">
        <p
          id="scrollspy-test"
          class="text-4xl text-success"
        >
          test 1
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-2"
          class="text-4xl text-success"
        >
          test 2
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-3"
          class="text-4xl text-success"
        >
          test 3
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-4"
          class="text-4xl text-success"
        >
          test 4
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p
          id="scrollspy-test-5"
          class="text-4xl text-success"
        >
          test 5
        </p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </div>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 'scrollspy-test', text: 'Test 1' },
    { id: 'scrollspy-test-2', text: 'Test 2' },
    { id: 'scrollspy-test-3', text: 'Test 3' },
    { id: 'scrollspy-test-4', text: 'Test 4' },
    { id: 'scrollspy-test-5', text: 'Test 5' }
  ],
  parent: "#scrollspy-parent",
  itemClass: "nav nav-primary nav-underline",
  activeClass: "active"
};

