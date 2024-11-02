let userScore = 0;
let compScore = 0;
let you = document.querySelector(".you");
let comp = document.querySelector(".comp");
let msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");



const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const gameDraw = () => {
  console.log("Game Draw");
  msg.innerHTML = "Its a Draw !";
};
const showWinner = (userWin) => {
  if(userWin){
    console.log("You Win");
    userScore++;
    you.innerHTML = userScore;
    msg.innerHTML = "You Win !"
  } else {
    console.log("Computer Wins");
    compScore++;
    comp.innerHTML = compScore;
    msg.innerHTML = "Computer Wins !"
  }
  msg.classList.remove("hidden");
}

const playGame = (userChoice) => {
  console.log("The user's choice is", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice is", compChoice);
  if (userChoice === compChoice) {
    gameDraw();
  } else {  
    let userWin = true;
    if(userChoice === "rock") {
      userWin = compChoice === "paper" ? false:true;
    } else if(userChoice === "paper") {
      userWin = compChoice === "rock" ? true:false;
    } else if(userChoice === "scissor") {
      userWin = compChoice === "rock" ? false:true;
    }    
    showWinner(userWin);
  }

};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
