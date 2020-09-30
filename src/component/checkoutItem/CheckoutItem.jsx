import React from 'react';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkout__item'>
      <div className='image__container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity} </span>
      <span className='price'>$ {price.toFixed(2)} </span>
      <div className='remove__button'>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
