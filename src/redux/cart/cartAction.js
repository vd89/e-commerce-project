import { ADD_ITEM, TOGGLE_CART_HIDDEN } from '../types';

// Toggle cart hidden
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

// Add to cart
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
