import React from 'react'
import styled from 'styled-components'

const Styles = styled.section`
  .text-center {
    hr {
      margin: 50px auto;
    }
    .row {
      justify-content: center;
    }
  }
`

const DesignAtom = ({ header, text1, text2 }) => (
  <Styles id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">{header}</h2>
          <hr class="primary" />
          <div class="row">
            <div class="col-lg-offset-2 col-lg-4 col-sm-offset-1 col-sm-5 text-left">
              <p>{text1}</p>
            </div>
            <div class="col-lg-4 col-sm-5 text-left">
              <p>{text2}</p>
            </div>
          </div>
          <hr class="primary" />
          <img
            width="100%"
            src="https://sh-drop.s3.us-east-1.amazonaws.com/wd/Designtific-Method-molecule-ministry.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </Styles>
)

export default DesignAtom
