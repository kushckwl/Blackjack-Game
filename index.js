
let sum = 0
let cards = []
let message = ''
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)

let player ={
    name: "User Name",
    chips: 165
}

playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(playerEl)


function getRandomcard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
    
}

function startGame(){
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasblackjack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard(){
    if (isAlive === true && hasBlackJack===false){
       let card = getRandomcard()
       sum += card
      cards.push(card)
      renderGame()
    }   
}