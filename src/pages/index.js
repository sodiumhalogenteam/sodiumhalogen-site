import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Styles from '../components/Styles'

//images
import molecule from '../images/Designtific-Method-molecule.png'
import software from '../images/icons/software-development-temp.png'
import ux from '../images/icons/user-experience-temp.png'
import branding from '../images/icons/brand-creation-temp.png'
import vr from '../images/icons/virtual-reality-temp.png'

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

const IndexPage = () => (
  <Styles>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div id="particles-js" />
      {/* <div className="team-gifs">
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Adam gives a thumbs up"
            src=""
            data-src="./assets/img/gifs/adam-thumbs-up-punch.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Brantley gives two thumbs up"
            src=""
            data-src="./assets/img/gifs/brantley-double-thumbs.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Brantley falls down"
            src=""
            data-src="./assets/img/gifs/brantley-down-and-out.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="William does thumbs up dance"
            src=""
            data-src="./assets/img/gifs/dance-thumbs-up-wm.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Fistbump"
            src=""
            data-src="./assets/img/gifs/fistbump-camera.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Shane uses the mirror effect"
            src=""
            data-src="./assets/img/gifs/moshed_2016-1-26_4.29.25.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Adam gives thumbs up"
            src=""
            data-src="./assets/img/gifs/onit.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Shane blows a kiss"
            src=""
            data-src="./assets/img/gifs/shane-kiss.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Team celebration"
            src=""
            data-src="./assets/img/gifs/team-celebrate.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Fistbump"
            src=""
            data-src="./assets/img/gifs/thumbsup-fistbump2.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Zach keeps it coming"
            src=""
            data-src="./assets/img/gifs/zach-keep-it-coming.gif"
          />
        </figure>
      </div>
      <div className="hover-gif">
        <figure className="hover-gif__img">
          <img
            className="js-lazy-image"
            alt="Zack is on it"
            src=""
            data-src="./assets/img/gifs/zach-on-it.gif"
          />
        </figure>
      </div>
    </div> */}

      <header className="section-spacing">
        <div className="header-content container">
          <div className="row header-content-inner">
            <div className="col-md-12 text-center">
              <h1>
                We believe creating great digital products starts with
                <em>your</em> customer. This leads to more profitable
                applications because they actually solve human problems.
              </h1>
              <a
                href="#method"
                className="btn btn-primary btn-xl sr-button js-scroll-trigger"
              >
                How do we apply what we believe?
              </a>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container section-spacing">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 drop-in text-center">
              <h2 id="method">
                Our Designtific Method focuses on solving your customers’
                problems while accomplishing your business goals.
              </h2>
            </div>
            <div className="col-lg-10 offset-lg-1 drop-in-wait">
              <img
                src={molecule}
                alt="Sodium Halogen Designtific Method molecule"
                className="img-center img-responsive my-100"
              />
            </div>
            <div className="col-lg-10 offset-lg-1 drop-in">
              <p>
                Our small, multi-disciplinary team has spent the last 17 years
                experimenting and refining our process for turning great ideas
                into solid strategy and great digital products and experiences.
              </p>
              <a
                href="#services"
                className="btn btn-primary btn-xl sr-button js-scroll-trigger"
              >
                What do we do?
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* <!-- <div id="services-image-stack" className="image-stack">
			<img src="https://sh-drop.s3.us-east-1.amazonaws.com/wd/SH-work-with-client.jpg" alt="" className="active"/>
		</div> --> */}
        <div className="container section-spacing">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 drop-in text-center">
              <h2 id="services">We create</h2>
            </div>
            <div id="service1" className="col-md-6">
              <img
                src={software}
                alt="Software Icon with Phone and Computer"
                className="icon"
              />
              <h3>Software/application design &amp; development</h3>
              <p>
                Does your organization have internal processes that software
                could automate? Maybe a web-based or mobile application is the
                core of your company?
                <br />
                <br />
                Our team can leverage our experience working with Bay Area
                startups and enterprise companies. Together we can create apps
                that are intuitive, software that saves your team time and money
                and mobile apps that delight. <em>Sound interesting?</em>
              </p>
              <p className="mb-100">
                <a href="#contact" className="js-scroll-trigger">
                  <em>Let’s chat.</em>
                </a>
              </p>
              <img src={ux} alt="User Experience Icon" className="icon" />
              <h3>Interaction design (UX/UI)</h3>
              <p>
                Is your website or application not converting the way it should?
                Are users getting stuck or not understanding how to accomplish
                simple tasks?
                <br />
                <br />
                Research, strategy, sketching and prototyping are the tools
                we’ll use to craft a user experience as beautiful as the user
                interface.
              </p>
              <p className="mb-100">
                <a href="#contact" className="js-scroll-trigger">
                  <em>
                    Let’s create something beautifully effective together.
                  </em>
                </a>
              </p>
            </div>
            <div id="service2" className="col-md-6">
              <img
                src={branding}
                alt="Branding Thumbprint Icon"
                className="icon"
              />
              <h3>Brand design &amp; development</h3>
              <p>
                Does your brand reflect who you are as an organization? Does it
                show your uniqueness and inspire trust?
                <br />
                <br />
                We believe your team knows what you really stand for, but might
                not have taken the time to really understand who your customer
                is and what your company’s purpose is.{' '}
                <em>
                  Looking to discover your new brand and share it with the
                  world?
                </em>
              </p>
              <p className="mb-100">
                <a href="#contact" className="js-scroll-trigger">
                  <em>Let’s discover together.</em>
                </a>
              </p>
              <img src={vr} alt="VR Glasses Icon" className="icon" />
              <h3>Virtual Reality design &amp; development</h3>
              <p>
                Got a crazy brilliant idea for how you can use virtual reality
                to accomplish your business goals? Or maybe you need help coming
                up with that crazy idea? Sounds like our kind of crazy.
                <br />
                <br />
                We’ve built immersive experiences for the Oculus Rift and HTC
                Vive. <em>Intrigued?</em>
              </p>
              <p className="mb-100">
                <a href="#contact" className="js-scroll-trigger">
                  <em>Let’s put our heads together.</em>
                </a>
              </p>
            </div>
            <div className="col-lg-10 offset-lg-1 drop-in text-center">
              <a
                href="#customers"
                className="btn btn-primary btn-xl sr-button js-scroll-trigger"
              >
                Who have we worked with?
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bgsh-primary py-100" id="customers">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2>Over the past 15 years, we've helped lots of companies</h2>
              <hr className="light" />
            </div>
            <div className="col-lg-12 text-center">
              {companyLogos.map(logo => (
                <img src={logo.src} alt={`${logo.alt} sh customer`} />
              ))}
              <hr className="light" />
              <p className="text-faded">
                Over 300 companies from startups to enterprise
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container drop-in py-100">
          <div className="row">
            <div className="col-sm-8 offset-sm-2" id="testimonial">
              <p>
                "Sodium Halogen has everything I look for in a UX designer:
                Great taste, a hunger for new approaches, a logical mind, and
                humility that makes them a delight to work with. Even working
                remotely, They are fantastic collaborators, sharing in idea
                generation, giving and taking feedback, and delivering great
                work on time."
              </p>
            </div>
            <div className="offset-md-2 col-sm-3 offset-sm-2 col-xs-4 text-center">
              <img
                src="http://www.sodiumhalogen.com/wp-content/uploads/2011/12/janicefraser-130x130.jpg"
                alt="Janice Fraser"
                className="img-circle mt-10"
              />
            </div>
            <div className="col-sm-5 col-xs-8 pt-40">
              <cite>
                Janice Fraser –
                <a href="http://bionicsolution.com/">
                  Chief Product Officer at Bionic Solution and founding CEO of
                  Adaptive Path, the world’s first User Experience firm
                </a>
              </cite>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-100 text-center">
              <a
                href="#contact"
                className="btn btn-primary btn-xl sr-button js-scroll-trigger"
              >
                Ready to learn more?
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container drop-in">
          <div className="row">
            <div className="col-sm-12 team" id="team">
              <h2>Our designtists</h2>
              <div className="row">
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
                <svg className="clip-svg">
                  <defs>
                    <clipPath
                      id="polygon-clip-hexagon"
                      clipPathUnits="objectBoundingBox"
                    >
                      <polygon points="0.5 0, .9 0.25, .9 0.75, 0.5 1, .05 0.75, .05 0.25" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark footer">
        <div className="container vcenter">
          <div className="row">
            <div id="contact" className="col-lg-6 offset-lg-3 text-center">
              <h2>
                Your bottom-line called and wants to know how our Designtific
                Method can help.
              </h2>
              <a
                href="http://bit.ly/shform"
                className="btn btn-primary btn-xl sr-button"
              >
                Tell us about your project
              </a>
            </div>
            <div className="footer__bottom">
              <div className="col-md-6">
                <ul>
                  <li>
                    Jackson, TN <br />
                    <a href="tel:731-506-4535">731.506.4535</a>
                  </li>
                  <li>
                    Nashville, TN <br />
                    <a href="tel:615-382-1550">615.382.1550</a>
                  </li>
                  <li>
                    Secret HQ <br />
                    <a href="#">***.***.****</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p>Ask us a Question</p>
                <a href="mailto:info@sodiumhalogen.com">
                  info@sodiumhalogen.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </Styles>
)

export default IndexPage
