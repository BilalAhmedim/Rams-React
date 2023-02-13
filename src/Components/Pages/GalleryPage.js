import React from "react";
import Navigation from "../Navigation";
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
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '#'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '#'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '#'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '#'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '#'
  },
  {
    title: 'Copper Product 1',
    image: thumb,
    material: ingot,
    finish: 'Antique',
    size: 'L66 X W22 X H31',
    tags: 'bathtub, double slipper, antique',
    path: '#'
  },
]

const GalleryPage = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Header header="Gallery" />
      <div className="gallery">
        {
          DETAILS.map((detail, detailIndex) => (
            <DetailedCard key={detailIndex} data={detail} />
          ))
        }
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default GalleryPage;