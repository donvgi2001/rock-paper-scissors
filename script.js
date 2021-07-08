let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";

function computerPlay() { //Randomizes computer choice
    let choice = Math.floor(Math.random() * (3) + 1);
    let computerAnswer = "";
    switch (choice){
        case 1:
            computerAnswer = rock;
            return (computerAnswer);
            break;
        case 2:
            computerAnswer = paper;
            return(computerAnswer)
            break;
        case 3:
            computerAnswer = scissors;
            return(computerAnswer)
            break;
            }
}

function playerPlay() { //Gets Player Prompt
    let playerChoice = prompt("Enter Rock, Paper, or Scissors!")
    return (playerChoice.toUpperCase());
}

function playRound() { //Plays the round. You need to add Computer choice and make all console.log return instead.
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        console.log("It's a Tie!");
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        console.log("It's a Tie!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log("It's a Tie!");
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You Lose!");
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You Lose!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You Lose!");
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You Win!");
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win!");
    }
}

/*function game() { // Needs to reach 5 rounds. Keep count of score, and print the result.
    for (i = 0; i <= 5; i++)
    {
        playRound();
        if
    }

}*/