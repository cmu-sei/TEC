// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsToggleSwitch from './ToggleSwitch.vue';

export default {
  title: 'Inputs/Toggle Switch',
  parameters: {
    docs: {
      description: {
        component: 'A toggle switch is a component that allows users to turn a system state on or off, which will trigger a change across the entire application.',
      },
    },
  },
  component: SdsToggleSwitch,
  argTypes: {
    variant: {
      options: ['primary', 'danger'],
      control: {type: 'select'}
    }
  }
};

const Template = (_args, {argTypes}) => ({
  components: {SdsToggleSwitch},
  props: Object.keys(argTypes),
  template: ` <sds-toggle-switch v-model="localValue" v-bind="$props"/> `,
  data() {
    return { localValue: this.$props.value }
  },
  watch: {
    value(value) {
      this.localValue = value
    }
  },
});

export const Default = Template.bind({});
Default.args = {};

