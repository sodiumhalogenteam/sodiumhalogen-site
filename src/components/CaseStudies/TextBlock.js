import React from 'react'
import styled from 'styled-components'
import { rhythm, scale } from '../../utils/typography'

const Header = styled.h1`
  line-height: 40px;
  width: 50%;
  margin: 0 auto;
  padding-bottom: ${rhythm(1)};
  font-size: 30px;
  font-weight: 600;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  color: #434b52;
  @media only screen and (max-width: 768px) {
    margin: 0 15px;
  }

}
`

const Body = styled.div`
  width: 50%;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  color: #7e7e7e;
  @media only screen and (max-width: 768px) {
    margin: 15px;
  }
`

const TextBlock = ({ title, children }) => {
  return (
    <>
      <Header>{title}</Header>
      <Body>{children}</Body>
    </>
  )
}

export default TextBlock
