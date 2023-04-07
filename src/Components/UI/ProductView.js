import React, { useState } from 'react'
import './ProductView.css'
import image_iso from './../assets/1_iso.JPG';
import image_front from './../assets/1_front.JPG';
import image_top from './../assets/1_top.JPG';
import { Link } from 'react-router-dom';


const ProductView = () => {

  const product =
  {
    name: '72” Brass Double Slipper Bath tub',
    item_num: 'RA72DB-BL/PL',
    finish: 'Black Outside / Polish Inside',
    material: 'Brass 16 Gauge',
    size: '72”L X 32”W X 31”H',
    avail_finish: 'Antique, Mate, Polish, Others',
    tags: ' Brass, Double Slipper, bath tub',
    certification: 'UPC',
    material_options: 'Brass, Copper, Steel',
    images: [image_iso, image_front, image_top]
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  function onNextSlide() {
    setCurrentSlide((currentSlide + 1) % product.images.length);
  }

  function onThumbnailClick(index) {
    setCurrentSlide(index);
  }


  return (
    <React.Fragment>
      <div className='product-view'>
        <div className='wrapper--fixed'>
          <div className='breadcrumbs'>
            <Link to='#'>Home</Link> /
            <Link to='#'> product category</Link> /
            <Link to='#'> product list</Link> /
            <Link to='#'> product</Link>
          </div>
          <div className='product-view__container'>


            <div className='product-view__light-box'>

              <div className='product-view__light-box--view'>

                <img src={product.images[currentSlide]} alt="Product Large" data-current-slide={currentSlide + 1} />
                <div className='arrow__right' onClick={onNextSlide}>&nbsp;</div>
                <div className='arrow__left'>&nbsp;</div>

              </div>

              <ul className='product-view__thumbnails'>
                {product.images.map((image, index) => (
                  <li key={index}>
                    <img
                      className={currentSlide === index ? 'active' : ''}
                      src={image}
                      alt={`View ${index + 1}`}
                      data-src={image}
                      data-slide={index + 1}
                      onClick={() => onThumbnailClick(index)}
                    />
                  </li>
                ))}
              </ul>

            </div>

            <div className='product-view__info'>
              <ul>
                <li>Product Name: {product.name}</li>
                <li>Item no: {product.item_num}</li>
                <li>finish: {product.finish}</li>
                <li>material: {product.material}</li>
                <li>size: {product.size}</li>
                <li>finish available: {product.avail_finish}</li>
                <li>tags: {product.tags}</li>
                <li>certifications: {product.certification}</li>
                <li>material options: {product.material_options}</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}



export default ProductView;