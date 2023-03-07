const buttonColorToggler = document.querySelector(".change-color");
const resultingColor = document.querySelector(".color");

buttonColorToggler.addEventListener("click", onClickBodyColorChange);

function onClickBodyColorChange(event) {
  const colorValue = getRandomHexColor();
  document.body.style.backgroundColor = colorValue;
  resultingColor.textContent = colorValue;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
