import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleOnClickHamburger = () => {
    setIsClicked(!isClicked);
  };

  const closeMobileMenu = () => {
    setIsClicked(false);
  };

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navBarContainer'>
          <Link to='/' className='navbarLogo'>
            SLV <i className='fab fa-typo3'></i>
          </Link>
          <div className='menuIcon' onClick={handleOnClickHamburger}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={isClicked ? 'navMenu active' : 'navMenu'}>
            <li className='navItem'>
              <Link to='/' className='navLinks' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/services' className='navLinks'>
                Services
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/portfolio' className='navLinks'>
                Portfolio
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/sign_up' className='navLinks-mobile'>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
