function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  formElem.firstElementChild.classList.remove("error");
  errorOutput.textContent = "";
  formElem.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutput.textContent = "Please enter a vaild name!";
    return;
  }

  const updatePlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatePlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
