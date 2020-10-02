import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionPage from '../../component/collection/CollectionPage';
import CollectionOverview from '../../component/collectionOverview/CollectionOverview';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/FirebaseUtils';
import { updateCollections } from '../../redux/shop/shopActions';

class Shop extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop__page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(Shop);
