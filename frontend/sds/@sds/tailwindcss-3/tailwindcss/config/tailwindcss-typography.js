// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003


module.exports = (theme) => ({
  DEFAULT: {
    css: {
      // regular
      '--tw-prose-body': theme("colors.gray.900"),
      '--tw-prose-headings': theme("colors.gray.800"),
      '--tw-prose-links': theme("colors.gray.700"),
      '--tw-prose-lead': theme("colors.gray.500"),
      '--tw-prose-bold': theme("colors.gray.900"),
      '--tw-prose-counters': theme("colors.gray.900"),
      '--tw-prose-bullets': theme("colors.gray.900"),
      '--tw-prose-hr': theme("colors.gray.300"),
      '--tw-prose-quotes': theme("colors.gray.900"),
      '--tw-prose-quote-borders': theme("colors.gray.300"),
      '--tw-prose-captions': theme("colors.gray.900"),
      '--tw-prose-code': theme("colors.black"),
      '--tw-prose-pre-code': theme("colors.black"),
      '--tw-prose-pre-bg': theme("colors.gray.100"),
      '--tw-prose-th-borders': theme("colors.gray.700"),
      '--tw-prose-td-borders': theme("colors.gray.200"),
      // invert
      '--tw-prose-invert-body': theme("colors.gray.100"),
      '--tw-prose-invert-headings': theme("colors.gray.200"),
      '--tw-prose-invert-links': theme("colors.gray.300"),
      '--tw-prose-invert-lead': theme("colors.gray.400"),
      '--tw-prose-invert-bold': theme("colors.gray.100"),
      '--tw-prose-invert-counters': theme("colors.gray.100"),
      '--tw-prose-invert-bullets': theme("colors.gray.100"),
      '--tw-prose-invert-hr': theme("colors.gray.700"),
      '--tw-prose-invert-quotes': theme("colors.gray.100"),
      '--tw-prose-invert-quote-borders': theme("colors.gray.700"),
      '--tw-prose-invert-captions': theme("colors.gray.100"),
      '--tw-prose-invert-code': theme("colors.white"),
      '--tw-prose-invert-pre-code': theme("colors.white"),
      '--tw-prose-invert-pre-bg': theme("colors.gray.800"),
      '--tw-prose-invert-th-borders': theme("colors.gray.300"),
      '--tw-prose-invert-td-borders': theme("colors.gray.800"),
      a: {  
        textDecoration: 'none',
      },
      'a:hover': {
        textDecoration: 'underline'
      },
      'code::before': {
        content: 'none',
      },
      'code::after': {
        content: 'none',
      },
    },
  },
  primary: {
    css: {
      '--tw-prose-links': theme("colors.blue.500"),
      '--tw-prose-invert-links': theme("colors.blue.400"),
    },
  },
  success: {
    css: {
      '--tw-prose-links': theme("colors.green.500"),
      '--tw-prose-invert-links': theme("colors.green.400"),
    },
  },
  info: {
    css: {
      '--tw-prose-links': theme("colors.teal.500"),
      '--tw-prose-invert-links': theme("colors.teal.400"),
    },
  },
  warning: {
    css: {
      '--tw-prose-links': theme("colors.orange.500"),
      '--tw-prose-invert-links': theme("colors.orange.400"),
    },
  },
  danger: {
    css: {
      '--tw-prose-links': theme("colors.red.500"),
      '--tw-prose-invert-links': theme("colors.red.400"),
    },
  },
  red: {
    css: {
      '--tw-prose-links': theme("colors.red.500"),
      '--tw-prose-invert-links': theme("colors.red.400"),
    },
  },
  orange: {
    css: {
      '--tw-prose-links': theme("colors.orange.500"),
      '--tw-prose-invert-links': theme("colors.orange.400"),
    },
  },
  yellow: {
    css: {
      '--tw-prose-links': theme("colors.yellow.500"),
      '--tw-prose-invert-links': theme("colors.yellow.400"),
    },
  },
  green: {
    css: {
      '--tw-prose-links': theme("colors.green.500"),
      '--tw-prose-invert-links': theme("colors.green.400"),
    },
  },
  teal: {
    css: {
      '--tw-prose-links': theme("colors.teal.500"),
      '--tw-prose-invert-links': theme("colors.teal.400"),
    },
  },
  blue: {
    css: {
      '--tw-prose-links': theme("colors.blue.500"),
      '--tw-prose-invert-links': theme("colors.blue.400"),
    },
  },
  indigo: {
    css: {
      '--tw-prose-links': theme("colors.indigo.500"),
      '--tw-prose-invert-links': theme("colors.indigo.400"),
    },
  },
  purple: {
    css: {
      '--tw-prose-links': theme("colors.purple.500"),
      '--tw-prose-invert-links': theme("colors.purple.400"),
    },
  },
  pink: {
    css: {
      '--tw-prose-links': theme("colors.pink.500"),
      '--tw-prose-invert-links': theme("colors.pink.400"),
    },
  },
});
