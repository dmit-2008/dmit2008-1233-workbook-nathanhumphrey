import { createContext, useState } from 'react';

const defaultValue = {
  email: 'jdoe@example.com',
  uid: '123',
  role: 'user',
};

export const AuthContext = createContext({ user: defaultValue });

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(defaultValue);

  return (
    <AuthContext.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
