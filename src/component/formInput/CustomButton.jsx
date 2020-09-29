import React from 'react';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='custom__button' {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
