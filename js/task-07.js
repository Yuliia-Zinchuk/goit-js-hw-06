const inputSize = document.querySelector("#font-size-control");
const spanSize = document.querySelector("#text");

inputSize.addEventListener("input", (event) => {
  spanSize.style.fontSize = `${event.currentTarget.value}px`;
});
