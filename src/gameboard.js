import shipFactory from "./ship";

function gameboardFactory() {
  let ships = [];
  let missed = [];
  let hits = [];

  const addShip = (x, y, length = 1, isVertical = false) => {
    const ship = shipFactory(length);
    ships.push( {x: x, y: y, ship: ship, isVertical: isVertical} );
  }

  const receiveAttack = (x, y) => {
    if(ships.find((item) => item.isVertical ?
      checkVertical(x, y, item) :
      checkHorizontal(x, y, item) )) {
      addHit(x, y);
    } else {
      addMissed(x, y);
    }
  }

  const checkVertical = (x, y, item) => {
    return (y >= item.y && y < item.y + item.ship.getLength()) && (item.x === x)
  }

  const checkHorizontal = (x, y, item) => {
    return (x >= item.x && x < item.x + item.ship.getLength()) && (item.y === y)
  }

  const addMissed = (x, y) => missed.push( {x: x, y: y} );
  const addHit = (x, y) => hits.push( {x: x, y: y} );
  const getShips = () => [...ships];  
  const getMisses = () => [...missed];
  const getHits = () => [...hits];

  return {
    addShip,
    getShips,
    receiveAttack,
    getMisses,
    getHits,
  }
}

export default gameboardFactory;