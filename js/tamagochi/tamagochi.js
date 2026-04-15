class Tamagochi {
  constructor(name) {
    this.name = name;
    this.food = 5;
    this.fun = 5;
    this.sleep = 5;
    this.status = "normal";
  }

  addFood() {
    this.food += 10;
    if (this.food > 100) {
      this.food = 100;
    }
  }

  addFun() {
    this.fun += 10;
    if (this.fun > 100) {
      this.fun = 100;
    }
  }

  addSleep() {
    this.sleep += 10;
    if (this.sleep > 100) {
      this.sleep = 100;
    }
  }

  update() {
    this.food -= 5;
    this.fun -= 5;
    this.sleep -= 5;

    if (this.food <= 0) {
      this.status = "hungry";
      this.food = 0;
    }
    if (this.fun <= 0) {
      this.status = "bored";
      this.fun = 0;
    }
    if (this.sleep <= 0) {
      this.status = "sleepy";
      this.sleep = 0;
    }
  }
}

export default Tamagochi;
