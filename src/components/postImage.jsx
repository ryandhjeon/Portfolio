/* eslint-disable */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const PostImage = (props) => {
  const pathToImage = getImage(props.img)

  return (
     <>
       <GatsbyImage
         image={pathToImage}
         alt={1}
         sx={{
           maxWidth: "1040px",
           height: "30rem",
           mb: "6",
           mx: "auto",
           "@media screen and (max-width: 56em)": {
             maxWidth: "100%",
           },
         }}
       />
     </>
  )
}

export default PostImage