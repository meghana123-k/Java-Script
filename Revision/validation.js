// validation.js
const text = document.querySelector(".nameInput");
const button = document.querySelector(".button");
const show = document.querySelector("#display");

button.addEventListener("click", () => {
  let value = text.value;
  if (value === "") {
    alert("Enter your name...");
  } else {
    show.textContent = "Hello " + value;
  }
});
