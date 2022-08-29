function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.querySelector("#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

let divArray = [];

buttonCreate.addEventListener("click", () => {
  createBoxes(Number(input.value));
});

function createBoxes(amount) {
  let sizeWidth = 20;
  let sizeHeight = 20;
  for (let i = 1; i <= amount; i += 1) {
    sizeWidth += 10;
    sizeHeight += 10;

    const divEl = document.createElement("div");

    divEl.style.width = `${sizeWidth}px`;
    divEl.style.height = `${sizeHeight}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;

    divArray.push(divEl);
  }
  div.append(...divArray);
}

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function destroyBoxes() {
  div.innerHTML = "";
  input.value = "";
  divArray = [];
}
