function getComputerChoice(){
    const randomInteger = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randomInteger]
}

function playRound(computerChoice, userChoice, playerScore, computerScore){
    let result = "";
    if (userChoice === computerChoice){
        result = `You tied. ${userChoice} equals ${computerChoice}.`
    } else if (((userChoice === "rock") && (computerChoice === "scissors")) || ((userChoice === "scissors") && (computerChoice == "paper")) || ((userChoice === "paper") && (computerChoice == "rock"))) {
        playerScore+=1;
        result = `You win! ${userChoice} beats ${computerChoice}.`
    }else if (((userChoice === "rock") && (computerChoice === "paper")) || ((userChoice === "scissors") && (computerChoice == "rock")) || ((userChoice === "paper") && (computerChoice == "scissors"))) {
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

    document.addEventListener('DOMContentLoaded', () => {
        const roundWinner = document.querySelector('.round-winner');
        const pScore = document.querySelector('.player-score');
        const cScore = document.querySelector('.computer-score');
        const winner = document.querySelector('.winner');
        let buttons = document.querySelectorAll('.buttons');
    
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                let userChoice = button.id;
                let computerChoice = getComputerChoice();
                let roundResults = playRound(computerChoice, userChoice, playerScore, computerScore) 
                playerScore = roundResults.playerScore;
                computerScore = roundResults.computerScore;
                roundWinner.innerText = roundResults.result;
                pScore.innerText = `Player score: ${playerScore}`; 
                cScore.innerText = `Computer score: ${computerScore}`;
                if (playerScore === 5){
                    winner.innerText = "Player wins!";
                } else if (computerScore === 5){
                    winner.innerText = "Computer wins.";
                }
            });
        });
    });
}

game();






