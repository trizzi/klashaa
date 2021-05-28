import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import '../../App.css';
import '../pages/Home.css';
import { Mainpage } from '../layouts/mainpages/Mainpage';
import Navbar from '../layouts/mainpages/Navbar';
import Cards from '../layouts/mainpages/Cards';
import Search from '../layouts/mainpages/Search';
import Tables from '../layouts/mainpages/tables/Tables';

const Home = () => {
  return (
    <div className='split'>
      <div className='split-left'>
        <img src={Logo} alt='' className='img' />
        <div className='sidebar'>
          <h4>Main Pages</h4>
          <ul className='sidebar-menu-items btn'>
            {Mainpage.map((item) => {
              return (
                <li
                  key={item.id}
                  className={item.className}>
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
      <div className='split-right container'>
        <Navbar />
        <Cards />
        <Search />
        <Tables />
      </div>
    </div>
  );
};

export default Home;
