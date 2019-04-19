import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { palette } from '../components/Styles'
import styled from 'styled-components'
// #region Styled Components
const StyledLink = styled(Link)`
  color: ${palette.themeprimary};
  &:hover {
    color: ${palette.gray};
  }
`
// #endregion
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div
              key={node.fields.slug}
              style={{
                marginBottom: rhythm(2),
              }}
            >
              <h3
                style={{
                  marginBottom: rhythm(1 / 3),
                }}
              >
                <StyledLink
                  style={{ boxShadow: `none` }}
                  to={`/lab-notes/${node.fields.slug}`}
                >
                  {title}
                </StyledLink>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
