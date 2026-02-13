// // Write a program to take input from the user until they enter 0 and store those numbers in an array. Then, filter out the numbers that are divisible by 10 and print the resulting array. Finally, create a new array that contains the squares of the original numbers and print it.
// const arr = []

// while(true) {
//   let input = Number(prompt("Enter a number:"));
//   if(input === 0) {
//     break
//   }
//   arr.push(input)
// }
// console.log(arr);

// Filtering out numbers that are divisible by 10
const a = [10, 21, 30, 40, 55]

let res = a.filter((num) => {
  return num % 10 === 0
})
console.log(res);
// Creating a new array that contains the squares of the original numbers
const ar = [1, 2, 3, 4, 5]

let r1 = ar.map((num)=> {
  return num * num;
})
console.log(r1);

let number = 5;
let factorial = 1;

let arr1 = []
for(let i = 1; i <= number; i++) {
  arr1.push(i)
}
let res2 = arr1.reduce((h1, h2) => {
  return h1 * h2;
})
console.log(res2);
