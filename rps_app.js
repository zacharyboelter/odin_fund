


let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    randomChoice = Math.floor(Math.random() * 3) + 1
    computerChoice = ''

    if (randomChoice === 1){
        computerChoice = 'rock'
    } else if (randomChoice === 2){
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice
}


function playRound(playerSelection, computerSelection) {
    let message = ''
    //if tie
    if (playerSelection == computerSelection){
        message = 'Its a tie!'
    } 
    //if player chose rock
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        message = 'Rock smashed scissors, Player wins!'
        playerScore++
    } else if( playerSelection == 'rock' && computerSelection == 'paper'){
        message = 'Paper wrapped rock, Computer wins this round!'
        computerScore++
    }
    //if player chose paper
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        message = 'Scissors cuts paper, Computer wins.'
        computerScore++
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        message = 'Paper beats rock, Player wins'
        playerScore++
    }
    //if player chose scissors
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        message = 'Scissors loses to rock, Computer wins.'
        computerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        message = 'Paper loses to scissors, Player wins'
        playerScore++
    }
    return message
    
  }
   
  const playerSelection = prompt('Weapon of choice?').toLowerCase()
  const computerSelection = getComputerChoice()
  console.log(playRound(playerSelection, computerSelection))

  

function game(){
    playRound(playerSelection, computerSelection)
    console.log(playerScore, computerscore)
}
console.log(game())