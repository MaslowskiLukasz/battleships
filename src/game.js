import { initUI, renderShips, getCoords, logStatus, logWinner } from "./UIUtils";
import player from "./player"
import gameboardFactory from "./gameboard";
import ships from "./utils";

/* TODO
1. create players
2. create gameboards
3. place ships
  3.1 iterate over utils -> ships
    3.1.1 create ship
    3.1.2 get coordinates from UI / generate random for AI (can be done later)
    3.1.3 add ship to gameboard
4. until somebodys all ships are sunk
  4.1 get attack coords
  4.2 attack opponents gameboard
  4.3 switch player
*/

/*
game should invoke:
setup boards
init ship placement phase -> add listeners to place players ships
place AI ships randomly
init game phase -> add listeners for attacking
  on click player attacks
    update board
    check if all enemy ships are sunk
      if yes display game over
  AI attacks
    update board
    check if all player ships are sunk
      if yes display game over
*/
const player1 = player();
const AI = player();
const playerGameboard = gameboardFactory();
const AIGameboard = gameboardFactory();

const start = () => {
  initUI();
  initGame();
}

const initGame = () => {
  placeShipsTmp(AIGameboard);
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
  if (currentShipsNumber === ships.length) {
    console.log('all ships have been placed')
    setupGameloop();
  } else {
    playerGameboard.addShip(x, y, ships[currentShipsNumber].length);
  }

  renderShips(playerGameboard.getShips(), false);
}


const placeShipsTmp = (board) => {
  ships.map((ship, index) => {
    board.addShip(0, index, ship.length, false);
  });
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
  checkGameOver();
}

const checkGameOver = () => {
  if (playerGameboard.areAllShipsSunk() || AIGameboard.areAllShipsSunk()) {
    logWinner(playerGameboard, AIGameboard);
  }
}

export default start;