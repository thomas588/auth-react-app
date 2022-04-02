import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCaBoOT1Dn6RClIR_KBbTxDWOILAvLnqc",
  authDomain: "fir-authentication-440e4.firebaseapp.com",
  projectId: "fir-authentication-440e4",
  storageBucket: "fir-authentication-440e4.appspot.com",
  messagingSenderId: "704790073952",
  appId: "1:704790073952:web:f4b4baf8feda99d332e905",
  measurementId: "G-BGKEVLQS3Z"
};

const app = initializeApp(firebaseConfig);
export default app;