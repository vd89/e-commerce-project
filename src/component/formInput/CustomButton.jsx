import React from 'react';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'button__inverted' : ''} ${isGoogleSignIn ? 'google__signIn' : ''} custom__button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
