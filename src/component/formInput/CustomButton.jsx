import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google__signIn' : ''} custom__button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
