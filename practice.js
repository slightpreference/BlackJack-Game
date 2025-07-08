
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("msg");
let sumEl = document.querySelector("#sum");
let cardsEl = document.getElementById("cards");
let creditsEl = document.getElementById("credits");


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1){
        randomNumber = 11;
    } else if (randomNumber >= 11 && randomNumber <= 13) {
        randomNumber = 10;
    }

    return randomNumber;
}

function startGame() {
    isAlive = true
    cards[0] = getRandomCard();
    cards[1] = getRandomCard();
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        messageEl.textContent = message;
        hasBlackJack = true
    } else {
        message = "You are out of game!";
        messageEl.textContent = message;
        isAlive = false
    }
    
    cardsEl.textContent = `Cards: `;

    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}