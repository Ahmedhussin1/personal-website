const cardArray=[
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }
]
cardArray.sort(()=>0.5-Math.random())

const gridDisplay = document.querySelector('#grid')//variable for the div
const resultDisplay= document.querySelector('#result')
let wonImg=document.querySelector('#wonImg')
let playAgain=document.querySelector('#playAgain')
let stateDisplay= document.querySelector('#state')
let cardChosen= [] 
let cardChosenId= []
let cardsWon= []


function createBoard(){
    for(let i = 0 ; i < cardArray.length ; i++){
        const card = document.createElement('img');//creat the images using js
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)//give each card an id based on its order
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)//add images to the div
    }
}

function checkMatch(){
    const cards= document.querySelectorAll('img')
    const cardOneId=cardChosenId[0];
    const cardTwoId=cardChosenId[1];

    if(cardOneId==cardTwoId)
    {
        cards[cardOneId].setAttribute('src','images/blank.png')
        cards[cardTwoId].setAttribute('src','images/blank.png')
        stateDisplay.textContent='YOU clicked the same image IDIOT '
        stateDisplay.style.color='red'
    }

    else if(cardChosen[0]==cardChosen[1])
    {
        stateDisplay.textContent='YOU FINALLY got a Match'
        stateDisplay.style.color='green'
        resultDisplay.textContent++;
        cards[cardOneId].setAttribute('src','images/white.png')
        cards[cardTwoId].setAttribute('src','images/white.png')
        cards[cardOneId].removeEventListener('click',flipCard)
        cards[cardTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
        console.log(cardsWon)
    }

    else{
        cards[cardOneId].setAttribute('src','images/blank.png')
        cards[cardTwoId].setAttribute('src','images/blank.png')
        stateDisplay.textContent='HA HA HA HA HA give it another try you DUMB'
        stateDisplay.style.color='red'
        resultDisplay.textContent--;
    }

    cardChosen= []//reset the array
    cardChosenId= []

    if(cardsWon.length === cardArray.length/2){
        stateDisplay.textContent="You FINALLY Did Something Right In You Life!!"
        stateDisplay.style.color='blue'
        gridDisplay.parentNode.removeChild(gridDisplay)
        wonImg.style.display='block';
    }

}

function flipCard(){
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')//get the id of the cards
    cardChosen.push(cardArray[cardId].name)//array that carry the card chosen name
    cardChosenId.push(cardId)// array to carry the card chosen id
    console.log('clicked',cardId)
    console.log(cardChosen)
    this.setAttribute('src',cardArray[cardId].img)//give the images to each card by its id

    if(cardChosen.length==2){
        setTimeout(checkMatch , 500);
    }
}
createBoard();
