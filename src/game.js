class Game {
  constructor() {
    this.fullDeck = cards.slice();
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.turn = 0;
    this.shuffle(this.fullDeck);
    this.deal();
  }

  shuffle(deck) {
    var randomNum, replaceNum;
    for (var i = deck.length - 1; i > 0; i --) {
      randomNum = Math.floor(Math.random() * (i + 1));
      replaceNum = deck[i];
      deck[i] = deck[randomNum];
      deck[randomNum] = replaceNum;
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
  }

  takeTurn() {
    this.turn++;
  }

  slap(playerStr) {
    if (playerStr === 'playerOne') {
      var playerMain = this.playerOne;
      var playerOpponent = this.playerTwo;
    } else if (playerStr === 'playerTwo') {
      var playerMain = this.playerTwo;
      var playerOpponent = this.playerOne;
    }
    var cardOne = this.fullDeck[this.fullDeck.length -1];
    var cardTwo = this.fullDeck[this.fullDeck.length -2];
    var cardThree = this.fullDeck[this.fullDeck.length -3];
    if (this.fullDeck[this.fullDeck.length - 1].includes('jack.png') || isDoubleCard(this.fullDeck) || sandwichCards(this.fullDeck)) {
      for (var i = 0; i < this.fullDeck.length; i++) {
        playerMain.hand.push(this.fullDeck[i]);
    }
      this.shuffle(playerMain.hand);
      this.fullDeck = [];
    } else {
      var singleCard = playerMain.hand.shift();
      playerOpponent.hand.push(singleCard);
    }
  }

  newGame() {
    this.playerOne.hand = [];
    this.playerTwo.hand = [];
    this.turns = 0;
    this.fullDeck = cards.slice();
    this.shuffle(this.fullDeck);
    this.deal();
  }
}
