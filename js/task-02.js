// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = ingredients.map((element) => {
  const linkEl = document.createElement("li");
  linkEl.textContent = element;
  linkEl.classList.add("item");
  return linkEl;
});

// console.log(ingredientsList);

const ingredientsMain = document.querySelector("#ingredients");
ingredientsMain.append(...ingredientsList);
