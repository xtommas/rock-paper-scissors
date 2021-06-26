function computerPlay(){
    let number = Math.floor(Math.random() * 3) + 1;
    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie";
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "You lose! Paper beats rock";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "You win! Rock beats scissors"; 
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "You win! Paper beats rock";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return "You lose! Scissors beat paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "You lose! Rock beats scissors";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "You win! Scissors beat paper";
    }
}

function updateScore(){
    scoreP.textContent = `You: ${playerScore} / Computer: ${computerScore}`;
}

let gameStarted = false;
let playerScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");
const startButton = document.querySelector("#start");
const scoreP = document.querySelector("#score");
const options = document.querySelectorAll(".option");
const message = document.querySelector("#message");

startButton.addEventListener("click", () => {
    gameStarted = true;
    playerScore = 0;
    computerScore = 0;
    startButton.remove();
    updateScore();
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        if(computerScore < 5 && playerScore < 5 && gameStarted){
            let computer = computerPlay();
            let result = playRound(computer, option.id);
            updateScore();
            message.textContent = result;
            if(computerScore === 5 || playerScore === 5){
                gameStarted = false;
                message.textContent = "";
                let playAgain = "";
                if(computerScore === 5){
                    playAgain = "You lost, reload the page to play again";
                } else{
                    playAgain = "You won! Reload the page to play again";
                }
                scoreP.textContent = playAgain;
            }
        }
    });
});














