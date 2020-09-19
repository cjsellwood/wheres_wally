let db = firebase.firestore();
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
