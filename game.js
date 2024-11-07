let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); // it can allow to select

const genCompChoices=()=>{
    const option = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random()*3);
    return option[idx];

}

let dwarGame=()=>{
    console.log("game was draw.");
    
}

const playGame = (userChoice) =>{
    console.log("user choice=",userChoice);
    const compChoice = genCompChoices();
    console.log("computer choice",compChoice);
    
    // if (userChoice==compChoice){
    //     log
    // }
}


choices.forEach((choice)=>{
      choice.addEventListener("click",() =>{ //it can track our click event
        const userChoice = choice.getAttribute("id") // it can print the id name
        playGame(userChoice);
        
      });
});