import React from 'react'
import Card from './UI/Card'
import Header from './UI/Header'
import './Gallery.css'
import thumb from './assets/thumb.jpg'

const Gallery = (props) => {
  return (
    <div className='gallery'>
      <Header header={props.header} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
      <Card title='Fire Pit' path='/' image={thumb} />
    </div>
  )
}

export default Gallery