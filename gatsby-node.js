const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }

    type Frontmatter {
      title: String!
      cover: String
    }
  `)
}

exports.onCreateNode = async ({
                                node,
                                actions: { createNode },
                                store,
                                cache,
                                createNodeId,
                              }) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.cover !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.cover, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
}

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
  const projectTemplate = path.resolve('src/templates/projectTemplate.jsx');
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
        filter: {frontmatter: {insight: {eq: true}}}
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
      projectsRemark: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {frontmatter: {project: {eq: true}}}
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
              description
            }
          }
          previous {
            frontmatter {
              path
              title
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

  const projects = result.data.projectsRemark.edges;

  projects.forEach(({ node, next, previous }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
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