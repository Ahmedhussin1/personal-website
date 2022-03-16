//select all the cell on the board
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const turnText = document.getElementById('turnText');
const restartButton=document.getElementById('restartButton')
const winningMassageElement=document.getElementById('winningMassage')
const winningMessageTextElement=document.querySelector
('[data-winning-massage-text]');
//x class || circle class
const xClass= 'x';
const circleClass='circle';
//all winning possibilities 
const winningCombinations=[
    [0,1,2,],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
//variable to determine whose turn is
let circleTurn;

startGame();

restartButton.addEventListener('click',startGame)
function startGame(){
    circleTurn=false
    //loop on all the cells
    cellElements.forEach(cell =>{
        cell.classList.remove(xClass)
        cell.classList.remove(circleClass)
        turnText.innerText='X START THE GAME'
        cell.removeEventListener('click',handelClick)
    //add event on click using handelClick function it execute only once on every cell
    cell.addEventListener('click', handelClick, {once:true})
})
    winningMassageElement.classList.remove('show')
}
function handelClick(e){
    const cell = e.target //cell  variable to carry target cell
    const currentClass = circleTurn ? circleClass:xClass//determine which symbol 
    placeMark(cell , currentClass);

    if(checkWin(currentClass)){
        endGame(false)
    }
    else if(isDraw()){
        endGame(true);
    }
    else{
        swapTurns();
        displayTurn();
    }
}
function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText=('DRAW!!')
    }else{
        turnText.innerText=('GAME OVER');
        winningMessageTextElement.innerText=`${
            circleTurn ? "O":"X"} WINS!! `;
    }
    winningMassageElement.classList.add('show')
}
function isDraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(xClass)||cell.classList.contains(circleClass);
    })
}
function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}
function swapTurns(){
    circleTurn = !circleTurn;
}
function displayTurn(){
        if(circleTurn){
            turnText.innerText=('O Turn')
        }else if(!circleTurn){
            turnText.innerText=('X Turn');
        }
}
function checkWin(currentClass){
    return winningCombinations.some(combination=>{//check if any of the combination happen
        return combination.every(index=>{
            //check that every index of the cellElement array contains the same symbol
            return cellElements[index].classList.contains(currentClass)
        })
    })
}
