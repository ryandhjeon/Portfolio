const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/insight` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/postTemplate.jsx');
  const tagTemplate = path.resolve('src/templates/tagsTemplate.jsx');

  const result = await graphql(`
    query {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      postsRemark: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        totalCount
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              path
              date(formatString: "MM DD, YYYY")
              tags
            }
          }
          next {
            frontmatter {
              path
              title
              category
              description
            }
          }
          previous {
            frontmatter {
              path
              title
              category
              description
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node, next, previous }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
      context: {
        slug: node.fields.slug,
        next,
        previous,
      },
    });
  });

  const tags = result.data.tagsGroup.group;

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

// filter: { frontmatter: { published: { eq: true } } }