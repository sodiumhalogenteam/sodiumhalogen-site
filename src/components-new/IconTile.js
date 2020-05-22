import React from 'react'

const IconTile = ({ title, description, img }) => (
  <div class="div-centered">
    <img alt="Alignment" class="icon" src={img} />
    <h4>{title}</h4>
    <p class="paragraph-centered">{description}</p>
  </div>
)

export default IconTile
