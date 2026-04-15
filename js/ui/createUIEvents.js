function createUIEvents(ui, tamagochi) {
  ui.feed.addEventListener("click", () => {
    tamagochi.addFood();
    ui.update(tamagochi);
  });

  ui.play.addEventListener("click", () => {
    tamagochi.addFun();
    ui.update(tamagochi);
  });

  ui.nap.addEventListener("click", () => {
    tamagochi.addSleep();
    ui.update(tamagochi);
  });
}

export { createUIEvents };
