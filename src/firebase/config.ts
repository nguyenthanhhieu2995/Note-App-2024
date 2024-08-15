// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgXJr0vBSqBIB3FR7H_tTtA-T0y7qDdKY',
  authDomain: 'note-app-2024-a1f6f.firebaseapp.com',
  projectId: 'note-app-2024-a1f6f',
  storageBucket: 'note-app-2024-a1f6f.appspot.com',
  messagingSenderId: '624168090526',
  appId: '1:624168090526:web:5e58879304c905a0e0b48f',
  measurementId: 'G-3Y2WJG1WRG'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
