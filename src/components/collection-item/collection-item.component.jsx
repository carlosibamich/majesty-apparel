import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { 
  CollectionItemContainer,
  AddButton,
  ImageDiv, 
  CollectionFooterContainer,
  NameSpan,
  PriceSpan 
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageDiv className='image' imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <NameSpan>{ name }</NameSpan>
        <PriceSpan>{ price }</PriceSpan>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
//export to collection.component.jsx and collection-preview.component.jsx