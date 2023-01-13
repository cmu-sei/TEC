// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003


const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {
    ".table-prose": {
      width: '100%',
      tableLayout: 'auto',
      textAlign: 'left',
      // regular
      '--table-prose-thead-border-color': theme('colors.gray.700'),
      '--table-prose-thead-th-color': theme('colors.gray.800'),
      '--table-prose-tbody-tr-border-color': theme('colors.gray.200'),
      // invert
      '--table-prose-thead-border-invert-color': theme('colors.gray.300'),
      '--table-prose-thead-th-invert-color': theme('colors.gray.200'),
      '--table-prose-tbody-tr-border-invert-color': theme('colors.gray.800'),
    },
    ".table-prose thead": {
      borderBottomWidth: '1px',
      borderBottomColor: 'var(--table-prose-thead-border-color)',
    },
    '.table-prose thead th': {
      color: 'var(--table-prose-thead-th-color)',
      fontWeight: theme('fontWeight.bold'),
      fontSize: theme('fontSize.sm'),
      verticalAlign: 'bottom',
      padding: theme('padding.2'),
      position: 'relative',
      userSelect: 'none',
    },
    '.table-prose tbody tr': {
      borderBottomWidth: '1px',
      borderBottomColor: 'var(--table-prose-tbody-tr-border-color)',
    },
    '.table-prose tbody tr:last-child': {
      borderBottomWidth: '0',
    },
    '.table-prose tbody td': {
      verticalAlign: 'top',
      padding: theme('padding.2'),
      position: 'relative',
    },
    // lg
    '.table-prose-lg thead th': {
      fontSize: theme('fontSize.base'),
      padding: theme('padding.4'),
    },
    '.table-prose-lg tbody td': {
      padding: theme('padding.4'),
    },
    // invert
    ".table-prose-invert thead": {
      borderBottomColor: 'var(--table-prose-thead-border-invert-color)',
    },
    '.table-prose-invert thead th': {
      color: 'var(--table-prose-thead-th-invert-color)',
    },
    '.table-prose-invert tbody tr': {
      borderBottomColor: 'var(--table-prose-tbody-tr-border-invert-color)',
    },
  };

  addUtilities(newUtilities, ['dark', 'responsive']);
});
