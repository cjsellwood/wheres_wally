import "./index.css";

console.log("wally");

const troyImage = document.getElementById("troy-image");
const clickImage = (event) => {
  console.log("offset", event.offsetX, event.offsetY);
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
