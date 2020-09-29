import React from 'react';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={` ${size} menu__item`}>
      <div className='background__image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='menu__itemContent'>
        <h1 className='content__title'>{title.toUpperCase()}</h1>
        <span className='content__subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
