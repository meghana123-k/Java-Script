let scores = JSON.parse(localStorage.getItem("scores")) || {
  win: 0,
  losses: 0,
  tie: 0,
};
/*updateScore();*/

/*if(!scores) {
        scores = {
          win: 0,
          losses: 0,
          tie: 0
        };
      }*/
updateScore();
const computerMove = pickComputerMove();

let isPlaying = false;
let intervalId;
function autoPlay() {
  if(!isPlaying) {
    intervalId = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isPlaying = true;
  } else {
    clearInterval(intervalId);
    isPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});
document.querySelector('.js-scissor-button').addEventListener('click', () => {
  playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r' || event.key === 'R') {
    playGame('rock');
  } else if(event.key === 'p' || event.key === 'P') {
    playGame('paper');
  } else if(event.key === 's' || event.key === 'S') {
    playGame('scissors');
  }
})

function playGame(playerMove) {
  let result = "";
  if (computerMove === "rock") {
    if (playerMove === "rock") {
      result = "Tie.";
    } else if (playerMove === "paper") {
      result = "You Win.";
    } else if (playerMove === "scissors") {
      result = "You Lose.";
    }
  } else if (computerMove === "paper") {
    if (playerMove === "rock") {
      result = "You Lose.";
    } else if (playerMove === "paper") {
      result = "Tie.";
    } else if (playerMove === "scissors") {
      result = "You Win.";
    }
  } else if (computerMove === "scissors") {
    if (playerMove === "rock") {
      result = "You Win.";
    } else if (playerMove === "paper") {
      result = "You Lose.";
    } else if (playerMove === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You Win.") {
    scores.win += 1;
  } else if (result === "You Lose.") {
    scores.losses += 1;
  } else if (result === "Tie.") {
    scores.tie += 1;
  }
  localStorage.setItem("scores", JSON.stringify(scores));
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You Picked ${playerMove}. Computer picked ${computerMove}`;
  updateScore();
  /*alert(
          `You Picked ${playerMove}. Computer picked ${computerMove}. ${result} 
          Wins: ${scores.win} Loses: ${scores.losses} Tie: ${scores.tie}`
        ); */
}
function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${scores.win} Loses: ${scores.losses} Tie: ${scores.tie}`;
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}