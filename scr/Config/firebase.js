import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCq-R2aBq7sH-QBCvSljTZG-jPs5XwOWg8",
    authDomain: "authentification-6f241.firebaseapp.com",
    projectId: "authentification-6f241",
    storageBucket: "authentification-6f241.appspot.com",
    messagingSenderId: "204956137155",
    appId: "1:204956137155:web:c7e4010d3381fe084f1476"
  };

  const app = initializeApp(firebaseConfig);

export default firebase;