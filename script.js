let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const userScoreMarks = document.querySelector("#user-score");
const compScoreMarks = document.querySelector("#comp-score");

const genCompChoices = () => {
    const option = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
};

const drawGame = () => {
    msg.innerText = "It's a draw! Play again.";
};

const showWinner = (winner, userChoice, compChoice) => {
    if (winner === "user") {
        userScore++;
        userScoreMarks.innerText = userScore;
        msg.innerText = You win! ${userChoice} beats ${compChoice};
    } else if (winner === "comp") {
        compScore++;
        compScoreMarks.innerText = compScore;
        msg.innerText = You lost! ${compChoice} beats ${userChoice};
    }
};

const decideWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) return "draw";

    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        return "user";
    } else {
        return "comp";
    }
};

const playGame = (userChoice) => {
    userChoice = userChoice.toLowerCase().trim();
    const compChoice = genCompChoices();

    console.log("User choice =", userChoice);
    console.log("Computer choice =", compChoice);

    const winner = decideWinner(userChoice, compChoice);

    if (winner === "draw") {
        drawGame();
    } else {
        showWinner(winner, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

