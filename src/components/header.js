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
    <nav id="mainNav" class="navbar navbar-default container">
      <div class="nav-inner">
        <a class="navbar-brand" href="#page-top">
          <img src={logo} />
        </a>
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
