import React from "react"
import Styled from "styled-components"

import { slide as Burger } from "react-burger-menu"
import { Link } from "gatsby"

const Wrapper = Styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    height: 30px;
    right: 0;
    top: 50px;
    padding: 0 15px;
    border-radius: 100px 0 0 100px;
    font-size: 30px;
    background: red;
    display: flex;
    align-items: center;
    background-color: var(--yellow);
    color: #fff;
    &:before {
      content: "•••";
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    /* background: #373a47; */
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    /* background: #a90000; */
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

const Menu = () => (
  <Wrapper>
    <Burger right>
      <Link to="/page-2/">Go to page 2</Link>
    </Burger>
  </Wrapper>
)

export default Menu
