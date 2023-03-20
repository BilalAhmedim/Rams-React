import React from 'react'
import Footer from '../UI/Footer'
import Navigation from '../UI/Navigation'
import Map from '../UI/Map'
import Form from './../UI/Form'
import Header from './../UI/Header'

const ContactPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Header header='Countact Us' />
      <div className='contact-page wrapper--fixed'>
        <div className='formpage'>
          <Form />
          <Map />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default ContactPage