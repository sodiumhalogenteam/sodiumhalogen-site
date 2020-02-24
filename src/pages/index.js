import React from 'react'
import Styled from 'styled-components'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../custom.scss'
import lozad from 'lozad'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade'
import { Link, Events } from 'react-scroll'
import Img from 'gatsby-image'

//components
import Layout from '../components/layout'
import NotificationBox from '../components/NotificationBox'
import SEO from '../components/seo'
import Staff from '../components/Staff'
import Styles from '../components/Styles'
import WhoWeveHelped from '../components/WhoWeveHelped'

//team gifs
import adamThumbs from '../images/gifs/adam-thumbs-up-punch.gif'
import brantleyThumbs from '../images/gifs/brantley-double-thumbs.gif'
import brantleyFalls from '../images/gifs/brantley-down-and-out.gif'
import williamThumbs from '../images/gifs/dance-thumbs-up-wm.gif'
import fistbump from '../images/gifs/fistbump-camera.gif'
import shaneMirror from '../images/gifs/moshed_2016-1-26_4.29.25.gif'
import adamWorks from '../images/gifs/onit.gif'
import shaneKiss from '../images/gifs/shane-kiss.gif'
import teamCelebration from '../images/gifs/team-celebrate.gif'
import fistbumpTwo from '../images/gifs/thumbsup-fistbump2.gif'
import zachKeeps from '../images/gifs/zach-keep-it-coming.gif'
import zachWorks from '../images/gifs/zach-on-it.gif'

const Li = Styled.li`
  white-space: nowrap;
`

class IndexPage extends React.Component {
  componentDidMount() {
    ///Lazy Loading
    const observer = lozad()
    observer.observe()

    ///Scrolling
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments)
    })
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  handleScroll(event) {}
  render() {
    const { data } = this.props

    return (
      <Styles>
        <Particles
          style={{
            position: 'fixed',
            top: 0,
          }}
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: { value: '#000' },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: { nb_sides: 5 },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.4,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div className="team-gifs">
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Adam gives a thumbs up"
                  src=""
                  data-src={adamThumbs}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Brantley gives two thumbs up"
                  src=""
                  data-src={brantleyThumbs}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Brantley falls down"
                  src=""
                  data-src={brantleyFalls}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="William does thumbs up dance"
                  src=""
                  data-src={williamThumbs}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Fistbump"
                  src=""
                  data-src={fistbump}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Shane uses the mirror effect"
                  src=""
                  data-src={shaneMirror}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Adam gives thumbs up"
                  src=""
                  data-src={adamWorks}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Shane blows a kiss"
                  src=""
                  data-src={shaneKiss}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Team celebration"
                  src=""
                  data-src={teamCelebration}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Fistbump"
                  src=""
                  data-src={fistbumpTwo}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Zach keeps it coming"
                  src=""
                  data-src={zachKeeps}
                />
              </figure>
            </div>
            <div className="hover-gif">
              <figure className="hover-gif__img">
                <img
                  className="js-lazy-image lozad"
                  alt="Zack is on it"
                  src=""
                  data-src={zachWorks}
                />
              </figure>
            </div>
          </div>

          <header className="section-spacing">
            <div className="header-content container">
              <div className="row header-content-inner">
                <div className="col-md-12 text-center">
                  <h1>
                    We believe creating great digital products starts with{' '}
                    <em>your</em> customer. This leads to more profitable
                    applications because they actually solve human problems.
                  </h1>

                  <Link
                    className="btn btn-primary button-link btn-xl sr-button"
                    to="method"
                    smooth
                    duration={500}
                  >
                    How do we apply what we believe?
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <section>
            <div className="container section-spacing">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 drop-in text-center">
                  <Fade>
                    <h2 id="method" className="designtific-section">
                      Our Designtific Method focuses on solving your customers’
                      problems while accomplishing your business goals.
                    </h2>
                  </Fade>
                </div>
                <div className="col-lg-10 offset-lg-1 drop-in-wait">
                  <Fade>
                    <Img
                      fluid={data.atom.childImageSharp.fluid}
                      className="img-center img-fluid my-100"
                      alt="atom with a nucleas reading 'your business thinking' and one electron orbiting it that says 'design: create a  clear and hand-crafted user experience that your customers will love to use' and another electron that says 'science: experiment and investigate to know exactly what works best for your business'"
                    />
                  </Fade>
                </div>
                <div className="col-lg-10 offset-lg-1 drop-in">
                  <Fade>
                    <p>
                      Our small, multi-disciplinary team has spent the last 18
                      years experimenting and refining our process for turning
                      great ideas into solid strategy and great digital products
                      and experiences.
                    </p>

                    <Link
                      to="services"
                      smooth
                      duration={500}
                      className="btn btn-primary button-link btn-xl sr-button"
                    >
                      What do we do?
                    </Link>
                  </Fade>
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
                  <Fade>
                    <h2 id="services">We create</h2>
                  </Fade>
                </div>
                <div id="service1" className="col-md-6">
                  <Fade>
                    <Img
                      fluid={data.software.childImageSharp.fluid}
                      className="icon"
                    />
                    <h3>Software/application design &amp; development</h3>
                    <p>
                      Does your organization have internal processes that
                      software could automate? Maybe a web-based or mobile
                      application is the core of your company?
                      <br />
                      <br />
                      Our team can leverage our experience working with Bay Area
                      startups and enterprise companies. Together we can create
                      apps that are intuitive, software that saves your team
                      time and money and mobile apps that delight.{' '}
                      <em>Sound interesting?</em>
                    </p>
                    <p className="mb-100">
                      <Link to="contact" smooth duration={500}>
                        <em className="link">Let’s chat.</em>
                      </Link>
                    </p>
                    <Img
                      fluid={data.ux.childImageSharp.fluid}
                      className="icon"
                    />
                    <h3>Interaction design (UX/UI)</h3>
                    <p>
                      Is your website or application not converting the way it
                      should? Are users getting stuck or not understanding how
                      to accomplish simple tasks?
                      <br />
                      <br />
                      Research, strategy, sketching and prototyping are the
                      tools we’ll use to craft a user experience as beautiful as
                      the user interface.
                    </p>
                    <p className="mb-100">
                      <Link to="contact" smooth duration={500}>
                        <em className="link">
                          Let’s create something beautifully effective together.
                        </em>
                      </Link>
                    </p>
                  </Fade>
                </div>
                <div id="service2" className="col-md-6">
                  <Fade>
                    <Img
                      fluid={data.branding.childImageSharp.fluid}
                      className="icon"
                    />
                    <h3>Brand design &amp; development</h3>
                    <p>
                      Does your brand reflect who you are as an organization?
                      Does it show your uniqueness and inspire trust?
                      <br />
                      <br />
                      We believe your team knows what you really stand for, but
                      might not have taken the time to really understand who
                      your customer is and what your company’s purpose is.{' '}
                      <em>
                        Looking to discover your new brand and share it with the
                        world?
                      </em>
                    </p>
                    <p className="mb-100">
                      <Link to="contact" smooth duration={500}>
                        <em className="link">Let’s discover together.</em>
                      </Link>
                    </p>
                    <Img
                      fluid={data.vr.childImageSharp.fluid}
                      className="icon"
                    />
                    <h3>Virtual Reality design &amp; development</h3>
                    <p>
                      Got a crazy brilliant idea for how you can use virtual
                      reality to accomplish your business goals? Or maybe you
                      need help coming up with that crazy idea? Sounds like our
                      kind of crazy.
                      <br />
                      <br />
                      We’ve built immersive experiences for the Oculus Rift and
                      HTC Vive. <em>Intrigued?</em>
                    </p>
                    <p className="mb-100">
                      <Link to="contact" smooth duration={500}>
                        <em className="link">Let’s put our heads together.</em>
                      </Link>
                    </p>
                  </Fade>
                </div>
                <div className="col-lg-10 offset-lg-1 drop-in text-center">
                  <Fade>
                    <Link
                      to="customers"
                      smooth
                      duration={500}
                      className="btn btn-primary button-link btn-xl sr-button"
                    >
                      Who have we worked with?
                    </Link>
                  </Fade>
                </div>
              </div>
            </div>
          </section>
          <WhoWeveHelped />
          <section>
            <Fade>
              <div className="container drop-in py-100">
                <div className="row">
                  <div className="col-sm-8 offset-sm-2" id="testimonial">
                    <p>
                      "Sodium Halogen has everything I look for in a UX
                      designer: Great taste, a hunger for new approaches, a
                      logical mind, and humility that makes them a delight to
                      work with. Even working remotely, They are fantastic
                      collaborators, sharing in idea generation, giving and
                      taking feedback, and delivering great work on time."
                    </p>
                  </div>
                  <div className="offset-md-2 col-sm-3 offset-sm-2 col-xs-4 text-center">
                    <Img
                      fluid={data.janice.childImageSharp.fluid}
                      className="img-circle mt-10"
                    />
                  </div>
                  <div className="col-sm-5 col-xs-8 pt-40">
                    <cite>
                      Janice Fraser –
                      <a href="http://bionicsolution.com/">
                        Chief Product Officer at Bionic Solution and founding
                        CEO of Adaptive Path, the world’s first User Experience
                        firm
                      </a>
                    </cite>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-100 text-center">
                    <Link
                      to="contact"
                      smooth
                      duration={500}
                      className="btn btn-primary button-link btn-xl sr-button"
                    >
                      Ready to learn more?
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </section>
          <section>
            <div className="container drop-in">
              <div className="row">
                <div className="col-sm-12 team" id="team">
                  <h2>Our designtists</h2>
                  <Staff />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-dark footer">
            <div className="container vcenter">
              <div className="row">
                <div id="contact" className="text-center contact">
                  <h2>
                    Your bottom-line called and wants to know how our
                    Designtific Method can help.
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
                      <Li>
                        Jackson, TN <br />
                        <a href="tel:731-506-4535">731.506.4535</a>
                      </Li>
                      <Li>
                        Nashville, TN
                        <br />
                        <a href="tel:615-382-1550">615.382.1550</a>
                      </Li>
                      <Li>
                        Secret HQ <br />
                        <button>***.***.****</button>
                      </Li>
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
        <NotificationBox />
      </Styles>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query {
    branding: file(relativePath: { eq: "icons/brand-creation-temp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    software: file(
      relativePath: { eq: "icons/software-development-temp.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ux: file(relativePath: { eq: "icons/user-experience-temp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vr: file(relativePath: { eq: "icons/virtual-reality-temp.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    janice: file(relativePath: { eq: "head-shots/janice-fraser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    atom: file(relativePath: { eq: "designtific-atom.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
