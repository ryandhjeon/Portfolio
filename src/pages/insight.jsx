/** @jsx jsx */
import React from 'react';
import { jsx, Image } from 'theme-ui';
import { Link, graphql } from 'gatsby';
import SEO from 'react-seo-component';

import Layout from '../components/layout';
import Wrapper from '../components/wrapper';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import usePostsQuery from '../utils/hooks/postQuery';

import Img from 'gatsby-image';

const Insight = () => {
  const { description, title, image, siteUrl, siteLanguage, siteLocale, twitter } = useSiteMetadata();

  return (
    <Layout
      sx={{
        justifyContent: 'center',
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
      <Wrapper>
        <div
          sx={{
            textAlign: 'center',
            my: 6,
          }}
        >
          <h1>Idea playground</h1>
          <p>Personal insights on the data science, programming, business strategy and branding</p>
        </div>
        <PostCard />
      </Wrapper>
    </Layout>
  );
};

const PostCard = () => {
  const { edges: posts } = usePostsQuery().allMdx;
  const { author } = useSiteMetadata();

  return (
    <div
      sx={{
        display: 'grid',
        mx: 'auto',
        maxWidth: '1040px',
        gridGap: 4,
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
            <div
              sx={{
                mb: 5,
                '@media screen and (max-width: 40em)': {
                  mb: 3,
                },
              }}
              key={post.id}
            >
              <Link
                to={post.frontmatter.path}
                sx={{
                  textAlign: 'center',
                }}
              >
                {!!post.frontmatter.cover ? (
                  <Img
                    sizes={post.frontmatter.cover.childImageSharp.sizes}
                    sx={{
                      width: '100%',
                      height: '14rem',
                      mb: 3,
                      opacity: '0.7',
                      '&:hover': {
                        opacity: '1',
                        transition: 'all 300ms',
                      },
                    }}
                  />
                ) : null}
                <div
                  sx={{
                    fontSize: '12px',
                    opacity: '0.8',
                    color: 'schoolBus',
                    textTransform: 'Uppercase',
                  }}
                >
                  {post.frontmatter.category}
                </div>
                <div
                  sx={{
                    fontSize: '22px',
                  }}
                >
                  {post.frontmatter.title}
                </div>
                <div
                  sx={{
                    fontSize: '12px',
                    color: 'gullGray',
                    textTransform: 'Uppercase',
                  }}
                >
                  <span>{post.frontmatter.date}</span>
                  <p>{author}</p>
                  {/*<p> • {post.timeToRead} min read</p>*/}
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Insight;
