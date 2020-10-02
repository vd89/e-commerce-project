import React from 'react';
import { CartItemContainer, CartItemDetails, CartItemImage, ItemName } from './CartItemStyles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer className='cart__item'>
      <CartItemImage src={imageUrl} alt='item' />
      <CartItemDetails className='item__details'>
        <ItemName className='item__name'>{name}</ItemName>
        <ItemName className='item__price'>
          {' '}
          {quantity} x $ {price.toFixed(2)}
        </ItemName>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
