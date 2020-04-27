import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import FluidImage from '../../components/fluidImage';

const Page = ({ pageContext }) => {
  const {
    page: { title, content, featuredImage },
  } = pageContext;

  return (
    <Layout>
      <SEO title={title} />

      <FluidImage image={featuredImage} sx={{ mb: '15px' }} />

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export default Page;
