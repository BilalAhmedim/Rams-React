import './CTA.css'
import Header from './Header'
import Map from './Map'


const CTA = () => {
  return (
    <div className='cta'>
      <Header header='Contact Us' />
      <div className='cta__text'>

        <address>
          <h2>Mr. Riyaz Anwer (CEO)</h2>

          <h2>Mr. Abdullah Parver (Merchant)</h2>
          <a href="mailto:abdullah@ramsintl.com">abdullah@ramsintl.com</a><br />
          <abbr title="Phone"><a href="tel:+91  9897324406">+91  9897324406</a></abbr><br />

          <h2>Mr. Mohd Akhtar (Merchant)</h2>
          <a href="mailto:info@ramsintl.com">info@ramsintl.com</a><br />
          <abbr title="Phone"><a href="+91  9897324406">+91 0591  2970306</a></abbr><br />

          <h2>Mr Anwar Husain (Merchant)</h2>
          <a href="mailto:anwarhusain@ramsintl.com">anwarhusain@ramsintl.com</a><br />
        </address>
        <Map />
      </div>
    </div>
  )
}

export default CTA