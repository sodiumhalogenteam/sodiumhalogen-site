import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Img from 'gatsby-image'

// #region Styled Components
const Styles = styled.div`
  .polygon-each-img-wrap {
    .polygon-clip-hexagon {
      -webkit-clip-path: polygon(
        50% 3%,
        90% 25%,
        90% 75%,
        50% 97%,
        10% 75%,
        10% 25%
      );
      clip-path: polygon(50% 3%, 90% 25%, 90% 75%, 50% 97%, 10% 75%, 10% 25%);
    }
  }
`
// #endregion

const Staff = () => {
  const headshots = useStaticQuery(graphql`
    query HeaderQuery {
      william: file(relativePath: { eq: "head-shots/william.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      barrett: file(relativePath: { eq: "head-shots/barrett.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      quincy: file(relativePath: { eq: "head-shots/quincy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shane: file(relativePath: { eq: "head-shots/shane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      chance: file(relativePath: { eq: "head-shots/chance.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      brantley: file(relativePath: { eq: "head-shots/brantley.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      zach: file(relativePath: { eq: "head-shots/zach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      kaitie: file(relativePath: { eq: "head-shots/kaitie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      derrick: file(relativePath: { eq: "head-shots/derrick.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      adam: file(relativePath: { eq: "head-shots/adam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jill: file(relativePath: { eq: "head-shots/jill.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      braden: file(relativePath: { eq: "head-shots/braden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jeremy: file(relativePath: { eq: "head-shots/jeremy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log(headshots)

  return (
    <Styles className="row">
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.william.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">William Donnell</p>
        <p className="team__title">Founder &amp; Lead Designtist</p>
        <p className="team__email">
          <a href="mailto:wm@SodiumHalogen.com" className="btn">
            email William
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.barrett.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Barrett Gay</p>
        <p className="team__title">Founder &amp; Sr. Software &amp; VR Dev</p>
        <p className="team__email">
          <a href="mailto:barrett@SodiumHalogen.com" className="btn">
            email Barrett
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.quincy.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Quincy Jones</p>
        <p className="team__title">Founder &amp; Sr. Hardware &amp; VR Dev</p>
        <p className="team__email">
          <a href="mailto:quincy@SodiumHalogen.com" className="btn">
            email Quincy
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.shane.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Shane Aday</p>
        <p className="team__title">Design Alchemist</p>
        <p className="team__email">
          <a href="mailto:shane@SodiumHalogen.com" className="btn">
            email Shane
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.chance.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Chance Smith</p>
        <p className="team__title">Innovation Strategist</p>
        <p className="team__email">
          <a href="mailto:chance@SodiumHalogen.com" className="btn">
            email Chance
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.brantley.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Brantley English</p>
        <p className="team__title">Code Architect</p>
        <p className="team__email">
          <a href="mailto:brantley@SodiumHalogen.com" className="btn">
            email Brantley
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.zach.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Zach Boatwright</p>
        <p className="team__title">Code Agronomist</p>
        <p className="team__email">
          <a href="mailto:zach@SodiumHalogen.com" className="btn">
            email Zach
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.kaitie.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Katie Cooper</p>
        <p className="team__title">Brand Designtist</p>
        <p className="team__email">
          <a href="mailto:katie@SodiumHalogen.com" className="btn">
            email Katie
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.derrick.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Derrick Smith</p>
        <p className="team__title">Content Designtist</p>
        <p className="team__email">
          <a href="mailto:derrick@SodiumHalogen.com" className="btn">
            email Derrick
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.adam.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Adam Curl</p>
        <p className="team__title">Code Chemist</p>
        <p className="team__email">
          <a href="mailto:adam@SodiumHalogen.com" className="btn">
            email Adam
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.jill.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Jill Donnell</p>
        <p className="team__title">Pure Awesome</p>
        <p className="team__email">
          <a href="mailto:jill@SodiumHalogen.com" className="btn">
            email Jill
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.braden.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Braden Donnell</p>
        <p className="team__title">Photography & Video</p>
        <p className="team__email">
          <a href="mailto:braden@SodiumHalogen.com" className="btn">
            email Braden
          </a>
        </p>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3 team__member">
        <div className="polygon-each-img-wrap">
          <Img
            fluid={headshots.jeremy.childImageSharp.fluid}
            className="polygon-clip-hexagon"
          />
        </div>
        <p className="team__name">Jeremy Batchelor</p>
        <p className="team__title">Byte Biologist</p>
        <p className="team__email">
          <a href="mailto:jeremy@SodiumHalogen.com" className="btn">
            email Jeremy
          </a>
        </p>
      </div>
      {/* <svg className="clip-svg">
          <defs>
            <clipPath
              id="polygon-clip-hexagon"
              clipPathUnits="objectBoundingBox"
            >
              <polygon points="0.5 0, .9 0.25, .9 0.75, 0.5 1, .05 0.75, .05 0.25" />
            </clipPath>
          </defs>
        </svg> */}
    </Styles>
  )
}

export default Staff
