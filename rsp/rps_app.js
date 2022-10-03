
const playerScoreSpan = document.getElementById('player-score')
const computerScoreSpan = document.getElementById('computer-score')
const message = document.getElementById('message')
const possibleChoices = document.querySelectorAll('button')



let playerChoice
let computerChoice
// function game(){
//     while(playerScore < 5 && computerScore < 5){
//         playRound(playerSelection, computerSelection)
//         console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
//     }
//     winCondition()
// }

let playerScore = 0
let computerScore = 0




function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3) + 1
    computerSelection = ''

    if (randomChoice === 1) {
        computerSelection = 'rock'
    } else if (randomChoice === 2) {
        computerSelection = 'paper'
    } else {
        computerSelection = 'scissors'
    }
    return computerSelection
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
    message.innerHTML = `${playerSelection}`
    getComputerChoice()
    playRound(playerSelection, computerSelection)
    console.log(computerSelection)
    console.log(playerSelection)
    console.log(playerScore)
    console.log(computerScore)
}))


function playRound(playerSelection, computerSelection) {
   
    while (playerScore < 5 && computerScore < 5) {

        message.textContent = ''
        //if tie
        if (playerSelection == computerSelection) {
            message.textContent = 'Its a tie!'
        }
        //if player chose rock
        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            message.textContent = 'Rock smashed scissors, Player wins!'
            playerScore += 1
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            message.textContent = 'Paper wrapped rock, Computer wins this round!'
            computerScore += 1
        }
        //if player chose paper
        if (playerSelection == 'paper' && computerSelection == 'scissors') {
            message.textContent = 'Scissors cuts paper, Computer wins.'
            computerScore += 1
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            message.textContent = 'Paper beats rock, Player wins'
            playerScore += 1
        }
        //if player chose scissors
        if (playerSelection == 'scissors' && computerSelection == 'rock') {
            message.textContent = 'Scissors loses to rock, Computer wins.'
            computerScore += 1
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            message.textContent = 'Paper loses to scissors, Player wins'
            playerScore += 1
        }
        winCondition()
        return message
        playerScoreSpan.textContent = playerScore
        computerScoreSpan.textContent = computerScore
    }

}


function winCondition() {
    if (playerScore < computerScore) {
        console.log('Computer Wins!')
    } else {
        console.log('Player Wins')
    }

}

// function getPlayerChoice(e){
//     let playerSelection = (e.target.id)
//     playerChoice = e.target.textContent
//     playRound(playerSelection, getComputerChoice())

// }




