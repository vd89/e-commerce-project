import { ADD_ITEM, CART_REMOVE_ITEM, CLEAR_ITEM_FROM_CART, TOGGLE_CART_HIDDEN } from '../types';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItem: removeItemFromCart(state.cartItems, payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
