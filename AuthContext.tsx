import React, { createContext, useContext, useEffect, useState } from 'react';
import * as firebaseAuth from 'firebase/auth';
import {auth} from  './firebaseConfig';

interface AuthContextType {
  currentUser: firebaseAuth.User | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebaseAuth.User  | null>(null);

  console.log(currentUser);

  const logout = async () => {
    try {
      await firebaseAuth.signOut(auth);
      setCurrentUser(null);
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };
  

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(auth,(user : any) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ currentUser, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
