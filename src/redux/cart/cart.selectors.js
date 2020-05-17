import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
//exported to cart-dropdown.component.js

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
//export to header.component.js

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity,
    0
  )
);
//exported to cart-icon.component.js

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
