


const playerSelection = prompt("Choose").toLowerCase();
const possibleChoices = ["rock", "paper", "scissor"]



function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log("Tie")
    }else{
          if(playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "paper" ||playerSelection === "paper" && computerSelection === "rock"){
            console.log("Player Wins")
          }
         else if(computerSelection === "rock" && playerSelection === "scissor" || computerSelection === "scissor" && playerSelection === "paper" ||computerSelection === "paper" && playerSelection === "rock"){
            console.log("Computer Wins")
         }

    }
}




const computerSelection =  getcomputerSelection()

function getcomputerSelection(){
    return possibleChoices[Math.floor(Math.random()*3)]
}

console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));



/* create getcomputerSelection that will choose a random number and draw an item from possibleChoices array. 

create a function that plays one round of the game named playRound with two parameters - playerSelection and computerSelection

ask player for choice using a prompt and make it case insensitive




*/

