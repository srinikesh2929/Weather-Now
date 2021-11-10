if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./weathernowSw.js');
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn9EbHkivV2wmCuTKs7_879pvfHNcUzjc",
  authDomain: "weather-now-839ac.firebaseapp.com",
  projectId: "weather-now-839ac",
  storageBucket: "weather-now-839ac.appspot.com",
  messagingSenderId: "97809170483",
  appId: "1:97809170483:web:3564ef8133056b01e12346",
  measurementId: "G-CGY1J3YJ35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);

