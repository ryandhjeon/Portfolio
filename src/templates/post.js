/** @jsx jsx */
import React from 'react';
import { jsx, Button } from 'theme-ui';

import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from '../components/layout';

export default function Template({ data }) {
  const { mdx: post } = data;
  return (
    <Layout>
      <div sx={{
        width: '40em',
        mx: 'auto',
        mb: 4,
      }}>
        <Helmet title={`MAISON DE RYAN - ${post.frontmatter.title}`} />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <span>{post.frontmatter.date}</span>
          {/*<div*/}
          {/*  dangerouslySetInnerHTML={{ __html: post.html }}*/}
          {/*  sx={{*/}
          {/*    fontSize: '20px',*/}
          {/*    fontWeight: '100',*/}
          {/*    color: 'primaryText',*/}
          {/*    textAlign: 'justify',*/}
          {/*  }}*/}
          {/*/>*/}
          <MDXRenderer sx={{
            fontSize: '20px',
            fontWeight: '100',
            color: 'primaryText',
            textAlign: 'justify',
          }}>{post.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
