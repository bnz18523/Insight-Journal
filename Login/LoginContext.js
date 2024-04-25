'use client'
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';

const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
 // const router = useRouter();

  const login = () => {
    // Perform login logic
    setLoggedIn(true);
    //router.push('/');
    
  };

  const logout = () => {
    // Perform logout logic
    setLoggedIn(false);

  };

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};