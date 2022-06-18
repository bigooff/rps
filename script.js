// REMOVE COMMENT TAGS FROM LOGS FOR MORE INFO
// RE WROTE FROM SCRATCH BY KEEPING THE BASIC LOGIC FROM THE OLD CODE


// RANDOM CHOICE GENERATOR
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

// console.log(computerSelection())

// GETS RANDOM CHOICE FROM THE COMPUTER -- MIGHT BE USELESS // COULD HAVE TAKEN THE --
//-- CHOICE DIRECTLY FROM THE COMPUTERPLAY() FUNCTION??
function computerSelection(){
    const pick = computerPlay();
    // console.log(pick);

    if(pick === "rock"){
        return "rock";
    } else if ( pick ==="paper"){
        return "paper";
    } else if ( pick === "scissors"){
        return "scissors";
    } else {
        return null;
    }

};
// GET EACH BUTTON AND PLAY THE GAME WHEN PRESSED
const choices = document.querySelectorAll("button");
        for(let choice of choices){
                  choice.addEventListener("click", game )}
//GET THE CORRESPONDING "CHOICE" ACCORDING TO THE BUTTONS TEXT_CONTENT
function getChoice(){
    for(let choice of choices){
        return choice.textContent}
}
// GETS PLAYERS CHOICE WITH THE HELP OF GETCHOICE FUNCTION

 function playerSelection(){
    choice = getChoice();
     if(choice === "rock"){
        console.log("Player pick rock!")
       return "rock";
    } else if (choice === "paper"){
        console.log("Player pick paper!")
        return "paper";
    } else if(choice === "scissors") {
        console.log("Player pick scissors!")
         return "scissors";
    } else{
        return null;
    }
  };        



    // ROUND PLAYER
let playRoundCallCount = 0;

function playRound(){
    let a = playerSelection();
     let b = computerSelection();
    // console.log(a);
    // console.log(b);
    playRoundCallCount += 1;
    console.log(playRoundCallCount+" ROUND")
        if(a === b){
            console.log("Zero score points added because it is a tie!")
            return 0;   // tie
        } else if((a === "rock") && (b != "paper")){
            console.log("My friend 1 score point for you and your rock");
            return 1;   //rock
        } else if((a === "paper") && (b != "scissors")){  
            console.log("Thats right 1 score point for you for this paper");  
            return 1;   //paper
        } else if((a === "scissors") && (b != "rock")){
            console.log("You know who it is the man the player 1 point for scissors");
            return 1;   //scissors
        } else {
            console.log("Oh no you lose 1 point very bad stuff");
            return -1;   //lose
        }

};
//CALCULATES ROUND && SCORE -- OUTPUTS WINNER OR LOSER AFTER 5 ROUNDS

let realScore = 0;
function game(){
    let round = playRoundCallCount;
    let scoreToCalculate = playRound();
    console.log(scoreToCalculate)
    
    realScore += scoreToCalculate;
    
    console.log(realScore +" SCORE")
     if(round === 4){
        if((realScore === 0)){
            console.log("ITS A TIE AMAZING ");
        } else if((realScore > 0)){
            console.log("YOU WIN FINALLY!!!!")
        } else if((realScore < 0)){
            console.log("YOU LOSE MISERABLY")
        }
     }
        
   
}
