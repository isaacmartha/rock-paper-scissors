
// Variables and arrays
let items = ["Rock", "Paper", "Scissors"];

let humanScore
humanScore = 0;

let computerScore;
computerScore = 0;


// Randomize the computer's choice
let computerChoice = getComputerChoice(items);
function getComputerChoice(items) {
    return items[Math.floor(Math.random() * items.length)];
  }


//Takes the human choice and return it
let humanChoice = prompt("Rock, Paper, or Scissors?");
function getHumanChoice() {
    return humanChoice.toLowerCase();
}

let validatedHumanChoice = getHumanChoice();
console.log("Human Choice: " + validatedHumanChoice);


//Console log the computer's choice
console.log("Computer Choice: " +computerChoice)

//Round by round function
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++
        return "You win! Rock beats Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++
        return "You win! Paper beats Rock";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++
        return "You win! Scissors beats Paper";
    } else {
        computerScore++
        return "You lose!";
    }
}
console.log(playRound(humanChoice, computerChoice))


// Loop para jogar 5 rodadas
for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();  // Chama o prompt a cada iteração
    let computerChoice = getComputerChoice(items);
    console.log("Human Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);
    console.log(playRound(humanChoice, computerChoice));
}

// Declarar o vencedor
if (humanScore > computerScore) {
    console.log("You are the overall winner!");
} else if (humanScore < computerScore) {
    console.log("The computer is the overall winner!");
} else {
    console.log("It's an overall tie!");
}