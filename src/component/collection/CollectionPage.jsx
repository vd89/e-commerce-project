import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../collectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';
import { CollectionItemsContainer, CollectionPageContainer, CollectionPageTitle } from './CollectionPageStyles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
