/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';

import { useSiteMetadata } from '../utils/useSiteMetadata';
import Layout from '../components/layout';
import Wrapper from '../components/wrapper';

const Template = ({ data, pageContext }) => {
  const { author } = useSiteMetadata();
  const { mdx: post } = data;
  const pathToImage = getImage(post.frontmatter.cover)
  const { previous, next } = pageContext;

  console.log(post)

  return (
    <Layout>
      <div
        sx={{
          mt: 6,
        }}
      >
        <Helmet title={`Insight: ${post.frontmatter.title}`}/>
        <div
          sx={{
            textAlign: "center",
            letterSpacing: "0.1rem",
            textTransform: "Uppercase",
          }}
        >
          <div
            sx={{
              fontSize: "0",
              color: "pampas",
              opacity: "0.8",
              mb: 5,
            }}
          >
            {post.frontmatter.date} ·
            <Link
              to={"/"}
              sx={{
                color: "pampas",
                textDecoration: "none",
                "&hover": {
                  color: "schoolBus",
                },
              }}> {author}</Link>
          </div>
          <div
            sx={{
              mb: 5,
            }}
          >
            <div
              sx={{
                fontSize: "6",
              }}
            >
              {post.frontmatter.title}
            </div>
            <div
              sx={{
                fontSize: "0",
                opacity: "0.8",
                mt: "2",
              }}
            >
               - {post.frontmatter.description} -
            </div>
          </div>
          <div
            sx={{
              fontSize: "0",
              opacity: "0.7",
              color: "schoolBus",
              textTransform: "Uppercase",
              textAlign: "center",
              mb: "5",
            }}
          >
            {post.frontmatter.category} · {post.timeToRead} min read
          </div>
        </div>
        {!!post.frontmatter.cover ? (
          <GatsbyImage
            image={pathToImage}
            alt={post.frontmatter.title}
            sx={{
              maxWidth: "1040px",
              height: "30rem",
              mb: "6",
              mx: "auto",
              "@media screen and (max-width: 56em)": {
                maxWidth: "100%",
              },
            }}
          />
        ) : null}
        {/*<Divider*/}
        {/*  sx={{*/}
        {/*    opacity: '0.3',*/}
        {/*    mb: 4,*/}
        {/*  }}*/}
        {/*/>*/}
        <Wrapper
          sx={{
            color: "woodSmoke",
            bg: "pampas",
            py: 6,
            // '@media screen and (max-width: 56em)': {
            //   maxWidth: '100%',
            // },
          }}
        >
          <div sx={{
            maxWidth: "700px",
            mx: "auto",
          }}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>

          {/*<div*/}
          {/*  sx={{*/}
          {/*    display: 'flex',*/}
          {/*    justifyContent: 'space-between',*/}
          {/*    mt: 6,*/}

          {/*  }}*/}
          {/*>*/}
          {/*  {post.frontmatter.tags ? (*/}
          {/*    <div>*/}
          {/*      <ul*/}
          {/*        sx={{*/}
          {/*          display: 'flex',*/}
          {/*          listStyleType: 'none',*/}
          {/*          m: 0,*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        {post.frontmatter.tags.map(tag => (*/}
          {/*          <li key={tag + `tag`}>*/}
          {/*            <Link*/}
          {/*              sx={{*/}
          {/*                mr: 2,*/}
          {/*                p: 2,*/}
          {/*                fontSize: '12px',*/}
          {/*                textTransform: 'uppercase',*/}
          {/*                borderRadius: 3,*/}
          {/*                textAlign: 'center',*/}
          {/*                '&:hover': {*/}
          {/*                  bg: 'dimgray',*/}
          {/*                },*/}
          {/*              }}*/}
          {/*              to={`/tags/${kebabCase(tag)}/`}*/}
          {/*            >*/}
          {/*              # {tag}*/}
          {/*            </Link>*/}
          {/*          </li>*/}
          {/*        ))}*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  ) : null}*/}
          {/*  <Share />*/}
          {/*</div>*/}
        </Wrapper>
        <div
          sx={{
            bg: "woodSmoke",
            py: 5,
            textAlign: "center",
          }}
        >
          <div
            sx={{
              display: "grid",
              // width: '1040px',
              mx: "auto",
              py: 5,
              gridGap: 1,
              "@media screen and (max-width: 56em)": {
                width: "100%",
                gridTemplateColumns: `repeat(1, 1fr)`,
              },
              "@media screen and (min-width: 56em)": {
                gridTemplateColumns: `repeat(2, 1fr)`,
              },
            }}
          >
            {previous === false ? null : (
              <>
                {previous && (
                  <Link
                    to={previous.frontmatter.path}
                    sx={{
                      bg: "background",
                      position: "relative",
                      textDecoration: "none",
                      p: "5",
                      fontSize: "4",
                      fontWeight: "sm",
                      "&:hover": {
                        transition: "all 300ms",
                        bg: "#393939",
                      },
                    }}
                  >
                    <div
                      sx={{
                        color: "schoolBus",
                        fontSize: "2",
                        pb: "3",
                        opacity: "0.8",
                      }}>Previous
                    </div>
                    <div
                      sx={{
                        textAlign: "center",
                        color: "pampas",
                      }}
                    >
                      {previous.frontmatter.title}
                      <div
                        sx={{
                          fontSize: "3",
                          color: "gullGray",
                          opacity: "0.8",
                          pt: "1",
                        }}
                      >
                        {previous.frontmatter.description}
                      </div>
                    </div>
                  </Link>
                )}
              </>
            )}
            {next === false ? null : (
              <>
                {next && (
                  <Link
                    to={next.frontmatter.path}
                    sx={{
                      bg: "background",
                      position: "relative",
                      textDecoration: "none",
                      p: "5",
                      fontSize: "4",
                      fontWeight: "sm",
                      "&:hover": {
                        transition: "all 300ms",
                        bg: "#393939",
                      },
                    }}
                  >
                    <div
                      sx={{
                        color: "schoolBus",
                        fontSize: "2",
                        pb: "3",
                        opacity: "0.8",
                      }}>Next
                    </div>
                    <div
                      sx={{
                        color: "pampas",
                        textAlign: "center",
                      }}
                    >
                      {next.frontmatter.title}
                      <div
                        sx={{
                          fontSize: "3",
                          color: "gullGray",
                          opacity: "0.8",
                          pt: "1",
                        }}
                      >
                        {next.frontmatter.description}
                      </div>
                    </div>
                  </Link>
                )}
              </>
            )}
          </div>
          <Link
            to={"/insight"}
            sx={{
              bg: "background",
              py: "3",
              px: "5",
              textDecoration: "none",
              "&:hover": {
                transition: "all 500ms",
                border: "1px solid #FEDD00",
                '>span': {
                  transition: "all 500ms",
                  opacity: 1
                }
              },
            }}>
            <span
              sx={{
                fontSize: "2",
                color: "schoolBus",
                opacity: "0.8",
                fontWeight: "sm",
              }}>More insights</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
      mdx(frontmatter: { path: { eq: $path } }) {
          body
          timeToRead
          frontmatter {
              title
              path
              category
              description
              date(formatString: "MMMM Do, YYYY")
              tags
              cover {
                  childImageSharp {
                      gatsbyImageData(
                          layout: FULL_WIDTH,
                          placeholder: BLURRED,
                          transformOptions: {grayscale: true},
                          quality: 50
                      )
                  }
              }
          }
      }
  }
`;

export default Template;