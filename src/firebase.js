import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
require ("dotenv").config({path: "./.env"})

// const firebaseConfig = {
//     apiKey: "AIzaSyDmt2le16u-6OsHN9peUYz58NTEqcPTV-c",
//     authDomain: "newsuckot.firebaseapp.com",
//     projectId: "newsuckot",
//     storageBucket: "newsuckot.appspot.com",
//     messagingSenderId: "325197125386",
//     appId: "1:325197125386:web:3f51c0afd674a20d020cf3",
//     measurementId: "G-6B16HLRVQ7"
// };
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();