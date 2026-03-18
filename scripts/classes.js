class Tamagochi {
  // Tamagochi class: stores pet´s base attributes
  constructor(name) {
    this.name = name;
    this.food = 0;
    this.fun = 0;
    this.sleep = 0;
  }
}
class UI {
  // UI class: stores the HTML elements where data should appear
  constructor() {
    this.name = document.getElementById("name");
    this.food = document.getElementById("food");
    this.fun = document.getElementById("fun");
    this.sleep = document.getElementById("sleep");
  }
}
