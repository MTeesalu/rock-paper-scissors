let playerScore = 0;
let computerScore = 0;

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

for (let i = 0; i < 5; i++) {
     function game() {
          let playerSelection = prompt('Enter your choice');
          let computerSelection = getComputerChoice();
          let roundOutcome = playRound(playerSelection, computerSelection);          
          console.log("Your score = " + playerScore);
          console.log("Computer's score = " + computerScore);
          console.log(roundOutcome);
     }
     if (i !== 5 ) {
          game();
     }     
}

if (playerScore > computerScore) {
    alert('Good job! You won the game! Reload the page to play again :)');
} else if (playerScore < computerScore) {
     alert('You lost! Better luck next time! Reload the page to play again :)');
} else {
     alert("Unlucky! It's a tie! Reload the page to play again :)");
}