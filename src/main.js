// var playerOneHand = document.querySelector('.right-side-hand')
var cards = [
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
];

window.addEventListener('keyup', keyPressed)

function keyPressed(event) {
  console.log(event.key)
  if (event.key === 'q') {
    gameOne.playerOne.playCard();
  } else if (event.key === 'p') {
    gameOne.playerTwo.playCard();
  } else if (event.key === 'f') {
    gameOne.slap('playerOne');
  } else if (event.key === 'j') {
    gameOne.slap('playerTwo');
  }

  //if event.key is some letter do the player specific event
  //else do nothing
}

class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
    // this.playerOne = new Player();
    // this.playerTwo = new Player();
    // console.log('hand', this.hand)

  }
  playCard() {
    // console.log('hand', this.hand)
    var card = this.hand.shift()
    gameOne.fullDeck.push(card);
    // gameOne.fullDeck.length = 0;
    console.log('card', card)
    // console.log('centerDeck', centerDeck);
    //player one flips a card
    //it is added to the middle pile array
    //it is removed from playerOne hand array
    //player two flips a card
    //it is added to the middle pile array
    //it is removed from playerTwo hand array
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
    this.deal();
    console.log('allcards', this.fullDeck)
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
    var deckNumber = this.fullDeck.length;
    for (var i = 0; i < deckNumber; i++) {
      if (i % 2 === 0) {
        this.playerOne.hand.push(this.fullDeck.shift());
      } else if (i % 2 === 1) {
        this.playerTwo.hand.push(this.fullDeck.shift());
      }
    }
    console.log('playerOnehand', this.playerOne.hand)
    console.log('playertwohand', this.playerTwo.hand)
  }
  round() {

  }
  toMiddle() {

  }
  slap(player) {
    console.log('SlapJack')
    // var card = this.hand.shift()
    // gameOne.fullDeck.push(card);
    //if jack is on top then get the pile and suffle it back into the players deck
    //jack would be on top of the fullDeck (fullDeck.length -1]
    //would be the last card in (so the last element in the fullDeck array)
    //pile is the fullDeck
    //put current fullDeck into this player hand and then shuffle
    //if slap is wrong put current fullDeck into the other players hand and then shuffle
    for (var i = 0; i < this.fullDeck.length; i++) {
    if (this.fullDeck[this.fullDeck.length - 1].includes('jack.png')) {
      this.playerOne.hand.push(this.fullDeck[i])
      console.log('working')
    }
      // this.hand.push(this.fullDeck.shift())
      //every card from fullDeck is in hand and there are no cards in fullDeck
    //  **take fullDeck and shuffle to this.hand**
      //every card we now have in our this.hand needs to be shuffled
    // } else {
      //**take fullDeck and shuffle to other hand**
      }
    }

  wins() {

  }
  newGame(){

  }
}


//condition 1
//if a jack appears either player can slap it
// if a deck is slapped incorrectly cards go to other player
//if a double card appears either player can slap it
//if a sandwhich appears either play can slap it


//playerOne hand at zero push it into centerDeck




// topCard.addEventListener('click', playerOne.deal);


// var playerOne = new Player();
// // playerOneDeal();
// console.log(playerOne);


var gameOne = new Game ();
