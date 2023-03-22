import React from 'react'
import { Link } from 'react-router-dom'
import './DetailedCard.css';


const DetailedCard = (props) => {
  return (
    <React.Fragment>
      {
        <Link to={props.data.path} className='gallery-detailed__card'>
          <img src={props.data.image} alt={props.data.title} className='gallery-detailed__card__img' />
          <h3>{props.data.title}</h3>
          <span>
            <img src={props.data.material} alt={props.data.material} />
            <span>{props.data.metal}</span></span>
          <p><b>Finish: </b>{props.data.finish}</p>
          <p><b>Size: </b>{props.data.size}</p>
          <p><b>Tags: </b>{props.data.tags}</p>
        </Link>
      }
    </React.Fragment>
  )
}

export default DetailedCard