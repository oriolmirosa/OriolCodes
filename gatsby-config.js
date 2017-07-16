module.exports = {
  siteMetadata: {
    title: `Oriol.Codes`,
    subtitle: `Data Science and Coding`,
    author: `Oriol Mirosa`,
    disqusShortname: `oriolmirosa`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
  ],
}
