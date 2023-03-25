import React from 'react';
import Navigation from './../UI/Navigation'
import Footer from './../UI/Footer';
import Header from '../UI/Header';
import ProductView from '../UI/ProductView';
import './../UI/Page.css'

const ProductPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <ProductView />
      <Header header='Suggestions' />
      <Footer />
    </React.Fragment>
  );
}

export default ProductPage;
