import React from 'react';
import Navigation from './Components/Navigation'
import Card from './Components/UI/Card'

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Card header='Gallery' />
    </React.Fragment>
  );
}

export default App;
