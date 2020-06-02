import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD0Wqd5wQ3tL41SGTzcU6h4AIxtji99l9o",
  authDomain: "pizza-app-a6ddf.firebaseapp.com",
  databaseURL: "https://pizza-app-a6ddf.firebaseio.com",
  projectId: "pizza-app-a6ddf",
  storageBucket: "pizza-app-a6ddf.appspot.com",
  messagingSenderId: "56197935098",
  appId: "1:56197935098:web:f6472abd8fa16389cb3e43"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;