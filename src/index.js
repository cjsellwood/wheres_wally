import "./index.css";
import * as firebase from "firebase/app";
import "firebase/firestore";

// Click on image to select location
const troyImage = document.getElementById("troy-image");
const selection = document.getElementById("selection");

// Moves selection box to clicked location
const clickImage = (event) => {
  selection.style.left = event.offsetX - 34 + "px";
  selection.style.top = event.offsetY - 34 + "px";
};

troyImage.addEventListener("click", clickImage);

const timerElement = document.getElementById("timer");

// Change time displayed every 1 second
const Timer = () => {
  timerElement.textContent = ((new Date() - startDate) * 0.001).toFixed(0);
};

// Start timer
const startTimer = () => {
  myTimer = setInterval(Timer, 1000);
};

// Stop timer
const stopTimer = () => {
  clearInterval(myTimer);
};

// Start timer when page has fully loaded
let startDate = null;
let myTimer = null;
window.addEventListener("load", () => {
  startDate = new Date();
  startTimer();
});

// Test of stopping timer
timerElement.addEventListener("click", stopTimer);

// Offset locations
// Wizard 1005, 120
// Wally 553 1839
// Odlaw 3133 1775
// Wenda 2728 1632
// Woof 2185 1496

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvnzAMytR5J3moRIYc8K4JlngSEdRc3Wo",
  authDomain: "whereswally-35f3e.firebaseapp.com",
  databaseURL: "https://whereswally-35f3e.firebaseio.com",
  projectId: "whereswally-35f3e",
  storageBucket: "whereswally-35f3e.appspot.com",
  messagingSenderId: "1015856911961",
  appId: "1:1015856911961:web:4676fdd0c2c61768ca8348",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
console.log(db);
db.collection("characters").add({
  Wally: {
    x: 555,
    y: 1839,
  },
  Wizard: {
    x: 1005,
    y: 120,
  },
  Wenda: {
    x: 2728,
    y: 1632,
  },
  Odlaw: {
    x: 3133,
    y: 1775,
  },
  Woof: {
    x: 2185,
    y: 1496,
  },
});
