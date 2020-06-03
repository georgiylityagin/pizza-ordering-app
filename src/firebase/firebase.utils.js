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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;