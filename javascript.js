function getComputerChoice(){
    const randomInteger = Math.floor(Math.random() * 3);
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[randomInteger]
}

function capitalize(string){
    string = string[0].toUpperCase() + string.slice(1);
    return string
}

function playRound(computerChoice, userChoice, playerScore, computerScore){
    let result = "";
    if (userChoice === computerChoice){
        result = `You tied. ${userChoice} equals ${computerChoice}.`
    } else if (((userChoice === "Rock") && (computerChoice === "Scissors")) || ((userChoice === "Scissors") && (computerChoice == "Paper")) || ((userChoice === "Paper") && (computerChoice == "Rock"))) {
        playerScore+=1;
        result = `You win! ${userChoice} beats ${computerChoice}.`
    }else if (((userChoice === "Rock") && (computerChoice === "Paper")) || ((userChoice === "Scissors") && (computerChoice == "Rock")) || ((userChoice === "Paper") && (computerChoice == "Scissors"))) {
        computerScore+=1;
        result = `You lost. ${computerChoice} beats ${userChoice}.`
    }else{
        result = "Invalid input."
    }

    return {result, playerScore, computerScore};
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to Rock, Paper, Scissors!");
    for (let i = 0; i<5; i++){
        let userChoice = prompt("Would you like to play Rock, Paper, or Scissors?");
        userChoice = userChoice.toLowerCase();
        userChoice = capitalize(userChoice);
        let computerChoice = getComputerChoice();
        let roundResults = playRound(computerChoice, userChoice, playerScore, computerScore) 
        playerScore = roundResults.playerScore;
        computerScore = roundResults.computerScore;
        console.log(roundResults.result);
        console.log(`Player score: ${playerScore}    Computer score: ${computerScore}`);
    } 
}

game();






