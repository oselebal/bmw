import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCJ4PX1D1969oNkvIzDFtTuZoSu4YHSkxE',
  authDomain: 'bmw1-de6a3.firebaseapp.com',
  projectId: 'bmw1-de6a3',
  storageBucket: 'bmw1-de6a3.appspot.com',
  messagingSenderId: '90828996536',
  appId: '1:90828996536:web:2d3a837496c6101bfdd94d',
  measurementId: 'G-R9F0S2HBCL',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const checkUserAuth = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, callback);
};
