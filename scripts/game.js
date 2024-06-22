function startNewGame() {
  if (players[0].name === "" || players[1].name === "0") {
    alert("Please set custom player name for both players!");
    return;
  }

  gameAreaElem.style.display = "block";
}
