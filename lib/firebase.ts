import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9dJ9wlXqzpVPiRNMRSluKWeg-oxLsExM",
  authDomain: "app-1-ae0df.firebaseapp.com",
  projectId: "app-1-ae0df",
  storageBucket: "app-1-ae0df.appspot.com",
  messagingSenderId: "463841519231",
  appId: "1:463841519231:web:b57d0a839299a02e95814a"
};

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
