import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAZkId9UauY7gFNQ1wD97zmN-F9MZt5TWg',
  authDomain: 'e-commercedb-eac19.firebaseapp.com',
  databaseURL: 'https://e-commercedb-eac19.firebaseio.com',
  projectId: 'e-commercedb-eac19',
  storageBucket: 'e-commercedb-eac19.appspot.com',
  messagingSenderId: '643625316335',
  appId: '1:643625316335:web:9c431b1ea565751f9f901a',
  measurementId: 'G-CQ8XTXHH3X',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log('UserAuth=>>', userAuth);
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShort = await userRef.get();
  if (!snapShort.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
  // console.log('SnapShort=>>', snapShort);
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
