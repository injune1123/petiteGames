
//Create a Card class
function Card (number, suit){
    this.number = number;
    this.suit = suit;
}

let aSetOfCards = [];
const numOfCards = 52;
const operatorsArr = ['+', '-', '*', '/'];
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

//Algorithm 1 - brutal
// find out all the permuation of the calculation of 4 numbers
// for each see whether each one of them match 24
// print all possible solutions
// if there is no solution, print out "no solution"

// helper functions
// get permutations
let fourRandomCardsPermutation = [];

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        for (var k = 0; k < 4; k++) {
            for (var l = 0; l < 4; l++) {
                // for permutations
                if (j !== i &&
                    k !== j && k !== i &&
                    l !== i && l !== j && l !== k 
                ) {
                    fourRandomCardsPermutation.push([fourRandomCards[i],fourRandomCards[j],fourRandomCards[k],fourRandomCards[l]])
                }
            }
        }
    }
}

// the two console.log below are for simple testing purposes
// console.log(fourRandomCardsPermutation)
// console.log(fourRandomCardsPermutation.length)

let operatorsPermutation = [];

for (var m = 0; m < operatorsArr.length; m++) {
    for (var n = 0; n < operatorsArr.length; n++) {
        for (var o = 0; o < operatorsArr.length; o++) {
            operatorsPermutation.push([operatorsArr[m],operatorsArr[n],operatorsArr[o]]);
        }
    }
}

// the two console.log below is for simple testing purposes
//console.log(operatorsPermutation);
//console.log(operatorsPermutation.length);

// situtation1 = a?b?c?d => 24

// let results = [];
