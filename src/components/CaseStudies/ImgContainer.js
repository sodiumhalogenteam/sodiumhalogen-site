import styled from 'styled-components'
import { rhythm, scale } from '../../utils/typography'

const ImgContainer = styled.div`
  margin: 100px 10%;
  img {
    max-width: 1500px;
  }
  p {
    font-size: 15px;
    text-align: center;
    margin-top: ${rhythm(2)};
  }
  div {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    & > div {
      display: flex;
      padding-top: 30px;
      &:first-child {
        padding-top: 0;
      }
      & > div {
        flex: 1;
        margin-left: 30px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
    & > div {
      margin: 0;
      & > div {
        margin: 0 0 ${rhythm(1)};
      }
    }
  }
`

export default ImgContainer
