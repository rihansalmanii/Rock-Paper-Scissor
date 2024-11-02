let userScore = 0;
let compScore = 0;
 const choices = document.querySelectorAll(".choice");

 choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        console.log("box was clicked");
        const choiceId = choice.getAttribute("id");
        console.log(choice, choiceId);
    })
 })
 console.log("Rock Paper Scissor Game using Js");