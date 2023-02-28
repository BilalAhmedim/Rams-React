import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  return (
    <React.Fragment>
      <Link to={props.path} className='gallery__card'>
        <img src={props.image} alt={props.title} className='gallery__card__img' />
        <h3>{props.title}</h3>
      </Link>
    </React.Fragment>
  )
}

export default Card;