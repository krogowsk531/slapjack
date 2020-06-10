class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
    
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

  winGame() {
    this.wins++;
  }
}
