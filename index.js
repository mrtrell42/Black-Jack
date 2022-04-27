// let firstCard = 11;
// let secondCard = 1;
// let sum = firstCard + secondCard;

// if (sum < 21) {
// 	console.log("Do you want to draw a new card?");
// } else if (sum === 21) {
// 	console.log("You won black jack");
// } else if (sum > 21) {
// 	console.log("You are out of here!");
// }

// let age = 22;

// // is less than 21 you cant get in
// if (age < 21) {
// 	console.log("You can not come in");
// } else {
// 	console.log("Come in");
// }

// let age = 100;

// if (age < 100) {
// 	console.log("No card for you");
// } else if (age === 100) {
// 	console.log("Here is your card from the king");
// } else {
// 	console.log("You already recieved a card");
// }
// cash out

// console.log(4===3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) //false

// end of practice one

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
	name: "Trell",
	chips: 145,
	sayHello: function () {
		console.log("Heisann!");
	},
};

player.sayHello();

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}
function renderGame() {
	cardsEl.textContent = "Cards: ";
	//
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
	//

	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "Woohoo! You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
	sumEl.textContent = "Sum: " + sum;
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		console.log("Drawing a new card from the deck");
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	}
}

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}
console.log(cards);

// practice for push and pop

// let featuredPosts = [
//   "Check out my Netflix clone",
// "Here's code for my project",
// "Portfolio"]

// let accolades = [
//   "CEO @ Scrimba",
//   "FrontEnd Developer",
//   "People counter",
//   "skills"
// ]

// console.log(accolades["1"])
// console.log(accolades["0"])
// console.log(accolades["2"])

// let cards =[7,4]
// cards.push(6) //method
// console.log (cards)

// let messages = [
// 	"Hey, how's it going?",
// 	"I'm great, thank you! How about you",
// 	"All good. Been working on my portfolio",
// ];

// let newMessage = "Same here!";
// messages.push(newMessage); // push adds to the array
// messages.pop(newMessage); // pop removes from the array
// console.log(messages);

// practice for for lops

// for (let count = 10; count < 21; count += 1) {
// 	console.log(count);
// }

// for (let i = 0; i < 6; i += 1) {
// 	console.log(i);
// }
// for (i = 10; i < 101; i += 10) {
// 	console.log(i);
// }

// let messages = [
// 	"Hey, how's it going?",
// 	"I'm great, thank you! How about you?",
// 	"All good. Been working on my portfolio lately.",
// 	"Same here!",
// 	"great",
// ];
// for (let i = 0; i < messages.length; i += 1) {
// 	console.log(messages[i]);
// }

// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i += 1) {
// 	console.log(cards[i]);
// }
// let sentence = ["Hello", "my", "Name", "is", "Per"];
// let greetingEL = document.getElementById("greeting-el");

// for (i = 0; i < sentence.length; i++) {
// 	greetingEL.textContent += sentence[i] + " ";
// }
