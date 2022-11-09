const d = document
const rock = d.getElementById('rock')
const paper = d.getElementById('paper')
const scissors= d.getElementById('scissors')
const player_span_score = d.getElementById("youPoints")
const cpu_span_score = d.getElementById("cpuPoints")
let playerPoints = 0
let cpuPoints = 0


function computerChoice(){
    let computer = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return computer[randomNumber];
}

function userChoice(){
    rock.addEventListener('click', function(){
        game('rock');
    })
    paper.addEventListener('click', function(){
        game('paper');
    })
    scissors.addEventListener('click', function(){
        game('scissors');
    })
}

function PlayerWinPoints(){
    playerPoints = playerPoints + 1
    player_span_score.innerHTML = playerPoints
}

function cpuWinPoints(){
    cpuPoints = cpuPoints + 1
    cpu_span_score.innerHTML = cpuPoints
}

function game(choice){
    const cpuChoice = computerChoice()
    console.log("Player Choice ==> ", choice);
    console.log("CPU Choice ==> ", cpuChoice);
    switch (choice + cpuChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("You Win")
            PlayerWinPoints()
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("There was a tie!")
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("You lose!")
            cpuWinPoints()
            break;
    }

}

userChoice()
