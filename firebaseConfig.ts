import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDEKtn-2uVDOnXublG65psvRuPwCualQEE",
  authDomain: "adroit-goods-340012.firebaseapp.com",
  projectId: "adroit-goods-340012",
  storageBucket: "adroit-goods-340012.appspot.com",
  messagingSenderId: "263859118981",
  appId: "1:263859118981:web:648ffc2ff1ea6efa4a5aec"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage();
const auth: Auth = getAuth(app);

export { app, firestore, auth };
