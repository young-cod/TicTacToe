const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formElem = document.querySelector("form");
const errorOutput = document.getElementById("config-error");
const gameAreaElem = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const editConfigCancelBtn = document.getElementById("cancel-config-btn");
const startNewGameBtn = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElem = document.getElementById("game-board");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

editConfigCancelBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formElem.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);

// for (const elem of gameFieldElements) {
//   elem.addEventListener("click", selectGameField);
// }

gameBoardElem.addEventListener("click", selectGameField);
