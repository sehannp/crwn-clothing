import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_Lp7I_drjpD7gj7wkR7wspz4NoZCewFk",
    authDomain: "crwn-db-3a1ed.firebaseapp.com",
    databaseURL: "https://crwn-db-3a1ed.firebaseio.com",
    projectId: "crwn-db-3a1ed",
    storageBucket: "",
    messagingSenderId: "791596485507",
    appId: "1:791596485507:web:36cde6fa9f791946"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
