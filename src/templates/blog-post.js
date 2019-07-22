import React from 'react'
import { Link, graphql } from 'gatsby'
import TagsSection from '../components/tags-section'
import styled from 'styled-components'

// import Bio from '../components/bio'
import BlogLayout from '../components/BlogLayout'
import BlogContainer from '../components/BlogContainer'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

// #region Styled Components
const BlogFooter = styled.div`
  display: inline-block;
  list-style: none;
  width: 60%;
  text-align: center;
  padding: 0 !important;
  margin: 0 20%;
  h2 {
    margin: 0 15% 30px;
  }
`

const CTA = styled.div`
  margin-bottom: 100px;
`
// #endregion

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    console.log(post)

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <BlogContainer>
          {post.frontmatter.title &&
          post.frontmatter.layout !== 'case-study' ? (
            <h1>{post.frontmatter.title}</h1>
          ) : null}
          {post.frontmatter.date || post.frontmatter.author ? (
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                marginTop: rhythm(1 / 4),
              }}
            >
              {post.frontmatter.date ? post.frontmatter.date : null}
              {post.frontmatter.date && post.frontmatter.author ? ' | ' : null}
              {post.frontmatter.author ? (
                <a href={`${post.frontmatter.author.social}`}>
                  {post.frontmatter.author.id}
                </a>
              ) : null}
            </p>
          ) : null}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          {/* <Bio /> */}
        </BlogContainer>
        <BlogFooter>
          {post.frontmatter.layout === 'case-study' ? (
            <CTA>
              <h2>
                Do you have something that you'd like to buld but don't know how
                to get started?
              </h2>
              <a
                href="https://william10.typeform.com/to/iKe3eC"
                class="btn btn-primary"
              >
                Tell Us About Your Idea
              </a>
            </CTA>
          ) : null}
          <li>
            <TagsSection
              tags={this.props.data.markdownRemark.frontmatter.tags}
            />
          </li>
          <li>
            {previous && (
              <Link to={`/lab-notes/${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`lab-notes/${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </BlogFooter>
      </BlogLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        layout
        author {
          id
          bio
          social
          meeting
        }
      }
    }
  }
`
