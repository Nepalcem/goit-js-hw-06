const rangeInput = document.querySelector("#font-size-control");
const textResult = document.querySelector("#text");

rangeInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  textResult.style.fontSize = `${event.currentTarget.value}px`;
}
