const button = document.querySelectorAll("button");

const valueCounter = document.querySelector("#value");
let counterValue = 0;

const showIncDec = (event) => {
  if (event.target.dataset.action === "increment") {
    counterValue += 1;
  } else {
    counterValue -= 1;
  }

  valueCounter.textContent = counterValue;
};

button.forEach((event) => event.addEventListener("click", showIncDec));
