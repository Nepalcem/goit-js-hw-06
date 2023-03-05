// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const valueElement = document.querySelector("#value");

// console.log(btnDecrement, btnIncrement, valueElement);
btnDecrement.addEventListener("click", () => {
  valueElement.textContent = Number(valueElement.textContent) - 1;
  console.log(valueElement.textContent);
});
btnIncrement.addEventListener("click", () => {
  valueElement.textContent = Number(valueElement.textContent) + 1;
  console.log(valueElement.textContent);
});
