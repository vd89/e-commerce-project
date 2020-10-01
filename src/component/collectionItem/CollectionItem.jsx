import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartAction';
import CustomButton from '../formInput/CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection__item'>
      <div className='collection__image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection__footer'>
        <span className='collection__footerName'>{name}</span>
        <span className='collection__footerPrice'> ${price.toFixed(1)}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {' '}
        Add To cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
