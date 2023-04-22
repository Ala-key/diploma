// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
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

// Инициализация приложения
const app = initializeApp(firebaseConfig);
// Инициализация базы данных
const db = getFirestore(app);
const auth = getAuth(app);

// Получение списка категорий (коллекции документов)
export const categoryCollection = collection(db, 'categories');
export const productsCollection = collection(db, 'products');
export const ordersCollection = collection(db, 'orders');

const provider = new GoogleAuthProvider();
export const signIn = () => signInWithPopup(auth, provider);
export const signOff = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);