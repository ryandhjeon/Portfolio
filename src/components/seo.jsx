import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../utils/useSiteMetadata';

function Seo({ description, lang, meta, title }) {
  const {
    title: siteMetaTitle, description: siteMetaDescription, author
  } = useSiteMetadata();

  const metaDescription = description || siteMetaDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
