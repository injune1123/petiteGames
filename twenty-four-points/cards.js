
//Create a Card class
function Card (symbol, suit, value){
    this.value = value;
    this.symbol = symbol;
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
        aSetOfCards.push(new Card(allNumbers[i],allFourSuits[j],i+1));
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

// HERE!!! TRY YOUR OWN INPUT 🤩
// fourRandomCards = [ new Card(8, 'spade', 8), new Card(3, 'diamond', 3), new Card(8, 'diamond', 8), new Card(3, 'spade', 3)]
// the one console.log below is for simple testing purposes
console.log("fourRandomCards", fourRandomCards)

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
// console.log(operatorsPermutation);
// console.log(operatorsPermutation.length);

// situtation1 = a?b?c?d => 24

// let results = [];
for (var p = 0; p < fourRandomCardsPermutation.length; p++){
    for (var q = 0; q < operatorsPermutation.length; q++){

        let res = ""
        let res2 = ""
        let res2b = ""
        let res2c = ""
        let res3 = ""
        let res4 = ""
        let res4b = ""
        let res5 = ""
        let res5b = ""
        let res5c = ""
        let res5d = ""

        // situtation1 = a?b?c?d => 24
        res = res + 
            fourRandomCardsPermutation[p][0]["value"] + 
            operatorsPermutation[q][0] +
            fourRandomCardsPermutation[p][1]["value"] +
            operatorsPermutation[q][1]  +
            fourRandomCardsPermutation[p][2]["value"] +
            operatorsPermutation[q][2]  +
            fourRandomCardsPermutation[p][3]["value"]
        
        // situtation2 = (a?b)?c?d => 24
        res2 = res2 + '(' + 
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] +
        fourRandomCardsPermutation[p][1]["value"] +
        ')' +
        operatorsPermutation[q][1]  +
        fourRandomCardsPermutation[p][2]["value"] +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"]

        // situtation2b = a?(b?c)?d => 24
        res2b = res2b + 
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] + '(' + 
        fourRandomCardsPermutation[p][1]["value"] +
        operatorsPermutation[q][1]  +
        fourRandomCardsPermutation[p][2]["value"] +
        ')' +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"]

        // situtation2c = a?b?(c?d) => 24
        res2c = res2c + 
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] +
        fourRandomCardsPermutation[p][1]["value"] +
        operatorsPermutation[q][1]  + '(' + 
        fourRandomCardsPermutation[p][2]["value"] +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"] + ')'

        // situtation3 = (a?b)?(c?d) => 24

        res3 = res3 + '(' + 
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] +
        fourRandomCardsPermutation[p][1]["value"] +
        ')' + operatorsPermutation[q][1]  + '('  +
        fourRandomCardsPermutation[p][2]["value"] +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"]+
        ')'


        // situtation4 = (a?b?c)?d => 24

        res4 = res4 + '(' + 
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] +
        fourRandomCardsPermutation[p][1]["value"] +
        operatorsPermutation[q][1]  +
        fourRandomCardsPermutation[p][2]["value"] +
        ')' +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"]

        // situtation4b = a?(b?c?d) => 24

        res4b = res4b +
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] + '(' +
        fourRandomCardsPermutation[p][1]["value"] +
        operatorsPermutation[q][1]  +
        fourRandomCardsPermutation[p][2]["value"] +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"] + ')'
 

      // situtation5 = ((a?b)?c)?d => 24

      res5 = res5 + '(' + '(' + 
      fourRandomCardsPermutation[p][0]["value"] + 
      operatorsPermutation[q][0] +
      fourRandomCardsPermutation[p][1]["value"] +
      ')' + 
      operatorsPermutation[q][1]  +
      fourRandomCardsPermutation[p][2]["value"] +
      ')' +
      operatorsPermutation[q][2]  +
      fourRandomCardsPermutation[p][3]["value"]

      // situtation5b = (a?(b?c))?d => 24

        res5b = res5b + '(' +
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] + '(' + 
        fourRandomCardsPermutation[p][1]["value"] +
        operatorsPermutation[q][1]  +
        fourRandomCardsPermutation[p][2]["value"] +
        ')' + ')' +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"]

        // situtation5c = a?((b?c)?d) => 24

        res5c = res5c +
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] + '(' + '(' + 
        fourRandomCardsPermutation[p][1]["value"] +
        operatorsPermutation[q][1]  +
        fourRandomCardsPermutation[p][2]["value"] +
        ')' +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"] + ')'
        
        // situtation5d = a?(b?(c?d)) => 24

        res5d = res5d +
        fourRandomCardsPermutation[p][0]["value"] + 
        operatorsPermutation[q][0] + '(' + 
        fourRandomCardsPermutation[p][1]["value"] +
        operatorsPermutation[q][1]  + '(' + 
        fourRandomCardsPermutation[p][2]["value"] +
        operatorsPermutation[q][2]  +
        fourRandomCardsPermutation[p][3]["value"] +')' + ')'

        if (eval(res) === 24){

        console.log(eval(res))
        console.log(res)
        // console.log(fourRandomCardsPermutation)
        }

        if (eval(res2) === 24){

        console.log(eval(res2))
        console.log(res2)
        }

        if (eval(res2b) === 24) {
        console.log(eval(res2b))
        console.log(res2b)
        }

        if (eval(res2c) === 24) {
            console.log(eval(res2c))
            console.log(res2c)
        }

        if (eval(res3) === 24){

            console.log(eval(res3))
            console.log(res3)
        }

        if (eval(res4) === 24){

            console.log(eval(res4))
            console.log(res4)
        }

        if (eval(res4b) === 24){

            console.log(eval(res4b))
            console.log(res4b)
        }

        if (eval(res5) === 24){

            console.log(eval(res5))
            console.log(res5)
        }

        if (eval(res5b) === 24){

            console.log(eval(res5b))
            console.log(res5b)
        }

        if (eval(res5c) === 24){

            console.log(eval(res5c))
            console.log(res5c)
        }

        if (eval(res5d) > 23.9 && eval(res5d) < 24.1){

            console.log(eval(res5d))
            console.log(res5d)
        }
    }
}