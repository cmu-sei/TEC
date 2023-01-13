// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003


const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const components = {
    ".form-control": {
      "@apply min-w-0 border-gray-500 shadow-inner text-gray-900 bg-white bg-opacity-75 border-opacity-75 rounded w-full focus:ring-2 focus:ring-blue-300 dark:text-gray-100 dark:bg-opacity-10 dark:focus:ring-blue-700": {},

      "&.form-control-sm": {
        "@apply py-1 px-2 text-sm": {},
      },

      "&::placeholder": {
        "@apply italic": {},
      },

      "&[readonly], &:disabled": {
        "@apply opacity-50 pointer-events-none": {},
      },

      "&.valid": {
        "@apply border-success": {}
      },

      "&.invalid": {
        "@apply border-danger": {}
      }
    },

    "select:not([multiple]).form-control option": {
      "@apply text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-700": {},
    },

    "select:not([multiple]).form-control-sm": {
      "@apply pr-5 bg-right": {},
    },
  };

  addComponents(components);
});
