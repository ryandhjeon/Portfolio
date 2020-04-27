/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import Layout from '../../components/layout';
import PostEntry from '../../components/postEntry';
import Pagination from '../../components/pagination';
import SEO from '../../components/seo';

const Blog = ({ pageContext }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext;

  return (
    <Layout>
      <SEO title="Blog" description="Blog posts" keywords={[`blog`]} />
      <div
        sx={{
          width: '1040px',
          mx: 'auto',
        }}
      >
        <div
          sx={{
            textAlign: 'center',
            py: 3,
            mb: 5,
          }}
        >
          <h1>Weekly insight</h1>
          <p>Thoughts on the crafts of product, strategy, marketing, and building businesses.</p>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {nodes && nodes.map(post => <PostEntry key={post.postId} post={post} />)}
        </div>

        <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage} allPosts={allPosts} itemsPerPage={itemsPerPage} />
      </div>
    </Layout>
  );
};

export default Blog;
