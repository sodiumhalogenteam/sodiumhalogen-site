import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// import Img from 'gatsby-image'
import Employee from './Employee'

// gifs
import williamGif from '../images/gifs/fistbump-camera.gif'
import barrettGif from '../images/gifs/barrett-wave.gif'
import brantleyGif from '../images/gifs/brantley-down-and-out.gif'
import zachGif from '../images/gifs/zach-keep-it-coming.gif'
import derrickGif from '../images/gifs/youre-awesome-derrick.gif'
import adamGif from '../images/gifs/adam-thumbs-up-punch.gif'
import jillGif from '../images/gifs/jill-waving.gif'
import shaneGif from '../images/gifs/shane-kiss.gif'
import jeremyGif from '../images/gifs/jeremy-bigmath.gif'
import chanceGif from '../images/gifs/chance-juggling.gif'

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
      <Employee
        firstName="William"
        lastName="Donnell"
        img={headshots.william.childImageSharp.fluid}
        gif={williamGif}
        title="Founder &amp; Lead Designtist"
        email="wm@SodiumHalogen.com"
      />
      <Employee
        firstName="Barrett"
        lastName="Gay"
        img={headshots.barrett.childImageSharp.fluid}
        gif={barrettGif}
        title="Founder &amp; Sr. Software &amp; VR Dev"
        email="barrett@sodiumhalogen.com"
      />
      <Employee
        firstName="Quincy"
        lastName="Jones"
        img={headshots.quincy.childImageSharp.fluid}
        title="Founder &amp; Sr. Hardware &amp; VR Dev"
        email="quincy@SodiumHalogen.com"
      />
      <Employee
        firstName="Shane"
        lastName="Aday"
        img={headshots.shane.childImageSharp.fluid}
        gif={shaneGif}
        title="Design Alchemist"
        email="shane@sodiumhalogen.com"
      />
      <Employee
        firstName="Chance"
        lastName="Smith"
        img={headshots.chance.childImageSharp.fluid}
        gif={chanceGif}
        title="Innovation Strategist"
        email="chance@sodiumhalogen.com"
      />
      <Employee
        firstName="Brantley"
        lastName="English"
        img={headshots.brantley.childImageSharp.fluid}
        gif={brantleyGif}
        title="Code Architect"
        email="brantley@sodiumhalogen.com"
      />
      <Employee
        firstName="Zach"
        lastName="Boatwright"
        img={headshots.zach.childImageSharp.fluid}
        gif={zachGif}
        title="Code Agronomist"
        email="zach@sodiumhalogen.com"
      />
      <Employee
        firstName="Katie"
        lastName="Cooper"
        img={headshots.kaitie.childImageSharp.fluid}
        title="Brand Designtist"
        email="katie@sodiumhalogen.com"
      />
      <Employee
        firstName="Derrick"
        lastName="Smith"
        img={headshots.derrick.childImageSharp.fluid}
        gif={derrickGif}
        title="Content Designtist"
        email="derrick@sodiumhalogen.com"
      />
      <Employee
        firstName="Adam"
        lastName="Curl"
        img={headshots.adam.childImageSharp.fluid}
        gif={adamGif}
        title="Code Chemist"
        email="adam@sodiumhalogen.com"
      />
      <Employee
        firstName="Jill"
        lastName="Donnell"
        img={headshots.jill.childImageSharp.fluid}
        gif={jillGif}
        title="Pure Awesome"
        email="jill@sodiumhalogen.com"
      />
      <Employee
        firstName="Braden"
        lastName="Donnell"
        img={headshots.braden.childImageSharp.fluid}
        title="Photography and Video"
        email="braden@sodiumhalogen.com"
      />
      <Employee
        firstName="Jeremy"
        lastName="Batchelor"
        img={headshots.jeremy.childImageSharp.fluid}
        gif={jeremyGif}
        title="Byte Biologist"
        email="jeremy@sodiumhalogen.com"
      />
    </Styles>
  )
}

export default Staff
