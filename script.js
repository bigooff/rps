// RANDOM CHOICE GENERATOR

function computerPlay(){
    const items = ["rock","paper","scissors"];
    const choice = Math.floor((items.length * (Math.random(3))));
    //console.log(choice);
    //console.log(items);

        if(choice === 0){
            console.log("pc pick rock")
            return items[0];  
        } else if(choice === 1){
            console.log("pc pick Paper")
            return items[1];
        } else{
            console.log("pc pick scissors")
            return items[2];    
        }
}


// GETS RANDOM CHOICE AND TRANSLATES IT TO NUMBER
// CODE IS BASED ON NUMBERS I DONT KNOW IF IT COULD BE DONE WITH STRINGS 

function computerSelection(){
    const pick = computerPlay();
    //console.log(pick);

    if(pick == "rock"){
        return 0;
    } else if ( pick == "paper"){
        return 1;
    } else if ( pick == "scissors"){
        return 2;
    } else {
        return null;
    }

};

// TAKES USER INPUT AND OUTPUTS IN NUMBER
// MAKE THIS ONE ACCEPT CASE SENSITIVE CHARACTERS *****
 
 function playerSelection(){
    const playerChoice = prompt("please make a choice");

     if(playerChoice.toLowerCase() === "rock".toLowerCase()){
        console.log("player pick rock")
       return 0;
    } else if (playerChoice.toLowerCase() === "paper".toLowerCase()){
        console.log("player pick pap")
        return 1;
    } else if(playerChoice.toLowerCase() === "scissors".toLowerCase()) {
        console.log("player scissors")
         return 2;
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
        } else if((a === 0) && (b != 1)){
            return 1;   //rock
        } else if((a === 1) && (b != 2)){    
            return 2;   //paper
        } else if((a === 2) && (b != 0)){
            return 3;   //scissors
        } else {
            return 4;   //lose
        }
};








// IT MIGHT HAVE BEEN BETTTER TO JUST USE THE playRound() FUNCTION FOR THIS AND LOG FROM IN THERE
// THIS COULD BE USELESS 

function score(){
    const playerScore = playRound();
    //console.log(playerScore);
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




function realScore(){
    let a = 0;
    let b = score();
    if (b === (1 || 2 || 3)) {
        a = a + 1;
       // console.log(a);
        return a;
    } else if (b === 0) {
       // console.log(a);
        return a;
    } else if(b === 4){
        a = a - 1;
        //console.log(a);
        return a;
    } 
    console.log(a);
    return a;

}

let finalNumber = 0;
function final(){
            finalNumber += realScore();
        return finalNumber;
}






// FIX LAST WINNER OR LOSER OUTPUT SOMETHING IS WRONG HERE
game();
function game(){
    for(i = 0; i < 5; i++){
    scoreCheck = final();
    console.log(scoreCheck)

    if((scoreCheck > 0) && (i === 4)){
        console.log("plz work u win plz");
    } else if((scoreCheck < 0) && (i === 4)){
        console.log("sad lose");
    } else if((scoreCheck === 0) && (i === 4)) {
        console.log("tie amazing ");
    }
    }

}
    
    










    

    


    //console.log("YOU LOSE MISERABLY ???");
    //console.log("It is a tie how did u manage to do that");
    //console.log("YOU FINALY WIN AMAZING !!!!!")};