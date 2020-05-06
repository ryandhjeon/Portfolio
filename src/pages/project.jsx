/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import useImageQuery  from '../utils/hooks/imageQuery';

const ProjectPage = () => {
  const { imageOne, imageTwo } = useImageQuery();

  return (
    <Layout>
      <SEO title="Project" />
      <Container
        sx={{
          textAlign: 'center',
          fontSize: '1.2rem',
          maxWidth: '40em',
          mx: 'auto',
          fontWeight: 100,
          '@media screen and (max-width: 40em)': {
            fontSize: '1rem',
          },
        }}
      >
        <p
          sx={{
            lineHeight: '2rem',
          }}
        >
          "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust
          that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life,
          karma, whatever. This approach has never let me down, and it has made all the difference in my life."
        </p>
        <i>- Steve Jobs</i>
      </Container>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          '@media screen and (min-width: 40em)': {
            gridTemplateColumns: '1fr 1fr',
          },
          '@media screen and (min-width: 64em)': {
            gridTemplateColumns: '1fr 1fr 1fr',
          },
        }}
      >
        <Link
          sx={{
            position: 'relative',
          }}
        >
          <div
            sx={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              background: 'rgba(0,0,0,0.9)',
              pl: '1.5rem',
              pt: '1.5rem',
            }}
          >
            <span sx={{
              fontSize: '1.2rem',
              fontWeight: '400',
            }}>ACES Portal</span>
            <p
              sx={{
                fontSize: '0.8rem',
                fontWeight: '100',
                lineHeight: '2rem',
              }}
            >
              Description
            </p>
          </div>
          <Img
            fluid={imageOne.childImageSharp.fluid}
            sx={{
              width: '100%',
              height: 'auto',
              transition: '.3s ease',
              '&:hover': {
                opacity: '0.3',
              },
            }}
          />
        </Link>
        <Link
          sx={{
            position: 'relative',
          }}
        >
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              background: 'rgba(0,0,0,0.9)',
              pl: '1.5rem',
              pt: '1.5rem',
            }}
          >
            <span sx={{
              fontSize: '1.2rem',
              fontWeight: '400',
            }}>Meat Science Lab</span>
            <p
              sx={{
                fontSize: '0.8rem',
                fontWeight: '100',
                lineHeight: '2rem',
              }}
            >
              Description
            </p>
          </div>
          <Img
            fluid={imageTwo.childImageSharp.fluid}
            sx={{
              width: '100%',
              height: 'auto',
              transition: '.3s ease',
              '&:hover': {
                opacity: '0.3',
              },
            }}
          />
        </Link>
      </div>
      <div
        sx={{
          bg: 'background',
          textAlign: 'center',
          py: 5,
        }}
      >
        <a href="">Back to top</a>
      </div>
    </Layout>
  );
};

export default ProjectPage;
