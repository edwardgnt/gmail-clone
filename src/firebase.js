import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKNi9izvraCa6u9MngebzaXx_T_lvfEHs",
    authDomain: "clone-d804c.firebaseapp.com",
    projectId: "clone-d804c",
    storageBucket: "clone-d804c.appspot.com",
    messagingSenderId: "499454936994",
    appId: "1:499454936994:web:f76ee6d0868abbc65b54fb"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };