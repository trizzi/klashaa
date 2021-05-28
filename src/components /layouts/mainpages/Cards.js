import React from 'react';

const Cards = () => {
  return (
    <div class='card my-8'>
      <div className=''>
        <div>
          <h4>Total account balance</h4>
          <p>USD</p>
        </div>

        <div className=''>
          <div className=''>
            <h1>$5,332.18</h1>
            <small>1 USD = 381.97 NGN</small>
          </div>
          <div className=''>
            <p>KES</p>
            <p>NGN</p>
            <p>GHC</p>
          </div>
        </div>

        <div className=''>
          <h4>Funds on hold</h4>
          <div className=''>
            <h1>$5,332.18</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
