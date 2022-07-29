

// took a look at lots of different approahes for a random array //
const computerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random()*choices.length)
  const compChoice = choices[randomNum]
  return compChoice;
}
 
const playRound = (playerSelection, computerSelection) => {

   if (playerSelection === 'rock' && computerSelection === 'rock'){
    return 'You tied, you both picked Rock'
   } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
    return 'You tied, you both picked Scissors'
   } else if (playerSelection === 'paper' && computerSelection === 'paper'){
    return "You tied, you both picked Paper"
  } else if (playerSelection === 'rock' && computerSelection === 'paper'){
    return 'You lost, Paper covers Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    return 'You won, Scissors cuts Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    return 'You won, Paper covers Rock'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    return 'You lost, Scuissors cuts Paper'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    return 'You won, Rock blunts Scissors'
  } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    return 'You lost, Rock breaks Scissors';
  }
}

const playerSelection = 'rock'
const computerSelection = computerChoice()

console.log(playRound(playerSelection, computerSelection))




