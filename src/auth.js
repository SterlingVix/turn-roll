/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import '@firebase/auth';
import firebase from '@firebase/app';

const callbacks = new Set([
  input => {
    console.log(`  callbacks 1 input`, input);
  },
]);

export default {
  signIn() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },

  signOut() {
    return firebase.auth().signOut();
  },

  showLoginDialog() {
    callbacks.forEach(callback => callback());
  },

  onShowLoginDialog(callback: () => void) {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  },

  onAuthStateChanged(callback: any => void) {
    console.log(`  callback`, callback);
    // firebase.auth().onAuthStateChanged(onLogin);
    firebase.auth().onAuthStateChanged(callback);
  },
};
