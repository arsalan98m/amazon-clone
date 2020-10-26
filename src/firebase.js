import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCel004SNZs2AsYY1Lx5F0IZO_5Zk_zbJM",
  authDomain: "clone-a1566.firebaseapp.com",
  databaseURL: "https://clone-a1566.firebaseio.com",
  projectId: "clone-a1566",
  storageBucket: "clone-a1566.appspot.com",
  messagingSenderId: "416637163596",
  appId: "1:416637163596:web:fdad84b30ca7e04392fce9",
  measurementId: "G-281ZLLEW90"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
