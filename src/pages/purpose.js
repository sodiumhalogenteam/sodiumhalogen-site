import React from 'react'
import { graphql } from 'gatsby'

import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import styled from 'styled-components'

const IframeWrapper = styled.div`
  iframe {
    height: 600px;
  }
`

class Purpose extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" keywords={[`gatsby`, `javascript`, `react`]} />
        <IframeWrapper>
          <div
            className="typeform-widget"
            data-url="https://sodiumhalogen.typeform.com/to/biA8mH"
            styles="width: 100%; height: 1000px;"
          />
          {(function() {
            var qs,
              js,
              q,
              s,
              d = document,
              gi = d.getElementById,
              ce = d.createElement,
              gt = d.getElementsByTagName,
              id = 'typef_orm',
              b = 'https://embed.typeform.com/'
            if (!gi.call(d, id)) {
              js = ce.call(d, 'script')
              js.id = id
              js.src = b + 'embed.js'
              q = gt.call(d, 'script')[0]
              q.parentNode.insertBefore(js, q)
            }
          })()}
        </IframeWrapper>
      </BlogLayout>
    )
  }
}

export default Purpose

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
