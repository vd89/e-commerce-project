import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartAction';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart__icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping__icon' />
      <span className='item__count'>0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
