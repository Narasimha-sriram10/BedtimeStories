import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD2Cux9AjfM_U1dOHPGUPmgcqUB1RqRnao",
  authDomain: "bedtimestories-7c3e8.firebaseapp.com",
  projectId: "bedtimestories-7c3e8",
  storageBucket: "bedtimestories-7c3e8.appspot.com",
  messagingSenderId: "319501168899",
  appId: "1:319501168899:web:3dfaabaeb9312480c9b936",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
