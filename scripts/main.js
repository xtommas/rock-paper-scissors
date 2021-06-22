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
        return "You lose! Paper beats rock";
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors"; 
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock";
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beat paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors";
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beat paper";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = ""
    let computerSelection = "";
    let result;
    for(let i = 0; i<5; i++){
        // validating the user's entry so that the only valid inputs are rock, paper and scissors
        while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors"){
            playerSelection = prompt("Choose: rock, paper or scissors?");
        }
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection)
        console.log(result);
        playerSelection = "";
        // update the scores
        if(result.includes("win")){
            playerScore++;
        } else if(result.includes("lose")){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log("You win!");
    } else if(playerScore < computerScore){
        console.log("You lose");
    } else{
        console.log("It's a tie");
    }
}

game();




