import React from 'react'
import Styled from 'styled-components'

import Img from 'gatsby-image'

const StyledImg = Styled(Img)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 0;
  transition-delay: 500ms;
`
const Wrapper = Styled.div`
  width: 20%;
  padding: 0 1% 20px;
  figure {
    width: 100%;
    position: relative;
    .headshot {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      clip-path: polygon(50% 3%, 90% 25%, 90% 75%, 50% 97%, 10% 75%, 10% 25%);
    }
    .gif {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      clip-path: polygon(50% 3%, 90% 25%, 90% 75%, 50% 97%, 10% 75%, 10% 25%);
      opacity: 0;
    }
    &:hover {
      .headshot {
        opacity: 0;
      }
      .gif {
        opacity: 1;
      }
    }
  }
`

const Employee = ({ img, firstName, lastName, title, email, gif }) => {
  console.log({ gif })
  return (
    <Wrapper className="employees__employee">
      <figure className="employees__headshot">
        <Img className="headshot" fluid={img} />
        {gif ? (
          <img className="gif" src={gif} alt="william gif" />
        ) : (
          <div className="gif">
            <p>
              {firstName} does
              <br />
              not do gifs.
            </p>
          </div>
        )}
      </figure>
      <p className="team__name">
        {firstName} {lastName}
      </p>
      <p className="team__title">{title}</p>
      {email ? (
        <p className="team__email">
          <a href={`mailto:${email}`} className="btn">
            email {firstName}
          </a>
        </p>
      ) : null}
    </Wrapper>
  )
}

export default Employee
