/* Returns randomly either rock, paper, scissors */
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

// Rock beats scissors
// scissors beats paper
// paper beats rock

function playerPlay() {
  let answer = prompt("Rock, Paper, Scissors?");
  return answer.toLowerCase();
}

/* Play a round */
function playRound() {
  let player = playerPlay();
  let computer = computerPlay();

  console.log(`Player: ${player}`);
  console.log(`Computer: ${computer}`);

  if(player === computer) {
    console.log("It's a draw!");
  }

  if(player === "rock" && computer === "scissors") {
    console.log("You win! Rock beats Scissors");
  } else if(player === "scissors" && computer === "paper") {
    console.log("You win! Scissors beats Paper");
  } else if(player === "paper" && computer === "rock") {
    console.log("You win! Paper beats Rock");
  }

  if(computer === "rock" && player === "scissors") {
    console.log("You lose! Rock beats Scissors");
  } else if(computer === "scissors" && player === "paper") {
    console.log("You lose! Scissors beats Paper");
  } else if(computer === "paper" && player === "rock") {
    console.log("You lose! Paper beats Rock");
  }
}

playRound();