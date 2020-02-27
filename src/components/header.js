import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styled from "styled-components"

import backgroundImg from "../images/placeHolder.jpeg"
import logo from "../images/logo-sh.png"

const StyledHeader = Styled.header`
  background-image: url(${backgroundImg});
  background-color: #000000b3;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  margin-bottom: 1.45rem;
`

const Top = Styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Bottom = Styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Top>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img src={logo} alt="Sodium Halogen logo - click for home page" />
      </Link>
    </Top>

    <Bottom>
      <h1 class="text-white">
        Creating Great Work
        <br />
        Start With Your Customer
      </h1>
      <p className="text-white">Research, Solutions, Expertise</p>
    </Bottom>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
