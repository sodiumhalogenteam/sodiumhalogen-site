import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo-sh.png'
import styled from 'styled-components'
import { palette } from '../components/Styles'

import { transitionAll, sansSerifFont } from './Styles.mixins'

// #region Styled Components
const Nav = styled.nav`
  // Navigation

  &.navbar-default {
    margin-top: 20px;
    padding: 0;
    background-color: white;
    border-color: transparent;
    ${sansSerifFont()};
    ${transitionAll()};
    .nav-inner {
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
    .navbar-brand {
      // margin: 0 auto;
      img {
        text-transform: uppercase;
        text-indent: -1000em;
        // width: 240px;
        // height: 45px;
        // margin: 15px auto 0;
      }
    }

    &:hover,
    &:focus {
      color: darken(${palette.themeprimary}, 10%);
      // background-position: 0 -70px;
    }
  }
  .navbar-header .navbar-toggle {
    font-weight: 700;
    font-size: 12px;
    color: ${palette.graydarker};
    text-transform: uppercase;
  }
  .nav {
    > li {
      > a,
      > a:focus {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 13px;
        color: ${palette.graydarker};
        &:hover {
          color: ${palette.themeprimary};
        }
      }
      &.active {
        > a,
        > a:focus {
          color: ${palette.themeprimary} !important;
          background-color: transparent;
          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    background-color: transparent;
    .navbar-header .navbar-brand {
      color: rgba(255, 255, 255, 0.7);
      background-position: 0 -70px;
      &:hover,
      &:focus {
        color: white;
      }
    }
    .nav > li > a,
    .nav > li > a:focus {
      color: rgba(255, 255, 255, 0.7);
      &:hover {
        color: white;
      }
    }
    &.affix {
      background-color: white;
      border-color: fade(${palette.graydarker}, 5%);
      .navbar-header .navbar-brand {
        color: ${palette.themeprimary};
        font-size: 14px;
        &:hover,
        &:focus {
          color: darken(${palette.themeprimary}, 10%);
        }
      }
      .nav > li > a,
      .nav > li > a:focus {
        color: ${palette.graydarker};
        &:hover {
          color: ${palette.themeprimary};
        }
      }
    }
  }
  // }
`
// #endregion

const Header = ({ siteTitle, headerLogo }) => (
  <Link
    to="/"
    style={{
      color: `white`,
      textDecoration: `none`,
    }}
  >
    <Nav id="mainNav" className="navbar navbar-default container">
      <div className="nav-inner">
        <div className="navbar-brand" href="#page-top">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </Nav>
  </Link>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
