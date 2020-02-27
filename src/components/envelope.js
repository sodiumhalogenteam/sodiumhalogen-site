import React from "react"
import Styled from "styled-components"

const Wrap = Styled.div`
  background-color: ${props => props.color};
  clip-path: polygon(50% 2em, 100% 0%, 100% 100%, 0 100%, 0 0%);
  padding-bottom: 1em;
`

const Envelope = ({ children, color }) => (
  <Wrap color={color}>
    <div className="h-8"></div>
    {children}
  </Wrap>
)

export default Envelope
