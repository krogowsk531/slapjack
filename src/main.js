var centerDeck = [];

class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = ['jackOfSpades', 'queenOfHearts', 'twoOfDiamonds'];
  }
  winGame() {
    this.wins++;
  }
  deal() {
    var card = playerOne.hand.shift()
    centerDeck.push(card);
  }

}

class Game {

}


topCard.addEventListener('click', playerOne.deal);

// var r = [1, 2, 3];
// console.log(r.shift())
// console.log(r)

var playerOne = new Player();
playerOneDeal();
console.log(playerOne);
console.log(centerDeck);

var gameOne = new Game ();
