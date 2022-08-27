const textInput = document.querySelector("#validation-input");
const valueLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  let textInputValue = textInput.value;
  let userValueLength = textInputValue.length;

  if (userValueLength === Number(valueLength)) {
    textInput.classList.add("valid");
    textInput.classList.replace("invalid", "valid");
  } else {
    textInput.classList.add("invalid");
  }
});
