import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
//export to cart-icon.component.js and cart-dropdown.component.js

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
//export to collection-items.component.js

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})
//eport to checkout-item.component.js

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})
//eport to checkout-item.component.js