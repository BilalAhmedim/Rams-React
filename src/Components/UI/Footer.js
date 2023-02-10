import './Footer.css'
import Map from './Map'

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
          <a href='mailto: info@ramsintl.com'> info@ramsintl.com</a>
        </li>
        <li>
          <a href='tel:+91 0591 2970306'>+91 - 0591 2970306</a>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Featured Products</h2>
        </li>
        <li>
          <a href='/'>Copper Bathtubs</a>
        </li>
        <li>
          <a href='/'>Copper Farmhouse Sinks</a>
        </li>
        <li>
          <a href='/'>Copper Kitchen Sinks</a>
        </li>
        <li>
          <a href='/'>Copper Under-Mount Sinks</a>
        </li>
        <li>
          <a href='/'>Copper Pipe/Tubes</a>
        </li>
      </ul>

      <ul>
        <li>
          <h2>Pages</h2>
        </li>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about-us'>About Us</a>
        </li>
        <li>
          <a href='/contact-us'>Contact Us</a>
        </li>
      </ul>

    </footer>
  )
}

export default Footer