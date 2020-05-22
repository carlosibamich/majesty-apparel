import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { 
  CheckoutItemContainer, 
  ImageContainer, 
  TextSpans, 
  QuantityContainer, 
  RemoveButtonDiv 
} from './checkout-item.styles';

const CheckoutItem = ({ clearItem, cartItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextSpans>{name}</TextSpans>
      <QuantityContainer>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextSpans>${price}</TextSpans>
      <RemoveButtonDiv onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonDiv>
    </CheckoutItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
//export to checkout.component.jsx