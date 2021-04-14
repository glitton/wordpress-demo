let facebook_pixel = ""
let gtm = "1234"

module.exports = {
  siteMetadata: {
    title: `Gatsby Landing Page Starter Modified for Wordpress`,
    description: `A slightly opinionated Gatsby Landing Page starter template. Modified to work with Wordpress`,
    author: `Jeremy Lynch`,
    modified: `Generosa Litton for using with Wordpress`,
    originalSiteUrl: `https://gatsby-strapi-starter.netlify.com/`,
    gatsbyCloudUrl: `https://wordpressdemomain.gatsbyjs.io/`,
    phone: "1800123456",
    fax: "180012345",
    address: "123 fake street",
    email: "contact@test.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `https://gatsbysales.wpengine.com/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtm,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "./src/assets/images/gatsby-icon.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-styled-components`,
  ],
}
