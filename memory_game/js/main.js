const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "diamonds",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "Image/back.png");
		cardElement.setAttribute('data-id', i);
		document.GetElementById('game-board').appendChild()
		cardElement.addEventListener('click', flipCard);
}


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match");
	} else {
		console.log("Sorry, try again.");
	}
};


function flipCard() {
	var cardId = this.getAttribute('data-id');
	var cardElement = this.setAttribute('src', cards[cardId].cardImage);
	console.log("user flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length == 2) {
		checkForMatch();
	}
};

createBoard();




