// Write a program to guess a number between 1 and 100. The user will input their guess, and the program will provide feedback on whether the guess is too low, too high, or correct. The program should continue until the user guesses the correct number.
let guess = 56;
while (true) {
  let input = Number(prompt("Guess the number:"));
  if (input === guess) {
    console.log("Congratulations! You guessed the number.");
    break;
  } else if (input < guess) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }
}
// Write a program to take the age of a person as input and determine if they are eligible to drive. The program should also handle invalid inputs (e.g., negative numbers) and provide appropriate feedback.
let age = prompt("Enter age: ");
if (age < 0) {
  console.error("Wrong input");
}
if (age >= 18) {
  alert("You can drive...");
} else {
  alert("You cannot drive");
}
let con = confirm("do you want to see prompt again");
if (con) {
  if (age >= 18) {
    alert("You can drive...");
  } else {
    alert("You cannot drive");
  }
} else {
  alert("you cannot choosed");
}
// Write a program to take a number as input and redirect the user to a different website based on the value of the number. For example, if the number is greater than 10, redirect to "https://www.google.com", otherwise redirect to "https://www.bing.com".
let num = Number.parseInt(prompt("Enter number: "));

if (num > 4) {
  location.href = "https://jsfiddle.com";
} else {
  location.href = "https://codewithharry.com";
}

