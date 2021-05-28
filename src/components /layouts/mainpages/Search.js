import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div>
      <h4>Payout table</h4>
      <div className=''>
        <input
          type='text'
          className='search'
          placeholder='Search Something '
        />
        <p>March, 2020 </p>
        <Link to='/'>Payout</Link>
      </div>
    </div>
  );
};

export default Search;
