import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
//export to cart-icon.component.js

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
//export to collection-items.component.js