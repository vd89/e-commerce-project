import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import { CollectionPreviewContainer, Preview, PreviewTitle } from './CollectionPreviewStyles';

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <PreviewTitle className='collection__title'>{title.toUpperCase()}</PreviewTitle>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
