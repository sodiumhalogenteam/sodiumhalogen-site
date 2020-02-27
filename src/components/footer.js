import React from "react"
import Styled from "styled-components"

import { Link } from "gatsby"
import Envelope from "./envelope"

const Footer = () => (
  <footer>
    <Envelope color="var(--black)">
      <div className="py-32 flex items-center justify-center flex-col">
        <h1 className="text-white">Let's get started!</h1>
        <Link to="#" className="uppercase">
          <h2>Tell us about your project</h2>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p>Jackson, TN</p>
          <a href="tel:731-506-4535">731.506.4535</a>
        </div>
        <div>
          <p>Jackson, TN</p>
          <a href="tel:615-382-1550">615.382.1550</a>
        </div>
        <div>
          <p>Jackson, TN</p>
          <a href="">***.***.****</a>
        </div>
        <div>there</div>
      </div>
    </Envelope>
  </footer>
)

export default Footer
