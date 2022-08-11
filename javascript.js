const computerSelection = getComputerChoice();
const playerSelection = "Rock";

function getComputerChoice() {
     let randomChoiceValue = Math.floor(Math.random() * 3);
     if (randomChoiceValue == "0") {
          return "Rock";
     } else if (randomChoiceValue == "1") {
          return "Paper";
     } else {
          return "Scissors";
     }
}

function playRound(playerSelection, computerSelection) {
     let log = '';

     if (playerSelection === 'Rock') {
          if (computerSelection === 'Paper') {
               log = 'You Lose! Paper beats Rock';
          } else if (computerSelection === 'Scissors') {
               log = 'You Win! Rock beats Scissors';
          } else {
               log = "It's a tie";
          }
     } else if (playerSelection === 'Paper') {
          if (computerSelection === 'Scissors') {
               log = 'You Lose! Scissors beats Paper';
          } else if (computerSelection === 'Rock') {
               log = 'You Win! Paper beats Rock';
          } else {
               log = "It's a tie";
          }
     } else if (playerSelection === 'Scissors') {
          if (computerSelection === 'Rock') {
               log = 'You Lose! Rock beats Scissors';
          } else if (computerSelection === 'Paper') {
               log = 'You Win! Scissors beats Paper';
          } else {
               log = "It's a tie";
          } 
     }
     return log;
}