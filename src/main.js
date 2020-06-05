var cards = [
  './assets/back.png',
  './assets/blue-01.png',
  './assets/blue-02.png',
  './assets/blue-03.png',
  './assets/blue-04.png',
  './assets/blue-05.png',
  './assets/blue-06.png',
  './assets/blue-07.png',
  './assets/blue-08.png',
  './assets/blue-09.png',
  './assets/blue-10.png',
  './assets/blue-jack.png',
  './assets/blue-queen.png',
  './assets/blue-king.png',
  './assets/gold-01.png',
  './assets/gold-02.png',
  './assets/gold-03.png',
  './assets/gold-04.png',
  './assets/gold-05.png',
  './assets/gold-06.png',
  './assets/gold-07.png',
  './assets/gold-08.png',
  './assets/gold-09.png',
  './assets/gold-10.png',
  './assets/gold-jack.png',
  './assets/gold-queen.png',
  './assets/gold-king.png',
  './assets/green-01.png',
  './assets/green-02.png',
  './assets/green-03.png',
  './assets/green-04.png',
  './assets/green-05.png',
  './assets/green-06.png',
  './assets/green-07.png',
  './assets/green-08.png',
  './assets/green-09.png',
  './assets/green-10.png',
  './assets/green-jack.png',
  './assets/green-queen.png',
  './assets/green-king.png',
  './assets/red-01.png',
  './assets/red-02.png',
  './assets/red-03.png',
  './assets/red-04.png',
  './assets/red-05.png',
  './assets/red-06.png',
  './assets/red-07.png',
  './assets/red-08.png',
  './assets/red-09.png',
  './assets/red-10.png',
  './assets/red-jack.png',
  './assets/red-queen.png',
  './assets/red-king.png',
  './assets/wild.png',
];

class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
    console.log(this.hand)
  }
  playCard() {
    var card = playerOne.hand.shift()
    centerDeck.push(card);
  }
  saveWinsToStorage() {

  }
  winGame() {
    this.wins++;
  }
}


class Game {
  constructor() {
    this.fullDeck = cards;
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.turn = 0;
    this.shuffle();
    console.log(this.fullDeck)
  }
  shuffle() {
    var randomNum, replaceNum;
    for (var i = this.fullDeck.length - 1; i > 0; i --) {
      randomNum = Math.floor(Math.random() * (i + 1));
      replaceNum = this.fullDeck[i];
      this.fullDeck[i] = this.fullDeck[randomNum];
      this.fullDeck[randomNum] = replaceNum;
    }
  }
  deal() {
    for (var i = 0; i < this.fullDeck.length; i++) {
      if (this.turn % 2 === 0) {
        this.playerOne.hand.push(this.fullDeck[i]);
      } else if (this.turn % 2 === 1) {
        this.playerTwo.hand.push(this.fullDeck[i]);
      }
    }
    console.log(game.)

    //takes the main deck
    //deals one card to player 1
    //deals one card to player 2
    //stops dealing when no cards are left
  }
  turn() {

  }
  toMiddle() {

  }
  slap() {

  }
  wins() {

  }
  newGame(){

  }
}




// topCard.addEventListener('click', playerOne.deal);


// var playerOne = new Player();
// // playerOneDeal();
// console.log(playerOne);
// console.log(centerDeck);
// console.log(cards)

var gameOne = new Game ();
console.log(gameOne.fullDeck)
