import { 
  initUI,
  renderShips,
  getCoords,
  renderBoards,
  showEndScreen,
  getVerticalStatus,
  resetUI,
  addAreaEventListeners,
  } from "./UIUtils";
import player from "./player"
import gameboardFactory from "./gameboard";
import ships from "./utils";

/*
TODO
ui -> show where the ship will be placed
*/
const player1 = player();
const AI = player();
const playerGameboard = gameboardFactory();
const AIGameboard = gameboardFactory();

const start = () => {
  initUI(reset);
  initGame();
}

const reset = () => {
  player1.resetAttacks();
  AI.resetAttacks();
  playerGameboard.reset();
  AIGameboard.reset();
  resetUI();
  initGame();
}

const initGame = () => {
  AIGameboard.placeShipsRandomly(ships);
  renderShips(AIGameboard.getShips(), true);
  renderShips(playerGameboard.getShips(), false);

  addAreaEventListeners('player-board', placeShips);
}

const placeShips = (event) => {
  const { x, y } = getCoords(event.target);

  const currentShipsNumber = playerGameboard.getShips().length;
  if (currentShipsNumber !== ships.length) {
    playerGameboard.addShip(x, y, ships[currentShipsNumber].length, getVerticalStatus());
  }

  if (playerGameboard.getShips().length === ships.length) {
    addAreaEventListeners('ai-board', attack);
  }

  renderShips(playerGameboard.getShips(), false);
}

const randomAttack = (player, enemyBoard) => {
  const { x, y } = player.generateNextMove();
  player.attack(x, y, enemyBoard);
}

const attack = (event) => {
  const { x, y } = getCoords(event.target);

  player1.attack(x, y, AIGameboard);
  randomAttack(AI, playerGameboard);
  renderBoards(playerGameboard, AIGameboard);
  checkGameOver();
}

const checkGameOver = () => {
  if (playerGameboard.areAllShipsSunk() || AIGameboard.areAllShipsSunk()) {
    showEndScreen();
  }
}

export default start;