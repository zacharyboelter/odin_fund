


let playerScore = 0
let computerScore = 0


function game(){
    while(playerScore <= 2 && computerScore <= 2){

        let playerSelection = prompt('Weapon of choice?')
        let computerSelection = getComputerChoice()
        playerSelection = playerSelection.toLowerCase()

        alert(playRound(playerSelection, computerSelection))
        console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    }
    alert(win_condition())
}


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
        playerScore += 1
    } else if( playerSelection == 'rock' && computerSelection == 'paper'){
        message = 'Paper wrapped rock, Computer wins this round!'
        computerScore += 1
    }
    //if player chose paper
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        message = 'Scissors cuts paper, Computer wins.'
        computerScore += 1
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        message = 'Paper beats rock, Player wins'
        playerScore += 1
    }
    //if player chose scissors
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        message = 'Scissors loses to rock, Computer wins.'
        computerScore += 1
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        message = 'Paper loses to scissors, Player wins'
        playerScore += 1
    }
    return message 
}


function winCondition() {
    if (playerScore < computerScore) {
      return 'Computer Wins!';
    } else {
        return 'Player Wins'
    }
    
}


console.log(game())

