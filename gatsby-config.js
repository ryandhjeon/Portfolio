require("dotenv").config()

const siteMetadata = {
  title: `Maison De Ryan`,
  description: `Ryan's daily note`,
  author: `Ryan Jeon`,
  schoolEmail: `djeon@bgsu.edu`,
  personalEmail: `ryandhjeon@gmail.com`,
  siteUrl: `https://www.ryanjeon.com`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  instagram: 'ryanjeon__',
  twitter: `ryandhjeon`,
  linkedIn: `ryandhjeon`,
  github : `ryandhjeon`,
  image: '',
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maison de Ryan`,
        short_name: `Ryan Jeon`,
        start_url: `/`,
        icon: `src/images/memoji_white.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          // insight: require.resolve("./src/templates/postTemplate.jsx"),
          // default: require.resolve("./src/components/default-page-layout.js"),
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     typekit: {
    //       id: process.env.TYPEKIT_ID,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'insight',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
