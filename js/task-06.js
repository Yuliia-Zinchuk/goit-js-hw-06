const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  textInput.value.length === Number(textInput.dataset.length)
    ? textInput.classList.add("valid") ||
      textInput.classList.replace("invalid", "valid")
    : textInput.classList.add("invalid");
});
