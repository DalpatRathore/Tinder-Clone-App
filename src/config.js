import firebase from "firebase";

const firebaseConfig = {
  // CREDITIONAL_DATA & API_KEY FROM USER FIRESTORE ACCOUNT
  
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
