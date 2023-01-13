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
    ".scroll-area": {
      "@apply overflow-auto": {},
    },

    ".scroll-area-x": {
      "@apply overflow-x-auto": {},
    },

    ".scroll-area-y": {
      "@apply overflow-y-auto": {},
    },

    ".scroll-area, .scroll-area-x, .scroll-area-y": {
      paddingRight: "8px",

      "&:hover": {
        paddingRight: "5px",
      },

      "&::-webkit-scrollbar": {
        width: "6px"
      },

      "&:hover::-webkit-scrollbar": {
        width: "9px",
      },

      "&::-webkit-scrollbar-track": {
        "@apply bg-gray-200 dark:bg-gray-800 rounded": {},
      },

      "&::-webkit-scrollbar-thumb": {
        "@apply bg-gray-400 dark:bg-gray-600 rounded": {},
      },

      "&:hover::-webkit-scrollbar-thumb": {
        "@apply bg-gray-500": {},
      }
    },
  };

  addComponents(components);
});
