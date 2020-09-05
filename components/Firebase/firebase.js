import firebase from 'firebase/app';
import 'firebase/auth';
import * as Google from 'expo-google-app-auth';

import firebaseConfig from './firebaseConfig';



// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const loginWithGmail = async () => {
  const {type, accessToken} = await Google.logInAsync(config)
  if (type === 'success'){
    await Google.logOutAsync({accessToken, ...config});
  }
}

export const logout = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);
