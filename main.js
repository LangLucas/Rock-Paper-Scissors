const d = document
const rock = d.getElementById('rock')
const paper = d.getElementById('paper')
const scissors= d.getElementById('scissors')


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

function game(choice){
    const cpuChoice = computerChoice()
    console.log("Player Choice ==> ", choice);
    console.log("CPU Choice ==> ", cpuChoice);
}


userChoice()
