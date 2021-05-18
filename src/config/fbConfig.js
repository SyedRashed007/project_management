import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCQyIRCFxl2ZBf2zwRPWPjR8gBtZWSghMU",
    authDomain: "project-management-db090.firebaseapp.com",
    projectId: "project-management-db090",
    storageBucket: "project-management-db090.appspot.com",
    messagingSenderId: "139238148036",
    appId: "1:139238148036:web:e84c728e6f4149fb218691"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampInSnapshots: true});

  export default firebase;