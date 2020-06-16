import React from 'react'
import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'
// import Img from 'gatsby-image'
import styled from 'styled-components'

// components
import Styles from '../../components/Styles'
import Layout from '../../components/layout'
import Footer from '../../components/CaseStudies/Footer'
import WhoWeveHelped from '../../components/WhoWeveHelped'
import DesignAtom from '../../components/CaseStudies/DesignAtom'
import FreeWebsiteChecklist from '../../components/CaseStudies/FreeWebsiteChecklist'
import HereToHelp from '../../components/CaseStudies/HereToHelp'

const Header = styled.div`
  background: #e4e8eb;
  width: 100%;
  height: 50vh;
  text-align: center;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-color: #696969;
  background-blend-mode: overlay;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  hr {
    margin: 50px auto;
  }
  div {
    /* padding: 25%; */
    h1 {
      text-shadow: #000 0 0 40px;
      color: #fff;
    }
  }
`

const Testimonials = styled.section`
  padding: 100px;
  margin: 100px 0 0 0 !important;
  h2,
  p {
    color: #fff;
  }
  .row {
    justify-content: center;
    &.content {
      div {
        flex: 0 0 25% !important;
      }
    }
  }
  img {
    border-radius: 100%;
  }
  @media only screen and (max-width: 768px) {
    padding: 5%;
    .row.testimonial-image {
      display: flex;
      justify-content: space-around;
      div.img {
        width: 40%;
      }
      div {
        width: 60%;
      }
      padding-bottom: 40px;
    }
    .row {
      display: block;
    }
  }
`

class Fellowship extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Styles location={this.props.location} title={siteTitle}>
        <Layout>
          <Header url={data.headerImage.childImageSharp.original.src}>
            <div>
              <h1>
                Curious about the team that designed <br /> Anderson Design
                Group's New Site?
              </h1>
            </div>
          </Header>
          <WhoWeveHelped noMargin />
          <DesignAtom
            header="The key is our Designtific Method"
            text1="It’s the science of making things work the way they should – combined with the design sensibilities that make you enjoy looking at them. Design + Science."
            text2="We pair your expertise of your market with our technical expertise to solve your customer's problems and accomplish your business objectives."
          />
          <Testimonials className="bg-primary" id="testimonials">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                  <h2 class="section-heading">Don't take our word for it</h2>
                  <hr class="light" />
                </div>
              </div>
              <div class="row content">
                <div class="col-sm-4 text-center">
                  <div class="service-box">
                    <p>
                      “William and his team helped us understand how to connect
                      with our customers.”
                    </p>
                    <cite class="text-faded">
                      Ben Ferguson – Allygn and PPL
                    </cite>
                  </div>
                </div>
                <div class="col-sm-4 text-center">
                  <div class="service-box">
                    <p>
                      “Sodium Halogen helped us have our biggest sales in
                      December!”
                    </p>
                    <cite class="text-faded">
                      Joel Anderson – Anderson Design Group
                    </cite>
                  </div>
                </div>
                <div class="col-sm-4 text-center">
                  <div class="service-box">
                    <p>
                      “At each of the three projects, you guys were the best
                      partner ever!”
                    </p>
                    <cite class="text-faded">Kris Bondi – iron.io</cite>
                  </div>
                </div>
                <div class="col-sm-4 text-center">
                  <div class="service-box">
                    <p>“Since the redesign, our leads have doubled.”</p>
                    <cite class="text-faded">
                      Kevin Deiter – Expert Connect
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </Testimonials>
          <FreeWebsiteChecklist />
          <HereToHelp>
            We designed a custom eCommerce website for illustrators and artists
            at Anderson Deisgn Group, and we can create something amazing for
            you. Put our Designtific Method to work hitting your organization's
            goals.
          </HereToHelp>
          <Footer />
        </Layout>
      </Styles>
    )
  }
}

export default Fellowship

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "case-study" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
    headerImage: file(relativePath: { eq: "case-studies/adg/header.jpg" }) {
      childImageSharp {
        original {
          src
        }
      }
    }
  }
`
