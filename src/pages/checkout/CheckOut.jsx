import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../component/checkoutItem/CheckoutItem';
import StripeButton from '../../component/stripeButton/StripeButton';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './CheckoutStyles';

const CheckOut = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <TotalContainer>
        <span>Total: $ {total.toFixed(2)} </span>
      </TotalContainer>
      <WarningContainer>
        * To test the strip payment *
        <br /> card no : 4242 4242 4242 4242 - Exp: 01/21 -CVV: 123{' '}
      </WarningContainer>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOut);
