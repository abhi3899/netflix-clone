import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {seedDatabase} from '../seed'

const config={
  apiKey: "AIzaSyA4TiJpwMsP8zlp7reAeKiybxhotVzd2xQ",
  authDomain: "netflix-clone-33ab8.firebaseapp.com",
  databaseURL: "https://netflix-clone-33ab8.firebaseio.com",
  projectId: "netflix-clone-33ab8",
  storageBucket: "netflix-clone-33ab8.appspot.com",
  messagingSenderId: "722911715240",
  appId: "1:722911715240:web:cc59bc08d012796c1b079d",
 
}

const firebase =Firebase.initializeApp(config)



export {firebase}