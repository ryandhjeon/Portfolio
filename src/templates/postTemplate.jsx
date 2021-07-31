/** @jsx jsx */
import React from 'react';
import { jsx, Divider } from 'theme-ui';

import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';

import { useSiteMetadata } from '../utils/useSiteMetadata';
import Layout from '../components/layout';
import Wrapper from '../components/wrapper';
import { Share } from '../components/share';


const Template = ({ data, pageContext }) => {
  const { description, author } = useSiteMetadata();
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
        <Helmet title={`INSIGHT - ${post.frontmatter.title}`} />
        <div
          sx={{
            textAlign: 'center',
            letterSpacing: '0.1rem',
            textTransform: 'Uppercase',
          }}
        >
          <div
            sx={{
              fontSize: '12px',
              color: 'pampas',
              opacity: '0.8',
              mb: 5,
            }}
          >
            <span>
              {post.frontmatter.date} · <Link to={'/about'}>{author}</Link>
            </span>
          </div>
          <div
            sx={{
              mb: 5,
            }}
          >
            <div
              sx={{
                fontSize: '6',
              }}
            >
              {post.frontmatter.title}
            </div>
            <div
              sx={{
                fontSize: '0',
                opacity: '0.8',
                mt: '2',
              }}
            >
              [{post.frontmatter.description}]
            </div>
          </div>
          <div
            sx={{
              fontSize: '0',
              opacity: '0.7',
              color: 'schoolBus',
              textTransform: 'Uppercase',
              textAlign: 'center',
              mb: '5'
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
              maxWidth: '1040px',
              height: '30rem',
              mb: '6',
              mx: 'auto',
              '@media screen and (max-width: 56em)': {
                maxWidth: '100%',
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
            color: 'woodSmoke',
            bg: 'pampas',
            pt: 6,
            pb: 6,
            // '@media screen and (max-width: 56em)': {
            //   maxWidth: '100%',
            // },
          }}
        >
          <div sx={{
            maxWidth: '700px',
            mx: 'auto'
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
            bg: 'woodSmoke',
            mt: 4,
            py: 5,
            textAlign: 'center',
          }}
        >
          <span sx={{ textTransform: 'uppercase' }}>Insights de Ryan</span>
          <div
            sx={{
              display: 'grid',
              // width: '1040px',
              mx: 'auto',
              py: 5,
              gridGap: 1,
              '@media screen and (max-width: 40em)': {
                width: '100%',
                gridTemplateColumns: `repeat(1, 1fr)`,
              },
              '@media screen and (min-width: 40em)': {
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
                      position: 'relative',
                      '&:hover': {
                        transition: 'all 0.3s',
                        transform: 'translate(-7px, 0px)',
                        '>span': {
                          visibility: 'visible',
                        },
                      },
                    }}
                  >
                    <span
                      sx={{
                        position: 'absolute',
                        left: 0,
                        opacity: '0.8',
                        color: 'schoolBus',
                        visibility: 'hidden',
                      }}
                    >
                      ◅
                    </span>
                    <div
                      sx={{
                        textAlign: 'center',
                      }}
                    >

                      {previous.frontmatter.title}
                      <div
                        sx={{
                          fontSize: '12px',
                          color: 'gullGray',
                          opacity: '0.8',
                          textTransform: 'uppercase',
                        }}
                      >
                        {previous.frontmatter.date}
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
                      position: 'relative',
                      '&:hover': {
                        transition: 'all 0.3s',
                        transform: 'translate(7px, 0px)',
                        '>span': {
                          visibility: 'visible',
                        },
                      },
                    }}
                  >
                    <span
                      sx={{
                        position: 'absolute',
                        right: 0,
                        opacity: '0.8',
                        color: 'schoolBus',
                        visibility: 'hidden',
                      }}
                    >
                      {' '}
                      ▻{' '}
                    </span>
                    <div
                      sx={{
                        textAlign: 'center',
                      }}
                    >
                      {next.frontmatter.title}
                      <div
                        sx={{
                          fontSize: '12px',
                          color: 'gullGray',
                          opacity: '0.8',
                          textTransform: 'uppercase',
                        }}
                      >
                        {next.frontmatter.date}
                        {next.frontmatter.description}
                      </div>
                    </div>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
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
                          layout: FULL_WIDTH
                          placeholder: BLURRED
                          transformOptions: {grayscale: true}
                      )
                  }
              }
          }
      }
  }
`;

export default Template;