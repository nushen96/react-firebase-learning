import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCcOwuvOCV-DI-WV1JILb-phNyV6px6V6o",
    authDomain: "firebasics-7720d.firebaseapp.com",
    projectId: "firebasics-7720d",
    storageBucket: "firebasics-7720d.appspot.com",
    messagingSenderId: "776645510077",
    appId: "1:776645510077:web:1c378f52df167d7ada08d4"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;