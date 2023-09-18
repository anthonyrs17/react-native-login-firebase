
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCptqCHW2WGO9JV1D5PvQtH-A-pR1q_mRI",
  authDomain: "anthonyifal523.firebaseapp.com",
  projectId: "anthonyifal523",
  storageBucket: "anthonyifal523.appspot.com",
  messagingSenderId: "464335500416",
  appId: "1:464335500416:web:cfbdf25b5de2223f0e2265",
  measurementId: "G-G71N94WNST"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export { app, auth }
