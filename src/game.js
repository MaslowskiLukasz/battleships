import { 
  initUI,
  renderShips,
  getCoords,
  logStatus,
  logWinner,
  renderBoards,
  showEndScreen,
  getVerticalStatus,
  } from "./UIUtils";
import player from "./player"
import gameboardFactory from "./gameboard";
import ships from "./utils";

/*
TODO
ui -> add restart functionality
ui -> show where the ship will be placed
*/
const player1 = player();
const AI = player();
const playerGameboard = gameboardFactory();
const AIGameboard = gameboardFactory();
let isShipVertical = false;

const start = () => {
  initUI();
  initGame();
}

const initGame = () => {
  AIGameboard.placeShipsRandomly(ships);
  renderShips(AIGameboard.getShips(), true);
  renderShips(playerGameboard.getShips(), false);

  setupShipPlacementStage();
}

const setupShipPlacementStage = () => {
  const playerBoard = document.getElementById('player-board');
  const areas = Array.from(playerBoard.querySelectorAll('button'));

  areas.map((area) => {
    area.addEventListener('click', placeShips);
  })
}

const setupGameloop = () => {
  const AIBoard = document.getElementById('ai-board');
  const areas = Array.from(AIBoard.querySelectorAll('button'));

  areas.map((area) => {
    area.addEventListener('click', attack);
  });
}

const placeShips = (event) => {
  const { x, y } = getCoords(event.target);

  const currentShipsNumber = playerGameboard.getShips().length;
  if (currentShipsNumber !== ships.length) {
    playerGameboard.addShip(x, y, ships[currentShipsNumber].length, getVerticalStatus());
  }

  if (playerGameboard.getShips().length === ships.length) {
    console.log('all ships have been placed')
    setupGameloop();
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
  logStatus(playerGameboard, AIGameboard);
  renderBoards(playerGameboard, AIGameboard);
  checkGameOver();
}

const checkGameOver = () => {
  if (playerGameboard.areAllShipsSunk() || AIGameboard.areAllShipsSunk()) {
    logWinner(playerGameboard, AIGameboard);
    showEndScreen();
  }
}

export default start;