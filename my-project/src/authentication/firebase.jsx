// Import the necessary functions from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmIB_SAYYT5-UdN62Aw_KXfGUPgK1-Ofs',
  authDomain: 'imageupload-c1c01.firebaseapp.com',
  projectId: 'imageupload-c1c01',
  storageBucket: 'imageupload-c1c01.appspot.com',
  messagingSenderId: '431536651988',
  appId: '1:431536651988:web:234b76db2584868bb5c541',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
