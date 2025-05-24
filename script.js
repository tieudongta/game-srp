// getRandomComputerResult
// hasPlayerWonTheRound
// getRoundResults
// showResults
// resetGame 
let pScore = 0;
let cScore = 0;
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
function getRandomComputerResult(){
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(userOption, computerOption){
    const userWin = {
        scissors: "paper",
        rock: "scissors",
        paper: "rock"
    };
    return userWin[userOption] === computerOption;
}


function getRoundResults(userOption){
    const computerOption = getRandomComputerResult();
    const isUserWon = hasPlayerWonTheRound(userOption, computerOption);
    let msg = "Player: "+userOption+" vs Computer: "+computerOption;
    if(userOption === computerOption){
        return "It's a tie! Both chose "+ userOption;
    }
    if(isUserWon){
        pScore++;
        msg += ". Player won!";
    }else{
        cScore++;
        msg += ". Computer won!";
    }
    
    return msg;
}
//use getRoundResults(userOption) to update roundResultMsg
//update Score
//when score = 3, update winnerMsg
//show resetGame
//hid optionsContainer
function showResults(userOption){
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;
    if(pScore === 3 || cScore === 3){
        winnerMsgElement.innerText += `
        ${pScore === 3? "Player":"Computer"} has won the game!
        `;
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
        roundResultsMsg.innerText = "";
    }
}
function resetGame(){
    pScore = 0;
    cScore = 0;
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;
    winnerMsgElement.innerText = "";
    optionsContainer.style.display = "block";
    resetGameBtn.style.display = "none";
}
resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});