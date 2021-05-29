import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {
  return (
    <div className='cut'>
      <div className='cut-left'>
        <h4>Payout table</h4>
      </div>
      <div className='inputs'>
        <input
          type='text'
          className='search'
          placeholder='Search Something '
        />
        <p className='date-btn'>March 2020 </p>
        <Link to='/' className='btnn'>
          Payout
        </Link>
      </div>
    </div>
  );
};

export default Search;
