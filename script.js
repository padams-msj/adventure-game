//this code runs when the player clicks the start button
function startGame() {
	//save their choice as a boolean variable.
	//we use const because we won't change this variable later on.
	const choice = confirm(
		"You wake up in a dark room. There are two doors in front of you. Click OK to go left, or Cancel to go right.",
	);

	//use an if statement to check the player's choice and call the appropriate function.
	if (choice === true) {
		chooseLeftDoor();
	} else {
		chooseRightDoor();
	}
}

function chooseLeftDoor() {
	//we can call this variable choice again because it's a different variable that only exists inside this function.
	const choice = confirm(
		"You enter the left door and find a treasure chest. Click OK to open it, or Cancel to keep walking.",
	);
	if (choice == true) {
		openTreasureChest();
	} else {
		leaveTreasureChest();
	}
}

function openTreasureChest() {
	alert("You open the treasure chest and find a pile of gold coins! You win!");
}

function leaveTreasureChest() {
	alert(
		"You decide to leave the treasure chest alone and continue on your adventure.",
	);
}

function chooseRightDoor() {
	const choice = confirm(
		"You enter the right door and find a sleeping dragon. Click OK to try to sneak past it, or Cancel to go back.",
	);
	if (choice == true) {
		sneakPastDragon();
	} else {
		chooseLeftDoor();
	}
}

function sneakPastDragon() {
	alert(
		"You try to sneak past the dragon, but it wakes up and eats you! Game over.",
	);
}
