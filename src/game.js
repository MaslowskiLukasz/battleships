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
}

const placeShips = (board) => {
  ships.map((ship, index) => {
    const length = ship.length;
    board.addShip(0, index, length, false);
  });
}

export default start;