// This code implements a simple increment and decrement functionality. It selects the output element where the number will be displayed, and the increment and decrement buttons. It initializes a count variable to keep track of the current number. When the increment button is clicked, it increases the count by 1 and updates the output. When the decrement button is clicked, it checks if the count is greater than 0 before decreasing it by 1 and updating the output, ensuring that the count does not go negative.

const output = document.querySelector("#number");
const inc = document.querySelector(".incButton");
const dec = document.querySelector(".decButton");
let count = 0;
inc.addEventListener("click", () => {
  count += 1;
  output.textContent = count;
});
dec.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    output.textContent = count;
  }
});
