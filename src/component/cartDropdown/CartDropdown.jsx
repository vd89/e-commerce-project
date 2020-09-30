import React from 'react';
import CustomButton from '../formInput/CustomButton';

const CartDropdown = () => {
  return (
    <div className='cart__dropdown'>
      <div className='cart__items'></div>
      <CustomButton>Check Out</CustomButton>
    </div>
  );
};

export default CartDropdown;
