import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  line-height: 40px;
  margin: 0 25%;
  padding-bottom: 1.2495rem;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
  color: #434b52;
`

const Body = styled.p`
  p {
    margin: 0 25%;
    padding-bottom: 1.2495rem;
    font-size: 20px;
    line-height: 1.5;
    color: #7e7e7e;
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
