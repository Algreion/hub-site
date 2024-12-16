

const statusImg = document.querySelector(".status_img")
const statusText = document.querySelector(".status_txt")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const playerImg = document.querySelector("#player")
const opponentImg = document.querySelector("#opponent")
const message = document.querySelector("#message")

let playerScore = 0;
let opponentScore = 0;

const images = {
    rock: "./rock.png",
    paper: "./paper.png",
    scissors: "./scissors.png",
};

rock.addEventListener("click", () => playerChoice("rock"));
paper.addEventListener("click", () => playerChoice("paper"));
scissors.addEventListener("click", () => playerChoice("scissors"));

function playerChoice (choice) {
    playerImg.src = images[choice];
    const choices = ["rock","paper","scissors"];
    const opponentChoice = choices[Math.floor(Math.random() * choices.length)];
    opponentImg.src = images[opponentChoice];
    const result = findResult(choice, opponentChoice);
    updateStatus(result, choice, opponentChoice);
}

function findResult(player, opponent) {
    if (player === opponent) {return "tie"};
    if (
        (player === "paper" && opponent === "rock") ||
        (player === "rock" && opponent === "scissors") ||
        (player === "scissors" && opponent === "paper")
        ) {return "win"};
    return "lose";
}

function updateStatus(result, choice, opponentChoice) {
    if (result === "win") {
        playerScore++;
        statusText.textContent = "You won!";
        statusImg.src = "./trophy.png"
    } else if (result === "lose") {
        opponentScore++;
        statusText.textContent = "You lost!";
        statusImg.src = "./lose.png"
    } else {
        statusText.textContent = "It's a tie!";
        statusImg.src = "./tie.png"
    }
    message.textContent = `You chose ${choice} | The Rock Giant chose ${opponentChoice}`;
    document.querySelector(".player").textContent = `Player | Score: ${playerScore}`;
    document.querySelector(".opponent").textContent = `Rock Giant | Score: ${opponentScore}`;
}

