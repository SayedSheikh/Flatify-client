import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const emailPassSignUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const SignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const editProfile = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    emailPassSignUp,
    SignIn,
    logOut,
    editProfile,
    googleSignIn,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
