import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

//How to query the Firebase Collection/Documents
firestore.collection('users').doc('LwO57NrHqTyH3aS1p6Xx').collection('cartItems').doc('K2rwU1JR44VHaDD5u7eF');
// OR...
firestore.doc('/users/LwO57NrHqTyH3aS1p6Xx/cartItems/K2rwU1JR44VHaDD5u7eF');
firestore.collection('/users/LwO57NrHqTyH3aS1p6Xx/cartItems');