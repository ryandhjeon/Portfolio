/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "../../components/container"
import Wrapper from "../../components/wrapper"

const Printrans = (props) => (
  <Layout
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
    <SEO title="Project" />
    <Container
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Img
        title="Ryan Jeon Image"
        alt="Greek food laid out on table"
        fluid={props.data.imageOne.childImageSharp.fluid}
        sx={{
          justifySelf: 'center',
          height: '18rem',
          width: '20rem',
          overflow: 'hidden',
        }}
      />
      <div>
        <span sx={{
          fontSize: '3rem',
        }}>PRINTRANS</span>
        <p sx={{
          fontSize: '1rem',
          textAlign: 'center',
        }}>lifestyle developer as wanderluster</p>
      </div>
    </Container>
    <Wrapper sx={{
      bg: 'pampas',
      color: 'woodSmoke'
    }}>
      <Container>
        <span sx={{
          fontSize: '3rem',
        }}>Hey, Hello, Hola</span>
        <p sx={{
          lineHeight: '2rem',
          textAlign: 'justify',
        }}>
          I am Ryan Jeon a Ph.D. Candidate in Data Science.
          This place is for me to ideally gather up the projects and experiments I've done through my life,
          and jot down my insights in Data Science, Artificial Intelligence, Business, and Strategy Consulting.
        </p>
        <button>About Ryan</button>
      </Container>
    </Wrapper>
  </Layout>
)

export default Printrans

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
  }
`;