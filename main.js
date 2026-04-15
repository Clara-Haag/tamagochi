import Tamagochi from "./js/tamagochi/tamagochi.js";
import UI from "./js/ui/ui.js";
import sleep from "./js/sleep.js";

const tamagochi = new Tamagochi("Mimi");
const ui = new UI();

ui.bindEvents(tamagochi);
ui.update(tamagochi);

while (true) {
  await sleep(10000);
  tamagochi.update();
  ui.update(tamagochi);
}
