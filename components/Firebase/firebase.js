import firebase from 'firebase/app';
import 'firebase/auth';
import * as Google from 'expo-google-app-auth';

import firebaseConfig from './firebaseConfig';


const config = {
  //webClientId: `781901075636-5b15tlgfl4omnqsglceuatvah9te9c3l.apps.googleusercontent.com`,
  // iosClientId: `<YOUR_IOS_CLIENT_ID>`,
  androidClientId: `781901075636-5b15tlgfl4omnqsglceuatvah9te9c3l.apps.googleusercontent.com`,
  // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
  //androidStandaloneAppClientId: `781901075636-5b15tlgfl4omnqsglceuatvah9te9c3l.apps.googleusercontent.com`,
};

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
