import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../../component/collection/CollectionPage';
import CollectionOverview from '../../component/collectionOverview/CollectionOverview';

const Shop = ({ match }) => {
  return (
    <div className='shop__page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
