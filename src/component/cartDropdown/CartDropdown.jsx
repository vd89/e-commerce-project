import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CartItem from '../cartItem/CartItem';
import {
  CartDropDownButton,
  CartDropDownContainer,
  CartDropDownTotal,
  CartItemsContainer,
  EmptyMessageContainer,
} from './CartDropdownStyles';

const CartDropdown = ({ cartItems, history, dispatch, total }) => {
  return (
    <CartDropDownContainer className='cart__dropdown'>
      <CartItemsContainer className='cart__items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer className='cart__emptyMessage'>Your Cart Is Empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropDownTotal className='total'> Total: $ {total.toFixed(2)}</CartDropDownTotal>
      <CartDropDownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
        Check Out
      </CartDropDownButton>
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
