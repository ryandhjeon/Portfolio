/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'
import useImageQuery from '../utils/hooks/imageQuery';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import { useSiteMetadata } from '../utils/useSiteMetadata';

const IndexPage = () => {
  const { description, title, image, siteUrl, siteLanguage, siteLocale, twitter } = useSiteMetadata();

  const { portfolio_about, portfolio_drawing, rj } = useImageQuery();

  return (
    <Layout
      sx={{
        flexDirection: 'column',
      }}
    >
      <SEO
        title={title}
        description={description || `nothing’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitter={twitter}
      />
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
              height: '18rem',
              width: '18rem',
              borderRadius: '20%',
              overflow: 'hidden',
              '@media screen and (max-width: 64em)': {
                maxWidth: '11rem',
                maxHeight: '11rem',
                mb: '1.5rem',
              },
            }}
          >
            <Img title="Ryan Jeon Image" fluid={portfolio_about.childImageSharp.fluid} />
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
                fontSize: '2rem',
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
    </Layout>
  );
};

export default IndexPage;
