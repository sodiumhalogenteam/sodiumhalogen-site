import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import Styles from '../components/Styles'
import burger from '../images/burger.svg'

import Header from './header'
import './layout.css'
import '../custom.scss'

import addVideoAsk from '../utils/addVideoAsk'

const BlogLayout = ({ children, location }) => {
  React.useEffect(() => {
    if (!document.getElementById('videoask-script')) {
      addVideoAsk()
    }
  })

  return (
    <StaticQuery
      query={graphql`
        query BlogSiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Styles>
            <Menu
              customBurgerIcon={<img src={burger} alt="burger icon" />}
              right
            >
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Homepage
              </Link>
              <Link
                to="/lab-notes/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Lab Notes
              </Link>
            </Menu>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 700,
                padding: `15px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          </Styles>
        </>
      )}
    />
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
