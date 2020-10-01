import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../component/collectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection__page'>
      <h2 className='collection__title'>{title}</h2>
      <div className='collection__itemsPage'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
