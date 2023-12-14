import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAW9_CR-DzZstLv1PZon5poc0sf2j5gvb4",
  authDomain: "portfolio-dc498.firebaseapp.com",
  projectId: "portfolio-dc498",
  storageBucket: "portfolio-dc498.appspot.com",
  messagingSenderId: "748594522231",
  appId: "1:748594522231:web:19a1076b655ccafdbc7e72",
  measurementId: "G-YNF4CD96TZ"
};

const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
export const db=getFirestore(app);