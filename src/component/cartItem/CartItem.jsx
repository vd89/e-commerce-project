import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='cart__item'>
      <img src={imageUrl} alt='item' />
      <div className='item__details'>
        <div className='item__name'>{name}</div>
        <div className='item__price'>
          {' '}
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
