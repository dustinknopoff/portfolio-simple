/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
if (window.matchMedia("(prefers-color-scheme: dark").matches) {
    console.log("We match dark mode")
    require("prismjs/themes/prism-solarizedlight.css")
} else {
    require("prismjs/themes/prism-tomorrow.css")
}
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
