import React, { Component } from 'react'
import styled from 'styled-components'

// #region Styled Components
const Styles = styled.div`
  .polygon-each-img-wrap {
    .polygon-clip-hexagon {
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      /* clip-path: url('#polygon-clip-hexagon'); */
    }
  }
`
// #endregion

class Staff extends Component {
  render() {
    return (
      <Styles className="row">
        <div className="col-xs-6 col-sm-4 col-md-3 team__member">
          <div className="polygon-each-img-wrap">
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/cs/william_head_sm-e1517091609512.jpg"
              alt="demo-clip-heptagon"
              className="polygon-clip-hexagon"
            />
          </div>
          <p className="team__name">William Donnell</p>
          <p className="team__title">Lead Desgintist &amp; Founder</p>
          <p className="team__email">
            <a href="mailto:wm@SodiumHalogen.com" className="btn">
              email William
            </a>
          </p>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3 team__member">
          <div className="polygon-each-img-wrap">
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/wd/team-barrett-gay-1.jpg"
              alt="demo-clip-heptagon"
              className="polygon-clip-hexagon"
            />
          </div>
          <p className="team__name">Barrett Gay</p>
          <p className="team__title">Sr. Software &amp; VR Dev</p>
          <p className="team__email">
            <a href="mailto:barrett@SodiumHalogen.com" className="btn">
              email Barrett
            </a>
          </p>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3 team__member">
          <div className="polygon-each-img-wrap">
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/wd/team-quincy-jones-1.jpg"
              alt="demo-clip-heptagon"
              className="polygon-clip-hexagon"
            />
          </div>
          <p className="team__name">Quincy Jones</p>
          <p className="team__title">Sr. Hardware &amp; VR Dev</p>
          <p className="team__email">
            <a href="mailto:quincy@SodiumHalogen.com" className="btn">
              email Quincy
            </a>
          </p>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3 team__member">
          <div className="polygon-each-img-wrap">
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/cs/shane_sm.jpg"
              alt="demo-clip-heptagon"
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
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/cs/chance_smith-sh1.jpg"
              alt="demo-clip-heptagon"
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
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/cs/team-brantley.jpg"
              alt="demo-clip-heptagon"
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
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/zb/zach-head-bw.jpg"
              alt="demo-clip-heptagon"
              className="polygon-clip-hexagon"
            />
          </div>
          <p className="team__name">Zach Boatwright</p>
          <p className="team__title">Content Agronomist</p>
          <p className="team__email">
            <a href="mailto:zach@SodiumHalogen.com" className="btn">
              email Zach
            </a>
          </p>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3 team__member">
          <div className="polygon-each-img-wrap">
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/cs/adam-curl-sh.jpg"
              alt="demo-clip-heptagon"
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
            <img
              src="https://sh-drop.s3.us-east-1.amazonaws.com/cs/jill_sm.jpg"
              alt="demo-clip-heptagon"
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
}

export default Staff
