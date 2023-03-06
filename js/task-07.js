// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const rangeInput = document.querySelector("#font-size-control");
const textResult = document.querySelector("#text");

rangeInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  textResult.style.fontSize = `${event.currentTarget.value}px`;
}
