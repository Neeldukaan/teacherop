import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // For testing purposes, set isAuthenticated to true
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  // Provide some mock data for userData
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: ".../public/favicon.ico"
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
