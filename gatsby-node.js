exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
    const pageTemplate = require.resolve(`./src/templates/pageTemplate.js`)
    const artGallery = require.resolve(`./src/pages/art.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                Image01
                slug
                gallery
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      
      {
        createPage({
          path: node.frontmatter.slug,
          component: pageTemplate,
          context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
            gallery: node.frontmatter.gallery,
            Image01: node.frontmatter.Image01
          },
        })
      }
    })
  }