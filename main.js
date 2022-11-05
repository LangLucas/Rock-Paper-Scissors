
function getComputerChoice (draw){
    if (draw <= 4) {
        return "Scissors"
    }
    else if ( draw <= 8){
        return "Rock"
    }
    else {
        return "Paper"
    }
}

function playAGame (playerSelection,computerSelection){
    if (playerSelection == "paper" && computerSelection == "Rock"){
        return "You win! Paper beats Rock"
    }
    else if (playerSelection == "paper" && computerSelection == "Paper"){
        return "There was a tie!"
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        return "You lose! Scissors beats paper"
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors"){
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection == "rock" && computerSelection == "Rock"){
        return "There was a tie!"
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        return "You lose! Paper beats Rock"
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper"){
        return "You win! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "Scissors"){
        return "There was a tie!"
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        return "You lose! Rock beats Scissors "
    }
    else{
        return "there was a mistake in your selection"
    }

}

let points = Number(0);

function game() {
    for (let i = 0; i < 5; i++){
        let draw = Math.random()*12
        let computerSelector = getComputerChoice(draw)
        let playerSelectionChoice = prompt("Write rock, paper or scissors.", )
        let playerSelection = playerSelectionChoice.toLowerCase()
        console.log(playAGame(playerSelection,computerSelector))
            if (playerSelection == "paper" && computerSelector == "Rock" || playerSelection == "rock" && computerSelector == "Scissors" || playerSelection == "scissors" && computerSelector == "Paper") { points = points + 1
            }
    }
    console.log("Your points are", points)
    if (points >= 3) {
        return console.log("You win the match!")
    }
    else{
        return console.log("You lose the match...")
    }
}

console.log(game())