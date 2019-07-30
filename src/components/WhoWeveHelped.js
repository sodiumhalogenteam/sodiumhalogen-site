import React from 'react'

//company images
import popvox from '../images/logo-images/logo-popvox.png'
import geCapital from '../images/logo-images/logo-ge-capital.png'
import vandy from '../images/logo-images/logo-vandy.png'
import networkForGood from '../images/logo-images/logo-network-for-good.png'
import iron from '../images/logo-images/logo-iron.png'
import estateAssist from '../images/logo-images/logo-estate-assist.png'
import haven from '../images/logo-images/logo-haven.png'
import allygn from '../images/logo-images/logo-allygn.png'
import bypass from '../images/logo-images/logo-bypass.png'
import chickfila from '../images/logo-images/logo-chick-fil-a.png'
import zonda from '../images/logo-images/logo-zonda.png'
import mars from '../images/logo-images/logo-mars.png'

const companyLogos = [
  {
    src: popvox,
    alt: 'Popvox',
  },
  {
    src: geCapital,
    alt: 'GE Captial',
  },
  {
    src: vandy,
    alt: 'Vanderbilt',
  },
  {
    src: networkForGood,
    alt: 'Network for Good',
  },
  {
    src: iron,
    alt: 'Iron',
  },
  {
    src: estateAssist,
    alt: 'Estate Assist',
  },
  {
    src: haven,
    alt: 'Haven',
  },
  {
    src: allygn,
    alt: 'Allygn',
  },
  {
    src: bypass,
    alt: 'Bypass',
  },
  {
    src: chickfila,
    alt: 'Chick Fil A',
  },
  {
    src: zonda,
    alt: 'Zonda',
  },
  {
    src: mars,
    alt: 'Mars',
  },
]

const WhoWeveHelped = ({ noMargin }) => (
  <section
    className="bgsh-primary py-100"
    id="customers"
    style={noMargin ? { margin: 0 } : null}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <h2>Over the past 18 years, we've helped lots of companies</h2>
          <hr className="light" />
        </div>
        <div className="col-lg-12 text-center">
          {companyLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={`${logo.alt} sh customer`} />
          ))}
          <hr className="light" />
          <p className="text-faded">
            Over 300 companies from startups to enterprise
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default WhoWeveHelped
