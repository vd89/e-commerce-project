import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../component/collectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shopSelector';

const Shop = ({ collections }) => {
  return (
    <div className='shop__page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(Shop);
