import React from 'react'
import { Link, graphql } from 'gatsby'

// import Bio from '../components/bio'
import CaseStudyLayout from '../components/CaseStudyLayout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class CaseStudyIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log(this.props)

    return (
      <CaseStudyLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="All case studies"
          keywords={[`case studies`, `gatsby`, `javascript`, `react`]}
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
                <Link
                  style={{ boxShadow: `none` }}
                  to={`/case-studies/${node.fields.slug}`}
                >
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </CaseStudyLayout>
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
