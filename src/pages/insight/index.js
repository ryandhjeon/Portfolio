/** @jsx jsx */
import React from 'react';
import { jsx, Image } from 'theme-ui';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import FluidImage from '../../components/fluidImage';

export default function Index({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <Layout
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        sx={{
          textAlign: 'center',
          my: 6,
        }}
      >
        <h1>Weekly insight</h1>
        <p>Thoughts on the crafts of product, strategy, marketing, and building businesses.</p>
      </div>
      <div
        sx={{
          display: 'grid',
          mx: 'auto',
          maxWidth: '1040px',
          gridGap: 5,
          '@media screen and (min-width: 40em)': {
            gridTemplateColumns: `repeat(2, 1fr)`,
          },
          '@media screen and (min-width: 64em)': {
            gridTemplateColumns: `repeat(3, 1fr)`,
          },
        }}
      >
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div key={post.id}>
                <Link to={post.frontmatter.path}>
                  <div
                    sx={{
                      fontSize: '12px',
                      color: 'schoolBus',
                      textTransform: 'Uppercase',
                    }}
                  >
                    {post.frontmatter.category}
                  </div>
                  <Image src={post.frontmatter.featuredImage}></Image>
                  <FluidImage
                    image={post.frontmatter.featuredImage}
                    sx={{
                      minHeight: '200px',
                      minWidth: '320px',
                      opacity: '0.8',
                      '&:hover': {
                        opacity: '1',
                      },
                    }}
                  />
                  <div
                    sx={{
                      fontSize: '24px',
                    }}
                  >
                    {post.frontmatter.title}
                  </div>
                  <div
                    sx={{
                      fontSize: '16px',
                      color: 'gullGray',
                      textAlign: 'justify',
                      mb: 1,
                    }}
                  >
                    {post.frontmatter.description}
                  </div>
                  <div>
                    <span
                      sx={{
                        fontSize: '12px',
                        color: 'pampas',
                        textTransform: 'Uppercase',
                      }}
                    >
                      Ryan Jeon
                    </span>
                  </div>
                  <div
                    sx={{
                      fontSize: '12px',
                      color: 'gullGray',
                      textTransform: 'Uppercase',
                    }}
                  >
                    <span>{post.frontmatter.date}</span>
                    <span> • {post.timeToRead} min read</span>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
          frontmatter {
            title
            category
            description
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
