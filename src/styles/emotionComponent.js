/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const button = css`
  color: red;
  background-color: black;
  border: 1px;
`

const blackButton = css`
  ${button}
  label: black-button;
  background-color: black;
  color: white;
`
export { button, blackButton }
