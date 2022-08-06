import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBXV8PvMVWK3Z22WChFKhrfpZs6Pq9VMNs',
  authDomain: 'final-project-1df96.firebaseapp.com',
  databaseURL: 'https://final-project-1df96-default-rtdb.firebaseio.com',
  projectId: 'final-project-1df96',
  storageBucket: 'final-project-1df96.appspot.com',
  messagingSenderId: '209914854671',
  appId: '1:209914854671:web:235658758c8156536b527a',
  measurementId: 'G-Z3EDK4JNL1',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
