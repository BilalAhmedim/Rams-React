import React from 'react';
import Navigation from './Components/Navigation'
import Gallery from './Components/Gallery'
import CTA from './Components/UI/CTA'
import Footer from './Components/UI/Footer';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Gallery header='Gallery' />
      <CTA header='Contact Us' />
      <Footer />
    </React.Fragment>
  );
}

export default App;
