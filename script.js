let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";

function computerPlay() { //Randomizes computer choice
    let choice = Math.floor(Math.random() * (3) + 1);
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
    let answer = playerChoice.toUpperCase(); //Makes it all uppercase so there is no problem if user inputs different cases.
    console.log(answer)
    if (answer != "ROCK" && answer != "PAPER" && answer != "SCISSORS") // Checks if its Rock, Paper, or Scissors.
    {
        console.log("Please enter Rock, Paper, or Scissors.")
        playerPlay();
    }
    return answer;
}

function playRound(playerPlay, computerPlay) { // Plays the round. 
    let resultTie = (1);
    let resultLose = (2);
    let resultWin = (3);

    if (playerPlay === "ROCK" && computerPlay === "ROCK") {
        return (resultTie); 
    }
    else if (playerPlay === "PAPER" && computerPlay === "PAPER") {
        return (resultTie);
    }
    else if (playerPlay === "SCISSORS" && computerPlay === "SCISSORS") {
        return (resultTie);
    }
    else if (playerPlay === "ROCK" && computerPlay === "PAPER") {
        return (resultLose);
    }
    else if (playerPlay === "PAPER" && computerPlay === "SCISSORS") {
        return (resultLose);
    }
    else if (playerPlay === "SCISSORS" && computerPlay === "ROCK") {
        return (resultLose);
    }
    else if (playerPlay === "ROCK" && computerPlay === "SCISSORS") {
        return (resultWin);
    }
    else if (playerPlay === "PAPER" && computerPlay === "ROCK") {
        return (resultWin);
    }
    else if (playerPlay === "SCISSORS" && computerPlay === "PAPER") {
        return (resultWin);
    }
}

function game () { 
    let Tie = ("It's a Tie! ");
    let Lose = ("You Lose! ");
    let Win = ("You Win! ");
    let playerScore = 0;
    let computerScore = 0;
    let totalScore = ("");
    let result = ("");
    //Needs to reach player or pc score to 5
    while (playerScore < 5 && computerScore < 5)
    {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let play = playRound(playerSelection, computerSelection);
        switch (play) {
            case 1:
                result = Tie + computerSelection + " is equal to " + playerSelection + "!";
                totalScore = "Player - " + playerScore + " || " + "Computer - " + computerScore;
                break;
            case 2:
                result = Lose + computerSelection + " beats " + playerSelection + "!";
                computerScore++;
                totalScore = "Player - " + playerScore + " || " + "Computer - " + computerScore;
                break;
            case 3:
                result = Win + playerSelection + " beats " + computerSelection + "!";
                playerScore++;
                totalScore = "Player - " + playerScore + " || " + "Computer - " + computerScore;
                break;
        }
        console.log(result)
        console.log(totalScore)
    }
    if (playerScore == 5)
    {
        console.log("YOU WIN!")
    }
    if (computerScore == 5)
    {
        console.log("YOU LOSE! TRY AGAIN?")
    }
}
