import { ADD_ITEM, CART_REMOVE_ITEM, CLEAR_ITEM_FROM_CART, TOGGLE_CART_HIDDEN } from '../types';

// Toggle cart hidden
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

// Add to cart
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

// Remove cart item
export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

// Remove item
export const removeItem = (item) => ({
  type: CART_REMOVE_ITEM,
  payload: item,
});
