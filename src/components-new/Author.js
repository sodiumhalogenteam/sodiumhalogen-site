import React from 'react'

const Author = ({ title, img, name, description }) => (
  <div class="container ptb-100 w600">
    <h2 style={{marginBottom: '5px'}}>{title} </h2>
    <img src={img} alt="author" width="300px" style={{marginBottom: '0'}} />
    <p>
      <strong>{name}</strong>
      {description}
    </p>
  </div>
)

export default Author