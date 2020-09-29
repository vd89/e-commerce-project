import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection__preview'>
      <h1 className='collection__title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
