const textInput = document.querySelector("#validation-input");
const textInputLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", onFocusLose);

function onFocusLose(event) {
  const inputBeforeTrim = event.currentTarget.value;
  if (inputBeforeTrim.trim().length !== textInputLength) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.add("valid");
  }
}

textInput.addEventListener("focus", onFocusActive);

function onFocusActive(event) {
  textInput.classList.value = "";
}
