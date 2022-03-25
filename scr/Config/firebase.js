// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCWMrMvBC2nCBsSsZlLOcUhU7jNsnoZbSM",
authDomain: "projib2.firebaseapp.com",
databaseURL: "https://projib2-default-rtdb.firebaseio.com",
projectId: "projib2",
storageBucket: "projib2.appspot.com",
messagingSenderId: "134206927449",
appId: "1:134206927449:web:bf430d674276aa4915b748",
measurementId: "G-4N4D9RQRLM"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);