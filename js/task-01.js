const listOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${listOfCategories.length}`);

const listTitleOfCategories = document.querySelectorAll("h2");

listTitleOfCategories.forEach((titleOfCategories) =>
  console.log(
    `Category: ${titleOfCategories.textContent}\n` +
      `Elements: ${titleOfCategories.nextElementSibling.children.length}`
  )
);
