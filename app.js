

// took a look at lots of different approahes for a random array //

function computerChoice (){
  const choices = ["Rock", "Paper", "Scissors"]
  const randomNum = Math.floor(Math.random()*choices.length)
  const compChoice = choices[randomNum]
  return compChoice;
}

console.log(computerChoice())
  

