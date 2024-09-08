import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, PhoneAuthProvider, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWL8iuNPttp_FVz_kIVFg4gcDk-wTW65M",
    authDomain: "ridesharing-57cf8.firebaseapp.com",
    projectId: "ridesharing-57cf8",
    storageBucket: "ridesharing-57cf8.appspot.com",
    messagingSenderId: "453379564757",
    appId: "1:453379564757:web:90a2e37737dfa1d0f72e5c",
    measurementId: "G-H755TZ76CV"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth, PhoneAuthProvider, firebaseConfig };
