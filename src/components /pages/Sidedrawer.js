import React from 'react';
import Logo from '../../logo.png';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Sidedrawer.css';
import { Mainpage } from '../layouts/mainpages/Mainpage';
import { General } from '../layouts/mainpages/General';

const Sidedrawer = () => {
  return (
    <div className='split-left'>
      <img src={Logo} alt='' className='img' />
      <div className='sidebar'>
        <h4>Main Pages</h4>
        <ul className='sidebar-menu-items btn'>
          {Mainpage.map((item) => {
            return (
              <li key={item.id} className={item.className}>
                <Link to={item.path}>
                  {item.img}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <h4>General</h4>
        <ul className='sidebar-menu-items btn'>
          {General.map((item) => {
            return (
              <li key={item.id} className={item.className}>
                <Link to={item.path}>
                  {item.img}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidedrawer;
