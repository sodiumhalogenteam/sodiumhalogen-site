import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const BlogContainer = styled.div`
  /* margin: 0 15%; */
  max-width: 700;
  padding: 15px 0 1.45rem;
  padding-top: 0;

  h1,
  h2,
  h3,
  p,
  small {
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

export default BlogContainer
