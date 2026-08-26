import React, { useState } from "react";
import { loginEmail, loginPassword } from "../data/login";
import { AuthContext } from "./authContextInstance";

const AUTH_STORAGE_KEY = "oks_is_authenticated";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(AUTH_STORAGE_KEY) === "true"
  );

  const login = (email, password) => {
    const isValid = email === loginEmail && password === loginPassword;
    if (isValid) {
      localStorage.setItem(AUTH_STORAGE_KEY, "true");
      setIsAuthenticated(true);
    }
    return isValid;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
