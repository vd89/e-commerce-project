import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../component/checkoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors';

const CheckOut = ({ cartItems, total }) => {
  return (
    <div className='checkout__page'>
      <div className='checkout__header'>
        <div className='checkout__block'>
          <span>Product</span>
        </div>
        <div className='checkout__block'>
          <span>Description</span>
        </div>
        <div className='checkout__block'>
          <span>Quantity</span>
        </div>
        <div className='checkout__block'>
          <span>Price</span>
        </div>
        <div className='checkout__block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className='total'>
        <span>Total: $ {total.toFixed(2)} </span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOut);
