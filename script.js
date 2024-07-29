const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;	
    computerDisplay.textContent = `Computer: ${computerChoice}`;	
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("greenText", "redText");
    switch(result) {
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }   

}
