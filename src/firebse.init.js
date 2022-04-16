// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIFUizaMkBHi6HWxBpmtDuiDlF-uv_LWA",
  authDomain: "photographer-d0421.firebaseapp.com",
  projectId: "photographer-d0421",
  storageBucket: "photographer-d0421.appspot.com",
  messagingSenderId: "889055282973",
  appId: "1:889055282973:web:86055baec8a8a5057503f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;