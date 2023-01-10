
// to make it play 5 rounds then change pane to display winner

/**
 1. declare possible choices
 2. declare buttons, panes
 3. attach button with "logThis"
 4. in LT, new val for player selection, comp selection and initiate playround
 5. in play round, logic for each round
 **/



//////////////////////////////////////////////////////////////////////\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//variables : Mainly to capture values

const possibleChoices = ["rock", "paper", "scissors"];
let playerScorePoints = 0
let computerScorePoints = 0

let playerScore = document.getElementById('playerScore')
let compScore = document.getElementById('compScore')     // both are for panes
let resultBoard = document.getElementById('resultBoard') // a hidden h1 bellow those 2
let playerSelection; 


const scissors=document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper =document.getElementById('paper')

document.querySelectorAll('.buttons').forEach(item => {
   item.addEventListener('click', logThis)                 // single selection that loops and makes all buttons function and initiates origination function.
})

///////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//functions

function logThis(){                   // Origination function gets triggered on choosing options. 
                                       // determines player selection using ID attached to it.
   playerSelection = this.id

   playRound(playerSelection)

   

}


///////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function computerPlay() {
//    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
// }



function playRound(playerSelection) {         // Logic for each round
   let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]

  if (playerSelection === computerSelection){
   console.log("Tie");
   


}else{
   
   if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" ||playerSelection === "paper" && computerSelection === "rock"){
      

      playerScorePoints+=1
      playerScore.textContent= "Player :" + playerScorePoints
      console.log ("Player Wins");

   }
      
   else if(computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "paper" ||computerSelection === "paper" && playerSelection === "rock"){

      computerScorePoints+=1
      compScore.textContent="Computer :" + computerScorePoints

      console.log("Comp Wins");

   }

   function reset() {
      playerScorePoints = 0;
      computerScorePoints = 0;
      playerScore.textContent= "Player :" + playerScorePoints
      compScore.textContent="Computer :" + computerScorePoints
 
   
    }

   

   if (playerScorePoints === 5){
      resultBoardpane.textContent="Player is the champion"
      reset()
     

   }else if(computerScorePoints === 5){
      resultBoardpane.textContent="Computer is the champion"
      reset()

   }


}




}

///////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//////////////////////////////////////////////////////////////////////\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\