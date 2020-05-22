import React from 'react';
import { withRouter } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component';
import { 
  CollectionPreviewContainer, 
  TitleH1, 
  PreviewDiv 
} from'./collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleH1 onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleH1>
    <PreviewDiv>
      {
        items
        .filter((item, i) => i < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </PreviewDiv>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
//export to collection-overview.component.jsx