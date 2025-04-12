<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button
      onclick="
  playGame('head')"
    >
      Head
    </button>
    <button
      onclick="
    playGame('tail')
  "
    >
      Tail
    </button>
    <button onclick="
    score.wins = 0,
    score.losses = 0,
    localStorage.removeItem('score');
    ">Reset</button>

    <script>

      
      let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
      };
      function computerMove() {
        let randomNumber = Math.random();
        let result = randomNumber < 0.5 ? "head" : "tail";
        return result;
      }
      
      function playGame(guess) {
        let userGuess = '';
        let result = computerMove();
        if(guess === result) {
          userGuess = 'You Won!';
        } else {
          userGuess = 'You Lose!';
        }

        if(userGuess === 'You Won!') {
          score.wins += 1;
        } else if(userGuess === 'You Lose!') {
          score.losses += 1;
        }

        localStorage.setItem('score', JSON.stringify(score))
        alert(`${userGuess} Wins = ${score.wins} Losses = ${score.losses}`);
      }
    </script>
  </body>
</html>
