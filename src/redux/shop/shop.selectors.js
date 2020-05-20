import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
//export to shop.component.js

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
//export to collections-overview.component.js

export const selectCollection = collectionUrlparam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlparam]
);
//export to collection.component.js