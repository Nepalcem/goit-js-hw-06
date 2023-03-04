// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
const mainImagesUL = document.querySelector(".gallery");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesList = images.map(({ url, alt }) => 
  // method 1
  // const linkElement = document.createElement("li");
  // linkElement.classList.add("list-item");
  // const imgEl = document.createElement("img");
  // imgEl.src = url;
  // imgEl.alt = alt;
  // imgEl.width = 600;
  // linkElement.append(imgEl);
  // return linkElement;

  // method2
  // const imageElementTemplated = `<img src="${url}" alt="${alt}" width="600">`;
  // const linkElement = document.createElement("li");
  // linkElement.insertAdjacentHTML("afterbegin", imageElementTemplated);
  // return linkElement;

  // method3
  `<li><img src="${url}" alt="${alt}" width="600"></li>`
).join('');

 // method1 & 2
// console.log(imagesList);
// mainImagesUL.append(...imagesList);


//method 3
mainImagesUL.insertAdjacentHTML('afterbegin', imagesList);


