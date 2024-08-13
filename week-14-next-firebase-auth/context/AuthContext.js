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
      // Probably you want display to the user
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
    }
  },
  signOut: async function () {
    try {
      await signOut(auth);
    } catch (error) {
      // Probably you want display to the user
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error signing out: ${errorCode} - ${errorMessage}`);
    }
  },
};

export const AuthContext = createContext({ user: defaultValue });

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);
  const [readyState, setReadyState] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserState(user);
    } else {
      setUserState(null);
    }
    setReadyState(true);
  });

  return (
    <AuthContext.Provider
      value={{ ...defaultValue, user: userState, isReady: readyState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
