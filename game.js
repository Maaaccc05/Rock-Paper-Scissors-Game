let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const messa = document.querySelector("#messa");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const rndinx = Math.floor(Math.random() * 3);
  return options[rndinx];
};

const drawGame = () => {
    messa.innerText = "Game draw -_-"
    messa.style.color = "#8941e8";
}

const showWinner = (userWin) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        messa.innerText = "You win ^^ "
        messa.style.color = "#0d801e";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        messa.innerText = "Lose :((";
        messa.style.color = "red";
    }
}

const playGame = (userchoice) => {
  const compchoice = gencompchoice();

  if(userchoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userchoice === "rock") {
    userWin = compchoice === "paper" ? false : true;    
  } else if (userchoice === "paper") {
    userWin = compchoice === "scissor" ? false : true; 
  } else {
    userWin = compchoice === "rock" ? false : true;
  }
  showWinner(userWin);
}
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
