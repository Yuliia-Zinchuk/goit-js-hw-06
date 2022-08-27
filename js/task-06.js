const textInput = document.querySelector("#validation-input");
const valueLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(valueLength)) {
    textInput.classList.add("valid") ||
      textInput.classList.replace("invalid", "valid");
  } else {
    textInput.classList.add("invalid");
  }
});
