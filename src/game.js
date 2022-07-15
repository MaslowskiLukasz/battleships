import { initUI, renderShips } from "./UIUtils";
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
const player1 = player();
const AI = player();
const playerGameboard = gameboardFactory();
const AIGameboard = gameboardFactory();

const start = () => {
  initUI();
  addEventListeners();

  placeShips(playerGameboard);
  placeShips(AIGameboard);

  renderShips(AIGameboard.getShips());

  if (playerGameboard.areAllShipsSunk() || AIGameboard.areAllShipsSunk()) {
    logWinner(playerGameboard, AIGameboard);
  }
}

const addEventListeners = () => {
  const AIBoard = document.getElementById('ai-board');
  const areas = Array.from(AIBoard.querySelectorAll('button'));

  areas.map((area) => {
    area.addEventListener('click', attack);
  });
}

const logWinner = (playerGameboard, AIGameboard) => {
  if(playerGameboard.areAllShipsSunk()) {
    console.log('AI won');
    console.log(
      `Player hit: ${AIGameboard.getHits().length} times.
      AI hit: ${playerGameboard.getHits().length} times`
    );
  } else {
    console.log('Player won');
    console.log(
      `Player hit: ${AIGameboard.getHits().length} times.
      AI hit: ${playerGameboard.getHits().length} times`
    );
  }
}

const logStatus = () => {
  console.log(
    `Player hit: ${AIGameboard.getHits().length} times.
    Player missed: ${AIGameboard.getMisses().length} times`
  );

  console.log(
    `AI hit: ${playerGameboard.getHits().length} times.
    AI missed: ${playerGameboard.getMisses().length} times`
  );
}

const placeShips = (board) => {
  ships.map((ship, index) => {
    board.addShip(0, index, ship.length, false);
  });
}

const randomAttack = (player, enemyBoard) => {
  const { x, y } = player.generateNextMove();
  player.attack(x, y, enemyBoard);
}

const attack = (event) => {
  const area = event.target;
  const x = parseInt(area.getAttribute('x'));
  const y = parseInt(area.getAttribute('y'));

  player1.attack(x, y, AIGameboard);

  randomAttack(AI, playerGameboard);

  logStatus();
}

export default start;