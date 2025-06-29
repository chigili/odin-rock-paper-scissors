function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let choice;
  do {
    choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  } while (!choices.includes(choice));
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
      return;
    }

    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (winConditions[humanChoice] === computerChoice) {
      humanScore++;
      console.log(
        `You win! ${capitalize(humanChoice)} beats ${computerChoice}`
      );
    } else {
      computerScore++;
      console.log(
        `You lose! ${capitalize(computerChoice)} beats ${humanChoice}`
      );
    }
  }

  // Play 5 rounds and declare winner
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}\n`);
  }

  // Declare winner
  console.log("=== GAME OVER ===");
  if (humanScore > computerScore) {
    console.log(
      `🎉 You won! Final: Human ${humanScore} - Computer ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `😞 You lost! Final: Human ${humanScore} - Computer ${computerScore}`
    );
  } else {
    console.log(
      `🤝 Tie game! Final: Human ${humanScore} - Computer ${computerScore}`
    );
  }
}

playGame();
