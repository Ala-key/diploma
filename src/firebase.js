// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyBTPx4N0Zs8ICDpmGSz0iTxOI0CkjVXU",
  authDomain: "diplom-d6f26.firebaseapp.com",
  projectId: "diplom-d6f26",
  storageBucket: "diplom-d6f26.appspot.com",
  messagingSenderId: "646087854814",
  appId: "1:646087854814:web:3dea4fcaef5fc95c5c104f",
  measurementId: "G-9PRSFECD54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);


export const categoryCollection = collection(db,'categories');
export const productCollection = collection(db,'products');
export const orderCollection = collection(db,'orders');
