/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

const Container = props =>
  <div
    {...props}
    sx={{
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      height: '800px',
      py: '5rem',
      // border: '1px solid red',
      '@media screen and (max-width: 64em)': {
        px: '7%',
      },
    }}
  />

export default Container