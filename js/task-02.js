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

const ingredientsMain = document.querySelector("#ingredients");
ingredientsMain.append(...ingredientsList);
