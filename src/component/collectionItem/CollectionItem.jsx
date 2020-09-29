import React from 'react';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection__item'>
      <div className='collection__image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection__footer'>
        <span className='collection__footerName'>{name}</span>
        <span className='collection__footerPrice'>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
