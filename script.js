// Variables and arrays
let items = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;

// Randomize the computer's choice
function getComputerChoice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => { button.addEventListener('click', () =>{console.log(button.id); 
    }); 
}); 

// Takes the human choice and returns it
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice ? humanChoice.toLowerCase() : '';
}


// Plays one round of the game
function playRound() {
    let humanChoice = getHumanChoice();
    if (humanChoice === '') {
        console.log("No choice entered. Exiting game.");
        return;
    }

    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); 
    let computerChoice = getComputerChoice(items);
    
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    
    let result;
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        result = "You win! Rock beats Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        result = "You win! Paper beats Rock";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        result = "You win! Scissors beats Paper";
    } else {
        computerScore++;
        result = "You lose!";
    }
    

    //Makes the game works 5 times
    /*console.log(result);
    console.log(`Scores: Player - ${humanScore}, Computer - ${computerScore}`);

    if (humanScore) {
        console.log("You Won the game!");
    } else if (computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game goes on...");
        playRound(); // Recursive call to continue the game
    }

    /*if (humanScore === 5) {
        console.log("You Won the game!");
    } else if (computerScore === 5) {
        console.log("Computer won the game!");
    } else {
        console.log("The game goes on...");
        playRound(); // Recursive call to continue the game
    }*/

}

// Start the game when the window loads
window.onload = playRound;
