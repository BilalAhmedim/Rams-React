import React from 'react'
import Footer from '../UI/Footer'
import Navigation from './../Navigation'
import Map from './../UI/Map'

const ContactPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className='contact-page'>
        <Map />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ContactPage