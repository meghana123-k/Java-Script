// map, filter, reduce
let nums = [10, 20, 30];
let newMaps = nums.map((n) => n * 2);
console.log(newMaps);

let names = ["meghana", "raj", "sita"];
let newNames = names.map((n) => n.toUpperCase());
console.log(newNames);

let newFilter = nums.filter((n) => n > 15);
console.log(newFilter);

let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter((n) => n % 2 === 0);
console.log(even);


let users = [
  { name: "A", active: true },
  { name: "B", active: false },
];
let activeUsers = users.filter((u) => u.active === true);
console.log(activeUsers);

let sum = nums.reduce((acc, curr) => acc + curr, 0)
console.log(sum);

let cart = [{ price: 100 }, { price: 200 }, { price: 300 }];
let totPrice = cart.reduce((acc, curr)=> acc + curr.price, 0);
console.log(totPrice);