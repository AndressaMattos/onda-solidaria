import * as firebase from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEKtn-2uVDOnXublG65psvRuPwCualQEE",
    authDomain: "adroit-goods-340012.firebaseapp.com",
    projectId: "adroit-goods-340012",
    storageBucket: "adroit-goods-340012.appspot.com",
    messagingSenderId: "263859118981",
    appId: "1:263859118981:web:648ffc2ff1ea6efa4a5aec"
    };

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebaseAuth.initializeAuth(app)