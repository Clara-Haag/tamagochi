const normal = "./images/sprites/normal.png";
const hungry = "./images/sprites/hungry.png";
const bored = "./images/sprites/bored.png";
const sleepy = "./images/sprites/sleepy.png";

function updateSprite(ui, tamagochi) {
  if (tamagochi.status === "normal") {
    ui.sprite.src = normal;
  } else if (tamagochi.status === "hungry") {
    ui.sprite.src = hungry;
  } else if (tamagochi.status === "bored") {
    ui.sprite.src = bored;
  } else if (tamagochi.status === "sleepy") {
    ui.sprite.src = sleepy;
  } else {
    ui.sprite.src = normal;
  }
}

export { updateSprite };
