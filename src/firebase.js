import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCKNi9izvraCa6u9MngebzaXx_T_lvfEHs",
    authDomain: "clone-d804c.firebaseapp.com",
    projectId: "clone-d804c",
    storageBucket: "clone-d804c.appspot.com",
    messagingSenderId: "499454936994",
    appId: "1:499454936994:web:f76ee6d0868abbc65b54fb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };