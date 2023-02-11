import React from 'react';
import Navigation from './../Navigation'
import Gallery from './../Gallery'
import CTA from './../UI/CTA'
import Footer from './../UI/Footer';

const HomePage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Gallery header='Gallery' />
      <CTA header='Contact Us' />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
