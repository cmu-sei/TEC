// TEC - Automated Mismatch Detection Tool
// Copyright 2023 Carnegie Mellon University.
// NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
// Released under a BSD (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
// [DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
// This Software was created using the SEI Design System and includes and/or makes use of Third-Party Software subject to its own license.
// DM23-003


const colors = require("./config/tailwindcss-colors");

module.exports = {
  // use tailwind's official dark mode
  darkMode: "class",
  // important set to true so the
  // @tailwindcss/typography plugin
  // can be overridden with utility
  // classes
  important: true,
  theme: {
    // sei design theme settings
    colors,
    extend: {
      fontFamily: require("./config/tailwindcss-font-family"),
      typography: require("./config/tailwindcss-typography"),
      spacing: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
        288: "72rem",
        320: "80rem",
        384: "96rem",
      },
      colors: {
        primary: colors.blue[500],
        secondary: colors.gray[700],
        tertiary: colors.gray[500],
        success: colors.green[500],
        info: colors.teal[500],
        warning: colors.orange[500],
        danger: colors.red[500],
        light: colors.gray[100],
        dark: colors.gray[900],
      },
    },
  },
  safelist: [
    {
      pattern: /col-start-(1|2|3|4|5|6|7)/,
    },
  ],
  plugins: [
    // sei design system plugins
    require("./plugins/btn"),
    require("./plugins/form-control"),
    require("./plugins/input-group"),
    require("./plugins/link"),
    require("./plugins/nav"),
    require("./plugins/tab"),
    require("./plugins/table-prose"),
    require("./plugins/scroll-area"),
    require("./plugins/word-break-word"),
    // official tailwindcss plugins
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
