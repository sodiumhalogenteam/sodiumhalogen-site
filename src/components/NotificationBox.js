import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// image
import bg from '../images/ew-lead-gen-sign-up.png'

// utils
// import getCookie from '../utils/getCookie'

// #region Styled Components
const Styles = styled.div`
  div {
    z-index: 1000;
    position: fixed;
    bottom: 5px;
    right: 15px;
    background: white;
    &:hover {
      cursor: pointer;
    }
    a {
      display: block;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }
    span {
      position: absolute;
      opacity: 0.3;
      font-family: helvetica;
      font-size: 12px;
      right: 10px;
      top: 3px;
      font-size: 1.4rem;
      /* padding: 5px; */
    }
  }
`
// #endregion

const NotificationBox = (props) => {
  const handleClose = () => {
    document.cookie = `sh_cta_website_guide=closed;max-age=604800;domain=localhost`
    setShowBox(false)
  }

  const [hasClosedThisBox, setHasClosedThisBox] = useState(false)
  useEffect(() => {
    function getCookie(name) {
      var match = document.cookie.match(
        RegExp('(?:^|;\\s*)' + name + '=([^;]*)')
      )
      return match ? match[1] : null
    }
    if (getCookie('sh_cta_website_guide') === 'closed') {
      setHasClosedThisBox(true)
    }
  })
  const [showBox, setShowBox] = useState(false)
  useEffect(() => {
    if (!hasClosedThisBox) {
      setTimeout(() => {
        setShowBox(true)
      }, 5000)
    }
  }, [hasClosedThisBox])

  return (
    <Styles>
      {showBox && !hasClosedThisBox && (
        <div>
          <span onClick={handleClose}>x</span>
          <a href="https://mailchi.mp/afcfe7027d87/innovationexperiments">
            <img src={bg} alt="success-checklist-cta" />
          </a>
        </div>
      )}
    </Styles>
  )
}

export default NotificationBox
