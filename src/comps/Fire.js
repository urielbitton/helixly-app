import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCbS3ezHr0LB-PGEPRcSRBnv1-pyfchj6M",
  authDomain: "helixly-app.firebaseapp.com",
  projectId: "helixly-app",
  storageBucket: "helixly-app.appspot.com",
  messagingSenderId: "375449280799",
  appId: "1:375449280799:web:9438801827722333b3d02a"
});

const db = firebaseApp.firestore()
const Fire = firebaseApp

export { db, Fire } 
