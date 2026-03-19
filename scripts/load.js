import Tamagochi from "./classes/tamagochi.js";
import UI from "./classes/ui.js";

function load() {
  // creating a new pet
  const pet = new Tamagochi("Zed");
  // storing UI elements
  const ui = new UI();

  // insert the initial data in the UI
  ui.updateUI(pet);
  return console.log("Welcome Home!");
}

export default load;
