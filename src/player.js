class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
    var card = this.hand.shift()
    gameOne.fullDeck.push(card);
  }

  winGame() {
    this.wins++;
  }
};
