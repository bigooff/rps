// RANDOM CHOICE GENERATOR

function computerPlay(){
    const items = ["rock","paper","scissors"];
    const choice = Math.floor((items.length * (Math.random(3))));
    console.log(choice);
    console.log(items);
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
    console.log(pick);
    if(pick == "rock"){
        return 0;
    } else if ( pick == "paper"){
        return 1;
    } else {
        return 2;
    }

};

// TAKES USER INPUT AND OUTPUTS IN NUMBER
 
 function playerSelection(){
    const playerChoice = prompt("please make a choice");
     if(playerChoice == "rock"){
        console.log("player pick r")
       return 0;
    } else if (playerChoice == "paper"){
        console.log("player pick pap")
        return 1;
    } else if(playerChoice == "scissors") {
        console.log("player scissors")
         return 2;
    } else{
        return null;
    }
  }; 

  // ROUND PLAYER


playRound();
function playRound(){
    let a = playerSelection();
    let b = computerSelection();
    console.log(a);
    console.log(b);

        if(a == b){
            console.log("Its a tie ! amazing");
        } else if((a == 0) && (b != (0 || 1))){
            console.log("Player Wins With Rock!");
        } else if((a == 1) && (b != (1 || 2))){
            console.log("Player Wins With Paper!");
        } else if((a == 2) && (b != (2 || 0))){
            console.log("Player Wins With Scissors");
        } else {
            console.log("You lost My fRiend");
        }
};

// ROUND SYSTEM TO BE IMPLEMENTED


