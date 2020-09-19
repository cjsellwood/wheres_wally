const charactersRef = db.collection("characters");
charactersRef.doc("Wally").set({
  x: 555,
  y: 1839,
});

charactersRef.doc("Wizard").set({
  x: 1005,
  y: 120,
});

charactersRef.doc("Wenda").set({
  x: 2728,
  y: 1632,
});

charactersRef.doc("Odlaw").set({
  x: 3133,
  y: 1775,
});

charactersRef.doc("Woof").set({
  x: 2185,
  y: 1496,
});
