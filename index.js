

const possibleChoices = ["rock", "paper", "scissor"];


function playRound(playerSelection, computerSelection) {
   let playerPoints = []
   let compPoints = [] 
  if (playerSelection === computerSelection){
   alert("Tie");
   


}else{
   
   if(playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "paper" ||playerSelection === "paper" && computerSelection === "rock"){
      alert ("Player Wins");
   

   }
      
   else if(computerSelection === "rock" && playerSelection === "scissor" || computerSelection === "scissor" && playerSelection === "paper" ||computerSelection === "paper" && playerSelection === "rock"){
      alert("Comp Wins");
    
   }
}
}
 




function game(){
   for(let i =1; i<6; i++){
    
   const playerSelection = prompt("Choose").toLowerCase();
   var computerSelection = possibleChoices[Math.floor(Math.random()*3)];
   console.log(playRound(playerSelection, computerSelection));
   
   }
}

game();