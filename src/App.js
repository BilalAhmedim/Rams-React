import React from 'react';
import Navigation from './Components/Navigation'
import Gallery from './Components/Gallery'
import CTA from './Components/UI/CTA'
function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Gallery header='Gallery' />
      <CTA header='Contact Us' />
    </React.Fragment>
  );
}

export default App;
