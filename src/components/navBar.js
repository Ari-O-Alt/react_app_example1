import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isTimes, setIsTimes] = React.useState(false);

  const handleOnClickHamburger = () => {
    setIsTimes(!isTimes);
  };

  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='navBarContainer'>
          <Link to='/' className='navbarLogo'>
            SLV <i className='fab fa-typo3'></i>
          </Link>
          <div className='menuIcon' onClick={handleOnClickHamburger}>
            <i className={isTimes ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
