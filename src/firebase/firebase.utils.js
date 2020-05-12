import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyArmjHhTquNcb7frzo7V4HwiZS22Op5B5A",
  authDomain: "majesty-db.firebaseapp.com",
  databaseURL: "https://majesty-db.firebaseio.com",
  projectId: "majesty-db",
  storageBucket: "majesty-db.appspot.com",
  messagingSenderId: "898380940312",
  appId: "1:898380940312:web:dfadc3c7479fa716752f6d",
  measurementId: "G-C4P0G849NR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;