# hyperyellow

Turns [hyper](https://hyper.is/) yellow.

<img src="https://i.imgur.com/I4inaHO.png" width=500 />

## How to use

Add `hyperyellow` to `plugins` in `~/.hyper.js`.

```
  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: ["hyperyellow"],
```

When deleveoping your own theme use localplugins
```
  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: ["hyperyellow"],
```

## Creating Themes

There are two ways to edit the colors. One effects the terminal colors the other effectds the Hyper app colors.

### terminal

Only the colors array either in the Hyper config/preferences file will change the colors in the terminal itself.

These are the defaults
```
colors: {
  black: "#000000",
  red: "#C51E14",
  green: "#1DC121",
  yellow: "#C7C329",
  blue: "#0A2FC4",
  magenta: "#C839C5",
  cyan: "#20C5C6",
  white: "#C7C7C7",
  lightBlack: "#686868",
  lightRed: "#FD6F6B",
  lightGreen: "#67F86F",
  lightYellow: "#FFFA72",
  lightBlue: "#6A76FB",
  lightMagenta: "#FD7CFC",
  lightCyan: "#68FDFE",
  lightWhite: "#FFFFFF"
},
```

These are the values in this sample theme
```
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
```

Further you can set the *foregroundColor*, *backgroundColor*, *borderColor*, *cursorColor*, and *selectionColor*. You can set these values both in the Hyper config/preferences file or in your theme.

You can set them using the colors in your colors array (colors.blue), buy using hex color codes (#0000ff), or buy using the rgb/rgba function(RGBA(248, 222, 126, 0.3)). You can not override these values using CSS in Hyper themes.

When setting the *selectioncolor* it is highly recommended to use the RGBA function and use the alpha parameter. Settig the selection color to a solid color may result in your selections appearsing as solid block obscuring any selected text.

These are the defaults
```
// foregroundColor: "#fff",
// backgroundColor: "#000",
// borderColor: "#333",
cursorColor: "white",
// selectionColor: "rgba(248,28,229,0.3)",
```

These are the values form this theme
```
foregroundColor: colors.white,
backgroundColor: "#191900",
borderColor: colors.black,
cursorColor: colors.lightYellow,
selectionColor: "RGBA(248, 222, 126, 0.3)",
```

### Hyper

The second is the Hyper app itself. There is a limited number of things that can be changed outside the terminal window itself. These are modified by adding your own css to targeted items in the Hyper app.

the tabs section is where the majority of the styling for the app is available.
  The cointainers are:
  nav.tabs_nav -> the main container for the terminal tabs bar
    ul.tabs_list -> the list of all the open terminal tabs
      li.tab_tab -> a terminal tab
      li.tab_first -> the first tab
      li.tab_active -> the active tab

```
css: `
  ${config.css || ''}

  .tabs_nav {
    // you can use your color array codes in your css as well
    background-color: ${colors.white};
  }
`
```

One last note - in many cases (in Windows at least) the changes made to the theme and to the color settings in the config/preferences file are not live reloaded or affected by using the "Reload" and "Full Reload' menu options. Closing Hyper and restarting it will be required to see the modifications made.
