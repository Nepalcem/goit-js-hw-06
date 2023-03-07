const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueElement = document.querySelector("#value");

btnDecrement.addEventListener("click", () => {
  valueElement.textContent = Number(valueElement.textContent) - 1;
  console.log(valueElement.textContent);
});
btnIncrement.addEventListener("click", () => {
  valueElement.textContent = Number(valueElement.textContent) + 1;
  console.log(valueElement.textContent);
});
