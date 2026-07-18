const choices = ['rock', 'paper', 'scissors'];
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const finalResult = document.getElementById("finalResult")

let playerCount = 0;
let computerCount = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""
    // comparing computer and player

    if(playerChoice == computerChoice) {
        result = "its a tie!"
    }
    else {
        switch (playerChoice){
            case "rock":
            result = computerChoice == 'paper' ? "computer wins" : "player wins";
            break;

            case "paper":
            result = computerChoice == 'scissors' ? "computer wins" : "player wins";
            break;

            case "scissors":
            result = computerChoice == 'rock' ? "computer wins" : "player wins";
            break;

        }
    }

    if (result === "player wins") {
        playerCount += 1
    }   

    if (result === "computer wins") {
        computerCount += 1;
    }

    switch (result) {
        case "player wins": 
            finalResult.style.color = "green"
            break

        case "computer wins": 
            finalResult.style.color = "red"  
            break 

        case "its a tie!":
            finalResult.style.color = "black"
            break
    }
    playerResult.textContent = playerChoice;
    computerResult.textContent = computerChoice;
    computerScore.textContent = computerCount;
    playerScore.textContent = playerCount;
    finalResult.textContent = result;
    
}

document.querySelectorAll(".myButtons").forEach(button => {
        button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
        button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});