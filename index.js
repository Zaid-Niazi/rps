

const possibleChoices = ["rock", "paper", "scissor"];


function playRound(playerSelection, computerSelection) {
    console.log(computerSelection)
 
  if (playerSelection === computerSelection){
   return("Tie");
   


}else{
   
   if(playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "paper" ||playerSelection === "paper" && computerSelection === "rock"){
      return ("Player Wins");

   }
      
   else if(computerSelection === "rock" && playerSelection === "scissor" || computerSelection === "scissor" && playerSelection === "paper" ||computerSelection === "paper" && playerSelection === "rock"){
      return("Comp Wins");
       
   }
}
}
 




function game(){

   var playerPoints =0
   var compPoints = 0
    
   for(let i =1; i<6; i++){
    
   const playerSelection = prompt("Choose").toLowerCase();
   var computerSelection = possibleChoices[Math.floor(Math.random()*3)];
   console.log(playRound(playerSelection, computerSelection));
       if ((playRound(playerSelection, computerSelection)) === "Player Wins"){
           playerPoints++
       }
       else if ((playRound(playerSelection, computerSelection)) === "Comp Wins"){
           compPoints++
       }else{
           
       }
       
                           
   }

 if(playerPoints > compPoints){alert("Player is the Champion !")
      }else if (compPoints > playerPoints){
         alert ("Comp is the Champion !")
      }else{
         alert("It has been a draw !")
      }     
   
}

game();