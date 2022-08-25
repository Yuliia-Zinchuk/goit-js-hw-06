const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

let listArray = ingredients.map((ingredient) => {
  const liIngredient = document.createElement("li");
  liIngredient.textContent = ingredient;
  liIngredient.classList.add("item");
  return liIngredient;
});
listIngredients.append(...listArray);
