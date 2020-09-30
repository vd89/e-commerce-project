import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  return (
    <div className='cart__icon'>
      <ShoppingIcon className='shopping__icon' />
      <span className='item__count'>0</span>
    </div>
  );
};

export default CartIcon;
