//can not deal twice in a row
//If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.






console.log('is working', cards)

// if (typeof window !== 'undefined') {
//   window.addEventListener('keyup', keyPressed)
// }


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
      var cardOne = this.fullDeck[this.fullDeck.length -1]
      var cardTwo = this.fullDeck[this.fullDeck.length -2]
      var cardThree = this.fullDeck[this.fullDeck.length -3]
      if (this.fullDeck[this.fullDeck.length - 1].includes('jack.png') || doubleCard(cardOne, cardTwo) || sandwichCards(cardOne, cardThree)) {
        for (var i = 0; i < this.fullDeck.length; i++) {
        this.playerOne.hand.push(this.fullDeck[i])
      }
        this.shuffle(this.playerOne.hand)
        // console.log('working')
       } else {
         //if none of the conditions are met and you slap
         //the player loses the card off the top of their hand (index 0)
         //the other player gains the card at the bottom of their hand (deck length -1)
         this.playerTwo.hand.push(this.playerOne.hand[0])
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
    
    this.fullDeck = [];
  }

  wins() {

  }
  newGame(){

  }
}

function doubleCard(cardOne, cardTwo) {
  var returnCardOneSplit = cardOne.split('-')
  var returnCardTwoSplit = cardTwo.split('-')
  if (returnCardOneSplit[1] === returnCardTwoSplit[1]) {
    return true;
  } else {
    return false;
  }
}
// console.log('true', doubleCard('./assets/red-king.png', './assets/green-king.png'));
// console.log('false', doubleCard('./assets/red-queen.png', './assets/blue-01.png'));
// console.log('true', doubleCard('./assets/red-03.png', './assets/green-03.png'))

function sandwichCards(cardOne, cardThree) {
  var returnCardOneSplit = cardOne.split('-')
  var returnCardThreeSplit = cardThree.split('-')
  if (returnCardOneSplit[1] === returnCardThreeSplit[1]) {
    return true;
  } else {
    return false;
  }
}

// console.log('true', sandwichCards('./assets/red-king.png', './assets/green-king.png'));
// console.log('false', sandwichCards('./assets/red-queen.png', './assets/blue-01.png'));
// console.log('true', sandwichCards('./assets/red-03.png', './assets/green-03.png'))


// function whoseTurn() {
//   var resultOfModulo = game.turn % 2
//   if (game.turn % 2 === 0) {
//   } else if (game.turn % 2 === 1) {
//   }
// }
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
