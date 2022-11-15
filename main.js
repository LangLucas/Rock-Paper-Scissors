/* PRINCIPAL */
const d = document
const rock = d.getElementById('rock');
const paper = d.getElementById('paper');
const scissors= d.getElementById('scissors');
const player_div_score = d.getElementById("pPoint");
const cpu_div_score = d.getElementById("cpuPoint");
const btnBattle = d.getElementById("btn-battle")
let playerPoints = 0
let cpuPoints = 0
/* EXTRAS */
const massage = d.querySelector("#massage");


                       /* FUNCTIONS */
/* Sounds */
function playSoundRock(){
    let audio = new Audio("./audio/rock-1.mp3");
        audio.play()
}
function playSoundPaper(){
    let audio = new Audio("./audio/paper.wav");
        audio.play()
}
function playSoundScissors(){
    let audio = new Audio("./audio/scissors1.mp3")
        audio.play()
}


/* elections */
function computerChoice(){
    let computer = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return computer[randomNumber];
}
function userChoice(){
    rock.addEventListener('click', function(){
        playSoundRock()
        /* massage.innerHTML = "You have chosen the power of the rock" */
        game('rock');
    })
    paper.addEventListener('click', function(){
        playSoundPaper()
        /* massage.innerHTML = "You have chosen the power of the paper" */
        game('paper');
    })
    scissors.addEventListener('click', function(){
        playSoundScissors()
        /* massage.innerHTML = "You have chosen the power of scissors" */
        game('scissors');
    })
}

/* points */
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
    alert("You win the game!")
    window.location.reload()
}
function gameAlertCpu(){
    player_div_score.innerHTML = 0
    cpu_div_score.innerHTML = 0
    alert("You lose the game...")
    window.location.reload()
}


function game(choice){
    const cpuChoice = computerChoice()
    console.log("Player Choice ==> ", choice);
    console.log("CPU Choice ==> ", cpuChoice);
    switch (choice + cpuChoice){
        case "rockscissors":
            massage.innerHTML = "Your opponent has chosen scissors. You win this match."
            console.log("You Win")
            PlayerWinPoints()
            break;
        case "paperrock":
            massage.innerHTML = "Your opponent has chosen rock. You win this match."
            console.log("You Win")
            PlayerWinPoints()
            break;
        case "scissorspaper":
            massage.innerHTML = "Your opponent has chosen paper. You win this match."
            console.log("You Win")
            PlayerWinPoints()
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            massage.innerHTML = "There was a tie!"
            console.log("There was a tie!")
            break;
        case "rockpaper":
            massage.innerHTML = "Your opponent has chosen paper. You lose this match."
            console.log("You lose!")
            cpuWinPoints()
            break;
        case "paperscissors":
            massage.innerHTML = "Your opponent has chosen scissors. You lose this match."
            console.log("You lose!")
            cpuWinPoints()
            break;
        case "scissorsrock":
            massage.innerHTML = "Your opponent has chosen rock. You lose this match."
            console.log("You lose!")
            cpuWinPoints()
            break;
    }

}


userChoice()
