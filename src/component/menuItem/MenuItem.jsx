import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div className={` ${size} menu__item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background__image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='menu__itemContent'>
        <h1 className='content__title'>{title.toUpperCase()}</h1>
        <span className='content__subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
