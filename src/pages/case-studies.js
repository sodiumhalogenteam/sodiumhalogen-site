import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

// import Bio from '../components/bio'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class CaseStudyIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="All case studies"
          keywords={[`case studies`, `gatsby`, `javascript`, `react`]}
        />
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
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
              <h3>
                <Link
                  style={{ boxShadow: `none` }}
                  to={`/case-studies/${node.fields.slug}`}
                >
                  {title}
                </Link>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </BlogLayout>
    )
  }
}

export default CaseStudyIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "case-study" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
