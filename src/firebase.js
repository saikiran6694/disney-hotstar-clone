import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIrs-DsgdCVJkFKsdZQ9ZbwCs86TOT3ms",
  authDomain: "disneyplus-clone-d0558.firebaseapp.com",
  projectId: "disneyplus-clone-d0558",
  storageBucket: "disneyplus-clone-d0558.appspot.com",
  messagingSenderId: "453702644754",
  appId: "1:453702644754:web:48ebb1ffc2e6e5cf04d4cb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
