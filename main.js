/* PRINCIPAL */
const d = document
const rock = d.getElementById('rock')
const paper = d.getElementById('paper')
const scissors= d.getElementById('scissors')
const player_div_score = d.getElementById("pPoint")
const cpu_div_score = d.getElementById("cpuPoint")
let playerPoints = 0
let cpuPoints = 0
/* EXTRAS */
const massage = d.querySelector("#massage")

function computerChoice(){
    let computer = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return computer[randomNumber];
}

function userChoice(){
    rock.addEventListener('click', function(){
        massage.innerHTML = "You have chosen the power of the rock"
        game('rock');
    })
    paper.addEventListener('click', function(){
        massage.innerHTML = "You have chosen the power of the paper"
        game('paper');
    })
    scissors.addEventListener('click', function(){
        massage.innerHTML = "You have chosen the power of scissors"
        game('scissors');
    })
}

function PlayerWinPoints(){
    playerPoints = playerPoints + 1
    player_div_score.innerHTML = playerPoints
    if (playerPoints == 5){
        return setTimeout(gameAlertPlayer,500);
    }
}

function cpuWinPoints(){
    cpuPoints = cpuPoints + 1
    cpu_div_score.innerHTML = cpuPoints
    if (cpuPoints >= 5){
        return setTimeout(gameAlertCpu,500);
    }
}

function gameAlertPlayer(){
    player_div_score.innerHTML = 0
    cpu_div_score.innerHTML = 0
    alert("You win the match!")
}
function gameAlertCpu(){
    player_div_score.innerHTML = 0
    cpu_div_score.innerHTML = 0
    alert("You lose the match...")
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
