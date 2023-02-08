import './Header.css'

const Header = (props) => {
  return (
    <section className='header'>
      <div className='header__heading wrapper'>
        <h1>{props.header}</h1>
      </div>
    </section>
  )
}

export default Header