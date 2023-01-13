// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003
 
 
import SdsFileUploader from './FileUploader.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Inputs/File Uploader',
  parameters: {
    docs: {
      description: {
        component: 'A file uploader allows users to select one or more files to upload to a specific location.',
      },
    },
  },
  component: SdsFileUploader,
  argTypes: {
  }
};

const Template = (_args, { argTypes }) => ({
  components: { SdsFileUploader },
  props: Object.keys(argTypes),
  template: `
    <sds-file-uploader v-bind="$props" @add="onAdd" @remove="onRemove" @remove-invalid="onRemoveInvalid" />
  `,
  methods: {
    onAdd: action('onAdd'),
    onRemove: action('onRemove'),
    onRemoveInvalid: action('onRemoveInvalid'),
  }
});

export const Default = Template.bind({});
Default.args = {
  accept: ".jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx, .csv, .json",
  helperText: "Use a JSON, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX or CSV under 1MB.",
  allowedFiletypes: [
    'image/jpeg',
    'image/png',
    'text/csv',
    'application/json',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ],
  filesize: 1,
  multiple: true
};
