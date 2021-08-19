/* eslint-disable */
/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const Wrapper = props =>
  <div
    {...props}
    sx={{
      // mx: "auto",
      py: 5,
      '@media screen and (max-width: 64em)': {
        px: 3,
      }
      }}
  />

export default Wrapper