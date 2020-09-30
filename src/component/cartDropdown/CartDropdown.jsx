import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartItem from '../cartItem/CartItem';
import CustomButton from '../formInput/CustomButton';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart__dropdown'>
      <div className='cart__items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Check Out</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
