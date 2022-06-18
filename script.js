// REMOVE COMMENT TAGS FROM LOGS FOR MORE INFO
// RE WROTE FROM SCRATCH BY KEEPING THE BASIC LOGIC FROM THE OLD CODE
const logBox = document.querySelector("#logger");
const p = document.createElement("p");
const scoreP = document.querySelector(".score");
const roundP = document.querySelector(".round");
const pComputerPick = document.createElement("p");
const pEndGame = document.createElement("p");
// RANDOM CHOICE GENERATOR
function computerPlay(){
    const items = ["rock","paper","scissors"];
    const choice = Math.floor((items.length * (Math.random(3))));
    //console.log(choice);
    //console.log(items);

        if(choice === 0){
            pComputerPick.textContent = "Computer Pick: Rock";
            logBox.appendChild(pComputerPick);
            return items[0];  
        } else if(choice === 1){
            pComputerPick.textContent = "Computer Pick: Paper";
            logBox.appendChild(pComputerPick);
            return items[1];
        } else{
            pComputerPick.textContent = "Computer Pick: Scissors";
            logBox.appendChild(pComputerPick);        
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

//console.log(choices)
      
//GET THE CORRESPONDING "CHOICE" ACCORDING TO THE BUTTONS TEXT_CONTENT






// GETS PLAYERS CHOICE WITH THE HELP OF GETCHOICE FUNCTION

rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));


 function playerSelection(playerChoice){
 trueChoice = playerChoice;

  console.log()
     if(trueChoice === "rock"){
        console.log("Player pick rock!")
       return "rock";
    } else if (trueChoice === "paper"){
        console.log("Player pick paper!")
        return "paper";
    } else if(trueChoice=== "scissors") {
        console.log("Player pick scissors!")
         return "scissors";
    } else{
        return null;
    }
  };        


    // ROUND PLAYER
let playRoundCallCount = 0;

function playRound(choice){
    let a = playerSelection(choice);
     let b = computerSelection();
    // console.log(a);
    // console.log(b);
    playRoundCallCount += 1;
    console.log(playRoundCallCount+" ROUND")
        if(a === b){
            p.textContent = "Zero score points added because it is a tie!";
            logBox.appendChild(p);
            return 0;   // tie
        } else if((a === "rock") && (b != "paper")){
            p.textContent = "My friend 1 score point for you and your rock";
            logBox.appendChild(p);
            return 1;   //rock
        } else if((a === "paper") && (b != "scissors")){  
            p.textContent = "Thats right 1 score point for you for this paper";
            logBox.appendChild(p); 
            return 1;   //paper
        } else if((a === "scissors") && (b != "rock")){
            p.textContent = "You know who it is the man the player 1 point for scissors";
            logBox.appendChild(p);
            return 1;   //scissors
        } else {
            p.textContent = "Oh no you lose 1 point very bad stuff";
            logBox.appendChild(p);
            return -1;   //lose
        }

};


//CALCULATES ROUND && SCORE -- OUTPUTS WINNER OR LOSER AFTER 5 ROUNDS
const replayBtn = document.createElement("button")
replayBtn.addEventListener("click",()=>{window.location.reload();})
scoreP.textContent = `Score: 0`
roundP.textContent = `Round: 0`
let realScore = 0;
function game(choice){
    let round = playRoundCallCount;
    let scoreToCalculate = playRound(choice);
    // console.log(scoreToCalculate)
    realScore += scoreToCalculate;
    scoreP.textContent = `Score: ${realScore}`
    roundP.textContent = `Round: ${round + 1}`
    // console.log(realScore +" SCORE")



     if(round === 4){
        if((realScore === 0)){
            pEndGame.textContent = "TIE";
            logBox.appendChild(pEndGame);
        } else if((realScore > 0)){
            pEndGame.textContent = "WIN";
            logBox.appendChild(pEndGame);    
        } else if((realScore < 0)){
            pEndGame.textContent = "LOSE";
            logBox.appendChild(pEndGame);     
        } 
     }

     if(round === 4){
        replayBtn.classList.add("replayBtn")
        replayBtn.textContent = "Replay"
        logBox.appendChild(replayBtn);
    }
     
}
