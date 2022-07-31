
let playerScore = 0
let comScore = 0

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
    comScore++
    return 'You lost, Paper covers Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++
    return 'You won, Scissors cuts Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++
    return 'You won, Paper covers Rock'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    comScore++
    return 'You lost, Scuissors cuts Paper'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++
    return 'You won, Rock blunts Scissors'
  } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    comScore++
    return 'You lost, Rock breaks Scissors';
  }
}


const  game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('What do you want to choose?', 'rock, paper, scissors').toLowerCase()
    const lowerPlayerSelection = playerSelection
    const computerSelection = computerChoice()
    playRound(playerSelection, computerSelection )
} 

if (playerScore > comScore){
  return 'Well done you beat the computer, what a genius!'
} else if (playerScore < comScore) {
  return 'Unlucky the master computer beat you! HAHAHA'
} else {
  return 'You tied with the evil computer. You need some practice!'
}

}

console.log(game())


