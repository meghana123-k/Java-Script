let guess = 56
while(true) {
    let input = Number(prompt("Guess the number:"));
    if(input === guess) {
        console.log("Congratulations! You guessed the number.");
        break
    }else if(input < guess) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}