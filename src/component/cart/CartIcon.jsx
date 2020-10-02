import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './CartIconStyled';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount} </ItemCountContainer>
    </CartContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
