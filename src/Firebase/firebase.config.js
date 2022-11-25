// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3BdFe8OtcISEp0YpQBdsxr2Zy5xsKr_Q",
    authDomain: "rohan-television.firebaseapp.com",
    projectId: "rohan-television",
    storageBucket: "rohan-television.appspot.com",
    messagingSenderId: "718578131268",
    appId: "1:718578131268:web:81d53c2350a06aa6523711",
    measurementId: "G-E5XED3ZZ3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;