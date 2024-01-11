import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../authentication/firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setUser('');
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        onSnapshot(doc(db, 'users', currentUser.uid), (doc) => {
          console.log('Current user: ', doc.data());
          setUser({ ...doc.data(), uid: currentUser.uid });
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={{ createUser, user, logout, signIn }}>{children}</UserContext.Provider>;
};
export const UserAuth = () => {
  return useContext(UserContext);
};
