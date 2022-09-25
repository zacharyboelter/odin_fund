

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
    if (playerSelection == computerSelection){
        return 'Its a tie!'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'Rock smashed scissors, Player wins!'
    } else if( playerSelection == 'rock' && computerSelection == 'paper'){
        return 'Paper wrapped rock, Computer wins this round!'
    }
    console.log(computerSelection)
  }
   
  const playerSelection = 'rock'
  const computerSelection = getComputerChoice()
  console.log(playRound(playerSelection, computerSelection))
  