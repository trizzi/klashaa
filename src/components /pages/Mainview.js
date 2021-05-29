import React from 'react';
import Navbar from '../layouts/mainpages/Navbar';
import Cards from '../layouts/mainpages/Cards';
import Search from '../layouts/mainpages/Search';
import Tables from '../layouts/mainpages/tables/Tables';
import '../../App.css';
import './Mainview.css';

const Mainview = () => {
  return (
    <div className='split-right container'>
      <Navbar />
      <Cards />
      <Search />
      <Tables />
    </div>
  );
};

export default Mainview;
