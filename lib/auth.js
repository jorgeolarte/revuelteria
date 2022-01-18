import { useState, useEffect, createContext } from "react";
import { onAuthStateChanged, isPhoneNumberExist } from "./firebaseClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: false, exist: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
