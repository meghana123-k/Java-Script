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

// This code defines a book object with properties such as title, price, and inStock. It also includes a method called applyDiscount that takes a percentage as an argument and updates the price of the book by applying the discount. The method calculates the new price by subtracting the discount amount from the original price and logs the updated price to the console. Finally, it calls the applyDiscount method with a 10% discount to demonstrate its functionality.
const book = {
  title: "Amma diary lo konni pagelu..",
  price: 100.0,
  inStock: true,
  applyDiscount: function (percent) {
    this.price = this.price - (this.price * percent) / 100;
    console.log(`updated price: ${this.price}`);
  },
};

console.log(`Title: ${book.title}, Price: ${book["price"]}, Available: ${book.inStock}`)
book.applyDiscount(10);
