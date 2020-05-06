/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Container from '../components/container';
import { useSiteMetadata } from '../utils/useSiteMetadata';

const IndexPage = () => {
  const { description, title, image, siteUrl, siteLanguage, siteLocale, twitter } = useSiteMetadata();
  return (
    <Layout
      sx={{
        flexDirection: 'column',
      }}
    >
      <SEO
        title={title}
        description={description || `nothin’`}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitter={twitter}
      />
    </Layout>
  );
};

export default IndexPage;
