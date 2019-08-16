import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

// import Bio from '../components/bio'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const CaseStudy = ({ title, excerpt, url }) => (
  <div
    style={{
      marginBottom: rhythm(2),
    }}
  >
    <h3>
      <Link style={{ boxShadow: `none` }} to={url}>
        {title}
      </Link>
    </h3>
    <p>{excerpt}</p>
  </div>
)

class CaseStudyIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

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
        {/* <CaseStudy
          title="Vertex"
          url="/case-studies/vertex/"
          excerpt="Synapse is a CLI program (command line interface) created by The Vertex Project that allows analysts to inspect massive amounts of data by showing the interconnections between the different values. Synapse is one of the most powerful data analysis tools currently available, but due to the fact that it was only available through the terminal, it was difficult for new users to learn and use..."
        /> */}
        <CaseStudy
          title="Fellowship"
          url="/case-studies/fellowship/"
          excerpt="We designed a custom ministry group finder for the small group leaders and attenders at Fellowship Bible Church Jackson, and we can create something amazing for you. Put our Designtific Method to work hitting your ministry's goals."
        />
        <CaseStudy
          title="Anderson Design Group"
          url="/case-studies/adg/"
          excerpt="We designed a custom eCommerce website for illustrators and artists at Anderson Deisgn Group, and we can create something amazing for you. Put our Designtific Method to work hitting your organization's goals."
        />
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
  }
`
