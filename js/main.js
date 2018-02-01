var cards = [
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
}
];

//This is to randomise the cards so the user doesn't know which order they'll be in

var randomCardsArray = []

var cardChoices = function() {
	var cardArray = [cards[0], cards[1], cards[2], cards[3]];
	for (i = 0; i < cards.length; i++) {
	var randomIndex = Math.floor(Math.random() * cardArray.length);
	randomCardsArray.push(cardArray[randomIndex]);
	cardArray.splice(randomIndex, 1);
	};
};

var score = 0;

var scoreBoard = function(points) {
	var scoreCard = document.getElementById('score');
	scoreCard.textContent = points;
}

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!')
			score += 3;
			scoreBoard(score);
		} else {
			alert('Sorry, try again');
			score -= 1;
			scoreBoard(score);
		}
	}
};

var flipCard = function() {
	cardId = this.getAttribute('data-id');
	console.log('User just flipped ' + randomCardsArray[cardId].rank);
	cardsInPlay.push(randomCardsArray[cardId].rank);
	console.log(randomCardsArray[cardId].suit);
	console.log(randomCardsArray[cardId].cardImage);
	this.setAttribute('src', randomCardsArray[cardId].cardImage);
	checkForMatch();
};

cardChoices();

var createBoard = function() {
	for (var cardsIndex = 0; cardsIndex < randomCardsArray.length; cardsIndex++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', cardsIndex);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
}; 

createBoard();
scoreBoard(0);
console.log(randomCardsArray);

var clearBoard = function() {
	for (var i = 0; i < randomCardsArray.length; i++) {
	var emptyBoard = document.querySelector('img');
	emptyBoard.remove();
	};
	cardsInPlay = [];
	randomCardsArray = [];
	cardChoices();
	createBoard();
};

var resetButton = document.querySelector('button');
	resetButton.addEventListener('click', clearBoard);



 







