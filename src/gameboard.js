import shipFactory from "./ship";

function gameboardFactory() {
  let ships = [];
  let missed = [];
  let hits = [];

  const addShip = (x, y, length = 1, isVertical = false) => {
    const ship = shipFactory(length);

    if ((isVertical && y + length > 10) || (!isVertical && x + length > 10)) {
      throw('ship out of bounds');
    }

    if (isShipOverlapping({ x: x, y: y, ship: ship, isVertical: isVertical })) {
      throw('ships cannot overlap');
    }

    ships.push( {x: x, y: y, ship: ship, isVertical: isVertical} );
  }

  const isShipOverlapping = (currShip) => {
    const shipLength = currShip.ship.getLength() - 1;
    const newShipStartX = currShip.x;
    const newShipEndX = currShip.isVertical ? currShip.x : currShip.x + shipLength;
    const newShipStartY = currShip.y;
    const newShipEndY = currShip.isVertical ? currShip.y + shipLength : currShip.y; 

    for (const ship of ships) {
      const length = ship.ship.getLength() - 1;
      const shipStartX = ship.x;
      const shipEndX = ship.isVertical ? ship.x : ship.x + length;
      const shipStartY = ship.y;
      const shipEndY = ship.isVertical ? ship.y + length : ship.y;

      if (!(newShipStartX > shipEndX || newShipStartY > shipEndY ||
        newShipEndX < shipStartX || newShipEndY < shipStartY)) {
          return true;
      }
    }
    
    return false;
  }

  const receiveAttack = (x, y) => {
    const shipHit = ships.find((item) =>
      (
        item.isVertical ?
        checkVertical(x, y, item) :
        checkHorizontal(x, y, item)
      )
    );

    if(shipHit) {
      addHit(x, y);
      sendHitToShip(x, y, shipHit);
    } else {
      addMissed(x, y);
    }
  }

  const sendHitToShip = (x, y, item) => {
    if (item.isVertical) {
      item.ship.hit(y - item.y);
    } else {
      item.ship.hit(x - item.x);
    }
  }

  const checkVertical = (x, y, item) => {
    return (y >= item.y && y < item.y + item.ship.getLength()) && (item.x === x)
  }

  const checkHorizontal = (x, y, item) => {
    return (x >= item.x && x < item.x + item.ship.getLength()) && (item.y === y)
  }

  const areAllShipsSunk = () => {
    return ships.every((item) => item.ship.isSunk());
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
    areAllShipsSunk,
  }
}

export default gameboardFactory;
