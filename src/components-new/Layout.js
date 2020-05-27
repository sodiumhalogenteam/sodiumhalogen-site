import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import burger from '../images/burger.svg'

import Styles from '../components/Styles'
import './webflow-styles.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteInfoQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Styles>
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
            <Link
              to="/case-studies/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Case Studies
            </Link>
          </Menu>
        </Styles>
        <div className="hero">
          <div className="intro-header">
            <div
              className="navigation navbar navbar-2 navbar-3 w-nav"
              data-animation="default"
              data-collapse="medium"
              data-duration="400"
            >
              <div className="navigation-wrap">
                <a
                  className="logo-link w-nav-brand"
                  href="https://SodiumHalogen.com"
                >
                  <img
                    alt=""
                    className="logo-image"
                    sizes="(max-width: 479px) 83vw, 276px"
                    src="https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo.png"
                    srcSet="
                  https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-500.png   500w,
                  https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-800.png   800w,
                  https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-1080.png 1080w,
                  https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-1600.png 1600w,
                  https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo.png        1844w
                "
                    width="276"
                  />
                </a>
                <div className="menu">
                  <div className="menu-button w-nav-button">
                    <img
                      alt=""
                      className="menu-icon"
                      src="https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a51d4b13e2248f623a43f_menu-icon.png"
                      width="22"
                    />
                  </div>
                </div>
                <a
                  className="button cc-contact-us w-inline-block"
                  href="https://sodiumhalogen.typeform.com/to/iKe3eC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="button-text">Contact Us</div>
                </a>
              </div>
              <div className="w-nav-overlay" data-wf-ignore=""></div>
            </div>
            <div className="intro-content cc-homepage">
              <div className="intro-text">
                <h1>Strategy Workshop</h1>
              </div>
            </div>
          </div>
        </div>
        <div>{children}</div>

        <div className="cta">
          <div className="container">
            <h2>Need help deciding?</h2>
            <p>
              Can't decide which exercises are right for you? <br />
              You can receive a Strategy Session consultation with just $95.
            </p>
            <a
              className="button cc-jumbo-button w-inline-block"
              href="https://sodiumhalogen.com/wm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-block mobile">
                Schedule your Strategy Session
              </div>
              <div className="text-block">Schedule your Strategy Session</div>
            </a>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <div className="footer-wrap">
              <a className="logo-link w-nav-brand" href="https://SodiumHalogen.com">
                <img
                  alt=""
                  className="image"
                  sizes="(max-width: 479px) 90vw, 188px"
                  src="https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo.png"
                  srcSet="
                https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-500.png   500w,
                https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-800.png   800w,
                https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-1080.png 1080w,
                https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo-p-1600.png 1600w,
                https://uploads-ssl.webflow.com/5e6a51d4adf84bf874e2d8ed/5e6a5332a5ebb57c5e441737_white-logo.png        1844w
              "
                  width="188"
                />
              </a>

              <div className="footer-text">
                <a href="mailto:info@sodiumhalogen.com">
                  info@sodiumhalogen.com
                </a>{' '}
                •<a href="tel:731.506.4535">731.506.4535</a>
              </div>
              <a
                className="button cc-contact-us w-inline-block"
                href="https://sodiumhalogen.typeform.com/to/iKe3eC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="button-text">Contact US</div>
              </a>
              <a
                className="button cc-contact-us mobile w-inline-block"
                href="https://sodiumhalogen.typeform.com/to/iKe3eC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="button-text">Contact US</div>
              </a>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
