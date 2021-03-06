const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const pageTemplate = path.resolve(`./src/templates/page.js`)

  allPages.forEach((page) => {
    createPage({
      // will be the url for the page
      path: page.uri,
      // specify the component template of your choice
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
    })
  })
}
