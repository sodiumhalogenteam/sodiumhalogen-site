import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../custom.scss'
// import lozad from 'lozad'
// import Particles from 'react-particles-js'
// import Fade from 'react-reveal/Fade'
// import { Link, Events } from 'react-scroll'
// import Img from 'gatsby-image'

// images
import cardImg from '../../static/workshop/assets/CO.STARTERS_sw_7798.jpg'
import strategyIcon from '../../static/workshop/assets/icon-strategy.png'
import directionIcon from '../../static/workshop/assets/icon-direction.png'
import allignmentIcon from '../../static/workshop/assets/icon-alignment.png'

//components OLD
import Layout from '../components-new/Layout'
import NotificationBox from '../components/NotificationBox'
import SEO from '../components/seo'

// components NEW
import Card from '../components-new/Card'
import Grid from '../components-new/Grid'
// import Container from '../components-new/Container'
import IconTile from '../components-new/IconTile'

const WebflowComponentTestPage = () => {
  return (
    <div>
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section class="w-container w600">
          <h2>
            Without a clear destination and plan for getting there, how will you
            know when you’ve arrived?
          </h2>
          <p>
            If you were taking your family on a trip, you wouldn’t pile in your
            car, pull on the road and then try to determine your destination.
            But smart companies like yours do that everyday.
          </p>
          <p>
            They start business projects by loading their team into a conference
            room, and deciding a general direction as vague as “go west!” But
            they haven’t determined a firm destination, the route they’ll take,
            or if they have enough fuel to arrive. Most importantly...they
            haven’t asked why they want to go.
          </p>
          <p>We’ve been there too...there is a better way.</p>
        </section>
        <section className="container card-section">
          <Grid>
            <IconTile
              img={strategyIcon}
              title="Start with strategy"
              description="Stop wasting time and money. Get the right people in the room, and get the best ideas from everyone."
            />
            <IconTile
              img={directionIcon}
              title="Get clear direction"
              description="Determine and agree to what success looks like, and how you can get there."
            />
            <IconTile
              img={allignmentIcon}
              title="Create alignment"
              description="Get all the key people in your organization moving in the same direction to finish a project on time and on budget."
            />
          </Grid>
        </section>
        <section class="container card-section">
          <h2>Strategy Exercises</h2>
          <p className="w800">
            When we do a Strategy Workshop in-person, we pull from over a dozen
            different interactive exercises. Now we are making each of these
            exercises available to you. Each course comes with a video to walk
            you through the exercise and PDF worksheet.
          </p>
          <Grid>
            <Card
              title="Audience"
              description="Make better business decisions by determining who your customer is and using that knowledge as your guide to customer-centered product development."
              steps={['Video Walkthrough', 'Downloadable Worksheet']}
              time="45 min"
              price="50"
              img={cardImg}
            />
            <Card
              title="Audience"
              description="Make better business decisions by determining who your customer is and using that knowledge as your guide to customer-centered product development."
              steps={['Video Walkthrough', 'Downloadable Worksheet']}
              time="45 min"
              price="50"
              img={cardImg}
            />
            <Card
              title="Audience"
              description="Make better business decisions by determining who your customer is and using that knowledge as your guide to customer-centered product development."
              steps={['Video Walkthrough', 'Downloadable Worksheet']}
              time="45 min"
              price="50"
              img={cardImg}
            />
            <Card
              title="Audience"
              description="Make better business decisions by determining who your customer is and using that knowledge as your guide to customer-centered product development."
              steps={['Video Walkthrough', 'Downloadable Worksheet']}
              time="45 min"
              price="50"
              img={cardImg}
            />
          </Grid>
        </section>
        <section className="card-section mb-50">
          <h2>In-person, guided experience - $2,500</h2>
        </section>
        {/* <ImgGrid>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </ImgGrid> */}
        <section className="card-section"></section>
      </Layout>
      <NotificationBox />
    </div>
  )
}

export default WebflowComponentTestPage

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
