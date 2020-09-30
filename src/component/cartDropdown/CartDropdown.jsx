import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartItem from '../cartItem/CartItem';
import CustomButton from '../formInput/CustomButton';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart__dropdown'>
      <div className='cart__items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className='cart__emptyMessage'>Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
        Check Out
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
