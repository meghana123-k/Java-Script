allEle = document.querySelectorAll("*")
allEle.forEach((element)=> {
    element.style.fontFamily = "sans-serif"
})
header = document.querySelector("#main-header")
header.style.backgroundColor = "green"
header.style.color = "white"
header.style.padding = "10px"

container = document.querySelector(".main-container")
container.style.backgroundColor = "#f4f4f4"
container.style.margin = "30px 0px"
container.style.padding = "0px 50px"
container.style.border = "1px solid black"

inputs = document.querySelectorAll("input")
console.log(inputs);
for(let input of inputs) {
    input.style.padding = "10px"
    input.style.borderRadius = "5px"
}
submitBtn = document.querySelector(".btn")
submitBtn.style.backgroundColor = "black"
submitBtn.style.color = "white"

const ul = document.querySelector("#items");
ul.style.paddingLeft = "0px"
ul.style.marginLeft = "0px"
const li = document.querySelectorAll(".list-group-item");

li.forEach((lst) => {
  lst.style.listStyleType = "none";
  lst.style.border = "1px solid rgb(209, 207, 207)";
  lst.style.borderRadius = "2px"
  lst.style.padding = "10px";
});

odd = document.querySelectorAll("li:nth-child(odd)")
odd.forEach((ele) => (ele.style.backgroundColor = "#A9A9A9"));

even = document.querySelectorAll("li:nth-child(even)")

even.forEach((ele) => (ele.style.backgroundColor = "#D3D3D3"));