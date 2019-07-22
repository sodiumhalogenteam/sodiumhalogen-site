import React from 'react'
import { Link, graphql } from 'gatsby'
import TagsSection from '../components/tags-section'
import styled from 'styled-components'

// import Bio from '../components/bio'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

// #region Styled Components
const BlogContainer = styled.div`
  /* margin: 0 15%; */
  max-width: 700;
  padding: 15px 0 1.45rem;
  padding-top: 0;

  h1,
  h2,
  h3,
  p {
    margin: 0 25%;
    padding-bottom: ${rhythm(0.75)};
  }

  h2 {
    line-height: 40px;
  }

  hr {
    margin: 0 20% ${rhythm(1)};
  }

  div.header {
    background: #e4e8eb;
    width: 100%;
    height: 50vh;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      height: 100% !important;
      span {
        padding-bottom: 0 !important;
        background-image: none !important;
        height: 100% !important;
        img {
          box-shadow: none !important;
          position: relative !important;
          width: auto !important;
        }
      }
    }
  }

  div.blog-image-container {
    margin: 100px 10%;
    p {
      font-size: 15px;
      text-align: center;
      margin-top: ${rhythm(2)};
    }
    div {
      display: flex;
      flex: 1;
      padding-top: 30px;
      &:first-child {
        padding-top: 0;
      }
      a {
        flex: 1;
        padding-left: 30px;
        &:first-child {
          padding-left: 0;
        }
        span {
          background-image: none !important;
          padding-bottom: 0 !important;
          max-width: 100% !important;
          span {
            img {
              position: relative !important;
              width: 100%;
            }
          }
        }
      }
    }
  }
`

const BlogFooter = styled.ul`
  display: inline-block;
  list-style: none;
  width: 60%;
  text-align: center;
  padding: 0 !important;
  margin: 0 20%;
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
