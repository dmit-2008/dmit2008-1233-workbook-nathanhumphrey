import { createContext, useState } from 'react';
import { auth } from '@/firebase/config';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const defaultValue = {
  user: null,
  isReady: false,
  signIn: async function (email, password) {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const user = cred.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
    }
  },
  signOut: async function () {
    await signOut();
  },
};

export const AuthContext = createContext({ user: defaultValue });

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(defaultValue);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(user);
    } else {
      setUserState(null);
    }
  });

  return (
    <AuthContext.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
