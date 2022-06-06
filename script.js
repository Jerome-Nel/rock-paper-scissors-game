// function to return number from 0 - 2
function randomGenerator() {
    let random = Math.floor(Math.random() * 3);
    return random;
}

// function to return rock-paper-scissor based on the number passed
function computerPlay(num) {
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else if (num === 2) {
        return "scissor";
    }
}

// function to plays the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") {
        return "player";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "player";
    } else if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper") {
        return "player";
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "tie";
    } else if (playerSelection === "") {
        return "computer";
    } else if (playerSelection.toLowerCase() != "rock" || playerSelection.toLowerCase() != "paper" || playerSelection.toLowerCase() != "scissor") {
        return "computer";
    } else {
        return "computer";
    }
}

// play the round 5 times
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i);
        let playerSelection = prompt("Choose: Rock / Paper / Scissor ?");
        let computerSelection = computerPlay(randomGenerator());
        let winner = playRound(playerSelection, computerSelection);

        console.log("Computer choice: " + computerSelection);
        console.log("Player choice: " + playerSelection);
        console.log("Current score: " + winner);
        console.log("");


        if (winner === "player") {
            playerScore++;
        } else if (winner == "computer") {
            computerScore++;
        } else if (winner == "tie") {
            playerScore += 0;
            computerScore += 0;
        }
    }

    if (playerScore > computerScore) {
        return "The winner is player";
    } else {
        return "The winner is computer";
    }
}


console.log(game());

