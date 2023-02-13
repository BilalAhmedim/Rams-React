import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Pages/ContactPage';
import GalleryPage from './Components/Pages/GalleryPage'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/about-us', element: <AboutPage /> },
  { path: '/contact-us', element: <ContactPage /> },
  { path: '*', element: <GalleryPage /> }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
