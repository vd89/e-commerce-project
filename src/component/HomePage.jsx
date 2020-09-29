import React from 'react';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory__menu'>
        <div className='menu__item'>
          <div className='menu__itemContent'>
            <h1 className='content__title'>HATS</h1>
            <span className='content__subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='menu__itemContent'>
            <h1 className='content__title'>JACKETS</h1>
            <span className='content__subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='menu__itemContent'>
            <h1 className='content__title'>SNEAKERS</h1>
            <span className='content__subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='menu__itemContent'>
            <h1 className='content__title'>MENS</h1>
            <span className='content__subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='menu__itemContent'>
            <h1 className='content__title'>WOMEN'S</h1>
            <span className='content__subtitle'>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
