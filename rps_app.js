

// initialize scorea
let playerScore = 0
let computerScore = 0

//main funciton for game
function game(){
    while(playerScore <= 2 && computerScore <= 2){
        //prompt user
        let playerSelection = prompt('Weapon of choice?')
        let computerSelection = getComputerChoice()
        playerSelection = playerSelection.toLowerCase()
        //pop up for rounds
        alert(playRound(playerSelection, computerSelection))
        console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
    }
    //when condition met, alert winner
    alert(win_condition())
}

//random choice for comp
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

//conditional logic for gameplay
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

//function to end game
function win_condition() {
    if (playerScore < computerScore) {
      return 'Computer Wins!';
    } else {
        return 'Player Wins'
    }
    
}

//play game
console.log(game())