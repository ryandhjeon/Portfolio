/* eslint-disable */
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
      minHeight: '60vh',
      maxHeight: '1000px',
      pt: '3rem',
      '@media screen and (max-width: 64em)': {
        px: '5%',
      },
    }}
  />

export default Container