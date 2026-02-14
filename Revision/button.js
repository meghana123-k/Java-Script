// This file is for the button click event. When you click the button, it will change the color and text of the heading.
let head = document.createElement("h1");
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
head.innerHTML = "Hi! This is heading. You cannot modify me";
newBtn.style.color = "red";
newBtn.style.backgroundColor = "black";
newBtn.style.height = "50px";
newBtn.style.width = "150px";
document.querySelector("body").prepend(newBtn);
document.querySelector("body").prepend(head);
newBtn.addEventListener("click", () => {
  head.style.color = "blue";
  head.innerText = "OMG!!! You modified me..";
});
