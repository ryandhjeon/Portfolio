/** @jsx jsx */
import React from 'react';
import { jsx, Card, Text } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

const IndexPage = props => (
  <Layout
    sx={{
      flexDirection: 'column',
    }}
  >
    <SEO title="Home" />
    <Container
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
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
      <span
        sx={{
          fontSize: '3rem',
        }}
      >
        Focusing on the details
        <p
          sx={{
            fontSize: '1rem',
            textAlign: 'center',
          }}
        >
          Capturing AI in everyday life
        </p>
      </span>
    </Container>
    <Container
      sx={{
        bg: 'pampas',
        color: 'woodSmoke',
      }}
    >
      <span
        sx={{
          fontSize: '3rem',
        }}
      >
        Hey, Hello, Hola
      </span>
      <p
        sx={{
          lineHeight: '2rem',
          textAlign: 'justify',
        }}
      >
        I am Ryan Jeon a Ph.D. Candidate in Data Science. This place is for me to ideally gather up the projects and
        experiments I've done through my life, and jot down my insights in Data Science, Artificial Intelligence,
        Business, and Strategy Consulting.
      </p>
      <button>About Ryan</button>
    </Container>
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}
    >
      <Card
        sx={{
          minWidth: '250px',
          border: '1px solid yellow',
        }}
      >
        <Img
          title="Ryan Jeon Image"
          alt="Greek food laid out on table"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <Text
          sx={{
            textAlign: 'center',
          }}
        >
          Insight
        </Text>
      </Card>
      <Card
        sx={{
          minWidth: '250px',
          border: '1px solid yellow',
        }}
      >
        <Img
          title="Ryan Jeon Image"
          alt="Greek food laid out on table"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <Text
          sx={{
            textAlign: 'center',
          }}
        >
          Research
        </Text>
      </Card>
      <Card
        sx={{
          minWidth: '250px',
          border: '1px solid yellow',
        }}
      >
        <Img
          title="Ryan Jeon Image"
          alt="Greek food laid out on table"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <Text
          sx={{
            textAlign: 'center',
          }}
        >
          Project
        </Text>
      </Card>
      <Card
        sx={{
          minWidth: '250px',
          border: '1px solid yellow',
        }}
      >
        <Img
          title="Ryan Jeon Image"
          alt="Greek food laid out on table"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <Text
          sx={{
            textAlign: 'center',
          }}
        >
          CV
        </Text>
      </Card>
    </Container>
    <Container
      sx={{
        alignItems: 'center',
        bg: 'pampas',
        color: 'woodSmoke',
      }}
    >
      <Img
        title="Ryan Jeon Image"
        alt="Greek food laid out on table"
        fluid={props.data.imageTwo.childImageSharp.fluid}
        sx={{
          justifySelf: 'center',
          height: '18rem',
          width: '100%',
          overflow: 'hidden',
        }}
      />
    </Container>
  </Layout>
);

export default IndexPage;

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
    }
    imageTwo: file(relativePath: { eq: "image_2.jpg" }) {
      ...fluidImage
    }
  }
`;
