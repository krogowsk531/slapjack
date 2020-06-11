var gameOne = new Game ();

window.onload = firstView();
window.addEventListener('keyup', keyPressed);

function keyPressed(event) {
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
  whoseTurn();
  showCards();
  hideDeckIfEmpty();
};

function loseCards() {
  if(gameOne.playerOne.hand.length === 0) {
    gameOne.playerTwo.winGame();
    gameOne.newGame();
  } else if (gameOne.playerTwo.hand.length === 0) {
    gameOne.playerOne.winGame();
    gameOne.newGame();
  }
};

function isDoubleCard(fullDeck) {
  if (fullDeck.length < 2) {
    return false;
  }
  var cardOne = fullDeck[fullDeck.length -1];
  var cardTwo = fullDeck[fullDeck.length -2];
  var returnCardOneSplit = cardOne.split('-');
  var returnCardTwoSplit = cardTwo.split('-');
  if (returnCardOneSplit[1] === returnCardTwoSplit[1]) {
    return true;
  } else {
    return false;
  }
};

function sandwichCards(fullDeck) {
  if (fullDeck.length < 3) {
    return false;
  }
  var cardOne = fullDeck[fullDeck.length -1];
  var cardThree = fullDeck[fullDeck.length -3];
  var returnCardOneSplit = cardOne.split('-');
  var returnCardThreeSplit = cardThree.split('-');
  if (returnCardOneSplit[1] === returnCardThreeSplit[1]) {
    return true;
  } else {
    return false;
  }
};

function whoseTurn() {
  var resultOfModulo = gameOne.turn % 2;
  if (gameOne.turn % 2 === 0) {
    return 'PlayerOneTurn';
  } else if (gameOne.turn % 2 === 1) {
    return 'PlayerTwoTurn';
  }
};



function showCards(event) {
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
};

function firstView() {
  var seeCenter = document.querySelector('.middle-deck');
  var seeLeft = document.querySelector('.left-side-deck');
  var seeRight = document.querySelector('.right-side-deck');
  seeCenter.classList.add('hidden');
  seeLeft.classList.remove('hidden');
  seeRight.classList.remove('hidden');
};

function hideDeckIfEmpty() {
  if (gameOne.fullDeck.length === 0) {
    document.querySelector('.middle-deck').classList.add("hidden");
  } else {
    document.querySelector('.middle-deck').classList.remove("hidden");
  }
  if (gameOne.playerTwo.hand.length === 0) {
    document.querySelector('.right-side-deck').classList.add("hidden");
  } else {
    document.querySelector('.right-side-deck').classList.remove("hidden");
  }
  if (gameOne.playerOne.hand.length === 0) {
    document.querySelector('.left-side-deck').classList.add("hidden");
  } else {
    document.querySelector('.left-side-deck').classList.remove("hidden");
  }
};
