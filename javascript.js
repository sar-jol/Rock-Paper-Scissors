
let playerScore = 0;
let computerScore = 0;

function playRound (event) {
  let roundResult;
  let playerSelection = event.target.innerHTML;
  let computerSelection = getComputerchoice();
  //console.log(playerSelection);
  //console.log(computerSelection);
    

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        roundResult = "It's a tie";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = "You Lose! Paper covers Rock";
        computerScore += 1;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = "You Win! Rock smashes Scissors";
        playerScore += 1;

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        roundResult = "It's a tie";
    } 
      else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = "You Win! Paper covers Rock";
        playerScore += 1;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = "You Lose! Scissors cuts Paper";
        computerScore += 1;
    } 
      else if (playerSelection === "scissors" && computerSelection === "scissors") {
        roundResult = "It's a tie";
    } 
      else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = "You Lose! Rock smashes Scissors";
        computerScore += 1;
    } 
      else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = "You Win! Scissors cuts Paper";
        playerScore += 1;
    } 
      else {roundResult = "Enter a proper value. Try again!"}  

    let myRoundResult = document.querySelector('.roundResult');
    let myPlayerScore = document.querySelector('.playerScore');
    let myComputerScore = document.querySelector('.computerScore');
    let myResult = document.querySelector('.result');
    
    myRoundResult.textContent = roundResult;    
    myPlayerScore.textContent = 'Player Score: ' + playerScore +'.';
    myComputerScore.textContent = 'Computer Score: ' + computerScore +'.';
 
    if (playerScore == 5) {
       myResult.textContent = "You are the winner!";
    } else if (computerScore == 5) {
       myResult.textContent = "Computer is the winner!";
    }
    else {
      myResult.textContent = "Continue the game!";
    }

}

function getComputerchoice () {

   let randomChoice = Math.floor(Math.random() * 3) + 1

   if (randomChoice === 1) {
    return "rock";
   }

   if (randomChoice === 2) {
    return "paper";
   }

   if (randomChoice === 3) {
    return "scissors";
   }
}

// console.log(playRound(playerSelection, computerSelection)); 

function game() {
  //let playerSelection;
  //let computerSelection;
  /* let gameRound = 1;
    while( gameRound <= 5) {
    computerSelection = getComputerchoice();    
    playerSelection = prompt(`Round:${gameRound}- Enter Rock or Paper or Scissors`);
    playRound(playerSelection,computerSelection);
    gameRound++;
  } */

  /* if (playerScore > computerScore) {
    return "After 5 rounds, you are the winner!";
  } else if (computerScore > playerScore) {
    return "After 5 rounds, Computer is the winner!";
  } else if ( playerScore == computerScore) {
    return "It's a tie after 5 rounds";
  } */
}
// Get references to the buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Add event listeners to the buttons
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);