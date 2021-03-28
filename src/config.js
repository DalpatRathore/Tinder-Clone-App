import firebase from "firebase";

const firebaseConfig = {
  // CREDITIONAL_DATA & API_KEY FROM USER FIRESTORE ACCOUNT
  apiKey: "AIzaSyCDx-XoV9oS70AQlkhZy6SWfPttdRSL8RQ",
  authDomain: "tinder-clone-app-bf116.firebaseapp.com",
  projectId: "tinder-clone-app-bf116",
  storageBucket: "tinder-clone-app-bf116.appspot.com",
  messagingSenderId: "890771627046",
  appId: "1:890771627046:web:28c93a9ccc9690abd1dae7",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
