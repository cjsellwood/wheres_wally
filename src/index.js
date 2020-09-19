import "./index.css";
import * as firebase from "firebase/app";
import "firebase/firestore";

// Click on image to select location
const troyImage = document.getElementById("troy-image");
const selection = document.getElementById("selection");

// Moves selection box to clicked location
let clickLocation = null;
const clickImage = (event) => {
  selection.style.left = event.offsetX - 38 + "px";
  selection.style.top = event.offsetY - 38 + "px";
  clickLocation = {
    x: event.offsetX,
    y: event.offsetY,
  };
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

// Access firestore database
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const checkButton = document.getElementById("check-button");
const selectionList = document.getElementById("selection-list");
const loading = document.getElementById("loader");

// When clicking check button check click against location on server
checkButton.addEventListener("click", () => {
  const selectedCharacter = selectionList.value;
  const docRef = db.collection("characters").doc(selectedCharacter);

  // Reset selection box
  selection.style.left = "-200px";
  selection.style.top = "-200px;";

  // Display loading spinner
  loading.style.left = clickLocation.x - 4 + "px";
  loading.style.top = clickLocation.y - 105 + "px";
  
  // Check if click in range of square
  docRef.get().then((response) => {
    const characterLocation = response.data();
    console.log(clickLocation, characterLocation);
    // Check if character selected is inside the selection box
    if (
      clickLocation.x > characterLocation.x - 20 &&
      clickLocation.x < characterLocation.x + 20 &&
      clickLocation.y > characterLocation.y - 20 &&
      clickLocation.y < characterLocation.y + 20
    ) {
      console.log("Found " + selectedCharacter);
      // Reset selection box and loading spinner
      selection.style.left = "-200px";
      selection.style.top = "-200px;";
      loading.style.left = "-200px";
      loading.style.top = "-200px";

      // Mark as found
      const located = document.getElementById(selectedCharacter);
      located.style.left = clickLocation.x - 43 + "px";
      located.style.top = clickLocation.y - 43 + "px";
      const find = document.getElementById(`find-${selectedCharacter}`);
      find.style.textDecoration = "line-through"

    } else {
      // Reset selection box and loading spinner
      selection.style.left = "-200px";
      selection.style.top = "-200px;";
      loading.style.left = "-200px";
      loading.style.top = "-200px";
    }
  });
});
