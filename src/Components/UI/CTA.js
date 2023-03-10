import './CTA.css'
import Header from './Header'
import Map from './Map'
import { Link } from 'react-router-dom'


const CTA = () => {
  return (
    <div className='cta'>
      <Header header='Contact Us' />
      <div className='cta__text wrapper'>

        <address className='cta__col'>
          <span>
            <h2>Mr. Riyaz Anwer (CEO)</h2>
          </span>

          <span>
            <h2>Mr. Abdullah Parver (Merchant)</h2>
            <Link to="mailto:abdullah@ramsintl.com">abdullah@ramsintl.com</Link>
            <abbr title="Phone"><Link to="tel:+91  9897324406">+91  9897324406</Link></abbr>
          </span>

          <span>
            <h2>Mr. Mohd Akhtar (Merchant)</h2>
            <Link to="mailto:info@ramsintl.com">info@ramsintl.com</Link>
            <abbr title="Phone"><Link to="+91  9897324406">+91 0591  2970306</Link></abbr>
          </span>

          <span>
            <h2>Mr Anwar Husain (Merchant)</h2>
            <Link to="mailto:anwarhusain@ramsintl.com">anwarhusain@ramsintl.com</Link>
          </span>
        </address>

        <Map />

      </div>
    </div>
  )
}

export default CTA