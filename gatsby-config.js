require("dotenv").config()

const siteMetadata = {
  title: `Maison De Ryan`,
  description: `Ryan's portfolio`,
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
  image: ``
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maison de Ryan`,
        short_name: `Ryan Jeon`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/insight/(.*)" }, { regex: "^/project/(.*)" }],
        height: 3,
        prependToBody: false,
        color: `#FEDD00`,
        footerHeight: 500,
        headerHeight: 0,
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
        name: `assets`,
        path: `${__dirname}/src/assets`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "insight",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
