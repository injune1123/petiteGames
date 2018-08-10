
//Create a Card class
function Card (number, suit){
    this.number = number;
    this.suit = suit;
}

let aSetOfCards = [];
const numOfCards = 52;

//diamonds (♦), clubs (♣), hearts (♥) and spades (♠)
//❤️ 🍀 ♦️ ♠️
const allFourSuits = ["diamonds", "clubs", "hearts", "spades"];

//for performance reasons, this is hardcoded. No more mappings are needed
const allNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//create all the 52 cards
for (let i = 0; i < allNumbers.length; i++) {
    for (let j = 0; j < allFourSuits.length; j++) {
        aSetOfCards.push(new Card(allNumbers[i],allFourSuits[j]));
    }
}

// the two lines code below are for simple testing purposes
// console.log(aSetOfCards);
// console.log(aSetOfCards.length);


// get 4 random cards
// get 4 random numbers that does not match each other
function getRandomMember(num) {
    return Math.floor(Math.random() * num);
}

function get4RandomNumber(range){
    var fourRandomNumber = [];
    while( fourRandomNumber.length < 4 ) {
        var tempIndex =  getRandomMember(range);
        if (!(tempIndex in fourRandomNumber)) {
            fourRandomNumber.push(tempIndex)
        }
    }
    return fourRandomNumber;
}

let fourRandomNumbers = get4RandomNumber(numOfCards);

// the one console.log below is for simple testing purposes
//console.log(fourRandomNumbers) // [1,51,2,4]

function showCards(cardIndexs) {
    let fourCards = [];
    for (let i = 0; i < cardIndexs.length; i++){
        fourCards.push(aSetOfCards[cardIndexs[i]])
    }
    return fourCards;
}

let fourRandomCards = showCards(fourRandomNumbers);

// the one console.log below is for simple testing purposes
// console.log(fourRandomCards)
