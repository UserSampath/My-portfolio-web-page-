import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsIJaIjwTQtIKLE_UPAjRIu5hF5wR_3hY",
  authDomain: "nalaka-sampath.firebaseapp.com",
  projectId: "nalaka-sampath",
  storageBucket: "nalaka-sampath.appspot.com",
  messagingSenderId: "87712975240",
  appId: "1:87712975240:web:31fd89121a4f5b1ab3523d",
  measurementId: "G-73NWJVSJDM"
};

const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
export const db=getFirestore(app);