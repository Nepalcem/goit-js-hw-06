const categories = document.querySelectorAll(".item");

console.log(`Number of Categories: ${categories.length}`);

categories.forEach((element) => {
  console.log(
    `Category: ${element.firstElementChild.textContent} \nElements: ${element.lastElementChild.children.length}`
  );
});
