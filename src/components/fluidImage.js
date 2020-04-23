/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

const FluidImage = ({ image, withFallback = false, ...props }) => {
  const data = useStaticQuery(graphql`
      query {
          fallbackImage: file(relativePath: { eq: "fallback.svg" }) {
              publicURL
          }
      }
  `)

  /**
   * Return fallback Image, if no Image is given.
   */
  if (!image) {
    return withFallback ? <img src={data.fallBackImage.publicURL} alt={"Fallback"} {...props}/> : null
  }

  if (image && image.imageFile) {
    return <GatsbyImage fluid={image.imageFile.childImageSharp.fluid} alt={image.altText} {...props}/>
  }

  return <img src={image.sourceUrl} alt={image.altText} {...props}/>
}

export default FluidImage