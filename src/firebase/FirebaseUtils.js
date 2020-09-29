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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
