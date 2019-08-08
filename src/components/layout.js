import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import burger from '../images/burger.svg'

import Header from './header'
import './layout.css'
import '../custom.scss'

import addVideoAsk from '../utils/addVideoAsk'

const Layout = ({ children, location }) => {
  React.useEffect(() => {
    if (!document.getElementById('videoask-script')) {
      addVideoAsk()
    }
  })

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Menu customBurgerIcon={<img src={burger} alt="burger icon" />} right>
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
          <div>{children}</div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
