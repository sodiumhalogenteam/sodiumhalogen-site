const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const caseStudy = path.resolve('./src/templates/case-study.js')
  const tagTemplate = path.resolve('src/templates/tags.js')
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                author {
                  id
                  bio
                  social
                  meeting
                }
                layout
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges.filter(
      edge => edge.node.frontmatter.layout === 'post'
    )

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: '/lab-notes' + post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create case study pages
    const studies = result.data.allMarkdownRemark.edges.filter(
      edge => edge.node.frontmatter.layout === 'case-study'
    )

    studies.forEach((study, index) => {
      const previous =
        index === studies.length - 1 ? null : studies[index + 1].node
      const next = index === 0 ? null : studies[index - 1].node

      createPage({
        path: '/case-studies' + study.node.fields.slug,
        component: caseStudy,
        context: {
          slug: study.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
