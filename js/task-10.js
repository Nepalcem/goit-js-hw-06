// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const createCollectionBtn = document.querySelector("button[data-create]");
const boxesInput = document.querySelector('input[type="number"]');
const boxes = document.querySelector("#boxes");
const boxesDestroy = document.querySelector("button[data-destroy]");

createCollectionBtn.addEventListener("click", createCollection);

function createCollection() {
  const numBoxes = boxesInput.value;
  createBoxes(numBoxes);
}

// createCollectionControl.addEventListener("click", createCollection);

function createBoxes(amount) {
  const boxesElements = [];
  for (let i = 0; i < amount; i += 1) {
    const coloredBox = document.createElement("div");
    const boxColor = getRandomHexColor();
    coloredBox.style.backgroundColor = boxColor;
    coloredBox.textContent = `${i + 1}`;
    coloredBox.style.width = `${30 + i * 10}px`;
    coloredBox.style.height = `${30 + i * 10}px`;
    boxesElements.push(coloredBox);
  }
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
}
