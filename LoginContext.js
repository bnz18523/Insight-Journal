// AuthContext.js

import React, { useState, useContext } from 'react';

const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic
    setLoggedIn(true);
    
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