/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import useImageQuery from '../utils/hooks/imageQuery';

const PublicationPage = () => {
  const { publication } = useImageQuery();
  return (
    <Layout>
      <SEO title="Publication" />
      <Container>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '1040px',
            '@media screen and (max-width: 64em)': {
              flexWrap: 'wrap',
              justifyContent: 'center',
            },
          }}
        >
          <div>
            {/*<GatsbyImage*/}
            {/*  fluid={publication.childImageSharp.fluid}*/}
            {/*  sx={{*/}
            {/*    height: '24rem',*/}
            {/*    width: '24rem',*/}
            {/*    '@media screen and (max-width: 64em)': {*/}
            {/*      mb: '2rem',*/}
            {/*    },*/}
            {/*  }}*/}
            {/*/>*/}
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
              Publications
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
};

export default PublicationPage;
