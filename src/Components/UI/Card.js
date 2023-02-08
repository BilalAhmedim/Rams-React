import React from 'react'
import './Card.css'
import thumb from './../assets/thumb.jpg'

const Card = (props) => {
  return (
    <React.Fragment>
      <a href='/' className='gallery__card'>
        <img src={thumb} alt='Thumbnail' className='gallery__card__img' />
        <h3>Fire Pit</h3>
      </a>
    </React.Fragment>
  )
}

export default Card;