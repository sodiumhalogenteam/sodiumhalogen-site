import React from 'react'
import styled from 'styled-components'

// image
import bg from '../images/cta-get-the-website-guide.gif'

// utils
import getCookie from '../utils/getCookie'

// #region Styled Components
const Styles = styled.div`
  div {
    position: fixed;
    z-index: 9999;
    bottom: 5px;
    right: 5px;
    &:hover {
      cursor: pointer;
    }
    span {
      position: absolute;
      top: -2px;
      right: 0px;
      opacity: 0.3;
      font-family: helvetica;
      font-size: 12px;
      padding: 5px;
    }
  }
`
// #endregion

const NotificationBox = props => {
  const [showBox, setShowBox] = React.useState(true)

  const handleClose = () => {
    document.cookie = `sh_cta_website_guide=closed;max-age=604800;domain=localhost`
    setShowBox(false)
  }

  const hasClosedThisBox = getCookie('sh_cta_website_guide') === 'closed'

  return (
    <Styles>
      {showBox && !hasClosedThisBox && (
        <div>
          <span onClick={handleClose}>x</span>
          <a href="https://sodiumhalogen.typeform.com/to/VLNvbj">
            <img src={bg} alt="cta-get-the-website-guide" />
          </a>
        </div>
      )}
    </Styles>
  )
}

export default NotificationBox
