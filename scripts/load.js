function load() {
  // creating a new pet
  const pet = new Tamagochi("Zed");
  // storing UI elements
  const ui = new UI();

  // insert the initial data in the UI
  updateUI();
  return console.log("Welcome Home!");
}

export { load };
