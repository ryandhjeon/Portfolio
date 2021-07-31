/** @jsx jsx */
import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import github from "typography-theme-github"

github.baseFontSize = '18px'
github.bodyFontFamily = ['Raleway', 'Roboto Condensed', 'IBM Plex Sans Condensed', 'sans-serif']
github.baseLineHeight = 1.6
github.plugins = [
  new CodePlugin(),
]

github.overrideThemeStyles = () => ({

})

const typography = new Typography(github)

export default typography