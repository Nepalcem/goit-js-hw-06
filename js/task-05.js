// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputTag = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputTag.addEventListener("input", (event) => {
  outputElement.textContent =
    event.currentTarget.value.length > 0
      ? event.currentTarget.value
      : "Anonymous";
});
