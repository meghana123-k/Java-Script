let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

let para = document.querySelector(".content");
para.classList.add("newClass");
console.log(para.classList);
