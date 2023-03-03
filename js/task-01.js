// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

const categories = document.querySelectorAll(".item");
// const ulCatMain = document.querySelector("#categories");
console.log(
  `Number of Categories: ${categories.length}` /*ulCatMain.children.length*/
);

categories.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent} \nElements: ${element.lastElementChild.children.length}`
  );
});

