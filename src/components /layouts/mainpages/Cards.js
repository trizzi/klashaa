import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <div class='balance'>
      <div className='card left'>
        <div className='heading'>
          <h4>Total account balance</h4>
          <p>USD</p>
        </div>

        <div className='money-section'>
          <div className='money'>
            <h1>$5,332.18</h1>
            <small>1 USD = 381.97 NGN</small>
          </div>
          <div className=''>
            <p>KES</p>
            <p>NGN</p>
            <p>GHC</p>
          </div>
        </div>
      </div>

      <div className='card bg-color'>
        <h4>Funds on hold</h4>
        <div className=''>
          <h1>$5,332.18</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
