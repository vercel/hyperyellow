/*
*** THESE SETTINGS ARE NOT LIVE UPDATED  ***

Hyper must be stopped and restarted to see the new values.
Using the "Reload" and "Full Reload" menu options does not refresh these values

*/

/* The const colors array here or in the hyper config file
   are the only way to set colors for the terminal itself. */
const colors = {
  black: "#191900",
  red: "#FDA50F",
  green: "#A6AF7A",
  yellow: "#FCE205",
  blue: "#428BFF",
  magenta: "#6D3580",
  cyan: "#8EBAFF",
  white: "#FFFFE0",
  lightBlack: "#C3B091",
  lightRed: "#FFBF00",
  lightGreen: "#EFFD5F",
  lightYellow: "#F8DE7E",
  lightBlue: "#A4C7FF",
  lightMagenta: "#DABDE4",
  lightCyan: "#8ED6FF",
  lightWhite: "#F1F1DC"
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    /* load your color array from above */
    colors,

    /* set the text color and backgorund color
       css color and background-color will not
       override these values */
    /* you can use your colors form your colrs array */
    foregroundColor: colors.white,
    backgroundColor: "#191900",

    /* while you can set bordercolor of various frames in css
       borderColor here will take precidence unless !important
       is used to over ride it */
    borderColor: colors.black,

    /* sets the color of the cursor
       you can not set this is css */
    cursorColor: colors.lightYellow,

    /* it is important to use the rgba(rrr,ggg,bbb,opacity) format
       if you set a color without opacity your selections may
       hide text in selections */
    selectionColor: "RGBA(248, 222, 126, 0.3)",

    /* the css section allows you to set colors and styles of various
       components of hyper, but does not allow direct styling of the terminal
       ONLY the colors collection above or in the configuration file
       will affect the terminal colors */
    css: `
      ${config.css || ''}

      /* the tabs section is where the majority of the styling for the app is available.
         The cointainers are:
         nav.tabs_nav -> the main container for the terminal tabs bar
             ul.tabs_list -> the list of all the open terminal tabs
                 li.tab_tab -> a terminal tab
                 li.tab_first -> the first tab
                 li.tab_active -> the active tab */

      .tabs_nav {
        // you can use your color array codes in your css as well
        background-color: ${colors.white};
      }

      .tab_tab {
        font-style: italic;
        color: ${colors.black};
      }

      .tab_active {
        background-color: ${colors.black};
        color: ${colors.white};
        font-style: normal;
        font-weight: bold;
      }

      /* the terminal section is where the terminals live but not a lot of styling is available
         The cointainers are:
         .terms_terms -> the main container for the terminals
             .terms_termGroup .terms_termGroupActive
                 .term_fit term_active -> target here to set the padding for the terminal (default is padding: 12px 14px;)
                     .term_wrapper
                         .term_term */
     .term_fit.term_active {
       padding: 10px 16px !important;
     }
    `
  });
}
