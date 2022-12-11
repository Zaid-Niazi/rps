

playRound();

function playRound(playerSelection, computerChoice){

    if(playerSelection === computerChoice){
        console.log("Tie")
    }else{
          if(playerSelection === "rock" && computerChoice === "scissor" || playerSelection === "scissor" && computerChoice === "paper" ||playerSelection === "paper" && computerChoice === "rock"){
            console.log("Player Wins")
          }
         else if(playerSelection === "rock" && computerChoice === "scissor" || playerSelection === "scissor" && computerChoice === "paper" ||playerSelection === "paper" && computerChoice === "rock"){
            console.log("Computer Wins")
         }

    }
}

const playerSelection = prompt("Choose").toLowerCase();

const computerSelection =  getComputerChoice(){
    return possibleChoices[Math.floor(Math.random()*3)]
}






/* create getComputerChoice that will choose a random number and draw an item from possibleChoices array. 

create a function that plays one round of the game named playRound with two parameters - playerSelection and computerChoice

ask player for choice using a prompt and make it case insensitive




*/

