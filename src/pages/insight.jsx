/* eslint-disable */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from 'react-seo-component';

import Layout from '../components/layout';
import Wrapper from '../components/wrapper';
import { useSiteMetadata } from '../utils/useSiteMetadata';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allMdx(
      sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {published: {eq: true}, insight: {eq: true}}}
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            category
            date(formatString: "MMMM DD, YYYY")
            path
            cover {
              id
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
    }
  }
`

const Insight = () => {
  const { author, description, image, siteUrl, siteLanguage, siteLocale, title, twitter } = useSiteMetadata();
  const data = useStaticQuery(query);
  const allPosts = data.allMdx.edges;

  const PostCard = () => (
    <div
      sx={{
        display: 'grid',
        mx: 'auto',
        maxWidth: '1040px',
        gridGap: 4,
        '@media screen and (min-width: 56em)': {
          gridTemplateColumns: `repeat(2, 1fr)`,
        },
        '@media screen and (min-width: 64em)': {
          gridTemplateColumns: `repeat(3, 1fr)`,
        },
      }}
    >
      {allPosts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, index) => {
          const pathToImage = getImage(post.frontmatter.cover)
          return (
            <div
              sx={{
                mb: 5,
                "@media screen and (max-width: 40em)": {
                  mb: 3,
                },
              }}
              key={index}
            >
              <Link
                to={post.frontmatter.path}
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  '>div': {
                    transition: "all 700ms",
                    opacity: "0.7",
                    "@media screen and (max-width: 40em)": {
                      opacity: 1,
                    },
                  },
                  "&:hover": {
                    opacity: 1,
                    '>div': {
                      transition: "all 700ms",
                      opacity: 1,
                    }
                  },
                }}
              >
                {!!post.frontmatter.cover ? (
                  <GatsbyImage
                    image={pathToImage}
                    alt={post.frontmatter.title}
                    sx={{
                      height: "14rem",
                      mb: 3,
                    }}
                  />
                ) : null}
                <div
                  sx={{
                    fontSize: "12px",
                    color: "schoolBus",
                    textTransform: "Uppercase",
                    mt: 4,
                  }}
                >
                  {post.frontmatter.category}
                </div>
                <div
                  sx={{
                    fontSize: "5",
                    mt: 2,
                    color: "pampas",
                    opacity: '0.9 !important'
                  }}
                >
                  {post.frontmatter.title}
                </div>
                <div
                  sx={{
                    fontSize: "12px",
                    color: "gullGray",
                    textTransform: "Uppercase",
                    mt: 2,
                  }}
                >
                  <div>{post.frontmatter.date}</div>
                  <div sx={{ mt: 2,}}>{author} • {post.timeToRead} min read</div>
                </div>
              </Link>
            </div>
          )
        })}
    </div>
  );

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
        pathName={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitter={twitter}
      />
      <Wrapper>
        <div
          sx={{
            textAlign: 'center',
            my: 6,
            fontSize: '3',
            fontWeight: 'sm'
          }}
        >
          <h1 sx={{ fontWeight: 'md'}}>Idea playground</h1>
          <p>Personal insights on the data science, programming, business strategy and branding</p>
        </div>
        <PostCard />
      </Wrapper>
    </Layout>
  );
};

export default Insight;