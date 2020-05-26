import React from 'react'
import TimerIcon from '../../static/workshop/assets/icon_timer.png'

const Card = ({ title, description, steps, time, price, img }) => (
  <div className="tile">
    <img src={img} alt="exercise design catalyst" />
    <div className="tile-text">
      <h4>{title}</h4>
      <p className="paragraph-centered case">{description}</p>
      <ul>
        {steps?.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
      <div className="category">
        <img src={TimerIcon} className="icon-c" alt="timer" />
        {time}
        <em>${price}</em>
      </div>
    </div>
  </div>
)

export default Card
