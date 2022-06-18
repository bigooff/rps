// RANDOM CHOICE GENERATOR
// REMOVE COMMENT TAGS FROM LOGS FOR MORE INFO



//NOTE TO SELF : IMPLEMENT THE EXECUTION OF THE GAME FUNCTION ACCORDING TO WHAT THE-
// -PLAYERSELECTION FUNCTION RETURNS AFTER THE CLICK OF A BUTTON??? SEARCH GOOGLE ??

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



// gets choice from buttons


    const choices = document.querySelectorAll("button");
        console.log(choices)
        for(let choice of choices){
                  choice.addEventListener("click", () => {
                    playRound(playerSelection(choice.textContent),computerSelection())})
                }

    // TAKES USER INPUT AND OUTPUTS IN NUMBER
 function playerSelection(choice){
    
     if(choice === "rock"){
        console.log("Player pick rock!")
       return 1;
    } else if (choice === "paper"){
        console.log("Player pick paper!")
        return 2;
    } else if(choice === "scissors") {
        console.log("Player pick scissors!")
         return 3;
    } else{
        return null;
    }
  }; 

  // ROUND PLAYER
let playRoundCallCount = 0;

function playRound(a , b){
    // a = playerSelection
    // b = computerSelection
    console.log(a);
    console.log(b);
    playRoundCallCount += 1;

        if(a === b){
            console.log("Zero score points added because it is a tie!")
            return 0;   // tie
        } else if((a === 1) && (b != 2)){
            console.log("My friend 1 score point for you and your rock");
            return 1;   //rock
        } else if((a === 2) && (b != 3)){  
            console.log("Thats right 1 score point for you for this paper");  
            return 2;   //paper
        } else if((a === 3) && (b != 1)){
            console.log("You know who it is the man the player 1 point for scissors");
            return 3;   //scissors
        } else {
            console.log("Oh no you lose 1 point very bad stuff");
            return 4;   //lose
        }

        
};







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
// && (i === 4)

function game(){
    let finalNumber = 0;
    

    let scoreCheck = finalNumber += realScore();
    console.log(scoreCheck)

    if((scoreCheck > 0) ){
        console.log("YOU WIN FINALLY!!!!");
    } else if((scoreCheck < 0) ){
        console.log("YOU LOSE MISERABLY");
    } else if((scoreCheck === 0) ) {
        console.log("ITS A TIE AMAZING ");
    }
    

}