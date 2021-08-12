/* eslint-disable */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Caption = (props) => (
  <div
    sx={{
      mt: 3,
      mb: 5,
      textAlign: 'center',
      fontSize: '1',
      color: 'shark',
      opacity: '0.8'
    }}>
    <span sx={{ fontWeight: 'lg'}}>Figure {props.fig}</span>  {props.message}
  </div>
)


export default Caption