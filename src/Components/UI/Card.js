import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <React.Fragment>
      <a href={props.path} className='gallery__card'>
        <img src={props.image} alt={props.title} className='gallery__card__img' />
        <h3>{props.title}</h3>
      </a>
    </React.Fragment>
  )
}

export default Card;