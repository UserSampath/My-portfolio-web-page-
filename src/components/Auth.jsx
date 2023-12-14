import React, { useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../config/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const Auth = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setUserImage(user.photoURL);
      } else {
        setUserEmail("");
      }
    });
    return () => unsubscribe();
  }, []);


  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const logOutUser = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginLeft: "20px",
      }}>
      <button
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          color: "white",
          padding: "5px",
        }}
        onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <button
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          color: "white",
          padding: "5px",
        }}
        onClick={logOutUser}>
        Log out
      </button>
      {userEmail && (
        <>
          <img
            src={userImage}
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
          />
          <p>{userEmail}</p>
        </>
      )}
    </div>
  );
};

export default Auth;
