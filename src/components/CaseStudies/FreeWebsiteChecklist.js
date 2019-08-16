import React from 'react'
import styled from 'styled-components'

const Styles = styled.aside`
  h2 {
    color: #fff;
  }
`

const FreeWebsiteChecklist = () => (
  <Styles className="bg-dark">
    <div class="container text-center">
      <div class="call-to-action">
        <h2>Download Our Free Website Checklist</h2>
        <a
          href="http://sodiumhalogen.com/etc/SH_8Tips.pdf"
          class="btn btn-default btn-xl sr-button"
          data-sr-id="1"
        >
          Download Now!
        </a>
      </div>
    </div>
  </Styles>
)

export default FreeWebsiteChecklist
