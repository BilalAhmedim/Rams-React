import React from "react";
import Navigation from './../UI/Navigation'
import Footer from "../UI/Footer";
import DetailedCard from "./../UI/DetailedCard"
import Header from "../UI/Header";
import thumb from "./../assets/thumb.jpg"
import ingot from './../assets/ingot.svg'

const DETAILS = [
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    metal: 'Copper',
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '/category/product'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    metal: 'Copper',
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '/category/product'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    metal: 'Copper',
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '/category/product'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    metal: 'Copper',
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '/category/product'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    metal: 'Copper',
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '/category/product'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    metal: 'Copper',
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '/category/product'
  },
]

const GalleryPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="gallery-detailed clearfix">
        <Header header="Gallery" />
        <div className="wrapper">
          {
            DETAILS.map((detail, detailIndex) => (
              <DetailedCard key={detailIndex} data={detail} />
            ))
          }
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default GalleryPage;