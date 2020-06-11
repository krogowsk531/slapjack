//can not deal twice in a row
//If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.






// console.log('is working', cards)

// if (typeof window !== 'undefined') {
//   window.addEventListener('keyup', keyPressed)
// }

window.onload = firstView();
window.addEventListener('keyup', keyPressed)

function keyPressed(event) {
  console.log(event.key)
  if (event.key === 'q' && whoseTurn() === 'PlayerOneTurn' && gameOne.playerOne.hand.length > 0) {
    gameOne.takeTurn();
    gameOne.playerOne.playCard();
  } else if (event.key === 'p' && whoseTurn() === 'PlayerTwoTurn' && gameOne.playerTwo.hand.length > 0) {
    gameOne.takeTurn();
    gameOne.playerTwo.playCard();
  } else if (event.key === 'f') {
    gameOne.slap('playerOne');
  } else if (event.key === 'j') {
    gameOne.slap('playerTwo');

  }
  loseCards();
  showCards();
  hideDeckIfEmpty();
}


function loseCards() {
  console.log('win game')
  if(gameOne.playerOne.hand.length === 0) {
    gameOne.playerTwo.winGame();
    //restart the game
  } else if (gameOne.playerTwo.hand.length === 0) {
    gameOne.playerOne.winGame();
  }
}





function isDoubleCard(fullDeck) {
  if (fullDeck.length < 2) {
    return false;
  }
  var cardOne = fullDeck[fullDeck.length -1]
  var cardTwo = fullDeck[fullDeck.length -2]
  var returnCardOneSplit = cardOne.split('-')
  var returnCardTwoSplit = cardTwo.split('-')
  if (returnCardOneSplit[1] === returnCardTwoSplit[1]) {
    return true;
  } else {
    return false;
  }
}

//make sure the deck has two cards

// console.log('true', doubleCard('./assets/red-king.png', './assets/green-king.png'));
// console.log('false', doubleCard('./assets/red-queen.png', './assets/blue-01.png'));
// console.log('true', doubleCard('./assets/red-03.png', './assets/green-03.png'))

function sandwichCards(fullDeck) {
  if (fullDeck.length < 3) {
    return false;
  }
  var cardOne = fullDeck[fullDeck.length -1]
  var cardThree = fullDeck[fullDeck.length -3]
  var returnCardOneSplit = cardOne.split('-')
  var returnCardThreeSplit = cardThree.split('-')
  if (returnCardOneSplit[1] === returnCardThreeSplit[1]) {
    return true;
  } else {
    return false;
  }
}

//deck needs to start with at least three cards

// console.log('true', sandwichCards('./assets/red-king.png', './assets/green-king.png'));
// console.log('false', sandwichCards('./assets/red-queen.png', './assets/blue-01.png'));
// console.log('true', sandwichCards('./assets/red-03.png', './assets/green-03.png'))

var gameOne = new Game ();

function whoseTurn() {
  var resultOfModulo = gameOne.turn % 2
  if (gameOne.turn % 2 === 0) {
    return 'PlayerOneTurn'
  } else if (gameOne.turn % 2 === 1) {
    return 'PlayerTwoTurn'
  }
}
//
whoseTurn();
//condition 1
//if a jack appears either player can slap it
// if a deck is slapped incorrectly cards go to other player
//if a double card appears either player can slap it
//if a sandwhich appears either play can slap it


//playerOne hand at zero push it into centerDeck

function showCards(event) {
  console.log('showCards')
  var gameArea = document.querySelector('.game-area');
  gameArea.innerHTML = `
    <article class="card-deck left-side-deck">
      <img class="top-card" src="./assets/back.png" alt="Card on Top of Deck"/>
      <p>${gameOne.playerOne.wins} Wins</p>
      <p>${gameOne.playerOne.hand.length} Cards</p>
    </article>
    <article class="card-deck middle-deck">
      <img class="top-card" src="${gameOne.fullDeck[gameOne.fullDeck.length - 1]}" alt="Card on Top of Deck"/>
      <p>${gameOne.fullDeck.length} Cards</p>
    </article>
    <article class="card-deck right-side-deck">
      <img class="top-card" src="./assets/back.png" alt="Card on Top of Deck"/>
      <p>${gameOne.playerTwo.wins} Wins</p>
      <p>${gameOne.playerTwo.hand.length} Cards</p>
    </article>
  `
}


function firstView() {
  console.log('viewload')
  var seeCenter = document.querySelector('.middle-deck');

  var seeLeft = document.querySelector('.left-side-deck');
  var seeRight = document.querySelector('.right-side-deck');
  console.log(seeCenter, seeLeft, seeRight)
  seeCenter.classList.add('hidden')
  seeLeft.classList.remove('hidden')
  seeRight.classList.remove('hidden')
}



//onload I want to see the two decks but not the center

// function view() {
//   showCards();
// }
// function createDeck() {
//   startTime = new Date();
//   deck.fillDeck();
//   showCards();
// }

function hideDeckIfEmpty() {
  if (gameOne.fullDeck.length === 0) {
    document.querySelector('.middle-deck').classList.add("hidden")
  } else {
    document.querySelector('.middle-deck').classList.remove("hidden")
  }
  if (gameOne.playerTwo.hand.length === 0) {
    document.querySelector('.right-side-deck').classList.add("hidden")
  } else {
    document.querySelector('.right-side-deck').classList.remove("hidden")
  }
  if (gameOne.playerOne.hand.length === 0) {
    document.querySelector('.left-side-deck').classList.add("hidden")
  } else {
    document.querySelector('.left-side-deck').classList.remove("hidden")
  }

}





// topCard.addEventListener('click', playerOne.deal);


// var playerOne = new Player();
// // playerOneDeal();
// console.log(playerOne);
