import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo-sh.png'

const Header = ({ siteTitle, headerLogo }) => (
  <Link
    to="/"
    style={{
      color: `white`,
      textDecoration: `none`,
    }}
  >
    <nav id="mainNav" className="navbar navbar-default container">
      <div className="nav-inner">
        <div className="navbar-brand" href="#page-top">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </nav>
  </Link>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
