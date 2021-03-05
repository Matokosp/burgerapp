import firebase from "firebase";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC8puLjYd1BvbSwcLVg9XhfYEXRhC4ZdGg",
    authDomain: "burgerapp-c26b9.firebaseapp.com",
    databaseURL: "https://burgerapp-c26b9-default-rtdb.firebaseio.com",
    projectId: "burgerapp-c26b9",
    storageBucket: "burgerapp-c26b9.appspot.com",
    messagingSenderId: "10408944967",
    appId: "1:10408944967:web:0d86d93db4cbafaa19d862",
    measurementId: "G-R2GB9S1BRS"
});

  const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  
  export default db;



