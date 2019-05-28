/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
if (window.matchMedia("(prefers-color-scheme: dark)")) {
    require("prismjs/themes/prism-tomorrow.css")
} else {
    require("prismjs/themes/prism-solarizedlight.css")
}
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
