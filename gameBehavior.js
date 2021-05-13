function drawSnake(headLeftPosition, headTopPosition) {
	drawSnakePart();
	setHeadPosition(headLeftPosition, headTopPosition);

	const baitPosition = getCurrentBaitPosition();
	if (baitPosition && headLeftPosition === baitPosition.left && headTopPosition === baitPosition.top ) {
		eat();
	}
}

function drawSnakePart() {
	const die = updatePartsPosition();
	if (typeof die === "function") {
		die();
		startGame();
	};
}

function resetHead() {
	setHeadPosition(0, 0);
	state.direction = 'right';
}

function updateHead() {
	return updateHeadPosition();
}

function eat() {
	createNewPart();
	removeBaitEl();
}

function startGame() {
	resetHead();
	removePartEls();
	removeBaitEl();
	generateBait();
}

function generateBait() {
	createBaitEl();

	setTimeout(() => {
		removeBaitEl();
		generateBait();
	}, BAITSPEED)
}
