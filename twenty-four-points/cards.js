
//Create a Card class
function Card (number, suit){
    this.number = number;
    this.suit = suit;
}

let cards = [];
//diamonds (♦), clubs (♣), hearts (♥) and spades (♠)
//❤️ 🍀 ♦️ ♠️
const allFourSuits = ["diamonds", "clubs", "hearts", "spades"];

//for performance reasons, this is hardcoded. No more mappings are needed
const allNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//create all the 52 cards
for (let i = 0; i < allNumbers.length; i++) {
    for (let j = 0; j < allFourSuits.length; j++) {
        cards.push(new Card(allNumbers[i],allFourSuits[j]));
    }
}

// the two lines code below are for simple testing purposes
// console.log(cards);
// console.log(cards.length);
