let playerScore = 0;
let computerScore = 0;

let playerSelection;

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
     button.addEventListener('click', () => {
          playerSelection = button.id;
          playGame();
     })
})

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

function playGame() {
     let computerSelection = getComputerChoice();
     let roundOutcome = playRound(playerSelection, computerSelection);          
     output.textContent = roundOutcome;
     player.textContent = `Player Score: ${playerScore}`;
     computer.textContent = `Computer Score: ${computerScore}`;
     if (playerScore == 5) {
          output.textContent = 'Nice! You Won the Game!';
          playerScore = 0;
          computerScore = 0;
          player.textContent = `Player Score: ${playerScore}`;
          computer.textContent = `Computer Score: ${computerScore}`;
     } else if (computerScore == 5) {
          output.textContent = 'You Lost the Game! Better luck next time!';
          playerScore = 0;
          computerScore = 0;
          player.textContent = `Player Score: ${playerScore}`;
          computer.textContent = `Computer Score: ${computerScore}`;
     }
}    

