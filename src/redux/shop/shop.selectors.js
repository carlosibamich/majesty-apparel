import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
//export to shop.component.js

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);
//export to collections-overview.component.js and App.js

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections ? collections[collectionUrlParam] : null
);
//export to collection.component.js