const computerSelection = getComputerChoice();

function getComputerChoice() {
   let randomChoiceValue = Math.floor(Math.random() * 3);
   if (randomChoiceValue == "0") {
        return "Rock";
   }
   else if (randomChoiceValue == "1") {
        return "Paper";
   }
   else {
        return "Scissors;"
   }
}
