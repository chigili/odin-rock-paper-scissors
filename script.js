function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Global score variables (moved outside of playGame)
let humanScore = 0;
let computerScore = 0;

// DOM elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const scoreDiv = document.getElementById("score");
const roundResultDiv = document.getElementById("round-result");
const winnerDiv = document.getElementById("winner");
const resetBtn = document.getElementById("reset");

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function updateScore() {
  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkGameWinner() {
  if (humanScore === 5) {
    winnerDiv.textContent = "🎉 You won the game!";
    endGame();
  } else if (computerScore === 5) {
    winnerDiv.textContent = "😞 Computer won the game!";
    endGame();
  }
}

function endGame() {
  // Disable all game buttons
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  // Show reset button
  resetBtn.classList.remove("hidden");
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  // Re-enable buttons
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  // Reset display
  updateScore();
  roundResultDiv.textContent = "Choose your weapon!";
  winnerDiv.textContent = "";
  resetBtn.classList.add("hidden");
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (winConditions[humanChoice] === computerChoice) {
    humanScore++;
    roundResultDiv.textContent = `You win! ${capitalize(
      humanChoice
    )} beats ${computerChoice}`;
  } else {
    computerScore++;
    roundResultDiv.textContent = `You lose! ${capitalize(
      computerChoice
    )} beats ${humanChoice}`;
  }

  updateScore();
  checkGameWinner();
}

// Event listeners for buttons
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));
resetBtn.addEventListener("click", resetGame);

// Initialize the display
updateScore();
