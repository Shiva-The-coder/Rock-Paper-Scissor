let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let userScoreEl = document.getElementById("user-score");
let compScoreEl = document.getElementById("comp-score");
let msgEl = document.getElementById("msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "draw";
    }

    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        return "user";
    }

    return "comp";
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    let winner = determineWinner(userChoice, compChoice);

    // Update Scores based on the result
    if (winner === "user") {
        userScore++;
        msgEl.innerText = `You Win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${compChoice}`;
    } else if (winner === "comp") {
        compScore++;
        msgEl.innerText = `You Lose! ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats ${userChoice}`;
    } else {
        msgEl.innerText = `It's a Draw! Both chose ${userChoice}`;
    }

    // Update Scores in the UI
    userScoreEl.innerText = userScore;
    compScoreEl.innerText = compScore;
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});

// Reset Game
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScoreEl.innerText = userScore;
    compScoreEl.innerText = compScore;
    msgEl.innerText = "Play your Move";
}
