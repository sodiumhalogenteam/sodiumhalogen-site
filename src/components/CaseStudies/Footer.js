import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  width: 60%;
  text-align: center;
  padding: 0;
  margin: 75px auto;
  @media only screen and (max-width: 768px) {
    margin: 75px 0;
    width: 100%;
  }
  h2 {
    margin: 0 15% 30px;
    @media only screen and (max-width: 768px) {
      margin: 0 5% 30px;
    }
  }
  div {
    margin-bottom: 100px;
  }
`

const Footer = () => {
  return (
    <Styles>
      <div>
        <h2>
          Do you have something that you'd like to build but don't know how to
          get started?
        </h2>
        <a
          href="https://william10.typeform.com/to/iKe3eC"
          class="btn btn-primary"
        >
          Tell Us About Your Idea
        </a>
      </div>
    </Styles>
  )
}

export default Footer
