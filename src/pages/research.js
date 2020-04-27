/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

const ResearchPage = props => (
  <Layout>
    <SEO title="Project" />
    <Container>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: '1040px',
          '@media screen and (max-width: 64em)': {
            justifyContent: 'center',
          },
        }}
      >
        <div>
          <Img
            fluid={props.data.imageOne.childImageSharp.fluid}
            sx={{
              height: '24rem',
              width: '24rem',
              '@media screen and (max-width: 64em)': {
                mb: '2rem',
              },
            }}
          />
        </div>
        <div
          sx={{
            textAlign: 'center',
          }}
        >
          <span
            sx={{
              fontSize: '3rem',
              textTransform: 'uppercase',
            }}
          >
            Research
          </span>
          <p
            sx={{
              letterSpacing: 10,
              fontSize: '1rem',
            }}
          >
            FALL 2020
          </p>
        </div>
      </div>
    </Container>
  </Layout>
);

export default ResearchPage;

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
    imageOne: file(relativePath: { eq: "research.jpg" }) {
      ...fluidImage
    }
  }
`;
