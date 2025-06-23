import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDE7-Yy93gXUA3goqWpZog2r5tKDOHD6Ww",
  authDomain: "walletx-51e3f.firebaseapp.com",
  projectId: "walletx-51e3f",
  storageBucket: "walletx-51e3f.firebasestorage.app",
  messagingSenderId: "114528047564",
  appId: "1:114528047564:web:50ae8718e5739f34350d69",
  measurementId: "G-N1F40RDJYJ"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)