import React from 'react';
import Navigation from './Components/Navigation'
import Gallery from './Components/Gallery'

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Gallery header='Gallery' />
    </React.Fragment>
  );
}

export default App;
