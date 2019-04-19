import styled from 'styled-components'
import {
  transitionAll,
  buttonVariant,
  sansSerifFont,
  serifFont,
} from './Styles.mixins'

const palette = {
  themeprimary: '#8d980b',
  graybase: '#22292e',
  graydarker: '#222',
  graydark: '#333',
  gray: '#555',
  graylight: '#777',
  graylighter: '#eee',
}

const Styles = styled.div`
  /*/////////
  // spacing
  /////////*/
  .mb-100 {
    margin-bottom: 100px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .mt-100 {
    margin-top: 100px;
  }
  .py-100 {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .pt-40 {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  /*/////////
  // main
  /////////*/

  // Global Components
  html,
  body {
    height: 100%;
    width: 100%;
    // background: #f8f5ef
    // url(http://www.sodiumhalogen.com/wp-content/themes/volumes-child/images/bg-grain.png) !important;
  }

  body {
    ${serifFont()};
    overflow-x: hidden;
  }

  hr {
    border-color: ${palette.themeprimary};
    border-width: 3px;
    max-width: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  hr.light {
    border-color: white;
    text-align: center;
    width: 100%;
    color: white;
    display: block;
    margin: 0 auto 1rem;
  }
  button {
    background: none;
    border: none;
    box-shadow: 0 1px 0 0 currentColor;
  }
  a,
  button,
  .link {
    cursor: pointer;
    text-decoration: none;
    ${transitionAll()};
    color: ${palette.themeprimary};
    &:hover,
    &:focus {
      color: darken(${palette.themeprimary}, 10%);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${sansSerifFont()};
    line-height: 1.23;
  }

  p {
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  ul {
    padding: 0 0 0 25px;
    li {
      font-size: 22px;
      padding: 0 0 18px 0;
    }
  }

  aside {
    padding: 50px 0;
  }

  .bgsh-primary {
    background-color: ${palette.themeprimary};
    color: white;
  }

  .bg-dark {
    background-color: ${palette.graydarker};
    color: white;
    margin: 0;
    // padding: 100px 0;
  }

  // .full-height {
  //   height: 100vh;
  // }

  .vcenter {
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
      height: 100vh;
    }
  }

  .text-faded {
    color: rgba(255, 255, 255, 0.7);
  }

  .no-padding {
    padding: 0;
  }
  .text-center {
    text-align: center;
  }
  @media (max-width: 600px) {
    .team-gifs {
      display: none;
    }
  }

  // Homepage Header

  header {
    .header-content {
      margin-top: 30vh;
      .header-content-inner {
        h1 {
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 30px;
        }
        hr {
          margin: 30px auto;
        }
        p {
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          margin-bottom: 50px;
        }
      }
    }
    @media (min-width: 768px) {
      .header-content {
        .header-content-inner {
          h1 {
            font-size: 3.555em;
          }
          p {
            font-size: 18px;
            max-width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
  }

  // Sections

  .section-spacing {
    @media (min-width: 768px) {
      padding-bottom: 30vh;
    }
  }

  .designtific-section {
    padding-top: 20px;
  }

  .img-center {
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin: 100px auto;
  }

  section {
    position: relative;
    margin: 150px 0;
    overflow: hidden;
    @media (min-width: 768px) {
      margin: 100px 0;
    }
    h2 {
      ${sansSerifFont()};
      font-weight: 700;
      margin-top: 0;
      font-size: 1.9em;
      @media (min-width: 768px) {
        font-size: 2.7em;
      }
      margin-bottom: 20px;
    }
  }

  #customers {
    img {
      width: 150px;
      @media (min-width: 768px) {
        width: auto;
      }
    }
  }
  // service
  img.icon {
    width: 40%;
    margin: auto;
    display: block;
  }
  #service1,
  #service2 {
    h3,
    p {
      margin-right: 5px;
      margin-left: 5px;
    }
  }

  .footer {
    padding-top: 180px;
    padding-bottom: 40px;
    @media (min-width: 768px) {
      padding-top: 0;
      padding-bottom: 0;
    }
    .container {
      position: relative;
      .btn-primary {
        box-shadow: none;
      }
    }
    &__bottom {
      text-align: center;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-top: 150px;
      ${serifFont()}
      ul {
        padding: 0;
        list-style: none;
        margin-bottom: 0;
        li {
          &:last-of-type {
            padding: 0 0 15px;
          }
        }
        @media (min-width: 768px) {
          display: flex;
        }
      }
      > div:last-of-type {
        font-size: 22px;
        p {
          margin: 0;
        }
      }
      // >= desktop
      @media (min-width: 768px) {
        position: absolute;
        display: flex;
        padding-top: 0;
        text-align: inherit;
        li {
          margin-left: 40px;
          &:first-of-type {
            margin-left: 0;
          }
        }
        ul {
          display: flex;
        }
        > div:last-of-type {
          text-align: right;
        }
      }
    }
  }

  .call-to-action {
    h2 {
      margin: 0 auto 20px;
    }
  }

  // Bootstrap Overrides
  .text-primary {
    color: ${palette.themeprimary};
  }

  .no-gutter > [class*='col-'] {
    padding-right: 0;
    padding-left: 0;
  }

  // Button Styles
  .btn-default {
    ${buttonVariant(palette.graydarker, 'white', 'white')}
  }

  .btn-primary {
    ${buttonVariant('white', palette.themeprimary, palette.themeprimary)}
  }

  .btn {
    ${sansSerifFont()};
    border: none;
    border-radius: 300px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .btn-xl {
    padding: 15px 30px;
  }
  .button-link {
    color: white !important;
  }

  // Extras
  // -- Highlight Color Customization
  ::-moz-selection {
    color: white;
    text-shadow: none;
    background: ${palette.graydarker};
  }

  ::selection {
    color: white;
    text-shadow: none;
    background: ${palette.graydarker};
  }

  img::selection {
    color: white;
    background: transparent;
  }

  img::-moz-selection {
    color: white;
    background: transparent;
  }

  body {
    webkit-tap-highlight-color: ${palette.graydarker};
  }

  .team-gifs {
    position: absolute;
    width: 100vw;
    height: 1418px;
    overflow: hidden;
    .hover-gif {
      // background: red;
      z-index: 500;
      width: 200px;
      height: 200px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover .hover-gif__img {
        height: 100%;
        width: 100%;
      }
      figure {
        height: 0%;
        width: 0%;
        transition: all 0.25s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        overflow: hidden;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 100%;
          margin: auto;
          object-fit: cover;
        }
      }
    }
    .hover-gif:nth-child(1) {
      top: 74%;
      left: 82%;
    }
    .hover-gif:nth-child(2) {
      top: 27%;
      left: 89%;
    }
    .hover-gif:nth-child(3) {
      top: 55%;
      left: 42%;
    }
    .hover-gif:nth-child(4) {
      top: 69%;
      left: 5%;
    }
    .hover-gif:nth-child(5) {
      top: 50%;
      left: 62%;
    }
    .hover-gif:nth-child(6) {
      top: 7%;
      left: 22%;
    }
    .hover-gif:nth-child(7) {
      top: 48%;
      left: 83%;
    }
    .hover-gif:nth-child(8) {
      top: 85%;
      left: 70%;
    }
    .hover-gif:nth-child(9) {
      top: 30%;
      left: 5%;
    }
    .hover-gif:nth-child(10) {
      top: 86%;
      left: 18%;
    }
    .hover-gif:nth-child(11) {
      top: 2%;
      left: 72%;
    }
    .hover-gif:nth-child(12) {
      top: 50%;
      left: 18%;
    }
  }

  /*/////////
  // team
  /////////*/
  .team {
    margin: 0 auto;
    text-align: center;
    h2 {
      margin-bottom: 40px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    &__member {
      height: 330px;
      margin-bottom: 30px;
    }
    &__name {
      margin: 0;
    }
    &__title {
      font-size: 1.1em;
      margin: 0;
    }
    &__email {
      .btn {
        box-shadow: none;
      }
    }
  }
  .hexagon {
    position: relative;
    width: 150px;
    height: 86.6px;
    margin: 43.3px 0;
    background-size: auto 173.2051px;
    background-position: center;
    &:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0;
      width: 300px;
      height: 173.2051px;
      z-index: 2;
      background: inherit;
    }
    &__top,
    &__bottom {
      position: absolute;
      z-index: 1;
      width: 212.13px;
      height: 212.13px;
      overflow: hidden;
      transform: scaleY(0.5774) rotate(-45deg);
      background: inherit;
      left: 43.93px;
      &:after {
        content: '';
        position: absolute;
        width: 150px;
        height: 86.60254037844388px;
        transform: rotate(45deg) scaleY(1.7321) translateY(-43.3013px);
        transform-origin: 0 0;
        background: inherit;
      }
    }

    &__top {
      top: -106.066px;
      &:after {
        background-position: center top;
      }
    }
    &__bottom {
      bottom: -106.066px;
      &:after {
        background-position: center bottom;
      }
    }
  }

  .polygon-clip-hexagon {
    -webkit-clip-path: polygon(
      50% 3%,
      90% 25%,
      90% 75%,
      50% 97%,
      10% 75%,
      10% 25%
    );
    clip-path: polygon(50% 3%, 90% 25%, 90% 75%, 50% 97%, 10% 75%, 10% 25%);
  }
`
export { palette }
export default Styles
