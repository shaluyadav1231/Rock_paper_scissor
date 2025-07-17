let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); // it can allow to select
const msg = document.querySelector("#msg");
const userScoreMarks= document.querySelector("#user-score");
const compScoreMarks= document.querySelector("#comp-score");

const genCompChoices=()=>{
    const option = ["rock","paper","scissors"];
    const idx = Math.floor(Math.random()*3);
    return option[idx];

}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="it's draw broo,PLAY AGAIN"
}

const ShowWinner = (userWin,userChoice,compChoice) =>{
    if (userWin){
        userScore++;
        userScoreMarks.innerText=userScore;
        msg.innerText="you win the game BROOO";
    
        
    }else{
        compScore++;
        compScoreMarks.innerText=compScore;
        msg.innerText=" you lost,It's ok BROO ,try again";
        
    }
}

const playGame = (userChoice) =>{
    console.log("user choice=",userChoice);
    const compChoice = genCompChoices();
    console.log("computer choice=",compChoice);
    

    if (userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper" ? false:true;
        }else if(userChoice=="paper"){
            userWin=compChoice=="scissors"? false:true;
        }else{
            userWin=compChoice==="rock"? false:true;
        }
        ShowWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
      choice.addEventListener("click",() =>{ //it can track our click event
        const userChoice = choice.getAttribute("id") // it can print the id name
        playGame(userChoice);

        
        
      });
});
