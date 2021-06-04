import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSVGN7EjRF1m8bDLCptJcqVCOtVIz3omc",
    authDomain: "fir-db-89737.firebaseapp.com",
    projectId: "fir-db-89737",
    storageBucket: "fir-db-89737.appspot.com",
    messagingSenderId: "951358710273",
    appId: "1:951358710273:web:3a219e2e956691242cd600",
    measurementId: "G-7MZ02TYLDF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
