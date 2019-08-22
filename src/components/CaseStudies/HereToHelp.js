import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// gifs
import williamFistbump from '../../images/gifs/fistbump-camera.gif'
import jillWaving from '../../images/gifs/jill-waving.gif'
import shaneKiss from '../../images/gifs/shane-kiss.gif'
import chanceJuggling from '../../images/gifs/chance-juggling.gif'

const Styles = styled.section`
  h3 {
    text-align: center;
    font-size: 1.35rem;
  }
  p {
    text-align: center;
  }
  .text-center {
    margin: auto;
  }
  hr {
    margin: 20px auto;
  }
`

const Headshots = styled.div`
  display: flex;
  & > div {
    width: 20%;
    padding: 0 1% 20px;
    figure {
      width: 100%;
      position: relative;
      .headshot {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        clip-path: polygon(50% 3%, 90% 25%, 90% 75%, 50% 97%, 10% 75%, 10% 25%);
      }
      .gif {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        clip-path: polygon(50% 3%, 90% 25%, 90% 75%, 50% 97%, 10% 75%, 10% 25%);
        opacity: 0;
      }
      &:hover {
        .headshot {
          opacity: 0;
        }
        .gif {
          opacity: 1;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    display: block;
    & > div {
      width: 100%;
    }
  }
`

const HereToHelp = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      williamHeadshot: file(relativePath: { eq: "head-shots/william.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jillHeadshot: file(relativePath: { eq: "head-shots/jill.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shaneHeadshot: file(relativePath: { eq: "head-shots/shane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      quincyHeadshot: file(relativePath: { eq: "head-shots/quincy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      chanceHeadshot: file(relativePath: { eq: "head-shots/chance.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Styles id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">We're here to help</h2>
            <hr className="primary" />
            <p>{children}</p>
          </div>
          <Headshots className="employees col-sm-12">
            <div className="employees__employee">
              <figure className="employees__headshot">
                <Img
                  className="headshot"
                  fluid={data.williamHeadshot.childImageSharp.fluid}
                />
                <img className="gif" src={williamFistbump} alt="william gif" />
              </figure>
              <h3>William Donnell</h3>
              <p>Lead Designtist &amp; Founder</p>
            </div>
            <div className="employees__employee">
              <figure className="employees__headshot">
                <Img
                  className="headshot"
                  fluid={data.jillHeadshot.childImageSharp.fluid}
                />
                <img className="gif" src={jillWaving} alt="jill gif" />
              </figure>
              <h3>Jill Donnell</h3>
              <p>Pure Awesome</p>
            </div>
            <div className="employees__employee">
              <figure className="employees__headshot">
                <Img
                  className="headshot"
                  fluid={data.shaneHeadshot.childImageSharp.fluid}
                />
                <img className="gif" src={shaneKiss} alt="shane gif" />
              </figure>
              <h3>Shane Aday</h3>
              <p>Design Alchemist</p>
            </div>
            <div className="employees__employee">
              <figure className="employees__headshot">
                <Img
                  className="headshot"
                  fluid={data.quincyHeadshot.childImageSharp.fluid}
                />
                <div className="gif">
                  <p>
                    Quincy does
                    <br />
                    not do gifs.
                  </p>
                </div>
              </figure>
              <h3>Quincy Jones</h3>
              <p>Sr. Hardware &amp; VR Dev</p>
            </div>
            <div className="employees__employee">
              <figure className="employees__headshot">
                <Img
                  className="headshot"
                  fluid={data.chanceHeadshot.childImageSharp.fluid}
                />
                <img className="gif" src={chanceJuggling} alt="chance gif" />
              </figure>
              <h3>Chance Smith</h3>
              <p>Innovation Strategist</p>
            </div>
          </Headshots>
        </div>
      </div>
    </Styles>
  )
}

export default HereToHelp
