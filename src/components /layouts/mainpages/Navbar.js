import React from 'react';
import notification from '../../../notification.png';
import profile from '../../../profile.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <h3>Balances</h3>
        <small>Today, 19th october 2020</small>
      </div>
      <div className='image-icon'>
        <img src={notification} alt='' />
        <img src={profile} alt='' />
      </div>
    </nav>
  );
};

export default Navbar;
