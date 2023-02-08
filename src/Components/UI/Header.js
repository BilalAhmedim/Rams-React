import './Header.css'

const Header = (props) => {
  return (
    <div className='header'>
      <div className='header__heading wrapper'>
        <h1>{props.header}</h1>
      </div>
    </div>
  )
}

export default Header