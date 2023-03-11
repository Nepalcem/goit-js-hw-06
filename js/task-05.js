const inputTag = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputTag.addEventListener("input", (event) => {
  inputTag.value.trim();
  outputElement.textContent =
    event.currentTarget.value.length > 0
      ? event.currentTarget.value.trim()
      : "Anonymous";
});
