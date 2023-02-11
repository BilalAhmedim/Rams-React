import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about-us', element: <AboutPage /> }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
