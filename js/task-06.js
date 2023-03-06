// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("#validation-input");
const textInputLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", onFocusLose);

function onFocusLose(event) {
  if (event.currentTarget.value.length !== textInputLength) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.add("valid");
  }
}

textInput.addEventListener("focus", onFocusActive);

function onFocusActive(event) {
  textInput.classList.value = "";
}

// console.log(textInput);
