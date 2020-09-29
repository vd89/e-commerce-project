import React, { Component } from 'react';
import CollectionPreview from '../../component/collectionPreview/CollectionPreview';
import SHOP_DATA from './ShopData';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop__page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
