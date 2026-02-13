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
// Write a program to take age as input from the user and check if they are eligible to drive or not. (18 or above is eligible to drive)
let age = prompt("Enter age: ");
if (age >= 18) {
  alert("You can drive...");
} else {
  alert("You cannot drive");
}