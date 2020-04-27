/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';

const AboutPage = props => (
  <Layout>
    <SEO title="About" />
    <Container
      sx={{
        fontSize: '80px',
        textAlign: 'center',
        justifyContent: 'center',
        letterSpacing: 10,
        '@media screen and (max-width: 40em)': {
          display: 'none',
        },
      }}
    >
      <p>
        R Y A N<span>&nbsp;</span> J E O N
      </p>
    </Container>
    <Container
      sx={{
        display: 'none',
        '@media screen and (max-width: 40em)': {
          display: 'flex',
          fontSize: '4rem',
          letterSpacing: 10,
          height: '500px',
        },
      }}
    >
      <span>R Y A N</span>
      <span>J E O N</span>
    </Container>
    <Container
      sx={{
        bg: 'pampas',
        color: 'woodSmoke',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          maxWidth: '1040px',
          '@media screen and (max-width: 64em)': {
            justifyContent: 'center',
          },
        }}
      >
        <div
          sx={{
            height: '20rem',
            width: '20rem',
            borderRadius: '30%',
            overflow: 'hidden',
            '@media screen and (max-width: 64em)': {
              maxWidth: '300px',
              maxHeight: '300px',
              mb: '1rem',
            },
          }}
        >
          <Img title="Ryan Jeon Image" fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div
          sx={{
            width: '50%',
            textAlign: 'center',
            '@media screen and (max-width: 64em)': {
              width: '80%',
            },
            '@media screen and (max-width: 40em)': {
              width: '100%',
            },
          }}
        >
          <span
            sx={{
              fontSize: '3rem',
            }}
          >
            en·tre·pre·neur
          </span>
          <p sx={{ textAlign: 'justify' }}>
            Problem Solving, Analytical Thinking, Business Leadership. These are the key words that describes me the
            best. Helping the clients achieve their business goals by leveraging knowledge of IT, Financial, Strategy,
            and Marketing by letting them understand and face the macro-level challenges of running their company or
            organization is where my passion is at.
          </p>
        </div>
      </div>
    </Container>
    <Container
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          maxWidth: '1040px',
          '@media screen and (max-width: 64em)': {
            justifyContent: 'center',
          },
        }}
      >
        <div
          sx={{
            width: '50%',
            textAlign: 'center',
            '@media screen and (max-width: 64em)': {
              width: '80%',
              order: 1,
            },
            '@media screen and (max-width: 40em)': {
              width: '100%',
            },
          }}
        >
          <span
            sx={{
              fontSize: '3rem',
            }}
          >
            re·search·er
          </span>
          <p
            sx={{
              textAlign: 'justify',
            }}
          >
            My research interests are in the methodological areas of reinforcement learning, approximate DP, and
            sequential decision making. I am also interested in a variety of operations research applications, such as
            energy markets, ride-sharing, and public health.
          </p>
        </div>
        <div
          sx={{
            height: '20rem',
            width: '20rem',
            borderRadius: '30%',
            overflow: 'hidden',
            '@media screen and (max-width: 64em)': {
              order: 0,
              mb: '1rem',
              maxWidth: '300px',
              maxHeight: '300px',
            },
          }}
        >
          <Img title="Ryan Jeon Image" fluid={props.data.imageTwo.childImageSharp.fluid} sx={{ objectFit: 'cover' }} />
        </div>
      </div>
    </Container>
    <Container
      sx={{
        textAlign: 'center',
        bg: 'pampas',
        color: 'woodSmoke',
      }}
    >
      <div
        sx={{
          color: 'black',
          maxWidth: '40em',
          '@media screen and (max-width: 64em)': {
            width: '80%',
          },
          '@media screen and (max-width: 40em)': {
            width: '100%',
          },
        }}
      >
        <p>
          I am currently pursuing
          <a href="https://giesbusiness.illinois.edu/programs/doctoral/business-administration" target="_blank">
            <span
              sx={{
                color: 'woodSmoke',
                textDecoration: 'none',
                '&:hover': {
                  color: 'illinoisOrange',
                },
              }}
            >
              {' '}
              Ph.D. in Business Administration{' '}
            </span>
          </a>
          at the
          <a href="https://illinois.edu/" target="_blank">
            <span
              sx={{
                color: 'woodSmoke',
                textDecoration: 'none',
                '&:hover': {
                  color: 'illinoisOrange',
                },
              }}
            >
              {' '}
              XX University
            </span>
          </a>
          <span>, where I am being advised by </span>
          <a href="">
            {' '}
            <span sx={{ color: 'woodSmoke' }}>Professor XXX</span>
          </a>
        </p>
        <span>For any inquiries, you may reach me at </span>
        <a href="mailto:dj3@illinois.edu">
          <span
            sx={{
              color: 'woodSmoke',
              textDecoration: 'underline',
              '&:hover': {
                color: 'tan',
                textDecoration: 'none',
              },
            }}
          >
            dj3@illinois.edu
          </span>
        </a>
        <div
          sx={{
            mt: 4,
            width: '50%',
            mx: 'auto',
          }}
        >
          <a href="https://www.twitter.com/ryandhjeon" target="_blank">
            <div
              sx={{
                color: 'woodSmoke',
                border: '1px solid Grey',
                mb: 4,
                '&:hover': {
                  bg: 'schoolBus',
                  border: '1px solid #FEDD00',
                },
              }}
            >
              CV<span sx={{ fontSize: '12px' }}>(PDF)</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ryandhjeon/" target="_blank">
            <div
              sx={{
                color: 'woodSmoke',
                '&:hover': {
                  bg: 'linkedIn',
                  color: 'primaryText',
                },
              }}
            >
              LinkedIn
            </div>
          </a>
          <a
            href="https://www.github.com/ryandhjeon"
            target="_blank"
            sx={{
              mb: 3,
            }}
          >
            <div
              sx={{
                color: 'woodSmoke',
                '&:hover': {
                  bg: 'woodSmoke',
                  color: 'primaryText',
                },
              }}
            >
              Github
            </div>
          </a>
          <a href="https://www.instagram.com/royalhoney__/" target="_blank">
            <div
              sx={{
                color: 'woodSmoke',
                '&:hover': {
                  bg: 'instagram',
                  color: 'primaryText',
                },
              }}
            >
              Instagram
            </div>
          </a>
          <a href="https://www.twitter.com/ryandhjeon" target="_blank">
            <div
              sx={{
                color: 'woodSmoke',
                '&:hover': {
                  bg: 'twitter',
                  color: 'primaryText',
                },
              }}
            >
              Twitter
            </div>
          </a>
        </div>
      </div>
    </Container>
  </Layout>
);

export default AboutPage;

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
    imageOne: file(relativePath: { eq: "portfolio_about.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "portfolio_drawing.jpg" }) {
      ...fluidImage
    }
  }
`;
