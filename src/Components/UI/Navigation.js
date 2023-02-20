import './Navigation.css';
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Navigation = () => {
  const ITEMS = [
    {
      name: 'Home',
      path: '/',
      isParent: false,
      child: null
    },
    {
      name: 'Bathtubs',
      path: '/bathtubs',
      isParent: true,
      child: [
        { name: 'Single Slipper Bathtubs', path: '/bathtubs/single-spipper-bathtubs', },
        { name: 'Double Slipper Bathtubs', path: '/bathtubs/double-spipper-bathtubs', }
      ]
    },
    {
      name: 'Tubes',
      path: '/tubes',
      isParent: true,
      child: [
        { name: 'Type K', path: '/tubes/type-k', },
        { name: 'Type L', path: '/tubes/type-l', },
        { name: 'Type M', path: '/tubes/type-m', }
      ]
    },
    {
      name: 'Sinks',
      path: '/sinks',
      isParent: true,
      child: [
        { name: 'Kitchen Sinks', path: '/sinks/kitchen-sinks', },
        { name: 'Under-Mount Sinks', path: '/sinks/undermount-sinks', },
        { name: 'Other Sinks', path: '/sinks/other-sinks', }
      ]
    },
    {
      name: 'Products',
      path: '/products',
      isParent: true,
      child: [
        { name: 'Item 1', path: '/products/Item-1', },
        { name: 'Item 2', path: '/products/Item-2', },
        { name: 'Item 3', path: '/products/Item-3', },
        { name: 'Item 4', path: '/products/Item-4', },
        { name: 'Item 5', path: '/products/Item-5', },
      ]
    },
    {
      name: 'About Us',
      path: '/about-us',
      isParent: false,
      child: null
    },
    {
      name: 'Contact Us',
      path: '/contact-us',
      isParent: false,
      child: null
    },
  ];
  const [expandedItem, setExpandedItem] = useState(null);

  const navMenuHandle = (itemIndex) => {
    console.log(itemIndex)
    console.log(expandedItem)
    if (expandedItem === itemIndex) {
      setExpandedItem(null)
    } else {
      setExpandedItem(itemIndex)
    }
  }

  const navHandle = () => {
  }
  return (
    <header>

      <nav className='navigation'>
        <div className='navigation__brand-logo'>
          <Link to='/'><img src={logo} alt='Rams International Logo' className='navigation__brand-logo__img' /></Link>
        </div>
        <div className='nav-model active'></div>
        <ul className='top-level'>
          {
            ITEMS.map((item, itemIndex) => (
              <li key={itemIndex}
                data-parent-nav={item.isParent ? 'nested-nav' : null}

              ><Link to={item.isParent ? null : item.path} onClick={() => { navMenuHandle(itemIndex) }}>{item.name}</Link>
                {item.isParent && item.child
                  &&
                  // data-nav='nested-nav' data-nav-display='hidden'
                  <ul className={expandedItem === itemIndex ? 'expanded' : 'collapse'}>
                    {item.child.map((child, childIndex) => (
                      <li key={childIndex}><Link to={child.path}>{child.name}</Link></li>
                    ))}
                  </ul>
                }
              </li>
            ))
          }
        </ul>

        <div className='navigation__mobile-toggle-button' onClick={navHandle()}>
          <div className='navigation__mobile-toggle-button__bar'>&nbsp;</div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation