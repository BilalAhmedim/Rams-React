import './Footer.css'
import Map from './Map'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <h2>Location</h2>
        </li>
        <li>
          <Map />
        </li>
      </ul>

      <ul>
        <li>
          <h2>Contact Details</h2>
        </li>
        <li>
          Sambhal Road, Azad Nagar Near
          Ayesha Masjid,Moradabad -244001
          India
        </li>
        <li>
          <Link to='mailto: info@ramsintl.com'> info@ramsintl.com</Link>
        </li>
        <li>
          <Link to='tel:+91 0591 2970306'>+91 - 0591 2970306</Link>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Featured Products</h2>
        </li>
        <li>
          <Link to='/'>Copper Bathtubs</Link>
        </li>
        <li>
          <Link to='/'>Copper Farmhouse Sinks</Link>
        </li>
        <li>
          <Link to='/'>Copper Kitchen Sinks</Link>
        </li>
        <li>
          <Link to='/'>Copper Under-Mount Sinks</Link>
        </li>
        <li>
          <Link to='/'>Copper Pipe/Tubes</Link>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Pages</h2>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
      </ul>

    </footer>
  )
}

export default Footer