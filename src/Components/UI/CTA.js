import './CTA.css'
import Header from './Header'
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

      </div>
      <div className='cta__map'>
        <iframe title="Rams International Direction Map" className='cta__map__frame' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3496.2049407711756!2d78.765301!3d28.802966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10ca233667ff48b3!2sRams%20International!5e0!3m2!1sen!2sus!4v1675941924661!5m2!1sen!2sus" width="100%" height="450" style={{ border: '0' }} allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default CTA