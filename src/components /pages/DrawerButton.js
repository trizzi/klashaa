import React from 'react';
import './DrawerButton.css';

const DrawerButton = ({ onClick }) => {
  return (
    <button
      className='toggle-button'
      onClick={() => {
        onClick();
      }}>
      <div className='toggle-button-line' />
      <div className='toggle-button-line' />
      <div className='toggle-button-line' />
    </button>
  );
};

export default DrawerButton;
