function resetGameStatus() {
  isGameOver = false;
  activePlayer = 0;
  currentRound = 1;
  gameOverElem.firstElementChild.innerHTML =
    'You won, <span id="winnder-name">PLAYER NAME</span>';
  gameOverElem.style.display = "none";

  let gameboardIdx = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;

      const gameboardItem = gameBoardElem.children[gameboardIdx++];
      gameboardItem.textContent = "";
      gameboardItem.classList.remove("disabled");
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "0") {
    alert("Please set custom player name for both players!");
    return;
  }

  resetGameStatus();

  activePlayerName.textContent = players[activePlayer].name;
  gameAreaElem.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || isGameOver) return;

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;

  switchPlayer();
}

function checkForGameOver() {
  //check row
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      console.log(gameData);
      return gameData[i][0];
    }
  }

  //check column
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      console.log(gameData);
      return gameData[0][i];
    }
  }
  //check diagonal
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    console.log(gameData);
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    console.log(1);
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  isGameOver = true;
  gameOverElem.style.display = "block";

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElem.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOverElem.firstElementChild.textContent = "It's a draw!";
  }
}
