if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./weathernowSw.js');
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

async function myfunc() {
  var input = document.getElementById("city").value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=49fd6f61e2b89421e0c3b527bc26efd6";
  var response = await fetch(url);
  var responseJSON = await response.json();
  // console.log(responseJSON);
  var place = input + " , " + responseJSON.sys['country'];
  var weather = responseJSON.weather[0]['main'];
  var tempinC = (responseJSON.main['temp'] - 273.15).toFixed(2) + " C";
  var output = " " + place + " " + weather + " " + tempinC;
  var info = document.getElementById("info");
  info.innerHTML = output;
  var icon = await responseJSON.weather[0]['icon'];
  var iconImage = await "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
  var image = document.getElementById("icon");
  image.src = iconImage;
  document.getElementById("output").style.visibility = "visible";
  
}
