// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDx1NHjT5Fqb7jOq0Df6wFZkBy9rm7GL8I',
  authDomain: 'fakeflix-65f82.firebaseapp.com',
  projectId: 'fakeflix-65f82',
  storageBucket: 'fakeflix-65f82.appspot.com',
  messagingSenderId: '393300622364',
  appId: '1:393300622364:web:b53a30191d5c76ed18f3d9',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
