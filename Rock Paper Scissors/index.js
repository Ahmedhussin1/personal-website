const computerDisplay = document.getElementById('comp-choice');
const yourDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let your;
let computer;
let result;

possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click' ,(e)=>{
    your=e.target.id
    yourDisplay.innerHTML=your
    yourDisplay.style.color='blue';
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random() * possibleChoices.length)+1;
    console.log(randomNumber);
    if(randomNumber=='1'){
        computer='rock';
    }
    if(randomNumber=='2'){
        computer='paper';
    }
    if(randomNumber=='3'){
        computer='scissors';
    }
    computerDisplay.style.color='yellow'
    computerDisplay.innerHTML=computer;
}
function getResult(){
    if(computer==your){
        result="DRAW";
    }
    if(computer== 'rock'&& your== 'paper'){
        result="YOU WON";
    }
    if(computer== 'rock' && your=='scissors'){
        result="YOU LOST";
    }
    if(computer== 'paper' && your=='scissors'){
        result="YOU WON";
    }
    if(computer== 'paper' && your=='rock'){
        result="YOU LOST";
    }
    if(computer== 'scissors' && your=='paper'){
        result="YOU LOST";
    }
    if(computer== 'scissors' && your=='rock'){
        result="YOU WON";
    }
    
    resultDisplay.innerHTML=result;
    if(resultDisplay.innerHTML=='YOU LOST'){
        resultDisplay.style.color="red"
    }
    if(resultDisplay.innerHTML=='YOU WON'){
        resultDisplay.style.color="green"
    }
    if(resultDisplay.innerHTML=='DRAW'){
        resultDisplay.style.color="gray"
    }
}