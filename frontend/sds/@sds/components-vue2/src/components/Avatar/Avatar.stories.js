// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsAvatar from './Avatar.vue';

export default {
    title: 'Data Visualization/Avatar',
    parameters: {
        docs: {
            description: {
                component: 'Beta: An avatar is a visual component used to represent a person or entity.',
            },
        },
    },
    component: SdsAvatar,
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', 'auto'],
            control: {type: 'select'},
            description: 'Set the size of the avatar. Accepts "sm", "md" and "lg". Defaults to "md".'
        },
        variant: {
            options: ['random', 'gray', 'tan', 'yellow', 'orange', 'pink', 'red', 'purple', 'indigo', 'blue', 'teal', 'green'],
            control: {type: 'select'},
            description: 'Set the background color of the avatar when no image is present. Defaults to "random".'
        },
        shape: {
            options: ['portrait', 'circle'],
            control: {type: 'select'},
            description: 'Set the shape of the avatar. Accepts "portrait" and "circle".'
        }
    }
};

const Template = (_args, {argTypes}) => ({
    components: {SdsAvatar},
    props: Object.keys(argTypes),
    template: `
      <div class="w-36 h-36 text-6xl font-light">
      <sds-avatar v-bind="$props"/>
      </div>  `
});

export const Default = Template.bind({});
Default.args = {};
