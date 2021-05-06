//console.log("Hello tiny little space people!");

function computerPlay() {
    let actionArray = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor((Math.random() * 3));
    
   return actionArray[randomNumber];
}

function playRound(playerSelection, computerSelection) {
let results = ["You Lose! Paper beats Rock", "You Lose! Rock beats Scissors", "You Lose! Scissors beats Paper", "You Win! Paper beats Rock", "You Win! Rock beats Scissors", "You Win! Scissors beats Paper"];
    if (playerSelection === "rock" && computerSelection === "scissors") 
    {
        return results[4];
    }
    if (playerSelection === "rock" && computerSelection === "paper") 
    {
        return results[0];
    }
    if (playerSelection === "paper" && computerSelection === "rock") 
    {
        return results[3];
    }
    if (playerSelection === "paper" && computerSelection === "scissors") 
    {
        return results[2];
    }
    if (playerSelection === "scissors" && computerSelection === "rock") 
    {
        return results[1];
    }
    if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        return results[5];
    }
    /*
    rock beats scissors
    scissors beats paper
    paper beats rock

    a winner is descided, and printed to the console

    */
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));