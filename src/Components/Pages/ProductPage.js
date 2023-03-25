import React from 'react';
import Navigation from './../UI/Navigation'
import Footer from './../UI/Footer';
import Header from '../UI/Header';
import './../UI/Page.css'

const ProductPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Header header='Suggestions' />
      <Footer />
    </React.Fragment>
  );
}

export default ProductPage;
