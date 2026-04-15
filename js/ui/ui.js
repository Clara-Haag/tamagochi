import { createUIEvents } from "./createUIEvents.js";
import { updateSprite } from "./updateSprite.js";

class UI {
  constructor() {
    // mapping stats
    this.name = document.getElementById("name");
    this.food = document.getElementById("food");
    this.fun = document.getElementById("fun");
    this.sleep = document.getElementById("sleep");
    this.sprite = document.getElementById("sprite");

    // mapping actions
    this.feed = document.getElementById("feed");
    this.play = document.getElementById("play");
    this.nap = document.getElementById("nap");
  }

  update(tamagochi) {
    // update UI stats
    this.name.innerText = tamagochi.name;
    this.food.innerText = tamagochi.food;
    this.fun.innerText = tamagochi.fun;
    this.sleep.innerText = tamagochi.sleep;
    updateSprite(this, tamagochi);

    console.log("Updated sucessfuly!");
  }

  bindEvents(tamagochi) {
    // creating UI events
    createUIEvents(this, tamagochi);
    console.log("Events created!");
  }
}

export default UI;
