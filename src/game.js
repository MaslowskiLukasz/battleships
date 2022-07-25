import { 
  initUI,
  renderShips,
  getCoords,
  renderBoards,
  showEndScreen,
  getVerticalStatus,
  resetUI,
  addAreaEventListeners,
  showAttackInstructions,
  renderCurrentShip,
  removeShipPlacementIndication,
  } from "./UIUtils";
import player from "./player"
import gameboardFactory from "./gameboard";
import ships from "./utils";

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
  renderShips(playerGameboard.getShips(), false);

  addAreaEventListeners('player-board', placeShips, indicateShipPlacement);
}

const placeShips = (event) => {
  const { x, y } = getCoords(event.target);

  const currentShipsNumber = playerGameboard.getShips().length;
  if (currentShipsNumber !== ships.length) {
    playerGameboard.addShip(x, y, ships[currentShipsNumber].length, getVerticalStatus());
  }

  if (playerGameboard.getShips().length === ships.length) {
    addAreaEventListeners('ai-board', attack);
    showAttackInstructions();
    removeShipPlacementIndication();
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
    showEndScreen(AIGameboard.areAllShipsSunk());
  }
}

const indicateShipPlacement = (event) => {
  const currentShipsNumber = playerGameboard.getShips().length;
  renderCurrentShip(event.target, ships[currentShipsNumber].length);
}

export default start;