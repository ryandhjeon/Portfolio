/** @jsx jsx */
import React from "react"
import { jsx, Img } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"

const ProjectImage = (props) => (
  <Link sx={{
    position: 'relative',
  }}>
    <div sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '400',
      display: 'flex',
      flexDirection: 'column',
      pl: '1.2rem',
      pt: '1.2rem',
    }}>
      <span>Project 2</span>
      <p sx={{
        fontSize: '0.8rem',
        fontWeight: '100',
        lineHeight: '2rem',
      }}>Description</p>
    </div>
    {/*<Img*/}
    {/*  fluid={props.data.imageOne.childImageSharp.fluid}*/}
    {/*  sx={{*/}
    {/*    width: '100%',*/}
    {/*    height: 'auto',*/}
    {/*  }}/>*/}
    </Link>
)


export default ProjectImage


export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "image_1.jpg" }) {
      ...fluidImage
    },
    imageTwo: file(relativePath: { eq: "image_2.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "image_3.jpg" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "image_4.jpg" }) {
      ...fluidImage
    }
  }
`;