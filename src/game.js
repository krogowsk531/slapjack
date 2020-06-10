class Game {
  constructor() {
    this.fullDeck = cards;
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.turn = 0;
    this.shuffle(this.fullDeck);
    this.deal();
    console.log('allcards', this.fullDeck)
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
    console.log('playerOnehand', this.playerOne.hand)
    console.log('playertwohand', this.playerTwo.hand)
  }
  takeTurn() {

    this.turn++

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
    console.log('working')
    console.log('aFullDeck', this.fullDeck)
      var cardOne = this.fullDeck[this.fullDeck.length -1]
      var cardTwo = this.fullDeck[this.fullDeck.length -2]
      var cardThree = this.fullDeck[this.fullDeck.length -3]
      if (this.fullDeck[this.fullDeck.length - 1].includes('jack.png') || isDoubleCard(this.fullDeck) || sandwichCards(this.fullDeck)) {
        for (var i = 0; i < this.fullDeck.length; i++) {
        this.playerOne.hand.push(this.fullDeck[i])
      }
        this.shuffle(this.playerOne.hand)
        this.fullDeck = [];
        // console.log('working')
       } else {
         //if none of the conditions are met and you slap
         //the player loses the card off the top of their hand (index 0)
         //the other player gains the card at the bottom of their hand (deck length -1)
         var singleCard = this.playerOne.hand.shift()
         this.playerTwo.hand.push(singleCard)
         console.log('misfire')
       }

      //similar to double card, instead of having cardOne and cardTwo you will have card one and card three
      //use a similar funtion and process as doubleCard

      // this.hand.push(this.fullDeck.shift())
      //every card from fullDeck is in hand and there are no cards in fullDeck
      //  **take fullDeck and shuffle to this.hand**
      //every card we now have in our this.hand needs to be shuffled
      // } else {
      //**take fullDeck and shuffle to other hand**


  }

  wins() {

  }
  newGame(){

  }
}
