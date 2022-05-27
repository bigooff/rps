// RANDOM CHOICE GENERATOR
// REMOVE COMMENT TAGS FROM LOGS FOR MORE INFO

function computerPlay(){
    const items = ["rock","paper","scissors"];
    const choice = Math.floor((items.length * (Math.random(3))));
    //console.log(choice);
    //console.log(items);

        if(choice === 0){
            console.log("Computer pick rock")
            return items[0];  
        } else if(choice === 1){
            console.log("Computer pick Paper")
            return items[1];
        } else{
            console.log("Computer pick scissors")
            return items[2];    
        }
}


// GETS RANDOM CHOICE AND TRANSLATES IT TO NUMBER
// CODE IS BASED ON NUMBERS I DONT KNOW IF IT COULD BE DONE WITH STRINGS 

function computerSelection(){
    const pick = computerPlay();
    //console.log(pick);

    if(pick === "rock"){
        return 1;
    } else if ( pick ==="paper"){
        return 2;
    } else if ( pick === "scissors"){
        return 3;
    } else {
        return null;
    }

};

// TAKES USER INPUT AND OUTPUTS IN NUMBER
// MAKE THIS ONE ACCEPT CASE SENSITIVE CHARACTERS *****
 
 function playerSelection(){
    const playerChoice = prompt("Please make a choice");

     if(playerChoice.toLowerCase() === "rock".toLowerCase()){
        console.log("Player pick rock!")
       return 1;
    } else if (playerChoice.toLowerCase() === "paper".toLowerCase()){
        console.log("Player pick paper!")
        return 2;
    } else if(playerChoice.toLowerCase() === "scissors".toLowerCase()) {
        console.log("Player pick scissors!")
         return 3;
    } else{
        return null;
    }
  }; 

  // ROUND PLAYER


function playRound(){
    let a = playerSelection();
    let b = computerSelection();
    console.log(a);
    console.log(b);

        if(a === b){
            return 0;   // tie
        } else if((a === 1) && (b != 2)){
            return 1;   //rock
        } else if((a === 2) && (b != 3)){    
            return 2;   //paper
        } else if((a === 3) && (b != 1)){
            return 3;   //scissors
        } else {
            return 4;   //lose
        }
};








// IT MIGHT HAVE BEEN BETTTER TO JUST USE THE playRound() FUNCTION FOR THIS AND LOG FROM IN THERE
 

function score(){
    const playerScore = playRound();
   // console.log(playerScore);
     if(playerScore === 0){
         console.log("Zero score points added because it is a tie!")
         return 0;
     } else if (playerScore === 1){
         console.log("My friend 1 score point for you and your rock");
         return 1;
     } else if (playerScore === 2){
         console.log("Thats right 1 score point for you for this paper");
         return 2;
     } else if (playerScore === 3){
         console.log("You know who it is the man the player 1 point for scissors");
         return 3;
     } else if (playerScore === 4){
         console.log("Oh no you lose 1 point very bad stuff");
         return 4;
     }
     
}


// sends out the values: +1 if it is a win, -1 if it is lose, 0 if it is a tie

function realScore(){
    let a = 0;
    let b = score();
    //console.log(b);
    if((b === 1) || (b === 2) || (b === 3)) {
        a = a + 1;
        //console.log(a + " HERE HERE HERE")
        return a;
    } else if(b === 0) {
       // console.log(a + " HERE HERE HERE")
        return a;
    } else if(b === 4){
        a = a - 1;
        //console.log(a + " HERE HERE HERE")
        return a;
    } else {
        return null;
    }
}







// final code for winner or loser announcment

game();
function game(){
    let finalNumber = 0;
    for(i = 0; i < 5; i++){

    let scoreCheck = finalNumber += realScore();
    console.log(scoreCheck)

    if((scoreCheck > 0) && (i === 4)){
        console.log("YOU WIN FINALLY!!!!");
    } else if((scoreCheck < 0) && (i === 4)){
        console.log("YOU LOSE MISERABLY");
    } else if((scoreCheck === 0) && (i === 4)) {
        console.log("ITS A TIE AMAZING ");
    }
    }

}