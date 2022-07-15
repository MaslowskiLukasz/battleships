import initUI from "./UIUtils";
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
const start = () => {
  initUI();

  const player1 = player();
  const AI = player();
  const playerGameboard = gameboardFactory();
  const AIGameboard = gameboardFactory();

  placeShips(playerGameboard);
  placeShips(AIGameboard);

  let playersTurn = false;
  while (!playerGameboard.areAllShipsSunk() && !AIGameboard.areAllShipsSunk()) {
    if (playersTurn) {
      attack(player1, AIGameboard);
    } else {
      attack(AI, playerGameboard);
    }
    playersTurn = !playersTurn;
  }

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

const placeShips = (board) => {
  ships.map((ship, index) => {
    board.addShip(0, index, ship.length, false);
  });
}

const attack = (player, enemyBoard) => {
  const { x, y } = player.generateNextMove();
  player.attack(x, y, enemyBoard);
}

export default start;