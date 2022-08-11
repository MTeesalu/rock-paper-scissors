const computerSelection = getComputerChoice();
let playerSelection = "rock";

function getComputerChoice() {
     let randomChoiceValue = Math.floor(Math.random() * 3);
     if (randomChoiceValue == "0") {
          return "rock";
     } else if (randomChoiceValue == "1") {
          return "paper";
     } else {
          return "scissors";
     }
}

function playRound(playerSelection, computerSelection) {
     let log = '';
     playerSelection = playerSelection.toLowerCase();

     if (playerSelection === 'rock') {
          if (computerSelection === 'paper') {
               log = 'You Lose! Paper beats rock';
          } else if (computerSelection === 'scissors') {
               log = 'You Win! Rock beats scissors';
          } else {
               log = "It's a tie";
          }
     } else if (playerSelection === 'paper') {
          if (computerSelection === 'scissors') {
               log = 'You Lose! Scissors beats paper';
          } else if (computerSelection === 'rock') {
               log = 'You Win! Paper beats rock';
          } else {
               log = "It's a tie";
          }
     } else if (playerSelection === 'scissors') {
          if (computerSelection === 'rock') {
               log = 'You Lose! Rock beats scissors';
          } else if (computerSelection === 'paper') {
               log = 'You Win! Scissors beats paper';
          } else {
               log = "It's a tie";
          } 
     }
     return log;
}
