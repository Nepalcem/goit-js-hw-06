const createCollectionBtn = document.querySelector("button[data-create]");
const boxesInput = document.querySelector('input[type="number"]');
const boxes = document.querySelector("#boxes");
const boxesDestroy = document.querySelector("button[data-destroy]");
boxesInput.value = 0;
createCollectionBtn.addEventListener("click", createCollection);

function createCollection() {
  const numBoxes = boxesInput.value;
  createBoxes(numBoxes);
}

let amountOfBoxes = 0;

function createBoxes(amount) {
  const boxesElements = [];
  for (let i = 0; i < amount; i += 1) {
    if (amountOfBoxes > 0) {
      const coloredBox = document.createElement("div");
      const boxColor = getRandomHexColor();
      coloredBox.style.backgroundColor = boxColor;
      coloredBox.textContent = `${i + amountOfBoxes + 1}`;
      coloredBox.style.width = `${30 + (i + amountOfBoxes) * 10}px`;
      coloredBox.style.height = `${30 + (i + amountOfBoxes) * 10}px`;
      boxesElements.push(coloredBox);
      boxesInput.value = 0;
    } else {
      const coloredBox = document.createElement("div");
      const boxColor = getRandomHexColor();
      coloredBox.style.backgroundColor = boxColor;
      coloredBox.textContent = `${i + 1}`;
      coloredBox.style.width = `${30 + i * 10}px`;
      coloredBox.style.height = `${30 + i * 10}px`;
      boxesElements.push(coloredBox);
      boxesInput.value = 0;
    }
  }
  amountOfBoxes += boxesElements.length;
  boxes.append(...boxesElements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

boxesDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
  boxesInput.value = 0;
  amountOfBoxes = 0;
}
