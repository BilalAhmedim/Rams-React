import './Navigation.css';
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'


// {ITEMS.map((item, index) => (
//   <li key={index}>
//     <a href={item.path}>{item.name}</a>
//     {item.isParent && item.child && (
//       <ul>
//         {item.child.map((child, childIndex) => (
//           <li key={childIndex}>
//             <a href={child.path}>{child.name}</a>
//           </li>
//         ))}
//       </ul>
//     )}
//   </li>
// ))}

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
  return (
    <header>

      <nav className='navigation'>
        <div className='navigation__brand-logo'>
          <Link to='/'><img src={logo} alt='Rams International Logo' className='navigation__brand-logo__img' /></Link>
        </div>

        <ul>
          {
            ITEMS.map((item, itemIndex) => (
              <li key={itemIndex}><Link to={item.path}>{item.name}</Link>
                {item.isParent && item.child
                  &&
                  <ul>
                    {item.child.map((child, childIndex) => (
                      <li key={childIndex}><Link to={child.path}>{child.name}</Link></li>
                    ))}
                  </ul>
                }
              </li>
            ))
          }
        </ul>

        <div className='navigation__mobile-toggle-button'>
          <div className='navigation__mobile-toggle-button__bar'>&nbsp;</div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation