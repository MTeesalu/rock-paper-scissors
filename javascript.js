let playerSelection = prompt('Enter your choice');
let computerSelection = getComputerChoice();
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
     let randomChoiceValue = Math.floor(Math.random() * 3);
     if (randomChoiceValue == '0') {
          return 'rock';
     } else if (randomChoiceValue == '1') {
          return 'paper';
     } else {
          return 'scissors';
     }
}

function playRound(playerSelection, computerSelection) {
     let log = '';
     playerSelection = playerSelection.toLowerCase();
     if (playerSelection === 'rock') {
          if (computerSelection === 'paper') {
               log = 'You Lose! Paper beats rock';
               computerScore++;
          } else if (computerSelection === 'scissors') {
               log = 'You Win! Rock beats scissors';
               playerScore++;
          } else {
               log = "It's a tie";
          }
     } else if (playerSelection === 'paper') {
          if (computerSelection === 'scissors') {
               log = 'You Lose! Scissors beats paper';
               computerScore++;
          } else if (computerSelection === 'rock') {
               log = 'You Win! Paper beats rock';
               playerScore++;
          } else {
               log = "It's a tie";
          }
     } else if (playerSelection === 'scissors') {
          if (computerSelection === 'rock') {
               log = 'You Lose! Rock beats scissors';
               computerScore++;
          } else if (computerSelection === 'paper') {
               log = 'You Win! Scissors beats paper';
               playerScore++;
          } else {
               log = "It's a tie";
          } 
     }
     return log;
}

function game() {
     let outcome = playRound(playerSelection, computerSelection);
     playerSelection = prompt('Enter your choice');
     computerSelection = getComputerChoice();
     playRound(playerSelection, computerSelection);
     return outcome;
}