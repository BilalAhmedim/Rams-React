import React from 'react'
import { Link } from 'react-router-dom'


const DetailedCard = (props) => {
  return (
    <React.Fragment>
      {
        <Link to={props.data.path} className='gallery__card'>
          <img src={props.data.image} alt={props.data.title} className='gallery__card__img' />
          <h3>{props.data.title}</h3>
          <img src={props.data.material} alt={props.data.material} />
          <p><b>Finish:</b>{props.data.finish}</p>
          <p><b>Size:</b>{props.data.size}</p>
          <p><b>Tags:</b>{props.data.tags}</p>
        </Link>
      }
      {console.log(props.data.thumb)}
    </React.Fragment>
  )
}

export default DetailedCard