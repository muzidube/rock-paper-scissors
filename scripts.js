/* 
Array with rock, paper, scissors
Randomly return one of them
*/


let playerScore=0;
let computerScore=0;

function playRound() {
    let playerInput = prompt("Please select your option").toUpperCase();

    let myArray = ["Rock", "Paper", "Scissors"];
    let computerInput = myArray[Math.floor(Math.random()*myArray.length)].toUpperCase();

    if (playerInput == computerInput) {
        return "Draw"
    }   else if (
            (computerInput == "ROCK" && playerInput == "SCISSORS") ||
            (computerInput == "SCISSORS" && playerInput == "PAPER") ||
            (computerInput == "PAPER" && playerInput == "ROCK")
    ) {
    computerScore = ++computerScore
    if (computerScore === 1) {
        return "Computer Wins - 1 " + computerInput + " beats " + playerInput
        } else if (computerScore === 2) {
            return "Computer Wins - 2 " + computerInput + " beats " + playerInput
        } else if (computerScore === 3) {
            return "Computer Wins - 3 " + computerInput + " beats " + playerInput
        } else if (computerScore === 4) {
            return "Computer Wins - 4 " + computerInput + " beats " + playerInput
        } else if (computerScore === 5) {
            return "Computer Wins the game!!"
    } 

    } else { 
        playerScore = ++playerScore
        if (playerScore === 1) {
            return "Player Wins - 1 " + playerInput + " beats " + computerInput
            } else if (playerScore === 2) {
                return "Player Wins - 2 " + playerInput + " beats " + computerInput
            } else if (playerScore === 3) {
                return "Player Wins - 3 " + playerInput + " beats " + computerInput
            } else if (playerScore === 4) {
                return "Player Wins - 4 " + playerInput + " beats " + computerInput
            } else if (playerScore === 5) {
                return "Player Wins the game!!"
            }
 

    }



}

function game() {

do {
    console.log(playRound())
}       while (playerScore < 5 && computerScore < 5);

}

const buttons = document.querySelectorAll('button');
let x = document.getElementById("rockBtn");
x.addEventListener("click", function() {
    return "Rock"
});

