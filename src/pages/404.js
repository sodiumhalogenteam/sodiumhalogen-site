import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Particles from 'react-particles-js'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Styles from '../components/Styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 25vh;
  text-align: center;
`

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Styles>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="404: Not Found" />
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
          <Container>
            <h1>Not Found</h1>
            <p>
              You just hit a route that doesn&#39;t exist... the sadness. 😢
            </p>
          </Container>
        </Layout>
      </Styles>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
