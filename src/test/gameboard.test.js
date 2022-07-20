import gameboardFactory from "../gameboard";
import ships from '../utils'

describe('gameboard factory testing', () => {
  test('gameboard factory returns something', () => {
    expect(gameboardFactory()).toBeDefined();
  });

  test('create ship at coordinates', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(1, 2, 3);
    expect(gameboard.getShips())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 1,
        y: 2,
      })
    ]));
  });

  test('create ship out of bounds - horizontal', () => {
    const gameboard = gameboardFactory();
    expect(() => gameboard.addShip(8, 0, 5))
    .toThrow('ship placement is not valid');
  });

  test('create ship out of bounds - vertical', () => {
    const gamebaord = gameboardFactory();
    expect(() => gamebaord.addShip(0, 8, 4, true))
    .toThrow('ship placement is not valid');
  });

  test('overlapping ships - horizontal', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(2, 6, 5);
    gameboard.addShip(2, 0, 5);
    expect(() => gameboard.addShip(1, 0, 3))
    .toThrow('ship placement is not valid');
  });

  test('overlapping ships - vertical', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(3, 3, 5);
    expect(() => gameboard.addShip(5, 2, 4, true))
    .toThrow('ship placement is not valid');
  });

  test('receiveAttack - adds miss to missed attacks - no ships on board (1)', () => {
    const  gameboard = gameboardFactory();
    gameboard.receiveAttack(0, 0);
    expect(gameboard.getMisses())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 0,
        y: 0,
      })
    ]));
  });

  test('receiveAttack - adds miss to missed attacks - ships on board (2)', () => {
    const  gameboard = gameboardFactory();
    gameboard.addShip(0, 1, 3);
    gameboard.addShip(5, 5, 2);
    gameboard.receiveAttack(2, 3);
    expect(gameboard.getMisses())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 2,
        y: 3,
      })
    ]));
  });

  test('receiveAttack - hit horizontal', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(0, 0, 3);
    gameboard.receiveAttack(1, 0);    
    expect(gameboard.getHits())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 1,
        y: 0,
      })
    ]));
  });

  test('receiveAttack - hit vertical', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(0, 0, 3, true);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.getHits())
    .toEqual(expect.arrayContaining([
      expect.objectContaining({
        x: 0,
        y: 1,
      })
    ]));
  });

  test('report if all ships have been sunk', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(0, 0, 2);
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    expect(gameboard.areAllShipsSunk()).toBe(true);
  });

  test('report if not all ships are sunk', () => {
    const gameboard = gameboardFactory();
    gameboard.addShip(0, 0, 2);
    gameboard.receiveAttack(0, 0);
    expect(gameboard.areAllShipsSunk()).toBe(false);
  });

  test('randomly place all ships', () => {
    const gamebaord = gameboardFactory();
    gamebaord.placeShipsRandomly(ships);
    expect(gamebaord.getShips().length).toBe(ships.length);
  });

  test('reset gameboard', () => {
    const gamebaord = gameboardFactory();
    gamebaord.addShip(0, 0, 5);
    gamebaord.addShip(0, 3, 4);
    gamebaord.receiveAttack(0, 0);
    gamebaord.receiveAttack(9, 9);

    gamebaord.reset();
    expect(gamebaord.getShips().length).toBe(0);
    expect(gamebaord.getMisses().length).toBe(0);
    expect(gamebaord.getHits().length).toBe(0);
  });

});