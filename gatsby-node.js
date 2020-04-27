const path = require('path');
const _ = require('lodash');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // console.log(node.internal.type)
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/insight` });
    // console.log(slug);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/post.js');
  // const tagTemplate = path.resolve('src/templates/tags.js');

  const result = await graphql(`
    query {
      postsRemark: allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MM DD, YYYY")
              tags
            }
          }
        }
      }
    }
  `)
  // console.log(JSON.stringify(result, null, 4))
  ;

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const posts = result.data.postsRemark.edges;

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    });
  });

  // Extract tag data from query
  // const tags = result.data.tagsGroup.group;
  //
  // // Make tag pages
  // tags.forEach(tag => {
  //   createPage({
  //     path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
  //     component: tagTemplate,
  //     context: {
  //       tag: tag.fieldValue,
  //     },
  //   });
  // });
};
